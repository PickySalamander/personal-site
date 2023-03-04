import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent {
  @Output() onAnimationComplete:EventEmitter<void> = new EventEmitter<void>();

  fadeOut:boolean;

  private readonly finalEventName:string = "slide-to";

  onAnimation($event:AnimationEvent) {
    if($event.animationName == this.finalEventName) {
      this.onAnimationComplete.emit();
      this.fadeOut = true;
    }
  }
}
