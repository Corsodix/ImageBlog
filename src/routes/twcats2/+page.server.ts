import type { PageServerLoad } from './$types';
import type { Post } from '@prisma/client'


export const load = (async () => {
    const data = []
    for (let i = 0; i < 50; i++) {
        const width = Math.round(Math.random() * (600 - 200) + 200);
        const height = Math.round(Math.random() * (600 - 200) + 200);
        const imgsrc = `https://placekitten.com/${width}/${height}`;
        const ratio = width / height;

        const postData: Post = {
            id: 1,
            published: true,
            userId: 'Имя Участника',
            sport: 'Бег',
            value: 10,
            favorite: true,
            img_thumb: 'https://i.ibb.co/7kqNkXD/IMG-0613.png',
            img_medium: imgsrc,
            img_url: 'https://i.ibb.co/g4xF438/IMG-0613.png',
            img_title: 'kitty',
            img_height: height,
            img_width: width,
            img_ratio: ratio,
            createdAt: new Date(),
            text: null,
            videoUrl: null
        };
        data.push(postData)
    }

    return { data };
}) satisfies PageServerLoad;