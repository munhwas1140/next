export default async function Abc() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <h2>Xyz</h2>;
}
