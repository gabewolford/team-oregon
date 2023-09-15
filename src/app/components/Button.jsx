export default function Button({ text, onClick }) {
    return (
            <button className="flex h-10 px-4 py-2 items-center rounded-full bg-blue-500 hover:bg-blue-hover text-white-500 font-medium" onClick={onClick}>
                {text}
            </button>
    )
}