import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyDateFilterComponent } from './currency-date-filter.component';

describe('CurrencyDateFilterComponent', () => {
  let component: CurrencyDateFilterComponent;
  let fixture: ComponentFixture<CurrencyDateFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyDateFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrencyDateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
