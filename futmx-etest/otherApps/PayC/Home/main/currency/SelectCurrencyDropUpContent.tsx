//otherApps/PayC/Home/main/currency/SelectCurrencyDropUpContent.tsx:1

import React from 'react'
import {currencies} from "@/otherApps/PayC/constants/images";
import Image from "next/image";

const SelectCurrencyDropUpContent = () => {
    return (
        <div className={'px-2'}>
            <div>
                <h3 className={'text-xl tracking-wide mt-12 font-semibold'}>Select Currency</h3>

                <div className={'mt-6 space-y-3 pb-20'}>
                    {currencies.map((currency, index) =>(
                        <div className={`flex items-center border  ${index === 0 ? '_payc-btn-border bg-[#3B82F6]/10' :'border-neutral-300 '} rounded-md h-14 text-sm gap-4 px-4 `}>
                            <Image src={currency.img} alt={currency.title} width={200} height={200} className={'h-8 w-auto' } />
                            <p> {currency.title} ({currency.code})</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default SelectCurrencyDropUpContent
