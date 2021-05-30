import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyaccountUpdateComponent } from './partyaccount-update.component';

describe('PartyaccountUpdateComponent', () => {
  let component: PartyaccountUpdateComponent;
  let fixture: ComponentFixture<PartyaccountUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyaccountUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyaccountUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
