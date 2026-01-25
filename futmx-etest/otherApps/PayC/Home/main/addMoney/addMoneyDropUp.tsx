// otherApps/PayC/Home/main/addMoney/addMoneyDropUp.tsx:1

import React from 'react'
import {BitcoinIcon, IdCard, LucideBadgeDollarSign, LucideSmartphone, SendIcon, Wallet2} from "lucide-react";


const addMoneyDropUpOptions = [
    {label: 'Bank Transfer', desc:'Receive money with your account number' , icon: <LucideBadgeDollarSign className={'w-7 h-7'} />},
    {label: 'Card', desc:'Fund wallet using a debit card' , icon: <IdCard className={'w-7 h-7'} />},
    {label: 'Onchain Deposit', desc:'Fund your wallet from a crypto wallet' , icon: <BitcoinIcon className={'w-7 h-7'} />},
]

const AddMoneyDropUp = () => {
    return (
        <div>
            <h3 className={' mt-8  text-2xl font-bold'}>Add Money</h3>

            <div className={'mt-8 flex flex-col items-center justify-center gap-4 pb-12'}>
                { addMoneyDropUpOptions.map((item, index) => (
                    <button key={index} className={'w-full rounded-md bg-[#3B82F6] flex items-center text-left gap-4 px-4 py-4'}>
                        <div className={' px-1'}>
                            {item.icon}
                        </div>
                        <div>
                            <h4 className={'text-lg font-semibold'}> {item.label}</h4>
                            <h6 className={'text-xs'}>{item.desc}</h6>
                        </div>
                    </button>
                ))
                }

            </div>
        </div>
    )
}
export default AddMoneyDropUp
