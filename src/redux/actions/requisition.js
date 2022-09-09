export const ADD_REQUISITION = 'btq_purchase_req/requisition/ADD_REQUISITION';
export const REMOVE_REQUISITION = 'btq_purchase_req/requisition/REMOVE_REQUISITION';
export const LOAD_REQUISITION = 'btq_purchase_req/requisition/LOAD_REQUISITION';
export const LOAD_REQUISITIONS = 'btq_purchase_req/requisition/LOAD_REQUISITIONS';

export const add = (requisition) => ({ type: ADD_REQUISITION, payload: requisition });
export const remove = (requisition) => ({ type: REMOVE_REQUISITION, payload: requisition });

export const load = () => ({ type: LOAD_REQUISITION });

export const loadAll = () => ({ type: LOAD_REQUISITIONS });
