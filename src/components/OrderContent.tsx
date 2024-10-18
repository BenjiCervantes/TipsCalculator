import { MenuItem, OrderItem } from "../types"
import { FormatCurrency } from '../helpers/index';

type OrderContentProps = {
  order: OrderItem[]
  removeFromOrder: (id: MenuItem['id']) => void
}

export default function OrderContent({order, removeFromOrder}: OrderContentProps) {
  return (
    <div>
      <h2 className='text-4xl font-black'>Consumo</h2>
      <div className="space-y-3 mt-5">
        {
          order.map(item => (
            <div key={item.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
              <div>
                <p className="text-lg">
                  {item.name} - { FormatCurrency(item.price) }
                </p>
                <p className="font-black">
                  Cantidad: { item.quantity } - Total: { FormatCurrency(item.price*item.quantity) }
                </p>
              </div>
              <div>
                <button 
                  className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                  onClick={()=> removeFromOrder(item.id)}
                  >X</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
