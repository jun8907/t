import { data } from '@/app/utils/data'
import Image from 'next/image'

export default function ProductDetailPage({ params: { id } }) {
  const product = data.products.find((x) => x.id === id)
  
  return (
    <div>
      <div className="py-2">
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            sizes="100vw"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-5xl">{product.name}</h1>
            </li>

            <li>
              <hr className="my-3" />
              <p className='text-2xl'>{product.description}</p>
              <p className='text-2xl'>{product.description2}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}