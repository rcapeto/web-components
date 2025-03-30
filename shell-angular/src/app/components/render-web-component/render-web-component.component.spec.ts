import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderWebComponentComponent } from './render-web-component.component';

describe('RenderWebComponentComponent', () => {
  let component: RenderWebComponentComponent;
  let fixture: ComponentFixture<RenderWebComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderWebComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderWebComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
