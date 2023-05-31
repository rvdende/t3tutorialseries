import Link from "next/link";
import { ReactNode } from "react";
import { TbHome2 } from "react-icons/tb";
import { GrDocumentText } from "react-icons/gr";
import { useAppState } from "~/hooks/useAppState";

export function AppLayout(props: { children: ReactNode }) {
  const appstate = useAppState();
  return (
    <div>
      <div className="m-5 flex gap-4 rounded-lg bg-sky-200 p-5">
        Navbar:
        <Link
          href="/"
          className="flex flex-row items-center gap-2 rounded bg-sky-100 px-4 py-2 transition hover:bg-white hover:underline"
        >
          <TbHome2 size={24} />
          Home
        </Link>
        <Link
          href="/about"
          className="flex flex-row items-center gap-2 rounded bg-sky-100 px-4 py-2 transition hover:bg-white hover:underline"
        >
          <GrDocumentText size={20} />
          About
        </Link>
        {appstate.username}
      </div>

      <div className="m-5 rounded-lg bg-neutral-200 p-5">{props.children}</div>
    </div>
  );
}
