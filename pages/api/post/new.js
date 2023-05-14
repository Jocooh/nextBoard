import { connectDB } from '@/util/database';
import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';

export default async function newList(req, res) {
  let session = await getServerSession(req, res, authOptions); //현재 로그인한 유저 출력
  if (session) {
    req.body.author = session.user.email;
  }
  console.log(session);
  if (req.method === 'POST') {
    if (req.body.title == '') {
      return 응답.status(500).json('왜 제목 안씀');
    } else if (req.body.content == '') {
      return 응답.status(500).json('왜 내용 안씀');
    }
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').insertOne(req.body);
    return res.redirect(302, '/list');
  }
}
//req.body : 유저가 입력한 Input의 입력값이 나옴
//redirect 시 페이지가 만들어지기 전에 list를 보려고 해서 에러가 남
