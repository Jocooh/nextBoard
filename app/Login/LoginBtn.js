'use client';

import { signIn } from 'next-auth/react'; //client에서만 사용가능

export default function LoginBtnHandler() {
  return (
    <div className="navbar">
      <button
        onClick={() => {
          signIn();
        }}
      >
        로그인
      </button>
    </div>
  );
}
