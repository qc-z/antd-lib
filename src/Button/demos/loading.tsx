/**
 * title: 加载中状态
 * desc: 添加`loading`属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
 */

import { PoweroffOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [loadings, setLoadings] = useState<
    boolean[]
  >([])

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings]
      newLoadings[index] = true
      return newLoadings
    })

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings]
        newLoadings[index] = false
        return newLoadings
      })
    }, 6000)
  }

  return (
    <>
      <Space style={{ width: '100%' }}>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button
          type="primary"
          size="small"
          loading
        >
          Loading
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading
        />
      </Space>

      <Space style={{ width: '100%' }}>
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
        />
      </Space>
    </>
  )
}

export default App
