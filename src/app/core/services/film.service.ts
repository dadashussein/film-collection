import { Injectable, signal, computed } from '@angular/core';
import { Film } from '../models/film.model';

@Injectable({ providedIn: 'root' })
export class FilmService {
  readonly films = signal<Film[]>([]);
  readonly favorites = computed(() => this.films().filter((f) => f.isFavorite));

  async load(): Promise<void> {
    if (this.films().length > 0) return;
    
    const response = await fetch('/films.json');
    const data = await response.json();
    this.films.set(data);
  }

  getById(id: number): Film | undefined {
    return this.films().find((f) => f.id === id);
  }

  toggleFavorite(id: number): void {
    this.films.update((films) =>
      films.map((f) => (f.id === id ? { ...f, isFavorite: !f.isFavorite } : f))
    );
  }
}