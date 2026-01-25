//otherApps/PayC/Home/main/sendMoney/EnterAmountDropUpContent.tsx:1

import React from 'react'
import Image from "next/image";
import {nairaGlobe} from "@/otherApps/PayC/constants/images";
import {SkipBack} from "lucide-react";

const EnterAmountDropUpContent = () => {
    return (
        <div className={'w-full'}>
            <div className={'w-full'}>
                <div className={' mt-3 w-16 h-16 rounded-full mx-auto overflow-hidden'}>
                    <Image src={nairaGlobe} alt={'cash Icon'} />
                </div>
                <h3 className={' w-fit mx-auto mt-4 text-2xl font-bold'}>Enter amount</h3>
                <h4 className={'w-fit mt-2 mx-auto text-lg font-semibold'}>John Doe</h4>
                <h5 className={'w-fit mt-1 font-semibold mx-auto text-blue-500'}>PayC Id- @johndoe</h5>

                <h4 className={'text-xl w font-bold mt-3 w-full text-center text-green-400'}>₦0.00</h4>
            </div>

            <div className={'mt-8 pb-12'}>
                <div className={'flex flex-col select-none w-full space-y-4'}>

                    <div className={' w-full flex items-center justify-end gap-4 '}>
                        {[1,2,3].map((item, i) => (
                            <button key={i} className={'w-full _payc-blue py-2 text-white flex items-center justify-center h-12 text-2xl font-extrabold rounded-xl'}  >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className={'w-full flex items-center justify-end gap-4 '}>
                        {[4,5,6].map((item, i) => (
                            <button key={i} className={'w-full _payc-blue py-2 text-white flex items-center justify-center h-12  text-2xl font-extrabold rounded-xl '}  >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className={'w-full flex items-center justify-end gap-4 '}>
                        {[7,8,8].map((item, i) => (
                            <button key={i} className={'w-full _payc-blue py-2 text-white flex items-center justify-center h-12 text-2xl font-extrabold rounded-xl '}  >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className={'w-full flex items-center justify-end gap-4 '}>
                        <div className={'w-full'} />

                        {[0].map((item, i) => (
                            <button key={i} className={'w-full _payc-blue py-2 text-white flex items-center justify-center h-12  text-2xl font-extrabold rounded-xl '}  >
                                {item}
                            </button>
                        ))}

                        <button className={'w-full _payc-blue py-2 text-white flex items-center justify-center h-12 text-2xl font-extrabold rounded-xl '}  >
                            <SkipBack />
                        </button>
                    </div>

                    <div className={'w-full flex items-center justify-end gap-4 '}>
                        <button className={'w-full _payc-blue py-2 text-white flex items-center justify-center h-12  font-extrabold rounded-xl '}  >
                            Send Money
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default EnterAmountDropUpContent
