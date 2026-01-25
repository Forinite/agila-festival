import React from 'react'
import {ArrowLeft} from "lucide-react";
import Image from "next/image";
import {successHalfCheck, userFound_PhoneImage} from "@/otherApps/PayC/constants/images";

const TransactionSuccessPage_Airdrop = () => {
    return (
        <main className={'h-screen'}>
            <div className={'h-full px-6 py-4'}>


                <div className={'h-[80%]  w-full pt-12'}>
                    <div className={'flex flex-col items-center justify-center w-full h-full'}>
                        <div>
                            <Image className={'mx-auto w-20 h-auto '} src={successHalfCheck} alt={'Success Icon'} width={400} height={400} />
                        </div>
                        <div className={'text-center mt-2'}>
                            <h1 className={'text-2xl font-bold'}>Success!</h1>

                            <div className={' mt-2 text-neutral-300'}>
                                <p>You have successfully sent!</p>
                                <p>Joshua token</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className={'text-sm font-bold _payc-btn-color w-full h-fit py-3 mt-12 text-center rounded-lg'}>Continue</div>



            </div>
        </main>
    )
}
export default TransactionSuccessPage_Airdrop
