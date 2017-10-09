import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsBlogComponent } from './cms-blog.component';

describe('CmsBlogComponent', () => {
  let component: CmsBlogComponent;
  let fixture: ComponentFixture<CmsBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
