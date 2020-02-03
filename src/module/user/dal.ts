// This is data abstraction layer.
import { PostgresStorage } from '../base/PostgresStorage';

type TUser = {
  email: string,
  password: string,
}

class UserDal<T> extends PostgresStorage<T> {
  constructor(entityName: string) {
    super(entityName);
    // @ts-ignore
    this.storage = [{ email: 'xyz2', password: 'xyz2'}];
  }
}

export default new UserDal<TUser>('user');