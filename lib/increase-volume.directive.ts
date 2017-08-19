import { Directive, HostListener, Input } from '@angular/core';
import { MusicPlayerService } from './music-player.service';

@Directive({
  selector: '[increaseVolume]'
})
export class IncreaseVolumeDirective {
  constructor(private _musicPlayerService: MusicPlayerService) {}

  @HostListener('click', ['$event']) onClick() {
    this._musicPlayerService.adjustVolume(true);
  }
}
