import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function EditBlog({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/blog/${id}/edit`}
            className="rounded-md border p-2 hover:bg-gray-100 mt-2"
        >
            <PencilIcon className="w-5" />
        </Link>
    )
}

export function DeleteBlog() {
    
    return (
        <button className="rounded-md border p-2 hover:bg-red-100 mt-2">
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-4" />
        </button>
    )
}

export function ActionEdit() {
    return (
        <button className="w-24 rounded-md border p-2 bg-blue-500 text-white px-2 py-2  hover:bg-blue-400 mt-2 flex justify-center items-center" type='submit'>
            Edit
        </button>
    )
}

export function CancelEdit() {
    return (
        <button className="w-24 rounded-md border p-2 bg-gray-500 text-white px-2 py-2  hover:bg-blue-400 mt-2 flex justify-center items-center" type='submit'>
            Cancel
        </button>
    )
}