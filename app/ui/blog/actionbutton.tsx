import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

export function EditBlog() {
    return (
        <button className="rounded-md border p-2 hover:bg-gray-100 mt-2">
            <span className="sr-only">Delete</span>
            <PencilIcon className="w-4" />
        </button>
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