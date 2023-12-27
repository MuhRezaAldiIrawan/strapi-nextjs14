'use server';
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const STRAPI_URL = process.env.STRAPI_URL;

const BlogSchema = z.object({
    id: z.string(),
    title: z.string({
        invalid_type_error: "Please insert title blog",
    }),
    author: z.string({
        invalid_type_error: "Please insert author blog",
    }),
    genres: z.string({
        invalid_type_error: "Please insert genre blog",
    }),
    date: z.string(),
    content: z.string({
        invalid_type_error: "Please insert content blog",
    }),
});

const UpdateBlogs = BlogSchema.omit({ date: true });
export async function updateBlogs(formData: FormData) {


    const { id,title,author,genres,content } = UpdateBlogs.parse({
        id: formData.get("id"),
        title: formData.get("title"),
        author: formData.get("author"),
        genres: formData.get("genres"),
        genres_id: formData.get("genres_id"),
        content: formData.get("content"),
    });

    const date = new Date().toISOString().split("T")[0];

    const dataToSend = {
        data: {
            title,
            author,
            content,
            genres: { connect: [{ id: genres }] },
            date,
        },
    };

    try {
        const response = await fetch(STRAPI_URL + "/api/blogs/" + id, {
            method: "PUT",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json"
            },
        });
        const data = await response.json();
        if (!response.ok)
            return { ok: false, error: data.error.message, data: null };
        if (response.ok && data.error)
            return { ok: false, error: data.error.message, data: null };
    } catch (err) {
        return { error: "Database Error: Failed to Update Invoice." };
    }
    revalidatePath("/dashboard/blogs");
    redirect("/dashboard/blogs");
}