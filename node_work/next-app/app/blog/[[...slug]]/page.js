export default function Page({ params }) {
  return (
    <>
      <div>My Post: {params.slug}</div>
      <a href="/">/app/page.js</a>
    </>
  );
}
