export class MusicPlayerEventConstants {
  public static get ANGULAR_PLAYER_READY(): string { return 'angularPlayer:ready'; }
  //public static get CURRENT_TRACK_DURATION(): string { return 'currentTrack:duration'; }
  //public static get CURRENT_TRACK_POSITION(): string { return 'currentTrack:position'; }
  public static get MUSIC_IS_PLAYING(): string { return 'music:isPlaying'; }
  public static get MUSIC_MUTE(): string { return 'music:mute'; }
  public static get MUSIC_REPEAT(): string { return 'music:repeat'; }
  public static get MUSIC_VOLUME(): string { return 'music:volume'; }
  public static get PLAYER_PLAYLIST(): string { return 'player:playlist'; }
  public static get SOUND_MANAGER_READY(): string { return 'Sound manager ready!'; }
  public static get TRACK_ID(): string { return 'track:id'; }
  public static get TRACK_LOADED(): string { return 'track:loaded'; }
  //public static get TRACK_PROGRESS(): string { return 'track:progress'; }
}
