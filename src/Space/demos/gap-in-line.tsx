/**
 * title: Flex gap 样式
 * desc: Debugusage
 */

import { Space, Switch } from 'antd'
import React, { useState } from 'react'

const style: React.CSSProperties = {
  width: 150,
  height: 100,
  background: 'red'
}

const App: React.FC = () => {
  const [singleCol, setSingleCol] =
    useState(false)

  return (
    <>
      <Switch
        checked={singleCol}
        onChange={() => {
          setSingleCol(!singleCol)
        }}
      />
      <div style={{ boxShadow: '0 0 5px green' }}>
        <Space
          style={{
            width: singleCol ? 307 : 310,
            background: 'blue'
          }}
          size={[8, 8]}
          wrap
        >
          <div style={style} />
          <div style={style} />
          <div style={style} />
          <div style={style} />
        </Space>
      </div>
    </>
  )
}

export default App
