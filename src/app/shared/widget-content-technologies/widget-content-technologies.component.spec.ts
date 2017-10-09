import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetContentTechnologiesComponent } from './widget-content-technologies.component';

describe('WidgetContentTechnologiesComponent', () => {
  let component: WidgetContentTechnologiesComponent;
  let fixture: ComponentFixture<WidgetContentTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetContentTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetContentTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
