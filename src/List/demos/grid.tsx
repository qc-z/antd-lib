/**
 * title: 栅格列表
 * desc: 可以通过设置`List`的`grid`属性来实现栅格列表，`column`可设置期望显示的列数。
 */

import { Card, List } from 'antd'
import React from 'react'

const data = [
  {
    title: 'Title 1'
  },
  {
    title: 'Title 2'
  },
  {
    title: 'Title 3'
  },
  {
    title: 'Title 4'
  }
]

const App: React.FC = () => (
  <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>
          Card content
        </Card>
      </List.Item>
    )}
  />
)

export default App
