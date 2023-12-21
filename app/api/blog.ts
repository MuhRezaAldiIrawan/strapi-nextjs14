
const ITEMS_PER_PAGE = 5;
export async function getData(
    
) {

    try {
        const res = await fetch('http://localhost:1337/api/blogs?populate=*')
        const result = res.json()
        if (!res.ok) {

            throw new Error('Failed to fetch data')
        }
        return result
    } catch (error) {
        console.error('failed Fatche data:', error);
        throw new Error('Failed to fetch data blog');
    }
}

export async function countData(
    query: string,
    currentPage: number,
) {

    try {
        const res = await fetch('http://localhost:1337/api/blogs?populate=*')

        if (!res.ok) {

            throw new Error('Failed to fetch data')
        }

        const data = await res.json();

        const jumlahRespon = data.length / ITEMS_PER_PAGE;
        return jumlahRespon;

    } catch (error) {
        console.error('failed Fatche data:', error);
        throw new Error('Failed to fetch data blog');
    }
}

export async function pageData(query: string) {

    try {
        const res = await fetch('http://localhost:1337/api/blogs?populate=*&query=${query}')

        if (!res.ok) {

            throw new Error('Failed to fetch data')
        }

        const data = await res.json();

        const jumlahRespon = data.length / ITEMS_PER_PAGE;
        return jumlahRespon;

    } catch (error) {
        console.error('failed Fatche data:', error);
        throw new Error('Failed to fetch data blog');
    }
}


