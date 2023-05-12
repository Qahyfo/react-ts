import React, {PropsWithChildren, FC, useState} from 'react'

export enum CardVariant {
    outLined = 'outlined',
    primary = 'primary'
}

interface CardProps extends PropsWithChildren {
    width ?: string
    height ?: string
    variant: CardVariant
    onClick?: (num: number) => void;
}



const Card: FC<PropsWithChildren<CardProps>> =({width, children, height, variant }: CardProps) => {
    const [state, setState] = useState(0)
  return (
    <div style={{
    width, 
    height, 
    border: variant === CardVariant.outLined ?'1px solid gray' : 'none',
    background: variant === CardVariant.primary ? 'lightgray' : ''
    }}>
      {children}
    </div>
  )
}

export default Card
