import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsTableComponent } from './ts-table.component';

describe('TsTableComponent', () => {
  let component: TsTableComponent;
  let fixture: ComponentFixture<TsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsTableComponent]
    });
    fixture = TestBed.createComponent(TsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
