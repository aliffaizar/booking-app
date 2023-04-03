import { User } from 'src/users/user.schema';

export interface UserAndToken {
  user: User;
  accessToken: string;
}
