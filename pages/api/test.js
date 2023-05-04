//자동 라우팅 기능이 있다. => 누가 /api/test로 GET/POST/PUT/DELETE/PATCH 요청하면 파일안의 코드를 실행해줌
import { connectDB } from '@/util/database';

// export default async function handler(req, res) {
//   let client = await connectDB;
//   const db = client.db('forum');
//   let result = await db.collection('post').find().toArray();

//   if (req.method === 'GET') {
//     return res.status(200).json(result);
//   }
// }
export default async function handler(req, res) {
  console.log(req.query);
  //쿼리스트링으로 보낸 데이터: {name:'cho'}, 또 fetch/GET일때 보내지못했던 데이터들을 보낼 수 있다.
  //민감한 데이터는 이렇게 보내면 안된다.
  return res.status(200).json();
}
