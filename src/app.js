import 'jquery';
import 'kendo-ui-core/js/kendo.button';

export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  attached() {
    $(this.button).kendoButton();
  }
}
