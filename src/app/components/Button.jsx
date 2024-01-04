export default function Button({ text, onClick, disabled }) {
  return (
    <button
      className="hover-sweep flex h-10 px-4 py-2 items-center rounded-full bg-blue-500 hover:bg-blue-hover hover:transition-colors hover:duration-1000 text-white-500 font-medium"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
