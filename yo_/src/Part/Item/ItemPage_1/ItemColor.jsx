import React from 'react'

const ItemColor = ({ colors, selectedColor, onColorSelect }) => {
    const handleColorChange = (color) => {
        onColorSelect(color === selectedColor ? '' : color);
    }
  
    return (
        <div className="w-full font-semibold flex flex-col gap-3 text-black py-2 bg-white">
            <h3 className="text-xl">Colors</h3>
            <div className="jstart gap-2 flex-row flex">
                {colors?.map((color, i) => (
                    <div key={i} className="w-12 h-12 rounded-[0.3rem] border flex items-center justify-center">
                        <label className="relative w-full h-full flex items-center justify-center">
                            <input 
                                value={color}
                                checked={selectedColor === color}
                                onChange={() => handleColorChange(color)}
                                type="checkbox" 
                                className="absolute opacity-0 peer" 
                            />
                            <span className={`full font-light w-full h-full flex items-center justify-center rounded-[0.3rem] 
                                ${selectedColor === color ? 'bg-black text-white' : ''}`}>
                                {color}
                            </span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemColor