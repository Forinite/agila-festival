import HomePage from "@/app/(components)/home/page";
import AboutPage from "@/app/(components)/about/page";
import MediaFeed from "@/app/(components)/mediafeed/page";
import SchedulePage from "@/app/(components)/schedule/page";
import PaegentPage from "@/app/(components)/paegent/page";
import InvolvementSection from "@/app/(components)/involvement/page";
import ContactSection from "@/app/(components)/contact/page";
import HeroInfo from "@/app/components/ui/heroInfo";
import Footer from "@/app/(components)/footer/page";
import {FEED_CHECK, FEED_QUERY} from "@/sanity/lib/queries";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";


export default async function Home()
{

    const { data: feedList }  = await sanityFetch({query: FEED_QUERY, tags: []})

    return (
        <>
            <HomePage />;
            <MediaFeed feedList={feedList} />;
            <AboutPage />;
            <SchedulePage />
            <PaegentPage />
            <InvolvementSection />
            <ContactSection />
            <Footer />
            <SanityLive />
        </>
        )

}
