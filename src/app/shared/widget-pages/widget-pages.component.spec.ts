import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPagesComponent } from './widget-pages.component';

describe('WidgetPagesComponent', () => {
  let component: WidgetPagesComponent;
  let fixture: ComponentFixture<WidgetPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
