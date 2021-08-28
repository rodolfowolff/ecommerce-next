import { MoneyV2 } from './../schema.d';
import { ImageEdge, Product as ShopifyProduct } from "../schema";
import { Product } from '@common/types/product';

const normalizeProductImages = ({edges} : {edges: Array<ImageEdge>}) =>
  edges.map(({node: { originalSrc: url, ...rest }}) => ({
    url: `/images/${url}`,
    ...rest}
  ))

const normalizeProductPrice = ({currencyCode, amount}: MoneyV2) => ({
  value: +amount,
  currencyCode,
})

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: ImageConnection,
    priceRange,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    patch: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(ImageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest
  }

  return product;

}