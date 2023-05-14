import Link from 'next/link';
import '../globals.css';
import { connectDB } from '@/util/database';
import ListItem from './ListItem';

// export const dynamic = 'force-dynamic'; //dynamic rendering

export default async function List() {
  const db = (await connectDB).db('forum');
  let results = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      <Link href={'/write'}>
        <h4>글 작성하러가기</h4>
      </Link>
      <ListItem results={results} />
    </div>
  );
}
