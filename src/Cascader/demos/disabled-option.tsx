/**
 * title: 禁用选项
 * desc: 通过指定options里的`disabled`字段。
 */

import { Cascader } from 'antd'
import React from 'react'

interface Option {
  value: string
  label: string
  disabled?: boolean
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
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
    disabled: true,
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
  />
)

export default App
