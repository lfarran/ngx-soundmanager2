import { Directive, HostListener, Input } from '@angular/core';
import { MusicPlayerService } from './music-player.service';

@Directive({
  selector: '[playAll]'
})
export class PlayAllDirective {
  @Input() songs: Array<any>;
  @Input() play: boolean = true;

  constructor(private _musicPlayerService: MusicPlayerService) {}

  @HostListener('click', ['$event']) onClick() {
    this._musicPlayerService.clearPlaylist((/*data: any*/) => {
      for(let i = 0; i < this.songs.length; i++) {
        this._musicPlayerService.addTrack(this.songs[i]);
      }

      if (this.play) {
        //play first song
        this._musicPlayerService.play();
      }
    });
  }
}
