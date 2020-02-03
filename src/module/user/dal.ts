// This is data abstraction layer.
import { PostgresStorage } from '../base/PostgresStorage';

type TUser = {
  email: string,
  password: string,
}

class UserDal<T> extends PostgresStorage<T> {}

export default new UserDal<TUser>('user');