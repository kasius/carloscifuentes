import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTitleBigComponent } from './widget-title-big.component';

describe('WidgetTitleBigComponent', () => {
  let component: WidgetTitleBigComponent;
  let fixture: ComponentFixture<WidgetTitleBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTitleBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTitleBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
