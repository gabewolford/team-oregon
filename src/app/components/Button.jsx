export default function Button({ text }) {
    return (
        <button className="flex h-10 px-4 py-2 items-center rounded-full bg-blue-500 text-white-500 font-medium">
            {text}
        </button>
    )
}