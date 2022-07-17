/**
 * title: 前置/后置标签
 * desc: 用于配置一些固定组合。
 */

import { SettingOutlined } from '@ant-design/icons'
import {
  Cascader,
  Input,
  Select,
  Space
} from 'antd-packages'
import React from 'react'

const { Option } = Select

const selectBefore = (
  <Select
    defaultValue="http://"
    className="select-before"
  >
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
)
const selectAfter = (
  <Select
    defaultValue=".com"
    className="select-after"
  >
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
)

const App: React.FC = () => (
  <Space direction="vertical">
    <Input
      addonBefore="http://"
      addonAfter=".com"
      defaultValue="mysite"
    />
    <Input
      addonBefore={selectBefore}
      addonAfter={selectAfter}
      defaultValue="mysite"
    />
    <Input
      addonAfter={<SettingOutlined />}
      defaultValue="mysite"
    />
    <Input
      addonBefore="http://"
      suffix=".com"
      defaultValue="mysite"
    />
    <Input
      addonBefore={
        <Cascader
          placeholder="cascader"
          style={{ width: 150 }}
        />
      }
      defaultValue="mysite"
    />
  </Space>
)

export default App
