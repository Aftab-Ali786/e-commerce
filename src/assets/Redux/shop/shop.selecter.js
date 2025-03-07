import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

// Selector to get the collections array
export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopItemsForPreview = createSelector(
  [selectShopItems],
  collections => Object.keys(collections).map(key => collections[key])
)
// Selector to get a specific collection by URL parameter
export const selectCollectionByUrlParam = (collectionUrlParam) =>
  createSelector(
    [selectShopItems], // Use selectShopItems to get the collections array
    (collections) =>
      collections.find(
        (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      )
  );