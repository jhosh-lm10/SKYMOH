import { AppDataSource } from '../data-source';
import { Task } from '../entities/Task';

export function runAutomations() {
  setInterval(async () => {
    const repo = AppDataSource.getRepository(Task);
    const upcoming = await repo.find({ where: { completed: false } });
    upcoming.forEach((task) => {
      const dueSoon = task.dueDate && (new Date(task.dueDate).getTime() - Date.now()) < 86400000;
      if (dueSoon) {
        console.log(`Task ${task.title} is due soon.`);
      }
    });
  }, 3600000);
}
