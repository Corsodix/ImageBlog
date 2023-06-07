

export type PostData = {
    id: number;
    published: boolean;
    text?: string;
    userId: string;
    sport: string;
    value: number;
    favorite: boolean;
    videoUrl?: string;
    img_thumb: string;
    img_medium: string;
    img_url: string;
    img_title: string;
    img_height: number;
    img_width: number;
    img_ratio: number;
    createdAt: Date;
};