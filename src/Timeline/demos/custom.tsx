/**
 * title: 自定义时间轴点
 * desc: 可以设置为图标或其他自定义元素。
 */

import { ClockCircleOutlined } from '@ant-design/icons'
import { Timeline } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Timeline>
    <Timeline.Item>
      Create a services site 2015-09-01
    </Timeline.Item>
    <Timeline.Item>
      Solve initial network problems 2015-09-01
    </Timeline.Item>
    <Timeline.Item
      dot={
        <ClockCircleOutlined className="timeline-clock-icon" />
      }
      color="red"
    >
      Technical testing 2015-09-01
    </Timeline.Item>
    <Timeline.Item>
      Network problems being solved 2015-09-01
    </Timeline.Item>
  </Timeline>
)

export default App
