import React from 'react'
import {ArrowLeft} from "lucide-react";
import Image from "next/image";
import {handHoldingPhone} from "@/otherApps/PayC/constants/images";

const AirdropIntorPage = () => {
    return (
        <main className={'px-6 h-screen'}>
            <div className={'h-full flex flex-col justify-between '}>
                <div className={'flex flex-col justify-between h-[80%]'}>
                    <duv>
                        <div className={'pt-8'}>
                            <ArrowLeft className={'w-7 h-7'}  />
                        </div>
                        <div className={' mt-2'}>
                            <h2 className={'text-3xl font-bold pt-6'}>Airdrop a friend</h2>
                            <p className={'text-lg text-neutral-300 mt-2'}>PayC uses NFC technology in your phone to allow peer-to-peer transfers between two devices</p>
                        </div>
                    </duv>


                    <div>
                        <div className={'w-full flex justify-end'}>
                            <Image className={'w-[80%] h-auto'} src={handHoldingPhone} alt={'Hand holding phone'} width={1080} height={1080} />
                        </div>
                    </div>

                </div>
                <div className={'w-full h-fit py-4 mb-12  font-bold text-center rounded-lg _payc-btn-color text-white'}>
                    Continue
                </div>

            </div>

        </main>
    )
}
export default AirdropIntorPage
