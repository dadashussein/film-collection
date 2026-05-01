import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { FilmCard } from './film-card/film-card';
import { AutofocusDirective } from '../../shared/directives/autofocus.directive';

@Component({
  selector: 'app-home',
  imports: [FilmCard, AutofocusDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private readonly filmService = inject(FilmService);

  readonly searchQuery = signal('');

  readonly filteredFilms = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    return this.filmService.films().filter((f) =>
      f.title.toLowerCase().includes(query)
    );
  });

  ngOnInit(): void {
    this.filmService.load();
  }

  onSearch(event: Event): void {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  onFavoriteToggled(id: number): void {
    this.filmService.toggleFavorite(id);
  }
}
