//db연결
import Link from 'next/link';
// import { connectDB } from '../util/database';

export default async function Home() {
  // let client = await connectDB;
  // const db = client.db('forum');
  // let result = await db.collection('post').find().toArray(); // db안에 post 파일 데이터를 array로 들고와줌

  return (
    <div>
      start
      <Link href={'/list'}>
        <button style={{ marginLeft: '10px' }}>글 목록 보러가기</button>
      </Link>
    </div>
  );
}
