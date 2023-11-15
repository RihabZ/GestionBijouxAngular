import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAccessoireComponent } from './search-accessoire.component';

describe('SearchAccessoireComponent', () => {
  let component: SearchAccessoireComponent;
  let fixture: ComponentFixture<SearchAccessoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAccessoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAccessoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
