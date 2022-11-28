import { Component } from '@angular/core';

@Component({
  selector: 'app-del-emp',
  templateUrl: './del-emp.component.html',
  styleUrls: ['./del-emp.component.css']
})
export class DelEmpComponent {
  empid = ""

  readValue = () => {

    let data = { "empid": this.empid }
    console.log(data)
  }


}
