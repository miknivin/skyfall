import { Metadata } from 'next';
import { productData } from '@/data/product-data';
import ShopDetailsMain from '@/pages/shop-details/shop-details';

export const metadata: Metadata = {
  title: 'Travello - Shop Details Page',
};

export default function ShopDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const shop = productData.find((product) => product.id === Number(params.id));
  return shop ? (
    <ShopDetailsMain product={shop} />
  ) : (
    <div className="text-center pt-100">
      Shop not found with id: {params.id}
    </div>
  );
}
