import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { NbToastrService } from '@nebular/theme';
import { MasterService } from "../../../_services/master.service";
import * as QuillNamespace from 'quill';
let Quill: any = QuillNamespace;
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'add-edit-soal',
  styleUrls: ['./add-edit-soal.component.scss'],
  templateUrl: './add-edit-soal.component.html',
})

export class AddEditSoalComponent implements OnDestroy, OnInit {
  AddEditForm: FormGroup;
  dataForm: any;
  baseService = "core/cabang";
  kelasService = "core/kelas-all";
  selectedMatpel: [];
  selectedKelompok: [];
  submitted : Boolean = false; 
  submitLoading: Boolean = false;
  type: string = 'Add';
  action : string = 'Save';
  selectedOption: string;
  test = ["a","b"];
  listKelompok = [{"value":"TPS","text":"TPS"},{"value":"Saintek","text":"Saintek"},{"value":"Soshum","text":"Soshum"}];
  listMatpel = [{"text" : "PU", "value" : "PU"},{"text" : "PPU", "value" : "PPU"},{"text" : "PBM", "value" : "PBM"},{"text" : "MTK", "value" : "MTK"},
  {"text" : "FIS", "value" : "FIS"},{"text" : "GEO", "value" : "GEO"},{"text" : "PPU", "value" : "EKO"}];
  modules = {
    toolbar: [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    [{ 'header': 1 }, { 'header': 2 }], // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
    [{ 'direction': 'rtl' }], // text direction
    [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean'], // remove formatting button
    ['link', 'image'], // link and image, video
    ],
    imageResize: true // for image resize
    };
  constructor(
    protected ref: NbDialogRef<AddEditSoalComponent>,
    private formBuilder: FormBuilder,
    private masterService: MasterService,
    private toastrService: NbToastrService
  ) {}

  ngOnInit() {
    this.AddEditForm = this.formBuilder.group({
      kelompok: ['', Validators.required],
      matpel: ['', Validators.required],
      nomer: ['', Validators.required],
      question: ['', Validators.required],
      answer: ['', Validators.required],
      jawaban_benar: ['', Validators.required],
    });

    // if (this.dataForm){     
    //   this.type = 'Edit';
    //   this.action = 'Update'; 
    //   this.AddEditForm.patchValue({
    //     nama_cabang : this.dataForm.nama_cabang
    //   })
    // }
  }
  
  get f() { return this.AddEditForm.controls; }

  onCancel() {
    this.ref.close();
  }

  ngOnDestroy() { }
 
  onSubmit(formData) {
    this.submitted = true;
    this.submitLoading = true;

    if (this.AddEditForm.invalid) {
      this.submitLoading = false;
      return;    
    } 
    
    if (this.dataForm) this.onEditForm(formData);
    else this.onCreateForm(formData);    
  }

  onCreateForm(dataPost){
      const param = {
        "nama_cabang": dataPost.nama_cabang,
        "kelas": dataPost.kelas
      }

      this.masterService.add(this.baseService, param).subscribe(
        res => {
            if (res['success']){                
                this.showToast('top-right', 'success', 'You have successfully created a new cabang.');
                this.ref.close({'success' : true});
            } else {
              this.showToast('top-right', 'danger', 'Something went wrong, please try again later.');
            }
        },
        err => {
          this.showToast('top-right', 'danger', 'Something went wrong, please try again later.');
        },
      );      
  }

  onEditForm(dataPost){
      const param = {
        "nama_cabang": dataPost.nama_cabang,
        "kelas": dataPost.kelas
      }

      this.masterService.edit(this.baseService, param, this.dataForm.id).subscribe(
        res => {
            if (res['success']){                
                this.showToast('top-right', 'success', 'You have successfully updated a cabang.');
                this.ref.close({'success' : true});
            } else {
              this.showToast('top-right', 'danger', 'Something went wrong, please try again later.');
            }
        },
        err => {
          this.showToast('top-right', 'danger', 'Something went wrong, please try again later.');
        },
      );      
  }  
  
  showToast(position, status, messages) {
    this.toastrService.show(
      '',
      messages,
      { position, status });
  }
}