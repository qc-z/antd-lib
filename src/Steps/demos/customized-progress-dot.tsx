/**
 * title: 自定义点状步骤条
 * desc: 为点状步骤条增加自定义展示。
 */

import type { StepsProps } from 'antd'
import { Popover, Steps } from 'antd'
import React from 'react'

const { Step } = Steps

const customDot: StepsProps['progressDot'] = (
  dot,
  { status, index }
) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
)

const App: React.FC = () => (
  <Steps current={1} progressDot={customDot}>
    <Step
      title="Finished"
      description="You can hover on the dot."
    />
    <Step
      title="In Progress"
      description="You can hover on the dot."
    />
    <Step
      title="Waiting"
      description="You can hover on the dot."
    />
    <Step
      title="Waiting"
      description="You can hover on the dot."
    />
  </Steps>
)

export default App
