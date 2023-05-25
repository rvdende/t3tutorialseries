import Link from "next/link";
import { ReactNode } from "react";

export function AppLayout(props: { children: ReactNode }) {
  return (
    <div>
      <div className="m-5 flex gap-4 rounded-lg bg-sky-200 p-5">
        Navbar:
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </div>

      <div className="m-5 rounded-lg bg-neutral-200 p-5">{props.children}</div>
    </div>
  );
}
