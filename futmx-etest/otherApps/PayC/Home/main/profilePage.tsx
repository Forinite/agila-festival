'use client'

import React, {useState} from 'react'
import {nairaGlobe, profileImg, quickMenuImages} from "@/otherApps/PayC/constants/images";
import Image, {StaticImageData} from "next/image";
import {
    ArrowDown,
    Coins,
    DownloadIcon,
    EyeIcon, HelpingHand,
    LucideArrowRightLeft,
    LucideHandCoins,
    PlusIcon, SendIcon,
    Wallet2
} from "lucide-react";

const mainNavs = [
    {label: 'Add Money', icon: <PlusIcon />},
    {label: 'Withdraw', icon: <LucideHandCoins /> },
    {label: 'Receive', icon: <DownloadIcon />}
]

const footerNavs = [
    {label: 'Tokens', icon: <Coins /> },
    {label: 'Wallet', icon: <Wallet2 /> },
    {label: 'Swap', icon: <LucideArrowRightLeft /> },
]



const recentTransactions : {
    title: string,
    otherParty: string,
    status: string,
    type: string,
    amount: {
       absValue: number,
       value: string,
       currency: string,
    },
    date: string,
    time: string,

}[] = [
    {
        title: 'Airdrop to @moufta',
        otherParty: '@moufta',
        status: 'sent',
        type: 'Airdrop',
        amount: {
            absValue: 5,
            value: '+5',
            currency: 'USDC',
        },
        date: 'Jan 21, 2025',
        time: '4:47 PM',
    },
    {
        title: 'Airdrop from @moufta',
        otherParty: '@moufta',
        status: 'received',
        type: 'Airdrop',
        amount: {
            absValue: 5,
            value: '+5',
            currency: 'USDC',
        },
        date: 'Jan 21, 2025',
        time: '4:47 PM',
    },
    {
        title: 'Airdrop from @moufta',
        otherParty: '@moufta',
        status: 'received',
        type: 'Airdrop',
        amount: {
            absValue: 5,
            value: '+5',
            currency: 'USDC',
        },
        date: 'Jan 21, 2025',
        time: '4:47 PM',
    }
]

const recentReceipts: {profileImage: StaticImageData, userHandle: string }[] = [
    {profileImage: profileImg, userHandle: '@moutfa'},
    {profileImage: nairaGlobe, userHandle: '@vawlence'},
    {profileImage: nairaGlobe, userHandle: '@stickers'}
]

