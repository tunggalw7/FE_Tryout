import { Component, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { MasterService } from "../../../_services/master.service";

@Component({
  selector: "kelompok",
  templateUrl: "./kelompok.component.html",
  styleUrls: ["./kelompok.component.scss"],
})
export class KelompokComponent implements OnInit {

  kelompokList : any = ["PENALARAN UMUM", "PEMAHAMAN BACAAN DAN MENULIS", "PENGETAHUAN DAN PEMAHAMAN UMUM", "PENGETAHUAN KUANTITATIF", 
  "MATEMATIKA", "FISIKA", "KIMIA", "BIOLOGI"];
  
  constructor(
    private dialogService: NbDialogService,
    private masterService: MasterService
  ) {
  }

  ngOnInit() {
  }
}
