/**
 * title: 日期时间选择
 * desc: 增加选择时间功能，当`showTime`为一个对象时，其属性会传递给内建的`TimePicker`。
 */

import { DatePicker, Space } from 'antd'
import type {
  DatePickerProps,
  RangePickerProps
} from 'antd/es/date-picker'
import React from 'react'

const { RangePicker } = DatePicker

const onChange = (
  value:
    | DatePickerProps['value']
    | RangePickerProps['value'],
  dateString: [string, string] | string
) => {
  console.log('Selected Time: ', value)
  console.log(
    'Formatted Selected Time: ',
    dateString
  )
}

const onOk = (
  value:
    | DatePickerProps['value']
    | RangePickerProps['value']
) => {
  console.log('onOk: ', value)
}

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      showTime
      onChange={onChange}
      onOk={onOk}
    />
    <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      onChange={onChange}
      onOk={onOk}
    />
  </Space>
)

export default App
