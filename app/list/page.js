import Link from 'next/link';
import '../globals.css';
import { connectDB } from '@/util/database';
import DetailLink from './DetailLink';

export default async function List() {
  const db = (await connectDB).db('forum');
  let results = await db.collection('post').find().toArray();
  return (
    <div className="list-bg">
      <Link href={'/write'}>
        <h4>글 작성하러가기</h4>
      </Link>
      {results.map((result, i) => {
        return (
          <Link key={i} href={`/detail/${result._id}`}>
            <div className="list-item">
              <h4>{result.title}</h4>
              <DetailLink />
              <p>1월 1일</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
