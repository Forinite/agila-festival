import React from 'react'
import SendPage from "@/otherApps/PayC/Home/main/sendMoney/sendPage";
import SearchBeneficiaries from "@/otherApps/PayC/Home/main/sendMoney/searchBeneficiaries";
import DropUpComponent from "@/otherApps/PayC/Home/DropUps/DropUpComponent";
import TransactionSuccessPage from "@/otherApps/PayC/Home/main/sendMoney/TransactionSuccessPage";
import MainPage from "@/otherApps/PayC/Home/mainPage";
import ProfilePage from "@/otherApps/PayC/Home/main/profilePage";
import AirdropIntorPage from "@/otherApps/PayC/Home/main/sendMoney/AirdropIntorPage";
import NearbyUserSearchScreen_Airdrop from "@/otherApps/PayC/Home/main/sendMoney/NearbyUserSearchScreen_Airdrop";
import UserFound_Airdrop from "@/otherApps/PayC/Home/main/sendMoney/UserFound_Airdrop";
import TransactionSuccessPage_Airdrop from "@/otherApps/PayC/Home/main/sendMoney/SuccessPage_Airdrop";
import SelectCurrencyDropUpContent from "@/otherApps/PayC/Home/main/currency/SelectCurrencyDropUpContent";

const CurrentPage = () => {
    return (
        <main className={''}>
            {/*<DropUpComponent />*/}
            <SendPage />
            {/*<SearchBeneficiaries />*/}
            {/*<TransactionSuccessPage />*/}

            {/*<ProfilePage />*/}

            {/*<AirdropIntorPage />*/}

            {/*<NearbyUserSearchScreen_Airdrop />*/}
            {/*<UserFound_Airdrop />*/}
            {/*<TransactionSuccessPage_Airdrop />*/}

        </main>

    )
}
export default CurrentPage
