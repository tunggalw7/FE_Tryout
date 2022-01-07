import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'cabang',
      loadChildren: () => import('./cabang/cabang.module')
        .then(m => m.CabangModule),
    },
    {
      path: 'jurusan-universitas',
      loadChildren: () => import('./jurusan-universitas/jurusan-universitas.module')
        .then(m => m.JurusanUniversitasModule),
    },
    {
      path: 'siswa',
      loadChildren: () => import('./siswa/siswa.module')
        .then(m => m.SiswaModule),
    },
    {
      path: 'universitas',
      loadChildren: () => import('./universitas/universitas.module')
        .then(m => m.UniversitasModule),
    },
    {
      path: 'users',
      loadChildren: () => import('./users/users.module')
        .then(m => m.UsersModule),
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module')
        .then(m => m.DashboardModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard/home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
