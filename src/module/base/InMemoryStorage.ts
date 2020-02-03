// import nanoid from 'nanoid';

export class InMemoryStorage<T> {
  protected entityName: string;
  protected storage: Array<T>;

  constructor(entityName: string) {
    this.entityName = entityName;
    this.storage = [];
  }

  async insert(data: T): Promise<string> {
    // const id: string = nanoid();
    this.storage = [...this.storage, data];
    return (this.storage.length - 1).toString();
  }

  async findOne(propName: string, value: string):Promise<T | undefined> {
    return this.storage.find((item: any) => item[propName] === value);
  }
}