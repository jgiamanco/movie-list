export interface Movie {
   id: number;
   name: string;
   genre: string;
   image: string;
   releaseYear: string; 
}

export const movies: Movie[] = [
    {
        id: 1,
        name: 'Braveheart',
        genre: 'Action, War',
        image: 'https://image.tmdb.org/t/p/original/dTh9WxDGKsdH0XaoVre8lQ1rHmE.jpg',
        releaseYear: '1995',
    },
    {
        id: 2,
        name: 'Gladiator',
        genre: 'Action, War',
        image: 'https://image.tmdb.org/t/p/w1280/kvXbWUN39JGvRu1ovrQiHMi80NI.jpg',
        releaseYear: '2000',
    },
    {
        id: 3,
        name: '300',
        genre: 'Action, War',
        image: 'https://image.tmdb.org/t/p/w1280/bYR8O1H1ZlME7Dm9ysfTYZnRDpw.jpg',
        releaseYear: '2007',
    },
    {
        id: 4,
        name: 'Black Hawk Down',
        genre: 'Action, War',
        image: 'https://image.tmdb.org/t/p/w1280/yUzQ4r3q1Dy0bUAkMvUIwf0rPpR.jpg',
        releaseYear: '2001',
    },
    {
        id: 5,
        name: 'American Sniper',
        genre: 'Action, War',
        image: 'https://image.tmdb.org/t/p/w1280/svPHnYE7N5NAGO49dBmRhq0vDQ3.jpg',
        releaseYear: '2014',
    },
    {
        id: 6,
        name: 'The Patriot',
        genre: 'Action, War',
        image: 'https://image.tmdb.org/t/p/w1280/yQE8Ag9t1wQHjY58rPzJX8G1iIz.jpg',
        releaseYear: '2000',
    },
    {
        id: 7,
        name: 'The Last Samurai',
        genre: 'Action, War',
        image: 'https://image.tmdb.org/t/p/w1280/sLv5pXysIz7QbtKFJy85d5yxv2W.jpg',
        releaseYear: '2003',
    },
    {
        id: 8,
        name: '12 Strong',
        genre: 'Action, War',
        image: 'https://image.tmdb.org/t/p/w1280/j18021qCeRi3yUBtqd2UFj1c0RQ.jpg',
        releaseYear: '2018',
    },
    {
        id: 9,
        name: 'Letters from Iwo Jima',
        genre: 'Action, War',
        image: 'https://image.tmdb.org/t/p/w1280/8GLgaYF65Xy6DCIxJHOJpcjPT6K.jpg',
        releaseYear: '2006',
    },
    {
        id: 10,
        name: 'Flyboys',
        genre: 'Action, War',
        image: 'https://image.tmdb.org/t/p/w1280/jYSHs9k786gKxz1WyCzHyDbZQ2d.jpg',
        releaseYear: '2006',
    },
]