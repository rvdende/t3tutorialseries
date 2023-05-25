import { useState } from "react";
import { TableComponent } from "./tablecomponent";

export default function PageComponent() {
  const [pageNumber, pageNumber_set] = useState(0);

  return (
    <div className="m-10 rounded-xl bg-white/10 p-10">
      <div>
        <button
          className="m-4 rounded-lg bg-yellow-500 p-4 hover:bg-orange-500"
          onClick={() => {
            pageNumber_set(pageNumber - 1);
          }}
        >
          Prev
        </button>

        {pageNumber}

        <button
          className="m-4 rounded-lg bg-yellow-500 p-4 hover:bg-orange-500"
          onClick={() => {
            pageNumber_set(pageNumber + 1);
          }}
        >
          Next
        </button>
      </div>
      <TableComponent pageNumber={pageNumber} />
    </div>
  );
}
