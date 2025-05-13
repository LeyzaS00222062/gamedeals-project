import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAboutComponent } from './game-about.component';

describe('GameAboutComponent', () => {
  let component: GameAboutComponent;
  let fixture: ComponentFixture<GameAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
