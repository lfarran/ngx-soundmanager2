import { Directive, HostListener } from '@angular/core';
import { MusicPlayerService } from './music-player.service';

@Directive({
  selector: '[nextTrack]'
})
export class NextTrackDirective {

  constructor(private _musicPlayerService: MusicPlayerService) {}

  @HostListener('click', ['$event']) onClick() {
    this._musicPlayerService.nextTrack();
  }
}
