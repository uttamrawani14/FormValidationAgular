import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 topics =['Angular' ,'React','vue'];
 topicHasError=true;
 submitted=false;

 userModel=new User('','',null,'default','',null);
 constructor(private _enrollmentService :
  EnrollmentService ){}

 validateTopic(value)
 {
   if(value==='default'){
     this.topicHasError=true;
   }
   else{
     this.topicHasError=false;
   }
 }
 onSubmit()
 {
   this.submitted=true;
   this._enrollmentService.enroll(this.userModel)

     .subscribe(data =>console.log('Success! ',data),
     error =>console.error('Error!',error)
     )

 }
}
