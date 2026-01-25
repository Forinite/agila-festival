import React from 'react'
import {ArrowLeft, Wallet, Wallet2} from "lucide-react";

const TransactionSuccessPage = () => {
    return (
        <main className={'h-screen'}>
            <div className={'w-full h-full flex flex-col  justify-between'}>
                <div className={'pt-4 pl-4 h-fit'}>
                    <ArrowLeft />
                </div>
                <div className={'h-fit '}>
                    <div className={' flex flex-col items-center h-fit gap-4 '}>
                        <Wallet2 className={'w-[180px] h-[80px]'} />
                        <p className={'text-lg font-semibold w-[70%] text-center tracking-wide'}>
                            You have successfully sent &nbsp;
                             <span className={'font-bold'}>NGN 5000</span> &nbsp;to <span  className={'font-bold'}> John</span>
                        </p>
                    </div>
                </div>

                <div className={'px-6 pb-20'}>
                    <button className={' w-full h-fit py-4 text-sm _payc-btn-color rounded-lg font-bold'}>Check Wallet</button>
                </div>

            </div>
        </main>
    )
}
export default TransactionSuccessPage
