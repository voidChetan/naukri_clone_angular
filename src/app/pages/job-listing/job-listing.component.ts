import { Component } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent {
  userInfo: any ;
  jobList: any[]= [];
  applications: any[]= [];
  isExpanded: boolean = false;
  constructor(private jobSrv: JobService){
    const userData = localStorage.getItem('jobLoginUser');
    if (userData !== null) { 
      this.userInfo = JSON.parse(userData); 
      this.getJobsByEmploye();
    }
  }

  getJobsByEmploye() {
    this.jobSrv.GetJobsByEmployerId(this.userInfo.employerId).subscribe((res:any)=>{
      this.jobList = res.data;
    })
  }
  openJobs(job: any) {
    this.jobList.forEach(element => {
      element.isExpanded = false;
    });
    job.isExpanded =  true;
    this.jobSrv.GetApplcationsByJobId(job.jobId).subscribe((res:any)=>{
      this.applications = res.data;
    })

  }
}
