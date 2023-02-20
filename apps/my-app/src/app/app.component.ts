import { NxWelcomeComponent } from './nx-welcome.component';
import { Component } from '@angular/core';
import { signal } from '@signal-router/signals';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent],
  selector: 'signal-router-root',
  template: `
    {{ counter() }}
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter = signal(1);
  title = 'my-app';
}
