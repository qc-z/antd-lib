/**
 * title: 500
 * desc: 服务器发生了错误。
 */

import { Button, Result } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={
      <Button type="primary">Back Home</Button>
    }
  />
)

export default App
