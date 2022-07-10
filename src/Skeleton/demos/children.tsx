/**
 * title: 包含子组件
 * desc: 加载占位图包含子组件。
 */

import { Button, Skeleton } from 'antd'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [loading, setLoading] = useState(false)

  const showSkeleton = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  return (
    <div className="article">
      <Skeleton loading={loading}>
        <div>
          <h4>Ant Design, a design language</h4>
          <p>
            We supply a series of design
            principles, practical patterns and
            high quality design resources (Sketch
            and Axure), to help people create
            their product prototypes beautifully
            and efficiently.
          </p>
        </div>
      </Skeleton>
      <Button
        onClick={showSkeleton}
        disabled={loading}
      >
        Show Skeleton
      </Button>
    </div>
  )
}

export default App
