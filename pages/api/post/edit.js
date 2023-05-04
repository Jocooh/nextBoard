import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function editList(req, res) {
  if (req.method === 'POST') {
    if (req.body.title == '') {
      return 응답.status(500).json('왜 제목 안씀');
    } else if (req.body.content == '') {
      return 응답.status(500).json('왜 내용 안씀');
    }
    let newList = {
      title: req.body.title,
      content: req.body.content,
    };
    const db = (await connectDB).db('forum');
    let result = await db
      .collection('post')
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: newList });

    return res.redirect(302, '/list');
    // page: res.ok ? alert('check') : redirect('/list'),
  }
}
//req.body : 유저가 입력한 Input의 입력값이 나옴
//redirect 시 페이지가 만들어지기 전에 list를 보려고 해서 에러가 남
