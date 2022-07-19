/**
 * title: 自定义选择标签
 * desc: 允许自定义选择标签的样式。
 */

import { Select, Tag } from 'antd-packages'
import type { CustomTagProps } from 'rc-select/lib/BaseSelect'
import React from 'react'

const options = [
  { value: 'gold' },
  { value: 'lime' },
  { value: 'green' },
  { value: 'cyan' }
]

const tagRender = (props: CustomTagProps) => {
  const { label, value, closable, onClose } =
    props
  const onPreventMouseDown = (
    event: React.MouseEvent<HTMLSpanElement>
  ) => {
    event.preventDefault()
    event.stopPropagation()
  }
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  )
}

const App: React.FC = () => (
  <Select
    mode="multiple"
    showArrow
    tagRender={tagRender}
    defaultValue={['gold', 'cyan']}
    style={{ width: '100%' }}
    options={options}
  />
)

export default App
