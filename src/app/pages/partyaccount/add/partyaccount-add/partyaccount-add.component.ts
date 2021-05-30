import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-partyaccount-add',
  templateUrl: './partyaccount-add.component.html',
  styleUrls: ['./partyaccount-add.component.scss']
})
export class PartyaccountAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    accountType: new FormControl(''),
    creditLimit: new FormControl(''),
    description: new FormControl(''),
    href: new FormControl(''),
    lastModified: new FormControl(new Date()),
    name: new FormControl(''),
    paymentStatus: new FormControl(''),
    state: new FormControl(''),

  });

  constructor(public dialogRef: MatDialogRef<PartyaccountAddComponent>) { }

  ngOnInit(): void {
  }

}
