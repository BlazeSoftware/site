import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'custom-build',
})
export class CustomBuild {
  @Prop()
  name: string;

  card({ heading, subheading, body }) {
    return (
      <div class="u-letter-box-small">
        <div class="c-card">
          <header class="c-card__header">
            <h2 class="c-heading">
              {heading}
              <div class="c-heading__sub">{subheading}</div>
            </h2>
          </header>
          <div class="c-card__body">{body}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          You may want to theme or override so much of Blaze that you should really build a customised version. The best approach is to grab the code from GitHub, change the
          variables and mixins and build the toolkit yourself.
        </p>

        {[
          {
            heading: 'Step 1',
            subheading: 'Download',
            body: [
              <p class="c-paragraph">
                Clone{' '}
                <a class="c-link" href="https://github.com/BlazeSoftware/blaze">
                  the git repo:
                </a>
              </p>,
              <p class="c-paragraph">
                <blaze-demo
                  language="language-bash"
                  demo={false}
                  code={`git clone git@github.com:BlazeSoftware/css.git
git clone git@github.com:BlazeSoftware/atoms.git`}
                />
              </p>,
            ],
          },
          {
            heading: 'Step 2',
            subheading: 'Install',
            body: [
              <p class="c-paragraph">Install all node modules:</p>,
              <p class="c-paragraph">
                <blaze-demo language="language-bash" demo={false} code={`nvm use && npm i`} />
              </p>,
            ],
          },
          {
            heading: 'Step 3',
            subheading: 'Develop',
            body: [
              <p class="c-paragraph">Each pacakge should be developed independantly.</p>,
              <p class="c-paragraph">You can make changes to the CSS and Atoms repos separately using the following command:</p>,
              <p class="c-paragraph">
                <blaze-demo language="language-bash" demo={false} code={`npm start`} />
              </p>,
              <p class="c-paragraph">There is a demo output per repo, that will be served on localhost and will update automatically as changes are detected.</p>,
            ],
          },
          {
            heading: 'Step 4',
            subheading: 'Test',
            body: [
              <p class="c-paragraph">Every component should have tests.</p>,
              <p class="c-paragraph">The CSS is linted and the Atoms are unit and snapshot tested.</p>,
              <p class="c-paragraph">
                <blaze-demo language="language-bash" demo={false} code={`npm run test`} />
              </p>,
            ],
          },
        ].map(step => this.card(step))}
      </page-template>
    );
  }
}
