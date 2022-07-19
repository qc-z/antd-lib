/**
 * title: 自动分词
 * desc: 试下复制`露西,杰克`并粘贴到输入框里。只在tags和multiple模式下可用。
 */

import { Select } from 'antd-packages'
import React from 'react'

const { Option } = Select

const children: React.ReactNode[] = []
for (let i = 10; i < 36; i++) {
  children.push(
    <Option key={i.toString(36) + i}>
      {i.toString(36) + i}
    </Option>
  )
}

const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}

const App: React.FC = () => (
  <Select
    mode="tags"
    style={{ width: '100%' }}
    onChange={handleChange}
    tokenSeparators={[',']}
  >
    {children}
  </Select>
)

export default App
