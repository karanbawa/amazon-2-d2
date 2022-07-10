import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import Currency from 'react-currency-formatter';
import Header from '../components/Header';
import { selectItems, selectTotal } from '../slices/basketSlice';

function Checkout() {

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const {data: session} = useSession();

  return (
    <div className='bg-gray-100'>
      <Header />

      <main className='lg:flex max-w-screen-xl mx-auto'>
        {/* Left */}
        <div className='flex-grow m-5 shadow-sm'>
            <Image
            src="https://links.papareact.com/ikj"
             width={1020}
             height={250}
             objectFit="contain"
            />

            <div className='flex flex-col p-5 space-y-10 bg-white'>
                <h1 className='text-3xl border-b pb-4'>{items.length == 0 ? "Your Amazon Basket is empty" : "Shopping Basket"}</h1>
                {items.map((item, i) => (
                    <CheckoutProduct
                    key={i}
                    id ={item.id}
                    title = {item.title}
                    rating = {item.rating}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    hasPrime={item.hasPrime}
                    />
                ))}
            </div>
        </div>

        {/* Right */}
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {items.length > 0  && (
            <>
              <h2>Subtotal ({items.length} items):{" "} 
              <span className='font-bold'>
              <Currency quantity={total} currency="GBP"/>
                </span>
                </h2>

                <button 
                disabled={!session}
                className={`button mt-2 ${!session && 'fron-gray-300 to-gray-500 border border-gray-200 text-gray-300'}`}>
                  {!session ? 'Sign in to Checkout' : 'Proceed to Checkout'}
                </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default Checkout;
