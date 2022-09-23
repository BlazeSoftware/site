import { h, Component } from '@stencil/core';

@Component({
  tag: 'site-header',
  styleUrl: 'site-header.scss',
})
export class SiteHeader {
  render() {
    return (
      <header class="o-page-header o-container o-container--large">
        <a href="#main" class="c-skip-link c-link">
          Skip to main content
        </a>
        <site-nav />
        <div class="u-centered u-letter-box-small">
          <a aria-label="Blaze Home Page" href="/" onFocus={() => document.querySelector('site-nav').close()}>
            <i aria-hidden class="o-page-logo fa-solid fa-fire-flame-curved fa-4x" />
          </a>
        </div>
      </header>
    );
  }
}
