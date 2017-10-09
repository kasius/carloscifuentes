import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarKasiusComponent } from './sidebar-kasius.component';

describe('SidebarKasiusComponent', () => {
  let component: SidebarKasiusComponent;
  let fixture: ComponentFixture<SidebarKasiusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarKasiusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarKasiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
