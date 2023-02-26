import React from 'react'
import './ProductItem.scss'

interface ProductItemProps {
    src: string
    title: string
    name: string
}

export default function ProductItem({ src, title, name }: ProductItemProps) {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()

    return (
        <div className="product-item" onDragStart={handleDragStart}>
            <img className="img" src={src} alt="" />
            <div className="info">
                <p className="title">{title}</p>
                <p className="name">{name}</p>
            </div>
        </div>
    )
}
