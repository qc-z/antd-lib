/**
 * title: 拖拽上传
 * desc: 把文件拖入指定区域，完成上传，同样支持点击上传。设置`multiple`后，在`IE10+`可以一次上传多个文件。
 */

import { InboxOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { message, Upload } from 'antd'
import React from 'react'

const { Dragger } = Upload

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action:
    'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(
        `${info.file.name} file uploaded successfully.`
      )
    } else if (status === 'error') {
      message.error(
        `${info.file.name} file upload failed.`
      )
    }
  },
  onDrop(e) {
    console.log(
      'Dropped files',
      e.dataTransfer.files
    )
  }
}

const App: React.FC = () => (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">
      Click or drag file to this area to upload
    </p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload.
      Strictly prohibit from uploading company
      data or other band files
    </p>
  </Dragger>
)

export default App
