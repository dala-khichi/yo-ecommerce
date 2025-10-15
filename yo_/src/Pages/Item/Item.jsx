import React from 'react'
import { useEffect, useState } from 'react';
import ItemPage_1 from './ItemPage_1'
import ItemPage_2 from './ItemPage_2'
import ItemPage_3 from './ItemPage_3'
import { useUtility } from "../../Context/UtilityContext"
import { useParams } from 'react-router-dom';
const Item = () => {
  const { getYoData, yoData } = useUtility()
  const [item, setItem] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedVariant, setSelectedVariant] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getYoData("item", "/api/site/items/"+id)
  }, [id]);

  useEffect(() => {
    setItem(yoData?.item)
  }, [yoData?.item]);

  useEffect(() => {
    // Find matching variant when color or size changes
    if (selectedColor && selectedSize && item?.variants ) {
      const variant = item.variants.find(v => 
        v.color === selectedColor && v.size === selectedSize
      );
      setSelectedVariant(variant || null);
    } else {
      setSelectedVariant(null);
    }
  }, [selectedColor, selectedSize, item]);

  // Get unique colors and sizes for dropdowns
  const availableColors = [...new Set(item?.variants?.map(v => v.color) || [])];
  const availableSizes = selectedColor 
    ? [...new Set(item?.variants
        ?.filter(v => v.color === selectedColor)
        .map(v => v.size) || [])]
    : [];

  return (
    <div className="font-[Inter] ani_1 relative z-[10]">
      <ItemPage_1 
        colors={availableColors} 
        sizes={availableSizes} 
        data={item} 
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        selectedVariant={selectedVariant}
        onColorSelect={setSelectedColor}
        onSizeSelect={setSelectedSize}
      />
      <ItemPage_2 />
      <ItemPage_3 />
    </div>
  )
}

export default Item