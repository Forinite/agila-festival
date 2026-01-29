'use client'

import React, {useState} from "react";
import {ArrowDown, Coins, EyeIcon, HelpingHand, LucideArrowRightLeft, SendIcon, Wallet2} from "lucide-react";
import {nairaImage, suiImage, usdcImage} from "@/otherApps/PayC/constants/images";
import Image from "next/image";


const footerNavs = [
    {label: 'Tokens', icon: <Coins /> },
    {label: 'Wallet', icon: <Wallet2 /> },
    {label: 'Swap', icon: <LucideArrowRightLeft /> },
]

const mockBalance = 0

const fiatPort  = [
    {
        tokenName: 'Naira',
        tokenImage: nairaImage,
        currency: 'NGN',
        value: 30000,
        dollarExchangeRate: 1440,
    },

]


const cryptoPort  = [
    {
        tokenName: 'USDC',
        tokenImage: usdcImage,
        amount: {
            value: 5,
            currency: 'USDC',
            fiatCurrency: 'NGN',
            fiatExchangeRate: 6000,
            dollarExchangeRate: 1.01,
        },
    },

    {
        tokenName: 'SUI',
        tokenImage: suiImage,
        amount: {
            value: 5,
            currency: 'SUI',
            fiatCurrency: 'NGN',
            fiatExchangeRate: 6000,
            dollarExchangeRate: 1.75,
        },
    },

]


 const PortfolioPage = () => {

    const [currentFooterNav, setCurrentFooterNav] = useState(0);
    return (
        <main className={' flex flex-col justify-between h-screen'}>

            <section>


                <section>
                    <div className={'mt-12 text-center '}>
                        <h2 className={'font-bold text-4xl '}> Your Portfolio </h2>
                        <div className={' mt-3 text-xs text-neutral-400 flex items-center justify-center gap-2'}>
                            <h6 >Total</h6>
                            <EyeIcon className={'w-3 h-3'} />
                        </div>
                        <div className={'flex items-center justify-center gap-2 mt-2'}>
                            <h2 className={'font-bold text-4xl'}>NGN {fiatPort[0].value.toFixed(0)}</h2>
                            <div className={'w-5 aspect-square rounded-full border border-[#3B82F6] flex items-center justify-center gap-2'} >
                                <ArrowDown className={'w-3 h-3 _payc-blue-text'} />
                            </div>
                        </div>


                    </div>
                </section>

                <section>
                    <div className={'mt-8'}>

                        <div >

                            <div
                                style={{
                                    boxShadow: '0px 0px 10px rgba(115,115, 115)',
                                }}
                                className={'w-[90%] min-h-[120px] h-fit mx-auto bg-[#182C53] text-slate-300   rounded-lg'}
                            >

                                <div>
                                    <div className={'pt-2 px-3  flex items-center justify-between'}>
                                        <h4 className={'text-neutral-400 font-semibold'}>Fiat </h4>
                                    </div>

                                    <div className={'flex flex-col items-center justify-center space-y-2  min-h-[70px] h-fit pt-2 pb-6  gap-2'}>
                                        {fiatPort.length === 0 ?
                                            (
                                                <div className={'w-full h-full flex items-center  justify-center'}>
                                                    <h5 className={'text-neutral-400 text-xs'}>You have no cash yet</h5>
                                                </div>
                                            ): fiatPort.map((fiat, index) => (
                                                    <div  key={index} className={'w-full  flex items-center justify-center px-4'}>
                                                        <div className={'w-full  flex items-center justify-between gap-2  '}>

                                                            <div className={'flex items-center gap-3 w-fit'}>
                                                                <div className={'_payc-blue-text'}>
                                                                    <Image src={fiat.tokenImage} alt={fiat.tokenName} width={300} height={300} className={' h-8 w-auto'} />
                                                                </div>

                                                                <div>
                                                                    <h4 className={'font-bold '}>{fiat.tokenName}</h4>
                                                                    <h6 className={'text-xs text-neutral-400'}> $1 =  {fiat.currency} {fiat.dollarExchangeRate} </h6>
                                                                </div>
                                                            </div>

                                                            <div className={'flex flex-col items-center justify-center w-fit'}>
                                                                <h4 className={'font-bold  w-fit'}> {fiat.currency} {fiat.value.toLocaleString()}</h4>
                                                            </div>

                                                        </div>
                                                    </div>
                                                )
                                            )

                                        }
                                    </div>
                                </div>

                                <div>
                                    <div className={'pt-2 px-3  flex items-center justify-between'}>
                                        <h4 className={'text-neutral-400 font-semibold'}>Crypto </h4>
                                    </div>

                                    <div className={'flex flex-col items-center justify-center space-y-2  min-h-[70px] h-fit pt-2 pb-6  gap-2'}>
                                        {cryptoPort.length === 0 ?
                                            (
                                                <div className={'w-full h-full flex items-center  justify-center'}>
                                                    <h5 className={'text-neutral-400 text-xs'}>You don't have any crypto yet</h5>
                                                </div>
                                            ): cryptoPort.map((token, index) => (
                                                    <div  key={index} className={'w-full  flex items-center justify-center px-4'}>
                                                        <div className={'w-full flex items-center justify-between gap-2  '}>

                                                            <div className={'flex items-center gap-3 w-fit'}>
                                                                <div className={'_payc-blue-text'}>
                                                                    <Image src={token.tokenImage} alt={token.tokenName} width={300} height={300} className={' h-8 w-auto'} />
                                                                </div>

                                                                <div>
                                                                    <h4 className={'font-bold '}>{token.tokenName}</h4>
                                                                    <h6 className={'text-xs text-neutral-400'}>1 {token.amount.currency} =  $ {token.amount.dollarExchangeRate} </h6>
                                                                </div>
                                                            </div>

                                                            <div className={'flex flex-col items-center justify-center w-fit'}>
                                                                <h4 className={'font-bold  w-fit'}> {token.amount.value} {token.amount.currency}</h4>
                                                                <h6 className={'text-xs text-neutral-400 w-fit '} > {token.amount.fiatCurrency} {(token.amount.value * token.amount.fiatExchangeRate).toLocaleString()}</h6>
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

                    </div>
                </section>

                <section className={''}>
                    <div className={'py-20'}>
                        <div className={'w-fit h-fit bg-[#3B82F6] rounded-full mx-auto text-white px-12 py-4 text-sm font-semibold '}>
                            Swap Crypto
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

export default PortfolioPage

