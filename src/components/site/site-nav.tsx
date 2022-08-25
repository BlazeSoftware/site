import { h, Component, Method, State } from '@stencil/core';
import { allRoutes } from '../routes/routes';
import Route from '../routes/Route';

@Component({
  tag: 'site-nav',
})
export class SiteNav {
  @State()
  isOpen: boolean;

  @Method()
  async show() {
    this.isOpen = true;
  }

  @Method()
  async close() {
    this.isOpen = false;
  }

  navSection({ title, description, routes }: { title: string; description: string; routes: Array<Route> }) {
    const navLinks = (routes: Array<Route>) => {
      return routes.map(route => (
        <li class="c-list__item u-letter-box u-letter-box-xsmall">
          <stencil-route-link url={route.url} onClick={() => this.close()}>
            {route.props.name}
          </stencil-route-link>
        </li>
      ));
    };

    return (
      <section class="u-letter-box-medium">
        <h3 aria-label={`${title}, ${description}`} class="c-heading u-large">
          {title}
          <div class="c-heading__sub">{description}</div>
        </h3>
        <ul class="c-list c-list--unstyled">{navLinks(routes)}</ul>
      </section>
    );
  }

  render() {
    const drawerVisibleClass = this.isOpen ? 'o-drawer--visible' : '';
    const overlayVisibleClass = this.isOpen ? 'c-overlay--visible' : '';

    return (
      <div class="u-text">
        <button aria-label="Open navigation menu" class="c-button c-button--nude o-page-header__button o-page-header__button--left" onClick={() => this.show()}>
          <i class="fas fa-bars fa-lg" />
        </button>
        <div aria-hidden class={`c-overlay c-overlay--dismissible ${overlayVisibleClass}`} onClick={() => this.close()} />
        <aside class={`o-drawer o-drawer--left ${drawerVisibleClass} u-highest`} style={{ width: '320px' }}>
          <div class="c-card">
            <div class="c-card__body">
              <nav aria-label="Navigation panel open">
                <button aria-label="Close navigation" class="c-button c-button--nude c-button--close" onClick={() => this.close()}>
                  <i aria-hidden class="fas fa-times" />
                </button>
                <section>
                  <h3 aria-label="Open source, links to the source code" class="c-heading u-large">
                    Open Source
                  </h3>
                  <ul class="c-list c-list--unstyled">
                    <li class="c-list__item u-letter-box u-letter-box-xsmall">
                      <a class="c-link" href="https://github.com/BlazeSoftware/css">
                        <i class="fab fa-css3-alt" /> CSS
                      </a>
                    </li>
                    <li class="c-list__item u-letter-box u-letter-box-xsmall">
                      <a class="c-link" href="https://github.com/BlazeSoftware/atoms">
                        <i class="fas fa-atom" /> Atoms
                      </a>
                    </li>
                  </ul>
                </section>

                {allRoutes.map(area => this.navSection(area))}
              </nav>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}
