/**
 * title: 自定义字段名
 * desc: 自定义字段名。
 */

import { Cascader } from 'antd'
import React from 'react'

interface Option {
  code: string
  name: string
  items?: Option[]
}

const options: Option[] = [
  {
    code: 'zhejiang',
    name: 'Zhejiang',
    items: [
      {
        code: 'hangzhou',
        name: 'Hangzhou',
        items: [
          {
            code: 'xihu',
            name: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    code: 'jiangsu',
    name: 'Jiangsu',
    items: [
      {
        code: 'nanjing',
        name: 'Nanjing',
        items: [
          {
            code: 'zhonghuamen',
            name: 'Zhong Hua Men'
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
    fieldNames={{
      label: 'name',
      value: 'code',
      children: 'items'
    }}
    options={options}
    onChange={onChange}
    placeholder="Please select"
  />
)

export default App
