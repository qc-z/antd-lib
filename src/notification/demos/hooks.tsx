/**
 * title: 通过 Hooks 获取上下文
 * desc: 通过`notification.useNotification`创建支持读取context的`contextHolder`。
 */

import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined
} from '@ant-design/icons'
import {
  Button,
  Divider,
  notification,
  Space
} from 'antd'
import type { NotificationPlacement } from 'antd/lib/notification'
import React from 'react'

const Context = React.createContext({
  name: 'Default'
})

const App: React.FC = () => {
  const [api, contextHolder] =
    notification.useNotification()

  const openNotification = (
    placement: NotificationPlacement
  ) => {
    api.info({
      message: `Notification ${placement}`,
      description: (
        <Context.Consumer>
          {({ name }) => `Hello, ${name}!`}
        </Context.Consumer>
      ),
      placement
    })
  }

  return (
    <Context.Provider
      value={{ name: 'Ant Design' }}
    >
      {contextHolder}
      <Space>
        <Button
          type="primary"
          onClick={() =>
            openNotification('topLeft')
          }
        >
          <RadiusUpleftOutlined />
          topLeft
        </Button>
        <Button
          type="primary"
          onClick={() =>
            openNotification('topRight')
          }
        >
          <RadiusUprightOutlined />
          topRight
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() =>
            openNotification('bottomLeft')
          }
        >
          <RadiusBottomleftOutlined />
          bottomLeft
        </Button>
        <Button
          type="primary"
          onClick={() =>
            openNotification('bottomRight')
          }
        >
          <RadiusBottomrightOutlined />
          bottomRight
        </Button>
      </Space>
    </Context.Provider>
  )
}

export default App
