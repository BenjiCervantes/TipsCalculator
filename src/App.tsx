import MenuItem from './components/MenuItem';
import OrderContent from './components/OrderContent';
import OrderTotals from './components/OrderTotals';
import TipPercentage from './components/TipPercentage';
import { menuItems } from './data/db';
import useOrder from './hooks/useOrder';

function App() {
  
  const { order, tip, setTip, addItem, removeFromOrder, placeOrder } = useOrder();

  return (
    <>
      <header className=" bg-orange-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
      </header>

      <main className=' max-w-7xl mx-auto py-5 grid md:grid-cols-2'>
        <div className='p-5'>
          <h2 className='text-4xl font-black'>Menú</h2>
          <div className='space-y-3 mt-10'>
          {menuItems.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
            />
          ))}
          </div>
        </div>
        <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>
          { order.length > 0 ? (
            <>
              <OrderContent
              order={order}
              removeFromOrder={removeFromOrder}
            />
            <TipPercentage
              setTip={setTip}
              tip={tip}
            />
            <OrderTotals 
              order={order}
              tip={tip}
              placeOrder={placeOrder}
              />
            </>
          ) : ( 
            <p className="text-center">La orden está vacía</p>
          )
          }
        </div>
      </main>
      <footer>
        <h5 className='bg-orange-400 py-4 font-semibold text-center text-xl'>Acerca de</h5>
        <p className=' p-5'>Este proyecto fue creado en React, utilizando Vite, TypeScript y Tailwind CSS. Se crearon componentes, Hooks personalizados y helpers para dar formato de moneda. Se realizó la optimización haciendo uso de render bajo demanda.</p>
      </footer>
    </>
  )
}

export default App
