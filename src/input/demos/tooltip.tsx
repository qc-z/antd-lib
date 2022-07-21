/**
 * title: 输入时格式化展示
 * desc: 结合[Tooltip](/components/tooltip)组件，实现一个数值输入框，方便内容超长时的全量展现。
 */

import { Input, Tooltip } from 'antd-packages'
import React, { useState } from 'react'

interface NumericInputProps {
  style: React.CSSProperties
  value: string
  onChange: (value: string) => void
}

const formatNumber = (value: number) =>
  new Intl.NumberFormat().format(value)

const NumericInput = (
  props: NumericInputProps
) => {
  const { value, onChange } = props

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value: inputValue } = e.target
    const reg = /^-?\d*(\.\d*)?$/
    if (
      reg.test(inputValue) ||
      inputValue === '' ||
      inputValue === '-'
    ) {
      onChange(inputValue)
    }
  }

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value
    if (
      value.charAt(value.length - 1) === '.' ||
      value === '-'
    ) {
      valueTemp = value.slice(0, -1)
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'))
  }

  const title = value ? (
    <span className="numeric-input-title">
      {value !== '-'
        ? formatNumber(Number(value))
        : '-'}
    </span>
  ) : (
    'Input a number'
  )

  return (
    <Tooltip
      trigger={['focus']}
      title={title}
      placement="topLeft"
      overlayClassName="numeric-input"
    >
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Input a number"
        maxLength={25}
      />
    </Tooltip>
  )
}

const App: React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <NumericInput
      style={{ width: 120 }}
      value={value}
      onChange={setValue}
    />
  )
}

export default App