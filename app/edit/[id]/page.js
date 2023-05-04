import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function editPage(props) {
  const db = (await connectDB).db('forum');
  let results = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) }); //mongoDB의 형식에 맞게 호출

  //글 수정
  // await db.collection('post').updateOne({수정할 게시물 정보 ex-id같은거},{$set:title:'바보'})
  //해당하는 게시물의 정보를 찾아서 title을 바보로 바꿔준다.

  return (
    <div className="p-20">
      <h4>수정 페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input
          name="title"
          placeholder="글 제목"
          defaultValue={results.title}
        />
        <input
          name="content"
          placeholder="글 내용"
          defaultValue={results.content}
        />
        <input
          name="_id"
          placeholder="글 id"
          defaultValue={results._id.toString()}
          style={{ display: 'none' }}
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
