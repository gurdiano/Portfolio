import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleCardSm } from './role-card-sm';

describe('RoleCardSm', () => {
  let component: RoleCardSm;
  let fixture: ComponentFixture<RoleCardSm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleCardSm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleCardSm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
