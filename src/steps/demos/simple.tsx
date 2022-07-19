/**
 * title: 基本用法
 * desc: 简单的步骤条。
 */

import { Steps } from 'antd-packages'
import React from 'react'

const { Step } = Steps

const App: React.FC = () => (
  <Steps current={1}>
    <Step
      title="Finished"
      description="This is a description."
    />
    <Step
      title="In Progress"
      subTitle="Left 00:00:08"
      description="This is a description."
    />
    <Step
      title="Waiting"
      description="This is a description."
    />
  </Steps>
)

export default App
