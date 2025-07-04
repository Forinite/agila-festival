'use client'
import React from 'react'
import Link from "next/link";
import {XIcon} from "lucide-react";
const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;
    if(form) form.reset();
}

const SearchFormReset = () => {
    return (
        <button type="reset" onClick={reset}>
            <Link href="/" className=" relative -left-12 w-6 h-6 flex items-center justify-center mr-4 rounded-full float-end p-1 bg-red-500 text-white hover:bg-red-600 transition-colors cursor-pointer border" >
                <XIcon />
            </Link>
        </button>
    )
}
export default SearchFormReset
