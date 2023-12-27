import Table from '@/app/ui/blog/table'
import Search from '@/app/ui/blog/search'
import Button from '@/app/ui/blog/button'
import { getDataBlog } from '@/app/api/blog';
import { Suspense } from "react";
import {BlogTableSkeleton} from '@/app/ui/blog/skeletons';
import Pagination from '@/app/ui/blog/pagination';




export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;

    const { data: blogs, meta } = await getDataBlog(query, currentPage);

    // console.log("return",blogs);

    return (
        <div>
            <h1>Blog</h1>
            <div className='mt-7'>
                <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                    <Search placeholder="Search ..." />
                    <Button />
                </div>
            </div>
            <Suspense key={query + currentPage} fallback={<BlogTableSkeleton />}>
                <Table blogs={blogs} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                {<Pagination totalPages={meta.pagination.pageCount} />}
            </div>
        </div>
    )
}