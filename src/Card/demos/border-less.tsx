/**
 * title: 无边框
 * desc: 在灰色背景上使用无边框的卡片。
 */

import { Card } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <div className="site-card-border-less-wrapper">
    <Card
      title="Card title"
      bordered={false}
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
)

export default App
