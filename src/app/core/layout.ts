import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Breadcrumbs } from './components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-layout',
  imports: [Header, Breadcrumbs, RouterOutlet, Footer],
  template: `
    <div class="layout">
      <app-header />
      <app-breadcrumbs />
      <main class="layout__content">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styles: `
    .layout {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .layout__content {
      flex: 1;
      padding: 1.5rem;
    }
  `,
})
export class Layout {}
