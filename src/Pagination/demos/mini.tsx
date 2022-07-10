/**
 * title: 迷你
 * desc: 迷你版本。
 */

import type { PaginationProps } from 'antd'
import { Pagination } from 'antd'
import React from 'react'

const showTotal: PaginationProps['showTotal'] = (
  total
) => `Total ${total} items`

const App: React.FC = () => (
  <>
    <Pagination size="small" total={50} />
    <Pagination
      size="small"
      total={50}
      showSizeChanger
      showQuickJumper
    />
    <Pagination
      size="small"
      total={50}
      showTotal={showTotal}
    />
    <Pagination
      size="small"
      total={50}
      disabled
      showTotal={showTotal}
      showSizeChanger
      showQuickJumper
    />
  </>
)

export default App
