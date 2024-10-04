import { Component } from '@angular/core';
import { JobService } from './service/job.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = false;
  userInfo: any;

  constructor(private jobSrv: JobService) {
    this.jobSrv.loginSub.subscribe(res => {
      if (res) {
        const userData = localStorage.getItem('jobLoginUser');
        if (userData == null) {
          this.isLoggedIn = false;
        } else {
          this.isLoggedIn = true;
          this.userInfo = JSON.parse(userData);
        }
      }
    })
    const userData = localStorage.getItem('jobLoginUser');
    if (userData == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.userInfo = JSON.parse(userData);
    }
  }
  logoff() {
    localStorage.removeItem('jobLoginUser');
    this.isLoggedIn = false;
  }
}
