import Header from "@/app/ui/Components/Header";
import Page from "@/app/(components)/Hero/page";
import InfoSection from "@/app/ui/Components/infocard";
import ServiceSection from "@/app/(components)/Services/page";
import AboutPage from "@/app/(components)/about/page";
// app/components/PlayersSection.tsx

import PlayersSection from "@/app/(components)/Players/page";
import Blog from "@/app/(components)/Blog/page";
import PlatformerGame from "@/app/ui/Components/PlatformerGame";
import ContactUs from "@/app/(components)/Contact/page";
import GetStarted from "@/app/(components)/GetStarted/page";
import SamplePlayers from "@/app/(components)/Players/SamplePlayers";

export default function Home() {
  return (
    <div>
        <Page />
        <AboutPage />
        {/*<InfoSection />*/}
        <ServiceSection />

        {/*<PlayersSection />*/}

        <SamplePlayers />
        {/*<Blog />*/}
        <ContactUs />
        <GetStarted />

    </div>
  );
}
