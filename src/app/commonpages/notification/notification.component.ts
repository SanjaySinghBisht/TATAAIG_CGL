import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit {

  notificationStatus =[{
    name:'UnderWriter Has Approved Policy',
    time:'10 Min',
    flag :false

  },
  {
    name:'6 Inspection Has Been Approved',
    time:'9 Min',
    flag :true

  },
  {
    name:'Policy Generated',
    time:'10 Min',
    flag :false

  },
  {
    name:'UnderWriter Has Approved Policy',
    time:'Yesterday',
    flag :false

  },
  {
    name:'Policy Generated',
    time:'11/02/2020',
    flag :false

  },
  {
    name:'UnderWriter Has Approved Policy',
    time:'11/02/2020',
    flag :false

  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
