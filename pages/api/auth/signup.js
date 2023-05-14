import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    //위와 같이 만들면 유저의 비밀번호가 다 들어날 수 있기때문에 비밀번호를 암호화해줄필요가 있다.
    //비밀번호 암호화
    if (
      req.body.email === '' ||
      req.body.password === '' ||
      req.body.name === ''
    ) {
      return res.status(500).json('내용 입력하셈');
    }

    const hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash; //req.body.password에 있던 비밀번호를 해쉬로 바꿔주기.
    //db에 있는 이메일 중복 체크하기.
    let db = (await connectDB).db('forum');
    await db.collection('user_cred').insertOne(req.body);
    res.status(200).json('가입성공');
  }
}
