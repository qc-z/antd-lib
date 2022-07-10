/**
 * title: 自定义
 * desc: 自定义图片链接、图片大小、描述、附属内容。
 */

import { Button, Empty } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60
    }}
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
)

export default App
