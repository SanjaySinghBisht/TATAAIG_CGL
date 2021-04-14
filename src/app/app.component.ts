import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { version } from '../../package.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Tata-health';
  version = version;
  constructor(public apiService: ApiService) {
    // this.apiService.checkLogin();
    console.log(`Verison ${this.version}`);
  }
}
