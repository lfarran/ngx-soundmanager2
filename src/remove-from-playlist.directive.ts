import { Directive, HostListener, Input } from '@angular/core';
import { MusicPlayerService } from './music-player.service';

@Directive({
  selector: '[removeFromPlaylist]'
})
export class RemoveFromPlaylistDirective {
  @Input() song: any;
  @Input() index: number;

  constructor(private _musicPlayerService: MusicPlayerService) {}

  @HostListener('click', ['$event']) onClick() {
    console.log('remove:', this.index);
    this._musicPlayerService.removeSong(this.song.id, this.index);
  }
}
