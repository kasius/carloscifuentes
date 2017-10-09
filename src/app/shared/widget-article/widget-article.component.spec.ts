import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetArticleComponent } from './widget-article.component';

describe('WidgetArticleComponent', () => {
  let component: WidgetArticleComponent;
  let fixture: ComponentFixture<WidgetArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
