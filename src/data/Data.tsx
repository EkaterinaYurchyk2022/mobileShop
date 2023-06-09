import {ItemType} from '../renderItem/RenderItem';

export const images = [
    require('../../assets/image1.png'),
    require('../../assets/image2.png'),
    require('../../assets/image3.png'),
    require('../../assets/image4.png'),
    require('../../assets/image5.png'),
    require('../../assets/image6.png'),
]

export const titles = [
    'Apple iPhone 13 \n128GB Blue',
    'Apple iPhone 14 Pro 128GB Space Black',
    'Apple iPhone 12 128GB Purple',
    'Apple iPhone SE 128GB 2022 Midnight',
    'Apple iPhone 13 512GB Midnight',
    'Apple iPhone 14 Pro Max 256GB Purple',
]

export const prices = [999, 1199, 799, 599, 899, 1199]

export const fakeData: ItemType[] = [...Array(12)].map((_, index) => ({
    id: index + 1,
    title: titles[index % titles.length],
    price: prices[index % prices.length],
    image: images[index % images.length],
}))
