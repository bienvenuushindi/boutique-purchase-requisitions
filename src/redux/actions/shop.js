export const ADD_SHOP = 'btq_purchase_req/shop/ADD_SHOP';
export const REMOVE_SHOP = 'btq_purchase_req/shop/REMOVE_SHOP';
export const LOAD_SHOP = 'btq_purchase_req/shop/LOAD_SHOP';
export const LOAD_SHOPS = 'btq_purchase_req/shop/LOAD_SHOPS';
export const add = (shop) => ({ type: ADD_SHOP, payload: shop });
export const remove = (shopId) => ({ type: REMOVE_SHOP, payload: shopId });
export const load = () => ({ type: LOAD_SHOP });
export const loadAll = () => ({ type: LOAD_SHOPS });
