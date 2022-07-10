/**
 * title: 其他字符
 * desc: 可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。
 */

import { HeartOutlined } from '@ant-design/icons'
import { Rate } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <>
    <Rate
      character={<HeartOutlined />}
      allowHalf
    />
    <br />
    <Rate
      character="A"
      allowHalf
      style={{ fontSize: 36 }}
    />
    <br />
    <Rate character="好" allowHalf />
  </>
)

export default App
