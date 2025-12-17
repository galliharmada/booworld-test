export interface Comment {
    id: string;
    author: {
        name: string;
        avatar: string;
        mbti: string;
        zodiac: string;
        age?: number;
        awards?: number;
    };
    content: string;
    gif?: string;
    likes: number;
    replies: number;
    timeAgo: string;
}

export interface RelatedPost {
    id: string;
    title: string;
    date: string;
    likes: number;
    comments: number;
    slug: string;
}

export interface Universe {
    name: string;
    souls: string;
    slug: string;
}
