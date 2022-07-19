/**
 * title: 标签
 * desc: 使用`label`标签单独展示时间。
 */

import type { RadioChangeEvent } from 'antd-packages'
import { Radio, Timeline } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [mode, setMode] = useState<
    'left' | 'alternate' | 'right'
  >('left')

  const onChange = (e: RadioChangeEvent) => {
    setMode(e.target.value)
  }

  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20
        }}
      >
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group>
      <Timeline mode={mode}>
        <Timeline.Item label="2015-09-01">
          Create a services
        </Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">
          Solve initial network problems
        </Timeline.Item>
        <Timeline.Item>
          Technical testing
        </Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">
          Network problems being solved
        </Timeline.Item>
      </Timeline>
    </>
  )
}

export default App
