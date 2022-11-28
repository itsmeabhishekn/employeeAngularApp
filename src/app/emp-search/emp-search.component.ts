import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-search',
  templateUrl: './emp-search.component.html',
  styleUrls: ['./emp-search.component.css']
})
export class EmpSearchComponent {
empid = ""

readValues = ()=>
{
  let data = {"empid":this.empid}
  console.log(data)
}

}
