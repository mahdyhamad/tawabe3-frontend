import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityEnComponent } from './city-en.component';

describe('CityEnComponent', () => {
  let component: CityEnComponent;
  let fixture: ComponentFixture<CityEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
