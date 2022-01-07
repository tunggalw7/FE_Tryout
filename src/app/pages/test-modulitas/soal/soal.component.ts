import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { MasterService } from "../../../_services/master.service";

@Component({
  selector: 'soal',
  styleUrls: ['./soal.component.scss'],
  templateUrl: './soal.component.html',
})

export class SoalComponent implements OnInit {
  AddEditForm: FormGroup;
  dataForm: any;
  baseService = "core/universitas";
  submitted : Boolean = false; 
  submitLoading: Boolean = false;
  type: string = 'Add';
  action : string = 'Save';
  selectedOption;
  currentNumber: number = 0;
  jumpTo: number;

  soalJson = [
    {
      "no" : "1",
      "question" : "Jika ayah membaca koran diruang tamu, maka ayah tidak menggunakan kacamata. Jika Ayah tidak menggunakan kacamatannya, maka ayah akan kesulitan membaca. Pagi ini Ayah tidak menggunakan kacamatanya. Kesimpulannya mana yang benar ?",
      "answer" : [
        {"value" : "a" , "text" : "Gunung Agung mengeluarkan lava yang berbahaya"},
        {"value" : "b" , "text" : "Gunung Agung memiliki mata air yang kering"},
        {"value" : "c" , "text" : "Gunung Agung menyimpan material yang dapat dipancarkan kapanpun"},
        {"value" : "d" , "text" : "Gunung Agung memiliki suhu yang lebih tinggi dari gunung lainnya"},
        {"value" : "e" , "text" : "Gunung Agung berbahaya bagi lingkungan sekitarnya"},
      ]
    },
    {
      "no" : "2",
      "question" : "Jika ayah membaca koran diruang tamu, maka ayah tidak menggunakan kacamata. Jika Ayah tidak menggunakan kacamatannya, maka ayah akan kesulitan membaca. Pagi ini Ayah tidak menggunakan kacamatanya. Kesimpulannya mana yang benar ?",
      "answer" : [
        {"value" : "a" , "text" : "Gunung Agung mengeluarkan lava yang berbahaya"},
        {"value" : "b" , "text" : "Gunung Agung memiliki mata air yang kering"},
        {"value" : "c" , "text" : "Gunung Agung menyimpan material yang dapat dipancarkan kapanpun"},
        {"value" : "d" , "text" : "Gunung Agung memiliki suhu yang lebih tinggi dari gunung lainnya"},
        {"value" : "e" , "text" : "Gunung Agung berbahaya bagi lingkungan sekitarnya"},
      ]
    },
    {
      "no" : "3",
      "question" : "Jika ayah membaca koran diruang tamu, maka ayah tidak menggunakan kacamata. Jika Ayah tidak menggunakan kacamatannya, maka ayah akan kesulitan membaca. Pagi ini Ayah tidak menggunakan kacamatanya. Kesimpulannya mana yang benar ?",
      "answer" : [
        {"value" : "a" , "text" : "Gunung Agung mengeluarkan lava yang berbahaya"},
        {"value" : "b" , "text" : "Gunung Agung memiliki mata air yang kering"},
        {"value" : "c" , "text" : "Gunung Agung menyimpan material yang dapat dipancarkan kapanpun"},
        {"value" : "d" , "text" : "Gunung Agung memiliki suhu yang lebih tinggi dari gunung lainnya"},
        {"value" : "e" , "text" : "Gunung Agung berbahaya bagi lingkungan sekitarnya"},
      ]
    },
    {
      "no" : "4",
      "question" : "Jika ayah membaca koran diruang tamu, maka ayah tidak menggunakan kacamata. Jika Ayah tidak menggunakan kacamatannya, maka ayah akan kesulitan membaca. Pagi ini Ayah tidak menggunakan kacamatanya. Kesimpulannya mana yang benar ?",
      "answer" : [
        {"value" : "a" , "text" : "Gunung Agung mengeluarkan lava yang berbahaya"},
        {"value" : "b" , "text" : "Gunung Agung memiliki mata air yang kering"},
        {"value" : "c" , "text" : "Gunung Agung menyimpan material yang dapat dipancarkan kapanpun"},
        {"value" : "d" , "text" : "Gunung Agung memiliki suhu yang lebih tinggi dari gunung lainnya"},
        {"value" : "e" , "text" : "Gunung Agung berbahaya bagi lingkungan sekitarnya"},
      ]
    },
    {
      "no" : "5",
      "question" : "Jika ayah membaca koran diruang tamu, maka ayah tidak menggunakan kacamata. Jika Ayah tidak menggunakan kacamatannya, maka ayah akan kesulitan membaca. Pagi ini Ayah tidak menggunakan kacamatanya. Kesimpulannya mana yang benar ?",
      "answer" : [
        {"value" : "a" , "text" : "Gunung Agung mengeluarkan lava yang berbahaya"},
        {"value" : "b" , "text" : "Gunung Agung memiliki mata air yang kering"},
        {"value" : "c" , "text" : "Gunung Agung menyimpan material yang dapat dipancarkan kapanpun"},
        {"value" : "d" , "text" : "Gunung Agung memiliki suhu yang lebih tinggi dari gunung lainnya"},
        {"value" : "e" , "text" : "Gunung Agung berbahaya bagi lingkungan sekitarnya"},
      ]
    },
  ]

  constructor(
    private formBuilder: FormBuilder,
    private masterService: MasterService,
    private toastrService: NbToastrService
  ) {}

  ngOnInit() {
  }

  onChangeJumpTo(){
    this.currentNumber = Number(this.jumpTo-1);
  }
  
  onNextPage(){
    this.currentNumber++;
  }
  
  onPrevPage(){
    this.currentNumber--;
  }

  onNavigation(no){
    this.currentNumber = Number(no-1);
  }
}