import { signIn } from "@/serverActions/auth";

export default function Page() {
  return (
    <>
      <form action={signIn} className="flex gap-4">
        <input name="email" type="email" placeholder="이메일" />
        <input name="password" type="password" placeholder="비밀번호" />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
