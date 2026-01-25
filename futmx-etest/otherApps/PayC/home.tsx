// otherApps/PayC/home.tsx:1

import React from 'react'


import Onboarding from "@/otherApps/PayC/Onboarding/onboarding";
import MainPage from "@/otherApps/PayC/Home/mainPage";

const PayCHome = () => {
    return (
        <div className={'w-screen h-screen bg-[#0F172A] text-white'}>
            {/*<Onboarding />*/}
            <MainPage />
        </div>
    )
}
export default PayCHome
