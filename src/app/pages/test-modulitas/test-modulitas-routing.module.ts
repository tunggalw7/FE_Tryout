import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TestModulitasComponent } from './test-modulitas.component';
import { KelompokComponent } from './kelompok/kelompok.component';
import { PanduanComponent } from './panduan/panduan.component';
import { SoalComponent } from './soal/soal.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [{
  path: '',
  component: TestModulitasComponent,
  children: [
    {
      path: '',
      component: CourseComponent,
    },
    {
      path: 'kelompok',
      component: KelompokComponent,
    },
    {
      path: 'panduan',
      component: PanduanComponent,
    },
    {
      path: 'soal',
      component: SoalComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestModulitasRoutingModule {
}
