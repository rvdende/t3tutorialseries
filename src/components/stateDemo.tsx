import { useState } from "react";
import { EditComponent } from "./editComponent";

export function StateDemo() {
  const [viewstate, viewstate_set] = useState<"default" | "overview" | "edit">(
    "default"
  );

  return (
    <div className="flex flex gap-4 bg-green-300 p-10">
      StateDemo
      <button
        className="flex flex-row items-center gap-2 rounded bg-sky-100 px-4 py-2 transition hover:bg-white hover:underline"
        onClick={() => viewstate_set("default")}
      >
        Back
      </button>
      <button
        className="flex flex-row items-center gap-2 rounded bg-sky-100 px-4 py-2 transition hover:bg-white hover:underline"
        onClick={() => viewstate_set("overview")}
      >
        Overview
      </button>
      <button
        className="flex flex-row items-center gap-2 rounded bg-sky-100 px-4 py-2 transition hover:bg-white hover:underline"
        onClick={() => viewstate_set("edit")}
      >
        Edit
      </button>
      <span>Currently viewing: {viewstate}</span>
      {viewstate == "default" && <div>VIEWING DEFAULT</div>}
      {viewstate == "overview" && <div>VIEWING OVERVIEW</div>}
      {viewstate == "edit" && (
        <EditComponent
          onBack={() => {
            viewstate_set("default");
          }}
        />
      )}
    </div>
  );
}
