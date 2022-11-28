import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']
})
export class EmpEditComponent {
  empid = ""

  readValues = () => {
    let data = { "empid": this.empid }
    console.log(data)
  }

}
