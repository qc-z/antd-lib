/**
 * title: 自定义指示符
 * desc: 使用自定义指示符。
 */

import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React from 'react'

const antIcon = (
  <LoadingOutlined
    style={{ fontSize: 24 }}
    spin
  />
)

const App: React.FC = () => (
  <Spin indicator={antIcon} />
)

export default App
