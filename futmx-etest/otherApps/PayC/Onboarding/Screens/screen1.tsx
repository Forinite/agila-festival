import React from 'react'
import Image from "next/image";
import {payCLogo} from "@/otherApps/PayC/constants/images";

const Screen1 = () => {
    return (
        <main className={'w-full h-full flex items-center justify-center'}>
            <div className="w-fit h-fit pb-30">
                <Image src={payCLogo} alt={'PayCLogo'} height={120} />
            </div>
        </main>
    )
}
export default Screen1
