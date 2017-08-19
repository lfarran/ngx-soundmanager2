import { Directive, HostListener } from '@angular/core';
import { MusicPlayerService } from './music-player.service';

@Directive({
  selector: '[stopMusic]'
})
export class StopMusicDirective {

  constructor(private _musicPlayerService: MusicPlayerService) {}

  @HostListener('click', ['$event']) onClick() {
    this._musicPlayerService.stop();
  }
}
