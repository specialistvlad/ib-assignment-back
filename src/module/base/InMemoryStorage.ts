type Id = string | number;
// type IdOrNull = Id | null;

export class InMemoryStorage<T> {
  protected entityName: string;
  protected storage: Array<T>;

  constructor(entityName: string) {
    this.entityName = entityName;
    this.storage = [];
  }

  async insert(data: T): Promise<string> {
    this.storage = [...this.storage, data];
    return (this.storage.length - 1).toString();
  }

  async findOne(propName: string, value: string):Promise<T | undefined> {
    return this.storage.find((item: any) => item[propName] === value);
  }

  async findOneById(value: Id):Promise<T | undefined> {
    // return this.findOne('id', value as string);
    return this.storage[value as number];
  }
}