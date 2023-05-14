'use client';

import { signOut } from 'next-auth/react'; //client에서만 사용가능

export default function LoginBtnHandler() {
  return (
    <div className="navbar">
      <button
        onClick={() => {
          signOut();
        }}
      >
        로그아웃
      </button>
    </div>
  );
}
