import React from 'react'
import {ArrowLeft, PlusIcon, SearchIcon} from "lucide-react";

const SearchBeneficiaries = () => {
    return (
        <main className={'h-screen'}>
            <div className={'px-8 h-full'}>
                <div className={'pt-6 w-fit h-fit'}>
                    <ArrowLeft className={'w-6 h-6 text-white r'} />
                </div>
                <h2 className={'text-3xl font-bold pt-6'}>Send Money </h2>

                <form className={'mt-8 '}>

                    <div>
                        <div className={'relative flex items-center'}>
                            <SearchIcon className={'absolute left-4 top-5 _payc-blue-text'} />
                            <input type={'search'} placeholder={'search beneficiaries'} className={'w-full mt-2 h-12 pl-12 text-sm rounded-md _payc-btn-border text-white'} />
                        </div>

                        <div>
                            <div className={'flex items-center  pl-4 text-white gap-8 mt-12 '}>
                                <PlusIcon />
                                <p className={' text-sm'}>
                                    New account
                                </p>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

        </main>
    )
}
export default SearchBeneficiaries
