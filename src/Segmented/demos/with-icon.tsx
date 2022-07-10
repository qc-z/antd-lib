/**
 * title: 设置图标
 * desc: 给SegmentedItem设置Icon。
 */

import { Segmented } from 'antd'
import {
  AppstoreOutlined,
  BarsOutlined
} from '@ant-design/icons'

export default () => (
  <Segmented
    options={[
      {
        label: 'List',
        value: 'List',
        icon: <BarsOutlined />
      },
      {
        label: 'Kanban',
        value: 'Kanban',
        icon: <AppstoreOutlined />
      }
    ]}
  />
)
