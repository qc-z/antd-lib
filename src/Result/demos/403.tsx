/**
 * title: 403
 * desc: 你没有此页面的访问权限。
 */

import { Button, Result } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">Back Home</Button>
    }
  />
)

export default App
