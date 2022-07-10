import { StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({ 
    id, title, rating, price, description, category, image, hasPrime
 }) {

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime
        };

        // Push Item into redux
        dispatch(addToBasket(product));
    }

    const removeItemFrombasker = () => {

        // Remove item from redux
        dispatch(removeFromBasket({ id }));
    }

  return (
    <div className='grid grid-cols-5'>
        <Image src={image} height={200} width={200} objectFit="contain" />

        {/* Middle Section */}
        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <div className='flex'>
                {Array(rating).fill().map((_,i) => (
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>

            <p className='text-xs my-2 line-clamp-3'>{description}</p>
            <Currency quantity={price} currency="GBP" />

            {hasPrime && (
                <div className='flex items-center spac-x-2'>
                    <img 
                    loading='lazy'
                    className='w-12'
                    src="https://links.papareact.com/fdw" 
                    alt="" />
                    <p className='text-xs text-gray-500'>Free Next-dat Delivery</p>
                </div>
            )}
        </div>

        {/* Right add/remove buttons */}
        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button className='button' onClick={addItemToBasket}>Add To Basket</button>
        <button className='button' onClick={removeItemFrombasker}>Remove From Basket</button>
        </div>
        
    </div>
  )
}

export default CheckoutProduct;
