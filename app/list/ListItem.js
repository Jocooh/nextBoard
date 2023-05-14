'use client';
import Link from 'next/link';
import DetailLink from './DetailLink';

const ListItem = ({ results }) => {
  return (
    <div>
      {results.map((result, i) => (
        <div className="list-item" key={i}>
          <Link href={'/detail/' + result._id}>
            <h4>{result.title}</h4>
          </Link>
          <DetailLink />
          <p>1월 1일</p>
          <Link href={'/edit/' + result._id}>✏️</Link>
          <span
            onClick={(e) => {
              fetch('api/post/delete', {
                method: 'DELETE',
                body: result._id,
              }).then(() => {
                e.target.parentElement.style.opacity = 0;
                setTimeout(() => {
                  e.target.parentElement.style.display = 'none';
                }, 1000);
              });
              // fetch('/api/test?name = cho');
              // fetch('api/abc/아무거나');
            }}
            style={{ cursor: 'pointer' }}
          >
            🗑️
          </span>
        </div>
      ))}
    </div>
  );
};
export default ListItem;
