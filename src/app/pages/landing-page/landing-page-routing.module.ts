import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageGuard } from '../../_helpers/page.guard';
import { HomeComponent } from './home/home.component';
import { JurusanComponent } from './jurusan/jurusan.component';
import { KampusComponent } from './kampus/kampus.component';
import { KarirComponent } from './karir/karir.component';
import { LandingPageComponent } from './landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [ 
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'jurusan',
        component: JurusanComponent
      },
      {
        path: 'karir',
        component: KarirComponent
      },
      {
        path: 'kampus',
        component: KampusComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
