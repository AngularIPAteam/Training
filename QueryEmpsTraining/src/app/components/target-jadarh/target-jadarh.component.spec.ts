import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetJadarhComponent } from './target-jadarh.component';

describe('TargetJadarhComponent', () => {
  let component: TargetJadarhComponent;
  let fixture: ComponentFixture<TargetJadarhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetJadarhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetJadarhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
