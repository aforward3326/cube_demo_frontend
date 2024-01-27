import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyFilterTableComponent } from './currency-filter-table.component';

describe('CurrencyFilterTableComponent', () => {
  let component: CurrencyFilterTableComponent;
  let fixture: ComponentFixture<CurrencyFilterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyFilterTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrencyFilterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
