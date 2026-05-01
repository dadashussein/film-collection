import { Component, inject, signal, computed } from '@angular/core';
import { Router, NavigationEnd, RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilmService } from '../../services/film.service';

export interface Breadcrumb {
  label: string;
  url: string;
  clickable: boolean;
}

@Component({
  selector: 'app-breadcrumbs',
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class Breadcrumbs {
  private readonly router = inject(Router);
  private readonly filmService = inject(FilmService);
  private readonly currentUrl = signal<string>(this.router.url);

  readonly breadcrumbs = computed<Breadcrumb[]>(() => {
    const url = this.currentUrl().split('?')[0];
    const filmMatch = url.match(/^\/films\/(\d+)$/);

    if (filmMatch) {
      const filmId = Number(filmMatch[1]);
      const film = this.filmService.getById(filmId);
      const filmTitle = film?.title ?? `Film ${filmId}`;
      return [
        { label: 'Home', url: '/home', clickable: true },
        { label: filmTitle, url: url, clickable: false },
      ];
    }

    const segments = url.split('/').filter(Boolean);

    if (segments.length === 0) {
      return [{ label: 'Home', url: '/home', clickable: false }];
    }

    let accumulated = '';
    return segments.map((segment, index) => {
      accumulated += `/${segment}`;
      const isLast = index === segments.length - 1;
      return {
        label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        url: accumulated,
        clickable: !isLast,
      };
    });
  });

  constructor() {
    this.filmService.load();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.set(event.urlAfterRedirects);
      }
    });
  }
}
