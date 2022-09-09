export const products = [
    {
        id: 1,// will be a uuid
        name: 'product name', // Nivea cream
        suppliers_ids: [],
        size: { // 500g, 250g, 100g
            ['size-1']: { // 500g
                price: {
                    unit: 1, // 10 usd
                    dozen: 2,// 100 usd
                    box: 3, // 180 usd
                },
                quantity: {
                    box_units: 4, // 2
                    per_unit: 6, // 12
                },
                status: 'active', //
                urls: {
                    images: ['image_url'], // images
                },
            },
            ['size-2']: { // 250g
                price: {
                    unit: 1, // 10 usd
                    dozen: 2,// 100 usd
                    box: 3, // 180 usd
                },
                quantity: {
                    box_units: 4, // 2
                    per_unit: 6, // 12
                },
                status: 'active', //
                urls: {
                    images: ['image_url'], // images
                },
            },
            ['size-3']: { // 500g
                price: {
                    unit: 1, // 10 usd
                    dozen: 2,// 100 usd
                    box: 3, // 180 usd
                },
                quantity: {
                    box_units: 4, // 2
                    per_unit: 6, // 12
                },
                status: 'active', //
                urls: {
                    images: ['image_url'], // images
                },
            }
        },
    },
];

export const suppliers = [
    {
        id: 1,
        name: 'shop name',// Nivea Ghana
        address: {
            city: 'city',
            avenue: 'avenue',
            building: {
                name: 'building name',
                floor: 'floor',
                number: 1,
            },
        },
        contacts: [
            'tel-1', 'tel-2',
        ],
        urls: {
            images: ['image_url'],
        },
        category_ids: [1, 2], // body lotion
    },
];

export const productCategories = [
    {
        id: 1,
        name: 'category 1', // lotion, food, drink
    },
];

export const requisitons = {
    'date-time': [{
        product_id: 1,
        status: 'pending', // can be also completed and uncompleted
        expect_on: 'date', // In case the product is not found but there is a known arrival date
        supplier_id: 1,
        quantity: {
            ['type-box-dozen']: 2,
        }, // type can be 'box, dozen, units'
        price: 2,
    },
        {
            product_id: 1,
            status: 'pending', // can be also completed and uncompleted
            expect_on: 'date', // In case the product is not found but there is a known arrival date
            supplier_id: 1,
            quantity: {
                type: 2,
            }, // type can be 'box, dozen, units'
            price: 2,
        },
        {
            product_id: 1,
            status: 'pending', // can be also completed and uncompleted
            expect_on: 'date', // In case the product is not found but there is a known arrival date
            supplier_id: 1,
            quantity: {
                type: 2,
            }, // type can be 'box, dozen, units'
            price: 2,
        }],
};
