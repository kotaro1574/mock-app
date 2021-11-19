import { ResponseResolver, MockedRequest, restContext } from 'msw';
import { User } from '../../App';

const mockUser: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  const userId = Number(req);
  const user: User = {
    id: userId,
    username: 'wakuwaku bank',
    age: 18,
  };

  return res(ctx.json(user));
};

export default mockUser;