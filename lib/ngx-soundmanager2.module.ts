import { NgModule, ModuleWithProviders } from '@angular/core';

// directives
import {
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
  StopMusicDirective
} from './ngx-soundmanager2';

// pipes
import { HumanTimePipe } from './ngx-soundmanager2';

// services
import { MusicPlayerService } from './ngx-soundmanager2';

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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxSoundmanager2Module,
      providers: [
        MusicPlayerService
      ]
    };
  }
}
