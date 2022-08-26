import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'variables-all',
})
export class AllVariables {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          A list of all the CSS variables you can change to customise Blaze at runtime can be found in the{' '}
          <a class="c-link" target="_blank" href="https://github.com/BlazeSoftware/css/blob/main/src/scss/_variables.scss">
            Blaze Github repo
          </a>
          .
        </p>
      </page-template>
    );
  }
}
