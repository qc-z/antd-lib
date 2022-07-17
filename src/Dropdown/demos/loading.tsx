/**
 * title: 加载中状态
 * desc: 添加`loading`属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
 */

import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd-packages'
import React, { useState } from 'react'

const menu = (
  <Menu
    items={[
      {
        label: 'Submit and continue',
        key: '1'
      }
    ]}
  />
)

const App: React.FC = () => {
  const [loadings, setLoadings] = useState<
    boolean[]
  >([])

  const enterLoading = (index: number) => {
    setLoadings((state) => {
      const newLoadings = [...state]
      newLoadings[index] = true
      return newLoadings
    })

    setTimeout(() => {
      setLoadings((state) => {
        const newLoadings = [...state]
        newLoadings[index] = false
        return newLoadings
      })
    }, 6000)
  }

  return (
    <Space direction="vertical">
      <Dropdown.Button
        type="primary"
        loading
        overlay={menu}
      >
        Submit
      </Dropdown.Button>
      <Dropdown.Button
        type="primary"
        size="small"
        loading
        overlay={menu}
      >
        Submit
      </Dropdown.Button>
      <Dropdown.Button
        type="primary"
        loading={loadings[0]}
        overlay={menu}
        onClick={() => enterLoading(0)}
      >
        Submit
      </Dropdown.Button>
      <Dropdown.Button
        icon={<DownOutlined />}
        loading={loadings[1]}
        overlay={menu}
        onClick={() => enterLoading(1)}
      >
        Submit
      </Dropdown.Button>
    </Space>
  )
}

export default App
