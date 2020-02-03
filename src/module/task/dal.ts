// This is data abstraction layer.
import { PostgresStorage } from '../base/PostgresStorage';

type TTask = {
  userId: string,
  title: string,
  description: string,
}

class TaskDal<T> extends PostgresStorage<T> {}

export default new TaskDal<TTask>('task');