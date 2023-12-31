import React from 'react'
import { RelatedProductCard } from './RelatedProductCard'

export const ItemRelated = () => {
  return (
    <div className='flex flex-row gap-4'>
      <RelatedProductCard />
      <RelatedProductCard />
      <RelatedProductCard />
    </div>
  )
}
