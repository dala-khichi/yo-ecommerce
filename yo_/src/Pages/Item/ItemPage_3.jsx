import React from 'react'
import ItemComment from '../../Part/Item/ItemPage_3/ItemComment'
import ItemCommentShowMoreButton from
'../../Part/Item/ItemPage_3/ItemCommentShowMoreButton'



const ItemPage_3 = () => {
  return (
    <div className="page font-[Inter] bg-gray-100 py-3">
      <div className="full istart flex-col gap-4 default_padding">
        
        
        <ItemComment />
        <ItemComment />
        <ItemComment />
        <ItemComment />
        <ItemComment />
        <ItemComment />
        
        <ItemCommentShowMoreButton />
       
        
      </div>
      
    </div>
  )
}

export default ItemPage_3