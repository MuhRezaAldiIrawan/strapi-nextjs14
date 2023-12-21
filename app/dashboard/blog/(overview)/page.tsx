import Table from '@/app/ui/blog/table'
import Search from '@/app/ui/blog/search'
import Button from '@/app/ui/blog/button'




export default function Page() {
    return (
        <div>
            <h1>Blog</h1>
            <div className='mt-7'>
                <div className="mt-4 flex items-center justify-between gap-2 md:mt-8"> 
                    <Search />
                    <Button />
                </div>
            </div>
            <Table />
            
        </div>
    )
}