import { ResponseResolver, MockedRequest, restContext } from 'msw';
import { User } from '../../App';

const mockUser: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  console.log(req, "req");
  // const userId = Number(req);
  const user: User = {
    id: 123,
    username: 'wakuwaku bank',
    age: 18,
  };

  return res(ctx.json(user));
};

export default mockUser;