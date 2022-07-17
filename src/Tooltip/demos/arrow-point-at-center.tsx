/**
 * title: 箭头指向
 * desc: 设置了`arrowPointAtCenter`后，箭头将指向目标元素的中心。
 */

import { Button, Tooltip } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Tooltip
      placement="topLeft"
      title="Prompt Text"
    >
      <Button>Align edge / 边缘对齐</Button>
    </Tooltip>
    <Tooltip
      placement="topLeft"
      title="Prompt Text"
      arrowPointAtCenter
    >
      <Button>
        Arrow points to center / 箭头指向中心
      </Button>
    </Tooltip>
  </>
)

export default App
