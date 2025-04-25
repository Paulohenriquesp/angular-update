import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightlightBoxComponent } from './hightlight-box.component';

describe('HightlightBoxComponent', () => {
  let component: HightlightBoxComponent;
  let fixture: ComponentFixture<HightlightBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HightlightBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HightlightBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
