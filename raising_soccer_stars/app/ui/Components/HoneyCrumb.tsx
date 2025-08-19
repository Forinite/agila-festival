import React from 'react'
import Image from "next/image";
import {BallImage} from "@/app/constants";

const HoneyCrumb = () => {
    return (
        <div>
            <div className={'relative flex item-center justify-center h-80  overflow-hidden group '}>
                <div className={'w-full h-full  '}>
                    <Image className={'hover:scale-110 transition-all duration-500'} width={1080} height={1080} alt={'Image Of Ball'} src={BallImage} />
                </div>
                <div className={'absolute h-full w-full  bg-gradient-to-t from-black/[0.0] via-black/[0.4] to-black/[0.2] flex flex-col items-center justify-center pointer-events-none'}>
                    <p className={'font-bold  font-serif text-base uppercase text-white'}>Home/<span className={'text-orange-500 '}>Home</span></p>
                    <h4 className={'text-white text-xl uppercase font-serif font-extrabold' }>Home</h4>
                </div>
            </div>
        </div>
    )
}
export default HoneyCrumb
