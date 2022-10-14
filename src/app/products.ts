export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'product 1',
        price: 100,
        description: 'desc1'
    },
    {
        id: 2,
        name: 'product 2',
        price: 200,
        description: 'desc2'
    }
];