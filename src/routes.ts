import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: 'NodeJS',
    duration: 10,
    educator: 'Daniel',
  });

  CreateCourseService.execute({
    name: 'ReactJS',
    educator: 'Daniel',
  });

  return response.send();
}
