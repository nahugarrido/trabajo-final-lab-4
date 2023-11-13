import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateHouseComponent } from './modal-create-house.component';

describe('ModalCreateHouseComponent', () => {
  let component: ModalCreateHouseComponent;
  let fixture: ComponentFixture<ModalCreateHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
