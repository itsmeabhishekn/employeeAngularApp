import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent {
  data:any = [{
"name":"Abhishek",
"designation":"SDE",
"salary":2000,
"age ":24,
"email":"abhishdsek@ok.com",
},
{
  "name":"Aijo",
  "designation":"SDE",
  "salary":21000,
  "age ":24,
  "email":"abhidfshek@ok.com",
  },
  {
    "name":"Akshay",
    "designation":"SDE",
    "salary":22000,
    "age ":24,
    "email":"abhdsishek@ok.com",
    },
    {
      "name":"Sarath",
      "designation":"SDE",
      "salary":23000,
      "age ":24,
      "email":"absahishek@ok.com",
      }
]
}
