import React from 'react'
import {ArrowDown, ArrowLeft, Copy} from "lucide-react";
import Image from "next/image";
import {suiIcon} from "@/otherApps/PayC/constants/images";

const RecieveCryptoPage = () => {
    return (
        <main className={'w-full h-screen px-6'}>
            <div className={'w-full h-fit pt-2'}>
                <div className={'mt-4'}>
                    <ArrowLeft />
                </div>
                <div className={'mt-4'}>
                    <h2 className={'text-3xl font-extrabold'}>Receive Crypto</h2>

                    <div className={'mt-4'}>
                        <h4 className={'text-sm font-bold'}>Token</h4>

                        <div className={'mt-2 h-fit w-full bg-[#182C53] py-2 rounded-lg'}>
                            <div className={' pl-2 pr-3 flex items-center justify-between '}>
                                <div className={'flex items-center gap-2 '}>
                                    <Image src={suiIcon} alt={'Sui Icon'} width={100} height={100} className={'w-6 aspect-square'} />
                                    <p className={'uppercase text-sm font-bold'}>Sui</p>
                                </div>

                                <div>
                                    <ArrowDown className={'w-2 h-2'} />
                                </div>
                            </div>
                        </div>

                        <h4 className={'mt-6 text-sm font-bold'}>Network</h4>

                    </div>

                    <div className={'mt-6'}>
                        <h4 className={'text-sm font-bold'}>Wallet address</h4>
                        <div className={'p-2 flex items-center justify-center'}>

                            <div className={'min-w-[80%]'}>
                                <p className={'text-[9px] text-neutral-400 font-semibold  h-fit'}>
                                    0x1cbdjlskdji2o3jd239dweew deujd 09322ew0 923few c023d0e 434332323wejwio +cjoijwocw
                                </p>
                            </div>

                            <div className={'flex items-center justify-center gap-1 text-[9px] text-white w-full rounded-sm _payc-btn-color font-bold w-fit px-0 py-1'}>
                                <p className={''}> Copy </p> <Copy className={'w-2 h-2'} />
                            </div>
                        </div>
                        <div className={'mt-2 h-fit w-full bg-[#182C53] py-3 rounded-lg  px-2 text-xs'}>
                            <input type={'text'} placeholder={'Select Network'} className={'w-full h-full'} />

                            <div className={'flex items-center justify-center mt-4'}>
                                <div className={'w-[160px] aspect-square border'} />


                            </div>

                            <p className={'text-center text-sm mt-3 font-bold text-white'}>Scan to send</p>
                            <p className={'text-center text-sm mt-2 font-bold text-white'}>Use this address to receive Sui in seconds</p>


                            <div className={'flex items-center justify-center gap-2 mt-4 h-fit w-full bg-white _payc-blue-text py-1 rounded-sm '}>
                                <div className={'w-1 h-1 rounded-full bg-yellow-600 '} />
                                <p className={'text-[8px] font-bold'}>Only use this account to receive Sui to avoid losing your account permanently </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className={'space-y-3 mt-3'}>
                <button className={'w-full h-fit py-3 text-sm font-bold rounded-sm _payc-btn-color text-white text-center'}>
                    Save QR to Device
                </button>
                <button className={'w-full h-fit py-3 text-sm font-bold rounded-sm border border-white text-white text-center'}>
                    Return to Home
                </button>
            </div>

        </main>

    )
}
export default RecieveCryptoPage
