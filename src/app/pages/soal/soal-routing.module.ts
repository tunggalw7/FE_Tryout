import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SoalComponent } from './soal.component';
import { ListSoalComponent } from './list-soal/list-soal.component';

const routes: Routes = [{
  path: '',
  component: SoalComponent,
  children: [
    {
      path: '',
      component: ListSoalComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoalRoutingModule {
}
