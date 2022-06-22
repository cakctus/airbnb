import React from 'react'
import Item from './Item'

function Items() {
  return (
   <div className='item-map'>
    {Item.map(item => {
        return (
            <ItemCard item={item} key={item.id} />
        )
    })}
   </div>
  )
}

const  ItemCard  = ({item}) => {
    const {stars, total, img, location, status} = item

    let statusSpan
    if (status === 0) {
        statusSpan = 'SOLD OUT'
    } else if (status === 1) {
        statusSpan = 'ONLINE'
    }

    document.documentElement.style.setProperty(
        '--rating', 5
      )
    return (
        <section className='items'>
            <div className='item-box'>
                <div className='item-item'>
                    <div className='item-header'>
                        <img className='item-img' src={img} alt="" width="150px" height="250px" />
                        <span className='item-info'>{ statusSpan && statusSpan }</span>
                    </div>
                    <div className='item-body'>
                        <div className='item-body-stars'>
                            <div className="Stars"></div>
                            <small className='stars-review'>( {stars} of {total} )</small>
                            <span className='country'>{location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Items;