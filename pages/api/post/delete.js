import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    let session = await getServerSession(req, res, authOptions);
    const db = (await connectDB).db('forum');
    let result = await db
      .collection('post')
      .deleteOne({ _id: new ObjectId(req.body) });
    return res.status(200).json('삭제완료');
  }
}
