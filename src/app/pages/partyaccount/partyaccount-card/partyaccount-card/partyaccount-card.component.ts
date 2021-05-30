import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { PartyAccount } from 'src/app/shared/model/partyaccount.model';
import { PartyaccountUpdateComponent } from '../../partyaccount-update/partyaccount-update.component';



@Component({
  selector: 'app-partyaccount-card',
  templateUrl: './partyaccount-card.component.html',
  styleUrls: ['./partyaccount-card.component.scss']
})
export class PartyaccountCardComponent implements OnInit {
  @Input() partyaccount?: PartyAccount;

  constructor(private dialog: MatDialog,private service: FbBaseService) { }

  ngOnInit(): void {
  }
  
  delete(index: string): void {
    this.service.delete('partyaccount', index);
  }

  update(index: string): void {
    this.service.update('partyaccount', index, this.service.get);
  }

  carry(partyaccount:PartyAccount) : PartyAccount {
    return partyaccount;
  }

  openDialogupdate(id: string): void {

    const dialogRef = this.dialog.open(PartyaccountUpdateComponent, {});
    dialogRef.afterClosed().subscribe((partyaccount: PartyAccount) => {
      console.log(partyaccount);
      if (partyaccount?.name) {
        this.service.update('partyaccount', id, partyaccount);
      }
    }, err => {
      console.warn(err);
    });
  }

}
