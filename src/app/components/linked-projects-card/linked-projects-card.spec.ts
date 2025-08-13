import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedProjectsCard } from './linked-projects-card';

describe('LinkedProjectsCard', () => {
  let component: LinkedProjectsCard;
  let fixture: ComponentFixture<LinkedProjectsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedProjectsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedProjectsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
