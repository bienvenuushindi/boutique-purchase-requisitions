const products = [
    {
        id: 1,
        name: 'product name',
        price: {
            unit: 1,
            dozen: 2,
            box: 3
        },
        quantity: {
            box_units: 12,
            per_unit: 10,
        },
        urls: {
            images:['image_url']
        }
    }
];

const providers = [
    {
        id: 1,
        name: 'shop name',
        address: {
            city: 'city',
            avenue: 'avenue',
            building: {
                name: 'building name',
                floor: 'floor',
                number: 1
            }
        },
        urls: {
            images:['image_url']
        },
        category_ids:[1,2]
    }
];

const productCategories=[
    {
        id: 1,
        name:'category 1',
    }
];

const providersProducts = [
    {
        provider_id: 1,
        products_ids: [
            1, 2, 3, 4
        ],
    }
];

const requisitons = {
    'date-time': [{
        product_id: 1,
        status: 'pending', // can be also completed and uncompleted
        expect_on:'date', // In case the product is not found but there is a known arrival date
        provider_id:1,
        quantity: {
            [type]: 2
        }, // type can be 'box, dozen, units'
        price: 2
    }],
};