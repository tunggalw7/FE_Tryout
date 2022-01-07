import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-test-modulitas",
  template: `
    <ngx-single-page-layout>
      <router-outlet></router-outlet>
    </ngx-single-page-layout>
  `,
})
export class TestModulitasComponent implements OnInit {
  constructor(
  ) {}

  ngOnInit() {
  }

}

