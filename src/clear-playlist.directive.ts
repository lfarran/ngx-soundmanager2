import { Directive, HostListener } from '@angular/core';
import { MusicPlayerService } from './music-player.service';

@Directive({
  selector: '[clearPlaylist]'
})
export class ClearPlaylistDirective {

  constructor(private _musicPlayerService: MusicPlayerService) {}

  @HostListener('click', ['$event']) onClick() {
    this._musicPlayerService.stop();
    this._musicPlayerService.setCurrentTrack(null);
    this._musicPlayerService.clearPlaylist(/*(data: any) => {}*/);
  }
}
