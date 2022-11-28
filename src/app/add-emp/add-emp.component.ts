import { Component } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {
name=""
designation=""
salary=""
age=""
email=""

readValues = ()=>
{
  let data={"name":this.name,"designation":this.designation,"salary":this.salary,"age":this.age,"email":this.email}

  console.log(data)
}

}
