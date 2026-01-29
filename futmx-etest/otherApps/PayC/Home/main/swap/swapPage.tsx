import React from 'react'
import Image from "next/image";
import {_nairaIcon, suiIcon} from "@/otherApps/PayC/constants/images";
import {ArrowDown, ArrowUpDown} from "lucide-react";

const SwapPage = () => {
    return (
        <main className={'w-screen h-screen px-4 flex flex-col justify-between'}>
            <div className={'h-[80%]'}>
                <h2 className={'text-3xl pt-4 pb-3 text-center font-bold '}>Swap</h2>

                <div className={'space-y-3 relative h-fit '}>
                    <div className={'absolute w-full h-full  overflow-visible  flex items-center justify-center'}>
                        <div className={'w-12 aspect-square rounded-full bg-neutral-900 flex items-center justify-center'}>
                            <div className={' w-[85%] aspect-square bg-neutral-700 rounded-full flex items-center justify-center'}>
                                <ArrowUpDown className={'text-neutral-500'} />
                            </div>
                        </div>
                    </div>

                    <div className={' h-20 w-full bg-[#234786] px-2 py-2 rounded-lg flex items-center justify-between6u7'}>
                        <div className={'px-1 flex flex-col items-start justify-start w-full'}>
                            <div className={''}>
                                <h5 className={'text-xs font-bold '}>You sell</h5>
                            </div>

                            <div className={'flex items-center justify-between w-full'}>
                                <p className={'text-3xl font-bold '}>100</p>

                                <div className={'w-[80px] h-7 bg-neutral-800 flex items-center justify-between rounded-md'}>
                                    <div className={'flex items-center justify-between w-full px-2'}>
                                        <div className={'py-1 flex items-center gap-1.5'}>
                                            <Image src={suiIcon} alt={'Sui Icon'}  width={100} height={100} className={'h-5 w-5 rounded-full '} />
                                            <p className={'uppercase text-[10px] font-bold'}>SUI</p>
                                        </div>

                                        <ArrowDown className={'w-3 h-3 text-neutral-400'} />
                                    </div>
                                </div>

                            </div>


                            <div className={'text-[7px] flex items-center justify-between w-full pt-1'}>
                                <div> Available . {'USDT'} . {12}</div>
                                <div> Est~ $ {5000} </div>
                            </div>

                        </div>
                    </div>

                    <div className={' h-20 w-full bg-[#234786] px-2 py-2 rounded-lg flex items-center justify-between6u7'}>
                        <div className={'px-1 flex flex-col items-start justify-start w-full'}>
                            <div className={''}>
                                <h5 className={'text-xs font-bold '}>You receive</h5>
                            </div>

                            <div className={'flex items-center justify-between w-full'}>
                                <p className={'text-3xl font-bold '}> { 100000 } </p>

                                <div className={'w-[80px] h-7 bg-neutral-800 flex items-center justify-between rounded-md'}>
                                    <div className={'flex items-center justify-between w-full px-2'}>
                                        <div className={'py-1 flex items-center gap-1.5'}>
                                            <Image src={_nairaIcon} alt={'Sui Icon'}  width={100} height={100} className={'h-4 w-4 rounded-full '} />
                                            <p className={'uppercase text-[10px] font-bold'}> { 'NGN' } </p>
                                        </div>

                                        <ArrowDown className={'w-3 h-3 text-neutral-400'} />
                                    </div>
                                </div>

                            </div>


                            <div className={'text-[7px] flex items-center justify-between w-full pt-1'}>
                                <div> Available . {'USDT'} . {12}</div>
                                <div> Est~ $ {5000} </div>
                            </div>

                        </div>
                    </div>


                </div>

                <div className={'mt-4'}>
                    <div className={'flex items-center justify-between' }>
                        {[10,25,50,75,100].map((percent, i) => (
                            <button key={i} className={'w-fit h-fit px-3 py-0.5 text-[9px] font-bold text-white  rounded-sm bg-[#234786]'}>
                                {percent == 100? 'Max': percent + '%'}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={'mt-6'}>
                    <div className={'flex items-center gap-3'}>
                        <h6 className={'text-xs font-bold'}>
                            Rate:
                        </h6>

                        <div className={'flex items-center gap-2'}>
                            <Image src={suiIcon} alt={'suiIcon'} width={100} height={100} className={'h-3 w-3 rounded-full '} />

                            <p className={'text-[9px] font-semibold'}>1 { 'sui' } to { 4.71 } {'USDC'} </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className={'h-[19%]'}>

                <button className={'_payc-btn-color text-sm font-bold text-white w-full h-fit py-3 text-center rounded-lg'}>
                    Swap
                </button>
            </div>

        </main>
    )
}
export default SwapPage
