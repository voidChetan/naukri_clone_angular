import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: any = {
    "UserName": "",
    "Password": ""
  }

  constructor(private jobSrv: JobService, private router: Router) {

  }

  onLogin() {
    this.jobSrv.login(this.loginObj).subscribe((res:any)=>{
      if(res.result) {
        alert('User Logged in Success')
        localStorage.setItem('jobLoginUser', JSON.stringify(res.data));
        this.jobSrv.loginSub.next(true);
        this.router.navigateByUrl('/home') 
      } else {
        alert (res.message)
      }
    })
  }
}
