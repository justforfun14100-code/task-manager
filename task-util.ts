export function calculateCompletedTasks(
  tasks: { completed: boolean }[]
) {
  return tasks.filter((task) => task.completed).length;
}

