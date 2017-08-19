import { Directive, HostListener } from '@angular/core';
import { MusicPlayerService } from './music-player.service';

@Directive({
  selector: '[pauseMusic]'
})
export class PauseMusicDirective {

  constructor(private _musicPlayerService: MusicPlayerService) {}

  @HostListener('click', ['$event']) onClick() {
    this._musicPlayerService.pause();
  }
}
