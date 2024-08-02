import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>app/page.js</h1>
      <ul>
        <li>
          <Link href="/sub">app/sub/page.js</Link>
        </li>
        <li>
          <Link href="/about">app/sub/page.js</Link>
        </li>
        <li>
          <Link href="/blog/a">app/blog/[a]/page.js</Link>
        </li>
        <li>
          <Link href="/blog/a/b/c">app/blog/[a]/page.js</Link>
        </li>
      </ul>
    </div>
  );
}
