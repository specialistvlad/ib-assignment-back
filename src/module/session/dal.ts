// This is data abstraction layer.
import { RedisStorage } from '../base/RedisStorage';

type TSession = {
  email: string,
  token: string,
}

class SessionDal<T> extends RedisStorage<T> {
  constructor(entityName: string) {
    super(entityName);
    // @ts-ignore
    this.storage = [{
      email: 'xyz2',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ4eXoyIiwiaWF0IjoxNTgwNzI2MjMwfQ.IbH4bzNZVC1qEwbI7maJCN2gEM5RwPBBXZUvEJriZH8',
    }];
  }
  
}

export default new SessionDal<TSession>('session');