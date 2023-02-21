import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideComponentRouter } from '@signal-router/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideComponentRouter()
  ]
}).catch((err) => console.error(err));
