import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOperationsComponent } from './search-operations.component';

describe('SearchOperationsComponent', () => {
  let component: SearchOperationsComponent;
  let fixture: ComponentFixture<SearchOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
