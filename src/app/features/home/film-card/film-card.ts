import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from '../../../core/models/film.model';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  readonly film = input.required<Film>();
  readonly favoriteToggled = output<number>();

  onFavoriteClick(event: Event): void {
    event.stopPropagation();
    this.favoriteToggled.emit(this.film().id);
  }

  onImageError(event: Event) {
  const img = event.target as HTMLImageElement;

  if (!img.src.includes('placehold.co')) {
    img.src = 'https://placehold.co/300x450?text=No+Image';
  }
}
}
