/**
 * title: 表单数据存储于上层组件
 * desc: 通过`onFieldsChange`和`fields`，可以把表单的数据存储到上层组件或者[Redux](https://github.com/reactjs/redux)、[dva](https://github.com/dvajs/dva)中，更多可参考[rc-field-form示例](https://rc-field-form.react-component.now.sh/?selectedKind=rc-field-form&selectedStory=StateForm-redux&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)。**注意：**将表单数据存储于外部容器[并非好的实践](https://github.com/reduxjs/redux/issues/1287#issuecomment-175351978)，如无必要请避免使用。
 */

import { Form, Input } from 'antd'
import React, { useState } from 'react'

interface FieldData {
  name: string | number | (string | number)[]
  value?: any
  touched?: boolean
  validating?: boolean
  errors?: string[]
}

interface CustomizedFormProps {
  onChange: (fields: FieldData[]) => void
  fields: FieldData[]
}

const CustomizedForm: React.FC<
  CustomizedFormProps
> = ({ onChange, fields }) => (
  <Form
    name="global_state"
    layout="inline"
    fields={fields}
    onFieldsChange={(_, allFields) => {
      onChange(allFields)
    }}
  >
    <Form.Item
      name="username"
      label="Username"
      rules={[
        {
          required: true,
          message: 'Username is required!'
        }
      ]}
    >
      <Input />
    </Form.Item>
  </Form>
)

const App: React.FC = () => {
  const [fields, setFields] = useState<
    FieldData[]
  >([{ name: ['username'], value: 'Ant Design' }])

  return (
    <>
      <CustomizedForm
        fields={fields}
        onChange={(newFields) => {
          setFields(newFields)
        }}
      />
      <pre className="language-bash">
        {JSON.stringify(fields, null, 2)}
      </pre>
    </>
  )
}

export default App
