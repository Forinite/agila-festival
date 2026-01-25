import React from 'react'
import {ArrowLeft} from "lucide-react";
import Image from "next/image";
import {userFound_PhoneImage} from "@/otherApps/PayC/constants/images";

const UserFound_Airdrop = () => {
    return (
        <main className={'h-screen'}>
            <div className={'h-full flex flex-col justify-between px-6 py-4'}>
                <div className={'h-fit'}>
                    <ArrowLeft className={'w-8 h-8 text-neutral-300'} />
                </div>

                <div className={'h-[90%]  w-full'}>
                    <div className={'flex flex-col items-center justify-center w-full h-full'}>
                        <div>
                            <Image className={'mx-auto w-30 h-auto '} src={userFound_PhoneImage} alt={'User Found Phone Icon'} width={400} height={400} />
                        </div>
                        <div className={'text-center mt-12'}>
                            <h1 className={'text-3xl font-bold'}>Joshua's Phone</h1>

                            <div className={'text-lg mt-2 text-neutral-300'}>
                                <p>User found!</p>
                                <p>You can send him tokens</p>
                            </div>

                        </div>

                        <div className={'text-sm font-bold _payc-btn-color w-full h-fit py-3 mt-12 text-center rounded-lg'}>Continue</div>

                        <div className={'pt-12'} />
                    </div>

                </div>


            </div>
        </main>
    )
}
export default UserFound_Airdrop
