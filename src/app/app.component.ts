import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated, // default behavior
})
export class AppComponent {
  pageActive: 'recipes' | 'shopping';

  page(page: 'recipes' | 'shopping') {
    this.pageActive = page;
  }
  title = 'test2';
}
