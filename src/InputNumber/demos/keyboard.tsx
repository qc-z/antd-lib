/**
 * title: 键盘行为
 * desc: 使用`keyboard`属性可以控制键盘行为。
 */

import {
  Checkbox,
  InputNumber,
  Space
} from 'antd'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [keyboard, setKeyboard] = useState(true)

  return (
    <Space>
      <InputNumber
        min={1}
        max={10}
        keyboard={keyboard}
        defaultValue={3}
      />
      <Checkbox
        onChange={() => {
          setKeyboard(!keyboard)
        }}
        checked={keyboard}
      >
        Toggle keyboard
      </Checkbox>
    </Space>
  )
}

export default App
