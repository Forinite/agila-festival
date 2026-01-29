//otherApps/PayC/Home/main/addMoney/BankTransferSuccessDropUpContent.tsx:1

import React from 'react'
import { Wallet2} from "lucide-react";

const BankTransferSuccessDropUpContent = () => {
    return (
        <div>

            <div className={'mt-4 flex flex-col items-center justify-center  pb-2  rounded-lg '}>
               <Wallet2 className={'w-36 h-36 mt-8'} />
                <h2 className={'text-xl font-bold py-8 text-center w-[80%]'}>You have successfully deposited NGN 5000</h2>
            </div>

            <button className={'_payc-btn-color w-full h-fit py-3  font-semibold rounded-lg mb-8'}>
                Check Wallet
            </button>
        </div>
    )
}
export default BankTransferSuccessDropUpContent
