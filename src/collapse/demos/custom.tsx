/**
 * title: 自定义面板
 * desc: 自定义各个面板的背景色、圆角、边距和图标。
 */

import { CaretRightOutlined } from '@ant-design/icons'
import { Collapse } from 'antd-packages'
import React from 'react'

const { Panel } = Collapse

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const App: React.FC = () => (
  <Collapse
    bordered={false}
    defaultActiveKey={['1']}
    expandIcon={({ isActive }) => (
      <CaretRightOutlined
        rotate={isActive ? 90 : 0}
      />
    )}
    className="site-collapse-custom-collapse"
  >
    <Panel
      header="This is panel header 1"
      key="1"
      className="site-collapse-custom-panel"
    >
      <p>{text}</p>
    </Panel>
    <Panel
      header="This is panel header 2"
      key="2"
      className="site-collapse-custom-panel"
    >
      <p>{text}</p>
    </Panel>
    <Panel
      header="This is panel header 3"
      key="3"
      className="site-collapse-custom-panel"
    >
      <p>{text}</p>
    </Panel>
  </Collapse>
)

export default App
