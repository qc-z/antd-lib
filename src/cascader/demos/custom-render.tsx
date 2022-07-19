/**
 * title: 自定义已选项
 * desc: 例如给最后一项加上邮编链接。
 */

import { Cascader } from 'antd-packages'
import type { DefaultOptionType } from 'antd-packages/es/cascader'
import React from 'react'

interface Option {
  value: string
  label: string
  children?: Option[]
  code?: number
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
            label: 'West Lake',
            code: 752100
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
            label: 'Zhong Hua Men',
            code: 453400
          }
        ]
      }
    ]
  }
]

const handleAreaClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  label: string,
  option: DefaultOptionType
) => {
  e.stopPropagation()
  console.log('clicked', label, option)
}

const displayRender = (
  labels: string[],
  selectedOptions: DefaultOptionType[]
) =>
  labels.map((label, i) => {
    const option = selectedOptions[i]
    if (i === labels.length - 1) {
      return (
        <span key={option.value}>
          {label} (
          <a
            onClick={(e) =>
              handleAreaClick(e, label, option)
            }
          >
            {option.code}
          </a>
          )
        </span>
      )
    }
    return (
      <span key={option.value}>{label} / </span>
    )
  })

const App: React.FC = () => (
  <Cascader
    options={options}
    defaultValue={[
      'zhejiang',
      'hangzhou',
      'xihu'
    ]}
    displayRender={displayRender}
    style={{ width: '100%' }}
  />
)

export default App
