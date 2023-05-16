import { connectDB } from '@/util/database';
import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions); //현재 로그인한 유저 출력
  // **JSON으로 넘겨준거 JSON parse로 다시 받아야함
  req.body = JSON.parse(req.body);
  let content = {
    comment: req.body.comment,
    parent: req.body._id, //부모게시물
    user: session.user.email,
  };
  if (req.method == 'POST') {
    const db = (await connectDB).db('forum');
    let result = await db.collection('comment').insertOne(content);
    return res.status(200).json('저장완료');
  }
}
