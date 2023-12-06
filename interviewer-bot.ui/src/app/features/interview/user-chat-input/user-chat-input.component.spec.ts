import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChatInputComponent } from './user-chat-input.component';

describe('UserChatInputComponent', () => {
  let component: UserChatInputComponent;
  let fixture: ComponentFixture<UserChatInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UserChatInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserChatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
