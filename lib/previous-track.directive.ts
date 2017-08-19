import { Directive, HostListener } from '@angular/core';
import { MusicPlayerService } from './music-player.service';

@Directive({
  selector: '[previousTrack]'
})
export class PreviousTrackDirective {

  constructor(private _musicPlayerService: MusicPlayerService) {}

  @HostListener('click', ['$event']) onClick() {
    this._musicPlayerService.prevTrack();
  }
}
