import { Component, Input } from '@angular/core';

@Component({
  selector: 'copyright',
  template: `@{{name}}`,
  styles: [`h1 { font-family: Lato; }`]
})
export class CopyrightComponent {
  @Input() name = '';
}
