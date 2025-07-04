import HomePage from "@/app/(components)/home/page";
import AboutPage from "@/app/(components)/about/page";
import MediaFeed from "@/app/(components)/mediafeed/page";
import SchedulePage from "@/app/(components)/schedule/page";
import PaegentPage from "@/app/(components)/paegent/page";
import InvolvementSection from "@/app/(components)/involvement/page";
import ContactSection from "@/app/(components)/contact/page";
import HeroInfo from "@/app/components/ui/heroInfo";
import Footer from "@/app/(components)/footer/page";

export default function Home() {
    return (
        <>
            <HomePage />;
            <MediaFeed />;
            <AboutPage />;
            <SchedulePage />
            <PaegentPage />
            <InvolvementSection />
            <ContactSection />
            <Footer />
        </>
        )

}
