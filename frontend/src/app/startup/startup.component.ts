import {Component, EventEmitter, OnInit, Output} from '@angular/core';

/**
 * This component controls the intro animation on the site. Most of the heavy lifting is done by CSS, but some
 * transitioning is handled here. This will take the site logo fade it in, move it to the top left corner, and then
 * clean up as the rest of the site is faded in.
 */
@Component({
    selector: 'app-startup',
    templateUrl: './startup.component.html',
    styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit {
  /** Notify the main page that the animation has completed and that it is time to fade in the rest of the site */
  @Output() onAnimationComplete:EventEmitter<void> = new EventEmitter<void>();

  /** Should the logo now fade out? */
  fadeOut:boolean;

  /** The name of the last CSS animation that ran before the site can fade in. */
  private readonly finalEventName:string = "slide-to";

  /** The timeout for backup finishing, canceled when the animation finishes */
  private timeout:any;

  ngOnInit() {
    //make sure the animation eventually finishes, in case for some reason the animation doesn't work
    this.timeout = setTimeout(() => {
      if(!this.fadeOut) {
        this.dispatchEvent();
      }
    }, 3000);
  }

  /**
   * Called when each animation on the logo finishes
   * @param $event the event that triggered this
   */
  onAnimation($event:AnimationEvent) {
    //if this is the correct animation then notify
    if($event.animationName.endsWith(this.finalEventName)) {
      this.dispatchEvent();
    }
  }

  /** Notify the main page that the animation has completed and that it is time to fade in the rest of the site */
  private dispatchEvent() {
    this.onAnimationComplete.emit();
    this.fadeOut = true;

    //kill the timeout if it hasn't finished yet
    clearTimeout(this.timeout);
  }
}
