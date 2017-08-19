import { Directive, HostListener, Input } from '@angular/core';
import { MusicPlayerService } from './music-player.service';

@Directive({
  selector: '[decreaseVolume]'
})
export class DecreaseVolumeDirective {
  constructor(private _musicPlayerService: MusicPlayerService) {}

  @HostListener('click', ['$event']) onClick() {
    this._musicPlayerService.adjustVolume(false);
  }
}
