import {PlayerType} from "@/app/lib/types/player";


export const players: PlayerType[] = [
    {
        id: "1",
        name: "Emmanuel Adebayo",
        role: "Forward",
        age: 22,
        club: "FC Barcelona B",
        achievements: ["Top Scorer Liga 2", "Nigeria U23"],
        image: "/players/adebayo.jpg",
        documents: [
            { label: "CV", url: "/docs/adebayo-cv.pdf" },
            { label: "Stats Report", url: "/docs/adebayo-stats.pdf" },
        ],
        videos: [
            "https://www.youtube.com/watch?v=example1",
            "https://www.youtube.com/watch?v=example2",
        ],
        nationality: "Nigeria",
        position: "Striker",
        bio: "A dynamic forward with excellent finishing skills, currently playing for Barcelona B.",
    },
    {
        id: "2",
        name: "Chinonso Okwu",
        role: "Midfielder",
        age: 25,
        club: "Real Betis",
        achievements: ["La Liga Debut", "Nigeria National Team"],
        image: "/players/okwu.jpg",
        documents: [{ label: "CV", url: "/docs/okwu-cv.pdf" }],
        videos: ["https://www.youtube.com/watch?v=example3"],
        nationality: "Nigeria",
        position: "Central Midfielder",
        bio: "A hardworking midfielder known for his vision and ability to control tempo in midfield.",
    },
    {
        id: "3",
        name: "Kemi Adeleke",
        role: "Defender",
        age: 20,
        club: "Chelsea Women",
        achievements: ["FA Cup Winner", "Nigeria National Team"],
        image: "/players/adeleke.jpg",
        documents: [{ label: "CV", url: "/docs/adeleke-cv.pdf" }],
        videos: [
            "https://www.youtube.com/watch?v=example4",
            "https://www.youtube.com/watch?v=example5",
        ],
        nationality: "Nigeria",
        position: "Centre Back",
        bio: "A strong and composed defender, pivotal in Chelsea Women’s backline and a rising star for Nigeria.",
    },
];

export default players;