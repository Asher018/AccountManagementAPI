import { Component, OnDestroy, OnInit } from '@angular/core';
import { SERVICES } from 'src/app/shared/database/services.database';
import { MatDialog } from '@angular/material/dialog';
import { PartyaccountAddComponent } from '../partyaccount/add/partyaccount-add/partyaccount-add.component';
import { PartyAccount } from 'src/app/shared/model/partyaccount.model';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Observable } from 'rxjs';
import { Services } from 'src/app/shared/model/services.model';
import { FormArray, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  services = SERVICES;
  category? = '';
  partyaccount: Observable<PartyAccount[]> | null = null;
  page = 'home';
  detailData: any;
  partyaccounthigh: Observable<PartyAccount[]> | null = null;
  partyaccountcustomer: Observable<PartyAccount[]> | null = null;

  form: FormGroup | null = null;


  constructor(private dialog: MatDialog, private service: FbBaseService) { }

  ngOnInit(): void {
    this.category = 'services';
    this.listPartyaccount();
    this.listHigh();
    this.listCustomer();
  }



  ngOnDestroy(): void {
    delete this.category;
  }

  goToDetails(event: PartyAccount | Services): void {
    this.detailData = event;
    this.page = 'details';
  }

  getPartyaccount(): void {
    this.partyaccount = this.service.get('partyaccount');
  }

  onSelect(event: string): void {
    this.category = event;
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(PartyaccountAddComponent, {});
    dialogRef.afterClosed().subscribe((partyaccount: PartyAccount) => {
      console.log(partyaccount);
      if (partyaccount?.name) {
        this.service.add('partyaccount', partyaccount);
      }
    }, err => {
      console.warn(err);
    });
  }

  listHigh() {
    this.partyaccounthigh = this.service.getif('partyaccount');
  }

  listPartyaccount() {
    this.partyaccount = this.service.get('partyaccount');
  }

  listCustomer() {
    this.partyaccountcustomer = this.service.getcustomer('partyaccount');
  }
 


}
