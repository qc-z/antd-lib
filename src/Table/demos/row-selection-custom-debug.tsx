/**
 * title: 自定义选择项组
 * desc: 自定义选项分组。
 */

import { Table } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import type { TableRowSelection } from 'antd/lib/table/interface'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name'
  }
]

const data: DataType[] = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name:
      i % 2 === 0
        ? `Edward King ${i}`
        : 'Another Row'
  })
}

const App: React.FC = () => {
  const rowSelection: TableRowSelection<DataType> =
    {
      renderCell: (
        checked,
        _record,
        index,
        node
      ) => ({
        props: {
          rowSpan: index % 2 === 0 ? 2 : 0
        },
        children: (
          <>
            {String(checked)}: {node}
          </>
        )
      })
    }
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
    />
  )
}

export default App
