// otherApps/PayC/Home/DropUps/DropUpComponent.tsx:1
//Quic note in the mobile appp the parent folder /otherApss/PayC is non-exitent instaead the only parent folder is /payc
// That means this folder in the mobile app is actually to be located at // payc/Home/DropUps/DropUpComponent.tsx:1
// Same applies for all the other imports throughout the code
'use client'

import React from 'react'

import LoadingDropUp_SendMoney from "@/otherApps/PayC/Home/main/sendMoney/LoadingDropUp_SendMoney";
import SendMoneyDropUP from "@/otherApps/PayC/Home/main/sendMoney/sendMoneyDropUP";
import AddMoneyDropUp from "@/otherApps/PayC/Home/main/addMoney/addMoneyDropUp";
import BankTransferDropUpContent from "@/otherApps/PayC/Home/main/addMoney/BankTransferDropUpContent";
import BankTransferSuccessDropUpContent from "@/otherApps/PayC/Home/main/addMoney/BankTransferSuccessDropUpContent";
import PhoneBehindCardIllustration from "@/otherApps/PayC/Home/main/addMoney/PhoneBehindCardIllustration";
import SelectCurrencyDropUpContent from "@/otherApps/PayC/Home/main/currency/SelectCurrencyDropUpContent";
import EnterAmountDropUpContent from "@/otherApps/PayC/Home/main/sendMoney/EnterAmountDropUpContent";
import ConfirmPin_SendMoney from "@/otherApps/PayC/Home/main/sendMoney/ConfirmPin_SendMoney";
import ConfirmationDropUpContext_Swap from "@/otherApps/PayC/Home/main/swap/confirmationDropUpContext_Swap";

const DropUpComponent = () => {

    return (
        <div className={'absolute left-0 z-30 h-screen w-full bg-black/60 '}>
            <div className={' absolute left-0 bottom-0 h-fit w-full '}>
                <div className={' relative w-full h-fit min-h-[50px] bg-[#10182B]  rounded-t-4xl pt-6 px-6'}>
                    <div className={'w-12 h-1 bg-slate-400 mx-auto  '} />

                   {/*<SendMoneyDropUP />*/}
                   <LoadingDropUp_SendMoney />
                   {/* <AddMoneyDropUp />*/}

                    {/*<BankTransferDropUpContent />*/}
                    {/*<BankTransferSuccessDropUpContent />*/}
                    {/*<PhoneBehindCardIllustration />*/}

                    {/*<SelectCurrencyDropUpContent />*/}

                </div>

                {/*<div className={' relative w-full h-fit min-h-[50px] bg-[#10182B]  rounded-t-4xl pt-6 px-6'}>*/}
                {/*    <div>*/}
                {/*        <ArrowLeft className={'w-6 h-6 text-white r'} />*/}
                {/*    </div>*/}

                {/*    /!*<EnterAmountDropUpContent />*!/*/}
                {/*    /!*<ConfirmPin_SendMoney />*!/*/}


                {/*</div>*/}
                {/*<div className={' relative w-full h-fit min-h-[50px] bg-[#10182B]  rounded-t-4xl pt-6 px-6'}>*/}


                {/*    /!*<ConfirmationDropUpContext_Swap />*!/*/}
                {/*    */}

                {/*</div>*/}

            </div>


        </div>
    )
}
export default DropUpComponent
