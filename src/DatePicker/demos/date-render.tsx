/**
 * title: 定制日期单元格
 * desc: 使用`dateRender`可以自定义日期单元格的内容和样式。
 */

import { DatePicker, Space } from 'antd'
import React from 'react'

const { RangePicker } = DatePicker

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      dateRender={(current) => {
        const style: React.CSSProperties = {}
        if (current.date() === 1) {
          style.border = '1px solid #1890ff'
          style.borderRadius = '50%'
        }
        return (
          <div
            className="ant-picker-cell-inner"
            style={style}
          >
            {current.date()}
          </div>
        )
      }}
    />
    <RangePicker
      dateRender={(current) => {
        const style: React.CSSProperties = {}
        if (current.date() === 1) {
          style.border = '1px solid #1890ff'
          style.borderRadius = '50%'
        }
        return (
          <div
            className="ant-picker-cell-inner"
            style={style}
          >
            {current.date()}
          </div>
        )
      }}
    />
  </Space>
)

export default App
