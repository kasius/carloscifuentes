import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetContentArticleComponent } from './widget-content-article.component';

describe('WidgetContentArticleComponent', () => {
  let component: WidgetContentArticleComponent;
  let fixture: ComponentFixture<WidgetContentArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetContentArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetContentArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