const mockBalance = 5000
const ProfilePage = () => {

    const [currentFooterNav, setCurrentFooterNav] = useState(0);
    return (
        <main className={' flex flex-col justify-between h-screen'}>

            <section>
                <section className={'relative '}>
                    <div className={'pt-4 pl-4 flex items-center gap-2'}>
                        <div className={'w-fit h-fit rounded-full p-0.5  bg-[#3B82F6] '}>
                            <div className={'w-8 aspect-square rounded-full overflow-hidden'}>
                                <Image src={profileImg} alt={'User profile picture'} />
                            </div>
                        </div>
                        <p className={'font-semibold'}>HI, Jimmy</p>
                    </div>

                    <div className={'absolute top-5 right-4 w-fit h-fit bg-[#182C53]  rounded-md overflow-hidden'}>
                        <div className={'w-fit h-fit flex items-center justify-between'}>
                            <div className={'w-full h-full flex items-center justify-between space-x-4 px-2 py-1'}>
                                {quickMenuImages.map((item, index) => (
                                    <div key={index} className={'w-fit h-fit'}>
                                        <Image src={item.img} alt={item.label} width={400} height={400} className={'w-4 h-auto'} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className={'mt-8 text-center '}>
                        <div className={' text-xs text-neutral-400 flex items-center justify-center gap-2'}>
                            <h6 >Funding Balance</h6>
                            <EyeIcon className={'w-3 h-3'} />
                        </div>
                        <div className={'flex items-center justify-center gap-2 mt-2'}>
                            <h2 className={'font-bold text-4xl'}>NGN {mockBalance.toFixed(0)}</h2>
                            <div className={'w-5 aspect-square rounded-full border border-[#3B82F6] flex items-center justify-center gap-2'} >
                                <ArrowDown className={'w-3 h-3 _payc-blue-text'} />
                            </div>
                        </div>

                        <div className={'mt-4'}>
                            <div className={'flex items-center justify-between gap-4 w-[65%] mx-auto'}>
                                {mainNavs.map((nav, index) => (
                                    <div key={index} className={'flex flex-col items-center justify-center gap-2'}>
                                        <div className={'w-10 text-[#3B82F6] text-4xl aspect-square rounded-full flex items-center justify-center bg-[#182C53] '}>
                                            {nav.icon}
                                        </div>
                                        <h6 className={'text-[9px] text-neutral-300'}>{nav.label}</h6>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className={'mt-8'}>
                        <div
                            style={{
                                boxShadow: '0px 0px 10px rgba(115,115, 115)',
                            }}
                            className={'w-[90%] bg-[#182C53] min-h-[100px] h-fit mx-auto  rounded-lg'}
                        >
                            <div className={'py-2 px-3  flex items-center justify-between'}>
                                <h4 className={'text-neutral-400 font-semibold'}>Recent receipts </h4>
                                <h5 className={'text-[#3B82F6] text-xs'}>See all</h5>
                            </div>

                            <div className={'flex items-center justify-start px-8 min-h-[40px] h-fit py-2  gap-4 '}>
                                {recentReceipts.length === 0 ?
                                    (
                                        <div className={'w-full h-full flex items-center  justify-center'}>
                                            <h5 className={'text-neutral-400 text-xs'}>Make a friend your first receipt</h5>
                                        </div>
                                    ): recentReceipts.map((receipt, index) => (
                                            <div key={index} className={'w-fit h-full flex flex-col items-center justify-center'}>
                                                <div className={'w-10 aspect-square rounded-full overflow-hidden'}>
                                                    <Image width={600} height={600} src={receipt.profileImage} alt={'User profile picture'} />
                                                </div>
                                                <h6 className={'text-xs mt-1 text-white'}>{receipt.userHandle}</h6>
                                            </div>
                                        )
                                    )

                                }
                            </div>

                        </div>

                        <div className={'mt-8'}>

                            <div
                                style={{
                                    boxShadow: '0px 0px 10px rgba(115,115, 115)',
                                }}
                                className={'w-[90%] min-h-[120px] h-fit mx-auto bg-[#182C53]  rounded-lg'}
                            >
                                <div className={'py-2 px-3  flex items-center justify-between'}>
                                    <h4 className={'text-neutral-400 font-semibold'}>Recent transactions </h4>
                                    <h5 className={'text-[#3B82F6] text-xs'}>See all</h5>
                                </div>

                                <div className={'flex flex-col items-center justify-center space-y-2  min-h-[70px] h-fit pt-2 pb-4  gap-2'}>
                                    {recentTransactions.length === 0 ?
                                        (
                                            <div className={'w-full h-full flex items-center  justify-center'}>
                                                <h5 className={'text-neutral-400 text-xs'}>You don't have any transactions yet</h5>
                                            </div>
                                        ): recentTransactions.map((trans, index) => (
                                                <div  key={index} className={'w-full  flex items-center justify-center px-4'}>
                                                    <div className={'w-full flex items-center justify-between gap-2  '}>

                                                        <div className={'flex items-center gap-3 w-fit'}>
                                                            <div className={'_payc-blue-text'}>
                                                                {trans.status === 'sent'? <SendIcon className={'w-6 h-6'}/> : null}
                                                                {trans.status === 'received'? <HelpingHand className={'w-6 h-6'}/> : null}
                                                            </div>

                                                            <div>
                                                                <h4 className={'font-bold '}>{trans.title}</h4>
                                                                <h6 className={'text-xs text-neutral-400'}>{trans.date}, {trans.time}</h6>
                                                            </div>
                                                        </div>

                                                        <div className={'flex flex-col items-center justify-center w-fit'}>
                                                            <h4 className={'font-bold  w-fit'}> {trans.status === 'sent'? '-': '+'}{trans.amount.absValue} {trans.amount.currency}</h4>
                                                            <h6 className={'text-xs text-neutral-400 w-fit '}>{trans.status}</h6>
                                                        </div>

                                                    </div>
                                                </div>
                                            )
                                        )

                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section className={''}>
                        <div className={'py-8'}>
                            <div className={'w-fit h-fit bg-[#3B82F6] rounded-full mx-auto text-white px-12 py-4 text-sm font-semibold '}>
                                Airdrop a friend
                            </div>
                        </div>
                </section>
            </section>

                <div className={' border-0 border-t-[1px] border-slate-600 pt-3 pb-1 bg-[#1B2949]'}>
                    <div className={'flex items-center justify-between mx-auto w-[70%] '}>
                        {footerNavs.map((nav, index) => (
                            <div key={index} className={`flex flex-col items-center justify-center gap-2 ${index ===1? 'text-white': 'text-neutral-400' }`}>

                                <div className={'w-5 h-5'}>
                                    {nav.icon}
                                </div>

                                <h6 className={'text-[9px] '}>{nav.label}</h6>
                            </div>
                        ))}
                    </div>
                </div>

        </main>
    )
}
export default ProfilePage
