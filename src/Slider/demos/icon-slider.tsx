/**
 * title: 带 icon 的滑块
 * desc: 滑块左右可以设置图标来表达业务含义。
 */

import {
  FrownOutlined,
  SmileOutlined
} from '@ant-design/icons'
import { Slider } from 'antd'
import React, { useState } from 'react'

interface IconSliderProps {
  max: number
  min: number
}

const IconSlider: React.FC<IconSliderProps> = (
  props
) => {
  const { max, min } = props
  const [value, setValue] = useState(0)

  const mid = Number(((max - min) / 2).toFixed(5))
  const preColorCls =
    value >= mid ? '' : 'icon-wrapper-active'
  const nextColorCls =
    value >= mid ? 'icon-wrapper-active' : ''

  return (
    <div className="icon-wrapper">
      <FrownOutlined className={preColorCls} />
      <Slider
        {...props}
        onChange={setValue}
        value={value}
      />
      <SmileOutlined className={nextColorCls} />
    </div>
  )
}

const App: React.FC = () => (
  <IconSlider min={0} max={20} />
)

export default App
