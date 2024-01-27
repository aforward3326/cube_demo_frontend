import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavSComponent } from './side-nav-s.component';

describe('SideNavSComponent', () => {
  let component: SideNavSComponent;
  let fixture: ComponentFixture<SideNavSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideNavSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
