import { h, Component, Method, State, Prop } from '@stencil/core';

@Component({
  tag: 'themer-panel',
  styleUrl: 'themer-panel.scss',
})
export class ThemerPanel {
  drawerRef: any;

  @Prop()
  variables: string[];

  @State()
  isOpen: boolean;

  @Method()
  async show() {
    this.drawerRef.show();
  }

  @Method()
  async close() {
    this.drawerRef.close();
  }

  updateCSSVariables(variable: string, e) {
    document.documentElement.style.setProperty(variable, e.target.value);
  }

  renderForm() {
    return this.variables.map(variable => {
      const currentValue = getComputedStyle(document.documentElement).getPropertyValue(variable);

      return (
        <label class="c-label o-form-element">
          <code class="u-code">{variable}</code>
          <input class="c-field c-field--label u-text--mono" value={currentValue} onChange={e => this.updateCSSVariables(variable, e)} spellcheck={false} />
        </label>
      );
    });
  }

  render() {
    return [
      <button aria-label="Customise component variables" class="c-button c-button--ghost u-text--loud" onClick={() => this.show()}>
        <span class="u-gradient-text">Customise this component</span>
      </button>,
      <blaze-drawer position="right" ref={ref => (this.drawerRef = ref)}>
        <blaze-card>
          <blaze-card-header>
            <h2 class="c-heading u-xlarge">
              <span class="u-gradient-text">Variables</span>
              <div class="c-heading__sub">Customise this component</div>
            </h2>
          </blaze-card-header>
          <blaze-card-body>{this.renderForm()}</blaze-card-body>
          <blaze-card-footer>
            <div class="c-input-group">
              <button class="c-button c-button--block c-button--brand c-button--block" onClick={() => this.close()}>
                Done
              </button>
            </div>
          </blaze-card-footer>
        </blaze-card>
      </blaze-drawer>,
    ];
  }
}
