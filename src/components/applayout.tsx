import Link from "next/link";
import { ReactNode, useState } from "react";
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
        <NavDropdown />
        <NavDropdown />
        <Link
          href="/about"
          className="flex flex-row items-center gap-2 rounded bg-sky-100 px-4 py-2 transition hover:bg-white hover:underline"
        >
          <GrDocumentText size={20} />
          About
        </Link>
        {appstate.username}
      </div>

      <div className="">{props.children}</div>
    </div>
  );
}

function NavDropdown() {
  const [open, open_set] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex flex-row items-center gap-2 rounded bg-sky-100 px-4 py-2 transition hover:bg-white hover:underline"
        onClick={() => {
          open_set(!open);
        }}
      >
        <TbHome2 size={24} />
        Products
      </button>

      {open && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px]">
          <div className="relative">
            <div className="absolute left-0 top-0 z-40 rounded bg-neutral-100 p-5 shadow-2xl">
              Dropdown goes here
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
