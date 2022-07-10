/**
 * title: 基本
 * desc: 最简单的用法。
 */

import { Tooltip } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
)

export default App
