import React from 'react';

const ItemSize = ({ sizes = [], selectedSize, onSizeSelect }) => {
    const handleSizeChange = (size) => {
        onSizeSelect(size === selectedSize ? '' : size);
    }
  
    return (
        <div className="w-full font-semibold flex flex-col gap-3 text-black py-2 bg-white">
            <h3 className="text-xl">Sizes</h3>
            <div className="jstart gap-2 flex-row flex">
                {sizes?.map((num, i) => (
                    <div key={i} className="w-12 h-12 rounded-[0.3rem] border flex items-center justify-center">
                        <label className="relative w-full h-full flex items-center justify-center">
                            <input 
                                value={num}
                                checked={selectedSize === num}
                                onChange={() => handleSizeChange(num)}
                                type="checkbox" 
                                className="absolute opacity-0 peer" 
                            />
                            <span className={`text-black full font-light w-full h-full flex items-center justify-center rounded-[0.3rem] 
                                ${selectedSize === num ? 'bg-black text-white' : ''}`}>
                                {num}
                            </span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemSize;