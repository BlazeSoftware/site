import { h, Component } from '@stencil/core';

@Component({
  tag: 'sponsor-button',
})
export class SponsorButton {
  render() {
    return (
      <a
        href="https://github.com/sponsors/BlazeSoftware"
        class="c-button c-button--brand c-button--ghost c-button--rounded">
        <span class="c-button__icon-left" aria-hidden>
          <i class="far fa-heart" style={{ color: '#ea4aaa' }} />
        </span>
        Sponsor
      </a>
    );
  }
}
