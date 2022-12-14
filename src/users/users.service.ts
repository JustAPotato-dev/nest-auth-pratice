import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Potato',
      username: 'potato',
      password: 'password',
    },
    {
      id: 2,
      name: 'Tomato',
      username: 'tomato',
      password: 'pass0ord',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
