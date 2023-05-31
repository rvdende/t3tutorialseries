import { useAppState } from "~/hooks/useAppState";

export function ZustandDemo() {
  const appstate = useAppState();
  return (
    <div className="bg-orange-300 p-10">
      Zustand Demo
      {appstate.bears}
      <div className="bg-neutral-100">
        Username:
        <input
          value={appstate.username}
          onChange={(e) => {
            appstate.set({ username: e.target.value });
          }}
        />
      </div>
    </div>
  );
}
