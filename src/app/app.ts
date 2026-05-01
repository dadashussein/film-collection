import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: ` <div class="content">
      <router-outlet></router-outlet>
    </div>
`,
})
export class App {
  protected readonly title = signal('film-collection');
}
