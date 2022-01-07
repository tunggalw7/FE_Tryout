import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbIconModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { TestimoniComponent } from './testimoni/testimoni.component';
import { HomeComponent } from './home/home.component';
import { ScriptLoaderService } from './script-loader.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    LandingPageRoutingModule,
    NbIconModule,
    NbAuthModule,
    NbEvaIconsModule,
    NbCardModule,
    NbLayoutModule,
    NbSelectModule,
    NbSpinnerModule,
  ],
  declarations: [
    LandingPageComponent,
    TestimoniComponent,
    HomeComponent
  ],
  providers: [
    ScriptLoaderService
  ],
})
export class LandingPageModule { }
