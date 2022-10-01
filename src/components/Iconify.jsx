import React from 'react'
import { Icon } from '@iconify/react';

export default function Iconify({icon,width,height,color,props}) {
  return (
    <div>
        <Icon icon={icon} width={width} height={height} color={color} {...props} />
    </div>
  )
}
