import { Component, inject, computed, input } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../../core/services/film.service';
import { DurationPipe } from '../../shared/pipes/duration.pipe';

@Component({
  selector: 'app-film-detail',
  imports: [DurationPipe],
  templateUrl: './film-detail.html',
  styleUrl: './film-detail.scss',
})
export class FilmDetail {
  private readonly router = inject(Router);
  private readonly filmService = inject(FilmService);
  readonly id = input.required<string>();

  readonly film = computed(() => this.filmService.getById(Number(this.id())));

  constructor() {
    this.filmService.load();
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
    onImageError(event: Event) {
  const img = event.target as HTMLImageElement;

  if (!img.src.includes('placehold.co')) {
    img.src = 'https://placehold.co/300x450?text=No+Image';
  }
}
}