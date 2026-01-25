// otherApps/PayC/Home/main/addMoney/BankTransferDropUpContent.tsx:1

import React from 'react'
import {ClipboardCopy, Copyleft, FileStackIcon} from "lucide-react";

const userBankDetails = {
    bankName: 'Providus',
    accountNumber: '1234567890',
    accountName: 'John Doe'
}

const bankDetails = [
    {label: 'Bank', content: userBankDetails.bankName },
    {label: 'Account Number', content: userBankDetails.accountNumber , copiable: true},
    {label: 'Account Name', content: userBankDetails.accountName },
]
const BankTransferDropUpContent = () => {
    return (
        <div>
            <h3 className={' mt-8  text-2xl font-bold'}>Bank Transfer</h3>
            <h4 className={'text-neutral-300 mt-2 w-[90%]'}>Use the details below to receive money into your TapPayWallet</h4>

            <div className={'mt-4 flex flex-col items-center justify-center  pb-2 bg-[#3B82F6] rounded-lg '}>
                { bankDetails.map((item, index) => (
                    <div key={index} className={'w-full rounded-md  flex items-center text-left gap-4 px-4 py-4'}>
                        <div className={'w-[90%]'}>
                            <h4 className={'text-lg font-semibold'}> {item.label}</h4>
                            <h6 className={'text-sm'}>{item.content}</h6>
                        </div>
                        {item.copiable? <div className={'w-[10%]'}>
                            <button className={'text-white'}>
                                <FileStackIcon />
                            </button>
                        </div>: ''}
                    </div>
                ))
                }

            </div>

            <button className={'_payc-btn-color w-full h-fit py-3 mt-8 text-sm font-semibold rounded-lg mb-8'}>
                Confirm Transaction
            </button>
        </div>
    )
}
export default BankTransferDropUpContent
