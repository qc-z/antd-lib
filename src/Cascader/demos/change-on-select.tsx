/**
 * title: 选择即改变
 * desc: 这种交互允许只选中父级选项。
 */

import { Cascader } from 'antd'
import React from 'react'

interface Option {
  value: string
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hanzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

const onChange = (value: string[]) => {
  console.log(value)
}

const App: React.FC = () => (
  <Cascader
    options={options}
    onChange={onChange}
    changeOnSelect
  />
)

export default App
