/**
 * title: 基本
 * desc: 最简单的用法。
 */

import { Affix, Button } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [top, setTop] = useState(10)
  const [bottom, setBottom] = useState(10)

  return (
    <>
      <Affix offsetTop={top}>
        <Button
          type="primary"
          onClick={() => setTop(top + 10)}
        >
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button
          type="primary"
          onClick={() => setBottom(bottom + 10)}
        >
          Affix bottom
        </Button>
      </Affix>
    </>
  )
}

export default App
