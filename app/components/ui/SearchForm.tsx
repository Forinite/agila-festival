import React from 'react'
import Form from "next/form";
import {reset} from "next/dist/lib/picocolors";
import SearchFormReset from "@/app/components/ui/SearchFormReset";


const SearchForm = () => {
    const query = "Test"
    return (
        <Form action="/" scroll={false} className="w-full search-form flex justify-between items-center  rounded-full">
            <input
                name="query"
                defaultValue={query}
                className="w-full h-full  border py-3 px-4 rounded-full"
                placeholder="Search Moments"
            />

            <div className={'relative flex gap-2 w-fit h-fit'}>
                {query && (
                    <SearchFormReset />
                )}
            </div>
        </Form>
    )
}
export default SearchForm
