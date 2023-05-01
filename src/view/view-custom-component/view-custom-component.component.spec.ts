import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomComponentComponent } from './view-custom-component.component';

describe('ViewCustomComponentComponent', () => {
  let component: ViewCustomComponentComponent;
  let fixture: ComponentFixture<ViewCustomComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCustomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
