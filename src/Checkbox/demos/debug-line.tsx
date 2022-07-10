/**
 * title: 同行布局
 * desc: 同行布局
 */

import { Checkbox, Radio, Space } from 'antd'
import React from 'react'

const sharedStyle: React.CSSProperties = {
  border: '1px solid red',
  marginBottom: 16
}

const App: React.FC = () => (
  <div>
    <Space style={sharedStyle} align="center">
      <Checkbox value="light" />
      <div>Bamboo</div>
      <Checkbox value="little">Little</Checkbox>
    </Space>

    <Space style={sharedStyle} align="center">
      <Radio value="light" />
      <div>Bamboo</div>
      <Radio value="little">Little</Radio>
    </Space>

    <div
      style={{
        ...sharedStyle,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Checkbox value="light" />
      <div>Bamboo</div>
      <Checkbox value="little">Little</Checkbox>
    </div>

    <div
      style={{
        ...sharedStyle,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Radio value="light" />
      <div>Bamboo</div>
      <Radio value="little">Little</Radio>
    </div>
  </div>
)

export default App
