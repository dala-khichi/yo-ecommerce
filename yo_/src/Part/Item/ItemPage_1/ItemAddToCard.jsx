import React from 'react'
import Yo from '../../Utility/Axios';

const ItemAddToCard = ({ variantId, isAvailable }) => {
  const handleAddToCart = () => {
    if (!isAvailable) return;
    console.log('Adding variant to cart:', variantId);
    try {
      Yo.post("/api/site/cart",{item_variant_id:variantId, quantity:5})
    } catch (error) {
      console.log(error);
    }

    
    
    
    
  }

  return (
    <div className="w-full mt-4">
      <button
        onClick={handleAddToCart}
        disabled={!isAvailable}
        className={`w-full py-3 rounded-md font-medium text-white ${
          isAvailable ? 'bg-black hover:bg-gray-800' : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        {isAvailable ? 'Add to Cart' : 'Select Options'}
      </button>
      {variantId && (
        <p className="text-xs text-gray-500 mt-2">Variant ID: {variantId}</p>
      )}
    </div>
  )
}

export default ItemAddToCard