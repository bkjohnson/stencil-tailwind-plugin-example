import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  // NOTE: We're using scoped CSS instead of the shadow DOM.
  shadow: false,
  scoped: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        {/* NOTE: the `font-bold` class is also in the global stylesheet because it's used in
            an 11ty template, so we don't strictly need it to be in the component's styles */}
        Hello, World! I'm <span class="font-bold">{this.getText()}</span>
      </div>
    );
  }
}
