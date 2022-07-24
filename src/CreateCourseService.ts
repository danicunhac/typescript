/**
 * name - string
 * duration - number
 * educator - string
 */

interface Course {
  name: string;
  duration?: number; // in weeks
  educator: string;
}

class CreateCourseService {
  execute({ name, duration = 8, educator }: Course): void {
    console.log(
      `Creating course ${name}, with duration of ${duration} week(s), and educator ${educator}`
    );
  }
}

export default new CreateCourseService();
