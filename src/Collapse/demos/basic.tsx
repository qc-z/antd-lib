/**
 * title: 折叠面板
 * desc: 可以同时展开多个面板，这个例子默认展开了第一个。
 */

import { Collapse } from 'antd'
import React from 'react'

const { Panel } = Collapse

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key)
  }

  return (
    <Collapse
      defaultActiveKey={['1']}
      onChange={onChange}
    >
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
}

export default App
