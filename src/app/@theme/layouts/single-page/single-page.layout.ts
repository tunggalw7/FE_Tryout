import { Component } from '@angular/core';

@Component({
  selector: 'ngx-single-page-layout',
  styleUrls: ['./single-page.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-layout-column class="content">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

    </nb-layout>
  `,
})
export class SinglePageComponent {}
