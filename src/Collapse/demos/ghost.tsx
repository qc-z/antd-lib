/**
 * title: 幽灵折叠面板
 * desc: 将折叠面板的背景变成透明。
 */

import { Collapse } from 'antd'
import React from 'react'

const { Panel } = Collapse

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const App: React.FC = () => (
  <Collapse defaultActiveKey={['1']} ghost>
    <Panel
      header="This is panel header 1"
      key="1"
    >
      <p>{text}</p>
    </Panel>
    <Panel
      header="This is panel header 2"
      key="2"
    >
      <p>{text}</p>
    </Panel>
    <Panel
      header="This is panel header 3"
      key="3"
    >
      <p>{text}</p>
    </Panel>
  </Collapse>
)

export default App
