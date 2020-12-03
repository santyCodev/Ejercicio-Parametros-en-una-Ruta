import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaNumComponent } from './tabla-num.component';

describe('TablaNumComponent', () => {
  let component: TablaNumComponent;
  let fixture: ComponentFixture<TablaNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaNumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
