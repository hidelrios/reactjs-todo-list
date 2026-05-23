import useLocalStorageState from "use-local-storage-state";
import {  TASKS_KEY } from "../models/task";
import type { Task } from "../models/task";

export default function useTasks() {
  const [tasks] = useLocalStorageState<Task[]>(TASKS_KEY, {
    defaultValue: [],
  });

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}