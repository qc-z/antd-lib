/**
 * title: 多彩文字提示
 * desc: 我们添加了多种预设色彩的文字提示样式，用作不同场景使用。
 */

import { Button, Divider, Tooltip } from 'antd'
import React from 'react'

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime'
]
const customColors = [
  '#f50',
  '#2db7f5',
  '#87d068',
  '#108ee9'
]

const App: React.FC = () => (
  <>
    <Divider orientation="left">Presets</Divider>
    <div>
      {colors.map((color) => (
        <Tooltip
          title="prompt text"
          color={color}
          key={color}
        >
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </div>
    <Divider orientation="left">Custom</Divider>
    <div>
      {customColors.map((color) => (
        <Tooltip
          title="prompt text"
          color={color}
          key={color}
        >
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </div>
  </>
)

export default App
