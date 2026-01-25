import React from 'react'
import {ArrowLeft} from "lucide-react";
import Image from "next/image";
import {nearbyDeviceSearchImage} from "@/otherApps/PayC/constants/images";

const NearbyUserSearchScreen_Airdrop = () => {
    return (
        <main className={' h-screen px-6'}>
            <div className={'flex flex-col  justify-between h-full'}>
                <div className={'mt-6'}>
                    <ArrowLeft className={'w-8 h-8'} />
                </div>

                <div className={'flex flex-col  justify-center text-center w-full'}>
                    <div className={'w-36 aspect-square mx-auto'}>
                        <Image src={nearbyDeviceSearchImage} alt={'Searching For Devices Image'} />
                    </div>
                    <h2 className={'text-3xl font-bold mt-12'}>Searching for nearby users</h2>

                    <div className={'text-lg  mt-2 text-neutral-300'}>
                        <p>PayC is searching for nearby devices. </p>
                        <p>Make sure devices are not more than 4 meters apart </p>
                    </div>

                </div>

                <div className={'pb-16'} />
            </div>
        </main>
    )
}
export default NearbyUserSearchScreen_Airdrop
