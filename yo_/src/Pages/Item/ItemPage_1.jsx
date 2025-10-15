import React from 'react'
import ItemImages from '../../Part/Item/ItemPage_1/ItemImages'
import ItemInfo from '../../Part/Item/ItemPage_1/ItemInfo'
import ItemColor from '../../Part/Item/ItemPage_1/ItemColor'
import ItemSize from '../../Part/Item/ItemPage_1/ItemSize'
import ItemAddToCard from '../../Part/Item/ItemPage_1/ItemAddToCard'

const ItemPage_1 = ({
  data,
  sizes,
  colors,
  selectedColor,
  selectedSize,
  selectedVariant,
  onColorSelect,
  onSizeSelect
}) => {
  return (
    <div className="w-screen min-h-screen h-screen1 text-white min-h-screen bg-gray-50 page pb-7">
      <ItemImages imgs={data?.images} />
      
      <div className="w-full default_padding">
        <ItemInfo 
          name={data?.name} 
          price={selectedVariant?.price || data?.basePrice} 
        />
        <ItemColor 
          colors={colors} 
          selectedColor={selectedColor}
          onColorSelect={onColorSelect}
        />
        <ItemSize 
          sizes={sizes} 
          selectedSize={selectedSize}
          onSizeSelect={onSizeSelect}
        />
        <ItemAddToCard 
          variantId={selectedVariant?.id} 
          isAvailable={!!selectedVariant}
        />
      </div>
    </div>
  )
}

export default ItemPage_1