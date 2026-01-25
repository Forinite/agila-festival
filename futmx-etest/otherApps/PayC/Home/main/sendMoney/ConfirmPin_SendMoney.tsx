'use client'

import React from 'react'
import {eyeOnShield} from "@/otherApps/PayC/constants/images";
import Image from "next/image";
import {ScanIcon, SkipBack} from "lucide-react";

const ConfirmPin_SendMoney = () => {

    const [pinInput, setPinInput] = React.useState([null, null, null, null]);


    return (
        <div className={'w-full'}>
            <div className={'w-full'}>
                <div className={' mt-3 w-16 h-16  mx-auto '}>
                    <Image src={eyeOnShield} alt={'cash Icon'} />
                </div>
                <h3 className={' w-fit mx-auto mt-4 text-2xl font-bold'}>Confirm PIN</h3>
                <h4 className={' mt-2 mx-auto w-[90%]  text-center'}>Enter your PIN to authorize this transaction</h4>
            </div>

            <div className={'mt-12  w-full  flex items-center justify-center  gap-3  '}>
                {pinInput.map((item, i) => (
                    <div key={i} className={'_payc-btn-border bg-white flex items-center justify-center _payc-blue-text h-15 w-14 rounded-sm text-3xl font-bold '}>
                        {item === null ? '-' : item }
                    </div>
                ))}
            </div>
            <div className={'mt-12 pb-12'}>
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
                        <div className={'w-full flex items-center justify-center'} >
                            <ScanIcon />
                        </div>

                        {[0].map((item, i) => (
                            <button key={i} className={'w-full _payc-blue py-2 text-white flex items-center justify-center h-12  text-2xl font-extrabold rounded-xl '}  >
                                {item}
                            </button>
                        ))}

                        <button className={'w-full _payc-blue py-2 text-white flex items-center justify-center h-12 text-2xl font-extrabold rounded-xl '}  >
                            <SkipBack />
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default ConfirmPin_SendMoney
