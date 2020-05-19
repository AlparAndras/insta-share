import { Component } from '@angular/core';
import { Instagram } from '@ionic-native/instagram/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private instagram: Instagram) { }


  socialShare() {
    this.instagram.share('data:image/png;uhduhf3hfif33', 'Caption')
      .then(() => console.log('Shared!'))
      .catch((error: any) => console.error(error));
  }

}
