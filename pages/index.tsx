import type { InferGetStaticPropsType } from 'next';
import getAllProducts from '@framework/product/get-all-product';
import { getConfig } from '@framework/api/config';
import { Layout } from '@components/common';
import { ProductCard } from '@components/common/product/ProductCard';
import { Grid, Hero, Marquee } from '@components/ui';

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
        )}
      </Grid>
      <Hero
        headline="text to text to to to tot o to toto"
        description="Hello moto la lo le le ext to text to to to tot o to toto ext to text to to to tot o to toto ext to text to to to tot o to toto ext to text to to to tot o to toto"
      />
      <Marquee>
        {products.slice(0, 3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
            variant="slim"
          />
        )}
      </Marquee>
      <Grid layout="B">
        {products.slice(0, 3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
        )}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0, 3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
            variant="slim"
          />
        )}
      </Marquee>
    </>
  )
}
