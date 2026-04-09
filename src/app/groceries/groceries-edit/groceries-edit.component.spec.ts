import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesEditComponent } from './groceries-edit.component';

describe('GroceriesEditComponent', () => {
  let component: GroceriesEditComponent;
  let fixture: ComponentFixture<GroceriesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroceriesEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
