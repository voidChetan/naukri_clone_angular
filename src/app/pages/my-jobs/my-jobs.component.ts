import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent {

  categoryObj: any = {
    "CategoryId":0,
    "CategoryName":"",
    "ImageUrl":"",
    "IsActive":false
  }

  constructor(private http: HttpClient){

  }
  onSave() {
    debugger;
    this.http.post('https://localhost:44315/api/Category/saveCategory' ,this.categoryObj).subscribe((res:any)=> {
      debugger;
    })
  }
}
