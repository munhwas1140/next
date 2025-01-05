import wait from "@/app/utils/wait";

export default async function Abc() {
  await wait(2000);
  return <h2>Abc</h2>;
}
