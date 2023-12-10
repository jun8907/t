import Productitem from '@/components/TeamIntro'
import { data } from '@/app/utils/data'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  
  const {products} = data

  return (
    
    <div>
      <Sidebar />
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          products.map((product) => (
            <Productitem key={product.id} product={product}/>
          ))
        }
      </div>
    </div>
  )
}
