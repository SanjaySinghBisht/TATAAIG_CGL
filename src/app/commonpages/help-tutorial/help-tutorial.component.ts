import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-tutorial',
  templateUrl: './help-tutorial.component.html',
  styleUrls: ['./help-tutorial.component.sass']
})
export class HelpTutorialComponent implements OnInit {
 docUploadArray=[
   {
     documentName:'Downloads',
     dayDateTime: '22/10/2020 22:30PM',
     dotted_border: true
   },
   {
    documentName:'Disclaimer',
    dayDateTime: '22/10/2020 22:30PM',
    dotted_border: true
  },
  {
    documentName:'Privacy Policy',
    dayDateTime: '22/10/2020 22:30PM',
    dotted_border: false
  }
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
