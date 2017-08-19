import { Directive, HostListener, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { MusicPlayerService } from './music-player.service';

@Directive({
  selector: '[repeatMusic]'
})
export class RepeatMusicDirective implements OnInit, OnDestroy {

  repeat: boolean;

  // subscriptions
  private _musicPlayerRepeatSubscription: any;

  constructor(private _musicPlayerService: MusicPlayerService,
              private _element: ElementRef) {}

  ngOnInit() {
    this.repeat = this._musicPlayerService.getRepeatStatus();
    this.highlight();

    // Subscribe for repeat changes to update bindings
    this._musicPlayerRepeatSubscription = this._musicPlayerService.musicPlayerRepeatEventEmitter
      .subscribe((event: any) => {
        this.repeat = event.data;
        this.highlight();
      });
  }

  ngOnDestroy() {
    this._musicPlayerRepeatSubscription.unsubscribe();
  }

  /**
   * Element click event handler
   */
  @HostListener('click', ['$event']) onClick() {
    this._musicPlayerService.repeatToggle();
  }

  /**
   * Change background color of element based on repeat state
   */
  private highlight(): void {
    this._element.nativeElement.style.backgroundColor = this.repeat ? 'green' : 'red';
  }
}
