/**
 * title: 对齐
 * desc: 设置对齐模式。
 */

import { Button, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <div className="space-align-container">
    <div className="space-align-block">
      <Space align="center">
        center
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
    <div className="space-align-block">
      <Space align="start">
        start
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
    <div className="space-align-block">
      <Space align="end">
        end
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
    <div className="space-align-block">
      <Space align="baseline">
        baseline
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
  </div>
)

export default App
