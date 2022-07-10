/**
 * title: 渐进加载
 * desc: 大图使用placeholder渐进加载。
 */

import { Button, Image, Space } from 'antd'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [random, setRandom] = useState<number>()

  return (
    <Space size={12}>
      <Image
        width={200}
        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={200}
          />
        }
      />
      <Button
        type="primary"
        onClick={() => {
          setRandom(Date.now())
        }}
      >
        Reload
      </Button>
    </Space>
  )
}

export default App
