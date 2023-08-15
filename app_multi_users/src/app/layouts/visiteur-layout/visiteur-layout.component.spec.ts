import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurLayoutComponent } from './visiteur-layout.component';

describe('VisiteurLayoutComponent', () => {
  let component: VisiteurLayoutComponent;
  let fixture: ComponentFixture<VisiteurLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisiteurLayoutComponent]
    });
    fixture = TestBed.createComponent(VisiteurLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
