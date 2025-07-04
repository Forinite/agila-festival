import HomeHeaderImage from '../Assets/HeaderImages/HomeHeaderImage.png'
import originBgImage from  '../Assets/HeaderImages/originBgImage.png'
import fillerImage from '../Assets/FeedImages/fillerImage.jpg'
import fillerImage2 from '../Assets/FeedImages/fillerImage2.png'
import paegentQueenImg1 from  '../Assets/PaegentImages/queen_2021.jpg'
import paegentQueenImg2 from  '../Assets/PaegentImages/queen_2022.jpg'
import paegentQueenImg3 from  '../Assets/PaegentImages/queen_2023.jpg'


export const HomeHeaderImg = HomeHeaderImage;
export const originBgImg = originBgImage;
export const heroImages = [HomeHeaderImage, originBgImage, HomeHeaderImage];
export const feedFilterBtnList = ['Masquerade', 'Dance', 'Music', 'FaceOfIdoma']

export const paegentQueenImgList = [paegentQueenImg1, paegentQueenImg2, paegentQueenImg3];

export const feedList = [
    {title: 'Alehcu Parade',desc: 'Maquerade March out', image: originBgImg , tags: ['Masquerade'] },
    {title: 'Ogirinya Dance Performance',desc: 'Traditional Idoma dance showcasing cultural heritage', image: fillerImage2 , tags: ['dance', 'music'] },
    {title: 'Ogirinya Dance Performance',desc: 'Traditional Idoma dance showcasing cultural heritage', image: fillerImage , tags: ['FaceOfIdoma'] },
    {title: 'Ogira Flame Dance',desc: 'Burning Flame show down', image: HomeHeaderImage , tags: ['Dance'] },
    {title: 'Ada Music Fest',desc: 'Traditional Idoma music festival of the year', image: originBgImg , tags: ['Masquerade', 'music'] },
];


