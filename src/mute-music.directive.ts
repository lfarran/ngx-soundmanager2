import { Directive, HostListener } from '@angular/core';
import { MusicPlayerService } from './music-player.service';

@Directive({
  selector: '[muteMusic]'
})
export class MuteMusicDirective {

  constructor(private _musicPlayerService: MusicPlayerService) {}

  @HostListener('click', ['$event']) onClick() {
    this._musicPlayerService.mute();
  }
}
