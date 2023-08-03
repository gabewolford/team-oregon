import Link from "next/link"

export default function Button({ text, linkTo }) {
    return (
        <Link href={linkTo}>
            <button className="flex h-10 px-4 py-2 items-center rounded-full bg-blue-500 hover:bg-blue-hover text-white-500 font-medium">
                {text}
            </button>
        </Link>
    )
}