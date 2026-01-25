'use client'

import React, {useState} from 'react'
import Image from "next/image";
import {blankBox, payCards, payGlobe} from "@/otherApps/PayC/constants/images";

const onBoardScreens = [
    {i: 0},
    {i: 1},
    {i: 2},
]



const Screen3 = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLeft = () => {
        let numberOfSlides = 3
        setCurrentSlide((currentSlide + 1) % numberOfSlides)
    }
    const slideRight = () => {
        let numberOfSlides = 3
        setCurrentSlide((currentSlide + (numberOfSlides) - 1) % numberOfSlides)
    }
    return (
        <main className={'w-screen h-screen'}>
            <div className={'relative w-full h-full'}>
                <div className={'w-full flex justify-center items-center'}>
                    <div className={'w-[80%]  grid grid-cols-3 pt-10 pb-4'}>
                        {onBoardScreens.map((screen, index) => (
                            <div key={index} className={`h-0.5 w-[75%] rounded mx-auto ${screen.i === currentSlide ? 'bg-[#00D632]' : 'bg-neutral-300'} `} />
                        ))}
                    </div>
                </div>

                <div onClick={slideLeft} className={'mt-8 w-full overflow-hidden '}>

                    <div className={` w-[300%]  flex justify-center items-center h-fit pb-24  transition-all duration-500 -translate-x-${currentSlide}/3 `}>
                        <div className={'w-full'}>
                            <div className={'w-full h-fit  flex justify-center items-center '}>
                                <Image src={payGlobe} alt={'Pay Globe'} width={1080} height={1080} className={'w-[80%] max-w-[400px] h-auto'} />
                            </div>
                            <div className={'text-center tracking-wide w-[65%] mx-auto mt-6'}>
                                <h2 className={'text-2xl font-bold'}> Send and Receive Crypto</h2>
                                <h5 className={'text-sm mt-3'}> Send and receive crypto assets easily with people</h5>
                            </div>
                        </div>

                        <div className={'w-full'}>
                            <div className={'w-full h-fit  flex justify-center items-center '}>
                                <Image src={blankBox} alt={'Pay Globe'} width={1080} height={1080} className={'w-[80%] max-w-[400px] h-auto'} />
                            </div>
                            <div className={'text-center tracking-wide w-[70%] mx-auto mt-6'}>
                                <h2 className={'text-2xl font-bold'}> Easily convert your Crypto to Cash</h2>
                                <h5 className={' text-sm mt-3'}> Swap to Crypto to cash in seconds</h5>
                            </div>
                        </div>

                        <div className={'w-full'}>
                            <div className={'w-full h-fit  flex justify-center items-center '}>
                                <Image src={payCards} alt={'Pay Globe'} width={1080} height={1080} className={'w-[80%] max-w-[400px] h-auto'} />
                            </div>
                            <div className={'text-center tracking-wide w-[70%] mx-auto mt-6'}>
                                <h2 className={'text-2xl font-bold'}> Make Contactless Crypto Payments</h2>
                                <h5 className={'mt-3 text-sm'}> Easily airdrop crypto tokens to other people easily</h5>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={'absolute bottom-16 w-full '}>
                    <p className={'w-[90%] h-fit py-3 _payc-btn-color flex justify-center mx-auto rounded-md'}>
                        Continue with Google
                    </p>

                    <p className={'w-[90%] h-fit py-3 _payc-btn-border flex justify-center mx-auto rounded-md mt-3'}>
                        Sign up with email address
                    </p>
                </div>



            </div>
        </main>
    )
}
export default Screen3
