import { Component, Input, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup} from '@angular/forms';
import { PartyAccount } from 'src/app/shared/model/partyaccount.model';

@Component({
  selector: 'app-partyaccount-update',
  templateUrl: './partyaccount-update.component.html',
  styleUrls: ['./partyaccount-update.component.scss']
})

export class PartyaccountUpdateComponent implements OnInit {



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

  constructor(public dialogRef: MatDialogRef<PartyaccountUpdateComponent>) { }

  ngOnInit(): void {
  }

}
