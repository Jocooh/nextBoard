'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h3>에러났음</h3>
      <button
        onClick={() => {
          reset();
        }}
      >
        reset btn
      </button>
    </div>
  );
}
//error: 에러정보를 알려줌
//reset: 함수이며, 페이지를 다시 로드한다.
