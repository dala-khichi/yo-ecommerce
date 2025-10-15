import { useState, useEffect } from 'react';

const ItemDisplay = ({ itemId }) => {
  const [item, setItem] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [availableSizes, setAvailableSizes] = useState([]);
  const [availableColors, setAvailableColors] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    // Fetch item data
    const fetchItem = async () => {
      try {
        const response = await fetch(`../../src/TestData/ItemData_gpt.json`);
        const data = await response.json();
        setItem(data);
        
        // Get unique colors and sizes
        const colors = [...new Set(data.variants.map(v => v.color))];
        const sizes = [...new Set(data.variants.map(v => v.size))];
        
        setAvailableColors(colors);
        setAvailableSizes(sizes);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
  }, [itemId]);

  useEffect(() => {
    // When color or size changes, find matching variant
    if (selectedColor && selectedSize && item) {
      const variant = item.variants.find(
        v => v.color === selectedColor && v.size === selectedSize
      );
      setSelectedVariant(variant || null);
    } else {
      setSelectedVariant(null);
    }
  }, [selectedColor, selectedSize, item]);

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
    // Reset size when color changes
    setSelectedSize('');
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  if (!item) {
    return <div>Loading item...</div>;
  }

  return (
    <div className="item-container page bg-amber-900 pt-72">
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      
      <div className="variant-selectors">
        {/* Color Selector */}
        <div className="selector-group">
          <label htmlFor="color-select">Color:</label>
          <select
            id="color-select"
            value={selectedColor}
            onChange={handleColorChange}
          >
            <option value="">Select Color</option>
            {availableColors.map(color => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        
        {/* Size Selector - only enabled when color is selected */}
        <div className="selector-group">
          <label htmlFor="size-select">Size:</label>
          <select
            id="size-select"
            value={selectedSize}
            onChange={handleSizeChange}
            disabled={!selectedColor}
          >
            <option value="">Select Size</option>
            {availableSizes
              .filter(size => 
                item.variants.some(v => 
                  v.color === selectedColor && v.size === size
                )
              )
              .map(size => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
          </select>
        </div>
      </div>
      
      {/* Display selected variant info */}
      {selectedVariant ? (
        <div className="variant-info">
          <h3>Price: ${selectedVariant.price.toFixed(2)}</h3>
          <p>Available: {selectedVariant.stock} in stock</p>
          <input 
            type="hidden" 
            name="variantId" 
            value={selectedVariant.id} 
          />
          <p>Selected Variant ID: {selectedVariant.id}</p>
        </div>
      ) : (
        <div className="variant-info">
          {selectedColor && selectedSize ? (
            <p>This combination is not available</p>
          ) : (
            <p>Please select color and size</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemDisplay;