import React from 'react'

const Checkbox = ({value="checkbox",checked=false,onChange,label="chackbox"}) => {
  return (
     <div  className=" h-12  rounded-[0.3rem] border flex items-center justify-center">
                        <label className="relative w-full h-full flex items-center justify-center">
                            <input 
                                value={value}
                                checked={checked}
                                onChange={onChange}
                                 type="checkbox" 
                                className="absolute opacity-0 peer" 
                            />
                           <span className={`full font-light w-full px-3 h-full flex items-center justify-center rounded-[0.3rem] 
                                ${value==label ? 'bg-black text-white' : ''}`}>
                                {label}
                            </span>
                        </label>
                    </div>
  )
}

export default Checkbox