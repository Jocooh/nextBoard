//db연결
import Link from 'next/link';
// import { connectDB } from '../util/database';

export default async function Home() {
  // let client = await connectDB;
  // const db = client.db('forum');
  // let result = await db.collection('post').find().toArray(); // db안에 post 파일 데이터를 array로 들고와줌

  // await fetch('URL', { cache: 'force-cache' }); //fetch결과를 캐싱해놓고 저기 url로 동일하게 요청하면 저장해둔 결과값을 보여준다.

  return (
    <div>
      start
      <Link href={'/list'}>
        <button style={{ margin: ' 0 10px' }}>글 목록 보러가기</button>
      </Link>
    </div>
  );
}
