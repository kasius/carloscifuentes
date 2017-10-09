import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetContentBlogComponent } from './widget-content-blog.component';

describe('WidgetContentBlogComponent', () => {
  let component: WidgetContentBlogComponent;
  let fixture: ComponentFixture<WidgetContentBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetContentBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetContentBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
