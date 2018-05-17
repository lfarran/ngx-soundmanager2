import { NgModule, ModuleWithProviders } from '@angular/core';

// directives
import { ClearPlaylistDirective } from './clear-playlist.directive';
import { DecreaseVolumeDirective } from './decrease-volume.directive';
import { IncreaseVolumeDirective } from './increase-volume.directive';
import { MusicPlayerDirective } from './music-player.directive';
import { MuteMusicDirective } from './mute-music.directive';
import { NextTrackDirective } from './next-track.directive';
import { PauseMusicDirective } from './pause-music.directive';
import { PlayAllDirective } from './play-all.directive';
import { PlayFromPlaylistDirective } from './play-from-playlist.directive';
import { PlayMusicDirective } from './play-music.directive';
import { PreviousTrackDirective } from './previous-track.directive';
import { RemoveFromPlaylistDirective } from './remove-from-playlist.directive';
import { RepeatMusicDirective } from './repeat-music.directive';
import { StopMusicDirective } from './stop-music.directive';


// pipes
import { HumanTimePipe } from './human-time.pipe';

// services
import { MusicPlayerService } from './music-player.service';

@NgModule({
  declarations: [
    // Directives
    ClearPlaylistDirective,
    DecreaseVolumeDirective,
    IncreaseVolumeDirective,
    MusicPlayerDirective,
    MuteMusicDirective,
    NextTrackDirective,
    PauseMusicDirective,
    PlayAllDirective,
    PlayFromPlaylistDirective,
    PlayMusicDirective,
    PreviousTrackDirective,
    RemoveFromPlaylistDirective,
    RepeatMusicDirective,
    StopMusicDirective,

    // Pipes
    HumanTimePipe
  ],
  exports: [
    // Directives
    ClearPlaylistDirective,
    DecreaseVolumeDirective,
    IncreaseVolumeDirective,
    MusicPlayerDirective,
    MuteMusicDirective,
    NextTrackDirective,
    PauseMusicDirective,
    PlayAllDirective,
    PlayFromPlaylistDirective,
    PlayMusicDirective,
    PreviousTrackDirective,
    RemoveFromPlaylistDirective,
    RepeatMusicDirective,
    StopMusicDirective,

    // Pipes
    HumanTimePipe
  ]
})
export class NgxSoundmanager2Module {
  constructor() {}
  static forRoot(setupOptions?: Object): ModuleWithProviders {
    return {
      ngModule: NgxSoundmanager2Module,
      providers: [
        MusicPlayerService,
        { provide: 'setupOptions', useValue: setupOptions }
      ]
    };
  }
}
