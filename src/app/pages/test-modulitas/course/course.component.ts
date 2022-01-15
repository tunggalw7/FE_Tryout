import { Component, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { MasterService } from "../../../_services/master.service";

@Component({
  selector: "course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.scss"],
})
export class CourseComponent implements OnInit {

  kelompokList : any = ["PENALARAN UMUM", "PEMAHAMAN BACAAN DAN MENULIS", "PENGETAHUAN DAN PEMAHAMAN UMUM", "PENGETAHUAN KUANTITATIF", 
  "MATEMATIKA", "FISIKA", "KIMIA", "BIOLOGI"];
  listCourses : any = ["TO-3 KELOMPOK SAINTEK", "TO-4 KELOMPOK SAINTEK"];
  filterCourse : any;

  constructor(
    private dialogService: NbDialogService,
    private masterService: MasterService
  ) {
  }

  ngOnInit() {
  }
}
