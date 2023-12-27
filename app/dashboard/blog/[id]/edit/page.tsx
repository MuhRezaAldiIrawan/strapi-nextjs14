import Breadcrumbs from "@/app/ui/blog/breadcrumbs"
import { notFound } from "next/navigation";
import {fetchGenres, fetchBlogById } from '@/app/api/blog'
import Form from "@/app/ui/blog/edit-form";

export default async function Page({ params }: { params: { id: string } }) {
    
    const id = params.id;
    const genres = await fetchGenres();
    const blogs = await fetchBlogById(params.id);

    if (!params.id) return notFound();

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Blogs", href: "/dashboard/blog" },
                    {
                        label: "Edit Invoice",
                        href: `/dashboard/blog/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form blogs={blogs} genres={genres} />
        </main>
    )
}