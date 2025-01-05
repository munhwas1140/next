import wait from "@/app/utils/wait";

export default async function Xyz() {
  await wait(3000);
  return <h2>Xyz</h2>;
}
