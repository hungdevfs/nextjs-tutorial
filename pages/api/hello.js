import nextConnect from 'next-connect';
import { getUsers } from '../../services/user.service';

const handler = nextConnect();

handler.get(async (req, res, next) => {
  const users = await getUsers();
  res.json(users);
});

export default handler;
