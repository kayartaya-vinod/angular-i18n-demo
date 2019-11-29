import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dir = 'ltr'

  constructor(public translate: TranslateService) {
    // translate.addLangs(['en', 'kn', 'hn', 'ar']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  changeLang(lang, dir='ltr') {
    this.translate.use(lang)
    this.dir = dir;
  }

}
