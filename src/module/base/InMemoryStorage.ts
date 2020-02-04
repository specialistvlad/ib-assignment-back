/***************************************************/
//  THIS IS MOCK STORAGE, USE IT ON YOUR OWN RISK
/***************************************************/

type Id = string | number;

export class InMemoryStorage<T> {
  protected entityName: string;
  protected storage: Array<T>;

  constructor(entityName: string, example: Array<T>=[]) {
    this.entityName = entityName;
    this.storage = example;
  }

  async insert(data: T): Promise<Id> {
    this.storage = [...this.storage, data];
    return (this.storage.length - 1).toString();
  }

  async findOne(propName: string, value: string):Promise<T | undefined> {
    return this.storage.find((item: any) => item[propName] === value);
  }

  async findOneById(value: Id):Promise<T | undefined> {
    return this.storage[value as number];
  }

  async updateOneById(taskId: Id, value: T):Promise<Id> {
    const tmp = [...this.storage];
    tmp[taskId as number] = value;
    this.storage = tmp;
    return taskId;
  }

  async removeById(value: Id):Promise<Id> {
    this.storage = this.storage.filter((val, index) => index === value as number);
    return value;
  }
}