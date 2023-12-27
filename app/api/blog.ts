import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import qs from "qs";
import { flattenAttributes } from "@/app/lib/utils";

const STRAPI_URL = process.env.STRAPI_URL;

//** Testing fetching data blog **//
export async function getData() {
    try {
        const res = await fetch("http://localhost:1337/api/blogs?populate=*");
        const result = res.json();
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return result;
    } catch (error) {
        console.error("failed Fatche data:", error);
        throw new Error("Failed to fetch data blog");
    }
}

//** fetching data blog **//
const ITEMS_PER_PAGE = 6;
export async function getDataBlog(query: string, currentPage: number) {
    noStore();

    const queryObject = qs.stringify({
        sort: ["date:asc"],

        pagination: {
            pageSize: ITEMS_PER_PAGE,
            page: currentPage,
        },
        filters: {
            $or: [
                {
                    title: {
                        $contains: query,
                    },
                },
                {
                    author: {
                        $contains: query,
                    },
                },
                {
                    genres: {
                        title: {
                            $contains: query,
                        },
                    },
                },
            ],
        },
        populate: "genres",
    });

    try {
        const response = await fetch(STRAPI_URL + "/api/blogs?" + queryObject, {
            cache: "no-store",
        });
        const data = await response.json();
        const flattened = flattenAttributes(data.data);
        return { data: flattened, meta: data.meta };
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch Blog.");
    }
}

//** fetching data genres **//
export async function fetchGenres() {
    const query = qs.stringify({
        populate: {
            fields: ["id", "title"],
        },
    });
    try {
        const data = await fetch(STRAPI_URL + "/api/genres?" + query, {
            cache: "no-store",
        });
        const genres = await data.json();
        const flatten = flattenAttributes(genres.data);
        return flatten;
    } catch (err) {
        console.error("Database Error:", err);
        throw new Error("Failed to fetch all genre.");
    }
}

//** fetching data blog by id **//
export async function fetchBlogById(id: string) {

    const query = qs.stringify({
        populate: "genres",
    });

    try {
        const data = await fetch(STRAPI_URL + "/api/blogs/" + id + "?" + query, {
            cache: "no-store",
        });
        const blogId = await data.json();
        const flatten = flattenAttributes(blogId.data);
        return flatten;
    } catch (err) {
        console.error("Database Error:", err);
        throw new Error("Failed to fetch all customers.");
    }
}
