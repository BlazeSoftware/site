import { h, Component } from '@stencil/core';

@Component({
  tag: 'site-name',
  styleUrl: 'site-name.scss',
})
export class SiteName {
  render() {
    return (
      <a aria-label="Blaze Home Page" href="/" class="c-site-name">
        <span class="c-site-name__highlight">Blaze</span> UI
      </a>
    );
  }
}
