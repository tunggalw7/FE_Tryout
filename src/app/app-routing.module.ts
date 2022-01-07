import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './_helpers/auth.guard';

export const routes: Routes = [
  {
    path: 'pages',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'test',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./pages/test-modulitas/test-modulitas.module')
      .then(m => m.TestModulitasModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module')
      .then(m => m.NgxAuthModule),
  },
  {
    path: '',
    loadChildren: () => import('./pages/landing-page/landing-page.module')
      .then(m => m.LandingPageModule),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
