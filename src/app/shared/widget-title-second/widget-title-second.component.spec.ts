import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTitleSecondComponent } from './widget-title-second.component';

describe('WidgetTitleSecondComponent', () => {
  let component: WidgetTitleSecondComponent;
  let fixture: ComponentFixture<WidgetTitleSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTitleSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTitleSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
