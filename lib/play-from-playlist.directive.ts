import { Directive, HostListener, Input } from '@angular/core';
import { MusicPlayerService } from './music-player.service';

@Directive({
  selector: '[playFromPlaylist]'
})
export class PlayFromPlaylistDirective {
  @Input() song: any;

  constructor(private _musicPlayerService: MusicPlayerService) {}

  @HostListener('click', ['$event']) onClick() {
    this._musicPlayerService.playTrack(this.song.id);
  }
}
