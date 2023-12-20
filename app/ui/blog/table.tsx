import {EditBlog, DeleteBlog} from '@/app/ui/blog/actionbutton'
import {getData} from '@/app/api/blog'

export default async function Table() {
    const data = await getData();

    return (

        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
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
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr>
                                <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                                    {data.data[0].attributes.title}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {data.data[0].attributes.genres.data[0].attributes.title}
                                </td>
                                <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                                    {data.data[0].attributes.author}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {data.data[0].attributes.date}
                                </td>
                                <td>
                                    <div className="flex justify-start gap-2">
                                        <EditBlog />
                                        <DeleteBlog />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}


