//otherApps/PayC/Home/main/addMoney/PhoneBehindCardIllustration.tsx:1

import React from 'react'
import Image from "next/image";
import {cardBehindPhone} from "@/otherApps/PayC/constants/images";

const PhoneBehindCardIllustration = () => {
    return (
        <div>

            <div className={'mt-4 flex flex-col items-center justify-center  pb-2  rounded-lg '}>

                <Image src={cardBehindPhone} alt={'Card Behing Phone Image'} width={400} height={600} className={'w-48 h-auto ml-16 mt-8'} />
                <h2 className={'text-2xl font-bold py-8 text-center'}>You have successfully deposited NGN 5000</h2>
            </div>

            <button className={'_payc-btn-color w-full h-fit py-3  font-semibold rounded-lg mb-8'}>
                Confirming Card
            </button>
        </div>
    )
}
export default PhoneBehindCardIllustration
