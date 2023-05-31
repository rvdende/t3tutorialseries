export function EditComponent(props: { onBack: () => void }) {
  return (
    <div>
      EDIT COMPONENT
      <button className="bg-blue-500 p-4" onClick={() => props.onBack()}>
        BACK
      </button>
    </div>
  );
}
