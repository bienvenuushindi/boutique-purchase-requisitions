export const ADD_PRODUCT = 'btq_purchase_req/product/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'btq_purchase_req/product/REMOVE_PRODUCT';
export const LOAD_PRODUCT = 'btq_purchase_req/product/LOAD_PRODUCT';
export const LOAD_PRODUCTS = 'btq_purchase_req/product/LOAD_PRODUCTS';

export const add = (product) => ({ type: ADD_PRODUCT, payload: product });
export const remove = (productId) => ({ type: REMOVE_PRODUCT, payload: productId });

export const load = () => ({ type: LOAD_PRODUCT });

export const loadAll = () => ({ type: LOAD_PRODUCTS });
