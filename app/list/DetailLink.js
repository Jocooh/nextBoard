'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation'; //client 에서 사용가능

export default function DetailLink() {
  let router = useRouter();
  let a = usePathname(); //현재 url 출력
  let b = useSearchParams(); //현재 searchParams출력
  return (
    <button
      onClick={() => {
        router.push('/list');
      }}
    >
      버튼
    </button>
  );
}
