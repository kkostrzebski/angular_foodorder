import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPAgeComponent } from './cart-page.component';

describe('CartPAgeComponent', () => {
  let component: CartPAgeComponent;
  let fixture: ComponentFixture<CartPAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
