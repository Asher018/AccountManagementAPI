import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyaccountCardComponent } from './partyaccount-card.component';

describe('PartyaccountCardComponent', () => {
  let component: PartyaccountCardComponent;
  let fixture: ComponentFixture<PartyaccountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyaccountCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyaccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
