/**
 * title: 禁用
 * desc: 选择框的不可用状态。你也可以通过数组单独禁用RangePicker的其中一项。
 */

import { DatePicker, Space } from 'antd-packages'
import moment from 'moment'
import React from 'react'

const { RangePicker } = DatePicker

const dateFormat = 'YYYY-MM-DD'

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      defaultValue={moment(
        '2015-06-06',
        dateFormat
      )}
      disabled
    />
    <DatePicker
      picker="month"
      defaultValue={moment('2015-06', 'YYYY-MM')}
      disabled
    />
    <RangePicker
      defaultValue={[
        moment('2015-06-06', dateFormat),
        moment('2015-06-06', dateFormat)
      ]}
      disabled
    />
    <RangePicker
      defaultValue={[
        moment('2019-09-03', dateFormat),
        moment('2019-11-22', dateFormat)
      ]}
      disabled={[false, true]}
    />
  </Space>
)

export default App
