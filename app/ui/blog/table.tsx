'use Client'
import {EditBlog, DeleteBlog} from '@/app/ui/blog/actionbutton'
import {getData, countData} from '@/app/api/blog'


export default async function Table(){


    const {data} = await getData();


    return (

        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6 justify-center flex">
                                    No
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Title
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Genre
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Author
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Date
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {data?.map((blog: any, index: number) => (
                                <tr key={blog.id}>
                                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 justify-center flex">
                                        {index + 1}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                                        {blog.attributes.title}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {blog.attributes.genres.data?.reduce((acc: string, step: any) => {
                                            if (acc !== '') {
                                                acc = `${acc}, ${step.attributes.title}`
                                            }else{
                                                acc = step.attributes.title
                                            }
                                            return acc
                                        }, '')}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {blog.attributes.author}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {blog.attributes.date}
                                    </td>
                                    <td>
                                        <div className="flex justify-start gap-2">
                                            <EditBlog />
                                            <DeleteBlog />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}


