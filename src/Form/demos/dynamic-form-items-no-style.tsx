/**
 * title: 动态增减嵌套纯字段
 * desc: 嵌套`noStyle`字段的动态表单示例。
 */

import {
  MinusCircleOutlined,
  PlusOutlined
} from '@ant-design/icons'
import { Button, Form, Input, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(
      'Received values of form:',
      values
    )
  }

  return (
    <Form
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item label="Users">
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ marginBottom: 16 }}
                >
                  <Form.Item
                    noStyle
                    name={[
                      field.name,
                      'lastName'
                    ]}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                  <Form.Item
                    noStyle
                    name={[
                      field.name,
                      'firstName'
                    ]}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={() => {
                      remove(field.name)
                    }}
                  />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App
