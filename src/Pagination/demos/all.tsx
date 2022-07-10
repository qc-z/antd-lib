/**
 * title: 全部展示
 * desc: 展示所有配置选项。
 */

import { Pagination } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Pagination
    total={85}
    showSizeChanger
    showQuickJumper
    showTotal={(total) => `Total ${total} items`}
  />
)

export default App
