// [id].js
import { useRouter } from 'next/router';

export default function Id() {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div>
      <h1>/pages/sub/[{id}].js</h1>
      <a href="/">/pages/index.js</a>
    </div>
  );
}
