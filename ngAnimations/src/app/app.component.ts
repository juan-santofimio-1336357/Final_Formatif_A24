import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { bounce, shakeX, tada } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger("shake", [transition("* => *", useAnimation(shakeX))]),
    trigger("bounce", [transition("* => *", useAnimation(bounce))]),
    trigger("tada", [transition("* => *", useAnimation(tada))]),
  ],
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'ngAnimations';

  rotate = false;

  shake = false;
  bounce = false;
  tada = false;
  constructor() {
  }
  animerUneFois() {
    this.shake = true;
    setTimeout(() => { this.shake = false; }, 2000);

    this.bounce = true;
    setTimeout(() => { this.bounce = false; }, 4000);

    this.tada = true;
    setTimeout(() => { this.tada = false; }, 3000);
  }

  animerEnBoucle() {
    this.shake = true;

    this.bounce = true;

    this.tada = true;

  }
  tourner() {
    if (this.rotate == false) {
      this.rotate = true;
      setTimeout(() => { this.rotate = false; }, 2000);
    }
  }
}
