/**
 * title: 三种大小
 * desc: 三种大小的输入框，大的用在表单中，中的为默认。
 */

import { TimePicker } from 'antd'
import moment from 'moment'
import React from 'react'

const App: React.FC = () => (
  <>
    <TimePicker
      defaultValue={moment(
        '12:08:23',
        'HH:mm:ss'
      )}
      size="large"
    />
    <TimePicker
      defaultValue={moment(
        '12:08:23',
        'HH:mm:ss'
      )}
    />
    <TimePicker
      defaultValue={moment(
        '12:08:23',
        'HH:mm:ss'
      )}
      size="small"
    />
  </>
)

export default App
