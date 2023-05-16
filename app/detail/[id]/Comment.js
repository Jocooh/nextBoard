'use client';
import { useState, useEffect } from 'react';
// import { connectDB } from '@/util/database';

export default function Comment({ _id }) {
  let [comment, setComment] = useState('');
  let [lists, setLists] = useState([]);

  useEffect(() => {
    fetch(`/api/comment/list?id=${_id}`)
      .then((response) => response.json())
      .then((result) => setLists(result));
  }, []);
  return (
    <div>
      <div>댓글목록</div>
      <div>
        {lists.length > 0
          ? lists.map((list, i) => <p key={i}>{list.comment}</p>)
          : '댓글 없음'}
      </div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch('/api/comment/new', {
            method: 'POST',
            body: JSON.stringify({ comment: comment, _id: _id }),
          });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
