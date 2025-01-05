import { Suspense } from "react";
import Abc from "./Abc";
import Xyz from "./Xyz";
import Loading from "./loading";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <h1>비동기 페이지!</h1>
      <Suspense fallback={<Loading />}>
        <Abc />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Xyz />
      </Suspense>
    </>
  );
}
