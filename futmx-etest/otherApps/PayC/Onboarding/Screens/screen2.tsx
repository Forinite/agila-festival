"use client"

import React from 'react'
import Image from "next/image";
import {payGlobe} from "@/otherApps/PayC/constants/images";

const languages = [
    {lang: 'english', code: 'en-US', action: ()=> {}} ,
    {lang: 'french', code: 'fr-FR' , action: ()=> {}} ,
    {lang: 'ghana', code: 'gh-GH' , action: ()=> {}} ,
    {lang: 'kenyian', code: 'ke-KE',  action: ()=> {}} ,
    {lang: 'South African', code: 'sa-SA', action: ()=> {}} ,
    {lang: 'Cameroon', code: 'ca-CA', action: ()=> {}} ,
]

const Screen2 = () => {
    return (
        <main className={'w-screen h-screen'}>
            <div className={'relative w-full h-full'}>
                <div className={' absolute top-6 right-10 text-sm text-black bg-white w-fit h-fit py-0.5 px-1.5 rounded-lg'}>Need help?</div>
                <div className={' '}>
                    <div className={' h-fit text-center pt-30'}>
                        <h3 className={'text-2xl font-semibold tracking-wide'}>Choose your language</h3>
                        <h4 className={'font-semibold'}>What is your preferred language?</h4>
                    </div>
                    <div className={'flex flex-col items-center mt-4'}>

                        {languages.map((lang, index) => (
                            <div onClick={lang.action} key={index} className={'bg-[#3B82F6] w-[90%] h-fit px-6 py-4 font-semibold rounded-xl my-2.5'}>
                                <p className={'text-sm tracking-widest capitalize'}>{lang.lang}</p>
                                <p className={'text-xs'}>Choose this to continue in {lang.lang.toLowerCase()}</p>
                            </div>
                        ))}

                    </div>

                </div>
            </div>

        </main>
    )
}
export default Screen2
