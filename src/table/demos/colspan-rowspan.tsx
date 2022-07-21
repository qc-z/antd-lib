/**
 * title: 表格行/列合并
 * desc: 表头只支持列合并，使用column里的colSpan进行设置。表格支持行/列合并，使用render里的单元格属性colSpan或者rowSpan设值为0时，设置的表格不会渲染。
 */

import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: string
  name: string
  age: number
  tel: string
  phone: number
  address: string
}

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const sharedOnCell = (
  _: DataType,
  index: number
) => {
  if (index === 4) {
    return { colSpan: 0 }
  }

  return {}
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
    onCell: (_, index) => ({
      colSpan: (index as number) < 4 ? 1 : 5
    })
  },
  {
    title: 'Age',
    dataIndex: 'age',
    onCell: sharedOnCell
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    onCell: (_, index) => {
      if (index === 2) {
        return { rowSpan: 2 }
      }
      // These two are merged into above cell
      if (index === 3) {
        return { rowSpan: 0 }
      }
      if (index === 4) {
        return { colSpan: 0 }
      }

      return {}
    }
  },
  {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
    onCell: sharedOnCell
  },
  {
    title: 'Address',
    dataIndex: 'address',
    onCell: sharedOnCell
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park'
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park'
  }
]

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
  />
)

export default App