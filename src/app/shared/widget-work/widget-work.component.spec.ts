import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetWorkComponent } from './widget-work.component';

describe('WidgetWorkComponent', () => {
  let component: WidgetWorkComponent;
  let fixture: ComponentFixture<WidgetWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
