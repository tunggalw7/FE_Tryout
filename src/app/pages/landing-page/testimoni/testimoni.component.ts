import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-testimoni',
  templateUrl: './testimoni.component.html',
  styleUrls: [
      './testimoni.component.scss' 
  ],
  animations: [
    trigger('fade', [
      transition('void => active', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class TestimoniComponent {
  title = 'my-app';
  test = 'active';
  constructor(
  ) {
    this.loadScripts();
  }

  // ngAfterViewInit() {
  //   this._script.load('body', 'assets/vendor/bootstrap/js/bootstrap.bundle.min.js');
  //   this._script.load('body', 'assets/vendor/glightbox/js/glightbox.min.js');
  //   this._script.load('body', 'assets/vendor/isotope-layout/isotope.pkgd.min.js');
  //   this._script.load('body', 'assets/vendor/swiper/swiper-bundle.min.js');
  //   this._script.load('body', 'assets/vendor/waypoints/noframework.waypoints.js');
  //   this._script.load('body', 'assets/vendor/php-email-form/validate.js');
  //   this._script.load('body', 'assets/js/main.js');
  // }
  loadScripts() {
    const dynamicScripts = [
     'assets/landing-page/js/test.js',
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('body')[0].appendChild(node);
    }
  }

  changeSlide(){
    this.test = 'active';
  }
}
