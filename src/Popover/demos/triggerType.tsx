/**
 * title: 三种触发方式
 * desc: 鼠标移入、聚集、点击。
 */

import { Button, Popover } from 'antd-packages'
import React from 'react'

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

const App: React.FC = () => (
  <div>
    <Popover
      content={content}
      title="Title"
      trigger="hover"
    >
      <Button>Hover me</Button>
    </Popover>
    <Popover
      content={content}
      title="Title"
      trigger="focus"
    >
      <Button>Focus me</Button>
    </Popover>
    <Popover
      content={content}
      title="Title"
      trigger="click"
    >
      <Button>Click me</Button>
    </Popover>
  </div>
)

export default App
