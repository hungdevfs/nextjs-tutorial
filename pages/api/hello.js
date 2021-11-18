import nextConnect from 'next-connect';

const handler = nextConnect();

handler
  .get(async (req, res, next) => {
    res.json("OK")
  })
  .use((req, res, next, error) => {
    console.error(error)
  });

export default handler;
