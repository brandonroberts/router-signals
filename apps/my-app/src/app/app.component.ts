import { Component } from '@angular/core';
import {
  LinkTo,
  RouteComponent,
  RouteComponentTemplate,
  RouterComponent,
} from '@signal-router/router';
import { AboutComponent } from './about.component';

@Component({
  standalone: true,
  imports: [
    RouterComponent,
    RouteComponent,
    RouteComponentTemplate,
    AboutComponent,
    LinkTo
  ],
  selector: 'signal-router-root',
  template: `
    <a linkTo="/">Home</a> 
    | <a linkTo="/about">About</a> 
    | <a linkTo="/product/1">Product 1</a>
    | <a linkTo="/product/2">Product 2</a>
    
    <p>
      <router>
        <route path="/product/:id" [load]="components.product"> </route>
        <route path="/about" [load]="components.about"> </route>
        <route path="/" [exact]="true" [load]="components.home"> </route>
      </router>
    </p>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  components = {
    about: () => import('./about.component').then((m) => m.AboutComponent),
    home: () => import('./home.component').then((m) => m.HomeComponent),
    product: () => import('./product.component').then(m => m.ProductComponent)
  };
}
