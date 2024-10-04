import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {

  activeJobId: number = 0;
  jobObj: any;
  userInfo: any;
  isLoggedIn: boolean = false;
  jobApplicationObj = {
    "ApplicationId": 0,
    "JobId": 0,
    "JobSeekerId": 0,
    "AppliedDate": "2023-10-29T11:54:34.123Z",
    "ApplcationStatus": "New"
  }
  constructor(private activateRoute: ActivatedRoute, private jobSrc: JobService) {
    const userData = localStorage.getItem('jobLoginUser');
    if (userData == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.userInfo = JSON.parse(userData);
      this.jobApplicationObj.JobSeekerId = this.userInfo.jobSeekerId;
    }
    this.activateRoute.params.subscribe((res: any) => {
      debugger;
      this.activeJobId = res.jobid;
      this.getJobDetail();
      this.jobApplicationObj.JobId = this.activeJobId;
    })
  }


  getJobDetail() {
    this.jobSrc.GetJobListingById(this.activeJobId).subscribe((Res: any) => {
      this.jobObj = Res.data;
    })
  }
  apply() {
    this.jobSrc.SendJobApplication(this.jobApplicationObj).subscribe((Res:any)=>{
      if(Res.result) {
        alert("You Have Succefully Applied to Job")
      } else {
        alert(Res.message)
      }
    })
  }

}
