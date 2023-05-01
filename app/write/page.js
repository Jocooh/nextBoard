export default function Write() {
  return (
    <div>
      <h4>글 불러오기</h4>
      {/* action URL로 POST를 한다. (GET,POST)만 가능하다.*/}
      <form action="/api/test" method="GET">
        <button type="submit">버튼</button>
      </form>

      <h4>날짜 요청</h4>
      {/* action URL로 POST를 한다. (GET,POST)만 가능하다.*/}
      <form action="/api/date" method="GET">
        <button type="submit">버튼</button>
      </form>

      <div className="p-20">
        <h4>글 작성</h4>
        <form action="/api/post/new" method="POST">
          <input name="title" placeholder="글 제목" />
          <input name="content" placeholder="글 내용" />
          <button type="submit">버튼</button>
        </form>
      </div>
    </div>
  );
}
