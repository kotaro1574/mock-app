import { rest } from 'msw';
import mockUser from '../mocks/resolvers/mockUser';

const handlers = [
  rest.get('/v1/users/:userId', mockUser),
];

export default handlers;
