import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { NbToastrService } from '@nebular/theme';
import { MasterService } from "../../../_services/master.service";

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
  tinymceInit = {
    skin_url: '/assets/tinymce/skins/lightgray',
    content_css: '/assets/tinymce/skins/lightgray/skin.min.css',
    external_plugins: {'image':'/assets/tinymce/plugins/image/plugin.js'},
    height: 300,
    plugins: 'image',
    image_title: true,
    automatic_uploads: true,
    // toolbar: 'undo redo | link image | code',
    toolbar:'undo redo | styleselect | bold italic strikethrough forecolor backcolor | link image | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent rtl ltr | removeformat',

    image_advtab : true,
    file_picker_types: 'image',
    file_picker_callback : function(cb, value, meta) {
      var input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
  
      // Note: In modern browsers input[type="file"] is functional without 
      // even adding it to the DOM, but that might not be the case in some older
      // or quirky browsers like IE, so you might want to add it to the DOM
      // just in case, and visually hide it. And do not forget do remove it
      // once you do not need it anymore.
  
      input.onchange = function() {
        var file = input.files[0];
  
        var reader = new FileReader();
        reader.onload = function () {
          // Note: Now we need to register the blob in TinyMCEs image blob
          // registry. In the next release this part hopefully won't be
          // necessary, as we are looking to handle it internally.
          var id = 'blobid' + (new Date()).getTime();
          var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
          var base64 = reader.result.toString().split(',')[1];
          var blobInfo = blobCache.create(id, file, base64);
          blobCache.add(blobInfo);
  
          // call the callback and populate the Title field with the file name
          cb(blobInfo.blobUri(), { title: file.name });
        };
        reader.readAsDataURL(file);
      };
  
      input.click();
    }
  }
}