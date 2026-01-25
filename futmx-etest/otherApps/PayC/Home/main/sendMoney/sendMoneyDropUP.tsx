

import React from 'react'
import {LucideSmartphone, SendIcon, Wallet, Wallet2} from "lucide-react";

const sendMoneyDropUpOptions = [
    {label: 'PayC ID', desc:'Send money to a PayC user' , icon: <SendIcon className={''} />},
    {label: 'Airdrop a friend', desc:'Send money wirelessly to another user' , icon: <LucideSmartphone />},
    {label: 'Onchain Transfer', desc:'Send to a crypto wallet' , icon: <Wallet2 className={'w-full'} />},
]


const SendMoneyDropUp = () => {
    return (
        <div>
            <h3 className={' mt-8  text-2xl font-bold'}>Send Money</h3>

            <div className={'mt-8 flex flex-col items-center justify-center gap-4 pb-12'}>
                { sendMoneyDropUpOptions.map((item, index) => (
                    <div key={index} className={'w-full rounded-md bg-[#3B82F6] flex items-center gap-4 px-4 py-4'}>
                        <div className={' px-2'}>
                            {item.icon}
                        </div>
                        <div>
                            <h4 className={'text-lg font-semibold'}> {item.label}</h4>
                            <h6 className={'text-xs'}>{item.desc}r</h6>
                        </div>
                    </div>
                ))
                }

            </div>
        </div>
    )
}
export default SendMoneyDropUp
