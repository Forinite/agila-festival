export interface PlayerType {
    id: string;
    name: string;
    image: string;
    role: string;
    age: number;
    club: string;
    nationality: string;
    achievements: string[];
    documents: { label: string; url: string }[];
    videos: string[];
    position: string;
    bio: string;
}

