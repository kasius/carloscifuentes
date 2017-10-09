import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetContentMyComponent } from './widget-content-my.component';

describe('WidgetContentMyComponent', () => {
  let component: WidgetContentMyComponent;
  let fixture: ComponentFixture<WidgetContentMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetContentMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetContentMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
