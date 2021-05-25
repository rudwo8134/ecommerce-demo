
import {createSelector} from 'reselect'
import memoize from 'lodash.memoize';



const selectshop = state => state.shop

export const selectShopdata = createSelector(
    [selectshop],
    shop => shop.collections
)


export const selectCollection = param =>
createSelector(
    [selectShopdata],
    collection =>collection[param])




export const selectCollectionforPreview = createSelector(
    [selectCollection],
    collections => Object.keys(collections).map(key=> collections[key])
)