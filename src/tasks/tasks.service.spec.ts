import { Test } from '@nestjs/testing';
import { TasksService } from './tasks.service';

const mockTaskRepository = () => ({
  getTasks: jest.fn(),
});

describe('Task Service', () => {

  let taskService: TasksService;

  beforeEach(async () => {
    // initialize a nestJs module with taskService and TaskRepository
    const module = await Test.createTestingModule({
      providers: [{ provide: TasksService, useFactory: mockTaskRepository }],
    }).compile();

    taskService = module.get(TasksService);
  });

  describe('Get Tasks', () => {
    it('calls TasksReposiotry.getTasks and returns the result', () => {
      expect(taskService.getTasks).not.toHaveBeenCalled();
      // call tasksService.getTasks, which should then call the repository getTasks
      expect(taskService.getTasks).toHaveBeenCalled();
    });
  });
});
