import Header from "@/app/ui/Components/Header";
import Page from "@/app/(components)/Hero/page";
import InfoSection from "@/app/ui/Components/infocard";
import ServiceSection from "@/app/(components)/Services/page";
import AboutPage from "@/app/(components)/About/page";
// app/components/PlayersSection.tsx

import PlayersSection from "@/app/(components)/Players/page";
import Blog from "@/app/(components)/Blog/page";
import PlatformerGame from "@/app/ui/Components/PlatformerGame";
import ContactUs from "@/app/(components)/ContactUs/page";
import GetStarted from "@/app/(components)/GetStarted/page";

export default function Home() {
  return (
    <div>
        <Page />
        <AboutPage />
        {/*<InfoSection />*/}
        <ServiceSection />

        <PlayersSection />
        {/*<Blog />*/}
        <ContactUs />
        <GetStarted />

    </div>
  );
}
