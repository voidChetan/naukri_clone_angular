import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.css']
})
export class CreateNewJobComponent implements OnInit {
  jobObj: any = {
    "JobId": 0,
    "JobName": "",
    "CreatedDate": new Date(),
    "EmployerId": 0,
    "CategoryId": 0,
    "Experience": "",
    "Package": "",
    "Location": "",
    "JobDescription": "",
    "IsActive": true
  };
  categoryList: any [] = [];

  constructor(private jobSrv: JobService){
    const userData = localStorage.getItem('jobLoginUser');
    if(userData != null) {
      const data =  JSON.parse(userData);
      this.jobObj.EmployerId = data.employerId;
    }   
  }
  ngOnInit(): void {
    this.getJobCategories();
  }

  getJobCategories() {
    this.jobSrv.getAllCategory().subscribe((res:any) =>{
      this.categoryList =  res.data;
    })
  }
  CreateJob() {
    this.jobSrv.createNewJob(this.jobObj).subscribe((res: any)=>{
      if(res.result) {
        alert('Post Created Success')
      } else {
        alert(res.message)
      }
    })
  }
}
