import useLocalStorageState from "use-local-storage-state";
import { TASKS_KEY, TaskState } from "../models/task";
import type { Task } from "../models/task";

export default function useTasks() {
  const [tasks] = useLocalStorageState<Task[]>(TASKS_KEY, {
    defaultValue: [],
  });

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}