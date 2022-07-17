/**
 * title: 小型进度条
 * desc: 适合放在较狭窄的区域内。
 */

import { Progress } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <div style={{ width: 170 }}>
    <Progress percent={30} size="small" />
    <Progress
      percent={50}
      size="small"
      status="active"
    />
    <Progress
      percent={70}
      size="small"
      status="exception"
    />
    <Progress percent={100} size="small" />
  </div>
)

export default App
