import { Product as ShopifyProduct } from "../schema";

export function normalizeProduct(productNode: ShopifyProduct): any {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    patch: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    ...rest
  }

  return product;

}