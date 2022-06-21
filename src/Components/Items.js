import React from 'react'
import Item from './Item'

function Items() {
  return (
   <div>
    {Item.map((item, id) => {
        return (
            <ItemCard item={item} key={id} />
        )
    })}
   </div>
  )
}

const  ItemCard  = ({item}) => {
    const {stars, total, img} = item
    return (
        <section className='items'>
            <div className='item-box'>
                <div className='item-item'>
                    <div className='item-header'>
                        <img className='item-img' src={img} alt="" width="150px" />
                        <span className='item-info'>SOLD OUT</span>
                    </div>
                    <div className='item-body'>
                        <div className='item-body-stars'>
                            <div className="Stars"></div>
                            <small className='stars-review'>( {stars} of {total} )</small>
                            <span className='country'>USA</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Items;