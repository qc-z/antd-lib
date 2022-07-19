
/**
  * title: undefined
  * desc: 使用`useBreakpoint`Hook个性化布局。
  */

import { Grid, Tag } from 'antd-packages';
import React from 'react';

const { useBreakpoint } = Grid;

const App: React.FC = () => {
  const screens = useBreakpoint();

  return (
    <>
      Current break point:{' '}
      {Object.entries(screens)
        .filter(screen => !!screen[1])
        .map(screen => (
          <Tag color="blue" key={screen[0]}>
            {screen[0]}
          </Tag>
        ))}
    </>
  );
};

export default App;
