import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaNumTermComponent } from './tabla-num-term.component';

describe('TablaNumTermComponent', () => {
  let component: TablaNumTermComponent;
  let fixture: ComponentFixture<TablaNumTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaNumTermComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaNumTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
