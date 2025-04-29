import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleLoggerComponent } from './lifecycle-logger.component';

describe('LifecycleLoggerComponent', () => {
  let component: LifecycleLoggerComponent;
  let fixture: ComponentFixture<LifecycleLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleLoggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
