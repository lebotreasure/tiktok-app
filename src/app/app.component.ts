import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <div *ngIf="windowInnerWidth > 600; else mobile">
    <app-desktop-page></app-desktop-page>
  </div> -->

  <!-- <ng-template #mobile>
    <router-outlet></router-outlet>
  </ng-template> -->
  `,
  styles: [``]
})
export class AppComponent {
  title = 'tiktok';

  windowInnerWidth!: number

  ngOnInit() {
    this.windowInnerWidth = window.innerWidth
  }
}