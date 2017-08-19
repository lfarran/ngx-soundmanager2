import { Directive, HostListener, Input } from '@angular/core';
import { MusicPlayerService } from './music-player.service';

@Directive({
  selector: '[musicPlayer]'
})
export class MusicPlayerDirective {
  @Input() musicPlayer: string;
  @Input() song: any;

  constructor(private _musicPlayerService: MusicPlayerService) {}

  @HostListener('click', ['$event']) onClick() {
    let trackId: any;
    if(this.song) {
      trackId = this._musicPlayerService.addTrack(this.song);

      if(this.musicPlayer === 'play') {
        this._musicPlayerService.playTrack(trackId);
      }
    }
  }
}
