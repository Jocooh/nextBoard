import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
export default async function handler(req, res) {
  //유저가 보낸 querySting을 사용하자.
  console.log(req.query.id);
  const db = (await connectDB).db('forum');
  let results = await db
    .collection('comment')
    .find({ parent: req.query.id })
    .toArray();
  res.status(200).json(results);
}
