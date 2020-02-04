// This is data abstraction layer.
import { PostgresStorage } from '../base/PostgresStorage';

type TTask = {
  userId: string,
  title: string,
  description: string,
}

class TaskDal extends PostgresStorage<TTask> {
  async list(reverseSorting: boolean = false, page: number = 0): Promise<Array<TTask>> {
    const rowsPerPage = 2;
    const from = (page * rowsPerPage);
    const to = (page + 1) * rowsPerPage;
    
    return this.storage
    .sort((a, b) => !reverseSorting ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title))
    .slice(from, to);
  }
}

const example = [
  {
    userId: '0',
    title: 'test title',
    description: 'description string',
  },
  {
    userId: '0',
    title: 'b',
    description: 'description string',
  },
  {
    userId: '0',
    title: 'd',
    description: 'description string',
  },
  {
    userId: '0',
    title: 'a',
    description: 'description string',
  },
  {
    userId: '0',
    title: 'c',
    description: 'description string',
  },
];

export default new TaskDal('task', example);