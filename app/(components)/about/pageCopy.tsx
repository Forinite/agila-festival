import React from 'react'
import {PinIcon} from "lucide-react";
import Image from "next/image";
import {originBgImg} from "@/app/constants";

const AboutPage = () => {
    return (
        <section className={'commonPadding'}>
            <div className={'locationCont'}>
                <PinIcon className={'w-4 h-4'} />
                <p>Nigeria, Benue State, Otukpo</p>
            </div>
            <div className={'homeIntroTextCont'}>
                <p className={'homeIntroText'}>
                    The Agila Carnival is the flagship cultural event of the Idoma people, held annually in Otukpo,
                    the traditional and political capital of Idoma Land, Benue State, Nigeria. Named after the Agila
                    people of Ado LGA, this vibrant celebration has evolved into one of the most colorful grassroots
                    carnivals in Nigeria, uniting Idoma people from across the nation and diaspora.
                </p>
            </div>
            <div className={'originSection'}>
                <div className={'subTitleCont'}>
                    <div className={'w-[130vw] relative'}>
                        <Image className={'w-full h-full'} src={originBgImg} alt={'Cultural celebration background'} />
                        <div className={'headerGradient'}/>
                    </div>
                    <div className={'absolute top-0 w-full h-full col-flex-center'}>
                        <p className={'subTitle'}>Celebration & Heritage</p>
                    </div>
                </div>

                <div className={'homeIntroTextCont'}>
                    <p className={'homeIntroText'}>
                        The carnival, officially known as the Agila Social and Economic Carnival, takes place in the
                        last week of December, coinciding with Christmas celebrations. It features spectacular cultural
                        parades, traditional dance competitions showcasing Ogirinya and Ogrinya dances, and the prestigious
                        Face of Idoma beauty pageant. The event combines cultural exhibitions, vibrant fire night celebrations,
                        and a marketplace for traditional crafts and cuisine. Through these diverse activities, the carnival
                        serves as a powerful platform for promoting Idoma cultural heritage, fostering economic development,
                        and strengthening community bonds.
                    </p>
                </div>
            </div>
        </section>

    )
}
export default AboutPage
