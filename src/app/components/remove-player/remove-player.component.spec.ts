import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePlayerComponent } from './remove-player.component';

describe('RemovePlayerComponent', () => {
  let component: RemovePlayerComponent;
  let fixture: ComponentFixture<RemovePlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemovePlayerComponent]
    });
    fixture = TestBed.createComponent(RemovePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
