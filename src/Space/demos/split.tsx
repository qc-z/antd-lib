/**
 * title: 分隔符
 * desc: 相邻组件分隔符。
 */

import { Divider, Space, Typography } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Space split={<Divider type="vertical" />}>
    <Typography.Link>Link</Typography.Link>
    <Typography.Link>Link</Typography.Link>
    <Typography.Link>Link</Typography.Link>
  </Space>
)

export default App
