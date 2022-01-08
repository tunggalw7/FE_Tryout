import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbInputModule,
  NbRadioModule,
  NbCheckboxModule,
  NbIconModule,
  NbDialogModule,
  NbDatepickerModule,
  NbTooltipModule,
  NbSpinnerModule,
  NbPopoverModule,
} from '@nebular/theme';
import { ChartModule } from 'angular2-chartjs';
import { ThemeModule } from '../../@theme/theme.module';
import { DataTablesModule } from 'angular-datatables';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SoalRoutingModule } from './soal-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SoalComponent } from './soal.component';
import { ListSoalComponent } from './list-soal/list-soal.component';
import { AddEditSoalComponent } from './add-edit-soal/add-edit-soal.component';
import { DeleteSoalComponent } from './delete-soal/delete-soal.component';

@NgModule({
  imports: [
    NbPopoverModule,
    ReactiveFormsModule,
    FormsModule,
    NbCardModule,
    NbListModule,
    SoalRoutingModule,
    ThemeModule,
    DataTablesModule,
    NbTooltipModule,
    NbMenuModule,
    NbLayoutModule,
    ChartModule,
    NbButtonModule,
    NbSelectModule,
    NbInputModule,
    NbRadioModule,
    NbCheckboxModule,
    NbIconModule,
    NbDialogModule,
    NbDatepickerModule,
    NbSpinnerModule,
    NgxSkeletonLoaderModule,
    NgxDatatableModule,
    EditorModule,
  ],
  declarations: [
    SoalComponent,
    ListSoalComponent,
    AddEditSoalComponent,
    DeleteSoalComponent
  ],
  providers: [
    // NbDialogService
  ],
})
export class SoalModule {
}
