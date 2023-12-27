'use client'
import {
    
    PlayCircleIcon,
    PencilSquareIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ActionEdit, CancelEdit } from '@/app/ui/blog/actionbutton';
import { GenresField, BlogForm } from '@/app/lib/definitions';
import { updateBlogs } from '@/app/lib/actions';
import { useFormState } from 'react-dom';


export default function Page({
    blogs,
    genres,
}: {
    blogs: BlogForm;
    genres: GenresField[];

})
 {
    
    return (
        <form action={updateBlogs}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <input type="hidden" name="id" value={blogs.id} />

                
                <div className="mb-4">
                    <label htmlFor="genres" className="mb-2 block text-sm font-medium">
                        Choose genre
                    </label>
                    <div className="relative">
                    <input type="text"  name="author" defaultValue={blogs.genres_id}  id="author"  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" />                
                        {/* <select
                            id="genres"
                            name="genres"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={genres.id}
                        >
                            <option value="" disabled>
                                Select Genre
                            </option>
                            {genres.map((genre) => (
                                <option value={genre.id} key={genre.id}>{genre.title}</option>
                            ))}
                        </select> */}
                        <PlayCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>
                
                
                <div className="mb-4">
                    <label htmlFor="title" className="mb-2 block text-sm font-medium">
                        Title
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input type="text" name="title" id="title" defaultValue={blogs.title}  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" />
                            <PencilSquareIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                
                <div className="mb-4">
                    <label htmlFor="author" className="mb-2 block text-sm font-medium">
                        Author
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input type="text" name="author" id="author" defaultValue={blogs.author}  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" />
                            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                
                <div className="mb-4">
                    <label htmlFor="content" className="mb-2 block text-sm font-medium">
                        Content
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <textarea name="content" id="content" className="resize-none border rounded-md py-2 px-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" cols={104} rows={5} defaultValue={blogs.content}></textarea>
                        </div>
                    </div>

                </div>

            </div>
            <div className="flex justify-end gap-4 ">
                <CancelEdit />
                <ActionEdit />
            </div>
        </form>
    )
}