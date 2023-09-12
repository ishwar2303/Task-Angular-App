import { TestBed } from '@angular/core/testing';
import { TaskComponentService } from './task.service';

describe('TaskService', () => {
  let service: TaskComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
