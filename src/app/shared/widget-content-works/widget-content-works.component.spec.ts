import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetContentWorksComponent } from './widget-content-works.component';

describe('WidgetContentWorksComponent', () => {
  let component: WidgetContentWorksComponent;
  let fixture: ComponentFixture<WidgetContentWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetContentWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetContentWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
