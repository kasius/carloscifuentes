import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetKasiusComponent } from './widget-kasius.component';

describe('WidgetKasiusComponent', () => {
  let component: WidgetKasiusComponent;
  let fixture: ComponentFixture<WidgetKasiusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetKasiusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetKasiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
