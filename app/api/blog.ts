
export async function getData() {
    const res = await fetch('http://localhost:1337/api/blogs?populate=*')

    if (!res.ok) {
        
        throw new Error('Failed to fetch data')
    }

    return res.json()
}