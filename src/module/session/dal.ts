// This is data abstraction layer.
import { RedisStorage } from '../base/RedisStorage';

type TSession = {
  email: string,
  token: string,
}

class UserDal<T> extends RedisStorage<T> {}

export default new UserDal<TSession>('session');