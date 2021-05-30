import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyaccountAddComponent } from './partyaccount-add.component';

describe('PartyaccountAddComponent', () => {
  let component: PartyaccountAddComponent;
  let fixture: ComponentFixture<PartyaccountAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyaccountAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyaccountAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
