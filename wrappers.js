(self.webpackChunkantd_packages=self.webpackChunkantd_packages||[]).push([[5275],{76805:function(){},31367:function(w,u,e){"use strict";e.r(u),e.d(u,{default:function(){return z}});var m=e(46327),p=e(56957),f=e(7895),s=e(42655),v=e(99023),t=e(82954),i=e(82287),T=e.n(i),U=e(73430),d=e(50959),x=e(64730),D=e(64925),P=e(54057),j=e(76805),I=e(30739);function F(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,c=I||{},h=c.enable,k=c.disable,C=c.exportGeneratedCSS,S=c.setFetchMethod,R=(0,d.useState)(g),y=(0,p.Z)(R,2),b=y[0],B=y[1],E={brightness:100,contrast:90,sepia:10},$={invert:[],css:"",ignoreInlineStyle:[".react-switch-handle"],ignoreImageAnalysis:[],disableStyleSheetsProxy:!0};(0,d.useEffect)(()=>{if(typeof window!="undefined"&&typeof window.matchMedia!="undefined")return I?(S(fetch),b?h(E,$):k(),()=>{k()}):()=>null},[b]);var Z=(0,d.useMemo)(()=>{var V=()=>B(K=>!K);return{toggle:V,collectCSS:C}},[b]);return[b,Z]}var A=e(80863),O=A.Z.Option;T().locale("zh-cn");var L=g=>{console.log("selected ".concat(g)),window.location.href=g},N=()=>{var g=(0,d.useMemo)(()=>{var y;return(0,P.isBrowser)()?((y=matchMedia)===null||y===void 0?void 0:y("(prefers-color-scheme: dark)").matches)&&"dark":"light"},[]),c=(0,d.useMemo)(()=>(0,P.isBrowser)()?localStorage.getItem("procomponents_dark_theme")||g:"light",[]),h=y=>{try{var b=document.getElementsByTagName("meta")["theme-color"];b.setAttribute("content",y?"#242525":"#1890ff")}catch(B){}},k=F(c==="dark"),C=(0,p.Z)(k,2),S=C[0],R=C[1].toggle;return(0,d.useEffect)(()=>{h(S)},[S]),(0,P.isBrowser)()?d.createElement(f.Z,{checkedChildren:"\u{1F31C}",unCheckedChildren:"\u{1F31E}",defaultChecked:c==="dark",checked:S,onChange:y=>{R(),y?localStorage.setItem("procomponents_dark_theme","dark"):localStorage.setItem("procomponents_dark_theme","light")}}):null};function H(g,c){var h=document.createElement("script");h.type="text/javascript",h.onload=function(){c==null||c()},h.src=g,document.getElementsByTagName("head")[0].appendChild(h)}var M=g=>{var c=g.children,h=(0,m.Z)(g,["children"]),k=Object.keys(x.docVersions).map(C=>d.createElement(O,{value:x.docVersions[C],key:C},C));return d.createElement(D.B6,null,d.createElement(s.ZP,{locale:v.Z},d.createElement(t.Z,h,d.createElement("div",null,d.createElement("div",{key:"children"},c),d.createElement("div",{style:{position:"fixed",right:8,top:0,zIndex:999,display:"flex",alignItems:"center"},key:"procomponents_dark_theme_view",className:"procomponents_dark_theme_view"},d.createElement(A.Z,{size:"small",defaultValue:"0.0.x",style:{width:80,marginLeft:20,marginRight:20},onChange:L},k),(0,P.isBrowser)()?d.createElement(N,null):null)))))},z=M},42566:function(w,u,e){"use strict";e.r(u);var m=e(46327),p=e(7023),f=e(50959),s=e(54057);u.default=v=>{var t=v.children,i=v.location,T=(0,m.Z)(v,["children","location"]);return!(0,s.isBrowser)()||i.pathname.startsWith("/~demos/layout")?t:f.createElement("div",{style:{padding:24,contentVisibility:"auto"}},f.createElement("div",{style:{padding:24,border:"1px solid #f0f0f0"}},t,f.createElement(p.Z,{themeOnly:!0,enableDarkTheme:!0})))}},64730:function(w){w.exports={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"0.0.x":"https://ant.design/index-cn","1.0.x":"https://3x.ant.design/index-cn"}}},19982:function(w,u,e){"use strict";e.d(u,{m:function(){return m.m}});var m=e(78683),p=e(53587)},11672:function(w,u,e){"use strict";e.r(u),e.d(u,{default:function(){return Ip}});var m=e(52306),p=e(50959),f=JSON.parse('{"menus":{"en-US":{"/components":[{"title":"\u901A\u7528","meta":{"order":0,"__fallback":true},"children":[{"path":"/components/button","title":"Button \u6309\u94AE","meta":{}},{"path":"/components/icon/icon","title":"Icon \u56FE\u6807","meta":{}},{"path":"/components/typography","title":"Typography \u6392\u7248","meta":{}}]},{"title":"\u5E03\u5C40","meta":{"order":1,"__fallback":true},"children":[{"path":"/components/divider","title":"Divider \u5206\u5272\u7EBF","meta":{}},{"path":"/components/grid","title":"Grid \u6805\u683C","meta":{}},{"path":"/components/layout","title":"Layout \u5E03\u5C40","meta":{}},{"path":"/components/space","title":"Space \u95F4\u8DDD","meta":{}}]},{"title":"\u5BFC\u822A","meta":{"order":2,"__fallback":true},"children":[{"path":"/components/affix","title":"Affix \u56FA\u9489","meta":{}},{"path":"/components/breadcrumb","title":"Breadcrumb \u9762\u5305\u5C51","meta":{}},{"path":"/components/dropdown","title":"Dropdown \u4E0B\u62C9\u83DC\u5355","meta":{}},{"path":"/components/menu","title":"Menu \u5BFC\u822A\u83DC\u5355","meta":{}},{"path":"/components/page-header","title":"PageHeader \u9875\u5934","meta":{}},{"path":"/components/pagination","title":"Pagination \u5206\u9875","meta":{}},{"path":"/components/steps","title":"Steps \u6B65\u9AA4\u6761","meta":{}}]},{"title":"\u6570\u636E\u5F55\u5165","meta":{"order":3,"__fallback":true},"children":[{"path":"/components/auto-complete","title":"AutoComplete \u81EA\u52A8\u5B8C\u6210","meta":{}},{"path":"/components/cascader","title":"Cascader \u7EA7\u8054\u9009\u62E9","meta":{}},{"path":"/components/checkbox","title":"Checkbox \u591A\u9009\u6846","meta":{}},{"path":"/components/date-picker","title":"DatePicker \u65E5\u671F\u9009\u62E9\u6846","meta":{}},{"path":"/components/form","title":"Form \u8868\u5355","meta":{}},{"path":"/components/input","title":"Input \u8F93\u5165\u6846","meta":{}},{"path":"/components/input-number","title":"InputNumber \u6570\u5B57\u8F93\u5165\u6846","meta":{}},{"path":"/components/mentions","title":"Mentions \u63D0\u53CA","meta":{}},{"path":"/components/radio","title":"Radio \u5355\u9009\u6846","meta":{}},{"path":"/components/rate","title":"Rate \u8BC4\u5206","meta":{}},{"path":"/components/select","title":"Select \u9009\u62E9\u5668","meta":{}},{"path":"/components/slider","title":"Slider \u6ED1\u52A8\u8F93\u5165\u6761","meta":{}},{"path":"/components/switch","title":"Switch \u5F00\u5173","meta":{}},{"path":"/components/time-picker","title":"TimePicker \u65F6\u95F4\u9009\u62E9\u6846","meta":{}},{"path":"/components/transfer","title":"Transfer \u7A7F\u68AD\u6846","meta":{}},{"path":"/components/tree-select","title":"TreeSelect \u6811\u9009\u62E9","meta":{}},{"path":"/components/upload","title":"Upload \u4E0A\u4F20","meta":{}}]},{"title":"\u6570\u636E\u5C55\u793A","meta":{"order":4,"__fallback":true},"children":[{"path":"/components/avatar","title":"Avatar \u5934\u50CF","meta":{}},{"path":"/components/badge","title":"Badge \u5FBD\u6807\u6570","meta":{}},{"path":"/components/calendar","title":"Calendar \u65E5\u5386","meta":{}},{"path":"/components/card","title":"Card \u5361\u7247","meta":{}},{"path":"/components/carousel","title":"Carousel \u8D70\u9A6C\u706F","meta":{}},{"path":"/components/collapse","title":"Collapse \u6298\u53E0\u9762\u677F","meta":{}},{"path":"/components/comment","title":"Comment \u8BC4\u8BBA","meta":{}},{"path":"/components/descriptions","title":"Descriptions \u63CF\u8FF0\u5217\u8868","meta":{}},{"path":"/components/empty","title":"Empty \u7A7A\u72B6\u6001","meta":{}},{"path":"/components/image","title":"Image \u56FE\u7247","meta":{}},{"path":"/components/list","title":"List \u5217\u8868","meta":{}},{"path":"/components/popover","title":"Popover \u6C14\u6CE1\u5361\u7247","meta":{}},{"path":"/components/segmented","title":"Segmented \u5206\u6BB5\u63A7\u5236\u5668","meta":{}},{"path":"/components/statistic","title":"Statistic \u7EDF\u8BA1\u6570\u503C","meta":{}},{"path":"/components/table","title":"Table \u8868\u683C","meta":{}},{"path":"/components/tabs","title":"Tabs \u6807\u7B7E\u9875","meta":{}},{"path":"/components/tag","title":"Tag \u6807\u7B7E","meta":{}},{"path":"/components/timeline","title":"Timeline \u65F6\u95F4\u8F74","meta":{}},{"path":"/components/tooltip","title":"Tooltip \u6587\u5B57\u63D0\u793A","meta":{}},{"path":"/components/tree","title":"Tree \u6811\u5F62\u63A7\u4EF6","meta":{}}]},{"title":"\u53CD\u9988","meta":{"order":5,"__fallback":true},"children":[{"path":"/components/alert","title":"Alert \u8B66\u544A\u63D0\u793A","meta":{}},{"path":"/components/drawer","title":"Drawer \u62BD\u5C49","meta":{}},{"path":"/components/message","title":"Message \u5168\u5C40\u63D0\u793A","meta":{}},{"path":"/components/modal","title":"Modal \u5BF9\u8BDD\u6846","meta":{}},{"path":"/components/notification","title":"Notification \u901A\u77E5\u63D0\u9192\u6846","meta":{}},{"path":"/components/popconfirm","title":"Popconfirm \u6C14\u6CE1\u786E\u8BA4\u6846","meta":{}},{"path":"/components/progress","title":"Progress \u8FDB\u5EA6\u6761","meta":{}},{"path":"/components/result","title":"Result \u7ED3\u679C","meta":{}},{"path":"/components/skeleton","title":"Skeleton \u9AA8\u67B6\u5C4F","meta":{}},{"path":"/components/spin","title":"Spin \u52A0\u8F7D\u4E2D","meta":{}}]},{"title":"\u5176\u4ED6","meta":{"order":6,"__fallback":true},"children":[{"path":"/components/anchor","title":"Anchor \u951A\u70B9","meta":{}},{"path":"/components/back-top","title":"BackTop \u56DE\u5230\u9876\u90E8","meta":{}},{"path":"/components/config-provider","title":"ConfigProvider \u5168\u5C40\u5316\u914D\u7F6E","meta":{}}]}],"*":[{"path":"/","title":"Index","meta":{}}],"/react":[{"path":"/react/introduce","title":"Ant Design of React","meta":{"order":0}},{"path":"/react/getting-started","title":"\u5FEB\u901F\u4E0A\u624B","meta":{"order":2}},{"path":"/react/practical-projects","title":"\u9879\u76EE\u5B9E\u6218","meta":{"order":3}},{"path":"/react/use-with-create-react-app","title":"\u5728 create-react-app \u4E2D\u4F7F\u7528","meta":{"order":4}},{"path":"/react/use-in-typescript","title":"\u5728 TypeScript \u4E2D\u4F7F\u7528","meta":{"order":5}},{"path":"/react/customize-theme","title":"\u5B9A\u5236\u4E3B\u9898","meta":{"order":7}},{"path":"/react/customize-theme-variable","title":"\u52A8\u6001\u4E3B\u9898\uFF08\u5B9E\u9A8C\u6027\uFF09","meta":{"order":7.1}},{"path":"/react/replace-moment","title":"\u66FF\u6362 Moment.js","meta":{"order":7.5}},{"path":"/react/migration-v4","title":"\u4ECE v3 \u5230 v4","meta":{"order":8}},{"path":"/react/recommendation","title":"\u793E\u533A\u7CBE\u9009\u7EC4\u4EF6","meta":{"order":9}},{"path":"/react/i18n","title":"\u56FD\u9645\u5316","meta":{"order":10}},{"path":"/react/faq","title":"FAQ","meta":{"order":11}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6587\u6863","path":"/react"},{"title":"\u7EC4\u4EF6","path":"/components"},{"title":"\u793A\u4F8B","path":"/template"},{"title":"\u5DE5\u5177","path":"/tools"},{"title":"GitHub","path":"https://github.com/qc-z/antd-packages"}]},"title":"antd-packages Library","logo":"/images/logo.svg","description":"\u7528\u4E8E\u5FEB\u901F\u4E8C\u6B21\u5C01\u88C5antd\u7EC4\u4EF6","mode":"site","repository":{"url":"https://github.com/qc-z/antd-packages","branch":"master"},"theme":{},"exportStatic":{}}'),s=e(60147),v=e(22205),t=e.n(v),i=e(54057),T=`import { Affix, Button } from 'antd-packages'
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

export default App`,U=`import { Affix, Button } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Affix
    offsetTop={120}
    onChange={(affixed) => console.log(affixed)}
  >
    <Button>120px to affix top</Button>
  </Affix>
)

export default App`,d=`import { Affix, Button } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [container, setContainer] =
    useState<HTMLDivElement | null>(null)

  return (
    <div
      className="scrollable-container"
      ref={setContainer}
    >
      <div className="background">
        <Affix target={() => container}>
          <Button type="primary">
            Fixed at the top of container
          </Button>
        </Affix>
      </div>
    </div>
  )
}

export default App`,x=`import { Affix, Button } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [top, setTop] = useState(10)

  return (
    <div style={{ height: 10000 }}>
      <div>Top</div>
      <Affix offsetTop={top}>
        <div style={{ background: 'red' }}>
          <Button
            type="primary"
            onClick={() => setTop(top + 10)}
          >
            Affix top
          </Button>
        </div>
      </Affix>
      <div>Bottom</div>
    </div>
  )
}

export default App`,D=`import { Alert } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Alert message="Success Text" type="success" />
)

export default App`,P=`import { Alert } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Alert
      message="Success Text"
      type="success"
    />
    <Alert message="Info Text" type="info" />
    <Alert
      message="Warning Text"
      type="warning"
    />
    <Alert message="Error Text" type="error" />
  </>
)

export default App`,j=`import { Alert } from 'antd-packages'
import React from 'react'

const onClose = (
  e: React.MouseEvent<
    HTMLButtonElement,
    MouseEvent
  >
) => {
  console.log(e, 'I was closed.')
}

const App: React.FC = () => (
  <>
    <Alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      type="warning"
      closable
      onClose={onClose}
    />
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      type="error"
      closable
      onClose={onClose}
    />
  </>
)

export default App`,I=`import { Alert } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Alert
      message="Success Text"
      description="Success Description Success Description Success Description"
      type="success"
    />
    <Alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
    />
    <Alert
      message="Warning Text"
      description="Warning Description Warning Description Warning Description Warning Description"
      type="warning"
    />
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description"
      type="error"
    />
  </>
)

export default App`,F=`import { Alert } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Alert
      message="Success Tips"
      type="success"
      showIcon
    />
    <Alert
      message="Informational Notes"
      type="info"
      showIcon
    />
    <Alert
      message="Warning"
      type="warning"
      showIcon
      closable
    />
    <Alert
      message="Error"
      type="error"
      showIcon
    />
    <Alert
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />
    <Alert
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
    />
    <Alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
      closable
    />
    <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </>
)

export default App`,A=`import { Alert } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Alert
    message="Info Text"
    type="info"
    closeText="Close Now"
  />
)

export default App`,O=`import { Alert } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Alert message="Warning text" banner />
    <br />
    <Alert
      message="Very long warning text warning text text text text text text text"
      banner
      closable
    />
    <br />
    <Alert
      showIcon={false}
      message="Warning text without icon"
      banner
    />
    <br />
    <Alert
      type="error"
      message="Error text"
      banner
    />
  </>
)

export default App`,L=`import { Alert } from 'antd-packages'
import React from 'react'
import Marquee from 'react-fast-marquee'

const App: React.FC = () => (
  <Alert
    banner
    message={
      <Marquee pauseOnHover gradient={false}>
        I can be a React component, multiple React
        components, or just some text.
      </Marquee>
    }
  />
)

export default App`,N=`import { Alert } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(true)

  const handleClose = () => {
    setVisible(false)
  }

  return (
    <div>
      {visible ? (
        <Alert
          message="Alert Message Text"
          type="success"
          closable
          afterClose={handleClose}
        />
      ) : null}
      <p>placeholder text here</p>
    </div>
  )
}

export default App`,H=`import { Alert, Button } from 'antd-packages'
import React, { useState } from 'react'

const { ErrorBoundary } = Alert
const ThrowError: React.FC = () => {
  const [error, setError] = useState<Error>()
  const onClick = () => {
    setError(new Error('An Uncaught Error'))
  }

  if (error) {
    throw error
  }
  return (
    <Button danger onClick={onClick}>
      Click me to throw a error
    </Button>
  )
}

const App: React.FC = () => (
  <ErrorBoundary>
    <ThrowError />
  </ErrorBoundary>
)

export default App`,M=`import { SmileOutlined } from '@ant-design/icons'
import { Alert } from 'antd-packages'
import React from 'react'

const icon = <SmileOutlined />

const App: React.FC = () => (
  <>
    <Alert
      icon={icon}
      message="showIcon = false"
      type="success"
    />
    <Alert
      icon={icon}
      message="Success Tips"
      type="success"
      showIcon
    />
    <Alert
      icon={icon}
      message="Informational Notes"
      type="info"
      showIcon
    />
    <Alert
      icon={icon}
      message="Warning"
      type="warning"
      showIcon
    />
    <Alert
      icon={icon}
      message="Error"
      type="error"
      showIcon
    />
    <Alert
      icon={icon}
      message="Success Tips"
      description="Detailed description and advices about successful copywriting."
      type="success"
      showIcon
    />
    <Alert
      icon={icon}
      message="Informational Notes"
      description="Additional description and informations about copywriting."
      type="info"
      showIcon
    />
    <Alert
      icon={icon}
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
    />
    <Alert
      icon={icon}
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </>
)

export default App`,z=`import { Alert, Button, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Alert
      message="Success Tips"
      type="success"
      showIcon
      action={
        <Button size="small" type="text">
          UNDO
        </Button>
      }
      closable
    />
    <Alert
      message="Error Text"
      showIcon
      description="Error Description Error Description Error Description Error Description"
      type="error"
      action={
        <Button size="small" danger>
          Detail
        </Button>
      }
    />
    <Alert
      message="Warning Text"
      type="warning"
      action={
        <Space>
          <Button size="small" type="ghost">
            Done
          </Button>
        </Space>
      }
      closable
    />
    <Alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
      action={
        <Space direction="vertical">
          <Button size="small" type="primary">
            Accept
          </Button>
          <Button
            size="small"
            danger
            type="ghost"
          >
            Decline
          </Button>
        </Space>
      }
      closable
    />
  </>
)

export default App`,g=`import { Anchor } from 'antd-packages'
import React from 'react'

const { Link } = Anchor

const App: React.FC = () => (
  <Anchor>
    <Link
      href="#components-anchor-demo-basic"
      title="Basic demo"
    />
    <Link
      href="#components-anchor-demo-static"
      title="Static demo"
    />
    <Link href="#API" title="API">
      <Link
        href="#Anchor-Props"
        title="Anchor Props"
      />
      <Link
        href="#Link-Props"
        title="Link Props"
      />
    </Link>
  </Anchor>
)

export default App`,c=`import { Anchor } from 'antd-packages'
import React from 'react'

const { Link } = Anchor

const App: React.FC = () => (
  <Anchor affix={false}>
    <Link
      href="#components-anchor-demo-basic"
      title="Basic demo"
    />
    <Link
      href="#components-anchor-demo-static"
      title="Static demo"
    />
    <Link href="#API" title="API">
      <Link
        href="#Anchor-Props"
        title="Anchor Props"
      />
      <Link
        href="#Link-Props"
        title="Link Props"
      />
    </Link>
  </Anchor>
)

export default App`,h=`import { Anchor } from 'antd-packages'
import React from 'react'

const { Link } = Anchor

const handleClick = (
  e: React.MouseEvent<HTMLElement>,
  link: {
    title: React.ReactNode
    href: string
  }
) => {
  e.preventDefault()
  console.log(link)
}

const App: React.FC = () => (
  <Anchor affix={false} onClick={handleClick}>
    <Link
      href="#components-anchor-demo-basic"
      title="Basic demo"
    />
    <Link
      href="#components-anchor-demo-static"
      title="Static demo"
    />
    <Link href="#API" title="API">
      <Link
        href="#Anchor-Props"
        title="Anchor Props"
      />
      <Link
        href="#Link-Props"
        title="Link Props"
      />
    </Link>
  </Anchor>
)

export default App`,k=`import { Anchor } from 'antd-packages'
import React from 'react'

const { Link } = Anchor

const getCurrentAnchor = () =>
  '#components-anchor-demo-static'

const App: React.FC = () => (
  <Anchor
    affix={false}
    getCurrentAnchor={getCurrentAnchor}
  >
    <Link
      href="#components-anchor-demo-basic"
      title="Basic demo"
    />
    <Link
      href="#components-anchor-demo-static"
      title="Static demo"
    />
    <Link href="#API" title="API">
      <Link
        href="#Anchor-Props"
        title="Anchor Props"
      />
      <Link
        href="#Link-Props"
        title="Link Props"
      />
    </Link>
  </Anchor>
)

export default App`,C=`import { Anchor } from 'antd-packages'
import React, { useEffect, useState } from 'react'

const { Link } = Anchor

const App: React.FC = () => {
  const [targetOffset, setTargetOffset] =
    useState<number | undefined>(undefined)

  useEffect(() => {
    setTargetOffset(window.innerHeight / 2)
  }, [])

  return (
    <Anchor targetOffset={targetOffset}>
      <Link
        href="#components-anchor-demo-basic"
        title="Basic demo"
      />
      <Link
        href="#components-anchor-demo-static"
        title="Static demo"
      />
      <Link href="#API" title="API">
        <Link
          href="#Anchor-Props"
          title="Anchor Props"
        />
        <Link
          href="#Link-Props"
          title="Link Props"
        />
      </Link>
    </Anchor>
  )
}

export default App`,S=`import { Anchor } from 'antd-packages'
import React from 'react'

const { Link } = Anchor

const onChange = (link: string) => {
  console.log('Anchor:OnChange', link)
}

const App: React.FC = () => (
  <Anchor affix={false} onChange={onChange}>
    <Link
      href="#components-anchor-demo-basic"
      title="Basic demo"
    />
    <Link
      href="#components-anchor-demo-static"
      title="Static demo"
    />
    <Link href="#API" title="API">
      <Link
        href="#Anchor-Props"
        title="Anchor Props"
      />
      <Link
        href="#Link-Props"
        title="Link Props"
      />
    </Link>
  </Anchor>
)

export default App`,R=`import { AutoComplete } from 'antd-packages'
import React, { useState } from 'react'

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat)
})

const App: React.FC = () => {
  const [value, setValue] = useState('')
  const [options, setOptions] = useState<
    { value: string }[]
  >([])

  const onSearch = (searchText: string) => {
    setOptions(
      !searchText
        ? []
        : [
            mockVal(searchText),
            mockVal(searchText, 2),
            mockVal(searchText, 3)
          ]
    )
  }

  const onSelect = (data: string) => {
    console.log('onSelect', data)
  }

  const onChange = (data: string) => {
    setValue(data)
  }

  return (
    <>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      />
      <br />
      <br />
      <AutoComplete
        value={value}
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="control mode"
      />
    </>
  )
}

export default App`,y=`import { AutoComplete } from 'antd-packages'
import React, { useState } from 'react'

const { Option } = AutoComplete

const App: React.FC = () => {
  const [result, setResult] = useState<string[]>(
    []
  )

  const handleSearch = (value: string) => {
    let res: string[] = []
    if (!value || value.indexOf('@') >= 0) {
      res = []
    } else {
      res = [
        'gmail.com',
        '163.com',
        'qq.com'
      ].map((domain) => \`\${value}@\${domain}\`)
    }
    setResult(res)
  }

  return (
    <AutoComplete
      style={{ width: 200 }}
      onSearch={handleSearch}
      placeholder="input here"
    >
      {result.map((email: string) => (
        <Option key={email} value={email}>
          {email}
        </Option>
      ))}
    </AutoComplete>
  )
}

export default App`,b=`import { AutoComplete, Input } from 'antd-packages'
import React, { useState } from 'react'

const { TextArea } = Input

const App: React.FC = () => {
  const [options, setOptions] = useState<
    { value: string }[]
  >([])

  const handleSearch = (value: string) => {
    setOptions(
      !value
        ? []
        : [
            { value },
            { value: value + value },
            { value: value + value + value }
          ]
    )
  }

  const handleKeyPress = (
    ev: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    console.log('handleKeyPress', ev)
  }

  const onSelect = (value: string) => {
    console.log('onSelect', value)
  }

  return (
    <AutoComplete
      options={options}
      style={{ width: 200 }}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <TextArea
        placeholder="input here"
        className="custom"
        style={{ height: 50 }}
        onKeyPress={handleKeyPress}
      />
    </AutoComplete>
  )
}

export default App`,B=`import { AutoComplete } from 'antd-packages'
import React from 'react'

const options = [
  { value: 'Burns Bay Road' },
  { value: 'Downing Street' },
  { value: 'Wall Street' }
]

const App: React.FC = () => (
  <AutoComplete
    style={{ width: 200 }}
    options={options}
    placeholder="try to type \`b\`"
    filterOption={(inputValue, option) =>
      option!.value
        .toUpperCase()
        .indexOf(inputValue.toUpperCase()) !== -1
    }
  />
)

export default App`,E=`/**
 * title: \u67E5\u8BE2\u6A21\u5F0F - \u786E\u5B9A\u7C7B\u76EE
 * desc: [\u67E5\u8BE2\u6A21\u5F0F:\u786E\u5B9A\u7C7B\u76EE](https://ant.design/docs/spec/reaction#Lookup-Patterns)\u793A\u4F8B\u3002
 */

import { UserOutlined } from '@ant-design/icons'
import { AutoComplete, Input } from 'antd-packages'
import React from 'react'

const renderTitle = (title: string) => (
  <span>
    {title}
    <a
      style={{ float: 'right' }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
)

const renderItem = (
  title: string,
  count: number
) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  )
})

const options = [
  {
    label: renderTitle('Libraries'),
    options: [
      renderItem('AntDesign', 10000),
      renderItem('AntDesign UI', 10600)
    ]
  },
  {
    label: renderTitle('Solutions'),
    options: [
      renderItem('AntDesign UI FAQ', 60100),
      renderItem('AntDesign FAQ', 30010)
    ]
  },
  {
    label: renderTitle('Articles'),
    options: [
      renderItem(
        'AntDesign design language',
        100000
      )
    ]
  }
]

const App: React.FC = () => (
  <AutoComplete
    dropdownClassName="certain-category-search-dropdown"
    dropdownMatchSelectWidth={500}
    style={{ width: 250 }}
    options={options}
  >
    <Input.Search
      size="large"
      placeholder="input here"
    />
  </AutoComplete>
)

export default App`,$=`/**
 * title: \u67E5\u8BE2\u6A21\u5F0F - \u4E0D\u786E\u5B9A\u7C7B\u76EE
 * desc: [\u67E5\u8BE2\u6A21\u5F0F:\u4E0D\u786E\u5B9A\u7C7B\u76EE](https://ant.design/docs/spec/reaction#Lookup-Patterns)\u793A\u4F8B\u3002
 */

import { AutoComplete, Input } from 'antd-packages'
import type { SelectProps } from 'antd-packages/es/select'
import React, { useState } from 'react'

const getRandomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) +
  min

const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = \`\${query}\${idx}\`
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={\`https://s.taobao.com/search?q=\${query}\`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>
              {getRandomInt(200, 100)} results
            </span>
          </div>
        )
      }
    })

const App: React.FC = () => {
  const [options, setOptions] = useState<
    SelectProps<object>['options']
  >([])

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : [])
  }

  const onSelect = (value: string) => {
    console.log('onSelect', value)
  }

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: 300 }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search
        size="large"
        placeholder="input here"
        enterButton
      />
    </AutoComplete>
  )
}

export default App`,Z=`import { AutoComplete, Space } from 'antd-packages'
import React, { useState } from 'react'

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat)
})

const App: React.FC = () => {
  const [options, setOptions] = useState<
    { value: string }[]
  >([])

  const onSearch = (searchText: string) => {
    setOptions(
      !searchText
        ? []
        : [
            mockVal(searchText),
            mockVal(searchText, 2),
            mockVal(searchText, 3)
          ]
    )
  }

  return (
    <Space
      direction="vertical"
      style={{ width: '100%' }}
    >
      <AutoComplete
        options={options}
        onSearch={onSearch}
        status="error"
        style={{ width: 200 }}
      />
      <AutoComplete
        options={options}
        onSearch={onSearch}
        status="warning"
        style={{ width: 200 }}
      />
    </Space>
  )
}

export default App`,V=`import { SearchOutlined } from '@ant-design/icons'
import {
  AutoComplete,
  Button,
  Form,
  Input,
  TreeSelect
} from 'antd-packages'
import React from 'react'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}

const App: React.FC = () => (
  <Form
    style={{ margin: '0 auto' }}
    {...formItemLayout}
  >
    <Form.Item label="\u5355\u72EC AutoComplete">
      <AutoComplete />
    </Form.Item>
    <Form.Item label="\u5355\u72EC TreeSelect">
      <TreeSelect />
    </Form.Item>
    <Form.Item label="\u6DFB\u52A0 Input.Group \u6B63\u5E38">
      <Input.Group compact>
        <TreeSelect style={{ width: '30%' }} />
        <AutoComplete />
      </Input.Group>
    </Form.Item>
    <Form.Item label="\u5305\u542B search \u56FE\u6807\u6B63\u5E38">
      <AutoComplete>
        <Input suffix={<SearchOutlined />} />
      </AutoComplete>
    </Form.Item>
    <Form.Item label="\u540C\u65F6\u6709 Input.Group \u548C\u56FE\u6807\u53D1\u751F\u79FB\u4F4D">
      <Input.Group compact>
        <TreeSelect style={{ width: '30%' }} />
        <AutoComplete>
          <Input suffix={<SearchOutlined />} />
        </AutoComplete>
      </Input.Group>
    </Form.Item>
    <Form.Item label="\u540C\u65F6\u6709 Input.Group \u548C Search \u7EC4\u4EF6\u53D1\u751F\u79FB\u4F4D">
      <Input.Group compact>
        <TreeSelect style={{ width: '30%' }} />
        <AutoComplete>
          <Input.Search />
        </AutoComplete>
      </Input.Group>
    </Form.Item>
    <Form.Item label="Input Group \u548C Button \u7ED3\u5408">
      <Input.Group compact>
        <TreeSelect style={{ width: '20%' }} />
        <AutoComplete>
          <Input.Search />
        </AutoComplete>
        <Button
          type="primary"
          icon={<SearchOutlined />}
        >
          Search
        </Button>
      </Input.Group>
    </Form.Item>
  </Form>
)

export default App`,K=`import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <div>
      <Avatar size={64} icon={<UserOutlined />} />
      <Avatar
        size="large"
        icon={<UserOutlined />}
      />
      <Avatar icon={<UserOutlined />} />
      <Avatar
        size="small"
        icon={<UserOutlined />}
      />
    </div>
    <div>
      <Avatar
        shape="square"
        size={64}
        icon={<UserOutlined />}
      />
      <Avatar
        shape="square"
        size="large"
        icon={<UserOutlined />}
      />
      <Avatar
        shape="square"
        icon={<UserOutlined />}
      />
      <Avatar
        shape="square"
        size="small"
        icon={<UserOutlined />}
      />
    </div>
  </>
)

export default App`,G=`import { UserOutlined } from '@ant-design/icons'
import { Avatar, Image } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Avatar icon={<UserOutlined />} />
    <Avatar>U</Avatar>
    <Avatar size={40}>USER</Avatar>
    <Avatar src="https://joeschmoe.io/api/v1/random" />
    <Avatar
      src={
        <Image
          src="https://joeschmoe.io/api/v1/random"
          style={{ width: 32 }}
        />
      }
    />
    <Avatar
      style={{
        color: '#f56a00',
        backgroundColor: '#fde3cf'
      }}
    >
      U
    </Avatar>
    <Avatar
      style={{ backgroundColor: '#87d068' }}
      icon={<UserOutlined />}
    />
  </>
)

export default App`,J=`import { Avatar, Button } from 'antd-packages'
import React, { useState } from 'react'

const UserList = ['U', 'Lucy', 'Tom', 'Edward']
const ColorList = [
  '#f56a00',
  '#7265e6',
  '#ffbf00',
  '#00a2ae'
]
const GapList = [4, 3, 2, 1]

const App: React.FC = () => {
  const [user, setUser] = useState(UserList[0])
  const [color, setColor] = useState(ColorList[0])
  const [gap, setGap] = useState(GapList[0])

  const changeUser = () => {
    const index = UserList.indexOf(user)
    setUser(
      index < UserList.length - 1
        ? UserList[index + 1]
        : UserList[0]
    )
    setColor(
      index < ColorList.length - 1
        ? ColorList[index + 1]
        : ColorList[0]
    )
  }

  const changeGap = () => {
    const index = GapList.indexOf(gap)
    setGap(
      index < GapList.length - 1
        ? GapList[index + 1]
        : GapList[0]
    )
  }

  return (
    <>
      <Avatar
        style={{
          backgroundColor: color,
          verticalAlign: 'middle'
        }}
        size="large"
        gap={gap}
      >
        {user}
      </Avatar>
      <Button
        size="small"
        style={{
          margin: '0 16px',
          verticalAlign: 'middle'
        }}
        onClick={changeUser}
      >
        ChangeUser
      </Button>
      <Button
        size="small"
        style={{ verticalAlign: 'middle' }}
        onClick={changeGap}
      >
        changeGap
      </Button>
    </>
  )
}

export default App`,Y=`import { UserOutlined } from '@ant-design/icons'
import { Avatar, Badge } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <span className="avatar-item">
      <Badge count={1}>
        <Avatar
          shape="square"
          icon={<UserOutlined />}
        />
      </Badge>
    </span>
    <span>
      <Badge dot>
        <Avatar
          shape="square"
          icon={<UserOutlined />}
        />
      </Badge>
    </span>
  </>
)

export default App`,W=`import {
  AntDesignOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Avatar, Divider, Tooltip } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Avatar.Group>
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <Avatar
        style={{ backgroundColor: '#f56a00' }}
      >
        K
      </Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{ backgroundColor: '#87d068' }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{ backgroundColor: '#1890ff' }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
    <Divider />
    <Avatar.Group
      maxCount={2}
      maxStyle={{
        color: '#f56a00',
        backgroundColor: '#fde3cf'
      }}
    >
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <Avatar
        style={{ backgroundColor: '#f56a00' }}
      >
        K
      </Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{ backgroundColor: '#87d068' }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{ backgroundColor: '#1890ff' }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
    <Divider />
    <Avatar.Group
      maxCount={2}
      size="large"
      maxStyle={{
        color: '#f56a00',
        backgroundColor: '#fde3cf'
      }}
    >
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <Avatar
        style={{ backgroundColor: '#f56a00' }}
      >
        K
      </Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{ backgroundColor: '#87d068' }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{ backgroundColor: '#1890ff' }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
    <Divider />
    <Avatar.Group
      maxCount={2}
      maxPopoverTrigger="click"
      size="large"
      maxStyle={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
        cursor: 'pointer'
      }}
    >
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar
        style={{ backgroundColor: '#f56a00' }}
      >
        K
      </Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{ backgroundColor: '#87d068' }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{ backgroundColor: '#1890ff' }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
  </>
)

export default App`,Q=`import { Avatar, Button } from 'antd-packages'
import React, { useState } from 'react'

type SizeType =
  | 'large'
  | 'small'
  | 'default'
  | number

const App: React.FC = () => {
  const [hide, setHide] = useState(true)
  const [size, setSize] =
    useState<SizeType>('large')
  const [scale, setScale] = useState(1)

  const toggle = () => {
    setHide(!hide)
  }

  const toggleSize = () => {
    const sizes = [
      'small',
      'default',
      'large'
    ] as SizeType[]
    let current = sizes.indexOf(size) + 1
    if (current > 2) {
      current = 0
    }
    setSize(sizes[current])
  }

  const changeScale = () => {
    setScale(scale === 1 ? 2 : 1)
  }

  return (
    <>
      <Button onClick={toggle}>
        Toggle Avatar visibility
      </Button>
      <Button onClick={toggleSize}>
        Toggle Avatar size
      </Button>
      <Button onClick={changeScale}>
        Change Avatar scale
      </Button>
      <br />
      <br />
      <div
        style={{
          textAlign: 'center',
          transform: \`scale(\${scale})\`,
          marginTop: 24
        }}
      >
        <Avatar
          size={size}
          style={{
            background: '#7265e6',
            display: hide ? 'none' : ''
          }}
        >
          Avatar
        </Avatar>
        <Avatar
          size={size}
          src="invalid"
          style={{
            background: '#00a2ae',
            display: hide ? 'none' : ''
          }}
        >
          Invalid
        </Avatar>
        <div
          style={{ display: hide ? 'none' : '' }}
        >
          <Avatar
            size={size}
            style={{ background: '#7265e6' }}
          >
            Avatar
          </Avatar>
          <Avatar
            size={size}
            src="invalid"
            style={{ background: '#00a2ae' }}
          >
            Invalid
          </Avatar>
        </div>
      </div>
    </>
  )
}

export default App`,X=`import { AntDesignOutlined } from '@ant-design/icons'
import { Avatar } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Avatar
    size={{
      xs: 24,
      sm: 32,
      md: 40,
      lg: 64,
      xl: 80,
      xxl: 100
    }}
    icon={<AntDesignOutlined />}
  />
)

export default App`,q=`import { Avatar } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Avatar
      shape="circle"
      src="http://abc.com/not-exist.jpg"
    >
      A
    </Avatar>
    <Avatar
      shape="circle"
      src="http://abc.com/not-exist.jpg"
    >
      ABC
    </Avatar>
  </>
)

export default App`,_=`import { BackTop } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <BackTop />
    Scroll down to see the bottom-right
    <strong className="site-back-top-basic">
      {' '}
      gray{' '}
    </strong>
    button.
  </>
)

export default App`,nn=`import { BackTop } from 'antd-packages'
import React from 'react'

const style: React.CSSProperties = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14
}

const App: React.FC = () => (
  <div style={{ height: '600vh', padding: 8 }}>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <BackTop>
      <div style={style}>UP</div>
    </BackTop>
  </div>
)

export default App`,en=`import { ClockCircleOutlined } from '@ant-design/icons'
import { Avatar, Badge } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={0} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge
      count={
        <ClockCircleOutlined
          style={{ color: '#f5222d' }}
        />
      }
    >
      <Avatar shape="square" size="large" />
    </Badge>
  </>
)

export default App`,tn=`import { ClockCircleOutlined } from '@ant-design/icons'
import { Badge, Space, Switch } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [show, setShow] = useState(true)

  return (
    <Space>
      <Switch
        checked={show}
        onChange={() => setShow(!show)}
      />
      <Badge count={show ? 25 : 0} />
      <Badge
        count={
          show ? (
            <ClockCircleOutlined
              style={{ color: '#f5222d' }}
            />
          ) : (
            0
          )
        }
      />
      <Badge
        className="site-badge-count-109"
        count={show ? 109 : 0}
        style={{ backgroundColor: '#52c41a' }}
      />
    </Space>
  )
}

export default App`,an=`import { Avatar, Badge } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Badge count={99}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={100}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={99} overflowCount={10}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={1000} overflowCount={999}>
      <Avatar shape="square" size="large" />
    </Badge>
  </>
)

export default App`,rn=`import { NotificationOutlined } from '@ant-design/icons'
import { Badge } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Badge dot>
      <NotificationOutlined
        style={{ fontSize: 16 }}
      />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </>
)

export default App`,on=`import {
  MinusOutlined,
  PlusOutlined,
  QuestionOutlined
} from '@ant-design/icons'
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Switch
} from 'antd-packages'
import React, { useState } from 'react'

const ButtonGroup = Button.Group

const App: React.FC = () => {
  const [count, setCount] = useState(5)
  const [show, setShow] = useState(true)

  const increase = () => {
    setCount(count + 1)
  }

  const decline = () => {
    let newCount = count - 1
    if (newCount < 0) {
      newCount = 0
    }
    setCount(newCount)
  }

  const random = () => {
    const newCount = Math.floor(
      Math.random() * 100
    )
    setCount(newCount)
  }

  const onChange = (checked: boolean) => {
    setShow(checked)
  }

  return (
    <>
      <Badge count={count}>
        <Avatar shape="square" size="large" />
      </Badge>
      <ButtonGroup>
        <Button onClick={decline}>
          <MinusOutlined />
        </Button>
        <Button onClick={increase}>
          <PlusOutlined />
        </Button>
        <Button onClick={random}>
          <QuestionOutlined />
        </Button>
      </ButtonGroup>
      <Divider />
      <Badge dot={show}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Switch
        onChange={onChange}
        checked={show}
      />
    </>
  )
}

export default App`,sn=`import { Avatar, Badge } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <a href="#">
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
  </a>
)

export default App`,ln=`import { Avatar, Badge } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Badge count={5} offset={[10, 10]}>
    <Avatar shape="square" size="large" />
  </Badge>
)

export default App`,dn=`import { Avatar, Badge } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Badge size="default" count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge size="small" count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
  </>
)

export default App`,cn=`import { Badge } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />
    <br />
    <Badge status="success" text="Success" />
    <br />
    <Badge status="error" text="Error" />
    <br />
    <Badge status="default" text="Default" />
    <br />
    <Badge
      status="processing"
      text="Processing"
    />
    <br />
    <Badge status="warning" text="Warning" />
  </>
)

export default App`,pn=`import { Badge, Divider } from 'antd-packages'
import React from 'react'

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime'
]

const App: React.FC = () => (
  <>
    <Divider orientation="left">Presets</Divider>
    <div>
      {colors.map((color) => (
        <div key={color}>
          <Badge color={color} text={color} />
        </div>
      ))}
    </div>
    <Divider orientation="left">Custom</Divider>
    <>
      <Badge color="#f50" text="#f50" />
      <br />
      <Badge color="#2db7f5" text="#2db7f5" />
      <br />
      <Badge color="#87d068" text="#87d068" />
      <br />
      <Badge color="#108ee9" text="#108ee9" />
    </>
  </>
)

export default App`,un=`import { Badge, Card } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Badge.Ribbon text="Hippies">
      <Card
        title="Pushes open the window"
        size="small"
      >
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="pink">
      <Card
        title="Pushes open the window"
        size="small"
      >
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="red">
      <Card
        title="Pushes open the window"
        size="small"
      >
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="cyan">
      <Card
        title="Pushes open the window"
        size="small"
      >
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="green">
      <Card
        title="Pushes open the window"
        size="small"
      >
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="purple">
      <Card
        title="Pushes open the window"
        size="small"
      >
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="volcano">
      <Card
        title="Pushes open the window"
        size="small"
      >
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="magenta">
      <Card
        title="Pushes open the window"
        size="small"
      >
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
  </>
)

export default App`,mn=`import { Badge, Card, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space
    direction="vertical"
    style={{ width: '100%' }}
  >
    <Badge.Ribbon text="\u5566\u5566\u5566\u5566">
      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="\u5566\u5566\u5566\u5566" color="purple">
      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="\u5566\u5566\u5566\u5566" color="#2db7f5">
      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>
    </Badge.Ribbon>
    <Badge.Ribbon
      text="\u5566\u5566\u5566\u5566"
      color="#2db7f5"
      placement="start"
    >
      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>
    </Badge.Ribbon>
    <Badge.Ribbon
      text="\u5566\u5566\u5566\u5566"
      color="#2db7f5"
      placement="end"
    >
      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>
    </Badge.Ribbon>
  </Space>
)

export default App`,gn=`import { Avatar, Badge } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Badge count={5} status="success">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} status="warning">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} color="blue">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} color="#fa541c">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot status="success">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot status="warning">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot color="blue">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot color="#fa541c">
      <Avatar shape="square" size="large" />
    </Badge>
  </>
)

export default App`,fn=`import { Avatar, Badge } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Badge count={5} title="Custom hover text">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={-5} title="Negative">
      <Avatar shape="square" size="large" />
    </Badge>
  </>
)

export default App`,vn=`import { Breadcrumb } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      An Application
    </Breadcrumb.Item>
  </Breadcrumb>
)

export default App`,hn=`import {
  HomeOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Breadcrumb } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="">
      <HomeOutlined />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <UserOutlined />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Application</Breadcrumb.Item>
  </Breadcrumb>
)

export default App`,yn=`import { Alert, Breadcrumb } from 'antd-packages'
import React from 'react'
import {
  HashRouter,
  Link,
  Route,
  Routes,
  useLocation
} from 'react-router-dom'

const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>\uFF1A
      <Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>\uFF1A
      <Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
)

const breadcrumbNameMap: Record<string, string> =
  {
    '/apps': 'Application List',
    '/apps/1': 'Application1',
    '/apps/2': 'Application2',
    '/apps/1/detail': 'Detail',
    '/apps/2/detail': 'Detail'
  }

const Home = () => {
  const location = useLocation()
  const pathSnippets = location.pathname
    .split('/')
    .filter((i) => i)

  const extraBreadcrumbItems = pathSnippets.map(
    (_, index) => {
      const url = \`/\${pathSnippets
        .slice(0, index + 1)
        .join('/')}\`
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>
            {breadcrumbNameMap[url]}
          </Link>
        </Breadcrumb.Item>
      )
    }
  )

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems)

  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/apps">Application List</Link>
      </div>
      <Routes>
        <Route path="/apps" element={<Apps />} />
        <Route
          path="*"
          element={<span>Home Page</span>}
        />
      </Routes>
      <Alert
        style={{ margin: '16px 0' }}
        message="Click the navigation above to switch:"
      />
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  )
}

const App: React.FC = () => (
  <HashRouter>
    <Home />
  </HashRouter>
)

export default App`,Cn=`import { Breadcrumb } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Breadcrumb separator=">">
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="">
      Application Center
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      Application List
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      An Application
    </Breadcrumb.Item>
  </Breadcrumb>
)

export default App`,wn=`import { Breadcrumb, Menu } from 'antd-packages'
import React from 'react'

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            General
          </a>
        )
      },
      {
        key: '2',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            Layout
          </a>
        )
      },
      {
        key: '3',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            Navigation
          </a>
        )
      }
    ]}
  />
)

const App: React.FC = () => (
  <Breadcrumb>
    <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Component</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item overlay={menu}>
      <a href="">General</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Button</Breadcrumb.Item>
  </Breadcrumb>
)

export default App`,kn=`import { Breadcrumb } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Breadcrumb separator="">
    <Breadcrumb.Item>Location</Breadcrumb.Item>
    <Breadcrumb.Separator>:</Breadcrumb.Separator>
    <Breadcrumb.Item href="">
      Application Center
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item href="">
      Application List
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      An Application
    </Breadcrumb.Item>
  </Breadcrumb>
)

export default App`,bn=`import { Button } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>
)

export default App`,Sn=`import { SearchOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Tooltip title="search">
      <Button
        type="primary"
        shape="circle"
        icon={<SearchOutlined />}
      />
    </Tooltip>
    <Button type="primary" shape="circle">
      A
    </Button>
    <Button
      type="primary"
      icon={<SearchOutlined />}
    >
      Search
    </Button>
    <Tooltip title="search">
      <Button
        shape="circle"
        icon={<SearchOutlined />}
      />
    </Tooltip>
    <Button icon={<SearchOutlined />}>
      Search
    </Button>
    <br />
    <Tooltip title="search">
      <Button
        shape="circle"
        icon={<SearchOutlined />}
      />
    </Tooltip>
    <Button icon={<SearchOutlined />}>
      Search
    </Button>
    <Tooltip title="search">
      <Button
        type="dashed"
        shape="circle"
        icon={<SearchOutlined />}
      />
    </Tooltip>
    <Button
      type="dashed"
      icon={<SearchOutlined />}
    >
      Search
    </Button>
    <Button
      icon={<SearchOutlined />}
      href="https://www.google.com"
    />
    <br />
    <br />
    <Tooltip title="search">
      <Button
        type="primary"
        shape="circle"
        icon={<SearchOutlined />}
        size="large"
      />
    </Tooltip>
    <Button
      type="primary"
      shape="circle"
      size="large"
    >
      A
    </Button>
    <Button
      type="primary"
      icon={<SearchOutlined />}
      size="large"
    >
      Search
    </Button>
    <Tooltip title="search">
      <Button
        shape="circle"
        icon={<SearchOutlined />}
        size="large"
      />
    </Tooltip>
    <Button
      icon={<SearchOutlined />}
      size="large"
    >
      Search
    </Button>
    <br />
    <Tooltip title="search">
      <Button
        shape="circle"
        icon={<SearchOutlined />}
        size="large"
      />
    </Tooltip>
    <Button
      icon={<SearchOutlined />}
      size="large"
    >
      Search
    </Button>
    <Tooltip title="search">
      <Button
        type="dashed"
        shape="circle"
        icon={<SearchOutlined />}
        size="large"
      />
    </Tooltip>
    <Button
      type="dashed"
      icon={<SearchOutlined />}
      size="large"
    >
      Search
    </Button>
    <Button
      icon={<SearchOutlined />}
      size="large"
      href="https://www.google.com"
    />
  </>
)

export default App`,Pn=`import { DownloadOutlined } from '@ant-design/icons'
import { Button, Radio } from 'antd-packages'
import type { SizeType } from 'antd-packages/es/config-provider/SizeContext'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [size, setSize] =
    useState<SizeType>('large')

  return (
    <>
      <Radio.Group
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <Radio.Button value="large">
          Large
        </Radio.Button>
        <Radio.Button value="default">
          Default
        </Radio.Button>
        <Radio.Button value="small">
          Small
        </Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Button type="primary" size={size}>
        Primary
      </Button>
      <Button size={size}>Default</Button>
      <Button type="dashed" size={size}>
        Dashed
      </Button>
      <br />
      <Button type="link" size={size}>
        Link
      </Button>
      <br />
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        size={size}
      />
      <Button
        type="primary"
        shape="circle"
        icon={<DownloadOutlined />}
        size={size}
      />
      <Button
        type="primary"
        shape="round"
        icon={<DownloadOutlined />}
        size={size}
      />
      <Button
        type="primary"
        shape="round"
        icon={<DownloadOutlined />}
        size={size}
      >
        Download
      </Button>
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        size={size}
      >
        Download
      </Button>
    </>
  )
}

export default App`,Rn=`import { Button } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>
      Primary(disabled)
    </Button>
    <br />
    <Button>Default</Button>
    <Button disabled>Default(disabled)</Button>
    <br />
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>
      Dashed(disabled)
    </Button>
    <br />
    <Button type="text">Text</Button>
    <Button type="text" disabled>
      Text(disabled)
    </Button>
    <br />
    <Button type="link">Link</Button>
    <Button type="link" disabled>
      Link(disabled)
    </Button>
    <br />
    <Button danger>Danger Default</Button>
    <Button danger disabled>
      Danger Default(disabled)
    </Button>
    <br />
    <Button danger type="text">
      Danger Text
    </Button>
    <Button danger type="text" disabled>
      Danger Text(disabled)
    </Button>
    <br />
    <Button type="link" danger>
      Danger Link
    </Button>
    <Button type="link" danger disabled>
      Danger Link(disabled)
    </Button>
    <div className="site-button-ghost-wrapper">
      <Button ghost>Ghost</Button>
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
    </div>
  </>
)

export default App`,Tn=`import { PoweroffOutlined } from '@ant-design/icons'
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

export default App`,xn=`import type { MenuProps } from 'antd-packages'
import {
  Button,
  Dropdown,
  Menu
} from 'antd-packages'
import React from 'react'

const onMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
}

const menu = (
  <Menu
    onClick={onMenuClick}
    items={[
      {
        key: '1',
        label: '1st item'
      },
      {
        key: '2',
        label: '2nd item'
      },
      {
        key: '3',
        label: '3rd item'
      }
    ]}
  />
)

const App: React.FC = () => (
  <>
    <Button type="primary">primary</Button>
    <Button>secondary</Button>
    <Dropdown.Button overlay={menu}>
      Actions
    </Dropdown.Button>
  </>
)

export default App`,In=`import { Button } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <div className="site-button-ghost-wrapper">
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>
      Dashed
    </Button>
    <Button type="primary" danger ghost>
      Danger
    </Button>
  </div>
)

export default App`,An=`import { Button } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </>
)

export default App`,Bn=`/**
 * title: Block \u6309\u94AE
 * desc: \`block\`\u5C5E\u6027\u5C06\u4F7F\u6309\u94AE\u9002\u5408\u5176\u7236\u5BBD\u5EA6\u3002
 */

import { Button } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </>
)

export default App`,Dn=`import { PoweroffOutlined } from '@ant-design/icons'
import { Button } from 'antd-packages'
import React from 'react'

const Text1 = () => '\u90E8\u7F72'
const Text2 = () => <span>\u90E8\u7F72</span>
const Text3 = () => 'Submit'

const App = () => (
  <>
    <Button loading>\u90E8\u7F72</Button>
    <Button loading>
      <Text1 />
    </Button>
    <Button loading>
      <Text2 />
    </Button>
    <Button loading>
      <Text3 />
    </Button>
    <Button loading icon={<PoweroffOutlined />}>
      <Text1 />
    </Button>
    <Button loading>\u6309\u94AE</Button>
  </>
)

export default App`,Fn=`import { Calendar } from 'antd-packages'
import type { CalendarMode } from 'antd-packages/lib/calendar/generateCalendar'
import type { Moment } from 'moment'
import React from 'react'

const App: React.FC = () => {
  const onPanelChange = (
    value: Moment,
    mode: CalendarMode
  ) => {
    console.log(value.format('YYYY-MM-DD'), mode)
  }

  return (
    <Calendar onPanelChange={onPanelChange} />
  )
}

export default App`,On=`import type { BadgeProps } from 'antd-packages'
import { Badge, Calendar } from 'antd-packages'
import type { Moment } from 'moment'
import React from 'react'

const getListData = (value: Moment) => {
  let listData
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.'
        },
        {
          type: 'success',
          content: 'This is usual event.'
        }
      ]
      break
    case 10:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.'
        },
        {
          type: 'success',
          content: 'This is usual event.'
        },
        {
          type: 'error',
          content: 'This is error event.'
        }
      ]
      break
    case 15:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event'
        },
        {
          type: 'success',
          content:
            'This is very long usual event\u3002\u3002....'
        },
        {
          type: 'error',
          content: 'This is error event 1.'
        },
        {
          type: 'error',
          content: 'This is error event 2.'
        },
        {
          type: 'error',
          content: 'This is error event 3.'
        },
        {
          type: 'error',
          content: 'This is error event 4.'
        }
      ]
      break
    default:
  }
  return listData || []
}

const getMonthData = (value: Moment) => {
  if (value.month() === 8) {
    return 1394
  }
}

const App: React.FC = () => {
  const monthCellRender = (value: Moment) => {
    const num = getMonthData(value)
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null
  }

  const dateCellRender = (value: Moment) => {
    const listData = getListData(value)
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={
                item.type as BadgeProps['status']
              }
              text={item.content}
            />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <Calendar
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
    />
  )
}

export default App`,Ln=`import { Calendar } from 'antd-packages'
import type { CalendarMode } from 'antd-packages/lib/calendar/generateCalendar'
import type { Moment } from 'moment'
import React from 'react'

const App: React.FC = () => {
  const onPanelChange = (
    value: Moment,
    mode: CalendarMode
  ) => {
    console.log(value.format('YYYY-MM-DD'), mode)
  }

  return (
    <div className="site-calendar-demo-card">
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
      />
    </div>
  )
}

export default App`,Nn=`import { Alert, Calendar } from 'antd-packages'
import type { Moment } from 'moment'
import moment from 'moment'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [value, setValue] = useState(
    moment('2017-01-25')
  )
  const [selectedValue, setSelectedValue] =
    useState(moment('2017-01-25'))

  const onSelect = (newValue: Moment) => {
    setValue(newValue)
    setSelectedValue(newValue)
  }

  const onPanelChange = (newValue: Moment) => {
    setValue(newValue)
  }

  return (
    <>
      <Alert
        message={\`You selected date: \${selectedValue?.format(
          'YYYY-MM-DD'
        )}\`}
      />
      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />
    </>
  )
}

export default App`,Mn=`import {
  Calendar,
  Col,
  Radio,
  Row,
  Select,
  Typography
} from 'antd-packages'
import type { CalendarMode } from 'antd-packages/lib/calendar/generateCalendar'
import type { Moment } from 'moment'
import React from 'react'

const App: React.FC = () => {
  const onPanelChange = (
    value: Moment,
    mode: CalendarMode
  ) => {
    console.log(value.format('YYYY-MM-DD'), mode)
  }

  return (
    <div className="site-calendar-customize-header-wrapper">
      <Calendar
        fullscreen={false}
        headerRender={({
          value,
          type,
          onChange,
          onTypeChange
        }) => {
          const start = 0
          const end = 12
          const monthOptions = []

          const current = value.clone()
          const localeData = value.localeData()
          const months = []
          for (let i = 0; i < 12; i++) {
            current.month(i)
            months.push(
              localeData.monthsShort(current)
            )
          }

          for (
            let index = start;
            index < end;
            index++
          ) {
            monthOptions.push(
              <Select.Option
                className="month-item"
                key={\`\${index}\`}
              >
                {months[index]}
              </Select.Option>
            )
          }
          const month = value.month()

          const year = value.year()
          const options = []
          for (
            let i = year - 10;
            i < year + 10;
            i += 1
          ) {
            options.push(
              <Select.Option
                key={i}
                value={i}
                className="year-item"
              >
                {i}
              </Select.Option>
            )
          }
          return (
            <div style={{ padding: 8 }}>
              <Typography.Title level={4}>
                Custom header
              </Typography.Title>
              <Row gutter={8}>
                <Col>
                  <Radio.Group
                    size="small"
                    onChange={(e) =>
                      onTypeChange(e.target.value)
                    }
                    value={type}
                  >
                    <Radio.Button value="month">
                      Month
                    </Radio.Button>
                    <Radio.Button value="year">
                      Year
                    </Radio.Button>
                  </Radio.Group>
                </Col>
                <Col>
                  <Select
                    size="small"
                    dropdownMatchSelectWidth={
                      false
                    }
                    className="my-year-select"
                    onChange={(newYear) => {
                      const now = value
                        .clone()
                        .year(Number(newYear))
                      onChange(now)
                    }}
                    value={String(year)}
                  >
                    {options}
                  </Select>
                </Col>
                <Col>
                  <Select
                    size="small"
                    dropdownMatchSelectWidth={
                      false
                    }
                    value={String(month)}
                    onChange={(selectedMonth) => {
                      const newValue =
                        value.clone()
                      newValue.month(
                        parseInt(
                          selectedMonth,
                          10
                        )
                      )
                      onChange(newValue)
                    }}
                  >
                    {monthOptions}
                  </Select>
                </Col>
              </Row>
            </div>
          )
        }}
        onPanelChange={onPanelChange}
      />
    </div>
  )
}

export default App`,zn=`import { Card } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card
      size="small"
      title="Small size card"
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </>
)

export default App`,En=`import { Card } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <div className="site-card-border-less-wrapper">
    <Card
      title="Card title"
      bordered={false}
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
)

export default App`,$n=`import { Card } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Card style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
)

export default App`,Zn=`import { Card } from 'antd-packages'
import React from 'react'

const { Meta } = Card

const App: React.FC = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
  >
    <Meta
      title="Europe Street beat"
      description="www.instagram.com"
    />
  </Card>
)

export default App`,Vn=`import { Card, Col, Row } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
)

export default App`,Kn=`import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons'
import {
  Avatar,
  Card,
  Skeleton,
  Switch
} from 'antd-packages'
import React, { useState } from 'react'

const { Meta } = Card

const App: React.FC = () => {
  const [loading, setLoading] = useState(true)

  const onChange = (checked: boolean) => {
    setLoading(!checked)
  }

  return (
    <>
      <Switch
        checked={!loading}
        onChange={onChange}
      />

      <Card
        style={{ width: 300, marginTop: 16 }}
        loading={loading}
      >
        <Meta
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>

      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={
              <Avatar src="https://joeschmoe.io/api/v1/random" />
            }
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </>
  )
}

export default App`,Un=`import { Card } from 'antd-packages'
import React from 'react'

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center'
}

const App: React.FC = () => (
  <Card title="Card Title">
    <Card.Grid style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid
      hoverable={false}
      style={gridStyle}
    >
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>
      Content
    </Card.Grid>
  </Card>
)

export default App`,jn=`import { Card } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Card title="Card title">
    <Card
      type="inner"
      title="Inner Card title"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Inner Card title"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </Card>
  </Card>
)

export default App`,Hn=`import { Card } from 'antd-packages'
import React, { useState } from 'react'

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1'
  },
  {
    key: 'tab2',
    tab: 'tab2'
  }
]

const contentList: Record<
  string,
  React.ReactNode
> = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>
}

const tabListNoTitle = [
  {
    key: 'article',
    tab: 'article'
  },
  {
    key: 'app',
    tab: 'app'
  },
  {
    key: 'project',
    tab: 'project'
  }
]

const contentListNoTitle: Record<
  string,
  React.ReactNode
> = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>
}

const App: React.FC = () => {
  const [activeTabKey1, setActiveTabKey1] =
    useState<string>('tab1')
  const [activeTabKey2, setActiveTabKey2] =
    useState<string>('app')

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key)
  }
  const onTab2Change = (key: string) => {
    setActiveTabKey2(key)
  }

  return (
    <>
      <Card
        style={{ width: '100%' }}
        title="Card title"
        extra={<a href="#">More</a>}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={(key) => {
          onTab1Change(key)
        }}
      >
        {contentList[activeTabKey1]}
      </Card>
      <br />
      <br />
      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={<a href="#">More</a>}
        onTabChange={(key) => {
          onTab2Change(key)
        }}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  )
}

export default App`,Gn=`import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { Avatar, Card } from 'antd-packages'
import React from 'react'

const { Meta } = Card

const App: React.FC = () => (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />
    ]}
  >
    <Meta
      avatar={
        <Avatar src="https://joeschmoe.io/api/v1/random" />
      }
      title="Card title"
      description="This is the description"
    />
  </Card>
)

export default App`,Jn=`import { Carousel } from 'antd-packages'
import React from 'react'

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

const App: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  )
}

export default App`,Yn=`import type { RadioChangeEvent } from 'antd-packages'
import { Carousel, Radio } from 'antd-packages'
import type { DotPosition } from 'antd-packages/lib/carousel'
import React, { useState } from 'react'

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

const App: React.FC = () => {
  const [dotPosition, setDotPosition] =
    useState<DotPosition>('top')

  const handlePositionChange = ({
    target: { value }
  }: RadioChangeEvent) => {
    setDotPosition(value)
  }

  return (
    <>
      <Radio.Group
        onChange={handlePositionChange}
        value={dotPosition}
        style={{ marginBottom: 8 }}
      >
        <Radio.Button value="top">
          Top
        </Radio.Button>
        <Radio.Button value="bottom">
          Bottom
        </Radio.Button>
        <Radio.Button value="left">
          Left
        </Radio.Button>
        <Radio.Button value="right">
          Right
        </Radio.Button>
      </Radio.Group>
      <Carousel dotPosition={dotPosition}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  )
}

export default App`,Wn=`import { Carousel } from 'antd-packages'
import React from 'react'

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

const App: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
)

export default App`,Qn=`import { Carousel } from 'antd-packages'
import React from 'react'

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

const App: React.FC = () => (
  <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
)

export default App`,Xn=`import { Cascader } from 'antd-packages'
import React from 'react'

interface Option {
  value: string | number
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

const onChange = (value: string[]) => {
  console.log(value)
}

const App: React.FC = () => (
  <Cascader
    options={options}
    onChange={onChange}
    placeholder="Please select"
  />
)

export default App`,qn=`import { Cascader } from 'antd-packages'
import React from 'react'

interface Option {
  value: string
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

const onChange = (value: string[]) => {
  console.log(value)
}

const App: React.FC = () => (
  <Cascader
    defaultValue={[
      'zhejiang',
      'hangzhou',
      'xihu'
    ]}
    options={options}
    onChange={onChange}
  />
)

export default App`,_n=`import { Cascader } from 'antd-packages'
import React, { useState } from 'react'

interface Option {
  value: string
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou'
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing'
      }
    ]
  }
]

const App: React.FC = () => {
  const [text, setText] = useState('Unselect')

  const onChange = (
    _: string[],
    selectedOptions: Option[]
  ) => {
    setText(
      selectedOptions
        .map((o) => o.label)
        .join(', ')
    )
  }

  return (
    <span>
      {text}
      &nbsp;
      <Cascader
        options={options}
        onChange={onChange}
      >
        <a href="#">Change city</a>
      </Cascader>
    </span>
  )
}

export default App`,ne=`import { Cascader } from 'antd-packages'
import React from 'react'

interface Option {
  value: string
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

const onChange = (value: string[]) => {
  console.log(value)
}

// Just show the latest item.
const displayRender = (labels: string[]) =>
  labels[labels.length - 1]

const App: React.FC = () => (
  <Cascader
    options={options}
    expandTrigger="hover"
    displayRender={displayRender}
    onChange={onChange}
  />
)

export default App`,ee=`import { Cascader } from 'antd-packages'
import React from 'react'

interface Option {
  value: string
  label: string
  disabled?: boolean
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    disabled: true,
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

const onChange = (value: string[]) => {
  console.log(value)
}

const App: React.FC = () => (
  <Cascader
    options={options}
    onChange={onChange}
  />
)

export default App`,te=`import { Cascader } from 'antd-packages'
import React from 'react'

interface Option {
  value: string
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hanzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

const onChange = (value: string[]) => {
  console.log(value)
}

const App: React.FC = () => (
  <Cascader
    options={options}
    onChange={onChange}
    changeOnSelect
  />
)

export default App`,ae=`import { Cascader } from 'antd-packages'
import React from 'react'

interface Option {
  value: string | number
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({
        label: \`Number \${index}\`,
        value: index
      }))
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish'
          },
          {
            label: 'Toy Cards',
            value: 'cards'
          },
          {
            label: 'Toy Bird',
            value: 'bird'
          }
        ]
      }
    ]
  }
]

const onChange = (value: string[][]) => {
  console.log(value)
}

const App: React.FC = () => (
  <Cascader
    style={{ width: '100%' }}
    options={options}
    onChange={onChange}
    multiple
    maxTagCount="responsive"
  />
)

export default App`,re=`import { Cascader } from 'antd-packages'

const { SHOW_CHILD } = Cascader

interface Option {
  value: string | number
  label: string
  children?: Option[]
}
const options: Option[] = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({
        label: \`Number \${index}\`,
        value: index
      }))
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish'
          },
          {
            label: 'Toy Cards',
            value: 'cards'
          },
          {
            label: 'Toy Bird',
            value: 'bird'
          }
        ]
      }
    ]
  }
]

const App: React.FC = () => {
  const onChange = (value: string[][]) => {
    console.log(value)
  }
  return (
    <>
      <Cascader
        style={{ width: '100%' }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        showCheckedStrategy={SHOW_CHILD}
        defaultValue={[
          ['bamboo', 'little', 'fish'],
          ['bamboo', 'little', 'cards'],
          ['bamboo', 'little', 'bird']
        ]}
      />
      <br />
      <br />
      <Cascader
        style={{ width: '100%' }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        defaultValue={['bamboo']}
      />
    </>
  )
}

export default App`,oe=`import { Cascader } from 'antd-packages'
import React from 'react'

interface Option {
  value: string
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

const onChange = (value: string[]) => {
  console.log(value)
}

const App: React.FC = () => (
  <>
    <Cascader
      size="large"
      options={options}
      onChange={onChange}
    />
    <br />
    <br />
    <Cascader
      options={options}
      onChange={onChange}
    />
    <br />
    <br />
    <Cascader
      size="small"
      options={options}
      onChange={onChange}
    />
    <br />
    <br />
  </>
)

export default App`,se=`import { Cascader } from 'antd-packages'
import type { DefaultOptionType } from 'antd-packages/es/cascader'
import React from 'react'

interface Option {
  value: string
  label: string
  children?: Option[]
  code?: number
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            code: 752100
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            code: 453400
          }
        ]
      }
    ]
  }
]

const handleAreaClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  label: string,
  option: DefaultOptionType
) => {
  e.stopPropagation()
  console.log('clicked', label, option)
}

const displayRender = (
  labels: string[],
  selectedOptions: DefaultOptionType[]
) =>
  labels.map((label, i) => {
    const option = selectedOptions[i]
    if (i === labels.length - 1) {
      return (
        <span key={option.value}>
          {label} (
          <a
            onClick={(e) =>
              handleAreaClick(e, label, option)
            }
          >
            {option.code}
          </a>
          )
        </span>
      )
    }
    return (
      <span key={option.value}>{label} / </span>
    )
  })

const App: React.FC = () => (
  <Cascader
    options={options}
    defaultValue={[
      'zhejiang',
      'hangzhou',
      'xihu'
    ]}
    displayRender={displayRender}
    style={{ width: '100%' }}
  />
)

export default App`,ie=`import { Cascader } from 'antd-packages'
import type { DefaultOptionType } from 'antd-packages/es/cascader'
import React from 'react'

interface Option {
  value: string
  label: string
  children?: Option[]
  disabled?: boolean
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          },
          {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua men'
          }
        ]
      }
    ]
  }
]

const onChange = (
  value: string[],
  selectedOptions: Option[]
) => {
  console.log(value, selectedOptions)
}

const filter = (
  inputValue: string,
  path: DefaultOptionType[]
) =>
  path.some(
    (option) =>
      (option.label as string)
        .toLowerCase()
        .indexOf(inputValue.toLowerCase()) > -1
  )

const App: React.FC = () => (
  <Cascader
    options={options}
    onChange={onChange}
    placeholder="Please select"
    showSearch={{ filter }}
    onSearch={(value) => console.log(value)}
  />
)

export default App`,le=`import { Cascader } from 'antd-packages'
import React, { useState } from 'react'

interface Option {
  value: string
  label: string
  children?: Option[]
  isLeaf?: boolean
  loading?: boolean
}

const optionLists: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false
  }
]

const App: React.FC = () => {
  const [options, setOptions] =
    useState<Option[]>(optionLists)

  const onChange = (
    value: string[],
    selectedOptions: Option[]
  ) => {
    console.log(value, selectedOptions)
  }

  const loadData = (
    selectedOptions: Option[]
  ) => {
    const targetOption =
      selectedOptions[selectedOptions.length - 1]
    targetOption.loading = true

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false
      targetOption.children = [
        {
          label: \`\${targetOption.label} Dynamic 1\`,
          value: 'dynamic1'
        },
        {
          label: \`\${targetOption.label} Dynamic 2\`,
          value: 'dynamic2'
        }
      ]
      setOptions([...options])
    }, 1000)
  }

  return (
    <Cascader
      options={options}
      loadData={loadData}
      onChange={onChange}
      changeOnSelect
    />
  )
}

export default App`,de=`import { Cascader } from 'antd-packages'
import React from 'react'

interface Option {
  code: string
  name: string
  items?: Option[]
}

const options: Option[] = [
  {
    code: 'zhejiang',
    name: 'Zhejiang',
    items: [
      {
        code: 'hangzhou',
        name: 'Hangzhou',
        items: [
          {
            code: 'xihu',
            name: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    code: 'jiangsu',
    name: 'Jiangsu',
    items: [
      {
        code: 'nanjing',
        name: 'Nanjing',
        items: [
          {
            code: 'zhonghuamen',
            name: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

const onChange = (value: string[]) => {
  console.log(value)
}

const App: React.FC = () => (
  <Cascader
    fieldNames={{
      label: 'name',
      value: 'code',
      children: 'items'
    }}
    options={options}
    onChange={onChange}
    placeholder="Please select"
  />
)

export default App`,ce=`import { SmileOutlined } from '@ant-design/icons'
import { Cascader } from 'antd-packages'
import React from 'react'

interface Option {
  value: string
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

const onChange = (value: string[]) => {
  console.log(value)
}

const App: React.FC = () => (
  <>
    <Cascader
      suffixIcon={<SmileOutlined />}
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
    <br />
    <br />
    <Cascader
      suffixIcon="ab"
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
    <br />
    <br />
    <Cascader
      expandIcon={<SmileOutlined />}
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
    <br />
    <br />
    <Cascader
      expandIcon="ab"
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
  </>
)

export default App`,pe=`import { Cascader, Divider } from 'antd-packages'
import React from 'react'

interface Option {
  value: string
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

const dropdownRender = (
  menus: React.ReactNode
) => (
  <div>
    {menus}
    <Divider style={{ margin: 0 }} />
    <div style={{ padding: 8 }}>
      The footer is not very short.
    </div>
  </div>
)

const App: React.FC = () => (
  <Cascader
    options={options}
    dropdownRender={dropdownRender}
    placeholder="Please select"
  />
)

export default App`,ue=`import type { RadioChangeEvent } from 'antd-packages'
import { Cascader, Radio } from 'antd-packages'
import React, { useState } from 'react'

interface Option {
  value: string
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

const App: React.FC = () => {
  const [placement, SetPlacement] = useState<
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topRight'
  >('topLeft')

  const placementChange = (
    e: RadioChangeEvent
  ) => {
    SetPlacement(e.target.value)
  }

  return (
    <>
      <Radio.Group
        value={placement}
        onChange={placementChange}
      >
        <Radio.Button value="topLeft">
          topLeft
        </Radio.Button>
        <Radio.Button value="topRight">
          topRight
        </Radio.Button>
        <Radio.Button value="bottomLeft">
          bottomLeft
        </Radio.Button>
        <Radio.Button value="bottomRight">
          bottomRight
        </Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Cascader
        options={options}
        placeholder="Please select"
        placement={placement}
      />
    </>
  )
}

export default App`,me=`import { Cascader, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space direction="vertical">
    <Cascader
      status="error"
      placeholder="Error"
    />
    <Cascader
      status="warning"
      multiple
      placeholder="Warning multiple"
    />
  </Space>
)

export default App`,ge=`import { Checkbox } from 'antd-packages'
import type { CheckboxChangeEvent } from 'antd-packages/es/checkbox'
import React from 'react'

const onChange = (e: CheckboxChangeEvent) => {
  console.log(\`checked = \${e.target.checked}\`)
}

const App: React.FC = () => (
  <Checkbox onChange={onChange}>
    Checkbox
  </Checkbox>
)

export default App`,fe=`import { Checkbox } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </>
)

export default App`,ve=`import { Button, Checkbox } from 'antd-packages'
import type { CheckboxChangeEvent } from 'antd-packages/es/checkbox'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [checked, setChecked] = useState(true)
  const [disabled, setDisabled] = useState(false)

  const toggleChecked = () => {
    setChecked(!checked)
  }

  const toggleDisable = () => {
    setDisabled(!disabled)
  }

  const onChange = (e: CheckboxChangeEvent) => {
    console.log('checked = ', e.target.checked)
    setChecked(e.target.checked)
  }

  const label = \`\${checked ? 'Checked' : 'Unchecked'
    }-\${disabled ? 'Disabled' : 'Enabled'}\`

  return (
    <>
      <p style={{ marginBottom: '20px' }}>
        <Checkbox
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        >
          {label}
        </Checkbox>
      </p>
      <p>
        <Button
          type="primary"
          size="small"
          onClick={toggleChecked}
        >
          {!checked ? 'Check' : 'Uncheck'}
        </Button>
        <Button
          style={{ margin: '0 10px' }}
          type="primary"
          size="small"
          onClick={toggleDisable}
        >
          {!disabled ? 'Disable' : 'Enable'}
        </Button>
      </p>
    </>
  )
}

export default App`,he=`import { Checkbox } from 'antd-packages'
import type { CheckboxValueType } from 'antd-packages/es/checkbox/Group'
import React from 'react'

const onChange = (
  checkedValues: CheckboxValueType[]
) => {
  console.log('checked = ', checkedValues)
}

const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
]
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  {
    label: 'Orange',
    value: 'Orange',
    disabled: false
  }
]

const App: React.FC = () => (
  <>
    <Checkbox.Group
      options={plainOptions}
      defaultValue={['Apple']}
      onChange={onChange}
    />
    <br />
    <br />
    <Checkbox.Group
      options={options}
      defaultValue={['Pear']}
      onChange={onChange}
    />
    <br />
    <br />
    <Checkbox.Group
      options={optionsWithDisabled}
      disabled
      defaultValue={['Apple']}
      onChange={onChange}
    />
  </>
)

export default App`,ye=`import { Checkbox, Divider } from 'antd-packages'
import type { CheckboxChangeEvent } from 'antd-packages/es/checkbox'
import type { CheckboxValueType } from 'antd-packages/es/checkbox/Group'
import React, { useState } from 'react'

const CheckboxGroup = Checkbox.Group

const plainOptions = ['Apple', 'Pear', 'Orange']
const defaultCheckedList = ['Apple', 'Orange']

const App: React.FC = () => {
  const [checkedList, setCheckedList] = useState<
    CheckboxValueType[]
  >(defaultCheckedList)
  const [indeterminate, setIndeterminate] =
    useState(true)
  const [checkAll, setCheckAll] = useState(false)

  const onChange = (
    list: CheckboxValueType[]
  ) => {
    setCheckedList(list)
    setIndeterminate(
      !!list.length &&
      list.length < plainOptions.length
    )
    setCheckAll(
      list.length === plainOptions.length
    )
  }

  const onCheckAllChange = (
    e: CheckboxChangeEvent
  ) => {
    setCheckedList(
      e.target.checked ? plainOptions : []
    )
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </>
  )
}

export default App`,Ce=`import { Checkbox, Col, Row } from 'antd-packages'
import type { CheckboxValueType } from 'antd-packages/es/checkbox/Group'
import React from 'react'

const onChange = (
  checkedValues: CheckboxValueType[]
) => {
  console.log('checked = ', checkedValues)
}

const App: React.FC = () => (
  <Checkbox.Group
    style={{ width: '100%' }}
    onChange={onChange}
  >
    <Row>
      <Col span={8}>
        <Checkbox value="A">A</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="B">B</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">C</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="D">D</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="E">E</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
)

export default App`,we=`import { Checkbox, Radio, Space } from 'antd-packages'
import React from 'react'

const sharedStyle: React.CSSProperties = {
  border: '1px solid red',
  marginBottom: 16
}

const App: React.FC = () => (
  <div>
    <Space style={sharedStyle} align="center">
      <Checkbox value="light" />
      <div>Bamboo</div>
      <Checkbox value="little">Little</Checkbox>
    </Space>

    <Space style={sharedStyle} align="center">
      <Radio value="light" />
      <div>Bamboo</div>
      <Radio value="little">Little</Radio>
    </Space>

    <div
      style={{
        ...sharedStyle,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Checkbox value="light" />
      <div>Bamboo</div>
      <Checkbox value="little">Little</Checkbox>
    </div>

    <div
      style={{
        ...sharedStyle,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Radio value="light" />
      <div>Bamboo</div>
      <Radio value="little">Little</Radio>
    </div>
  </div>
)

export default App`,ke=`import { Collapse } from 'antd-packages'
import React from 'react'

const { Panel } = Collapse

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key)
  }

  return (
    <Collapse
      defaultActiveKey={['1']}
      onChange={onChange}
    >
      <Panel
        header="This is panel header 1"
        key="1"
      >
        <p>{text}</p>
      </Panel>
      <Panel
        header="This is panel header 2"
        key="2"
      >
        <p>{text}</p>
      </Panel>
      <Panel
        header="This is panel header 3"
        key="3"
      >
        <p>{text}</p>
      </Panel>
    </Collapse>
  )
}

export default App`,be=`import { Collapse } from 'antd-packages'
import React from 'react'

const { Panel } = Collapse

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`

const App: React.FC = () => (
  <Collapse accordion>
    <Panel
      header="This is panel header 1"
      key="1"
    >
      <p>{text}</p>
    </Panel>
    <Panel
      header="This is panel header 2"
      key="2"
    >
      <p>{text}</p>
    </Panel>
    <Panel
      header="This is panel header 3"
      key="3"
    >
      <p>{text}</p>
    </Panel>
  </Collapse>
)

export default App`,Se=`import { Collapse } from 'antd-packages'
import React from 'react'

const { Panel } = Collapse

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key)
  }

  return (
    <Collapse onChange={onChange}>
      <Panel
        header="This is panel header 1"
        key="1"
      >
        <Collapse defaultActiveKey="1">
          <Panel
            header="This is panel nest panel"
            key="1"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Panel>
      <Panel
        header="This is panel header 2"
        key="2"
      >
        <p>{text}</p>
      </Panel>
      <Panel
        header="This is panel header 3"
        key="3"
      >
        <p>{text}</p>
      </Panel>
    </Collapse>
  )
}

export default App`,Pe=`import { Collapse } from 'antd-packages'
import React from 'react'

const { Panel } = Collapse

const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known
    for its loyalty and faithfulness, it can be
    found as a welcome guest in many households
    across the world.
  </p>
)

const App: React.FC = () => (
  <Collapse
    bordered={false}
    defaultActiveKey={['1']}
  >
    <Panel
      header="This is panel header 1"
      key="1"
    >
      {text}
    </Panel>
    <Panel
      header="This is panel header 2"
      key="2"
    >
      {text}
    </Panel>
    <Panel
      header="This is panel header 3"
      key="3"
    >
      {text}
    </Panel>
  </Collapse>
)

export default App`,Re=`import { CaretRightOutlined } from '@ant-design/icons'
import { Collapse } from 'antd-packages'
import React from 'react'

const { Panel } = Collapse

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`

const App: React.FC = () => (
  <Collapse
    bordered={false}
    defaultActiveKey={['1']}
    expandIcon={({ isActive }) => (
      <CaretRightOutlined
        rotate={isActive ? 90 : 0}
      />
    )}
    className="site-collapse-custom-collapse"
  >
    <Panel
      header="This is panel header 1"
      key="1"
      className="site-collapse-custom-panel"
    >
      <p>{text}</p>
    </Panel>
    <Panel
      header="This is panel header 2"
      key="2"
      className="site-collapse-custom-panel"
    >
      <p>{text}</p>
    </Panel>
    <Panel
      header="This is panel header 3"
      key="3"
      className="site-collapse-custom-panel"
    >
      <p>{text}</p>
    </Panel>
  </Collapse>
)

export default App`,Te=`import { Collapse } from 'antd-packages'
import React from 'react'

const { Panel } = Collapse

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key)
  }

  return (
    <Collapse
      defaultActiveKey={['1']}
      onChange={onChange}
    >
      <Panel
        header="This is panel header with arrow icon"
        key="1"
      >
        <p>{text}</p>
      </Panel>
      <Panel
        showArrow={false}
        header="This is panel header with no arrow icon"
        key="2"
      >
        <p>{text}</p>
      </Panel>
    </Collapse>
  )
}

export default App`,xe=`import { SettingOutlined } from '@ant-design/icons'
import { Collapse, Select } from 'antd-packages'
import React, { useState } from 'react'

const { Panel } = Collapse
const { Option } = Select

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`

type ExpandIconPosition = 'start' | 'end'

const App: React.FC = () => {
  const [
    expandIconPosition,
    setExpandIconPosition
  ] = useState<ExpandIconPosition>('start')

  const onPositionChange = (
    newExpandIconPosition: ExpandIconPosition
  ) => {
    setExpandIconPosition(newExpandIconPosition)
  }

  const onChange = (key: string | string[]) => {
    console.log(key)
  }

  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation()
      }}
    />
  )

  return (
    <>
      <Collapse
        defaultActiveKey={['1']}
        onChange={onChange}
        expandIconPosition={expandIconPosition}
      >
        <Panel
          header="This is panel header 1"
          key="1"
          extra={genExtra()}
        >
          <div>{text}</div>
        </Panel>
        <Panel
          header="This is panel header 2"
          key="2"
          extra={genExtra()}
        >
          <div>{text}</div>
        </Panel>
        <Panel
          header="This is panel header 3"
          key="3"
          extra={genExtra()}
        >
          <div>{text}</div>
        </Panel>
      </Collapse>
      <br />
      <span>Expand Icon Position: </span>
      <Select
        value={expandIconPosition}
        style={{ margin: '0 8px' }}
        onChange={onPositionChange}
      >
        <Option value="start">start</Option>
        <Option value="end">end</Option>
      </Select>
    </>
  )
}

export default App`,Ie=`import { Collapse } from 'antd-packages'
import React from 'react'

const { Panel } = Collapse

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`

const App: React.FC = () => (
  <Collapse defaultActiveKey={['1']} ghost>
    <Panel
      header="This is panel header 1"
      key="1"
    >
      <p>{text}</p>
    </Panel>
    <Panel
      header="This is panel header 2"
      key="2"
    >
      <p>{text}</p>
    </Panel>
    <Panel
      header="This is panel header 3"
      key="3"
    >
      <p>{text}</p>
    </Panel>
  </Collapse>
)

export default App`,Ae=`import { Collapse, Space } from 'antd-packages'
import React from 'react'

const { Panel } = Collapse

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`

const App: React.FC = () => (
  <Space direction="vertical">
    <Collapse
      collapsible="header"
      defaultActiveKey={['1']}
    >
      <Panel
        header="This panel can only be collapsed by clicking text"
        key="1"
      >
        <p>{text}</p>
      </Panel>
    </Collapse>
    <Collapse collapsible="disabled">
      <Panel
        header="This panel can't be collapsed"
        key="1"
      >
        <p>{text}</p>
      </Panel>
    </Collapse>
  </Space>
)

export default App`,Be=`import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined
} from '@ant-design/icons'
import { Avatar, Comment, Tooltip } from 'antd-packages'
import moment from 'moment'
import React, {
  createElement,
  useState
} from 'react'

const App: React.FC = () => {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [action, setAction] = useState<
    string | null
  >(null)

  const like = () => {
    setLikes(1)
    setDislikes(0)
    setAction('liked')
  }

  const dislike = () => {
    setLikes(0)
    setDislikes(1)
    setAction('disliked')
  }

  const actions = [
    <Tooltip
      key="comment-basic-like"
      title="Like"
    >
      <span onClick={like}>
        {createElement(
          action === 'liked'
            ? LikeFilled
            : LikeOutlined
        )}
        <span className="comment-action">
          {likes}
        </span>
      </span>
    </Tooltip>,
    <Tooltip
      key="comment-basic-dislike"
      title="Dislike"
    >
      <span onClick={dislike}>
        {React.createElement(
          action === 'disliked'
            ? DislikeFilled
            : DislikeOutlined
        )}
        <span className="comment-action">
          {dislikes}
        </span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">
      Reply to
    </span>
  ]

  return (
    <Comment
      actions={actions}
      author={<a>Han Solo</a>}
      avatar={
        <Avatar
          src="https://joeschmoe.io/api/v1/random"
          alt="Han Solo"
        />
      }
      content={
        <p>
          We supply a series of design principles,
          practical patterns and high quality
          design resources (Sketch and Axure), to
          help people create their product
          prototypes beautifully and efficiently.
        </p>
      }
      datetime={
        <Tooltip
          title={moment().format(
            'YYYY-MM-DD HH:mm:ss'
          )}
        >
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  )
}

export default App`,De=`import { Comment, List, Tooltip } from 'antd-packages'
import moment from 'moment'
import React from 'react'

const data = [
  {
    actions: [
      <span key="comment-list-reply-to-0">
        Reply to
      </span>
    ],
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        We supply a series of design principles,
        practical patterns and high quality design
        resources (Sketch and Axure), to help
        people create their product prototypes
        beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(1, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment().subtract(1, 'days').fromNow()}
        </span>
      </Tooltip>
    )
  },
  {
    actions: [
      <span key="comment-list-reply-to-0">
        Reply to
      </span>
    ],
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        We supply a series of design principles,
        practical patterns and high quality design
        resources (Sketch and Axure), to help
        people create their product prototypes
        beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(2, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment().subtract(2, 'days').fromNow()}
        </span>
      </Tooltip>
    )
  }
]

const App: React.FC = () => (
  <List
    className="comment-list"
    header={\`\${data.length} replies\`}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <li>
        <Comment
          actions={item.actions}
          author={item.author}
          avatar={item.avatar}
          content={item.content}
          datetime={item.datetime}
        />
      </li>
    )}
  />
)

export default App`,Fe=`import { Avatar, Comment } from 'antd-packages'
import React from 'react'

const ExampleComment: React.FC<{
  children?: React.ReactNode
}> = ({ children }) => (
  <Comment
    actions={[
      <span key="comment-nested-reply-to">
        Reply to
      </span>
    ]}
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://joeschmoe.io/api/v1/random"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We supply a series of design principles,
        practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </Comment>
)

const App: React.FC = () => (
  <ExampleComment>
    <ExampleComment>
      <ExampleComment />
      <ExampleComment />
    </ExampleComment>
  </ExampleComment>
)

export default App`,Oe=`import {
  Avatar,
  Button,
  Comment,
  Form,
  Input,
  List
} from 'antd-packages'
import moment from 'moment'
import React, { useState } from 'react'

const { TextArea } = Input

interface CommentItem {
  author: string
  avatar: string
  content: React.ReactNode
  datetime: string
}

interface EditorProps {
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  onSubmit: () => void
  submitting: boolean
  value: string
}

const CommentList = ({
  comments
}: {
  comments: CommentItem[]
}) => (
  <List
    dataSource={comments}
    header={\`\${comments.length} \${
      comments.length > 1 ? 'replies' : 'reply'
    }\`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
)

const Editor = ({
  onChange,
  onSubmit,
  submitting,
  value
}: EditorProps) => (
  <>
    <Form.Item>
      <TextArea
        rows={4}
        onChange={onChange}
        value={value}
      />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
)

const App: React.FC = () => {
  const [comments, setComments] = useState<
    CommentItem[]
  >([])
  const [submitting, setSubmitting] =
    useState(false)
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    if (!value) return

    setSubmitting(true)

    setTimeout(() => {
      setSubmitting(false)
      setValue('')
      setComments([
        ...comments,
        {
          author: 'Han Solo',
          avatar:
            'https://joeschmoe.io/api/v1/random',
          content: <p>{value}</p>,
          datetime: moment().fromNow()
        }
      ])
    }, 1000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue(e.target.value)
  }

  return (
    <>
      {comments.length > 0 && (
        <CommentList comments={comments} />
      )}
      <Comment
        avatar={
          <Avatar
            src="https://joeschmoe.io/api/v1/random"
            alt="Han Solo"
          />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </>
  )
}

export default App`,Le=`import type { RadioChangeEvent } from 'antd-packages'
import {
  Button,
  Calendar,
  ConfigProvider,
  DatePicker,
  Modal,
  Pagination,
  Popconfirm,
  Radio,
  Select,
  Table,
  TimePicker,
  Transfer
} from 'antd-packages'
import enUS from 'antd/lib/locale/en_US'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import React, { useState } from 'react'

moment.locale('en')

const { Option } = Select
const { RangePicker } = DatePicker

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1'
      }
    ]
  },
  {
    title: 'Age',
    dataIndex: 'age'
  }
]

const Page = () => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const hideModal = () => {
    setVisible(false)
  }

  const info = () => {
    Modal.info({
      title: 'some info',
      content: 'some info'
    })
  }

  const confirm = () => {
    Modal.confirm({
      title: 'some info',
      content: 'some info'
    })
  }

  return (
    <div className="locale-components">
      <div className="example">
        <Pagination
          defaultCurrent={1}
          total={50}
          showSizeChanger
        />
      </div>
      <div className="example">
        <Select showSearch style={{ width: 200 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
        </Select>
        <DatePicker />
        <TimePicker />
        <RangePicker style={{ width: 200 }} />
      </div>
      <div className="example">
        <Button
          type="primary"
          onClick={showModal}
        >
          Show Modal
        </Button>
        <Button onClick={info}>Show info</Button>
        <Button onClick={confirm}>
          Show confirm
        </Button>
        <Popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </Popconfirm>
      </div>
      <div className="example">
        <Transfer
          dataSource={[]}
          showSearch
          targetKeys={[]}
        />
      </div>
      <div className="site-config-provider-calendar-wrapper">
        <Calendar
          fullscreen={false}
          value={moment()}
        />
      </div>
      <div className="example">
        <Table
          dataSource={[]}
          columns={columns}
        />
      </div>
      <Modal
        title="Locale Modal"
        visible={visible}
        onCancel={hideModal}
      >
        <p>Locale Modal</p>
      </Modal>
    </div>
  )
}

const App: React.FC = () => {
  const [locale, setLocal] = useState(enUS)

  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value
    setLocal(localeValue)
    if (!localeValue) {
      moment.locale('en')
    } else {
      moment.locale('zh-cn')
    }
  }

  return (
    <div>
      <div className="change-locale">
        <span style={{ marginRight: 16 }}>
          Change locale of components:{' '}
        </span>
        <Radio.Group
          value={locale}
          onChange={changeLocale}
        >
          <Radio.Button key="en" value={enUS}>
            English
          </Radio.Button>
          <Radio.Button key="cn" value={zhCN}>
            \u4E2D\u6587
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider locale={locale}>
        <Page
          key={
            locale
              ? locale.locale
              : 'en' /* Have to refresh for production environment */
          }
        />
      </ConfigProvider>
    </div>
  )
}

export default App`,Ne=`import {
  DownloadOutlined,
  LeftOutlined,
  MinusOutlined,
  PlusOutlined,
  RightOutlined,
  SearchOutlined as SearchIcon,
  SmileOutlined
} from '@ant-design/icons'
import type { RadioChangeEvent } from 'antd-packages'
import {
  Badge,
  Button,
  Cascader,
  Col,
  ConfigProvider,
  Divider,
  Input,
  InputNumber,
  Modal,
  Pagination,
  Radio,
  Rate,
  Row,
  Select,
  Steps,
  Switch,
  Tree,
  TreeSelect
} from 'antd-packages'
import type { DirectionType } from 'antd-packages/lib/config-provider'
import React, { useState } from 'react'

const InputGroup = Input.Group
const ButtonGroup = Button.Group
const { Option } = Select
const { TreeNode } = Tree
const { Search } = Input
const { Step } = Steps

const cascaderOptions = [
  {
    value: 'tehran',
    label: '\u062A\u0647\u0631\u0627\u0646',
    children: [
      {
        value: 'tehran-c',
        label: '\u062A\u0647\u0631\u0627\u0646',
        children: [
          {
            value: 'saadat-abad',
            label: '\u0633\u0639\u0627\u062F\u062A \u0622\u06CC\u0627\u062F'
          }
        ]
      }
    ]
  },
  {
    value: 'ardabil',
    label: '\u0627\u0631\u062F\u0628\u06CC\u0644',
    children: [
      {
        value: 'ardabil-c',
        label: '\u0627\u0631\u062F\u0628\u06CC\u0644',
        children: [
          {
            value: 'primadar',
            label: '\u067E\u06CC\u0631\u0645\u0627\u062F\u0631'
          }
        ]
      }
    ]
  },
  {
    value: 'gilan',
    label: '\u06AF\u06CC\u0644\u0627\u0646',
    children: [
      {
        value: 'rasht',
        label: '\u0631\u0634\u062A',
        children: [
          {
            value: 'district-3',
            label: '\u0645\u0646\u0637\u0642\u0647 \u06F3'
          }
        ]
      }
    ]
  }
]
type Placement =
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight'

const Page: React.FC<{
  popupPlacement: Placement
}> = ({ popupPlacement }) => {
  const [currentStep, setCurrentStep] =
    useState(0)
  const [modalVisible, setModalVisible] =
    useState(false)
  const [badgeCount, setBadgeCount] = useState(5)
  const [showBadge, setShowBadge] = useState(true)

  const selectBefore = (
    <Select
      defaultValue="Http://"
      style={{ width: 90 }}
    >
      <Option value="Http://">Http://</Option>
      <Option value="Https://">Https://</Option>
    </Select>
  )

  const selectAfter = (
    <Select
      defaultValue=".com"
      style={{ width: 80 }}
    >
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  )

  // ==== Cascader ====
  const cascaderFilter = (
    inputValue: string,
    path: { label: string }[]
  ) =>
    path.some(
      (option) =>
        option.label
          .toLowerCase()
          .indexOf(inputValue.toLowerCase()) > -1
    )

  const onCascaderChange = (value: any) => {
    console.log(value)
  }
  // ==== End Cascader ====

  // ==== Modal ====
  const showModal = () => {
    setModalVisible(true)
  }

  const handleOk = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    console.log(e)
    setModalVisible(false)
  }

  const handleCancel = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    console.log(e)
    setModalVisible(false)
  }

  // ==== End Modal ====

  const onStepsChange = (
    newCurrentStep: number
  ) => {
    console.log('onChange:', newCurrentStep)
    setCurrentStep(newCurrentStep)
  }

  // ==== Badge ====

  const increaseBadge = () => {
    setBadgeCount(badgeCount + 1)
  }

  const declineBadge = () => {
    let newBadgeCount = badgeCount - 1
    if (newBadgeCount < 0) {
      newBadgeCount = 0
    }
    setBadgeCount(newBadgeCount)
  }

  const onChangeBadge = (checked: boolean) => {
    setShowBadge(checked)
  }
  // ==== End Badge ====

  return (
    <div className="direction-components">
      <Row>
        <Col span={24}>
          <Divider orientation="left">
            Cascader example
          </Divider>
          <Cascader
            suffixIcon={<SearchIcon />}
            options={cascaderOptions}
            onChange={onCascaderChange}
            placeholder="\u06CC\u06A9 \u0645\u0648\u0631\u062F \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
            popupPlacement={popupPlacement}
          />
          &nbsp;&nbsp;&nbsp;&nbsp; With search:
          <Cascader
            suffixIcon={<SmileOutlined />}
            options={cascaderOptions}
            onChange={onCascaderChange}
            placeholder="Select an item"
            popupPlacement={popupPlacement}
            showSearch={{
              filter: cascaderFilter
            }}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          <Divider orientation="left">
            Switch example
          </Divider>
          &nbsp;&nbsp;
          <Switch defaultChecked />
          &nbsp;&nbsp;
          <Switch loading defaultChecked />
          &nbsp;&nbsp;
          <Switch size="small" loading />
        </Col>
        <Col span={12}>
          <Divider orientation="left">
            Radio Group example
          </Divider>

          <Radio.Group
            defaultValue="c"
            buttonStyle="solid"
          >
            <Radio.Button value="a">
              \u062A\u0647\u0631\u0627\u0646
            </Radio.Button>
            <Radio.Button value="b" disabled>
              \u0627\u0635\u0641\u0647\u0627\u0646
            </Radio.Button>
            <Radio.Button value="c">
              \u0641\u0627\u0631\u0633
            </Radio.Button>
            <Radio.Button value="d">
              \u062E\u0648\u0632\u0633\u062A\u0627\u0646
            </Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          <Divider orientation="left">
            Button example
          </Divider>
          <div className="button-demo">
            <Button
              type="primary"
              icon={<DownloadOutlined />}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<DownloadOutlined />}
            />
            <Button
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
            />
            <Button
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
            >
              Download
            </Button>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
            >
              Download
            </Button>
            <br />
            <Button.Group>
              <Button type="primary">
                <LeftOutlined />
                Backward
              </Button>
              <Button type="primary">
                Forward
                <RightOutlined />
              </Button>
            </Button.Group>
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
          </div>
        </Col>
        <Col span={12}>
          <Divider orientation="left">
            Tree example
          </Divider>
          <Tree
            showLine
            checkable
            defaultExpandedKeys={[
              '0-0-0',
              '0-0-1'
            ]}
            defaultSelectedKeys={[
              '0-0-0',
              '0-0-1'
            ]}
            defaultCheckedKeys={[
              '0-0-0',
              '0-0-1'
            ]}
          >
            <TreeNode title="parent 1" key="0-0">
              <TreeNode
                title="parent 1-0"
                key="0-0-0"
                disabled
              >
                <TreeNode
                  title="leaf"
                  key="0-0-0-0"
                  disableCheckbox
                />
                <TreeNode
                  title="leaf"
                  key="0-0-0-1"
                />
              </TreeNode>
              <TreeNode
                title="parent 1-1"
                key="0-0-1"
              >
                <TreeNode
                  title={
                    <span
                      style={{ color: '#1890ff' }}
                    >
                      sss
                    </span>
                  }
                  key="0-0-1-0"
                />
              </TreeNode>
            </TreeNode>
          </Tree>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">
            Input (Input Group) example
          </Divider>
          <InputGroup size="large">
            <Row gutter={8}>
              <Col span={5}>
                <Input defaultValue="0571" />
              </Col>
              <Col span={8}>
                <Input defaultValue="26888888" />
              </Col>
            </Row>
          </InputGroup>
          <br />
          <InputGroup compact>
            <Input
              style={{ width: '20%' }}
              defaultValue="0571"
            />
            <Input
              style={{ width: '30%' }}
              defaultValue="26888888"
            />
          </InputGroup>
          <br />
          <InputGroup compact>
            <Select defaultValue="Option1">
              <Option value="Option1">
                Option1
              </Option>
              <Option value="Option2">
                Option2
              </Option>
            </Select>
            <Input
              style={{ width: '50%' }}
              defaultValue="input content"
            />
            <InputNumber />
          </InputGroup>
          <br />
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
          />
          <br />
          <br />
          <div style={{ marginBottom: 16 }}>
            <Input
              addonBefore={selectBefore}
              addonAfter={selectAfter}
              defaultValue="mysite"
            />
          </div>
          <br />
          <Row>
            <Col span={12}>
              <Divider orientation="left">
                Select example
              </Divider>
              <Select
                mode="multiple"
                defaultValue="\u0645\u0648\u0631\u0686\u0647"
                style={{ width: 120 }}
              >
                <Option value="jack">Jack</Option>
                <Option value="\u0645\u0648\u0631\u0686\u0647">
                  \u0645\u0648\u0631\u0686\u0647
                </Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">
                  yiminghe
                </Option>
              </Select>
              <Select
                defaultValue="\u0645\u0648\u0631\u0686\u0647"
                style={{ width: 120 }}
                disabled
              >
                <Option value="\u0645\u0648\u0631\u0686\u0647">
                  \u0645\u0648\u0631\u0686\u0647
                </Option>
              </Select>
              <Select
                defaultValue="\u0645\u0648\u0631\u0686\u0647"
                style={{ width: 120 }}
                loading
              >
                <Option value="\u0645\u0648\u0631\u0686\u0647">
                  \u0645\u0648\u0631\u0686\u0647
                </Option>
              </Select>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option?.props.children
                    .toLowerCase()
                    .indexOf(
                      input.toLowerCase()
                    ) >= 0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="\u0633\u0639\u06CC\u062F">\u0633\u0639\u06CC\u062F</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Col>
            <Col span={12}>
              <Divider orientation="left">
                TreeSelect example
              </Divider>
              <div>
                <TreeSelect
                  showSearch
                  style={{ width: '100%' }}
                  dropdownStyle={{
                    maxHeight: 400,
                    overflow: 'auto'
                  }}
                  placeholder="Please select"
                  allowClear
                  treeDefaultExpandAll
                >
                  <TreeNode
                    title="parent 1"
                    key="0-1"
                  >
                    <TreeNode
                      title="parent 1-0"
                      key="0-1-1"
                    >
                      <TreeNode
                        title="my leaf"
                        key="random"
                      />
                      <TreeNode
                        title="your leaf"
                        key="random1"
                      />
                    </TreeNode>
                    <TreeNode
                      title="parent 1-1"
                      key="random2"
                    >
                      <TreeNode
                        title={
                          <b
                            style={{
                              color: '#08c'
                            }}
                          >
                            sss
                          </b>
                        }
                        key="random3"
                      />
                    </TreeNode>
                  </TreeNode>
                </TreeSelect>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <Divider orientation="left">
                Modal example
              </Divider>
              <div>
                <Button
                  type="primary"
                  onClick={showModal}
                >
                  Open Modal
                </Button>
                <Modal
                  title="\u067E\u0646\u0686\u0631\u0647 \u0633\u0627\u062F\u0647"
                  visible={modalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <p>
                    \u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627
                    \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F
                  </p>
                  <p>
                    \u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627
                    \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F
                  </p>
                  <p>
                    \u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627
                    \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F
                  </p>
                </Modal>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <Divider orientation="left">
                Steps example
              </Divider>
              <div>
                <Steps
                  progressDot
                  current={currentStep}
                >
                  <Step
                    title="Finished"
                    description="This is a description."
                  />
                  <Step
                    title="In Progress"
                    description="This is a description."
                  />
                  <Step
                    title="Waiting"
                    description="This is a description."
                  />
                </Steps>
                <br />
                <Steps
                  current={currentStep}
                  onChange={onStepsChange}
                >
                  <Step
                    title="Step 1"
                    description="This is a description."
                  />
                  <Step
                    title="Step 2"
                    description="This is a description."
                  />
                  <Step
                    title="Step 3"
                    description="This is a description."
                  />
                </Steps>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={12}>
              <Divider orientation="left">
                Rate example
              </Divider>
              <div>
                <Rate defaultValue={2.5} />
                <br />
                <strong>* Note:</strong> Half star
                not implemented in RTL direction,
                it will be supported after{' '}
                <a href="https://github.com/react-component/rate">
                  rc-rate
                </a>{' '}
                implement rtl support.
              </div>
            </Col>
            <Col span={12}>
              <Divider orientation="left">
                Badge example
              </Divider>
              <div>
                <div>
                  <Badge count={badgeCount}>
                    <a
                      href="#"
                      className="head-example"
                    />
                  </Badge>
                  <ButtonGroup>
                    <Button
                      onClick={declineBadge}
                    >
                      <MinusOutlined />
                    </Button>
                    <Button
                      onClick={increaseBadge}
                    >
                      <PlusOutlined />
                    </Button>
                  </ButtonGroup>
                </div>
                <div style={{ marginTop: 10 }}>
                  <Badge dot={showBadge}>
                    <a
                      href="#"
                      className="head-example"
                    />
                  </Badge>
                  <Switch
                    onChange={onChangeBadge}
                    checked={showBadge}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <br />
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">
            Pagination example
          </Divider>
          <Pagination
            showSizeChanger
            defaultCurrent={3}
            total={500}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">
            Grid System example
          </Divider>
          <div className="grid-demo">
            <div className="code-box-demo">
              <p>
                <strong>* Note:</strong> Every
                calculation in RTL grid system is
                from right side (offset, push,
                etc.)
              </p>
              <Row>
                <Col span={8}>col-8</Col>
                <Col span={8} offset={8}>
                  col-8
                </Col>
              </Row>
              <Row>
                <Col span={6} offset={6}>
                  col-6 col-offset-6
                </Col>
                <Col span={6} offset={6}>
                  col-6 col-offset-6
                </Col>
              </Row>
              <Row>
                <Col span={12} offset={6}>
                  col-12 col-offset-6
                </Col>
              </Row>
              <Row>
                <Col span={18} push={6}>
                  col-18 col-push-6
                </Col>
                <Col span={6} pull={18}>
                  col-6 col-pull-18
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

const App: React.FC = () => {
  const [direction, setDirection] =
    useState<DirectionType>('ltr')
  const [popupPlacement, setPopupPlacement] =
    useState<Placement>('bottomLeft')

  const changeDirection = (
    e: RadioChangeEvent
  ) => {
    const directionValue = e.target.value
    setDirection(directionValue)
    if (directionValue === 'rtl') {
      setPopupPlacement('bottomRight')
    } else {
      setPopupPlacement('bottomLeft')
    }
  }

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginRight: 16 }}>
          Change direction of components:{' '}
        </span>
        <Radio.Group
          defaultValue="ltr"
          onChange={changeDirection}
        >
          <Radio.Button key="ltr" value="ltr">
            LTR
          </Radio.Button>
          <Radio.Button key="rtl" value="rtl">
            RTL
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider direction={direction}>
        <Page popupPlacement={popupPlacement} />
      </ConfigProvider>
    </>
  )
}

export default App`,Me=`import {
  Button,
  Card,
  ConfigProvider,
  DatePicker,
  Divider,
  Input,
  Radio,
  Select,
  Table,
  Tabs
} from 'antd-packages'
import type { SizeType } from 'antd-packages/lib/config-provider/SizeContext'
import React, { useState } from 'react'

const { TabPane } = Tabs

const App: React.FC = () => {
  const [componentSize, setComponentSize] =
    useState<SizeType>('small')

  return (
    <div>
      <Radio.Group
        value={componentSize}
        onChange={(e) => {
          setComponentSize(e.target.value)
        }}
      >
        <Radio.Button value="small">
          Small
        </Radio.Button>
        <Radio.Button value="middle">
          Middle
        </Radio.Button>
        <Radio.Button value="large">
          Large
        </Radio.Button>
      </Radio.Group>
      <Divider />
      <ConfigProvider
        componentSize={componentSize}
      >
        <div className="example">
          <Input />
        </div>
        <div className="example">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
        <div className="example">
          <Input.Search allowClear />
        </div>
        <div className="example">
          <Input.TextArea allowClear />
        </div>
        <div className="example">
          <Select
            defaultValue="demo"
            options={[{ value: 'demo' }]}
          />
        </div>
        <div className="example">
          <DatePicker />
        </div>
        <div className="example">
          <DatePicker.RangePicker />
        </div>
        <div className="example">
          <Button>Button</Button>
        </div>
        <div className="example">
          <Card title="Card">
            <Table
              columns={[
                {
                  title: 'Name',
                  dataIndex: 'name'
                },
                { title: 'Age', dataIndex: 'age' }
              ]}
              dataSource={[
                {
                  key: '1',
                  name: 'John Brown',
                  age: 32
                },
                {
                  key: '2',
                  name: 'Jim Green',
                  age: 42
                },
                {
                  key: '3',
                  name: 'Joe Black',
                  age: 32
                }
              ]}
            />
          </Card>
        </div>
      </ConfigProvider>
    </div>
  )
}

export default App`,ze=`import {
  ClockCircleOutlined,
  DownOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import type {
  SpaceProps,
  TreeSelectProps
} from 'antd-packages'
import {
  Alert,
  Button,
  Card,
  Checkbox,
  Col,
  ConfigProvider,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Input,
  InputNumber,
  Mentions,
  Menu,
  Pagination,
  Progress,
  Radio,
  Row,
  Select,
  Slider,
  Space,
  Spin,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  Timeline,
  TimePicker,
  Transfer,
  Tree,
  TreeSelect,
  Typography
} from 'antd-packages'
import React, { useState } from 'react'
import { SketchPicker } from 'react-color'

const SplitSpace: React.FC<SpaceProps> = (
  props
) => (
  <Space
    split={<Divider type="vertical" />}
    size={4}
    {...props}
  />
)

const menuItems = [
  {
    key: 'mail',
    icon: <MailOutlined />,
    label: 'Mail'
  },
  {
    key: 'SubMenu',
    icon: <SettingOutlined />,
    label: 'Submenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            key: 'setting:1',
            label: 'Option 1'
          },
          {
            key: 'setting:2',
            label: 'Option 2'
          }
        ]
      }
    ]
  }
]

const inputProps = {
  style: { width: 128 }
}

const selectProps = {
  ...inputProps,
  options: [
    { value: 'light', label: 'Light' },
    { value: 'bamboo', label: 'Bamboo' },
    { value: 'little', label: 'Little' }
  ]
}

const treeData = [
  {
    value: 'little',
    key: 'little',
    label: 'Little',
    title: 'Little',
    children: [
      {
        value: 'light',
        key: 'light',
        label: 'Light',
        title: 'Light'
      },
      {
        value: 'bamboo',
        key: 'bamboo',
        label: 'Bamboo',
        title: 'Bamboo'
      }
    ]
  }
]

const treeSelectProps: TreeSelectProps = {
  ...inputProps,
  treeCheckable: true,
  maxTagCount: 'responsive',
  treeData
}

const carTabListNoTitle = [
  {
    key: 'article',
    tab: 'article'
  },
  {
    key: 'app',
    tab: 'app'
  },
  {
    key: 'project',
    tab: 'project'
  }
]

const MyTransfer = () => {
  const mockData = []
  for (let i = 0; i < 20; i++) {
    mockData.push({
      key: i.toString(),
      title: \`content\${i + 1}\`,
      description: \`description of content\${
        i + 1
      }\`
    })
  }

  return (
    <Transfer
      dataSource={mockData}
      targetKeys={['18']}
      selectedKeys={['3']}
      render={(item) => item.title}
    />
  )
}

const App: React.FC = () => {
  const [color, setColor] = useState({
    primaryColor: '#1890ff',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff'
  })

  const onColorChange = (
    nextColor: Partial<typeof color>
  ) => {
    const mergedNextColor = {
      ...color,
      ...nextColor
    }
    setColor(mergedNextColor)
    ConfigProvider.config({
      theme: mergedNextColor
    })
  }

  return (
    <Row gutter={16} wrap={false}>
      <Col flex="none">
        <Space
          direction="vertical"
          align="center"
        >
          {/* Primary Color */}
          <SketchPicker
            presetColors={[
              '#1890ff',
              '#25b864',
              '#ff6f00'
            ]}
            color={color.primaryColor}
            onChange={({ hex }) => {
              onColorChange({
                primaryColor: hex
              })
            }}
          />

          <span
            style={{
              color: 'var(--ant-primary-color)'
            }}
          >
            var(\`--ant-primary-color\`)
          </span>

          {/* Error Color */}
          <SketchPicker
            presetColors={['#ff4d4f']}
            color={color.errorColor}
            onChange={({ hex }) => {
              onColorChange({
                errorColor: hex
              })
            }}
          />

          <span
            style={{
              color: 'var(--ant-error-color)'
            }}
          >
            var(\`--ant-error-color\`)
          </span>

          {/* Warning Color */}
          <SketchPicker
            presetColors={['#faad14']}
            color={color.warningColor}
            onChange={({ hex }) => {
              onColorChange({
                warningColor: hex
              })
            }}
          />

          <span
            style={{
              color: 'var(--ant-warning-color)'
            }}
          >
            var(\`--ant-warning-color\`)
          </span>

          {/* Success Color */}
          <SketchPicker
            presetColors={['#52c41a']}
            color={color.successColor}
            onChange={({ hex }) => {
              onColorChange({
                successColor: hex
              })
            }}
          />

          <span
            style={{
              color: 'var(--ant-success-color)'
            }}
          >
            var(\`--ant-success-color\`)
          </span>

          {/* Info Color */}
          <SketchPicker
            presetColors={['#1890ff']}
            color={color.infoColor}
            onChange={({ hex }) => {
              onColorChange({
                infoColor: hex
              })
            }}
          />

          <span
            style={{
              color: 'var(--ant-info-color)'
            }}
          >
            var(\`--ant-info-color\`)
          </span>
        </Space>
      </Col>

      <Col flex="auto">
        <Space
          direction="vertical"
          split={<Divider />}
          style={{ width: '100%' }}
          size={0}
        >
          {/* Primary Button */}
          <SplitSpace>
            <Button type="primary">
              Primary
            </Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="link">Link</Button>
          </SplitSpace>

          {/* Danger Button */}
          <SplitSpace>
            <Button danger type="primary">
              Primary
            </Button>
            <Button danger>Default</Button>
            <Button danger type="dashed">
              Dashed
            </Button>
            <Button danger type="text">
              Text
            </Button>
            <Button danger type="link">
              Link
            </Button>
          </SplitSpace>

          {/* Ghost Button */}
          <SplitSpace
            style={{
              background: 'rgb(190, 200, 200)'
            }}
          >
            <Button type="primary" ghost>
              Primary
            </Button>
            <Button ghost>Default</Button>
            <Button type="dashed" ghost>
              Dashed
            </Button>
            <Button type="primary" ghost danger>
              Primary
            </Button>
            <Button ghost danger>
              Default
            </Button>
            <Button type="dashed" ghost danger>
              Dashed
            </Button>
          </SplitSpace>

          {/* Typography */}
          <SplitSpace>
            <Typography.Text type="success">
              Text (success)
            </Typography.Text>
            <Typography.Text type="warning">
              Text(warning)
            </Typography.Text>
            <Typography.Text type="danger">
              Text(danger)
            </Typography.Text>
            <Typography.Link
              href="https://ant.design"
              target="_blank"
            >
              Link
            </Typography.Link>
            <Typography.Text copyable>
              Text
            </Typography.Text>

            {/* Dropdown */}
            <Dropdown
              overlay={
                <Menu
                  items={[
                    {
                      key: '1',
                      label: '1st menu item'
                    },
                    {
                      key: '2',
                      label: 'a danger item',
                      danger: true
                    }
                  ]}
                />
              }
            >
              <a
                onClick={(e) =>
                  e.preventDefault()
                }
              >
                <Space>
                  Hover me
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>

            {/* Spin */}
            <Spin />
          </SplitSpace>

          {/* Menu - horizontal */}
          <Row gutter={16}>
            <Col span={12}>
              <Menu
                mode="horizontal"
                defaultSelectedKeys={['mail']}
                items={menuItems}
              />
            </Col>
            <Col span={12}>
              <Menu
                mode="horizontal"
                theme="dark"
                defaultSelectedKeys={['mail']}
                items={menuItems}
              />
            </Col>
          </Row>

          {/* Menu - vertical */}
          <Row gutter={16}>
            <Col span={12}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['mail']}
                items={menuItems}
              />
            </Col>
            <Col span={12}>
              <Menu
                mode="vertical"
                theme="dark"
                defaultSelectedKeys={['mail']}
                items={menuItems}
              />
            </Col>
          </Row>

          {/* Pagination */}
          <Pagination
            showQuickJumper
            defaultCurrent={2}
            total={500}
          />

          {/* Steps */}
          <Steps current={1} percent={60}>
            <Steps.Step
              title="Finished"
              description="This is a description."
            />
            <Steps.Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            />
            <Steps.Step
              title="Waiting"
              description="This is a description."
            />
          </Steps>

          {/* Steps - dot */}
          <Steps
            current={2}
            status="error"
            progressDot
          >
            <Steps.Step
              title="Finished"
              description="You can hover on the dot."
            />
            <Steps.Step
              title="In Progress"
              description="You can hover on the dot."
            />
            <Steps.Step
              title="Error"
              description="You can hover on the dot."
            />
            <Steps.Step
              title="Waiting"
              description="You can hover on the dot."
            />
          </Steps>

          {/* Form - Input */}
          <Form>
            <SplitSpace>
              <Form.Item>
                <Input {...inputProps} />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="success"
              >
                <Input {...inputProps} />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="warning"
              >
                <Input {...inputProps} />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="error"
              >
                <Input {...inputProps} />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="validating"
              >
                <Input {...inputProps} />
              </Form.Item>
            </SplitSpace>
          </Form>

          {/* Form - Select */}
          <Form>
            <SplitSpace>
              <Form.Item>
                <Select {...selectProps} />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="success"
              >
                <Select {...selectProps} />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="warning"
              >
                <Select {...selectProps} />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="error"
              >
                <Select {...selectProps} />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="validating"
              >
                <Select {...selectProps} />
              </Form.Item>
            </SplitSpace>
          </Form>

          {/* Form - TreeSelect */}
          <Form>
            <SplitSpace>
              <Form.Item>
                <TreeSelect
                  {...treeSelectProps}
                />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="success"
              >
                <TreeSelect
                  {...treeSelectProps}
                />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="warning"
              >
                <TreeSelect
                  {...treeSelectProps}
                />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="error"
              >
                <TreeSelect
                  {...treeSelectProps}
                />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="validating"
              >
                <TreeSelect
                  {...treeSelectProps}
                />
              </Form.Item>
            </SplitSpace>
          </Form>

          {/* Form - InputNumber */}
          <Form>
            <SplitSpace>
              <Form.Item>
                <InputNumber />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="success"
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="warning"
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="error"
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="validating"
              >
                <InputNumber />
              </Form.Item>
            </SplitSpace>
          </Form>

          {/* Form - DatePicker */}
          <Form>
            <SplitSpace>
              <Form.Item>
                <DatePicker />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="success"
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="warning"
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="error"
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                hasFeedback
                validateStatus="validating"
              >
                <DatePicker />
              </Form.Item>
            </SplitSpace>
          </Form>

          <SplitSpace>
            <Checkbox>Checkbox</Checkbox>

            <Radio.Group defaultValue="bamboo">
              <Radio value="bamboo">Bamboo</Radio>
              <Radio value="light">Light</Radio>
              <Radio value="little">Little</Radio>
            </Radio.Group>

            <Mentions placeholder="Mention by @">
              <Mentions.Option value="afc163">
                afc163
              </Mentions.Option>
              <Mentions.Option value="zombieJ">
                zombieJ
              </Mentions.Option>
              <Mentions.Option value="yesmeck">
                yesmeck
              </Mentions.Option>
            </Mentions>

            <Slider
              defaultValue={30}
              style={{ width: 100 }}
            />

            <Switch defaultChecked />
          </SplitSpace>

          <SplitSpace>
            <DatePicker.RangePicker />
            <TimePicker.RangePicker />
          </SplitSpace>

          <Row gutter={16}>
            <Col span={8}>
              {/* Card */}
              <Card
                style={{ width: '100%' }}
                tabList={carTabListNoTitle}
                tabBarExtraContent={
                  <a href="#">More</a>
                }
              />
            </Col>
            <Col span={8}>
              {/* Table */}
              <Table
                size="small"
                bordered
                rowSelection={{}}
                columns={[
                  {
                    title: 'Key',
                    dataIndex: 'key',
                    filters: [
                      {
                        text: 'Little',
                        value: 'little'
                      }
                    ],
                    sorter: (a, b) =>
                      a.key.length - b.key.length
                  }
                ]}
                dataSource={[
                  {
                    key: 'Bamboo'
                  },
                  {
                    key: 'Light'
                  },
                  {
                    key: 'Little'
                  }
                ]}
              />
            </Col>
            <Col span={8}>
              {/* Table */}
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Tab 1" key="1">
                  Content of Tab Pane 1
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 2" key="2">
                  Content of Tab Pane 2
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 3" key="3">
                  Content of Tab Pane 3
                </Tabs.TabPane>
              </Tabs>
            </Col>
          </Row>

          <SplitSpace>
            <Tag color="success">success</Tag>
            <Tag color="processing">
              processing
            </Tag>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
            <Tag color="default">default</Tag>
            <Tag.CheckableTag checked>
              CheckableTag
            </Tag.CheckableTag>
          </SplitSpace>

          <Row gutter={16}>
            <Col span={16}>
              <Timeline mode="alternate">
                <Timeline.Item>
                  Create a services site
                  2015-09-01
                </Timeline.Item>
                <Timeline.Item color="gray">
                  Solve initial network problems
                  2015-09-01
                </Timeline.Item>
                <Timeline.Item
                  dot={
                    <ClockCircleOutlined
                      style={{ fontSize: '16px' }}
                    />
                  }
                >
                  Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem
                  accusantium doloremque
                  laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo
                  inventore veritatis et quasi
                  architecto beatae vitae dicta
                  sunt explicabo.
                </Timeline.Item>
              </Timeline>
            </Col>

            <Col span={8}>
              <Tree
                treeData={treeData}
                height={200}
                defaultExpandAll
                checkable
              />
            </Col>
          </Row>

          {/* Alert */}
          <Row gutter={16}>
            <Col span={6}>
              <Alert
                showIcon
                message="Success Text"
                type="success"
              />
            </Col>
            <Col span={6}>
              <Alert
                showIcon
                message="Info Text"
                type="info"
              />
            </Col>
            <Col span={6}>
              <Alert
                showIcon
                message="Warning Text"
                type="warning"
              />
            </Col>
            <Col span={6}>
              <Alert
                showIcon
                message="Error Text"
                type="error"
              />
            </Col>
          </Row>

          {/* Progress */}
          <Row gutter={16}>
            <Col flex="auto">
              <Progress percent={30} />
              <Progress
                percent={70}
                status="exception"
              />
              <Progress percent={100} />
            </Col>
            <Col flex="none">
              <Progress
                type="circle"
                percent={75}
              />
              <Progress
                type="circle"
                percent={70}
                status="exception"
              />
              <Progress
                type="circle"
                percent={100}
              />
            </Col>
          </Row>

          <MyTransfer />
        </Space>
      </Col>
    </Row>
  )
}

export default App`,Ee=`import { SmileOutlined } from '@ant-design/icons'
import {
  Button,
  ConfigProvider,
  Select
} from 'antd-packages'
import React, { useState } from 'react'

// Ant Design site use \`es\` module for view
// but do not replace related lib \`lib\` with \`es\`
// which do not show correct in site.
// We may need do convert in site also.
const App: React.FC = () => {
  const [prefixCls, setPrefixCls] =
    useState('light')

  return (
    <div>
      <Button
        style={{ marginBottom: '12px' }}
        type="primary"
        onClick={() => setPrefixCls('dark')}
      >
        toggle prefixCls
      </Button>
      <div>
        <ConfigProvider
          prefixCls={prefixCls}
          iconPrefixCls="bamboo"
        >
          <SmileOutlined />
          <Select />
        </ConfigProvider>
      </div>
    </div>
  )
}

export default App`,$e=`import type { DatePickerProps } from 'antd-packages'
import { DatePicker, Space } from 'antd-packages'
import React from 'react'

const onChange: DatePickerProps['onChange'] = (
  date,
  dateString
) => {
  console.log(date, dateString)
}

const App: React.FC = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
    <DatePicker
      onChange={onChange}
      picker="week"
    />
    <DatePicker
      onChange={onChange}
      picker="month"
    />
    <DatePicker
      onChange={onChange}
      picker="quarter"
    />
    <DatePicker
      onChange={onChange}
      picker="year"
    />
  </Space>
)

export default App`,Ze=`import { DatePicker, Space } from 'antd-packages'
import React from 'react'

const { RangePicker } = DatePicker

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <RangePicker />
    <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="quarter" />
    <RangePicker picker="year" />
  </Space>
)

export default App`,Ve=`import type {
  DatePickerProps,
  TimePickerProps
} from 'antd-packages'
import {
  DatePicker,
  Select,
  Space,
  TimePicker
} from 'antd-packages'
import React, { useState } from 'react'

const { Option } = Select

type PickerType = 'time' | 'date'

const PickerWithType = ({
  type,
  onChange
}: {
  type: PickerType
  onChange:
    | TimePickerProps['onChange']
    | DatePickerProps['onChange']
}) => {
  if (type === 'time')
    return <TimePicker onChange={onChange} />
  if (type === 'date')
    return <DatePicker onChange={onChange} />
  return (
    <DatePicker
      picker={type}
      onChange={onChange}
    />
  )
}

const App: React.FC = () => {
  const [type, setType] =
    useState<PickerType>('time')

  return (
    <Space>
      <Select value={type} onChange={setType}>
        <Option value="time">Time</Option>
        <Option value="date">Date</Option>
        <Option value="week">Week</Option>
        <Option value="month">Month</Option>
        <Option value="quarter">Quarter</Option>
        <Option value="year">Year</Option>
      </Select>
      <PickerWithType
        type={type}
        onChange={(value) => console.log(value)}
      />
    </Space>
  )
}

export default App`,Ke=`import type { DatePickerProps } from 'antd-packages'
import { DatePicker, Space } from 'antd-packages'
import moment from 'moment'
import React from 'react'

const { RangePicker } = DatePicker

const dateFormat = 'YYYY/MM/DD'
const weekFormat = 'MM/DD'
const monthFormat = 'YYYY/MM'

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']

const customFormat: DatePickerProps['format'] = (
  value
) => \`custom format: \${value.format(dateFormat)}\`

const customWeekStartEndFormat: DatePickerProps['format'] =
  (value) =>
    \`\${moment(value)
      .startOf('week')
      .format(weekFormat)} ~ \${moment(value)
      .endOf('week')
      .format(weekFormat)}\`

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      defaultValue={moment(
        '2015/01/01',
        dateFormat
      )}
      format={dateFormat}
    />
    <DatePicker
      defaultValue={moment(
        '01/01/2015',
        dateFormatList[0]
      )}
      format={dateFormatList}
    />
    <DatePicker
      defaultValue={moment(
        '2015/01',
        monthFormat
      )}
      format={monthFormat}
      picker="month"
    />
    <DatePicker
      defaultValue={moment()}
      format={customWeekStartEndFormat}
      picker="week"
    />
    <RangePicker
      defaultValue={[
        moment('2015/01/01', dateFormat),
        moment('2015/01/01', dateFormat)
      ]}
      format={dateFormat}
    />
    <DatePicker
      defaultValue={moment(
        '2015/01/01',
        dateFormat
      )}
      format={customFormat}
    />
  </Space>
)

export default App`,Ue=`import { DatePicker, Space } from 'antd-packages'
import type {
  DatePickerProps,
  RangePickerProps
} from 'antd-packages/es/date-picker'
import React from 'react'

const { RangePicker } = DatePicker

const onChange = (
  value:
    | DatePickerProps['value']
    | RangePickerProps['value'],
  dateString: [string, string] | string
) => {
  console.log('Selected Time: ', value)
  console.log(
    'Formatted Selected Time: ',
    dateString
  )
}

const onOk = (
  value:
    | DatePickerProps['value']
    | RangePickerProps['value']
) => {
  console.log('onOk: ', value)
}

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      showTime
      onChange={onChange}
      onOk={onOk}
    />
    <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      onChange={onChange}
      onOk={onOk}
    />
  </Space>
)

export default App`,je=`import { DatePicker, Space } from 'antd-packages'
import moment from 'moment'
import React from 'react'

const { RangePicker } = DatePicker

const dateFormat = 'YYYY-MM-DD'

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      defaultValue={moment(
        '2015-06-06',
        dateFormat
      )}
      disabled
    />
    <DatePicker
      picker="month"
      defaultValue={moment('2015-06', 'YYYY-MM')}
      disabled
    />
    <RangePicker
      defaultValue={[
        moment('2015-06-06', dateFormat),
        moment('2015-06-06', dateFormat)
      ]}
      disabled
    />
    <RangePicker
      defaultValue={[
        moment('2019-09-03', dateFormat),
        moment('2019-11-22', dateFormat)
      ]}
      disabled={[false, true]}
    />
  </Space>
)

export default App`,He=`import { DatePicker, Space } from 'antd-packages'
import type { RangePickerProps } from 'antd-packages/es/date-picker'
import moment from 'moment'
import React from 'react'

const { RangePicker } = DatePicker

const range = (start: number, end: number) => {
  const result = []
  for (let i = start; i < end; i++) {
    result.push(i)
  }
  return result
}

// eslint-disable-next-line arrow-body-style
const disabledDate: RangePickerProps['disabledDate'] =
  (current) => {
    // Can not select days before today and today
    return (
      current && current < moment().endOf('day')
    )
  }

const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56]
})

const disabledRangeTime: RangePickerProps['disabledTime'] =
  (_, type) => {
    if (type === 'start') {
      return {
        disabledHours: () =>
          range(0, 60).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56]
      }
    }
    return {
      disabledHours: () =>
        range(0, 60).splice(20, 4),
      disabledMinutes: () => range(0, 31),
      disabledSeconds: () => [55, 56]
    }
  }

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{
        defaultValue: moment(
          '00:00:00',
          'HH:mm:ss'
        )
      }}
    />
    <DatePicker
      picker="month"
      disabledDate={disabledDate}
    />
    <RangePicker disabledDate={disabledDate} />
    <RangePicker
      disabledDate={disabledDate}
      disabledTime={disabledRangeTime}
      showTime={{
        hideDisabledOptions: true,
        defaultValue: [
          moment('00:00:00', 'HH:mm:ss'),
          moment('11:59:59', 'HH:mm:ss')
        ]
      }}
      format="YYYY-MM-DD HH:mm:ss"
    />
  </Space>
)

export default App`,Ge=`import { DatePicker } from 'antd-packages'
import type { Moment } from 'moment'
import React, { useState } from 'react'

const { RangePicker } = DatePicker

type RangeValue =
  | [Moment | null, Moment | null]
  | null

const App: React.FC = () => {
  const [dates, setDates] =
    useState<RangeValue>(null)
  const [hackValue, setHackValue] =
    useState<RangeValue>(null)
  const [value, setValue] =
    useState<RangeValue>(null)

  const disabledDate = (current: Moment) => {
    if (!dates) {
      return false
    }
    const tooLate =
      dates[0] &&
      current.diff(dates[0], 'days') > 7
    const tooEarly =
      dates[1] &&
      dates[1].diff(current, 'days') > 7
    return !!tooEarly || !!tooLate
  }

  const onOpenChange = (open: boolean) => {
    if (open) {
      setHackValue([null, null])
      setDates([null, null])
    } else {
      setHackValue(null)
    }
  }

  return (
    <RangePicker
      value={hackValue || value}
      disabledDate={disabledDate}
      onCalendarChange={(val) => setDates(val)}
      onChange={(val) => setValue(val)}
      onOpenChange={onOpenChange}
    />
  )
}

export default App`,Je=`import { DatePicker, Space } from 'antd-packages'
import type { RangePickerProps } from 'antd-packages/es/date-picker'
import moment from 'moment'
import React from 'react'

const { RangePicker } = DatePicker

const onChange: RangePickerProps['onChange'] = (
  dates,
  dateStrings
) => {
  if (dates) {
    console.log(
      'From: ',
      dates[0],
      ', to: ',
      dates[1]
    )
    console.log(
      'From: ',
      dateStrings[0],
      ', to: ',
      dateStrings[1]
    )
  } else {
    console.log('Clear')
  }
}

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <RangePicker
      ranges={{
        Today: [moment(), moment()],
        'This Month': [
          moment().startOf('month'),
          moment().endOf('month')
        ]
      }}
      onChange={onChange}
    />
    <RangePicker
      ranges={{
        Today: [moment(), moment()],
        'This Month': [
          moment().startOf('month'),
          moment().endOf('month')
        ]
      }}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onChange}
    />
  </Space>
)

export default App`,Ye=`import { DatePicker, Space } from 'antd-packages'
import React from 'react'

const { RangePicker } = DatePicker

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      renderExtraFooter={() => 'extra footer'}
    />
    <DatePicker
      renderExtraFooter={() => 'extra footer'}
      showTime
    />
    <RangePicker
      renderExtraFooter={() => 'extra footer'}
    />
    <RangePicker
      renderExtraFooter={() => 'extra footer'}
      showTime
    />
    <DatePicker
      renderExtraFooter={() => 'extra footer'}
      picker="month"
    />
  </Space>
)

export default App`,We=`import type { RadioChangeEvent } from 'antd-packages'
import { DatePicker, Radio, Space } from 'antd-packages'
import type { SizeType } from 'antd-packages/es/config-provider/SizeContext'
import React, { useState } from 'react'

const { RangePicker } = DatePicker

const App: React.FC = () => {
  const [size, setSize] =
    useState<SizeType>('middle')

  const handleSizeChange = (
    e: RadioChangeEvent
  ) => {
    setSize(e.target.value)
  }

  return (
    <Space direction="vertical" size={12}>
      <Radio.Group
        value={size}
        onChange={handleSizeChange}
      >
        <Radio.Button value="large">
          Large
        </Radio.Button>
        <Radio.Button value="middle">
          middle
        </Radio.Button>
        <Radio.Button value="small">
          Small
        </Radio.Button>
      </Radio.Group>
      <DatePicker size={size} />
      <DatePicker size={size} picker="month" />
      <RangePicker size={size} />
      <DatePicker size={size} picker="week" />
    </Space>
  )
}

export default App`,Qe=`import { DatePicker, Space } from 'antd-packages'
import React from 'react'

const { RangePicker } = DatePicker

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      dateRender={(current) => {
        const style: React.CSSProperties = {}
        if (current.date() === 1) {
          style.border = '1px solid #1890ff'
          style.borderRadius = '50%'
        }
        return (
          <div
            className="ant-picker-cell-inner"
            style={style}
          >
            {current.date()}
          </div>
        )
      }}
    />
    <RangePicker
      dateRender={(current) => {
        const style: React.CSSProperties = {}
        if (current.date() === 1) {
          style.border = '1px solid #1890ff'
          style.borderRadius = '50%'
        }
        return (
          <div
            className="ant-picker-cell-inner"
            style={style}
          >
            {current.date()}
          </div>
        )
      }}
    />
  </Space>
)

export default App`,Xe=`import { DatePicker, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space
    direction="vertical"
    style={{ width: '100%' }}
  >
    <DatePicker
      status="error"
      style={{ width: '100%' }}
    />
    <DatePicker
      status="warning"
      style={{ width: '100%' }}
    />
    <DatePicker.RangePicker
      status="error"
      style={{ width: '100%' }}
    />
    <DatePicker.RangePicker
      status="warning"
      style={{ width: '100%' }}
    />
  </Space>
)

export default App`,qe=`import { DatePicker, Space } from 'antd-packages'
import React from 'react'

const { RangePicker } = DatePicker

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker bordered={false} />
    <DatePicker picker="week" bordered={false} />
    <DatePicker picker="month" bordered={false} />
    <DatePicker picker="year" bordered={false} />
    <RangePicker bordered={false} />
    <RangePicker picker="week" bordered={false} />
    <RangePicker
      picker="month"
      bordered={false}
    />
    <RangePicker picker="year" bordered={false} />
  </Space>
)

export default App`,_e=`import type {
  DatePickerProps,
  RadioChangeEvent
} from 'antd-packages'
import { DatePicker, Radio } from 'antd-packages'
import React, { useState } from 'react'

const { RangePicker } = DatePicker

const App: React.FC = () => {
  const [placement, SetPlacement] =
    useState<DatePickerProps['placement']>(
      'topLeft'
    )

  const placementChange = (
    e: RadioChangeEvent
  ) => {
    SetPlacement(e.target.value)
  }

  return (
    <>
      <Radio.Group
        value={placement}
        onChange={placementChange}
      >
        <Radio.Button value="topLeft">
          topLeft
        </Radio.Button>
        <Radio.Button value="topRight">
          topRight
        </Radio.Button>
        <Radio.Button value="bottomLeft">
          bottomLeft
        </Radio.Button>
        <Radio.Button value="bottomRight">
          bottomRight
        </Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <DatePicker placement={placement} />
      <br />
      <br />
      <RangePicker placement={placement} />
    </>
  )
}

export default App`,nt=`import type { DatePickerProps } from 'antd-packages'
import { DatePicker, Space } from 'antd-packages'
import type { RangePickerProps } from 'antd-packages/es/date-picker'
import type { Moment } from 'moment'
import React, { useState } from 'react'

const { RangePicker } = DatePicker

type RangeValue =
  | [Moment | null, Moment | null]
  | null

const ControlledDatePicker = () => {
  const [mode, setMode] =
    useState<DatePickerProps['mode']>('time')

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setMode('time')
    }
  }

  const handlePanelChange: DatePickerProps['onPanelChange'] =
    (_, newMode) => {
      setMode(newMode)
    }

  return (
    <DatePicker
      mode={mode}
      showTime
      onOpenChange={handleOpenChange}
      onPanelChange={handlePanelChange}
    />
  )
}

const ControlledRangePicker = () => {
  const [mode, setMode] = useState<
    RangePickerProps['mode']
  >(['month', 'month'])
  const [value, setValue] = useState<RangeValue>([
    null,
    null
  ])

  const handlePanelChange: RangePickerProps['onPanelChange'] =
    (newValue, newModes) => {
      setValue(newValue)
      setMode([
        newModes[0] === 'date'
          ? 'month'
          : newModes[0],
        newModes[1] === 'date'
          ? 'month'
          : newModes[1]
      ])
    }

  return (
    <RangePicker
      placeholder={['Start month', 'End month']}
      format="YYYY-MM"
      value={value}
      mode={mode}
      onChange={setValue}
      onPanelChange={handlePanelChange}
    />
  )
}

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <ControlledDatePicker />
    <ControlledRangePicker />
  </Space>
)

export default App`,et=`import { DatePicker, Space } from 'antd-packages'
import type { Moment } from 'moment'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [startValue, setStartValue] =
    useState<Moment | null>(null)
  const [endValue, setEndValue] =
    useState<Moment | null>(null)
  const [endOpen, setEndOpen] = useState(false)

  const disabledStartDate = (
    startDate: Moment
  ) => {
    if (!startDate || !endValue) {
      return false
    }
    return (
      startDate.valueOf() > endValue.valueOf()
    )
  }

  const disabledEndDate = (endDate: Moment) => {
    if (!endDate || !startValue) {
      return false
    }
    return (
      endDate.valueOf() <= startValue.valueOf()
    )
  }

  const handleStartOpenChange = (
    open: boolean
  ) => {
    if (!open) {
      setEndOpen(true)
    }
  }

  const handleEndOpenChange = (open: boolean) => {
    setEndOpen(open)
  }

  return (
    <Space>
      <DatePicker
        disabledDate={disabledStartDate}
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        value={startValue}
        placeholder="Start"
        onChange={setStartValue}
        onOpenChange={handleStartOpenChange}
      />
      <DatePicker
        disabledDate={disabledEndDate}
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        value={endValue}
        placeholder="End"
        onChange={setEndValue}
        open={endOpen}
        onOpenChange={handleEndOpenChange}
      />
    </Space>
  )
}

export default App`,tt=`import { SmileOutlined } from '@ant-design/icons'
import { DatePicker, Space } from 'antd-packages'
import type { Moment } from 'moment'
import React from 'react'

const smileIcon = <SmileOutlined />
const { RangePicker } = DatePicker

type DatePickerValue = Moment | null
type RangePickerValue =
  | [Moment | null, Moment | null]
  | null

const onChange = (
  date: DatePickerValue | RangePickerValue,
  dateString: [string, string] | string
) => {
  console.log(date, dateString)
}

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      suffixIcon={smileIcon}
      onChange={onChange}
    />
    <DatePicker
      suffixIcon={smileIcon}
      onChange={onChange}
      picker="month"
    />
    <RangePicker
      suffixIcon={smileIcon}
      onChange={onChange}
    />
    <DatePicker
      suffixIcon={smileIcon}
      onChange={onChange}
      picker="week"
    />
    <DatePicker
      suffixIcon="ab"
      onChange={onChange}
    />
    <DatePicker
      suffixIcon="ab"
      onChange={onChange}
      picker="month"
    />
    <RangePicker
      suffixIcon="ab"
      onChange={onChange}
    />
    <DatePicker
      suffixIcon="ab"
      onChange={onChange}
      picker="week"
    />
  </Space>
)

export default App`,at=`import { Descriptions } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Descriptions title="User Info">
    <Descriptions.Item label="UserName">
      Zhou Maomao
    </Descriptions.Item>
    <Descriptions.Item label="Telephone">
      1810000000
    </Descriptions.Item>
    <Descriptions.Item label="Live">
      Hangzhou, Zhejiang
    </Descriptions.Item>
    <Descriptions.Item label="Remark">
      empty
    </Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District,
      Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
)

export default App`,rt=`import { Badge, Descriptions } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Descriptions title="User Info" bordered>
    <Descriptions.Item label="Product">
      Cloud Database
    </Descriptions.Item>
    <Descriptions.Item label="Billing Mode">
      Prepaid
    </Descriptions.Item>
    <Descriptions.Item label="Automatic Renewal">
      YES
    </Descriptions.Item>
    <Descriptions.Item label="Order time">
      2018-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item
      label="Usage Time"
      span={2}
    >
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item>
    <Descriptions.Item label="Negotiated Amount">
      $80.00
    </Descriptions.Item>
    <Descriptions.Item label="Discount">
      $20.00
    </Descriptions.Item>
    <Descriptions.Item label="Official Receipts">
      $60.00
    </Descriptions.Item>
    <Descriptions.Item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1<br />
    </Descriptions.Item>
  </Descriptions>
)

export default App`,ot=`import { Badge, Descriptions, Table } from 'antd-packages'
import React from 'react'

const dataSource = [
  {
    key: '1',
    name: '\u80E1\u5F66\u658C',
    age: 32,
    address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7'
  },
  {
    key: '2',
    name: '\u80E1\u5F66\u7956',
    age: 42,
    address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7'
  }
]

const columns = [
  {
    title: '\u59D3\u540D',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '\u5E74\u9F84',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '\u4F4F\u5740',
    dataIndex: 'address',
    key: 'address'
  }
]

const App: React.FC = () => (
  <Descriptions title="User Info" column={2}>
    <Descriptions.Item label="Product">
      Cloud Database
    </Descriptions.Item>
    <Descriptions.Item
      label={
        <div style={{ display: 'flex' }}>
          Billing Mode
        </div>
      }
    >
      Prepaid
    </Descriptions.Item>
    <Descriptions.Item label="Automatic Renewal">
      YES
    </Descriptions.Item>
    <Descriptions.Item label="Order time">
      2018-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item
      label="Usage Time"
      span={2}
    >
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item>
    <Descriptions.Item label="Negotiated Amount">
      $80.00
    </Descriptions.Item>
    <Descriptions.Item label="Discount">
      $20.00
    </Descriptions.Item>
    <Descriptions.Item label="Official Receipts">
      $60.00
    </Descriptions.Item>
    <Descriptions.Item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1<br />
    </Descriptions.Item>
    <Descriptions.Item label="Official Receipts">
      $60.00
    </Descriptions.Item>
    <Descriptions.Item label="Config Info">
      <Table
        size="small"
        pagination={false}
        dataSource={dataSource}
        columns={columns}
      />
    </Descriptions.Item>
  </Descriptions>
)

export default App`,st=`import type { RadioChangeEvent } from 'antd-packages'
import { Button, Descriptions, Radio } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [size, setSize] = useState<
    'default' | 'middle' | 'small'
  >('default')

  const onChange = (e: RadioChangeEvent) => {
    console.log('size checked', e.target.value)
    setSize(e.target.value)
  }

  return (
    <div>
      <Radio.Group
        onChange={onChange}
        value={size}
      >
        <Radio value="default">default</Radio>
        <Radio value="middle">middle</Radio>
        <Radio value="small">small</Radio>
      </Radio.Group>
      <br />
      <br />
      <Descriptions
        bordered
        title="Custom Size"
        size={size}
        extra={
          <Button type="primary">Edit</Button>
        }
      >
        <Descriptions.Item label="Product">
          Cloud Database
        </Descriptions.Item>
        <Descriptions.Item label="Billing">
          Prepaid
        </Descriptions.Item>
        <Descriptions.Item label="time">
          18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="Amount">
          $80.00
        </Descriptions.Item>
        <Descriptions.Item label="Discount">
          $20.00
        </Descriptions.Item>
        <Descriptions.Item label="Official">
          $60.00
        </Descriptions.Item>
        <Descriptions.Item label="Config Info">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1<br />
        </Descriptions.Item>
      </Descriptions>
      <br />
      <br />
      <Descriptions
        title="Custom Size"
        size={size}
        extra={
          <Button type="primary">Edit</Button>
        }
      >
        <Descriptions.Item label="Product">
          Cloud Database
        </Descriptions.Item>
        <Descriptions.Item label="Billing">
          Prepaid
        </Descriptions.Item>
        <Descriptions.Item label="time">
          18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="Amount">
          $80.00
        </Descriptions.Item>
        <Descriptions.Item label="Discount">
          $20.00
        </Descriptions.Item>
        <Descriptions.Item label="Official">
          $60.00
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default App`,it=`import { Descriptions } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <div>
    <Descriptions
      title="Responsive Descriptions"
      bordered
      column={{
        xxl: 4,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1
      }}
    >
      <Descriptions.Item label="Product">
        Cloud Database
      </Descriptions.Item>
      <Descriptions.Item label="Billing">
        Prepaid
      </Descriptions.Item>
      <Descriptions.Item label="time">
        18:00:00
      </Descriptions.Item>
      <Descriptions.Item label="Amount">
        $80.00
      </Descriptions.Item>
      <Descriptions.Item label="Discount">
        $20.00
      </Descriptions.Item>
      <Descriptions.Item label="Official">
        $60.00
      </Descriptions.Item>
      <Descriptions.Item label="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
      </Descriptions.Item>
    </Descriptions>
  </div>
)

export default App`,lt=`import { Descriptions } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Descriptions
    title="User Info"
    layout="vertical"
  >
    <Descriptions.Item label="UserName">
      Zhou Maomao
    </Descriptions.Item>
    <Descriptions.Item label="Telephone">
      1810000000
    </Descriptions.Item>
    <Descriptions.Item label="Live">
      Hangzhou, Zhejiang
    </Descriptions.Item>
    <Descriptions.Item label="Address" span={2}>
      No. 18, Wantang Road, Xihu District,
      Hangzhou, Zhejiang, China
    </Descriptions.Item>
    <Descriptions.Item label="Remark">
      empty
    </Descriptions.Item>
  </Descriptions>
)

export default App`,dt=`import { Badge, Descriptions } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Descriptions
    title="User Info"
    layout="vertical"
    bordered
  >
    <Descriptions.Item label="Product">
      Cloud Database
    </Descriptions.Item>
    <Descriptions.Item label="Billing Mode">
      Prepaid
    </Descriptions.Item>
    <Descriptions.Item label="Automatic Renewal">
      YES
    </Descriptions.Item>
    <Descriptions.Item label="Order time">
      2018-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item
      label="Usage Time"
      span={2}
    >
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item>
    <Descriptions.Item label="Negotiated Amount">
      $80.00
    </Descriptions.Item>
    <Descriptions.Item label="Discount">
      $20.00
    </Descriptions.Item>
    <Descriptions.Item label="Official Receipts">
      $60.00
    </Descriptions.Item>
    <Descriptions.Item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1<br />
    </Descriptions.Item>
  </Descriptions>
)

export default App`,ct=`import {
  Descriptions,
  Divider,
  Radio,
  Switch
} from 'antd-packages'
import React, { useState } from 'react'

const labelStyle: React.CSSProperties = {
  background: 'red'
}
const contentStyle: React.CSSProperties = {
  background: 'green'
}

type LayoutType =
  | 'horizontal'
  | 'vertical'
  | undefined

const App: React.FC = () => {
  const [border, setBorder] = useState(true)
  const [layout, setLayout] = useState(
    'horizontal' as LayoutType
  )

  return (
    <>
      <Switch
        checkedChildren="Border"
        unCheckedChildren="No Border"
        checked={border}
        onChange={(e) => setBorder(e)}
      />
      <Divider />
      <Radio.Group
        onChange={(e) =>
          setLayout(e.target.value)
        }
        value={layout}
      >
        <Radio value="horizontal">
          horizontal
        </Radio>
        <Radio value="vertical">vertical</Radio>
      </Radio.Group>
      <Divider />
      <Descriptions
        title="User Info"
        bordered={border}
        layout={layout}
      >
        <Descriptions.Item
          label="Product"
          labelStyle={labelStyle}
          contentStyle={contentStyle}
        >
          Cloud Database
        </Descriptions.Item>
        <Descriptions.Item label="Billing Mode">
          Prepaid
        </Descriptions.Item>
        <Descriptions.Item label="Automatic Renewal">
          YES
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <Descriptions
        title="Root style"
        labelStyle={labelStyle}
        contentStyle={contentStyle}
        bordered={border}
        layout={layout}
      >
        <Descriptions.Item label="Product">
          Cloud Database
        </Descriptions.Item>
        <Descriptions.Item label="Billing Mode">
          Prepaid
        </Descriptions.Item>
        <Descriptions.Item
          label="Automatic Renewal"
          labelStyle={{ color: 'orange' }}
          contentStyle={{ color: 'blue' }}
        >
          YES
        </Descriptions.Item>
      </Descriptions>
    </>
  )
}

export default App`,pt=`import { Divider } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
    <Divider dashed />
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
  </>
)

export default App`,ut=`import { Divider } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
    <Divider>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
    <Divider orientation="left">
      Left Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
    <Divider orientation="right">
      Right Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
    <Divider
      orientation="left"
      orientationMargin="0"
    >
      Left Text with 0 orientationMargin
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
    <Divider
      orientation="right"
      orientationMargin={50}
    >
      Right Text with 50px orientationMargin
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
  </>
)

export default App`,mt=`import { Divider } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
    <Divider plain>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
    <Divider orientation="left" plain>
      Left Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
    <Divider orientation="right" plain>
      Right Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
  </>
)

export default App`,gt=`import { Divider } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    Text
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" />
    <a href="#">Link</a>
  </>
)

export default App`,ft=`import { Divider } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Divider
      style={{
        borderWidth: 2,
        borderColor: '#7cb305'
      }}
    />
    <Divider
      style={{ borderColor: '#7cb305' }}
      dashed
    />
    <Divider
      style={{ borderColor: '#7cb305' }}
      dashed
    >
      Text
    </Divider>
    <Divider
      type="vertical"
      style={{
        height: 60,
        borderColor: '#7cb305'
      }}
    />
    <Divider
      type="vertical"
      style={{
        height: 60,
        borderColor: '#7cb305'
      }}
      dashed
    />
  </>
)

export default App`,vt=`import { Button, Drawer } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default App`,ht=`import type {
  DrawerProps,
  RadioChangeEvent
} from 'antd-packages'
import {
  Button,
  Drawer,
  Radio,
  Space
} from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [placement, setPlacement] =
    useState<DrawerProps['placement']>('left')

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value)
  }

  return (
    <>
      <Space>
        <Radio.Group
          value={placement}
          onChange={onChange}
        >
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button
          type="primary"
          onClick={showDrawer}
        >
          Open
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default App`,yt=`import {
  Button,
  Drawer,
  Radio,
  Space
} from 'antd-packages'
import type { DrawerProps } from 'antd-packages/es/drawer'
import type { RadioChangeEvent } from 'antd-packages/es/radio'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [placement, setPlacement] =
    useState<DrawerProps['placement']>('right')

  const showDrawer = () => {
    setVisible(true)
  }

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <Space>
        <Radio.Group
          value={placement}
          onChange={onChange}
        >
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button
          type="primary"
          onClick={showDrawer}
        >
          Open
        </Button>
      </Space>
      <Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={onClose}
            >
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default App`,Ct=`import { Button, Drawer } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <div className="site-drawer-render-in-current-wrapper">
      Render in this
      <div style={{ marginTop: 16 }}>
        <Button
          type="primary"
          onClick={showDrawer}
        >
          Open
        </Button>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        getContainer={false}
        style={{ position: 'absolute' }}
      >
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
}

export default App`,wt=`import { PlusOutlined } from '@ant-design/icons'
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space
} from 'antd-packages'
import React, { useState } from 'react'

const { Option } = Select

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <Button
        type="primary"
        onClick={showDrawer}
        icon={<PlusOutlined />}
      >
        New account
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={onClose}
              type="primary"
            >
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message:
                      'Please enter user name'
                  }
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[
                  {
                    required: true,
                    message: 'Please enter url'
                  }
                ]}
              >
                <Input
                  style={{ width: '100%' }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[
                  {
                    required: true,
                    message:
                      'Please select an owner'
                  }
                ]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="xiao">
                    Xiaoxiao Fu
                  </Option>
                  <Option value="mao">
                    Maomao Zhou
                  </Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[
                  {
                    required: true,
                    message:
                      'Please choose the type'
                  }
                ]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">
                    Private
                  </Option>
                  <Option value="public">
                    Public
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  {
                    required: true,
                    message:
                      'Please choose the approver'
                  }
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">
                    Jack Ma
                  </Option>
                  <Option value="tom">
                    Tom Liu
                  </Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  {
                    required: true,
                    message:
                      'Please choose the dateTime'
                  }
                ]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={(trigger) =>
                    trigger.parentElement!
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message:
                      'please enter url description'
                  }
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  )
}

export default App`,kt=`import {
  Avatar,
  Col,
  Divider,
  Drawer,
  List,
  Row
} from 'antd-packages'
import React, { useState } from 'react'

interface DescriptionItemProps {
  title: string
  content: React.ReactNode
}

const DescriptionItem = ({
  title,
  content
}: DescriptionItemProps) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">
      {title}:
    </p>
    {content}
  </div>
)

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <List
        dataSource={[
          {
            id: 1,
            name: 'Lily'
          },
          {
            id: 2,
            name: 'Lily'
          }
        ]}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <a
                onClick={showDrawer}
                key={\`a-\${item.id}\`}
              >
                View Profile
              </a>
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
              }
              title={
                <a href="https://ant.design/index-cn">
                  {item.name}
                </a>
              }
              description="Progresser XTech"
            />
          </List.Item>
        )}
      />
      <Drawer
        width={640}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p
          className="site-description-item-profile-p"
          style={{ marginBottom: 24 }}
        >
          User Profile
        </p>
        <p className="site-description-item-profile-p">
          Personal
        </p>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Full Name"
              content="Lily"
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Account"
              content="AntDesign@example.com"
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="City"
              content="HangZhou"
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Country"
              content="China\u{1F1E8}\u{1F1F3}"
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Birthday"
              content="February 2,1900"
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Website"
              content="-"
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Message"
              content="Make things as simple as possible but no simpler."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">
          Company
        </p>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Position"
              content="Programmer"
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Responsibilities"
              content="Coding"
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Department"
              content="XTech"
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Supervisor"
              content={<a>Lin</a>}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Skills"
              content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">
          Contacts
        </p>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Email"
              content="AntDesign@example.com"
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Phone Number"
              content="+86 181 0000 0000"
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Github"
              content={
                <a href="http://github.com/ant-design/ant-design/">
                  github.com/ant-design/ant-design/
                </a>
              }
            />
          </Col>
        </Row>
      </Drawer>
    </>
  )
}

export default App`,bt=`import { Button, Drawer } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [childrenDrawer, setChildrenDrawer] =
    useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const showChildrenDrawer = () => {
    setChildrenDrawer(true)
  }

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false)
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open drawer
      </Button>
      <Drawer
        title="Multi-level drawer"
        width={520}
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Button
          type="primary"
          onClick={showChildrenDrawer}
        >
          Two-level drawer
        </Button>
        <Drawer
          title="Two-level Drawer"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          visible={childrenDrawer}
        >
          This is two-level drawer
        </Drawer>
      </Drawer>
    </>
  )
}

export default App`,St=`import { Button, Drawer, Space } from 'antd-packages'
import type { DrawerProps } from 'antd-packages/es/drawer'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [size, setSize] =
    useState<DrawerProps['size']>()

  const showDefaultDrawer = () => {
    setSize('default')
    setVisible(true)
  }

  const showLargeDrawer = () => {
    setSize('large')
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={showDefaultDrawer}
        >
          Open Default Size (378px)
        </Button>
        <Button
          type="primary"
          onClick={showLargeDrawer}
        >
          Open Large Size (736px)
        </Button>
      </Space>
      <Drawer
        title={\`\${size} Drawer\`}
        placement="right"
        size={size}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={onClose}
            >
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default App`,Pt=`import {
  Button,
  ConfigProvider,
  Drawer
} from 'antd-packages'
import React, { useRef, useState } from 'react'

const App: React.FC = () => {
  const domRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <ConfigProvider
      getPopupContainer={() => domRef.current!}
    >
      <div
        ref={domRef}
        className="site-drawer-render-in-current-wrapper"
      >
        <Button
          type="primary"
          onClick={showDrawer}
        >
          Open
        </Button>
        <Drawer
          style={{ position: 'absolute' }}
          title="ConfigProvider"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </ConfigProvider>
  )
}

export default App`,Rt=`import { Button, Drawer } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Drawer without mask"
        placement="right"
        mask={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default App`,Tt=`import {
  DownOutlined,
  SmileOutlined
} from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd-packages'
import React from 'react'

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        )
      },
      {
        key: '2',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true
      },
      {
        key: '3',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item (disabled)
          </a>
        ),
        disabled: true
      },
      {
        key: '4',
        danger: true,
        label: 'a danger item'
      }
    ]}
  />
)

const App: React.FC = () => (
  <Dropdown overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)

export default App`,xt=`import {
  Button,
  Dropdown,
  Menu,
  Space
} from 'antd-packages'
import React from 'react'

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        )
      },
      {
        key: '2',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        )
      },
      {
        key: '3',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        )
      }
    ]}
  />
)

const App: React.FC = () => (
  <Space direction="vertical">
    <Space wrap>
      <Dropdown
        overlay={menu}
        placement="bottomLeft"
      >
        <Button>bottomLeft</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="bottom">
        <Button>bottom</Button>
      </Dropdown>
      <Dropdown
        overlay={menu}
        placement="bottomRight"
      >
        <Button>bottomRight</Button>
      </Dropdown>
    </Space>
    <Space wrap>
      <Dropdown
        overlay={menu}
        placement="topLeft"
      >
        <Button>topLeft</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="top">
        <Button>top</Button>
      </Dropdown>
      <Dropdown
        overlay={menu}
        placement="topRight"
      >
        <Button>topRight</Button>
      </Dropdown>
    </Space>
  </Space>
)

export default App`,It=`import { Button, Dropdown, Menu } from 'antd-packages'
import React from 'react'

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        )
      },
      {
        key: '2',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        )
      },
      {
        key: '3',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        )
      }
    ]}
  />
)

const App: React.FC = () => (
  <>
    <Dropdown
      overlay={menu}
      placement="bottomLeft"
      arrow
    >
      <Button>bottomLeft</Button>
    </Dropdown>
    <Dropdown
      overlay={menu}
      placement="bottom"
      arrow
    >
      <Button>bottom</Button>
    </Dropdown>
    <Dropdown
      overlay={menu}
      placement="bottomRight"
      arrow
    >
      <Button>bottomRight</Button>
    </Dropdown>
    <br />
    <Dropdown
      overlay={menu}
      placement="topLeft"
      arrow
    >
      <Button>topLeft</Button>
    </Dropdown>
    <Dropdown
      overlay={menu}
      placement="top"
      arrow
    >
      <Button>top</Button>
    </Dropdown>
    <Dropdown
      overlay={menu}
      placement="topRight"
      arrow
    >
      <Button>topRight</Button>
    </Dropdown>
  </>
)

export default App`,At=`import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd-packages'
import React from 'react'

const menu = (
  <Menu
    items={[
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
        key: '0'
      },
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        ),
        key: '1'
      },
      {
        type: 'divider'
      },
      {
        label: '3rd menu item\uFF08disabled\uFF09',
        key: '3',
        disabled: true
      }
    ]}
  />
)

const App: React.FC = () => (
  <Dropdown overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)

export default App`,Bt=`import { Button, Dropdown, Menu } from 'antd-packages'
import React from 'react'

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        )
      },
      {
        key: '2',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        )
      },
      {
        key: '3',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        )
      }
    ]}
  />
)

const App: React.FC = () => (
  <>
    <Dropdown
      overlay={menu}
      placement="bottomLeft"
      arrow={{ pointAtCenter: true }}
    >
      <Button>bottomLeft</Button>
    </Dropdown>
    <Dropdown
      overlay={menu}
      placement="bottom"
      arrow={{ pointAtCenter: true }}
    >
      <Button>bottom</Button>
    </Dropdown>
    <Dropdown
      overlay={menu}
      placement="bottomRight"
      arrow={{ pointAtCenter: true }}
    >
      <Button>bottomRight</Button>
    </Dropdown>
    <br />
    <Dropdown
      overlay={menu}
      placement="topLeft"
      arrow={{ pointAtCenter: true }}
    >
      <Button>topLeft</Button>
    </Dropdown>
    <Dropdown
      overlay={menu}
      placement="top"
      arrow={{ pointAtCenter: true }}
    >
      <Button>top</Button>
    </Dropdown>
    <Dropdown
      overlay={menu}
      placement="topRight"
      arrow={{ pointAtCenter: true }}
    >
      <Button>topRight</Button>
    </Dropdown>
  </>
)

export default App`,Dt=`import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd-packages'
import React from 'react'

const menu = (
  <Menu
    items={[
      {
        label: (
          <a href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
        key: '0'
      },
      {
        label: (
          <a href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
        key: '1'
      },
      {
        type: 'divider'
      },
      {
        label: '3rd menu item',
        key: '3'
      }
    ]}
  />
)

const App: React.FC = () => (
  <Dropdown overlay={menu} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Click me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)

export default App`,Ft=`import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd-packages'
import {
  Dropdown,
  Menu,
  message,
  Space
} from 'antd-packages'
import React from 'react'

const onClick: MenuProps['onClick'] = ({
  key
}) => {
  message.info(\`Click on item \${key}\`)
}

const menu = (
  <Menu
    onClick={onClick}
    items={[
      {
        label: '1st menu item',
        key: '1'
      },
      {
        label: '2nd menu item',
        key: '2'
      },
      {
        label: '3rd menu item',
        key: '3'
      }
    ]}
  />
)

const App: React.FC = () => (
  <Dropdown overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me, Click menu item
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)

export default App`,Ot=`import {
  DownOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd-packages'
import {
  Button,
  Dropdown,
  Menu,
  message,
  Space,
  Tooltip
} from 'antd-packages'
import React from 'react'

const handleButtonClick = (
  e: React.MouseEvent<HTMLButtonElement>
) => {
  message.info('Click on left button.')
  console.log('click left button', e)
}

const handleMenuClick: MenuProps['onClick'] = (
  e
) => {
  message.info('Click on menu item.')
  console.log('click', e)
}

const menu = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: '1st menu item',
        key: '1',
        icon: <UserOutlined />
      },
      {
        label: '2nd menu item',
        key: '2',
        icon: <UserOutlined />
      },
      {
        label: '3rd menu item',
        key: '3',
        icon: <UserOutlined />
      }
    ]}
  />
)

const App: React.FC = () => (
  <Space wrap>
    <Dropdown.Button
      onClick={handleButtonClick}
      overlay={menu}
    >
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button
      overlay={menu}
      placement="bottom"
      icon={<UserOutlined />}
    >
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button
      onClick={handleButtonClick}
      overlay={menu}
      disabled
    >
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button
      overlay={menu}
      buttonsRender={([
        leftButton,
        rightButton
      ]) => [
        <Tooltip title="tooltip" key="leftButton">
          {leftButton}
        </Tooltip>,
        React.cloneElement(
          rightButton as React.ReactElement<
            any,
            string
          >,
          { loading: true }
        )
      ]}
    >
      With Tooltip
    </Dropdown.Button>
    <Dropdown overlay={menu}>
      <Button>
        <Space>
          Button
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
)

export default App`,Lt=`import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd-packages'
import React from 'react'

const menu = (
  <Menu
    items={[
      {
        key: '1',
        type: 'group',
        label: 'Group title',
        children: [
          {
            key: '1-1',
            label: '1st menu item'
          },
          {
            key: '1-2',
            label: '2nd menu item'
          }
        ]
      },
      {
        key: '2',
        label: 'sub menu',
        children: [
          {
            key: '2-1',
            label: '3rd menu item'
          },
          {
            key: '2-2',
            label: '4th menu item'
          }
        ]
      },
      {
        key: '3',
        label: 'disabled sub menu',
        disabled: true,
        children: [
          {
            key: '3-1',
            label: '5d menu item'
          },
          {
            key: '3-2',
            label: '6th menu item'
          }
        ]
      }
    ]}
  />
)

const App: React.FC = () => (
  <Dropdown overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Cascading menu
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)

export default App`,Nt=`import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd-packages'
import { Dropdown, Menu, Space } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const handleMenuClick: MenuProps['onClick'] = (
    e
  ) => {
    if (e.key === '3') {
      setVisible(false)
    }
  }

  const handleVisibleChange = (flag: boolean) => {
    setVisible(flag)
  }

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label:
            'Clicking me will not close the menu.',
          key: '1'
        },
        {
          label:
            'Clicking me will not close the menu also.',
          key: '2'
        },
        {
          label:
            'Clicking me will close the menu.',
          key: '3'
        }
      ]}
    />
  )

  return (
    <Dropdown
      overlay={menu}
      onVisibleChange={handleVisibleChange}
      visible={visible}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  )
}

export default App`,Mt=`import { Dropdown, Menu } from 'antd-packages'
import React from 'react'

const menu = (
  <Menu
    items={[
      {
        label: '1st menu item',
        key: '1'
      },
      {
        label: '2nd menu item',
        key: '2'
      },
      {
        label: '3rd menu item',
        key: '3'
      }
    ]}
  />
)

const App: React.FC = () => (
  <Dropdown
    overlay={menu}
    trigger={['contextMenu']}
  >
    <div
      className="site-dropdown-context-menu"
      style={{
        textAlign: 'center',
        height: 200,
        lineHeight: '200px'
      }}
    >
      Right Click on here
    </div>
  </Dropdown>
)

export default App`,zt=`import { DownOutlined } from '@ant-design/icons'
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

export default App`,Et=`import { DownOutlined } from '@ant-design/icons'
import {
  Dropdown,
  Menu,
  Space,
  Typography
} from 'antd-packages'
import React from 'react'

const menu = (
  <Menu
    selectable
    defaultSelectedKeys={['3']}
    items={[
      {
        key: '1',
        label: 'Item 1'
      },
      {
        key: '2',
        label: 'Item 2'
      },
      {
        key: '3',
        label: 'Item 3'
      }
    ]}
  />
)

const App: React.FC = () => (
  <Dropdown overlay={menu}>
    <Typography.Link>
      <Space>
        Selectable
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
)

export default App`,$t=`import {
  AppstoreOutlined,
  DownOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd-packages'
import { Dropdown, Menu, Space } from 'antd-packages'
import React from 'react'

type MenuItem =
  Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuItem[] = [
  getItem(
    'Item Group',
    'group',
    null,
    [
      getItem('Option 0', '01'),
      getItem('Option 0', '02')
    ],
    'group'
  ),
  getItem(
    'Navigation One',
    'sub1',
    <MailOutlined />,
    [
      getItem(
        'Item 1',
        'g1',
        null,
        [
          getItem('Option 1', '1'),
          getItem('Option 2', '2')
        ],
        'group'
      ),
      getItem(
        'Item 2',
        'g2',
        null,
        [
          getItem('Option 3', '3'),
          getItem('Option 4', '4')
        ],
        'group'
      )
    ]
  ),
  getItem(
    'Navigation Two',
    'sub2',
    <AppstoreOutlined />,
    [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [
        getItem('Option 7', '7'),
        getItem('Option 8', '8')
      ])
    ]
  ),
  getItem(
    'Navigation Three',
    'sub4',
    <SettingOutlined />,
    [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12')
    ]
  ),
  // Not crash
  null as any
]

const menu = (
  <Menu
    selectedKeys={['1']}
    openKeys={['sub1']}
    items={items}
  />
)

const App: React.FC = () => (
  <Dropdown overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover to check menu style
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)

export default App`,Zt=`import { Empty } from 'antd-packages'

const App: React.FC = () => <Empty />

export default App`,Vt=`import { Empty } from 'antd-packages'

const App: React.FC = () => (
  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
)

export default App`,Kt=`import { Button, Empty } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60
    }}
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
)

export default App`,Ut=`import { SmileOutlined } from '@ant-design/icons'
import {
  Cascader,
  ConfigProvider,
  Divider,
  List,
  Select,
  Switch,
  Table,
  Transfer,
  TreeSelect
} from 'antd-packages'
import React, { useState } from 'react'

const customizeRenderEmpty = () => (
  <div style={{ textAlign: 'center' }}>
    <SmileOutlined style={{ fontSize: 20 }} />
    <p>Data Not Found</p>
  </div>
)

const style = { width: 200 }

const App: React.FC = () => {
  const [customize, setCustomize] =
    useState(false)

  return (
    <div>
      <Switch
        unCheckedChildren="default"
        checkedChildren="customize"
        checked={customize}
        onChange={(val) => {
          setCustomize(val)
        }}
      />

      <Divider />

      <ConfigProvider
        renderEmpty={
          customize
            ? customizeRenderEmpty
            : undefined
        }
      >
        <div className="config-provider">
          <h4>Select</h4>
          <Select style={style} />

          <h4>TreeSelect</h4>
          <TreeSelect
            style={style}
            treeData={[]}
          />

          <h4>Cascader</h4>
          <Cascader
            style={style}
            options={[]}
            showSearch
          />

          <h4>Transfer</h4>
          <Transfer />

          <h4>Table</h4>
          <Table
            style={{ marginTop: 8 }}
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
              },
              {
                title: 'Age',
                dataIndex: 'age',
                key: 'age'
              }
            ]}
          />

          <h4>List</h4>
          <List />
        </div>
      </ConfigProvider>
    </div>
  )
}

export default App`,jt=`import { Empty } from 'antd-packages'

const App: React.FC = () => (
  <Empty description={false} />
)

export default App`,Ht=`import {
  Button,
  Checkbox,
  Form,
  Input
} from 'antd-packages'
import React from 'react'

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App`,Gt=`import { Button, Form, Input, Select } from 'antd-packages'
import React from 'react'

const { Option } = Select

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const App: React.FC = () => {
  const [form] = Form.useForm()

  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' })
        return
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' })
        return
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' })
    }
  }

  const onFinish = (values: any) => {
    console.log(values)
  }

  const onReset = () => {
    form.resetFields()
  }

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male'
    })
  }

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
    >
      <Form.Item
        name="note"
        label="Note"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true }]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(
          prevValues,
          currentValues
        ) =>
          prevValues.gender !==
          currentValues.gender
        }
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button
          htmlType="button"
          onClick={onReset}
        >
          Reset
        </Button>
        <Button
          type="link"
          htmlType="button"
          onClick={onFill}
        >
          Fill form
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App`,Jt=`import { Button, Form, Input, Select } from 'antd-packages'
import type { FormInstance } from 'antd-packages/es/form'
import React from 'react'

const { Option } = Select

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

class App extends React.Component {
  formRef = React.createRef<FormInstance>()

  onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        this.formRef.current!.setFieldsValue({
          note: 'Hi, man!'
        })
        return
      case 'female':
        this.formRef.current!.setFieldsValue({
          note: 'Hi, lady!'
        })
        return
      case 'other':
        this.formRef.current!.setFieldsValue({
          note: 'Hi there!'
        })
    }
  }

  onFinish = (values: any) => {
    console.log(values)
  }

  onReset = () => {
    this.formRef.current!.resetFields()
  }

  onFill = () => {
    this.formRef.current!.setFieldsValue({
      note: 'Hello world!',
      gender: 'male'
    })
  }

  render() {
    return (
      <Form
        {...layout}
        ref={this.formRef}
        name="control-ref"
        onFinish={this.onFinish}
      >
        <Form.Item
          name="note"
          label="Note"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Select a option and change input text above"
            onChange={this.onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(
            prevValues,
            currentValues
          ) =>
            prevValues.gender !==
            currentValues.gender
          }
        >
          {({ getFieldValue }) =>
            getFieldValue('gender') ===
              'other' ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
          <Button
            htmlType="button"
            onClick={this.onReset}
          >
            Reset
          </Button>
          <Button
            type="link"
            htmlType="button"
            onClick={this.onFill}
          >
            Fill form
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default App`,Yt=`import { Button, Form, Input, Radio } from 'antd-packages'
import React, { useState } from 'react'

type LayoutType = Parameters<
  typeof Form
>[0]['layout']

const App: React.FC = () => {
  const [form] = Form.useForm()
  const [formLayout, setFormLayout] =
    useState<LayoutType>('horizontal')

  const onFormLayoutChange = ({
    layout
  }: {
    layout: LayoutType
  }) => {
    setFormLayout(layout)
  }

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 }
        }
      : null

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: { span: 14, offset: 4 }
        }
      : null

  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
    >
      <Form.Item
        label="Form Layout"
        name="layout"
      >
        <Radio.Group value={formLayout}>
          <Radio.Button value="horizontal">
            Horizontal
          </Radio.Button>
          <Radio.Button value="vertical">
            Vertical
          </Radio.Button>
          <Radio.Button value="inline">
            Inline
          </Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  )
}

export default App`,Wt=`import React, { useState } from 'react'
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox
} from 'antd-packages'

const { RangePicker } = DatePicker
const { TextArea } = Input

const FormDisabledDemo = () => {
  const [
    componentDisabled,
    setComponentDisabled
  ] = useState<boolean>(true)
  const onFormLayoutChange = ({
    disabled
  }: {
    disabled: boolean
  }) => {
    setComponentDisabled(disabled)
  }

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{
        disabled: componentDisabled
      }}
      onValuesChange={onFormLayoutChange}
      disabled={componentDisabled}
    >
      <Form.Item
        label="Form disabled"
        name="disabled"
        valuePropName="checked"
      >
        <Checkbox>disabled</Checkbox>
      </Form.Item>
      <Form.Item label="Radio">
        <Radio.Group>
          <Radio value="apple"> Apple </Radio>
          <Radio value="pear"> Pear </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="demo">
            Demo
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: 'Light',
              value: 'light',
              children: [
                {
                  title: 'Bamboo',
                  value: 'bamboo'
                }
              ]
            }
          ]}
        />
      </Form.Item>
      <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou'
                }
              ]
            }
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="RangePicker">
        <RangePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="TextArea">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item
        label="Switch"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>
  )
}

export default () => <FormDisabledDemo />`,Qt=`import { InfoCircleOutlined } from '@ant-design/icons'
import { Button, Form, Input, Radio } from 'antd-packages'
import React, { useState } from 'react'

type RequiredMark = boolean | 'optional'

const App: React.FC = () => {
  const [form] = Form.useForm()
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>('optional')

  const onRequiredTypeChange = ({
    requiredMarkValue
  }: {
    requiredMarkValue: RequiredMark
  }) => {
    setRequiredMarkType(requiredMarkValue)
  }

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        requiredMarkValue: requiredMark
      }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
    >
      <Form.Item
        label="Required Mark"
        name="requiredMarkValue"
      >
        <Radio.Group>
          <Radio.Button value="optional">
            Optional
          </Radio.Button>
          <Radio.Button value>
            Required
          </Radio.Button>
          <Radio.Button value={false}>
            Hidden
          </Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Field A"
        required
        tooltip="This is a required field"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Field B"
        tooltip={{
          title: 'Tooltip with customize icon',
          icon: <InfoCircleOutlined />
        }}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  )
}

export default App`,Xt=`import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect
} from 'antd-packages'
import React, { useState } from 'react'

type SizeType = Parameters<typeof Form>[0]['size']

const App: React.FC = () => {
  const [componentSize, setComponentSize] =
    useState<SizeType | 'default'>('default')

  const onFormLayoutChange = ({
    size
  }: {
    size: SizeType
  }) => {
    setComponentSize(size)
  }

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">
            Small
          </Radio.Button>
          <Radio.Button value="default">
            Default
          </Radio.Button>
          <Radio.Button value="large">
            Large
          </Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="demo">
            Demo
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: 'Light',
              value: 'light',
              children: [
                {
                  title: 'Bamboo',
                  value: 'bamboo'
                }
              ]
            }
          ]}
        />
      </Form.Item>
      <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou'
                }
              ]
            }
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Switch"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>
  )
}

export default App`,qt=`import { Button, Form, Input } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Form
    name="wrap"
    labelCol={{ flex: '110px' }}
    labelAlign="left"
    labelWrap
    wrapperCol={{ flex: 1 }}
    colon={false}
  >
    <Form.Item
      label="\u6B63\u5E38\u6807\u7B7E\u6587\u6848"
      name="username"
      rules={[{ required: true }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="\u8D85\u957F\u6807\u7B7E\u6587\u6848\u8D85\u957F\u6807\u7B7E\u6587\u6848"
      name="password"
      rules={[{ required: true }]}
    >
      <Input />
    </Form.Item>

    <Form.Item label=" ">
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
)

export default App`,_t=`/**
 * title: \u975E\u963B\u585E\u6821\u9A8C
 * desc: \`rule\`\u6DFB\u52A0\`warningOnly\`\u540E\u6821\u9A8C\u4E0D\u518D\u963B\u585E\u8868\u5355\u63D0\u4EA4\u3002
 */

import {
  Button,
  Form,
  Input,
  message,
  Space
} from 'antd-packages'
import React from 'react'

const App: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish = () => {
    message.success('Submit success!')
  }

  const onFinishFailed = () => {
    message.error('Submit failed!')
  }

  const onFill = () => {
    form.setFieldsValue({
      url: 'https://taobao.com/'
    })
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="url"
        label="URL"
        rules={[
          { required: true },
          { type: 'url', warningOnly: true },
          { type: 'string', min: 6 }
        ]}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
          <Button
            htmlType="button"
            onClick={onFill}
          >
            Fill
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default App`,na=`/**
 * title: \u5B57\u6BB5\u76D1\u542C Hooks
 * desc: \`useWatch\`\u5141\u8BB8\u4F60\u76D1\u542C\u5B57\u6BB5\u53D8\u5316\uFF0C\u540C\u65F6\u4EC5\u5F53\u6539\u5B57\u6BB5\u53D8\u5316\u65F6\u91CD\u65B0\u6E32\u67D3\u3002API\u6587\u6863\u8BF7[\u67E5\u9605\u6B64\u5904](#Form.useWatch)\u3002
 */

import React from 'react'
import {
  Form,
  Input,
  InputNumber,
  Typography
} from 'antd-packages'

const Demo = () => {
  const [form] = Form.useForm<{
    name: string
    age: number
  }>()
  const nameValue = Form.useWatch('name', form)

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="Name (Watch to trigger rerender)"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="Age (Not Watch)"
        >
          <InputNumber />
        </Form.Item>
      </Form>

      <Typography>
        <pre>Name Value: {nameValue}</pre>
      </Typography>
    </>
  )
}

export default Demo`,ea=`import {
  MinusCircleOutlined,
  PlusOutlined
} from '@ant-design/icons'
import { Button, Form, Input } from 'antd-packages'
import React from 'react'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
}
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 }
  }
}

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(
      'Received values of form:',
      values
    )
  }

  return (
    <Form
      name="dynamic_form_item"
      {...formItemLayoutWithOutLabel}
      onFinish={onFinish}
    >
      <Form.List
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 2) {
                return Promise.reject(
                  new Error(
                    'At least 2 passengers'
                  )
                )
              }
            }
          }
        ]}
      >
        {(
          fields,
          { add, remove },
          { errors }
        ) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0
                  ? formItemLayout
                  : formItemLayoutWithOutLabel)}
                label={
                  index === 0 ? 'Passengers' : ''
                }
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={[
                    'onChange',
                    'onBlur'
                  ]}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message:
                        "Please input passenger's name or delete this field."
                    }
                  ]}
                  noStyle
                >
                  <Input
                    placeholder="passenger name"
                    style={{ width: '60%' }}
                  />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() =>
                      remove(field.name)
                    }
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: '60%' }}
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
              <Button
                type="dashed"
                onClick={() => {
                  add('The head item', 0)
                }}
                style={{
                  width: '60%',
                  marginTop: '20px'
                }}
                icon={<PlusOutlined />}
              >
                Add field at head
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App`,ta=`import {
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
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(
              ({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{
                    display: 'flex',
                    marginBottom: 8
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, 'first']}
                    rules={[
                      {
                        required: true,
                        message:
                          'Missing first name'
                      }
                    ]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'last']}
                    rules={[
                      {
                        required: true,
                        message:
                          'Missing last name'
                      }
                    ]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={() => remove(name)}
                  />
                </Space>
              )
            )}
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
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App`,aa=`import {
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

export default App`,ra=`import {
  MinusCircleOutlined,
  PlusOutlined
} from '@ant-design/icons'
import {
  Button,
  Form,
  Input,
  Select,
  Space
} from 'antd-packages'
import React from 'react'

const { Option } = Select

const areas = [
  { label: 'Beijing', value: 'Beijing' },
  { label: 'Shanghai', value: 'Shanghai' }
]

const sights = {
  Beijing: ['Tiananmen', 'Great Wall'],
  Shanghai: ['Oriental Pearl', 'The Bund']
}

type SightsKeys = keyof typeof sights

const App: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log(
      'Received values of form:',
      values
    )
  }

  const handleChange = () => {
    form.setFieldsValue({ sights: [] })
  }

  return (
    <Form
      form={form}
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="area"
        label="Area"
        rules={[
          {
            required: true,
            message: 'Missing area'
          }
        ]}
      >
        <Select
          options={areas}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.List name="sights">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space
                key={field.key}
                align="baseline"
              >
                <Form.Item
                  noStyle
                  shouldUpdate={(
                    prevValues,
                    curValues
                  ) =>
                    prevValues.area !==
                      curValues.area ||
                    prevValues.sights !==
                      curValues.sights
                  }
                >
                  {() => (
                    <Form.Item
                      {...field}
                      label="Sight"
                      name={[field.name, 'sight']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing sight'
                        }
                      ]}
                    >
                      <Select
                        disabled={
                          !form.getFieldValue(
                            'area'
                          )
                        }
                        style={{ width: 130 }}
                      >
                        {(
                          sights[
                            form.getFieldValue(
                              'area'
                            ) as SightsKeys
                          ] || []
                        ).map((item) => (
                          <Option
                            key={item}
                            value={item}
                          >
                            {item}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  )}
                </Form.Item>
                <Form.Item
                  {...field}
                  label="Price"
                  name={[field.name, 'price']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing price'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>

                <MinusCircleOutlined
                  onClick={() =>
                    remove(field.name)
                  }
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
                Add sights
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App`,oa=`/**
 * title: \u5D4C\u5957\u7ED3\u6784\u4E0E\u6821\u9A8C\u4FE1\u606F
 * desc: \`name\`\u5C5E\u6027\u652F\u6301\u5D4C\u5957\u6570\u636E\u7ED3\u6784\u3002\u901A\u8FC7\`validateMessages\`\u6216\`message\`\u81EA\u5B9A\u4E49\u6821\u9A8C\u4FE1\u606F\u6A21\u677F\uFF0C\u6A21\u677F\u5185\u5BB9\u53EF\u53C2\u8003[\u6B64\u5904](https://github.com/react-component/field-form/blob/master/src/utils/messages.ts)\u3002
 */

import {
  Button,
  Form,
  Input,
  InputNumber
} from 'antd-packages'
import React from 'react'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '\${label} is required!',
  types: {
    email: '\${label} is not a valid email!',
    number: '\${label} is not a valid number!'
  },
  number: {
    range:
      '\${label} must be between \${min} and \${max}'
  }
}
/* eslint-enable no-template-curly-in-string */

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values)
  }

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[{ type: 'email' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          { type: 'number', min: 0, max: 99 }
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={['user', 'website']}
        label="Website"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'introduction']}
        label="Introduction"
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App`,sa=`import {
  Button,
  Form,
  Input,
  Select,
  Space,
  Tooltip,
  Typography
} from 'antd-packages'
import React from 'react'

const { Option } = Select

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(
      'Received values of form: ',
      values
    )
  }

  return (
    <Form
      name="complex-form"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item label="Username">
        <Space>
          <Form.Item
            name="username"
            noStyle
            rules={[
              {
                required: true,
                message: 'Username is required'
              }
            ]}
          >
            <Input
              style={{ width: 160 }}
              placeholder="Please input"
            />
          </Form.Item>
          <Tooltip title="Useful information">
            <Typography.Link href="#API">
              Need Help?
            </Typography.Link>
          </Tooltip>
        </Space>
      </Form.Item>
      <Form.Item label="Address">
        <Input.Group compact>
          <Form.Item
            name={['address', 'province']}
            noStyle
            rules={[
              {
                required: true,
                message: 'Province is required'
              }
            ]}
          >
            <Select placeholder="Select province">
              <Option value="Zhejiang">
                Zhejiang
              </Option>
              <Option value="Jiangsu">
                Jiangsu
              </Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={['address', 'street']}
            noStyle
            rules={[
              {
                required: true,
                message: 'Street is required'
              }
            ]}
          >
            <Input
              style={{ width: '50%' }}
              placeholder="Input street"
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item
        label="BirthDate"
        style={{ marginBottom: 0 }}
      >
        <Form.Item
          name="year"
          rules={[{ required: true }]}
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)'
          }}
        >
          <Input placeholder="Input birth year" />
        </Form.Item>
        <Form.Item
          name="month"
          rules={[{ required: true }]}
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)',
            margin: '0 8px'
          }}
        >
          <Input placeholder="Input birth month" />
        </Form.Item>
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App`,ia=`import { Button, Form, Input, Select } from 'antd-packages'
import React, { useState } from 'react'

const { Option } = Select

type Currency = 'rmb' | 'dollar'

interface PriceValue {
  number?: number
  currency?: Currency
}

interface PriceInputProps {
  value?: PriceValue
  onChange?: (value: PriceValue) => void
}

const PriceInput: React.FC<PriceInputProps> = ({
  value = {},
  onChange
}) => {
  const [number, setNumber] = useState(0)
  const [currency, setCurrency] =
    useState<Currency>('rmb')

  const triggerChange = (changedValue: {
    number?: number
    currency?: Currency
  }) => {
    onChange?.({
      number,
      currency,
      ...value,
      ...changedValue
    })
  }

  const onNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newNumber = parseInt(
      e.target.value || '0',
      10
    )
    if (Number.isNaN(number)) {
      return
    }
    if (!('number' in value)) {
      setNumber(newNumber)
    }
    triggerChange({ number: newNumber })
  }

  const onCurrencyChange = (
    newCurrency: Currency
  ) => {
    if (!('currency' in value)) {
      setCurrency(newCurrency)
    }
    triggerChange({ currency: newCurrency })
  }

  return (
    <span>
      <Input
        type="text"
        value={value.number || number}
        onChange={onNumberChange}
        style={{ width: 100 }}
      />
      <Select
        value={value.currency || currency}
        style={{ width: 80, margin: '0 8px' }}
        onChange={onCurrencyChange}
      >
        <Option value="rmb">RMB</Option>
        <Option value="dollar">Dollar</Option>
      </Select>
    </span>
  )
}

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(
      'Received values from form: ',
      values
    )
  }

  const checkPrice = (
    _: any,
    value: { number: number }
  ) => {
    if (value.number > 0) {
      return Promise.resolve()
    }
    return Promise.reject(
      new Error(
        'Price must be greater than zero!'
      )
    )
  }

  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      initialValues={{
        price: {
          number: 0,
          currency: 'rmb'
        }
      }}
    >
      <Form.Item
        name="price"
        label="Price"
        rules={[{ validator: checkPrice }]}
      >
        <PriceInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App`,la=`import { Form, Input } from 'antd-packages'
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

export default App`,da=`import {
  SmileOutlined,
  UserOutlined
} from '@ant-design/icons'
import {
  Avatar,
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Typography
} from 'antd-packages'
import type { FormInstance } from 'antd-packages/es/form'
import React, {
  useEffect,
  useRef,
  useState
} from 'react'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

interface UserType {
  name: string
  age: string
}

interface ModalFormProps {
  visible: boolean
  onCancel: () => void
}

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({
  form,
  visible
}: {
  form: FormInstance
  visible: boolean
}) => {
  const prevVisibleRef = useRef<boolean>()
  useEffect(() => {
    prevVisibleRef.current = visible
  }, [visible])
  const prevVisible = prevVisibleRef.current

  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields()
    }
  }, [form, prevVisible, visible])
}

const ModalForm: React.FC<ModalFormProps> = ({
  visible,
  onCancel
}) => {
  const [form] = Form.useForm()

  useResetFormOnCloseModal({
    form,
    visible
  })

  const onOk = () => {
    form.submit()
  }

  return (
    <Modal
      title="Basic Drawer"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form
        form={form}
        layout="vertical"
        name="userForm"
      >
        <Form.Item
          name="name"
          label="User Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="User Age"
          rules={[{ required: true }]}
        >
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  )
}

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const showUserModal = () => {
    setVisible(true)
  }

  const hideUserModal = () => {
    setVisible(false)
  }

  const onFinish = (values: any) => {
    console.log('Finish:', values)
  }

  return (
    <Form.Provider
      onFormFinish={(name, { values, forms }) => {
        if (name === 'userForm') {
          const { basicForm } = forms
          const users =
            basicForm.getFieldValue('users') || []
          basicForm.setFieldsValue({
            users: [...users, values]
          })
          setVisible(false)
        }
      }}
    >
      <Form
        {...layout}
        name="basicForm"
        onFinish={onFinish}
      >
        <Form.Item
          name="group"
          label="Group Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="User List"
          shouldUpdate={(prevValues, curValues) =>
            prevValues.users !== curValues.users
          }
        >
          {({ getFieldValue }) => {
            const users: UserType[] =
              getFieldValue('users') || []
            return users.length ? (
              <ul>
                {users.map((user, index) => (
                  <li
                    key={index}
                    className="user"
                  >
                    <Avatar
                      icon={<UserOutlined />}
                    />
                    {user.name} - {user.age}
                  </li>
                ))}
              </ul>
            ) : (
              <Typography.Text
                className="ant-form-text"
                type="secondary"
              >
                ( <SmileOutlined /> No user yet. )
              </Typography.Text>
            )
          }}
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button
            htmlType="submit"
            type="primary"
          >
            Submit
          </Button>
          <Button
            htmlType="button"
            style={{ margin: '0 8px' }}
            onClick={showUserModal}
          >
            Add User
          </Button>
        </Form.Item>
      </Form>

      <ModalForm
        visible={visible}
        onCancel={hideUserModal}
      />
    </Form.Provider>
  )
}

export default App`,ca=`import {
  LockOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Button, Form, Input } from 'antd-packages'
import React, { useEffect, useState } from 'react'

const App: React.FC = () => {
  const [form] = Form.useForm()
  const [, forceUpdate] = useState({})

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({})
  }, [])

  const onFinish = (values: any) => {
    console.log('Finish:', values)
  }

  return (
    <Form
      form={form}
      name="horizontal_login"
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!'
          }
        ]}
      >
        <Input
          prefix={
            <UserOutlined className="site-form-item-icon" />
          }
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          }
        ]}
      >
        <Input
          prefix={
            <LockOutlined className="site-form-item-icon" />
          }
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form
                .getFieldsError()
                .filter(
                  ({ errors }) => errors.length
                ).length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
  )
}

export default App`,pa=`import {
  LockOutlined,
  UserOutlined
} from '@ant-design/icons'
import {
  Button,
  Checkbox,
  Form,
  Input
} from 'antd-packages'
import React from 'react'

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(
      'Received values of form: ',
      values
    )
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!'
          }
        ]}
      >
        <Input
          prefix={
            <UserOutlined className="site-form-item-icon" />
          }
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!'
          }
        ]}
      >
        <Input
          prefix={
            <LockOutlined className="site-form-item-icon" />
          }
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          noStyle
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  )
}

export default App`,ua=`import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select
} from 'antd-packages'
import React, { useState } from 'react'

const { Option } = Select

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
}

const App: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log(
      'Received values of form: ',
      values
    )
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  )

  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="USD">$</Option>
        <Option value="CNY">\xA5</Option>
      </Select>
    </Form.Item>
  )

  const [
    autoCompleteResult,
    setAutoCompleteResult
  ] = useState<string[]>([])

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([])
    } else {
      setAutoCompleteResult(
        ['.com', '.org', '.net'].map(
          (domain) => \`\${value}\${domain}\`
        )
      )
    }
  }

  const websiteOptions = autoCompleteResult.map(
    (website) => ({
      label: website,
      value: website
    })
  )

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: [
          'zhejiang',
          'hangzhou',
          'xihu'
        ],
        prefix: '86'
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message:
              'The input is not valid E-mail!'
          },
          {
            required: true,
            message: 'Please input your E-mail!'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          }
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message:
              'Please confirm your password!'
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (
                !value ||
                getFieldValue('password') ===
                  value
              ) {
                return Promise.resolve()
              }
              return Promise.reject(
                new Error(
                  'The two passwords that you entered do not match!'
                )
              )
            }
          })
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message:
              'Please input your nickname!',
            whitespace: true
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="residence"
        label="Habitual Residence"
        rules={[
          {
            type: 'array',
            required: true,
            message:
              'Please select your habitual residence!'
          }
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message:
              'Please input your phone number!'
          }
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item
        name="donation"
        label="Donation"
        rules={[
          {
            required: true,
            message:
              'Please input donation amount!'
          }
        ]}
      >
        <InputNumber
          addonAfter={suffixSelector}
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item
        name="website"
        label="Website"
        rules={[
          {
            required: true,
            message: 'Please input website!'
          }
        ]}
      >
        <AutoComplete
          options={websiteOptions}
          onChange={onWebsiteChange}
          placeholder="website"
        >
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        name="intro"
        label="Intro"
        rules={[
          {
            required: true,
            message: 'Please input Intro'
          }
        ]}
      >
        <Input.TextArea
          showCount
          maxLength={100}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!'
          }
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Captcha"
        extra="We must make sure that your are a human."
      >
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message:
                    'Please input the captcha you got!'
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(
                    new Error(
                      'Should accept agreement'
                    )
                  )
          }
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App`,ma=`import {
  DownOutlined,
  UpOutlined
} from '@ant-design/icons'
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select
} from 'antd-packages'
import React, { useState } from 'react'

const { Option } = Select

const AdvancedSearchForm = () => {
  const [expand, setExpand] = useState(false)
  const [form] = Form.useForm()

  const getFields = () => {
    const count = expand ? 10 : 6
    const children = []
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={\`field-\${i}\`}
            label={\`Field \${i}\`}
            rules={[
              {
                required: true,
                message: 'Input something!'
              }
            ]}
          >
            {i % 3 !== 1 ? (
              <Input placeholder="placeholder" />
            ) : (
              <Select defaultValue="2">
                <Option value="1">1</Option>
                <Option value="2">
                  longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong
                </Option>
              </Select>
            )}
          </Form.Item>
        </Col>
      )
    }
    return children
  }

  const onFinish = (values: any) => {
    console.log(
      'Received values of form: ',
      values
    )
  }

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col
          span={24}
          style={{ textAlign: 'right' }}
        >
          <Button
            type="primary"
            htmlType="submit"
          >
            Search
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields()
            }}
          >
            Clear
          </Button>
          <a
            style={{ fontSize: 12 }}
            onClick={() => {
              setExpand(!expand)
            }}
          >
            {expand ? (
              <UpOutlined />
            ) : (
              <DownOutlined />
            )}{' '}
            Collapse
          </a>
        </Col>
      </Row>
    </Form>
  )
}

const App: React.FC = () => (
  <div>
    <AdvancedSearchForm />
    <div className="search-result-list">
      Search Result List
    </div>
  </div>
)

export default App`,ga=`import {
  Button,
  Form,
  Input,
  Modal,
  Radio
} from 'antd-packages'
import React, { useState } from 'react'

interface Values {
  title: string
  description: string
  modifier: string
}

interface CollectionCreateFormProps {
  visible: boolean
  onCreate: (values: Values) => void
  onCancel: () => void
}

const CollectionCreateForm: React.FC<
  CollectionCreateFormProps
> = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm()
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields()
            onCreate(values)
          })
          .catch((info) => {
            console.log('Validate Failed:', info)
          })
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message:
                'Please input the title of collection!'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
        >
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  )
}

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const onCreate = (values: any) => {
    console.log(
      'Received values of form: ',
      values
    )
    setVisible(false)
  }

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true)
        }}
      >
        New Collection
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false)
        }}
      />
    </div>
  )
}

export default App`,fa=`import {
  Button,
  DatePicker,
  Form,
  TimePicker
} from 'antd-packages'
import React from 'react'

const { RangePicker } = DatePicker

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}
const config = {
  rules: [
    {
      type: 'object' as const,
      required: true,
      message: 'Please select time!'
    }
  ]
}
const rangeConfig = {
  rules: [
    {
      type: 'array' as const,
      required: true,
      message: 'Please select time!'
    }
  ]
}

const App: React.FC = () => {
  const onFinish = (fieldsValue: any) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue['range-picker']
    const rangeTimeValue =
      fieldsValue['range-time-picker']
    const values = {
      ...fieldsValue,
      'date-picker':
        fieldsValue['date-picker'].format(
          'YYYY-MM-DD'
        ),
      'date-time-picker': fieldsValue[
        'date-time-picker'
      ].format('YYYY-MM-DD HH:mm:ss'),
      'month-picker':
        fieldsValue['month-picker'].format(
          'YYYY-MM'
        ),
      'range-picker': [
        rangeValue[0].format('YYYY-MM-DD'),
        rangeValue[1].format('YYYY-MM-DD')
      ],
      'range-time-picker': [
        rangeTimeValue[0].format(
          'YYYY-MM-DD HH:mm:ss'
        ),
        rangeTimeValue[1].format(
          'YYYY-MM-DD HH:mm:ss'
        )
      ],
      'time-picker':
        fieldsValue['time-picker'].format(
          'HH:mm:ss'
        )
    }
    console.log(
      'Received values of form: ',
      values
    )
  }

  return (
    <Form
      name="time_related_controls"
      {...formItemLayout}
      onFinish={onFinish}
    >
      <Form.Item
        name="date-picker"
        label="DatePicker"
        {...config}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="date-time-picker"
        label="DatePicker[showTime]"
        {...config}
      >
        <DatePicker
          showTime
          format="YYYY-MM-DD HH:mm:ss"
        />
      </Form.Item>
      <Form.Item
        name="month-picker"
        label="MonthPicker"
        {...config}
      >
        <DatePicker picker="month" />
      </Form.Item>
      <Form.Item
        name="range-picker"
        label="RangePicker"
        {...rangeConfig}
      >
        <RangePicker />
      </Form.Item>
      <Form.Item
        name="range-time-picker"
        label="RangePicker[showTime]"
        {...rangeConfig}
      >
        <RangePicker
          showTime
          format="YYYY-MM-DD HH:mm:ss"
        />
      </Form.Item>
      <Form.Item
        name="time-picker"
        label="TimePicker"
        {...config}
      >
        <TimePicker />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 }
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App`,va=`/**
 * title: \u81EA\u884C\u5904\u7406\u8868\u5355\u6570\u636E
 * desc: \`Form\`\u5177\u6709\u81EA\u52A8\u6536\u96C6\u6570\u636E\u5E76\u6821\u9A8C\u7684\u529F\u80FD\uFF0C\u4F46\u5982\u679C\u60A8\u4E0D\u9700\u8981\u8FD9\u4E2A\u529F\u80FD\uFF0C\u6216\u8005\u9ED8\u8BA4\u7684\u884C\u4E3A\u65E0\u6CD5\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42\uFF0C\u53EF\u4EE5\u9009\u62E9\u81EA\u884C\u5904\u7406\u6570\u636E\u3002
 */

import { Form, InputNumber } from 'antd-packages'
import React, { useState } from 'react'

type ValidateStatus = Parameters<
  typeof Form.Item
>[0]['validateStatus']

const validatePrimeNumber = (
  number: number
): {
  validateStatus: ValidateStatus
  errorMsg: string | null
} => {
  if (number === 11) {
    return {
      validateStatus: 'success',
      errorMsg: null
    }
  }
  return {
    validateStatus: 'error',
    errorMsg: 'The prime between 8 and 12 is 11!'
  }
}

const formItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 12 }
}

const App: React.FC = () => {
  const [number, setNumber] = useState<{
    value: number
    validateStatus?: ValidateStatus
    errorMsg?: string | null
  }>({
    value: 11
  })

  const tips =
    'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.'

  const onNumberChange = (value: number) => {
    setNumber({
      ...validatePrimeNumber(value),
      value
    })
  }

  return (
    <Form>
      <Form.Item
        {...formItemLayout}
        label="Prime between 8 & 12"
        validateStatus={number.validateStatus}
        help={number.errorMsg || tips}
      >
        <InputNumber
          min={8}
          max={12}
          value={number.value}
          onChange={onNumberChange}
        />
      </Form.Item>
    </Form>
  )
}

export default App`,ha=`import { SmileOutlined } from '@ant-design/icons'
import {
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TimePicker,
  TreeSelect
} from 'antd-packages'
import React from 'react'

const { Option } = Select

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
}

const App: React.FC = () => (
  <Form {...formItemLayout}>
    <Form.Item
      label="Fail"
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input
        placeholder="unavailable choice"
        id="error"
      />
    </Form.Item>

    <Form.Item
      label="Warning"
      validateStatus="warning"
    >
      <Input
        placeholder="Warning"
        id="warning"
        prefix={<SmileOutlined />}
      />
    </Form.Item>

    <Form.Item
      label="Validating"
      hasFeedback
      validateStatus="validating"
      help="The information is being validated..."
    >
      <Input
        placeholder="I'm the content is being validated"
        id="validating"
      />
    </Form.Item>

    <Form.Item
      label="Success"
      hasFeedback
      validateStatus="success"
    >
      <Input
        placeholder="I'm the content"
        id="success"
      />
    </Form.Item>

    <Form.Item
      label="Warning"
      hasFeedback
      validateStatus="warning"
    >
      <Input
        placeholder="Warning"
        id="warning2"
      />
    </Form.Item>

    <Form.Item
      label="Fail"
      hasFeedback
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input
        placeholder="unavailable choice"
        id="error2"
      />
    </Form.Item>

    <Form.Item
      label="Success"
      hasFeedback
      validateStatus="success"
    >
      <DatePicker style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item
      label="Warning"
      hasFeedback
      validateStatus="warning"
    >
      <TimePicker style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item
      label="Error"
      hasFeedback
      validateStatus="error"
    >
      <DatePicker.RangePicker
        style={{ width: '100%' }}
      />
    </Form.Item>

    <Form.Item
      label="Error"
      hasFeedback
      validateStatus="error"
    >
      <Select placeholder="I'm Select" allowClear>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </Form.Item>

    <Form.Item
      label="Validating"
      hasFeedback
      validateStatus="error"
      help="Something breaks the rule."
    >
      <Cascader
        placeholder="I'm Cascader"
        options={[{ value: 'xx', label: 'xx' }]}
        allowClear
      />
    </Form.Item>

    <Form.Item
      label="Warning"
      hasFeedback
      validateStatus="warning"
      help="Need to be checked"
    >
      <TreeSelect
        placeholder="I'm TreeSelect"
        treeData={[{ value: 'xx', label: 'xx' }]}
        allowClear
      />
    </Form.Item>

    <Form.Item
      label="inline"
      style={{ marginBottom: 0 }}
    >
      <Form.Item
        validateStatus="error"
        help="Please select right date"
        style={{
          display: 'inline-block',
          width: 'calc(50% - 12px)'
        }}
      >
        <DatePicker />
      </Form.Item>
      <span
        style={{
          display: 'inline-block',
          width: '24px',
          lineHeight: '32px',
          textAlign: 'center'
        }}
      >
        -
      </span>
      <Form.Item
        style={{
          display: 'inline-block',
          width: 'calc(50% - 12px)'
        }}
      >
        <DatePicker />
      </Form.Item>
    </Form.Item>

    <Form.Item
      label="Success"
      hasFeedback
      validateStatus="success"
    >
      <InputNumber style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item
      label="Success"
      hasFeedback
      validateStatus="success"
    >
      <Input
        allowClear
        placeholder="with allowClear"
      />
    </Form.Item>

    <Form.Item
      label="Warning"
      hasFeedback
      validateStatus="warning"
    >
      <Input.Password placeholder="with input password" />
    </Form.Item>

    <Form.Item
      label="Error"
      hasFeedback
      validateStatus="error"
    >
      <Input.Password
        allowClear
        placeholder="with input password and allowClear"
      />
    </Form.Item>

    <Form.Item
      label="Fail"
      validateStatus="error"
      hasFeedback
    >
      <Mentions />
    </Form.Item>

    <Form.Item
      label="Fail"
      validateStatus="error"
      hasFeedback
      help="Should have something"
    >
      <Input.TextArea allowClear showCount />
    </Form.Item>
  </Form>
)

export default App`,ya=`import {
  Button,
  Checkbox,
  Form,
  Input
} from 'antd-packages'
import React, { useEffect, useState } from 'react'

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
}

const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
}

const App: React.FC = () => {
  const [form] = Form.useForm()
  const [checkNick, setCheckNick] =
    useState(false)

  useEffect(() => {
    form.validateFields(['nickname'])
  }, [checkNick, form])

  const onCheckboxChange = (e: {
    target: { checked: boolean }
  }) => {
    setCheckNick(e.target.checked)
  }

  const onCheck = async () => {
    try {
      const values = await form.validateFields()
      console.log('Success:', values)
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
    }
  }

  return (
    <Form form={form} name="dynamic_rule">
      <Form.Item
        {...formItemLayout}
        name="username"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name'
          }
        ]}
      >
        <Input placeholder="Please input your name" />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name="nickname"
        label="Nickname"
        rules={[
          {
            required: checkNick,
            message: 'Please input your nickname'
          }
        ]}
      >
        <Input placeholder="Please input your nickname" />
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Checkbox
          checked={checkNick}
          onChange={onCheckboxChange}
        >
          Nickname is required
        </Checkbox>
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Button type="primary" onClick={onCheck}>
          Check
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App`,Ca=`import {
  InboxOutlined,
  UploadOutlined
} from '@ant-design/icons'
import {
  Button,
  Checkbox,
  Col,
  Form,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Switch,
  Upload
} from 'antd-packages'
import React from 'react'

const { Option } = Select

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
}

const normFile = (e: any) => {
  console.log('Upload event:', e)
  if (Array.isArray(e)) {
    return e
  }
  return e?.fileList
}

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(
      'Received values of form: ',
      values
    )
  }

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5
      }}
    >
      <Form.Item label="Plain Text">
        <span className="ant-form-text">
          China
        </span>
      </Form.Item>
      <Form.Item
        name="select"
        label="Select"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please select your country!'
          }
        ]}
      >
        <Select placeholder="Please select a country">
          <Option value="china">China</Option>
          <Option value="usa">U.S.A</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="select-multiple"
        label="Select[multiple]"
        rules={[
          {
            required: true,
            message:
              'Please select your favourite colors!',
            type: 'array'
          }
        ]}
      >
        <Select
          mode="multiple"
          placeholder="Please select favourite colors"
        >
          <Option value="red">Red</Option>
          <Option value="green">Green</Option>
          <Option value="blue">Blue</Option>
        </Select>
      </Form.Item>

      <Form.Item label="InputNumber">
        <Form.Item name="input-number" noStyle>
          <InputNumber min={1} max={10} />
        </Form.Item>
        <span className="ant-form-text">
          {' '}
          machines
        </span>
      </Form.Item>

      <Form.Item
        name="switch"
        label="Switch"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>

      <Form.Item name="slider" label="Slider">
        <Slider
          marks={{
            0: 'A',
            20: 'B',
            40: 'C',
            60: 'D',
            80: 'E',
            100: 'F'
          }}
        />
      </Form.Item>

      <Form.Item
        name="radio-group"
        label="Radio.Group"
      >
        <Radio.Group>
          <Radio value="a">item 1</Radio>
          <Radio value="b">item 2</Radio>
          <Radio value="c">item 3</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="radio-button"
        label="Radio.Button"
        rules={[
          {
            required: true,
            message: 'Please pick an item!'
          }
        ]}
      >
        <Radio.Group>
          <Radio.Button value="a">
            item 1
          </Radio.Button>
          <Radio.Button value="b">
            item 2
          </Radio.Button>
          <Radio.Button value="c">
            item 3
          </Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="checkbox-group"
        label="Checkbox.Group"
      >
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox
                value="A"
                style={{ lineHeight: '32px' }}
              >
                A
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="B"
                style={{ lineHeight: '32px' }}
                disabled
              >
                B
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="C"
                style={{ lineHeight: '32px' }}
              >
                C
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="D"
                style={{ lineHeight: '32px' }}
              >
                D
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="E"
                style={{ lineHeight: '32px' }}
              >
                E
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="F"
                style={{ lineHeight: '32px' }}
              >
                F
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="rate" label="Rate">
        <Rate />
      </Form.Item>

      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="longgggggggggggggggggggggggggggggggggg"
      >
        <Upload
          name="logo"
          action="/upload.do"
          listType="picture"
        >
          <Button icon={<UploadOutlined />}>
            Click to upload
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item label="Dragger">
        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger
            name="files"
            action="/upload.do"
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to
              upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item
        wrapperCol={{ span: 12, offset: 6 }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App`,wa=`import { Form, Input } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Form>
    <Form.Item label="Normal0">
      <Input
        placeholder="unavailable choice"
        value="Buggy!"
      />
    </Form.Item>
    <Form.Item
      label="Fail0"
      validateStatus="error"
      help="Buggy!"
    >
      <Input
        placeholder="unavailable choice"
        value="Buggy!"
      />
    </Form.Item>
    <Form.Item
      label="FailDisabled0"
      validateStatus="error"
      help="Buggy!"
    >
      <Input
        placeholder="unavailable choice"
        disabled
        value="Buggy!"
      />
    </Form.Item>
    <Form.Item label="Normal1">
      <Input
        placeholder="unavailable choice"
        value="Buggy!"
      />
    </Form.Item>
    <Form.Item
      label="Fail1"
      validateStatus="error"
      help="Buggy!"
    >
      <Input
        placeholder="unavailable choice"
        value="Buggy!"
      />
    </Form.Item>
    <Form.Item
      label="FailDisabled1"
      validateStatus="error"
      help="Buggy!"
    >
      <Input
        placeholder="unavailable choice"
        disabled
        value="Buggy!"
      />
    </Form.Item>
    <Form.Item label="Normal2">
      <Input
        placeholder="unavailable choice"
        addonBefore="Buggy!"
      />
    </Form.Item>
    <Form.Item
      label="Fail2"
      validateStatus="error"
      help="Buggy!"
    >
      <Input
        placeholder="unavailable choice"
        addonBefore="Buggy!"
      />
    </Form.Item>
    <Form.Item
      label="FailDisabled2"
      validateStatus="error"
      help="Buggy!"
    >
      <Input
        placeholder="unavailable choice"
        disabled
        addonBefore="Buggy!"
      />
    </Form.Item>
    <Form.Item label="Normal3">
      <Input
        placeholder="unavailable choice"
        prefix="\u4EBA\u6C11\u5E01"
        value="50"
      />
    </Form.Item>
    <Form.Item
      label="Fail3"
      validateStatus="error"
      help="Buggy!"
    >
      <Input
        placeholder="unavailable choice"
        prefix="\u4EBA\u6C11\u5E01"
        value="50"
      />
    </Form.Item>
    <Form.Item
      label="FailDisabled3"
      validateStatus="error"
      help="Buggy!"
    >
      <Input
        placeholder="unavailable choice"
        disabled
        prefix="\u4EBA\u6C11\u5E01"
        value="50"
      />
    </Form.Item>
  </Form>
)

export default App`,ka=`import { Form, Input } from 'antd-packages'
import React from 'react'

let acc = 0

const App: React.FC = () => {
  const [form] = Form.useForm()
  return (
    <Form
      form={form}
      name="debug"
      initialValues={{
        debug1: 'debug1',
        debug2: 'debug2'
      }}
    >
      <Form.Item
        noStyle
        dependencies={['debug1']}
      >
        {
          () => acc++
          // return <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>;
        }
      </Form.Item>
      <Form.Item label="debug1" name="debug1">
        <Input />
      </Form.Item>
      <Form.Item label="debug2" name="debug2">
        <Input />
      </Form.Item>
    </Form>
  )
}

export default App`,ba=`/**
 * title: \u6D4B\u8BD5 label \u7701\u7565
 * desc: \`label\`\u4E2D\u4F7F\u7528\`<Typography.Textellipsis>\`\u65F6\u5E94\u8BE5\u663E\u793A\`...\`\u3002
 */

import { Form, Input, Typography } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Form
    name="label-ellipsis"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
  >
    <Form.Item
      label={
        <Typography.Text ellipsis>
          longtextlongtextlongtextlongtextlongtextlongtextlongtext
        </Typography.Text>
      }
      name="username"
    >
      <Input />
    </Form.Item>

    <Form.Item
      label={
        <Typography.Text ellipsis>
          longtext longtext longtext longtext
          longtext longtext longtext
        </Typography.Text>
      }
      name="password"
    >
      <Input.Password />
    </Form.Item>
  </Form>
)

export default App`,Sa=`import { Button, Form, Input } from 'antd-packages'
import React from 'react'

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message:
                'Please input your username!'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message:
                'Please input your password!'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Form
        name="responsive"
        labelCol={{ sm: 24, xl: 24 }}
        wrapperCol={{ sm: 24, xl: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message:
                'Please input your username!'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message:
                'Please input your password!'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default App`,Pa=`import type { InputRef } from 'antd-packages'
import { Button, Form, Input } from 'antd-packages'
import React from 'react'

const App: React.FC = () => {
  const [form] = Form.useForm()
  const ref = React.useRef<InputRef>(null)

  return (
    <Form
      form={form}
      initialValues={{ list: ['light'] }}
    >
      <Form.Item name="test" label="test">
        <Input ref={ref} />
      </Form.Item>

      <Form.List name="list">
        {(fields) =>
          fields.map((field) => (
            <Form.Item {...field} key={field.key}>
              <Input ref={ref} />
            </Form.Item>
          ))
        }
      </Form.List>

      <Button
        htmlType="button"
        onClick={() => {
          form.getFieldInstance('test').focus()
        }}
      >
        Focus Form.Item
      </Button>
      <Button
        onClick={() => {
          form
            .getFieldInstance(['list', 0])
            .focus()
        }}
      >
        Focus Form.List
      </Button>
    </Form>
  )
}

export default App`,Ra=`import { Col, Row } from 'antd-packages';
import React from 'react';

const App: React.FC = () => (
  <>
    <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </>
);

export default App;`,Ta=`import { Col, Divider, Row } from 'antd-packages';
import React from 'react';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const App: React.FC = () => (
  <>
    <Divider orientation="left">Horizontal</Divider>
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <Divider orientation="left">Responsive</Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <Divider orientation="left">Vertical</Divider>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  </>
);

export default App;`,xa=`import { Col, Row } from 'antd-packages';
import React from 'react';

const App: React.FC = () => (
  <>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8} offset={8}>
        col-8
      </Col>
    </Row>
    <Row>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>
        col-12 col-offset-6
      </Col>
    </Row>
  </>
);

export default App;`,Ia=`import { Col, Row } from 'antd-packages';
import React from 'react';

const App: React.FC = () => (
  <Row>
    <Col span={18} push={6}>
      col-18 col-push-6
    </Col>
    <Col span={6} pull={18}>
      col-6 col-pull-18
    </Col>
  </Row>
);

export default App;`,Aa=`import { Col, Divider, Row } from 'antd-packages';
import React from 'react';

const App: React.FC = () => (
  <>
    <Divider orientation="left">sub-element align left</Divider>
    <Row justify="start">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element align center</Divider>
    <Row justify="center">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element align right</Divider>
    <Row justify="end">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element monospaced arrangement</Divider>
    <Row justify="space-between">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element align full</Divider>
    <Row justify="space-around">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element align evenly</Divider>
    <Row justify="space-evenly">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
  </>
);

export default App;`,Ba=`import { Col, Divider, Row } from 'antd-packages';
import React from 'react';

const DemoBox: React.FC<{ children: React.ReactNode; value: number }> = props => (
  <p className={\`height-\${props.value}\`}>{props.children}</p>
);

const App: React.FC = () => (
  <>
    <Divider orientation="left">Align Top</Divider>
    <Row justify="center" align="top">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>

    <Divider orientation="left">Align Middle</Divider>
    <Row justify="space-around" align="middle">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>

    <Divider orientation="left">Align Bottom</Divider>
    <Row justify="space-between" align="bottom">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>
  </>
);

export default App;`,Da=`import { Col, Divider, Row } from 'antd-packages';
import React from 'react';

const App: React.FC = () => (
  <>
    <Divider orientation="left">Normal</Divider>
    <Row>
      <Col span={6} order={4}>
        1 col-order-4
      </Col>
      <Col span={6} order={3}>
        2 col-order-3
      </Col>
      <Col span={6} order={2}>
        3 col-order-2
      </Col>
      <Col span={6} order={1}>
        4 col-order-1
      </Col>
    </Row>
    <Divider orientation="left">Responsive</Divider>
    <Row>
      <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
        1 col-order-responsive
      </Col>
      <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
        2 col-order-responsive
      </Col>
      <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
        3 col-order-responsive
      </Col>
      <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
        4 col-order-responsive
      </Col>
    </Row>
  </>
);

export default App;`,Fa=`import { Col, Divider, Row } from 'antd-packages';
import React from 'react';

const App: React.FC = () => (
  <>
    <Divider orientation="left">Percentage columns</Divider>
    <Row>
      <Col flex={2}>2 / 5</Col>
      <Col flex={3}>3 / 5</Col>
    </Row>
    <Divider orientation="left">Fill rest</Divider>
    <Row>
      <Col flex="100px">100px</Col>
      <Col flex="auto">Fill Rest</Col>
    </Row>
    <Divider orientation="left">Raw flex style</Divider>
    <Row>
      <Col flex="1 1 200px">1 1 200px</Col>
      <Col flex="0 1 300px">0 1 300px</Col>
    </Row>

    <Row wrap={false}>
      <Col flex="none">
        <div style={{ padding: '0 16px' }}>none</div>
      </Col>
      <Col flex="auto">auto with no-wrap</Col>
    </Row>
  </>
);

export default App;`,Oa=`import { Col, Row } from 'antd-packages';
import React from 'react';

const App: React.FC = () => (
  <Row>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      Col
    </Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
  </Row>
);

export default App;`,La="\n/**\n  * title: \u5176\u4ED6\u5C5E\u6027\u7684\u54CD\u5E94\u5F0F\n  * desc: `span``pull``push``offset``order`\u5C5E\u6027\u53EF\u4EE5\u901A\u8FC7\u5185\u5D4C\u5230`xs``sm``md``lg``xl``xxl`\u5C5E\u6027\u4E2D\u6765\u4F7F\u7528\u3002\u5176\u4E2D`xs={6}`\u76F8\u5F53\u4E8E`xs={{span:6}}`\u3002\n  */\n\nimport { Col, Row } from 'antd-packages';\nimport React from 'react';\n\nconst App: React.FC = () => (\n  <Row>\n    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>\n      Col\n    </Col>\n    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>\n      Col\n    </Col>\n    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>\n      Col\n    </Col>\n  </Row>\n);\n\nexport default App;",Na=`import { Col, Row, Slider } from 'antd-packages';
import React, { useState } from 'react';

const gutters: Record<string, number> = {};
const vgutters: Record<string, number> = {};
const colCounts: Record<string, number> = {};

[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  gutters[i] = value;
});
[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  vgutters[i] = value;
});
[2, 3, 4, 6, 8, 12].forEach((value, i) => {
  colCounts[i] = value;
});

const App: React.FC = () => {
  const [gutterKey, setGutterKey] = useState(1);
  const [vgutterKey, setVgutterKey] = useState(1);
  const [colCountKey, setColCountKey] = useState(2);

  const cols = [];
  const colCount = colCounts[colCountKey];
  let colCode = '';
  for (let i = 0; i < colCount; i++) {
    cols.push(
      <Col key={i.toString()} span={24 / colCount}>
        <div>Column</div>
      </Col>,
    );
    colCode += \`  <Col span={\${24 / colCount}} />\\n\`;
  }

  return (
    <>
      <span>Horizontal Gutter (px): </span>
      <div style={{ width: '50%' }}>
        <Slider
          min={0}
          max={Object.keys(gutters).length - 1}
          value={gutterKey}
          onChange={setGutterKey}
          marks={gutters}
          step={null}
          tipFormatter={value => value && gutters[value]}
        />
      </div>
      <span>Vertical Gutter (px): </span>
      <div style={{ width: '50%' }}>
        <Slider
          min={0}
          max={Object.keys(vgutters).length - 1}
          value={vgutterKey}
          onChange={setVgutterKey}
          marks={vgutters}
          step={null}
          tipFormatter={value => value && vgutters[value]}
        />
      </div>
      <span>Column Count:</span>
      <div style={{ width: '50%', marginBottom: 48 }}>
        <Slider
          min={0}
          max={Object.keys(colCounts).length - 1}
          value={colCountKey}
          onChange={setColCountKey}
          marks={colCounts}
          step={null}
          tipFormatter={value => value && colCounts[value]}
        />
      </div>
      <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>
        {cols}
        {cols}
      </Row>
      Another Row:
      <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>{cols}</Row>
      <pre className="demo-code">{\`<Row gutter={[\${gutters[gutterKey]}, \${vgutters[vgutterKey]}]}>\\n\${colCode}\\n\${colCode}</Row>\`}</pre>
      <pre className="demo-code">{\`<Row gutter={[\${gutters[gutterKey]}, \${vgutters[vgutterKey]}]}>\\n\${colCode}</Row>\`}</pre>
    </>
  );
};

export default App;`,Ma=`import { Grid, Tag } from 'antd-packages';
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

export default App;`,za=`import { Image } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
)

export default App`,Ea=`import { Image } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Image
    width={200}
    height={200}
    src="error"
    fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
  />
)

export default App`,$a=`import { Button, Image, Space } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [random, setRandom] = useState<number>()

  return (
    <Space size={12}>
      <Image
        width={200}
        src={\`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?\${random}\`}
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

export default App`,Za=`import { Image } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Image.PreviewGroup>
    <Image
      width={200}
      src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
    />
    <Image
      width={200}
      src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
    />
  </Image.PreviewGroup>
)

export default App`,Va=`import { Image } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Image
        preview={{ visible: false }}
        width={200}
        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        onClick={() => setVisible(true)}
      />
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) =>
              setVisible(vis)
          }}
        >
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
        </Image.PreviewGroup>
      </div>
    </>
  )
}

export default App`,Ka=`import { Image } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
    preview={{
      src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }}
  />
)

export default App`,Ua=`import { Button, Image } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
      >
        show image preview
      </Button>
      <Image
        width={200}
        style={{ display: 'none' }}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
        preview={{
          visible,
          src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          onVisibleChange: (value) => {
            setVisible(value)
          }
        }}
      />
    </>
  )
}

export default App`,ja=`import { ZoomInOutlined } from '@ant-design/icons'
import { Image, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Image
    width={96}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    preview={{
      maskClassName: 'customize-mask',
      mask: (
        <Space
          direction="vertical"
          align="center"
        >
          <ZoomInOutlined />
          \u793A\u4F8B
        </Space>
      )
    }}
  />
)

export default App`,Ha=`import { Image } from 'antd-packages'

const App = () => (
  <Image.PreviewGroup
    preview={{
      countRender: (current, total) =>
        \`\u5F53\u524D \${current} / \u603B\u8BA1 \${total}\`
    }}
  >
    <Image
      width={150}
      src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
    />
    <Image
      width={150}
      src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
    />
    <Image
      width={150}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  </Image.PreviewGroup>
)

export default App`,Ga=`import { Input } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Input placeholder="Basic usage" />
)

export default App`,Ja=`import { UserOutlined } from '@ant-design/icons'
import { Input } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Input
      size="large"
      placeholder="large size"
      prefix={<UserOutlined />}
    />
    <br />
    <br />
    <Input
      placeholder="default size"
      prefix={<UserOutlined />}
    />
    <br />
    <br />
    <Input
      size="small"
      placeholder="small size"
      prefix={<UserOutlined />}
    />
  </>
)

export default App`,Ya=`import { SettingOutlined } from '@ant-design/icons'
import {
  Cascader,
  Input,
  Select,
  Space
} from 'antd-packages'
import React from 'react'

const { Option } = Select

const selectBefore = (
  <Select
    defaultValue="http://"
    className="select-before"
  >
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
)
const selectAfter = (
  <Select
    defaultValue=".com"
    className="select-after"
  >
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
)

const App: React.FC = () => (
  <Space direction="vertical">
    <Input
      addonBefore="http://"
      addonAfter=".com"
      defaultValue="mysite"
    />
    <Input
      addonBefore={selectBefore}
      addonAfter={selectAfter}
      defaultValue="mysite"
    />
    <Input
      addonAfter={<SettingOutlined />}
      defaultValue="mysite"
    />
    <Input
      addonBefore="http://"
      suffix=".com"
      defaultValue="mysite"
    />
    <Input
      addonBefore={
        <Cascader
          placeholder="cascader"
          style={{ width: 150 }}
        />
      }
      defaultValue="mysite"
    />
  </Space>
)

export default App`,Wa=`import { CopyOutlined } from '@ant-design/icons'
import {
  AutoComplete,
  Button,
  Cascader,
  Col,
  DatePicker,
  Input,
  InputNumber,
  Row,
  Select,
  Tooltip
} from 'antd-packages'
import React from 'react'

const { Option } = Select

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

const App: React.FC = () => (
  <div className="site-input-group-wrapper">
    <Input.Group size="large">
      <Row gutter={8}>
        <Col span={5}>
          <Input defaultValue="0571" />
        </Col>
        <Col span={8}>
          <Input defaultValue="26888888" />
        </Col>
      </Row>
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input
        style={{ width: '20%' }}
        defaultValue="0571"
      />
      <Input
        style={{ width: '30%' }}
        defaultValue="26888888"
      />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input
        style={{ width: 'calc(100% - 200px)' }}
        defaultValue="https://ant.design"
      />
      <Button type="primary">Submit</Button>
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input
        style={{ width: 'calc(100% - 200px)' }}
        defaultValue="git@github.com:ant-design/ant-design.git"
      />
      <Tooltip title="copy git url">
        <Button icon={<CopyOutlined />} />
      </Tooltip>
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select defaultValue="Zhejiang">
        <Option value="Zhejiang">Zhejiang</Option>
        <Option value="Jiangsu">Jiangsu</Option>
      </Select>
      <Input
        style={{ width: '50%' }}
        defaultValue="Xihu District, Hangzhou"
      />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input.Search
        allowClear
        style={{ width: '40%' }}
        defaultValue="0571"
      />
      <Input.Search
        allowClear
        style={{ width: '40%' }}
        defaultValue="26888888"
      />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select defaultValue="Option1">
        <Option value="Option1">Option1</Option>
        <Option value="Option2">Option2</Option>
      </Select>
      <Input
        style={{ width: '50%' }}
        defaultValue="input content"
      />
      <InputNumber />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input
        style={{ width: '50%' }}
        defaultValue="input content"
      />
      <DatePicker style={{ width: '50%' }} />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input
        style={{ width: '30%' }}
        defaultValue="input content"
      />
      <DatePicker.RangePicker
        style={{ width: '70%' }}
      />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select defaultValue="Option1-1">
        <Option value="Option1-1">
          Option1-1
        </Option>
        <Option value="Option1-2">
          Option1-2
        </Option>
      </Select>
      <Select defaultValue="Option2-2">
        <Option value="Option2-1">
          Option2-1
        </Option>
        <Option value="Option2-2">
          Option2-2
        </Option>
      </Select>
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select defaultValue="1">
        <Option value="1">Between</Option>
        <Option value="2">Except</Option>
      </Select>
      <Input
        style={{
          width: 100,
          textAlign: 'center'
        }}
        placeholder="Minimum"
      />
      <Input
        className="site-input-split"
        style={{
          width: 30,
          borderLeft: 0,
          borderRight: 0,
          pointerEvents: 'none'
        }}
        placeholder="~"
        disabled
      />
      <Input
        className="site-input-right"
        style={{
          width: 100,
          textAlign: 'center'
        }}
        placeholder="Maximum"
      />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select
        defaultValue="Sign Up"
        style={{ width: '30%' }}
      >
        <Option value="Sign Up">Sign Up</Option>
        <Option value="Sign In">Sign In</Option>
      </Select>
      <AutoComplete
        style={{ width: '70%' }}
        placeholder="Email"
        options={[
          { value: 'text 1' },
          { value: 'text 2' }
        ]}
      />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select
        style={{ width: '30%' }}
        defaultValue="Home"
      >
        <Option value="Home">Home</Option>
        <Option value="Company">Company</Option>
      </Select>
      <Cascader
        style={{ width: '70%' }}
        options={options}
        placeholder="Select Address"
      />
    </Input.Group>
  </div>
)

export default App`,Qa=`import { AudioOutlined } from '@ant-design/icons'
import { Input, Space } from 'antd-packages'
import React from 'react'

const { Search } = Input

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff'
    }}
  />
)

const onSearch = (value: string) =>
  console.log(value)

const App: React.FC = () => (
  <Space direction="vertical">
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{ width: 200 }}
    />
    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{ width: 200 }}
    />
    <Search
      addonBefore="https://"
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{ width: 304 }}
    />
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      enterButton
    />
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>
)

export default App`,Xa=`import { Input } from 'antd-packages'
import React from 'react'

const { Search } = Input

const App: React.FC = () => (
  <>
    <Search
      placeholder="input search loading default"
      loading
    />
    <br />
    <br />
    <Search
      placeholder="input search loading with enterButton"
      loading
      enterButton
    />
    <br />
    <br />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      loading
    />
  </>
)

export default App`,qa=`import { Input } from 'antd-packages'
import React from 'react'

const { TextArea } = Input

const App: React.FC = () => (
  <>
    <TextArea rows={4} />
    <br />
    <br />
    <TextArea
      rows={4}
      placeholder="maxLength is 6"
      maxLength={6}
    />
  </>
)

export default App`,_a=`/**
 * title: \u9002\u5E94\u6587\u672C\u9AD8\u5EA6\u7684\u6587\u672C\u57DF
 * desc: \`autoSize\`\u5C5E\u6027\u9002\u7528\u4E8E\`textarea\`\u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916\`autoSize\`\u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002
 */

import { Input } from 'antd-packages'
import React, { useState } from 'react'

const { TextArea } = Input

const App: React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <TextArea
        placeholder="Autosize height based on content lines"
        autoSize
      />
      <div style={{ margin: '24px 0' }} />
      <TextArea
        placeholder="Autosize height with minimum and maximum number of lines"
        autoSize={{ minRows: 2, maxRows: 6 }}
      />
      <div style={{ margin: '24px 0' }} />
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Controlled autosize"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
    </>
  )
}

export default App`,nr=`import { Input, Tooltip } from 'antd-packages'
import React, { useState } from 'react'

interface NumericInputProps {
  style: React.CSSProperties
  value: string
  onChange: (value: string) => void
}

const formatNumber = (value: number) =>
  new Intl.NumberFormat().format(value)

const NumericInput = (
  props: NumericInputProps
) => {
  const { value, onChange } = props

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value: inputValue } = e.target
    const reg = /^-?\\d*(\\.\\d*)?$/
    if (
      reg.test(inputValue) ||
      inputValue === '' ||
      inputValue === '-'
    ) {
      onChange(inputValue)
    }
  }

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value
    if (
      value.charAt(value.length - 1) === '.' ||
      value === '-'
    ) {
      valueTemp = value.slice(0, -1)
    }
    onChange(valueTemp.replace(/0*(\\d+)/, '$1'))
  }

  const title = value ? (
    <span className="numeric-input-title">
      {value !== '-'
        ? formatNumber(Number(value))
        : '-'}
    </span>
  ) : (
    'Input a number'
  )

  return (
    <Tooltip
      trigger={['focus']}
      title={title}
      placement="topLeft"
      overlayClassName="numeric-input"
    >
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Input a number"
        maxLength={25}
      />
    </Tooltip>
  )
}

const App: React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <NumericInput
      style={{ width: 120 }}
      value={value}
      onChange={setValue}
    />
  )
}

export default App`,er=`import {
  InfoCircleOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Input, Tooltip } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Input
      placeholder="Enter your username"
      prefix={
        <UserOutlined className="site-form-item-icon" />
      }
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined
            style={{ color: 'rgba(0,0,0,.45)' }}
          />
        </Tooltip>
      }
    />
    <br />
    <br />
    <Input prefix="\uFFE5" suffix="RMB" />
    <br />
    <br />
    <Input prefix="\uFFE5" suffix="RMB" disabled />
  </>
)

export default App`,tr=`import {
  EyeInvisibleOutlined,
  EyeTwoTone
} from '@ant-design/icons'
import { Input, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space direction="vertical">
    <Input.Password placeholder="input password" />
    <Input.Password
      placeholder="input password"
      iconRender={(visible) =>
        visible ? (
          <EyeTwoTone />
        ) : (
          <EyeInvisibleOutlined />
        )
      }
    />
  </Space>
)

export default App`,ar=`import { Input } from 'antd-packages'
import React from 'react'

const { TextArea } = Input

const onChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >
) => {
  console.log(e)
}

const App: React.FC = () => (
  <>
    <Input
      placeholder="input with clear icon"
      allowClear
      onChange={onChange}
    />
    <br />
    <br />
    <TextArea
      placeholder="textarea with clear icon"
      allowClear
      onChange={onChange}
    />
  </>
)

export default App`,rr=`import { Input } from 'antd-packages'
import React from 'react'

const { TextArea } = Input

const onChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >
) => {
  console.log('Change:', e.target.value)
}

const App: React.FC = () => (
  <>
    <Input
      showCount
      maxLength={20}
      onChange={onChange}
    />
    <br />
    <br />
    <TextArea
      showCount
      maxLength={100}
      onChange={onChange}
    />
  </>
)

export default App`,or=`import { Input } from 'antd-packages'
import React from 'react'

const { TextArea } = Input

const onChange = (
  e: React.ChangeEvent<HTMLTextAreaElement>
) => {
  console.log('Change:', e.target.value)
}

const App: React.FC = () => (
  <TextArea
    showCount
    maxLength={100}
    style={{ height: 120 }}
    onChange={onChange}
  />
)

export default App`,sr=`import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined'
import { Input, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space
    direction="vertical"
    style={{ width: '100%' }}
  >
    <Input status="error" placeholder="Error" />
    <Input
      status="warning"
      placeholder="Warning"
    />
    <Input
      status="error"
      prefix={<ClockCircleOutlined />}
      placeholder="Error with prefix"
    />
    <Input
      status="warning"
      prefix={<ClockCircleOutlined />}
      placeholder="Warning with prefix"
    />
  </Space>
)

export default App`,ir=`import { Input } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Input
    placeholder="Borderless"
    bordered={false}
  />
)

export default App`,lr=`import type { InputRef } from 'antd-packages'

import {
  Button,
  Input,
  Space,
  Switch
} from 'antd-packages'
import React, { useRef, useState } from 'react'

const App: React.FC = () => {
  const inputRef = useRef<InputRef>(null)
  const [input, setInput] = useState(true)

  const sharedProps = {
    style: { width: '100%' },
    defaultValue: 'Ant Design love you!',
    ref: inputRef
  }

  return (
    <Space
      direction="vertical"
      style={{ width: '100%' }}
    >
      <Space wrap>
        <Button
          onClick={() => {
            inputRef.current!.focus({
              cursor: 'start'
            })
          }}
        >
          Focus at first
        </Button>
        <Button
          onClick={() => {
            inputRef.current!.focus({
              cursor: 'end'
            })
          }}
        >
          Focus at last
        </Button>
        <Button
          onClick={() => {
            inputRef.current!.focus({
              cursor: 'all'
            })
          }}
        >
          Focus to select all
        </Button>
        <Button
          onClick={() => {
            inputRef.current!.focus({
              preventScroll: true
            })
          }}
        >
          Focus prevent scroll
        </Button>
        <Switch
          checked={input}
          checkedChildren="Input"
          unCheckedChildren="TextArea"
          onChange={() => {
            setInput(!input)
          }}
        />
      </Space>
      <br />
      {input ? (
        <Input {...sharedProps} />
      ) : (
        <Input.TextArea {...sharedProps} />
      )}
    </Space>
  )
}

export default App`,dr=`import { Input } from 'antd-packages'
import React from 'react'

const { TextArea } = Input

const App: React.FC = () => (
  <div
    style={{
      backgroundColor: 'rgba(0, 0, 128, .2)'
    }}
  >
    <Input
      placeholder="Unbordered"
      bordered={false}
    />
    <Input
      placeholder="Unbordered"
      bordered={false}
      size="large"
    />
    <TextArea
      placeholder="Unbordered"
      bordered={false}
    />
    <TextArea
      placeholder="Unbordered"
      bordered={false}
      allowClear
    />
    <Input
      placeholder="Unbordered"
      bordered={false}
      allowClear
    />
    <Input
      prefix="\uFFE5"
      suffix="RMB"
      bordered={false}
    />
    <Input
      prefix="\uFFE5"
      suffix="RMB"
      disabled
      bordered={false}
    />
  </div>
)

export default App`,cr=`import {
  AutoComplete,
  Button,
  Cascader,
  DatePicker,
  Input,
  InputNumber,
  Mentions,
  Radio,
  Select,
  TimePicker,
  TreeSelect,
  Typography
} from 'antd-packages'
import React from 'react'

const { Text } = Typography
const { Option } = Select
const { RangePicker } = DatePicker

const narrowStyle = {
  width: 50
}

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

const App: React.FC = () => (
  <>
    <Mentions style={{ width: 100 }} rows={1} />
    <Input.TextArea
      rows={1}
      style={{ width: 100 }}
    />
    <Button type="primary">Button</Button>
    <Input style={{ width: 100 }} />
    <Text copyable>Ant Design</Text>
    <Input
      prefix="1"
      suffix="2"
      style={{ width: 100 }}
    />
    <Input
      addonBefore="1"
      addonAfter="2"
      style={{ width: 100 }}
    />
    <InputNumber style={{ width: 100 }} />
    <DatePicker style={{ width: 100 }} />
    <TimePicker style={{ width: 100 }} />
    <Select
      style={{ width: 100 }}
      defaultValue="jack"
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <TreeSelect style={{ width: 100 }} />
    <Cascader
      defaultValue={[
        'zhejiang',
        'hangzhou',
        'xihu'
      ]}
      options={options}
    />
    <RangePicker />
    <DatePicker picker="month" />
    <Radio.Group defaultValue="a">
      <Radio.Button value="a">
        Hangzhou
      </Radio.Button>
      <Radio.Button value="b">
        Shanghai
      </Radio.Button>
    </Radio.Group>
    <AutoComplete
      style={{ width: 100 }}
      placeholder="input here"
    />
    <br />
    <Input
      prefix="$"
      addonBefore="Http://"
      addonAfter=".com"
      defaultValue="mysite"
    />
    <Input style={narrowStyle} suffix="Y" />
    <Input style={narrowStyle} />
    <Input
      style={narrowStyle}
      defaultValue="1"
      suffix="Y"
    />
  </>
)

export default App`,pr=`import { Button, Input } from 'antd-packages'
import React, { useState } from 'react'

const { TextArea } = Input

const defaultValue =
  'The autoSize property applies to textarea nodes, and only the height changes automatically. In addition, autoSize can be set to an object, specifying the minimum number of rows and the maximum number of rows. The autoSize property applies to textarea nodes, and only the height changes automatically. In addition, autoSize can be set to an object, specifying the minimum number of rows and the maximum number of rows.'

const App: React.FC = () => {
  const [autoResize, setAutoResize] =
    useState(false)

  return (
    <>
      <Button
        onClick={() => setAutoResize(!autoResize)}
        style={{ marginBottom: 16 }}
      >
        Auto Resize: {String(autoResize)}
      </Button>
      <TextArea
        rows={4}
        autoSize={autoResize}
        defaultValue={defaultValue}
      />
      <TextArea
        allowClear
        style={{ width: 93 }}
      />
    </>
  )
}

export default App`,ur=`import { InputNumber } from 'antd-packages'
import React from 'react'

const onChange = (value: number) => {
  console.log('changed', value)
}

const App: React.FC = () => (
  <InputNumber
    min={1}
    max={10}
    defaultValue={3}
    onChange={onChange}
  />
)

export default App`,mr=`import { InputNumber, Space } from 'antd-packages'
import React from 'react'

const onChange = (value: number) => {
  console.log('changed', value)
}

const App: React.FC = () => (
  <Space>
    <InputNumber
      size="large"
      min={1}
      max={100000}
      defaultValue={3}
      onChange={onChange}
    />
    <InputNumber
      min={1}
      max={100000}
      defaultValue={3}
      onChange={onChange}
    />
    <InputNumber
      size="small"
      min={1}
      max={100000}
      defaultValue={3}
      onChange={onChange}
    />
  </Space>
)

export default App`,gr=`import { SettingOutlined } from '@ant-design/icons'
import {
  Cascader,
  InputNumber,
  Select,
  Space
} from 'antd-packages'
import React from 'react'

const { Option } = Select

const selectBefore = (
  <Select
    defaultValue="add"
    style={{ width: 60 }}
  >
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
  </Select>
)
const selectAfter = (
  <Select
    defaultValue="USD"
    style={{ width: 60 }}
  >
    <Option value="USD">$</Option>
    <Option value="EUR">\u20AC</Option>
    <Option value="GBP">\xA3</Option>
    <Option value="CNY">\xA5</Option>
  </Select>
)

const App: React.FC = () => (
  <Space direction="vertical">
    <InputNumber
      addonBefore="+"
      addonAfter="$"
      defaultValue={100}
    />
    <InputNumber
      addonBefore={selectBefore}
      addonAfter={selectAfter}
      defaultValue={100}
    />
    <InputNumber
      addonAfter={<SettingOutlined />}
      defaultValue={100}
    />
    <InputNumber
      addonBefore={
        <Cascader
          placeholder="cascader"
          style={{ width: 150 }}
        />
      }
      defaultValue={100}
    />
  </Space>
)

export default App`,fr=`import { Button, InputNumber } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true)

  const toggle = () => {
    setDisabled(!disabled)
  }

  return (
    <>
      <InputNumber
        min={1}
        max={10}
        disabled={disabled}
        defaultValue={3}
      />
      <div style={{ marginTop: 20 }}>
        <Button onClick={toggle} type="primary">
          Toggle disabled
        </Button>
      </div>
    </>
  )
}

export default App`,vr=`import { InputNumber } from 'antd-packages'
import React from 'react'

const onChange = (value: string) => {
  console.log('changed', value)
}

const App: React.FC = () => (
  <InputNumber<string>
    style={{ width: 200 }}
    defaultValue="1"
    min="0"
    max="10"
    step="0.00000000000001"
    onChange={onChange}
    stringMode
  />
)

export default App`,hr=`import { InputNumber, Space } from 'antd-packages'
import React from 'react'

const onChange = (value: number | string) => {
  console.log('changed', value)
}

const App: React.FC = () => (
  <Space>
    <InputNumber
      defaultValue={1000}
      formatter={(value) =>
        \`$ \${value}\`.replace(
          /\\B(?=(\\d{3})+(?!\\d))/g,
          ','
        )
      }
      parser={(value) =>
        value!.replace(/\\$\\s?|(,*)/g, '')
      }
      onChange={onChange}
    />
    <InputNumber
      defaultValue={100}
      min={0}
      max={100}
      formatter={(value) => \`\${value}%\`}
      parser={(value) => value!.replace('%', '')}
      onChange={onChange}
    />
  </Space>
)

export default App`,yr=`import {
  Checkbox,
  InputNumber,
  Space
} from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [keyboard, setKeyboard] = useState(true)

  return (
    <Space>
      <InputNumber
        min={1}
        max={10}
        keyboard={keyboard}
        defaultValue={3}
      />
      <Checkbox
        onChange={() => {
          setKeyboard(!keyboard)
        }}
        checked={keyboard}
      >
        Toggle keyboard
      </Checkbox>
    </Space>
  )
}

export default App`,Cr=`import { InputNumber } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <InputNumber
    min={1}
    max={10}
    defaultValue={3}
    bordered={false}
  />
)

export default App`,wr=`import { Button, InputNumber, Space } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [value, setValue] = useState<
    string | number
  >('99')

  return (
    <Space>
      <InputNumber
        min={1}
        max={10}
        value={value}
        onChange={setValue}
      />
      <Button
        type="primary"
        onClick={() => {
          setValue(99)
        }}
      >
        Reset
      </Button>
    </Space>
  )
}

export default App`,kr=`import { UserOutlined } from '@ant-design/icons'
import { InputNumber } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <InputNumber
      prefix="\uFFE5"
      style={{ width: '100%' }}
    />
    <br />
    <br />
    <InputNumber
      addonBefore={<UserOutlined />}
      prefix="\uFFE5"
      style={{ width: '100%' }}
    />
    <br />
    <br />
    <InputNumber
      prefix="\uFFE5"
      disabled
      style={{ width: '100%' }}
    />
  </>
)

export default App`,br=`import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined'
import { InputNumber, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space
    direction="vertical"
    style={{ width: '100%' }}
  >
    <InputNumber
      status="error"
      style={{ width: '100%' }}
    />
    <InputNumber
      status="warning"
      style={{ width: '100%' }}
    />
    <InputNumber
      status="error"
      style={{ width: '100%' }}
      prefix={<ClockCircleOutlined />}
    />
    <InputNumber
      status="warning"
      style={{ width: '100%' }}
      prefix={<ClockCircleOutlined />}
    />
  </Space>
)

export default App`,Sr=`import {
  ArrowDownOutlined,
  ArrowUpOutlined
} from '@ant-design/icons'
import { InputNumber } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <InputNumber
    controls={{
      upIcon: <ArrowUpOutlined />,
      downIcon: <ArrowDownOutlined />
    }}
  />
)

export default App`,Pr=`import { Layout } from 'antd-packages'
import React from 'react'

const { Header, Footer, Sider, Content } = Layout

const App: React.FC = () => (
  <>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </>
)

export default App`,Rr=`import { Breadcrumb, Layout, Menu } from 'antd-packages'
import React from 'react'

const { Header, Content, Footer } = Layout

const App: React.FC = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(15)
          .fill(null)
          .map((_, index) => {
            const key = index + 1
            return {
              key,
              label: \`nav \${key}\`
            }
          })}
      />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        Content
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design \xA92018 Created by Ant UED
    </Footer>
  </Layout>
)

export default App`,Tr=`import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd-packages'
import { Breadcrumb, Layout, Menu } from 'antd-packages'
import React from 'react'

const { Header, Content, Sider } = Layout

const items1: MenuProps['items'] = [
  '1',
  '2',
  '3'
].map((key) => ({
  key,
  label: \`nav \${key}\`
}))

const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: \`sub\${key}\`,
    icon: React.createElement(icon),
    label: \`subnav \${key}\`,

    children: new Array(4)
      .fill(null)
      .map((_, j) => {
        const subKey = index * 4 + j + 1
        return {
          key: subKey,
          label: \`option\${subKey}\`
        }
      })
  }
})

const App: React.FC = () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
      />
    </Header>
    <Layout>
      <Sider
        width={200}
        className="site-layout-background"
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0
          }}
          items={items2}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
)

export default App`,xr=`import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd-packages'
import { Breadcrumb, Layout, Menu } from 'antd-packages'
import React from 'react'

const { Header, Content, Footer, Sider } = Layout

const items1: MenuProps['items'] = [
  '1',
  '2',
  '3'
].map((key) => ({
  key,
  label: \`nav \${key}\`
}))

const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: \`sub\${key}\`,
    icon: React.createElement(icon),
    label: \`subnav \${key}\`,

    children: new Array(4)
      .fill(null)
      .map((_, j) => {
        const subKey = index * 4 + j + 1
        return {
          key: subKey,
          label: \`option\${subKey}\`
        }
      })
  }
})

const App: React.FC = () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
      />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout
        className="site-layout-background"
        style={{ padding: '24px 0' }}
      >
        <Sider
          className="site-layout-background"
          width={200}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            items={items2}
          />
        </Sider>
        <Content
          style={{
            padding: '0 24px',
            minHeight: 280
          }}
        >
          Content
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design \xA92018 Created by Ant UED
    </Footer>
  </Layout>
)

export default App`,Ir=`import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd-packages'
import { Breadcrumb, Layout, Menu } from 'antd-packages'
import React, { useState } from 'react'

const { Header, Content, Footer, Sider } = Layout

type MenuItem =
  Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5')
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8')
  ]),
  getItem('Files', '9', <FileOutlined />)
]

const App: React.FC = () => {
  const [collapsed, setCollapsed] =
    useState(false)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) =>
          setCollapsed(value)
        }
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb
            style={{ margin: '16px 0' }}
          >
            <Breadcrumb.Item>
              User
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              Bill
            </Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design \xA92018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App`,Ar=`import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd-packages'
import React, { useState } from 'react'

const { Header, Sider, Content } = Layout

const App: React.FC = () => {
  const [collapsed, setCollapsed] =
    useState(false)

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1'
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2'
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3'
            }
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0 }}
        >
          {React.createElement(
            collapsed
              ? MenuUnfoldOutlined
              : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () =>
                setCollapsed(!collapsed)
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}

export default App`,Br=`import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd-packages'
import React from 'react'

const { Header, Content, Footer, Sider } = Layout

const App: React.FC = () => (
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken)
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={[
          UserOutlined,
          VideoCameraOutlined,
          UploadOutlined,
          UserOutlined
        ].map((icon, index) => ({
          key: String(index + 1),
          icon: React.createElement(icon),
          label: \`nav \${index + 1}\`
        }))}
      />
    </Sider>
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      />
      <Content style={{ margin: '24px 16px 0' }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design \xA92018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
)

export default App`,Dr=`import { Breadcrumb, Layout, Menu } from 'antd-packages'
import React from 'react'

const { Header, Content, Footer } = Layout

const App: React.FC = () => (
  <Layout>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%'
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3)
          .fill(null)
          .map((_, index) => ({
            key: String(index + 1),
            label: \`nav \${index + 1}\`
          }))}
      />
    </Header>
    <Content
      className="site-layout"
      style={{ padding: '0 50px', marginTop: 64 }}
    >
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380 }}
      >
        Content
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design \xA92018 Created by Ant UED
    </Footer>
  </Layout>
)

export default App`,Fr=`import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd-packages'
import { Layout, Menu } from 'antd-packages'
import React from 'react'

const { Header, Content, Footer, Sider } = Layout

const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: \`nav \${index + 1}\`
}))

const App: React.FC = () => (
  <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={items}
      />
    </Sider>
    <Layout
      className="site-layout"
      style={{ marginLeft: 200 }}
    >
      <Header
        className="site-layout-background"
        style={{ padding: 0 }}
      />
      <Content
        style={{
          margin: '24px 16px 0',
          overflow: 'initial'
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            textAlign: 'center'
          }}
        >
          ...
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design \xA92018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
)

export default App`,Or=`import {
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd-packages'
import { Layout, Menu } from 'antd-packages'
import React, { useState } from 'react'

const { Header, Sider, Content } = Layout

const items: MenuProps['items'] = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Option 1'
  },
  {
    key: '2',
    icon: <DesktopOutlined />,
    label: 'Option 2'
  },
  {
    key: 'sub1',
    icon: <UserOutlined />,
    label: 'User',
    children: [
      {
        key: '3',
        label: 'Tom'
      },
      {
        key: '4',
        label: 'Bill'
      },
      {
        key: '5',
        label: 'Alex'
      }
    ]
  },
  {
    key: 'sub2',
    icon: <TeamOutlined />,
    label: 'Team',
    children: [
      {
        key: '6',
        label: 'Team 1'
      },
      {
        key: '7',
        label: 'Team 2'
      }
    ]
  },
  {
    key: '9',
    icon: <FileOutlined />
  }
]

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['3']}
          defaultOpenKeys={['sub1']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          className="site-layout-background"
          style={{ padding: 0 }}
        >
          {React.createElement(
            collapsed
              ? MenuUnfoldOutlined
              : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () =>
                setCollapsed(!collapsed)
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}

export default App`,Lr=`import { Divider, List, Typography } from 'antd-packages'
import React from 'react'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
]

const App: React.FC = () => (
  <>
    <Divider orientation="left">
      Default Size
    </Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>
            [ITEM]
          </Typography.Text>{' '}
          {item}
        </List.Item>
      )}
    />
    <Divider orientation="left">
      Small Size
    </Divider>
    <List
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
    />
    <Divider orientation="left">
      Large Size
    </Divider>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
    />
  </>
)

export default App`,Nr=`import { Avatar, List } from 'antd-packages'
import React from 'react'

const data = [
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 2'
  },
  {
    title: 'Ant Design Title 3'
  },
  {
    title: 'Ant Design Title 4'
  }
]

const App: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" />
          }
          title={
            <a href="https://ant.design">
              {item.title}
            </a>
          }
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
)

export default App`,Mr=`import {
  Avatar,
  Button,
  List,
  Skeleton
} from 'antd-packages'
import React, { useEffect, useState } from 'react'

interface DataType {
  gender?: string
  name: {
    title?: string
    first?: string
    last?: string
  }
  email?: string
  picture: {
    large?: string
    medium?: string
    thumbnail?: string
  }
  nat?: string
  loading: boolean
}

const count = 3
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`

const App: React.FC = () => {
  const [initLoading, setInitLoading] =
    useState(true)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<DataType[]>([])
  const [list, setList] = useState<DataType[]>([])

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false)
        setData(res.results)
        setList(res.results)
      })
  }, [])

  const onLoadMore = () => {
    setLoading(true)
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {}
        }))
      )
    )
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results)
        setData(newData)
        setList(newData)
        setLoading(false)
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'))
      })
  }

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px'
        }}
      >
        <Button onClick={onLoadMore}>
          loading more
        </Button>
      </div>
    ) : null

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[
            <a key="list-loadmore-edit">edit</a>,
            <a key="list-loadmore-more">more</a>
          ]}
        >
          <Skeleton
            avatar
            title={false}
            loading={item.loading}
            active
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={item.picture.large}
                />
              }
              title={
                <a href="https://ant.design">
                  {item.name?.last}
                </a>
              }
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    />
  )
}

export default App`,zr=`import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined
} from '@ant-design/icons'
import { Avatar, List, Space } from 'antd-packages'
import React from 'react'

const data = Array.from({ length: 23 }).map(
  (_, i) => ({
    href: 'https://ant.design',
    title: \`ant design part \${i}\`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  })
)

const IconText = ({
  icon,
  text
}: {
  icon: React.FC
  text: string
}) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

const App: React.FC = () => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page)
      },
      pageSize: 3
    }}
    dataSource={data}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText
            icon={StarOutlined}
            text="156"
            key="list-vertical-star-o"
          />,
          <IconText
            icon={LikeOutlined}
            text="156"
            key="list-vertical-like-o"
          />,
          <IconText
            icon={MessageOutlined}
            text="2"
            key="list-vertical-message"
          />
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={
            <a href={item.href}>{item.title}</a>
          }
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
)

export default App`,Er=`import { Card, List } from 'antd-packages'
import React from 'react'

const data = [
  {
    title: 'Title 1'
  },
  {
    title: 'Title 2'
  },
  {
    title: 'Title 3'
  },
  {
    title: 'Title 4'
  }
]

const App: React.FC = () => (
  <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>
          Card content
        </Card>
      </List.Item>
    )}
  />
)

export default App`,$r=`import { Card, List } from 'antd-packages'
import React from 'react'

const data = [
  {
    title: 'Title 1'
  },
  {
    title: 'Title 2'
  },
  {
    title: 'Title 3'
  },
  {
    title: 'Title 4'
  },
  {
    title: 'Title 5'
  },
  {
    title: 'Title 6'
  }
]

const ListItem = () => (
  <List.Item>
    <Card title="title">Card content</Card>
  </List.Item>
)

const App: React.FC = () => (
  <>
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.title}>
            Card content
          </Card>
        </List.Item>
      )}
    />
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={() => <ListItem />}
    />
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={() => (
        <>
          <ListItem />
          <div />
        </>
      )}
    />
  </>
)

export default App`,Zr=`import { Card, List } from 'antd-packages'
import React from 'react'

const data = [
  {
    title: 'Title 1'
  },
  {
    title: 'Title 2'
  },
  {
    title: 'Title 3'
  },
  {
    title: 'Title 4'
  },
  {
    title: 'Title 5'
  },
  {
    title: 'Title 6'
  }
]

const App: React.FC = () => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>
          Card content
        </Card>
      </List.Item>
    )}
  />
)

export default App`,Vr=`import {
  Avatar,
  Divider,
  List,
  Skeleton
} from 'antd-packages'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

interface DataType {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  email: string
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  nat: string
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<DataType[]>([])

  const loadMoreData = () => {
    if (loading) {
      return
    }
    setLoading(true)
    fetch(
      'https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo'
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results])
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    loadMoreData()
  }, [])

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border:
          '1px solid rgba(140, 140, 140, 0.35)'
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={
          <Skeleton
            avatar
            paragraph={{ rows: 1 }}
            active
          />
        }
        endMessage={
          <Divider plain>
            It is all, nothing more \u{1F910}
          </Divider>
        }
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={item.picture.large}
                  />
                }
                title={
                  <a href="https://ant.design">
                    {item.name.last}
                  </a>
                }
                description={item.email}
              />
              <div>Content</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  )
}

export default App`,Kr=`import { Avatar, List, message } from 'antd-packages'
import VirtualList from 'rc-virtual-list'
import React, { useEffect, useState } from 'react'

interface UserItem {
  email: string
  gender: string
  name: {
    first: string
    last: string
    title: string
  }
  nat: string
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
}

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo'
const ContainerHeight = 400

const App: React.FC = () => {
  const [data, setData] = useState<UserItem[]>([])

  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results))
        message.success(
          \`\${body.results.length} more items loaded!\`
        )
      })
  }

  useEffect(() => {
    appendData()
  }, [])

  const onScroll = (
    e: React.UIEvent<HTMLElement, UIEvent>
  ) => {
    if (
      e.currentTarget.scrollHeight -
        e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData()
    }
  }

  return (
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item: UserItem) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={item.picture.large}
                />
              }
              title={
                <a href="https://ant.design">
                  {item.name.last}
                </a>
              }
              description={item.email}
            />
            <div>Content</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  )
}

export default App`,Ur=`import { Mentions } from 'antd-packages'
import type { OptionProps } from 'antd-packages/es/mentions'
import React from 'react'

const { Option } = Mentions

const onChange = (value: string) => {
  console.log('Change:', value)
}

const onSelect = (option: OptionProps) => {
  console.log('select', option)
}

const App: React.FC = () => (
  <Mentions
    style={{ width: '100%' }}
    onChange={onChange}
    onSelect={onSelect}
    defaultValue="@afc163"
  >
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>
)

export default App`,jr=`import { Mentions } from 'antd-packages'
import debounce from 'lodash/debounce'
import React, {
  useCallback,
  useRef,
  useState
} from 'react'

const { Option } = Mentions
const App: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<
    { login: string; avatar_url: string }[]
  >([])
  const ref = useRef<string>()

  const loadGithubUsers = (key: string) => {
    if (!key) {
      setUsers([])
      return
    }

    fetch(
      \`https://api.github.com/search/users?q=\${key}\`
    )
      .then((res) => res.json())
      .then(({ items = [] }) => {
        if (ref.current !== key) return

        setLoading(false)
        setUsers(items.slice(0, 10))
      })
  }

  const debounceLoadGithubUsers = useCallback(
    debounce(loadGithubUsers, 800),
    []
  )

  const onSearch = (search: string) => {
    console.log('Search:', search)
    ref.current = search
    setLoading(!!search)
    setUsers([])

    debounceLoadGithubUsers(search)
  }

  return (
    <Mentions
      style={{ width: '100%' }}
      loading={loading}
      onSearch={onSearch}
    >
      {users.map(
        ({ login, avatar_url: avatar }) => (
          <Option
            key={login}
            value={login}
            className="antd-demo-dynamic-option"
          >
            <img src={avatar} alt={login} />
            <span>{login}</span>
          </Option>
        )
      )}
    </Mentions>
  )
}

export default App`,Hr=`import { Button, Form, Mentions } from 'antd-packages'
import React from 'react'

const { Option, getMentions } = Mentions

const App: React.FC = () => {
  const [form] = Form.useForm()

  const onReset = () => {
    form.resetFields()
  }

  const onFinish = async () => {
    try {
      const values = await form.validateFields()
      console.log('Submit:', values)
    } catch (errInfo) {
      console.log('Error:', errInfo)
    }
  }

  const checkMention = async (
    _: any,
    value: string
  ) => {
    const mentions = getMentions(value)

    if (mentions.length < 2) {
      throw new Error(
        'More than one must be selected!'
      )
    }
  }

  return (
    <Form
      form={form}
      layout="horizontal"
      onFinish={onFinish}
    >
      <Form.Item
        name="coders"
        label="Top coders"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        rules={[{ validator: checkMention }]}
      >
        <Mentions rows={1}>
          <Option value="afc163">afc163</Option>
          <Option value="zombieJ">zombieJ</Option>
          <Option value="yesmeck">yesmeck</Option>
        </Mentions>
      </Form.Item>
      <Form.Item
        name="bio"
        label="Bio"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        rules={[{ required: true }]}
      >
        <Mentions
          rows={3}
          placeholder="You can use @ to ref user here"
        >
          <Option value="afc163">afc163</Option>
          <Option value="zombieJ">zombieJ</Option>
          <Option value="yesmeck">yesmeck</Option>
        </Mentions>
      </Form.Item>
      <Form.Item
        wrapperCol={{ span: 14, offset: 6 }}
      >
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          htmlType="button"
          onClick={onReset}
        >
          Reset
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App`,Gr=`import { Mentions } from 'antd-packages'
import React, { useState } from 'react'

const { Option } = Mentions

const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0']
}

type PrefixType = keyof typeof MOCK_DATA

const App: React.FC = () => {
  const [prefix, setPrefix] =
    useState<PrefixType>('@')

  const onSearch = (
    _: string,
    newPrefix: PrefixType
  ) => {
    setPrefix(newPrefix)
  }

  return (
    <Mentions
      style={{ width: '100%' }}
      placeholder="input @ to mention people, # to mention tag"
      prefix={['@', '#']}
      onSearch={onSearch}
    >
      {(MOCK_DATA[prefix] || []).map((value) => (
        <Option key={value} value={value}>
          {value}
        </Option>
      ))}
    </Mentions>
  )
}

export default App`,Jr=`import { Mentions } from 'antd-packages'
import React from 'react'

const { Option } = Mentions

const getOptions = () =>
  ['afc163', 'zombiej', 'yesmeck'].map(
    (value) => (
      <Option key={value} value={value}>
        {value}
      </Option>
    )
  )

const App: React.FC = () => (
  <>
    <div style={{ marginBottom: 10 }}>
      <Mentions
        style={{ width: '100%' }}
        placeholder="this is disabled Mentions"
        disabled
      >
        {getOptions()}
      </Mentions>
    </div>
    <Mentions
      style={{ width: '100%' }}
      placeholder="this is readOnly Mentions"
      readOnly
    >
      {getOptions()}
    </Mentions>
  </>
)

export default App`,Yr=`import { Mentions } from 'antd-packages'
import React from 'react'

const { Option } = Mentions

const App: React.FC = () => (
  <Mentions
    style={{ width: '100%' }}
    placement="top"
  >
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>
)

export default App`,Wr=`import { Mentions } from 'antd-packages'
import React from 'react'

const { Option } = Mentions

const App: React.FC = () => (
  <Mentions autoSize style={{ width: '100%' }}>
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>
)

export default App`,Qr=`import { Mentions, Space } from 'antd-packages'
import type { OptionProps } from 'antd-packages/es/mentions'
import React from 'react'

const { Option } = Mentions

const onChange = (value: string) => {
  console.log('Change:', value)
}

const onSelect = (option: OptionProps) => {
  console.log('select', option)
}

const App: React.FC = () => {
  const options = (
    <>
      <Option value="afc163">afc163</Option>
      <Option value="zombieJ">zombieJ</Option>
      <Option value="yesmeck">yesmeck</Option>
    </>
  )

  return (
    <Space direction="vertical">
      <Mentions
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
        status="error"
      >
        {options}
      </Mentions>
      <Mentions
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
        status="warning"
      >
        {options}
      </Mentions>
    </Space>
  )
}

export default App`,Xr=`import { Menu } from 'antd-packages'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from '@ant-design/icons'

const App = () => (
  <Menu
    mode="horizontal"
    defaultSelectedKeys={['mail']}
  >
    <Menu.Item key="mail" icon={<MailOutlined />}>
      Navigation One
    </Menu.Item>
    <Menu.SubMenu
      key="SubMenu"
      title="Navigation Two - Submenu"
      icon={<SettingOutlined />}
    >
      <Menu.Item
        key="two"
        icon={<AppstoreOutlined />}
      >
        Navigation Two
      </Menu.Item>
      <Menu.Item
        key="three"
        icon={<AppstoreOutlined />}
      >
        Navigation Three
      </Menu.Item>
      <Menu.ItemGroup title="Item Group">
        <Menu.Item
          key="four"
          icon={<AppstoreOutlined />}
        >
          Navigation Four
        </Menu.Item>
        <Menu.Item
          key="five"
          icon={<AppstoreOutlined />}
        >
          Navigation Five
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
  </Menu>
)

export default App`,qr=`import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd-packages'
import { Menu } from 'antd-packages'
import React, { useState } from 'react'

const items: MenuProps['items'] = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1'
          },
          {
            label: 'Option 2',
            key: 'setting:2'
          }
        ]
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3'
          },
          {
            label: 'Option 4',
            key: 'setting:4'
          }
        ]
      }
    ]
  },
  {
    label: (
      <a
        href="https://ant.design"
        target="_blank"
        rel="noopener noreferrer"
      >
        Navigation Four - Link
      </a>
    ),
    key: 'alipay'
  }
]

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  )
}

export default App`,_r=`import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd-packages'
import { Menu } from 'antd-packages'
import React from 'react'

type MenuItem =
  Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem(
    'Navigation One',
    'sub1',
    <MailOutlined />,
    [
      getItem(
        'Item 1',
        'g1',
        null,
        [
          getItem('Option 1', '1'),
          getItem('Option 2', '2')
        ],
        'group'
      ),
      getItem(
        'Item 2',
        'g2',
        null,
        [
          getItem('Option 3', '3'),
          getItem('Option 4', '4')
        ],
        'group'
      )
    ]
  ),

  getItem(
    'Navigation Two',
    'sub2',
    <AppstoreOutlined />,
    [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [
        getItem('Option 7', '7'),
        getItem('Option 8', '8')
      ])
    ]
  ),

  getItem(
    'Navigation Three',
    'sub4',
    <SettingOutlined />,
    [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12')
    ]
  )
]

const App: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
  }

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  )
}

export default App`,no=`import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd-packages'
import { Button, Menu } from 'antd-packages'
import React, { useState } from 'react'

type MenuItem =
  Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),

  getItem(
    'Navigation One',
    'sub1',
    <MailOutlined />,
    [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Option 7', '7'),
      getItem('Option 8', '8')
    ]
  ),

  getItem(
    'Navigation Two',
    'sub2',
    <AppstoreOutlined />,
    [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),

      getItem('Submenu', 'sub3', null, [
        getItem('Option 11', '11'),
        getItem('Option 12', '12')
      ])
    ]
  )
]

const App: React.FC = () => {
  const [collapsed, setCollapsed] =
    useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div style={{ width: 256 }}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? (
          <MenuUnfoldOutlined />
        ) : (
          <MenuFoldOutlined />
        )}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  )
}

export default App`,eo=`import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd-packages'
import { Menu } from 'antd-packages'
import React, { useState } from 'react'

type MenuItem =
  Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuItem[] = [
  getItem(
    'Navigation One',
    'sub1',
    <MailOutlined />,
    [
      getItem('Option 1', '1'),
      getItem('Option 2', '2'),
      getItem('Option 3', '3'),
      getItem('Option 4', '4')
    ]
  ),
  getItem(
    'Navigation Two',
    'sub2',
    <AppstoreOutlined />,
    [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [
        getItem('Option 7', '7'),
        getItem('Option 8', '8')
      ])
    ]
  ),
  getItem(
    'Navigation Three',
    'sub4',
    <SettingOutlined />,
    [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12')
    ]
  )
]

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

const App: React.FC = () => {
  const [openKeys, setOpenKeys] = useState([
    'sub1'
  ])

  const onOpenChange: MenuProps['onOpenChange'] =
    (keys) => {
      const latestOpenKey = keys.find(
        (key) => openKeys.indexOf(key) === -1
      )
      if (
        rootSubmenuKeys.indexOf(
          latestOpenKey!
        ) === -1
      ) {
        setOpenKeys(keys)
      } else {
        setOpenKeys(
          latestOpenKey ? [latestOpenKey] : []
        )
      }
    }

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256 }}
      items={items}
    />
  )
}

export default App`,to=`import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd-packages'
import { Menu } from 'antd-packages'
import React from 'react'

type MenuItem =
  Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuItem[] = [
  getItem(
    'Navigation One',
    'sub1',
    <MailOutlined />,
    [
      getItem(
        'Item 1',
        null,
        null,
        [
          getItem('Option 1', '1'),
          getItem('Option 2', '2')
        ],
        'group'
      ),
      getItem(
        'Item 2',
        null,
        null,
        [
          getItem('Option 3', '3'),
          getItem('Option 4', '4')
        ],
        'group'
      )
    ]
  ),

  getItem(
    'Navigation Two',
    'sub2',
    <AppstoreOutlined />,
    [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [
        getItem('Option 7', '7'),
        getItem('Option 8', '8')
      ])
    ]
  ),

  getItem(
    'Navigation Three',
    'sub4',
    <SettingOutlined />,
    [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12')
    ]
  )
]

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
}

const App: React.FC = () => (
  <Menu
    onClick={onClick}
    style={{ width: 256 }}
    mode="vertical"
    items={items}
  />
)

export default App`,ao=`import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import type { MenuProps, MenuTheme } from 'antd-packages'
import { Menu, Switch } from 'antd-packages'
import React, { useState } from 'react'

type MenuItem =
  Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuItem[] = [
  getItem(
    'Navigation One',
    'sub1',
    <MailOutlined />,
    [
      getItem('Option 1', '1'),
      getItem('Option 2', '2'),
      getItem('Option 3', '3'),
      getItem('Option 4', '4')
    ]
  ),

  getItem(
    'Navigation Two',
    'sub2',
    <AppstoreOutlined />,
    [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [
        getItem('Option 7', '7'),
        getItem('Option 8', '8')
      ])
    ]
  ),

  getItem(
    'Navigation Three',
    'sub4',
    <SettingOutlined />,
    [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12')
    ]
  )
]

const App: React.FC = () => {
  const [theme, setTheme] =
    useState<MenuTheme>('dark')
  const [current, setCurrent] = useState('1')

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light')
  }

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        style={{ width: 256 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  )
}

export default App`,ro=`import { MailOutlined } from '@ant-design/icons'
import type { MenuProps, MenuTheme } from 'antd-packages'
import { Menu, Switch } from 'antd-packages'
import React, { useState } from 'react'

type MenuItem =
  Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  theme?: 'light' | 'dark'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    theme
  } as MenuItem
}

const App: React.FC = () => {
  const [theme, setTheme] =
    useState<MenuTheme>('light')
  const [current, setCurrent] = useState('1')

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light')
  }

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
  }

  const items: MenuItem[] = [
    getItem(
      'Navigation One',
      'sub1',
      <MailOutlined />,
      [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
        getItem('Option 3', '3')
      ],
      theme
    ),
    getItem('Option 5', '5'),
    getItem('Option 6', '6')
  ]

  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="vertical"
        theme="dark"
        items={items}
      />
    </>
  )
}

export default App`,oo=`import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { Divider, Menu, Switch } from 'antd-packages'
import type {
  MenuProps,
  MenuTheme
} from 'antd-packages/es/menu'
import React, { useState } from 'react'

type MenuItem =
  Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem(
    'Navigation One',
    '1',
    <MailOutlined />
  ),
  getItem(
    'Navigation Two',
    '2',
    <CalendarOutlined />
  ),
  getItem(
    'Navigation Two',
    'sub1',
    <AppstoreOutlined />,
    [
      getItem('Option 3', '3'),
      getItem('Option 4', '4'),
      getItem('Submenu', 'sub1-2', null, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6')
      ])
    ]
  ),
  getItem(
    'Navigation Three',
    'sub2',
    <SettingOutlined />,
    [
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
      getItem('Option 9', '9'),
      getItem('Option 10', '10')
    ]
  ),
  getItem(
    <a
      href="https://ant.design"
      target="_blank"
      rel="noopener noreferrer"
    >
      Ant Design
    </a>,
    'link',
    <LinkOutlined />
  )
]

const App: React.FC = () => {
  const [mode, setMode] = useState<
    'vertical' | 'inline'
  >('inline')
  const [theme, setTheme] =
    useState<MenuTheme>('light')

  const changeMode = (value: boolean) => {
    setMode(value ? 'vertical' : 'inline')
  }

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light')
  }

  return (
    <>
      <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change
      Style
      <br />
      <br />
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        items={items}
      />
    </>
  )
}

export default App`,so=`import {
  AppstoreOutlined,
  MailOutlined
} from '@ant-design/icons'
import type { MenuProps, MenuTheme } from 'antd-packages'
import { Menu, Switch } from 'antd-packages'
import React, { useState } from 'react'

type MenuItem =
  Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem(
    'Navigation One Long Long Long Long',
    'sub1',
    <MailOutlined />,
    [
      getItem('Option 1', '1'),
      getItem('Option 2', '2'),
      getItem('Option 3', '3'),
      getItem('Option 4', '4')
    ]
  ),
  getItem(
    'Navigation Two',
    'sub2',
    <AppstoreOutlined />,
    [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [
        getItem('Option 7', '7'),
        getItem('Option 8', '8')
      ])
    ]
  ),
  getItem('Option 11', '11'),
  getItem('Option 12', '12')
]

const App: React.FC = () => {
  const [theme, setTheme] =
    useState<MenuTheme>('dark')
  const [current, setCurrent] = useState('1')

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light')
  }

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        inlineCollapsed
        // Test only. Remove in future.
        _internalRenderMenuItem={(node) =>
          React.cloneElement(node, {
            style: {
              ...node.props.style,
              textDecoration: 'underline'
            }
          })
        }
        // Test only. Remove in future.
        _internalRenderSubMenuItem={(node) =>
          React.cloneElement(node, {
            style: {
              ...node.props.style,
              background: 'rgba(255,255,255,0.3)'
            }
          })
        }
        // Test only. Remove in future.
        _internalDisableMenuItemTitleTooltip
      />
    </>
  )
}

export default App`,io=`import { Button, message } from 'antd-packages'
import React from 'react'

const info = () => {
  message.info('This is a normal message')
}

const App: React.FC = () => (
  <Button type="primary" onClick={info}>
    Display normal message
  </Button>
)

export default App`,lo=`import { Button, message, Space } from 'antd-packages'
import React from 'react'

const success = () => {
  message.success('This is a success message')
}

const error = () => {
  message.error('This is an error message')
}

const warning = () => {
  message.warning('This is a warning message')
}

const App: React.FC = () => (
  <Space>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </Space>
)

export default App`,co=`import { Button, message } from 'antd-packages'
import React from 'react'

const success = () => {
  message.success(
    'This is a prompt message for success, and it will disappear in 10 seconds',
    10
  )
}

const App: React.FC = () => (
  <Button onClick={success}>
    Customized display duration
  </Button>
)

export default App`,po=`import { Button, message } from 'antd-packages'
import React from 'react'

const success = () => {
  const hide = message.loading(
    'Action in progress..',
    0
  )
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500)
}

const App: React.FC = () => (
  <Button onClick={success}>
    Display a loading indicator
  </Button>
)

export default App`,uo=`import { Button, message } from 'antd-packages'
import React from 'react'

const success = () => {
  message
    .loading('Action in progress..', 2.5)
    .then(() =>
      message.success('Loading finished', 2.5)
    )
    .then(() =>
      message.info(
        'Loading finished is finished',
        2.5
      )
    )
}

const App: React.FC = () => (
  <Button onClick={success}>
    Display sequential messages
  </Button>
)

export default App`,mo=`import { Button, message } from 'antd-packages'
import React from 'react'

const key = 'updatable'

const openMessage = () => {
  message.loading({ content: 'Loading...', key })
  setTimeout(() => {
    message.success({
      content: 'Loaded!',
      key,
      duration: 2
    })
  }, 1000)
}

const App: React.FC = () => (
  <Button type="primary" onClick={openMessage}>
    Open the message box
  </Button>
)

export default App`,go=`import { Button, message } from 'antd-packages'
import React from 'react'

const success = () => {
  message.success({
    content:
      'This is a prompt message with custom className and style',
    className: 'custom-class',
    style: {
      marginTop: '20vh'
    }
  })
}

const App: React.FC = () => (
  <Button onClick={success}>
    Customized style
  </Button>
)

export default App`,fo=`import { Button, message } from 'antd-packages'
import React from 'react'

const Context = React.createContext({
  name: 'Default'
})

const App: React.FC = () => {
  const [messageApi, contextHolder] =
    message.useMessage()

  const info = () => {
    messageApi.open({
      type: 'info',
      content: (
        <Context.Consumer>
          {({ name }) => \`Hello, \${name}!\`}
        </Context.Consumer>
      ),
      duration: 1
    })
  }

  return (
    <Context.Provider
      value={{ name: 'Ant Design' }}
    >
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </Context.Provider>
  )
}

export default App`,vo=`import { Button, Modal } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [isModalVisible, setIsModalVisible] =
    useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default App`,ho=`import { Button, Modal } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] =
    useState(false)
  const [modalText, setModalText] = useState(
    'Content of the modal'
  )

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setModalText(
      'The modal will be closed after two seconds'
    )
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  )
}

export default App`,yo=`import { Button, Modal } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setVisible(false)
    }, 3000)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized footer
      </Button>
      <Modal
        visible={visible}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="back"
            onClick={handleCancel}
          >
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default App`,Co=`import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Button, Modal, Space } from 'antd-packages'
import React from 'react'

const { confirm } = Modal

const showConfirm = () => {
  confirm({
    title: 'Do you Want to delete these items?',
    icon: <ExclamationCircleOutlined />,
    content: 'Some descriptions',
    onOk() {
      console.log('OK')
    },
    onCancel() {
      console.log('Cancel')
    }
  })
}

const showPromiseConfirm = () => {
  confirm({
    title: 'Do you want to delete these items?',
    icon: <ExclamationCircleOutlined />,
    content:
      'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(
          Math.random() > 0.5 ? resolve : reject,
          1000
        )
      }).catch(() => console.log('Oops errors!'))
    },
    onCancel() {}
  })
}

const showDeleteConfirm = () => {
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleOutlined />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK')
    },
    onCancel() {
      console.log('Cancel')
    }
  })
}

const showPropsConfirm = () => {
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleOutlined />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    okButtonProps: {
      disabled: true
    },
    cancelText: 'No',
    onOk() {
      console.log('OK')
    },
    onCancel() {
      console.log('Cancel')
    }
  })
}

const App: React.FC = () => (
  <Space wrap>
    <Button onClick={showConfirm}>Confirm</Button>
    <Button onClick={showPromiseConfirm}>
      With promise
    </Button>
    <Button
      onClick={showDeleteConfirm}
      type="dashed"
    >
      Delete
    </Button>
    <Button
      onClick={showPropsConfirm}
      type="dashed"
    >
      With extra props
    </Button>
  </Space>
)

export default App`,wo=`import { Button, Modal, Space } from 'antd-packages'
import React from 'react'

const info = () => {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {}
  })
}

const success = () => {
  Modal.success({
    content: 'some messages...some messages...'
  })
}

const error = () => {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...'
  })
}

const warning = () => {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...'
  })
}

const App: React.FC = () => (
  <Space wrap>
    <Button onClick={info}>Info</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </Space>
)

export default App`,ko=`import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Button, Modal, Space } from 'antd-packages'
import React, { useState } from 'react'

const LocalizedModal = () => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const hideModal = () => {
    setVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Modal
      </Button>
      <Modal
        title="Modal"
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        okText="\u786E\u8BA4"
        cancelText="\u53D6\u6D88"
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </Modal>
    </>
  )
}

const confirm = () => {
  Modal.confirm({
    title: 'Confirm',
    icon: <ExclamationCircleOutlined />,
    content: 'Bla bla ...',
    okText: '\u786E\u8BA4',
    cancelText: '\u53D6\u6D88'
  })
}

const App: React.FC = () => (
  <Space>
    <LocalizedModal />
    <Button onClick={confirm}>Confirm</Button>
  </Space>
)

export default App`,bo=`import { Button, Modal } from 'antd-packages'
import React from 'react'

const countDown = () => {
  let secondsToGo = 5

  const modal = Modal.success({
    title: 'This is a notification message',
    content: \`This modal will be destroyed after \${secondsToGo} second.\`
  })

  const timer = setInterval(() => {
    secondsToGo -= 1
    modal.update({
      content: \`This modal will be destroyed after \${secondsToGo} second.\`
    })
  }, 1000)

  setTimeout(() => {
    clearInterval(timer)
    modal.destroy()
  }, secondsToGo * 1000)
}

const App: React.FC = () => (
  <Button onClick={countDown}>
    Open modal to close in 5s
  </Button>
)

export default App`,So=`import { Button, Modal } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [modal1Visible, setModal1Visible] =
    useState(false)
  const [modal2Visible, setModal2Visible] =
    useState(false)

  return (
    <>
      <Button
        type="primary"
        onClick={() => setModal1Visible(true)}
      >
        Display a modal dialog at 20px to Top
      </Button>
      <Modal
        title="20px to Top"
        style={{ top: 20 }}
        visible={modal1Visible}
        onOk={() => setModal1Visible(false)}
        onCancel={() => setModal1Visible(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
      <br />
      <br />
      <Button
        type="primary"
        onClick={() => setModal2Visible(true)}
      >
        Vertically centered modal dialog
      </Button>
      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={modal2Visible}
        onOk={() => setModal2Visible(false)}
        onCancel={() => setModal2Visible(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  )
}

export default App`,Po=`import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Button, Modal } from 'antd-packages'
import React from 'react'

const { confirm } = Modal

const destroyAll = () => {
  Modal.destroyAll()
}

const showConfirm = () => {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        icon: <ExclamationCircleOutlined />,
        content: (
          <Button onClick={destroyAll}>
            Click to destroy all
          </Button>
        ),
        onOk() {
          console.log('OK')
        },
        onCancel() {
          console.log('Cancel')
        }
      })
    }, i * 500)
  }
}

const App: React.FC = () => (
  <Button onClick={showConfirm}>Confirm</Button>
)

export default App`,Ro=`import { useState } from 'react'
import {
  Modal,
  DatePicker,
  Slider,
  Tree,
  Badge,
  Collapse,
  Timeline,
  Tabs,
  Anchor,
  Table,
  Card,
  Button,
  Calendar,
  Transfer,
  Switch,
  Typography,
  Dropdown
} from 'antd-packages'
import moment from 'moment'
import difference from 'lodash/difference'
import {
  DownOutlined,
  ClockCircleOutlined
} from '@ant-design/icons'

const { Panel } = Collapse
const { TreeNode } = Tree
const { TabPane } = Tabs
const { Meta } = Card
const { Link } = Anchor
const { Text } = Typography

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`

const mockData = []
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: \`content\${i + 1}\`,
    description: \`description of content\${i + 1}\`,
    disabled: i % 3 < 1
  })
}

const oriTargetKeys = mockData
  .filter((item) => +item.key % 3 > 1)
  .map((item) => item.key)

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
]

const columnsTable = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Borrow',
    dataIndex: 'borrow'
  },
  {
    title: 'Repayment',
    dataIndex: 'repayment'
  }
]

const dataTable = [
  {
    key: '1',
    name: 'John Brown',
    borrow: 10,
    repayment: 33
  },
  {
    key: '2',
    name: 'Jim Green',
    borrow: 100,
    repayment: 0
  },
  {
    key: '3',
    name: 'Joe Black',
    borrow: 10,
    repayment: 10
  },
  {
    key: '4',
    name: 'Jim Red',
    borrow: 75,
    repayment: 45
  }
]

const expandedRowRender = () => {
  const columnsExpand = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Status',
      key: 'state',
      render: () => (
        <span>
          <Badge status="success" />
          Finished
        </span>
      )
    },
    {
      title: 'Upgrade Status',
      dataIndex: 'upgradeNum',
      key: 'upgradeNum'
    },
    {
      title: 'Action',
      dataIndex: 'operation',
      key: 'operation',
      render: () => (
        <span className="table-operation">
          <a>Pause</a>
          <a>Stop</a>
          <Dropdown>
            <a>
              More <DownOutlined />
            </a>
          </Dropdown>
        </span>
      )
    }
  ]

  const dataExpand = []
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      date: '2014-12-24 23:12:00',
      name: 'This is production name',
      upgradeNum: 'Upgraded: 56'
    })
  }
  return (
    <Table
      columns={columnsExpand}
      dataSource={dataExpand}
      pagination={false}
    />
  )
}

const columnsNest = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Platform',
    dataIndex: 'platform',
    key: 'platform'
  },
  {
    title: 'Version',
    dataIndex: 'version',
    key: 'version'
  },
  {
    title: 'Upgraded',
    dataIndex: 'upgradeNum',
    key: 'upgradeNum'
  },
  {
    title: 'Creator',
    dataIndex: 'creator',
    key: 'creator'
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt'
  },
  {
    title: 'Action',
    key: 'operation',
    render: () => <a>Publish</a>
  }
]

const dataNest = []
for (let i = 0; i < 3; ++i) {
  dataNest.push({
    key: i,
    name: 'Screem',
    platform: 'iOS',
    version: '10.3.4.5654',
    upgradeNum: 500,
    creator: 'Jack',
    createdAt: '2014-12-24 23:12:00'
  })
}

const columnsFixed = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left'
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left'
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1'
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2'
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3'
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4'
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5'
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6'
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7'
  },
  {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8'
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>
  }
]

const dataFixed = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park'
  }
]

const TableTransfer = ({
  leftColumns,
  rightColumns,
  ...restProps
}) => (
  <Transfer {...restProps} showSelectAll={false}>
    {({
      direction,
      filteredItems,
      onItemSelectAll,
      onItemSelect,
      selectedKeys: listSelectedKeys,
      disabled: listDisabled
    }) => {
      const columns =
        direction === 'left'
          ? leftColumns
          : rightColumns

      const rowSelection = {
        getCheckboxProps: (item) => ({
          disabled: listDisabled || item.disabled
        }),
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows
            .filter((item) => !item.disabled)
            .map(({ key }) => key)
          const diffKeys = selected
            ? difference(
                treeSelectedKeys,
                listSelectedKeys
              )
            : difference(
                listSelectedKeys,
                treeSelectedKeys
              )
          onItemSelectAll(diffKeys, selected)
        },
        onSelect({ key }, selected) {
          onItemSelect(key, selected)
        },
        selectedRowKeys: listSelectedKeys
      }

      return (
        <Table
          id="components-transfer-table"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={filteredItems}
          size="small"
          style={{
            pointerEvents: listDisabled
              ? 'none'
              : null
          }}
          onRow={({
            key,
            disabled: itemDisabled
          }) => ({
            onClick: () => {
              if (itemDisabled || listDisabled)
                return
              onItemSelect(
                key,
                !listSelectedKeys.includes(key)
              )
            }
          })}
        />
      )
    }}
  </Transfer>
)

export default () => {
  const [visible, setVisible] = useState(false)
  const [targetKeys, setTargetKeys] = useState(
    oriTargetKeys
  )
  const [selectedKeys, setSelectedKeys] =
    useState([])
  const [disabled, setDisabled] = useState(false)
  const [showSearch, setShowSearch] =
    useState(false)

  const handleDisable = (isDisabled) => {
    setDisabled(isDisabled)
  }

  const handleTableTransferChange = (
    nextTargetKeys
  ) => {
    setTargetKeys(nextTargetKeys)
  }

  const triggerDisable = (isDisabled) => {
    setDisabled(isDisabled)
  }

  const triggerShowSearch = (isShowSearch) => {
    setShowSearch(isShowSearch)
  }

  const handleTransferChange = (
    nextTargetKeys
  ) => {
    setTargetKeys(nextTargetKeys)
  }

  const handleTransferSelectChange = (
    sourceSelectedKeys,
    targetSelectedKeys
  ) => {
    setSelectedKeys([
      ...sourceSelectedKeys,
      ...targetSelectedKeys
    ])
  }

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = (e) => {
    console.log(e)
    setVisible(false)
  }

  const handleCancel = (e) => {
    console.log(e)
    setVisible(false)
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' }
      ],
      filteredValue: null,
      onFilter: (value, record) =>
        record.name.includes(value),
      sorter: (a, b) =>
        a.name.length - b.name.length,
      sortOrder: true,
      ellipsis: true
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: false,
      sortOrder: true,
      ellipsis: true
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: [
        { text: 'London', value: 'London' },
        { text: 'New York', value: 'New York' }
      ],
      filteredValue: null,
      onFilter: (value, record) =>
        record.address.includes(value),
      sorter: false,
      sortOrder: true,
      ellipsis: true
    }
  ]
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Switch
          unCheckedChildren="disabled"
          checkedChildren="disabled"
          checked={disabled}
          onChange={handleDisable}
          style={{ marginBottom: 16 }}
        />
        <Card title="Card Title">
          <Card.Grid>Content</Card.Grid>
          <Card.Grid hoverable={false}>
            Content
          </Card.Grid>
          <Card.Grid>Content</Card.Grid>
          <Card.Grid>Content</Card.Grid>
          <Card.Grid>Content</Card.Grid>
          <Card.Grid>Content</Card.Grid>
          <Card.Grid>Content</Card.Grid>
        </Card>
        <Collapse>
          <Panel
            header="This is panel header 1"
            key="1"
          >
            <Collapse defaultActiveKey="1">
              <Panel
                header="This is panel nest panel"
                key="1"
              >
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Panel>
          <Panel
            header="This is panel header 2"
            key="2"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="This is panel header 3"
            key="3"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Transfer
          dataSource={mockData}
          titles={['Source', 'Target']}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          onChange={handleTransferChange}
          onSelectChange={
            handleTransferSelectChange
          }
          render={(item) => item.title}
          disabled={disabled}
        />
        <TableTransfer
          dataSource={mockData}
          targetKeys={targetKeys}
          disabled={disabled}
          showSearch={showSearch}
          onChange={handleTableTransferChange}
          filterOption={(inputValue, item) =>
            item.title.indexOf(inputValue) !==
              -1 ||
            item.tag?.indexOf(inputValue) !== -1
          }
          leftColumns={[
            {
              dataIndex: 'title',
              title: 'Name'
            },
            {
              dataIndex: 'description',
              title: 'Description'
            }
          ]}
          rightColumns={[
            {
              dataIndex: 'title',
              title: 'Name'
            }
          ]}
        />
        <Switch
          unCheckedChildren="disabled"
          checkedChildren="disabled"
          checked={disabled}
          onChange={triggerDisable}
          style={{ marginTop: 16 }}
        />
        <Switch
          unCheckedChildren="showSearch"
          checkedChildren="showSearch"
          checked={showSearch}
          onChange={triggerShowSearch}
          style={{ marginTop: 16 }}
        />
        <Anchor>
          <Link
            href="#components-anchor-demo-basic"
            title="Basic demo"
          />
          <Link
            href="#components-anchor-demo-static"
            title="Static demo"
          />
          <Link
            href="#components-anchor-demo-basic"
            title="Basic demo with Target"
            target="_blank"
          />
          <Link href="#API" title="API">
            <Link
              href="#Anchor-Props"
              title="Anchor Props"
            />
            <Link
              href="#Link-Props"
              title="Link Props"
            />
          </Link>
        </Anchor>
        <Tabs type="card">
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <Timeline>
          <Timeline.Item>
            Create a services site 2015-09-01
          </Timeline.Item>
          <Timeline.Item>
            Solve initial network problems
            2015-09-01
          </Timeline.Item>
          <Timeline.Item
            dot={
              <ClockCircleOutlined
                style={{ fontSize: '16px' }}
              />
            }
            color="red"
          >
            Technical testing 2015-09-01
          </Timeline.Item>
          <Timeline.Item>
            Network problems being solved
            2015-09-01
          </Timeline.Item>
        </Timeline>
        <Calendar />
        <Tree
          showLine
          switcherIcon={<DownOutlined />}
          defaultExpandedKeys={['0-0-0']}
        >
          <TreeNode title="parent 1" key="0-0">
            <TreeNode
              title="parent 1-0"
              key="0-0-0"
            >
              <TreeNode
                title="leaf"
                key="0-0-0-0"
              />
              <TreeNode
                title="leaf"
                key="0-0-0-1"
              />
              <TreeNode
                title="leaf"
                key="0-0-0-2"
              />
            </TreeNode>
            <TreeNode
              title="parent 1-1"
              key="0-0-1"
            >
              <TreeNode
                title="leaf"
                key="0-0-1-0"
              />
            </TreeNode>
            <TreeNode
              title="parent 1-2"
              key="0-0-2"
            >
              <TreeNode
                title="leaf"
                key="0-0-2-0"
              />
              <TreeNode
                title="leaf"
                key="0-0-2-1"
              />
            </TreeNode>
          </TreeNode>
        </Tree>
        <Table
          columns={columns}
          dataSource={data}
          footer={() => 'Footer'}
        />
        <Table
          columns={columnsTable}
          dataSource={dataTable}
          pagination={false}
          id="table-demo-summary"
          bordered
          summary={(pageData) => {
            let totalBorrow = 0
            let totalRepayment = 0

            pageData.forEach(
              ({ borrow, repayment }) => {
                totalBorrow += borrow
                totalRepayment += repayment
              }
            )

            return (
              <>
                <tr>
                  <th>Total</th>
                  <td>
                    <Text type="danger">
                      {totalBorrow}
                    </Text>
                  </td>
                  <td>
                    <Text>{totalRepayment}</Text>
                  </td>
                </tr>
                <tr>
                  <th>Balance</th>
                  <td colSpan={2}>
                    <Text type="danger">
                      {totalBorrow -
                        totalRepayment}
                    </Text>
                  </td>
                </tr>
              </>
            )
          }}
        />
        <br />
        <Table
          columns={columnsNest}
          expandable={{ expandedRowRender }}
          dataSource={dataNest}
        />
        <Table
          columns={columnsFixed}
          dataSource={dataFixed}
          scroll={{ x: 1300, y: 100 }}
        />
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta
            title="Europe Street beat"
            description="www.instagram.com"
          />
        </Card>
        <Slider defaultValue={30} />
        <DatePicker
          defaultValue={moment(
            '2015/01/01',
            'YYYY/MM/DD'
          )}
          format="YYYY/MM/DD"
        />
        <Badge count={5}>
          <a href="#" className="head-example" />
        </Badge>
      </Modal>
    </>
  )
}`,To=`import { Button, Modal } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    console.log(e)
    setVisible(false)
  }

  const handleCancel = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    console.log(e)
    setVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized button props
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default App`,xo=`import { Button, Modal, Space } from 'antd-packages'
import React, { createContext } from 'react'

const ReachableContext = createContext<
  string | null
>(null)
const UnreachableContext = createContext<
  string | null
>(null)

const config = {
  title: 'Use Hook!',
  content: (
    <>
      <ReachableContext.Consumer>
        {(name) => \`Reachable: \${name}!\`}
      </ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>
        {(name) => \`Unreachable: \${name}!\`}
      </UnreachableContext.Consumer>
    </>
  )
}

const App: React.FC = () => {
  const [modal, contextHolder] = Modal.useModal()

  return (
    <ReachableContext.Provider value="Light">
      <Space>
        <Button
          onClick={() => {
            modal.confirm(config)
          }}
        >
          Confirm
        </Button>
        <Button
          onClick={() => {
            modal.warning(config)
          }}
        >
          Warning
        </Button>
        <Button
          onClick={() => {
            modal.info(config)
          }}
        >
          Info
        </Button>
        <Button
          onClick={() => {
            modal.error(config)
          }}
        >
          Error
        </Button>
      </Space>
      {/* \`contextHolder\` should always be placed under the context you want to access */}
      {contextHolder}

      {/* Can not access this context since \`contextHolder\` is not in it */}
      <UnreachableContext.Provider value="Bamboo" />
    </ReachableContext.Provider>
  )
}

export default App`,Io=`import { Button, Modal } from 'antd-packages'
import React, { useRef, useState } from 'react'
import type {
  DraggableData,
  DraggableEvent
} from 'react-draggable'
import Draggable from 'react-draggable'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  })
  const draggleRef = useRef<HTMLDivElement>(null)

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    console.log(e)
    setVisible(false)
  }

  const handleCancel = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    console.log(e)
    setVisible(false)
  }

  const onStart = (
    _event: DraggableEvent,
    uiData: DraggableData
  ) => {
    const { clientWidth, clientHeight } =
      window.document.documentElement
    const targetRect =
      draggleRef.current?.getBoundingClientRect()
    if (!targetRect) {
      return
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right:
        clientWidth -
        (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom:
        clientHeight -
        (targetRect.bottom - uiData.y)
    })
  }

  return (
    <>
      <Button onClick={showModal}>
        Open Draggable Modal
      </Button>
      <Modal
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move'
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false)
              }
            }}
            onMouseOut={() => {
              setDisabled(true)
            }}
            // fix eslintjsx-a11y/mouse-events-have-key-events
            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
            onFocus={() => {}}
            onBlur={() => {}}
            // end
          >
            Draggable Modal
          </div>
        }
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            onStart={(event, uiData) =>
              onStart(event, uiData)
            }
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <p>
          Just don&apos;t learn physics at school
          and your life will be full of magic and
          miracles.
        </p>
        <br />
        <p>
          Day before yesterday I saw a rabbit, and
          yesterday a deer, and today, you.
        </p>
      </Modal>
    </>
  )
}

export default App`,Ao=`import { Button, Modal } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
      >
        Open Modal of 1000px width
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  )
}

export default App`,Bo=`import { Button, notification } from 'antd-packages'
import React from 'react'

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!')
    }
  })
}
const App: React.FC = () => (
  <Button
    type="primary"
    onClick={openNotification}
  >
    Open the notification box
  </Button>
)

export default App`,Do=`import { Button, notification } from 'antd-packages'
import React from 'react'

const openNotification = () => {
  const args = {
    message: 'Notification Title',
    description:
      'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
    duration: 0
  }
  notification.open(args)
}

const App: React.FC = () => (
  <Button
    type="primary"
    onClick={openNotification}
  >
    Open the notification box
  </Button>
)

export default App`,Fo=`import { Button, notification, Space } from 'antd-packages'
import React from 'react'

type NotificationType =
  | 'success'
  | 'info'
  | 'warning'
  | 'error'

const openNotificationWithIcon = (
  type: NotificationType
) => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
  })
}

const App: React.FC = () => (
  <Space>
    <Button
      onClick={() =>
        openNotificationWithIcon('success')
      }
    >
      Success
    </Button>
    <Button
      onClick={() =>
        openNotificationWithIcon('info')
      }
    >
      Info
    </Button>
    <Button
      onClick={() =>
        openNotificationWithIcon('warning')
      }
    >
      Warning
    </Button>
    <Button
      onClick={() =>
        openNotificationWithIcon('error')
      }
    >
      Error
    </Button>
  </Space>
)

export default App`,Oo=`import { Button, notification } from 'antd-packages'
import React from 'react'

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.'
  )
}

const openNotification = () => {
  const key = \`open\${Date.now()}\`
  const btn = (
    <Button
      type="primary"
      size="small"
      onClick={() => notification.close(key)}
    >
      Confirm
    </Button>
  )
  notification.open({
    message: 'Notification Title',
    description:
      'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
    btn,
    key,
    onClose: close
  })
}

const App: React.FC = () => (
  <Button
    type="primary"
    onClick={openNotification}
  >
    Open the notification box
  </Button>
)

export default App`,Lo=`import { SmileOutlined } from '@ant-design/icons'
import { Button, notification } from 'antd-packages'
import React from 'react'

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: (
      <SmileOutlined
        style={{ color: '#108ee9' }}
      />
    )
  })
}

const App: React.FC = () => (
  <Button
    type="primary"
    onClick={openNotification}
  >
    Open the notification box
  </Button>
)

export default App`,No=`import {
  BorderBottomOutlined,
  BorderTopOutlined,
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
} from 'antd-packages'
import type { NotificationPlacement } from 'antd-packages/lib/notification'
import React from 'react'

const openNotification = (
  placement: NotificationPlacement
) => {
  notification.info({
    message: \`Notification \${placement}\`,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    placement
  })
}

const App: React.FC = () => (
  <>
    <Space>
      <Button
        type="primary"
        onClick={() => openNotification('top')}
        icon={<BorderTopOutlined />}
      >
        top
      </Button>
      <Button
        type="primary"
        onClick={() => openNotification('bottom')}
        icon={<BorderBottomOutlined />}
      >
        bottom
      </Button>
    </Space>
    <Divider />
    <Space>
      <Button
        type="primary"
        onClick={() =>
          openNotification('topLeft')
        }
        icon={<RadiusUpleftOutlined />}
      >
        topLeft
      </Button>
      <Button
        type="primary"
        onClick={() =>
          openNotification('topRight')
        }
        icon={<RadiusUprightOutlined />}
      >
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
        icon={<RadiusBottomleftOutlined />}
      >
        bottomLeft
      </Button>
      <Button
        type="primary"
        onClick={() =>
          openNotification('bottomRight')
        }
        icon={<RadiusBottomrightOutlined />}
      >
        bottomRight
      </Button>
    </Space>
  </>
)

export default App`,Mo=`import { Button, notification } from 'antd-packages'
import React from 'react'

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    className: 'custom-class',
    style: {
      width: 600
    }
  })
}

const App: React.FC = () => (
  <Button
    type="primary"
    onClick={openNotification}
  >
    Open the notification box
  </Button>
)

export default App`,zo=`import { Button, notification } from 'antd-packages'
import React from 'react'

const key = 'updatable'

const openNotification = () => {
  notification.open({
    key,
    message: 'Notification Title',
    description: 'description.'
  })

  setTimeout(() => {
    notification.open({
      key,
      message: 'New Title',
      description: 'New description.'
    })
  }, 1000)
}

const App: React.FC = () => (
  <Button
    type="primary"
    onClick={openNotification}
  >
    Open the notification box
  </Button>
)

export default App`,Eo=`import {
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
} from 'antd-packages'
import type { NotificationPlacement } from 'antd-packages/lib/notification'
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
      message: \`Notification \${placement}\`,
      description: (
        <Context.Consumer>
          {({ name }) => \`Hello, \${name}!\`}
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

export default App`,$o=`import { PageHeader } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  />
)

export default App`,Zo=`import {
  Button,
  Descriptions,
  PageHeader
} from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Title"
      subTitle="This is a subtitle"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">
          Lili Qu
        </Descriptions.Item>
        <Descriptions.Item label="Association">
          <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">
          2017-01-10
        </Descriptions.Item>
        <Descriptions.Item label="Effective Time">
          2017-10-10
        </Descriptions.Item>
        <Descriptions.Item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou,
          Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>
)

export default App`,Vo=`import { PageHeader } from 'antd-packages'
import React from 'react'

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu'
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu'
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu'
  }
]

const App: React.FC = () => (
  <PageHeader
    className="site-page-header"
    title="Title"
    breadcrumb={{ routes }}
    subTitle="This is a subtitle"
  />
)

export default App`,Ko=`import { MoreOutlined } from '@ant-design/icons'
import {
  Button,
  Dropdown,
  Menu,
  PageHeader,
  Row,
  Tag,
  Typography
} from 'antd-packages'
import React from 'react'

const { Paragraph } = Typography

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            1st menu item
          </a>
        )
      },
      {
        key: '2',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            2nd menu item
          </a>
        )
      },
      {
        key: '3',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            3rd menu item
          </a>
        )
      }
    ]}
  />
)

const DropdownMenu = () => (
  <Dropdown
    key="more"
    overlay={menu}
    placement="bottomRight"
  >
    <Button
      type="text"
      icon={
        <MoreOutlined style={{ fontSize: 20 }} />
      }
    />
  </Dropdown>
)

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu'
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu'
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu'
  }
]

const IconLink = ({
  src,
  text
}: {
  src: string
  text: string
}) => (
  <a className="example-link">
    <img
      className="example-link-icon"
      src={src}
      alt={text}
    />
    {text}
  </a>
)

const content = (
  <>
    <Paragraph>
      Ant Design interprets the color system into
      two levels: a system-level color system and
      a product-level color system.
    </Paragraph>
    <Paragraph>
      Ant Design&#x27;s design team preferred to
      design with the HSB color model, which makes
      it easier for designers to have a clear
      psychological expectation of color when
      adjusting colors, as well as facilitate
      communication in teams.
    </Paragraph>
    <div>
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
        text="Quick Start"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
        text=" Product Info"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
        text="Product Doc"
      />
    </div>
  </>
)

const Content: React.FC<{
  children: React.ReactNode
  extraContent: React.ReactNode
}> = ({ children, extraContent }) => (
  <Row>
    <div style={{ flex: 1 }}>{children}</div>
    <div className="image">{extraContent}</div>
  </Row>
)

const App: React.FC = () => (
  <PageHeader
    title="Title"
    className="site-page-header"
    subTitle="This is a subtitle"
    tags={<Tag color="blue">Running</Tag>}
    extra={[
      <Button key="3">Operation</Button>,
      <Button key="2">Operation</Button>,
      <Button key="1" type="primary">
        Primary
      </Button>,
      <DropdownMenu key="more" />
    ]}
    avatar={{
      src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4'
    }}
    breadcrumb={{ routes }}
  >
    <Content
      extraContent={
        <img
          src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
          alt="content"
          width="100%"
        />
      }
    >
      {content}
    </Content>
  </PageHeader>
)

export default App`,Uo=`import {
  Button,
  Descriptions,
  PageHeader,
  Row,
  Statistic,
  Tag
} from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <PageHeader
      className="site-page-header"
      onBack={() => window.history.back()}
      title="Title"
      subTitle="This is a subtitle"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">
          Lili Qu
        </Descriptions.Item>
        <Descriptions.Item label="Association">
          <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">
          2017-01-10
        </Descriptions.Item>
        <Descriptions.Item label="Effective Time">
          2017-10-10
        </Descriptions.Item>
        <Descriptions.Item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou,
          Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
    <br />
    <PageHeader
      onBack={() => window.history.back()}
      title="Title"
      tags={<Tag color="blue">Running</Tag>}
      subTitle="This is a subtitle"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>
      ]}
    >
      <Row>
        <Statistic
          title="Status"
          value="Pending"
        />
        <Statistic
          title="Price"
          prefix="$"
          value={568.08}
          style={{
            margin: '0 32px'
          }}
        />
        <Statistic
          title="Balance"
          prefix="$"
          value={3345.08}
        />
      </Row>
    </PageHeader>
  </>
)

export default App`,jo=`import {
  Button,
  Descriptions,
  PageHeader,
  Statistic,
  Tabs
} from 'antd-packages'
import React from 'react'

const { TabPane } = Tabs

const renderContent = (column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="Created">
      Lili Qu
    </Descriptions.Item>
    <Descriptions.Item label="Association">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="Creation Time">
      2017-01-10
    </Descriptions.Item>
    <Descriptions.Item label="Effective Time">
      2017-10-10
    </Descriptions.Item>
    <Descriptions.Item label="Remarks">
      Gonghu Road, Xihu District, Hangzhou,
      Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
)

const extraContent = (
  <div
    style={{
      display: 'flex',
      width: 'max-content',
      justifyContent: 'flex-end'
    }}
  >
    <Statistic
      title="Status"
      value="Pending"
      style={{
        marginRight: 32
      }}
    />
    <Statistic
      title="Price"
      prefix="$"
      value={568.08}
    />
  </div>
)

const Content: React.FC<{
  children: React.ReactNode
  extra: React.ReactNode
}> = ({ children, extra }) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
)

const App: React.FC = () => (
  <PageHeader
    className="site-page-header-responsive"
    onBack={() => window.history.back()}
    title="Title"
    subTitle="This is a subtitle"
    extra={[
      <Button key="3">Operation</Button>,
      <Button key="2">Operation</Button>,
      <Button key="1" type="primary">
        Primary
      </Button>
    ]}
    footer={
      <Tabs defaultActiveKey="1">
        <TabPane tab="Details" key="1" />
        <TabPane tab="Rule" key="2" />
      </Tabs>
    }
  >
    <Content extra={extraContent}>
      {renderContent()}
    </Content>
  </PageHeader>
)

export default App`,Ho=`import { Pagination } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Pagination defaultCurrent={1} total={50} />
)

export default App`,Go=`import { Pagination } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Pagination defaultCurrent={6} total={500} />
)

export default App`,Jo=`import type { PaginationProps } from 'antd-packages'
import { Pagination } from 'antd-packages'
import React from 'react'

const onShowSizeChange: PaginationProps['onShowSizeChange'] =
  (current, pageSize) => {
    console.log(current, pageSize)
  }

const App: React.FC = () => (
  <>
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
    <br />
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
      disabled
    />
  </>
)

export default App`,Yo=`import type { PaginationProps } from 'antd-packages'
import { Pagination } from 'antd-packages'
import React from 'react'

const onChange: PaginationProps['onChange'] = (
  pageNumber
) => {
  console.log('Page: ', pageNumber)
}

const App: React.FC = () => (
  <>
    <Pagination
      showQuickJumper
      defaultCurrent={2}
      total={500}
      onChange={onChange}
    />
    <br />
    <Pagination
      showQuickJumper
      defaultCurrent={2}
      total={500}
      onChange={onChange}
      disabled
    />
  </>
)

export default App`,Wo=`import type { PaginationProps } from 'antd-packages'
import { Pagination } from 'antd-packages'
import React from 'react'

const showTotal: PaginationProps['showTotal'] = (
  total
) => \`Total \${total} items\`

const App: React.FC = () => (
  <>
    <Pagination size="small" total={50} />
    <Pagination
      size="small"
      total={50}
      showSizeChanger
      showQuickJumper
    />
    <Pagination
      size="small"
      total={50}
      showTotal={showTotal}
    />
    <Pagination
      size="small"
      total={50}
      disabled
      showTotal={showTotal}
      showSizeChanger
      showQuickJumper
    />
  </>
)

export default App`,Qo=`import { Pagination } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Pagination
      simple
      defaultCurrent={2}
      total={50}
    />
    <br />
    <Pagination
      disabled
      simple
      defaultCurrent={2}
      total={50}
    />
  </>
)

export default App`,Xo=`import type { PaginationProps } from 'antd-packages'
import { Pagination } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [current, setCurrent] = useState(3)

  const onChange: PaginationProps['onChange'] = (
    page
  ) => {
    console.log(page)
    setCurrent(page)
  }

  return (
    <Pagination
      current={current}
      onChange={onChange}
      total={50}
    />
  )
}

export default App`,qo=`import { Pagination } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Pagination
      total={85}
      showTotal={(total) =>
        \`Total \${total} items\`
      }
      defaultPageSize={20}
      defaultCurrent={1}
    />
    <br />
    <Pagination
      total={85}
      showTotal={(total, range) =>
        \`\${range[0]}-\${range[1]} of \${total} items\`
      }
      defaultPageSize={20}
      defaultCurrent={1}
    />
  </>
)

export default App`,_o=`import { Pagination } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Pagination
    total={85}
    showSizeChanger
    showQuickJumper
    showTotal={(total) => \`Total \${total} items\`}
  />
)

export default App`,ns=`import type { PaginationProps } from 'antd-packages'
import { Pagination } from 'antd-packages'
import React from 'react'

const itemRender: PaginationProps['itemRender'] =
  (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>
    }
    if (type === 'next') {
      return <a>Next</a>
    }
    return originalElement
  }

const App: React.FC = () => (
  <Pagination
    total={500}
    itemRender={itemRender}
  />
)

export default App`,es=`import { message, Popconfirm } from 'antd-packages'
import React from 'react'

const confirm = (
  e: React.MouseEvent<HTMLElement>
) => {
  console.log(e)
  message.success('Click on Yes')
}

const cancel = (
  e: React.MouseEvent<HTMLElement>
) => {
  console.log(e)
  message.error('Click on No')
}

const App: React.FC = () => (
  <Popconfirm
    title="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <a href="#">Delete</a>
  </Popconfirm>
)

export default App`,ts=`import { Popconfirm } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Popconfirm
    title="Are you sure\uFF1F"
    okText="Yes"
    cancelText="No"
  >
    <a href="#">Delete</a>
  </Popconfirm>
)

export default App`,as=`import { Button, message, Popconfirm } from 'antd-packages'
import React from 'react'

const text = 'Are you sure to delete this task?'

const confirm = () => {
  message.info('Clicked on Yes.')
}

const App: React.FC = () => (
  <div className="demo">
    <div
      style={{
        marginLeft: 70,
        whiteSpace: 'nowrap'
      }}
    >
      <Popconfirm
        placement="topLeft"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>TL</Button>
      </Popconfirm>
      <Popconfirm
        placement="top"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm
        placement="topRight"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>TR</Button>
      </Popconfirm>
    </div>
    <div style={{ width: 70, float: 'left' }}>
      <Popconfirm
        placement="leftTop"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>LT</Button>
      </Popconfirm>
      <Popconfirm
        placement="left"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>Left</Button>
      </Popconfirm>
      <Popconfirm
        placement="leftBottom"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>LB</Button>
      </Popconfirm>
    </div>
    <div style={{ width: 70, marginLeft: 304 }}>
      <Popconfirm
        placement="rightTop"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>RT</Button>
      </Popconfirm>
      <Popconfirm
        placement="right"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>Right</Button>
      </Popconfirm>
      <Popconfirm
        placement="rightBottom"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>RB</Button>
      </Popconfirm>
    </div>
    <div
      style={{
        marginLeft: 70,
        clear: 'both',
        whiteSpace: 'nowrap'
      }}
    >
      <Popconfirm
        placement="bottomLeft"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>BL</Button>
      </Popconfirm>
      <Popconfirm
        placement="bottom"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm
        placement="bottomRight"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>BR</Button>
      </Popconfirm>
    </div>
  </div>
)

export default App`,rs=`import { message, Popconfirm, Switch } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [condition, setCondition] = useState(true)

  const changeCondition = (checked: boolean) => {
    setCondition(checked)
  }

  const confirm = () => {
    setVisible(false)
    message.success('Next step.')
  }

  const cancel = () => {
    setVisible(false)
    message.error('Click on cancel.')
  }

  const handleVisibleChange = (
    newVisible: boolean
  ) => {
    if (!newVisible) {
      setVisible(newVisible)
      return
    }
    // Determining condition before show the popconfirm.
    console.log(condition)
    if (condition) {
      confirm() // next step
    } else {
      setVisible(newVisible)
    }
  }

  return (
    <div>
      <Popconfirm
        title="Are you sure delete this task?"
        visible={visible}
        onVisibleChange={handleVisibleChange}
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <a href="#">Delete a task</a>
      </Popconfirm>
      <br />
      <br />
      Whether directly execute\uFF1A
      <Switch
        defaultChecked
        onChange={changeCondition}
      />
    </div>
  )
}

export default App`,os=`import { QuestionCircleOutlined } from '@ant-design/icons'
import { Popconfirm } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Popconfirm
    title="Are you sure\uFF1F"
    icon={
      <QuestionCircleOutlined
        style={{ color: 'red' }}
      />
    }
  >
    <a href="#">Delete</a>
  </Popconfirm>
)

export default App`,ss=`import { Button, Popconfirm } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] =
    useState(false)

  const showPopconfirm = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setConfirmLoading(true)

    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setVisible(false)
  }

  return (
    <Popconfirm
      title="Title"
      visible={visible}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={handleCancel}
    >
      <Button
        type="primary"
        onClick={showPopconfirm}
      >
        Open Popconfirm with async logic
      </Button>
    </Popconfirm>
  )
}

export default App`,is=`import { Button, Popconfirm } from 'antd-packages'
import React from 'react'

const App: React.FC = () => {
  const confirm = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 3000)
    })

  return (
    <Popconfirm
      title="Title"
      onConfirm={confirm}
      onVisibleChange={() =>
        console.log('visible change')
      }
    >
      <Button type="primary">
        Open Popconfirm with Promise
      </Button>
    </Popconfirm>
  )
}

export default App`,ls=`import { Button, Popover } from 'antd-packages'
import React from 'react'

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

const App: React.FC = () => (
  <Popover content={content} title="Title">
    <Button type="primary">Hover me</Button>
  </Popover>
)

export default App`,ds=`import { Button, Popover } from 'antd-packages'
import React from 'react'

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

const App: React.FC = () => (
  <div>
    <Popover
      content={content}
      title="Title"
      trigger="hover"
    >
      <Button>Hover me</Button>
    </Popover>
    <Popover
      content={content}
      title="Title"
      trigger="focus"
    >
      <Button>Focus me</Button>
    </Popover>
    <Popover
      content={content}
      title="Title"
      trigger="click"
    >
      <Button>Click me</Button>
    </Popover>
  </div>
)

export default App`,cs=`import { Button, Popover } from 'antd-packages'
import React from 'react'

const text = <span>Title</span>
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

const buttonWidth = 70

const App: React.FC = () => (
  <div className="demo">
    <div
      style={{
        marginLeft: buttonWidth,
        whiteSpace: 'nowrap'
      }}
    >
      <Popover
        placement="topLeft"
        title={text}
        content={content}
        trigger="click"
      >
        <Button>TL</Button>
      </Popover>
      <Popover
        placement="top"
        title={text}
        content={content}
        trigger="click"
      >
        <Button>Top</Button>
      </Popover>
      <Popover
        placement="topRight"
        title={text}
        content={content}
        trigger="click"
      >
        <Button>TR</Button>
      </Popover>
    </div>
    <div
      style={{
        width: buttonWidth,
        float: 'left'
      }}
    >
      <Popover
        placement="leftTop"
        title={text}
        content={content}
        trigger="click"
      >
        <Button>LT</Button>
      </Popover>
      <Popover
        placement="left"
        title={text}
        content={content}
        trigger="click"
      >
        <Button>Left</Button>
      </Popover>
      <Popover
        placement="leftBottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button>LB</Button>
      </Popover>
    </div>
    <div
      style={{
        width: buttonWidth,
        marginLeft: buttonWidth * 4 + 24
      }}
    >
      <Popover
        placement="rightTop"
        title={text}
        content={content}
        trigger="click"
      >
        <Button>RT</Button>
      </Popover>
      <Popover
        placement="right"
        title={text}
        content={content}
        trigger="click"
      >
        <Button>Right</Button>
      </Popover>
      <Popover
        placement="rightBottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button>RB</Button>
      </Popover>
    </div>
    <div
      style={{
        marginLeft: buttonWidth,
        clear: 'both',
        whiteSpace: 'nowrap'
      }}
    >
      <Popover
        placement="bottomLeft"
        title={text}
        content={content}
        trigger="click"
      >
        <Button>BL</Button>
      </Popover>
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button>Bottom</Button>
      </Popover>
      <Popover
        placement="bottomRight"
        title={text}
        content={content}
        trigger="click"
      >
        <Button>BR</Button>
      </Popover>
    </div>
  </div>
)

export default App`,ps=`import { Button, Popover } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const hide = () => {
    setVisible(false)
  }

  const handleVisibleChange = (
    newVisible: boolean
  ) => {
    setVisible(newVisible)
  }

  return (
    <Popover
      content={<a onClick={hide}>Close</a>}
      title="Title"
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <Button type="primary">Click me</Button>
    </Popover>
  )
}

export default App`,us=`import { Button, Popover } from 'antd-packages'
import React from 'react'

const content = (
  <>
    <p>Content</p>
    <p>Content</p>
  </>
)

const App: React.FC = () => (
  <>
    <Popover
      placement="topLeft"
      title="Title"
      content={content}
    >
      <Button>Align edge / \u8FB9\u7F18\u5BF9\u9F50</Button>
    </Popover>
    <Popover
      placement="topLeft"
      title="Title"
      content={content}
      arrowPointAtCenter
    >
      <Button>
        Arrow points to center / \u7BAD\u5934\u6307\u5411\u4E2D\u5FC3
      </Button>
    </Popover>
  </>
)

export default App`,ms=`import { Button, Popover } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)

  const hide = () => {
    setClicked(false)
    setHovered(false)
  }

  const handleHoverChange = (
    visible: boolean
  ) => {
    setHovered(visible)
    setClicked(false)
  }

  const handleClickChange = (
    visible: boolean
  ) => {
    setHovered(false)
    setClicked(visible)
  }

  const hoverContent = (
    <div>This is hover content.</div>
  )
  const clickContent = (
    <div>This is click content.</div>
  )
  return (
    <Popover
      style={{ width: 500 }}
      content={hoverContent}
      title="Hover title"
      trigger="hover"
      visible={hovered}
      onVisibleChange={handleHoverChange}
    >
      <Popover
        content={
          <div>
            {clickContent}
            <a onClick={hide}>Close</a>
          </div>
        }
        title="Click title"
        trigger="click"
        visible={clicked}
        onVisibleChange={handleClickChange}
      >
        <Button>
          Hover and click / \u60AC\u505C\u5E76\u5355\u51FB
        </Button>
      </Popover>
    </Popover>
  )
}

export default App`,gs=`import { Progress } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </>
)

export default App`,fs=`import { Progress } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Progress type="circle" percent={75} />
    <Progress
      type="circle"
      percent={70}
      status="exception"
    />
    <Progress type="circle" percent={100} />
  </>
)

export default App`,vs=`import { Progress } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <div style={{ width: 170 }}>
    <Progress percent={30} size="small" />
    <Progress
      percent={50}
      size="small"
      status="active"
    />
    <Progress
      percent={70}
      size="small"
      status="exception"
    />
    <Progress percent={100} size="small" />
  </div>
)

export default App`,hs=`import { Progress } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Progress
      type="circle"
      percent={30}
      width={80}
    />
    <Progress
      type="circle"
      percent={70}
      width={80}
      status="exception"
    />
    <Progress
      type="circle"
      percent={100}
      width={80}
    />
  </>
)

export default App`,ys=`import {
  MinusOutlined,
  PlusOutlined
} from '@ant-design/icons'
import { Button, Progress } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [percent, setPercent] = useState(0)

  const increase = () => {
    let newPercent = percent + 10
    if (newPercent > 100) {
      newPercent = 100
    }
    setPercent(newPercent)
  }

  const decline = () => {
    let newPercent = percent - 10
    if (newPercent < 0) {
      newPercent = 0
    }
    setPercent(newPercent)
  }

  return (
    <>
      <Progress type="circle" percent={percent} />
      <Button.Group>
        <Button
          onClick={decline}
          icon={<MinusOutlined />}
        />
        <Button
          onClick={increase}
          icon={<PlusOutlined />}
        />
      </Button.Group>
    </>
  )
}

export default App`,Cs=`import {
  MinusOutlined,
  PlusOutlined
} from '@ant-design/icons'
import { Button, Progress } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [percent, setPercent] = useState(0)

  const increase = () => {
    let newPercent = percent + 10
    if (newPercent > 100) {
      newPercent = 100
    }
    setPercent(newPercent)
  }

  const decline = () => {
    let newPercent = percent - 10
    if (newPercent < 0) {
      newPercent = 0
    }
    setPercent(newPercent)
  }

  return (
    <>
      <Progress percent={percent} />
      <Button.Group>
        <Button
          onClick={decline}
          icon={<MinusOutlined />}
        />
        <Button
          onClick={increase}
          icon={<PlusOutlined />}
        />
      </Button.Group>
    </>
  )
}

export default App`,ws=`/**
 * title: \u81EA\u5B9A\u4E49\u6587\u5B57\u683C\u5F0F
 * desc: \`format\`\u5C5E\u6027\u6307\u5B9A\u683C\u5F0F\u3002
 */

import { Progress } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Progress
      type="circle"
      percent={75}
      format={(percent) => \`\${percent} Days\`}
    />
    <Progress
      type="circle"
      percent={100}
      format={() => 'Done'}
    />
  </>
)

export default App`,ks=`import { Progress } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Progress type="dashboard" percent={75} />
    <Progress
      type="dashboard"
      percent={75}
      gapDegree={30}
    />
  </>
)

export default App`,bs=`import { Progress, Tooltip } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress
        percent={60}
        success={{ percent: 30 }}
      />
    </Tooltip>

    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress
        percent={60}
        success={{ percent: 30 }}
        type="circle"
      />
    </Tooltip>

    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress
        percent={60}
        success={{ percent: 30 }}
        type="dashboard"
      />
    </Tooltip>
  </>
)

export default App`,Ss=`import { Progress } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Progress strokeLinecap="butt" percent={75} />
    <Progress
      strokeLinecap="butt"
      type="circle"
      percent={75}
    />
    <Progress
      strokeLinecap="butt"
      type="dashboard"
      percent={75}
    />
  </>
)

export default App`,Ps=`/**
 * title: \u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6E10\u53D8\u8272
 * desc: \`linear-gradient\`\u7684\u5C01\u88C5\u3002\u63A8\u8350\u53EA\u4F20\u4E24\u79CD\u989C\u8272\u3002
 */

import { Progress } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068'
      }}
      percent={99.9}
    />
    <Progress
      strokeColor={{
        from: '#108ee9',
        to: '#87d068'
      }}
      percent={99.9}
      status="active"
    />
    <Progress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068'
      }}
      percent={90}
    />
    <Progress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068'
      }}
      percent={100}
    />
  </>
)

export default App`,Rs=`import React from 'react'
import { Progress } from 'antd-packages'
import { red, green } from '@ant-design/colors'

const App: React.FC = () => (
  <>
    <Progress percent={50} steps={3} />
    <br />
    <Progress percent={30} steps={5} />
    <br />
    <Progress
      percent={100}
      steps={5}
      size="small"
      strokeColor={green[6]}
    />
    <br />
    <Progress
      percent={60}
      steps={5}
      strokeColor={[green[6], green[6], red[5]]}
    />
  </>
)

export default App`,Ts=`import { Radio } from 'antd-packages'
import React from 'react'

const App: React.FC = () => <Radio>Radio</Radio>

export default App`,xs=`import { Button, Radio } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true)

  const toggleDisabled = () => {
    setDisabled(!disabled)
  }

  return (
    <>
      <Radio
        defaultChecked={false}
        disabled={disabled}
      >
        Disabled
      </Radio>
      <Radio defaultChecked disabled={disabled}>
        Disabled
      </Radio>
      <br />
      <Button
        type="primary"
        onClick={toggleDisabled}
        style={{ marginTop: 16 }}
      >
        Toggle disabled
      </Button>
    </>
  )
}

export default App`,Is=`import type { RadioChangeEvent } from 'antd-packages'
import { Radio } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [value, setValue] = useState(1)

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  return (
    <Radio.Group
      onChange={onChange}
      value={value}
    >
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  )
}

export default App`,As=`import type { RadioChangeEvent } from 'antd-packages'
import { Input, Radio, Space } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [value, setValue] = useState(1)

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  return (
    <Radio.Group
      onChange={onChange}
      value={value}
    >
      <Space direction="vertical">
        <Radio value={1}>Option A</Radio>
        <Radio value={2}>Option B</Radio>
        <Radio value={3}>Option C</Radio>
        <Radio value={4}>
          More...
          {value === 4 ? (
            <Input
              style={{
                width: 100,
                marginLeft: 10
              }}
            />
          ) : null}
        </Radio>
      </Space>
    </Radio.Group>
  )
}

export default App`,Bs=`import type { RadioChangeEvent } from 'antd-packages'
import { Radio } from 'antd-packages'
import React, { useState } from 'react'

const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
]
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  {
    label: 'Orange',
    value: 'Orange',
    disabled: true
  }
]

const App: React.FC = () => {
  const [value1, setValue1] = useState('Apple')
  const [value2, setValue2] = useState('Apple')
  const [value3, setValue3] = useState('Apple')
  const [value4, setValue4] = useState('Apple')

  const onChange1 = ({
    target: { value }
  }: RadioChangeEvent) => {
    console.log('radio1 checked', value)
    setValue1(value)
  }

  const onChange2 = ({
    target: { value }
  }: RadioChangeEvent) => {
    console.log('radio2 checked', value)
    setValue2(value)
  }

  const onChange3 = ({
    target: { value }
  }: RadioChangeEvent) => {
    console.log('radio3 checked', value)
    setValue3(value)
  }

  const onChange4 = ({
    target: { value }
  }: RadioChangeEvent) => {
    console.log('radio4 checked', value)
    setValue4(value)
  }

  return (
    <>
      <Radio.Group
        options={plainOptions}
        onChange={onChange1}
        value={value1}
      />
      <br />
      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange2}
        value={value2}
      />
      <br />
      <br />
      <Radio.Group
        options={options}
        onChange={onChange3}
        value={value3}
        optionType="button"
      />
      <br />
      <br />
      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  )
}

export default App`,Ds=`import type { RadioChangeEvent } from 'antd-packages'
import { Radio } from 'antd-packages'
import React from 'react'

const onChange = (e: RadioChangeEvent) => {
  console.log(\`radio checked:\${e.target.value}\`)
}

const App: React.FC = () => (
  <>
    <Radio.Group
      onChange={onChange}
      defaultValue="a"
    >
      <Radio.Button value="a">
        Hangzhou
      </Radio.Button>
      <Radio.Button value="b">
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">
        Beijing
      </Radio.Button>
      <Radio.Button value="d">
        Chengdu
      </Radio.Button>
    </Radio.Group>
    <Radio.Group
      onChange={onChange}
      defaultValue="a"
      style={{ marginTop: 16 }}
    >
      <Radio.Button value="a">
        Hangzhou
      </Radio.Button>
      <Radio.Button value="b" disabled>
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">
        Beijing
      </Radio.Button>
      <Radio.Button value="d">
        Chengdu
      </Radio.Button>
    </Radio.Group>
    <Radio.Group
      disabled
      onChange={onChange}
      defaultValue="a"
      style={{ marginTop: 16 }}
    >
      <Radio.Button value="a">
        Hangzhou
      </Radio.Button>
      <Radio.Button value="b">
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">
        Beijing
      </Radio.Button>
      <Radio.Button value="d">
        Chengdu
      </Radio.Button>
    </Radio.Group>
  </>
)

export default App`,Fs=`import { Radio } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Radio.Group name="radiogroup" defaultValue={1}>
    <Radio value={1}>A</Radio>
    <Radio value={2}>B</Radio>
    <Radio value={3}>C</Radio>
    <Radio value={4}>D</Radio>
  </Radio.Group>
)

export default App`,Os=`import { Radio } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Radio.Group defaultValue="a" size="large">
      <Radio.Button value="a">
        Hangzhou
      </Radio.Button>
      <Radio.Button value="b">
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">
        Beijing
      </Radio.Button>
      <Radio.Button value="d">
        Chengdu
      </Radio.Button>
    </Radio.Group>
    <Radio.Group
      defaultValue="a"
      style={{ marginTop: 16 }}
    >
      <Radio.Button value="a">
        Hangzhou
      </Radio.Button>
      <Radio.Button value="b">
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">
        Beijing
      </Radio.Button>
      <Radio.Button value="d">
        Chengdu
      </Radio.Button>
    </Radio.Group>
    <Radio.Group
      defaultValue="a"
      size="small"
      style={{ marginTop: 16 }}
    >
      <Radio.Button value="a">
        Hangzhou
      </Radio.Button>
      <Radio.Button value="b">
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">
        Beijing
      </Radio.Button>
      <Radio.Button value="d">
        Chengdu
      </Radio.Button>
    </Radio.Group>
  </>
)

export default App`,Ls=`import { Radio } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Radio.Group
      defaultValue="a"
      buttonStyle="solid"
    >
      <Radio.Button value="a">
        Hangzhou
      </Radio.Button>
      <Radio.Button value="b">
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">
        Beijing
      </Radio.Button>
      <Radio.Button value="d">
        Chengdu
      </Radio.Button>
    </Radio.Group>
    <Radio.Group
      defaultValue="c"
      buttonStyle="solid"
      style={{ marginTop: 16 }}
    >
      <Radio.Button value="a">
        Hangzhou
      </Radio.Button>
      <Radio.Button value="b" disabled>
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">
        Beijing
      </Radio.Button>
      <Radio.Button value="d">
        Chengdu
      </Radio.Button>
    </Radio.Group>
  </>
)

export default App`,Ns=`import { Badge, Radio } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Radio.Group buttonStyle="solid">
    <Badge count={1}>
      <Radio.Button value={1}>
        Click Me
      </Radio.Button>
    </Badge>
    <Badge count={2}>
      <Radio.Button value={2}>
        Not Me
      </Radio.Button>
    </Badge>
  </Radio.Group>
)

export default App`,Ms=`import { Rate } from 'antd-packages'
import React from 'react'

const App: React.FC = () => <Rate />

export default App`,zs=`import { Rate } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Rate allowHalf defaultValue={2.5} />
)

export default App`,Es=`import { Rate } from 'antd-packages'
import React, { useState } from 'react'

const desc = [
  'terrible',
  'bad',
  'normal',
  'good',
  'wonderful'
]

const App: React.FC = () => {
  const [value, setValue] = useState(3)

  return (
    <span>
      <Rate
        tooltips={desc}
        onChange={setValue}
        value={value}
      />
      {value ? (
        <span className="ant-rate-text">
          {desc[value - 1]}
        </span>
      ) : (
        ''
      )}
    </span>
  )
}

export default App`,$s=`import { Rate } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Rate disabled defaultValue={2} />
)

export default App`,Zs=`import { Rate } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Rate defaultValue={3} />
    <span className="ant-rate-text">
      allowClear: true
    </span>
    <br />
    <Rate allowClear={false} defaultValue={3} />
    <span className="ant-rate-text">
      allowClear: false
    </span>
  </>
)

export default App`,Vs=`import { HeartOutlined } from '@ant-design/icons'
import { Rate } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Rate
      character={<HeartOutlined />}
      allowHalf
    />
    <br />
    <Rate
      character="A"
      allowHalf
      style={{ fontSize: 36 }}
    />
    <br />
    <Rate character="\u597D" allowHalf />
  </>
)

export default App`,Ks=`import {
  FrownOutlined,
  MehOutlined,
  SmileOutlined
} from '@ant-design/icons'
import { Rate } from 'antd-packages'
import React from 'react'

const customIcons: Record<
  number,
  React.ReactNode
> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />
}

const App: React.FC = () => (
  <>
    <Rate
      defaultValue={2}
      character={({ index }: { index: number }) =>
        index + 1
      }
    />
    <br />
    <Rate
      defaultValue={3}
      character={({ index }: { index: number }) =>
        customIcons[index + 1]
      }
    />
  </>
)

export default App`,Us=`import { Button, Result } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>
    ]}
  />
)

export default App`,js=`import { Button, Result } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Result
    title="Your operation has been executed"
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
)

export default App`,Hs=`import { Button, Result } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Result
    status="warning"
    title="There are some problems with your operation."
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
)

export default App`,Gs=`import { Button, Result } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">Back Home</Button>
    }
  />
)

export default App`,Js=`import { Button, Result } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary">Back Home</Button>
    }
  />
)

export default App`,Ys=`import { Button, Result } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={
      <Button type="primary">Back Home</Button>
    }
  />
)

export default App`,Ws=`import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Result, Typography } from 'antd-packages'
import React from 'react'

const { Paragraph, Text } = Typography

const App: React.FC = () => (
  <Result
    status="error"
    title="Submission Failed"
    subTitle="Please check and modify the following information before resubmitting."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>
    ]}
  >
    <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16
          }}
        >
          The content you submitted has the
          following error:
        </Text>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" />{' '}
        Your account has been frozen.{' '}
        <a>Thaw immediately &gt;</a>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" />{' '}
        Your account is not yet eligible to apply.{' '}
        <a>Apply Unlock &gt;</a>
      </Paragraph>
    </div>
  </Result>
)

export default App`,Qs=`import { SmileOutlined } from '@ant-design/icons'
import { Button, Result } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />
)

export default App`,Xs=`import { Segmented } from 'antd-packages'

export default () => (
  <Segmented
    options={[
      'Daily',
      'Weekly',
      'Monthly',
      'Quarterly',
      'Yearly'
    ]}
  />
)`,qs=`/**
 * title: Block \u5206\u6BB5\u9009\u62E9\u5668
 * desc: \`block\`\u5C5E\u6027\u4F7F\u5176\u9002\u5408\u7236\u5143\u7D20\u5BBD\u5EA6\u3002
 */

import { Segmented } from 'antd-packages'

export default () => (
  <Segmented
    block
    options={[
      123,
      456,
      'longtext-longtext-longtext-longtext'
    ]}
  />
)`,_s=`import { Segmented } from 'antd-packages'

export default () => (
  <>
    <Segmented
      options={['Map', 'Transit', 'Satellite']}
      disabled
    />
    <br />
    <Segmented
      options={[
        'Daily',
        {
          label: 'Weekly',
          value: 'Weekly',
          disabled: true
        },
        'Monthly',
        {
          label: 'Quarterly',
          value: 'Quarterly',
          disabled: true
        },
        'Yearly'
      ]}
    />
  </>
)`,ni=`import React, { useState } from 'react'
import { Segmented } from 'antd-packages'

const Demo: React.FC = () => {
  const [value, setValue] = useState<
    string | number
  >('Map')

  return (
    <Segmented
      options={['Map', 'Transit', 'Satellite']}
      value={value}
      onChange={setValue}
    />
  )
}

export default Demo`,ei=`import { Avatar, Segmented } from 'antd-packages'
import { UserOutlined } from '@ant-design/icons'

export default () => (
  <>
    <Segmented
      options={[
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <div>User 1</div>
            </div>
          ),
          value: 'user1'
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar
                style={{
                  backgroundColor: '#f56a00'
                }}
              >
                K
              </Avatar>
              <div>User 2</div>
            </div>
          ),
          value: 'user2'
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar
                style={{
                  backgroundColor: '#87d068'
                }}
                icon={<UserOutlined />}
              />
              <div>User 3</div>
            </div>
          ),
          value: 'user3'
        }
      ]}
    />
    <br />
    <Segmented
      options={[
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>Spring</div>
              <div>Jan-Mar</div>
            </div>
          ),
          value: 'spring'
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>Summer</div>
              <div>Apr-Jun</div>
            </div>
          ),
          value: 'summer'
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>Autumn</div>
              <div>Jul-Sept</div>
            </div>
          ),
          value: 'autumn'
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>Winter</div>
              <div>Oct-Dec</div>
            </div>
          ),
          value: 'winter'
        }
      ]}
    />
  </>
)`,ti=`import React, { useState } from 'react'
import { Segmented, Button } from 'antd-packages'

const defaultOptions = [
  'Daily',
  'Weekly',
  'Monthly'
]

const Demo: React.FC = () => {
  const [options, setOptions] = useState(
    defaultOptions
  )
  const [moreLoaded, setMoreLoaded] =
    useState(false)

  const handleLoadOptions = () => {
    setOptions([
      ...defaultOptions,
      'Quarterly',
      'Yearly'
    ])
    setMoreLoaded(true)
  }

  return (
    <>
      <Segmented options={options} />
      <br />
      <Button
        type="primary"
        disabled={moreLoaded}
        onClick={handleLoadOptions}
      >
        Load more options
      </Button>
    </>
  )
}

export default Demo`,ai=`import { Segmented } from 'antd-packages'

export default () => (
  <>
    <Segmented
      size="large"
      options={[
        'Daily',
        'Weekly',
        'Monthly',
        'Quarterly',
        'Yearly'
      ]}
    />
    <br />
    <Segmented
      options={[
        'Daily',
        'Weekly',
        'Monthly',
        'Quarterly',
        'Yearly'
      ]}
    />
    <br />
    <Segmented
      size="small"
      options={[
        'Daily',
        'Weekly',
        'Monthly',
        'Quarterly',
        'Yearly'
      ]}
    />
  </>
)`,ri=`import { Segmented } from 'antd-packages'
import {
  AppstoreOutlined,
  BarsOutlined
} from '@ant-design/icons'

export default () => (
  <Segmented
    options={[
      {
        label: 'List',
        value: 'List',
        icon: <BarsOutlined />
      },
      {
        label: 'Kanban',
        value: 'Kanban',
        icon: <AppstoreOutlined />
      }
    ]}
  />
)`,oi=`import { Segmented } from 'antd-packages'
import {
  AppstoreOutlined,
  BarsOutlined
} from '@ant-design/icons'

export default () => (
  <Segmented
    options={[
      {
        value: 'List',
        icon: <BarsOutlined />
      },
      {
        value: 'Kanban',
        icon: <AppstoreOutlined />
      }
    ]}
  />
)`,si=`import { useState } from 'react'
import { Segmented } from 'antd-packages'

const Demo = () => {
  const [foo, setFoo] = useState('AND')
  return (
    <>
      <Segmented
        value={foo}
        options={['AND', 'OR', 'NOT']}
        onChange={setFoo}
      />
      &nbsp;&nbsp;
      <Segmented
        value={foo}
        options={['AND', 'OR', 'NOT']}
        onChange={(value) => setFoo(value)}
      />
    </>
  )
}

export default Demo`,ii=`import {
  Button,
  Input,
  Select,
  Segmented
} from 'antd-packages'

export default () => (
  <>
    <div>
      <Segmented
        style={{ marginRight: 6 }}
        size="large"
        options={['Daily', 'Weekly', 'Monthly']}
      />
      <Button type="primary" size="large">
        Button
      </Button>
    </div>
    <div>
      <Segmented
        style={{ marginRight: 6 }}
        options={['Daily', 'Weekly', 'Monthly']}
      />
      <Input
        placeholder="default size"
        style={{ width: 150 }}
      />
    </div>
    <div>
      <Segmented
        style={{ marginRight: 6 }}
        size="small"
        options={['Daily', 'Weekly', 'Monthly']}
      />
      <Select
        size="small"
        defaultValue="lucy"
        style={{ width: 150 }}
      >
        <Select.Option value="lucy">
          Lucy
        </Select.Option>
      </Select>
    </div>
  </>
)`,li=`import { Select } from 'antd-packages'
import React from 'react'

const { Option } = Select

const handleChange = (value: string) => {
  console.log(\`selected \${value}\`)
}

const App: React.FC = () => (
  <>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      disabled
    >
      <Option value="lucy">Lucy</Option>
    </Select>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      loading
    >
      <Option value="lucy">Lucy</Option>
    </Select>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      allowClear
    >
      <Option value="lucy">Lucy</Option>
    </Select>
  </>
)

export default App`,di=`import { Select } from 'antd-packages'
import React from 'react'

const { Option } = Select

const onChange = (value: string) => {
  console.log(\`selected \${value}\`)
}

const onSearch = (value: string) => {
  console.log('search:', value)
}

const App: React.FC = () => (
  <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option!.children as unknown as string)
        .toLowerCase()
        .includes(input.toLowerCase())
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>
)

export default App`,ci=`import { Select } from 'antd-packages'
import React from 'react'

const { Option } = Select

const children: React.ReactNode[] = []
for (let i = 10; i < 36; i++) {
  children.push(
    <Option key={i.toString(36) + i}>
      {i.toString(36) + i}
    </Option>
  )
}

const handleChange = (value: string[]) => {
  console.log(\`selected \${value}\`)
}

const App: React.FC = () => (
  <>
    <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
    >
      {children}
    </Select>
    <br />
    <Select
      mode="multiple"
      disabled
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
    >
      {children}
    </Select>
  </>
)

export default App`,pi=`import type { RadioChangeEvent } from 'antd-packages'
import { Radio, Select } from 'antd-packages'
import type { SizeType } from 'antd-packages/es/config-provider/SizeContext'
import React, { useState } from 'react'

const { Option } = Select

const children: React.ReactNode[] = []
for (let i = 10; i < 36; i++) {
  children.push(
    <Option key={i.toString(36) + i}>
      {i.toString(36) + i}
    </Option>
  )
}

const handleChange = (
  value: string | string[]
) => {
  console.log(\`Selected: \${value}\`)
}

const App: React.FC = () => {
  const [size, setSize] =
    useState<SizeType>('middle')

  const handleSizeChange = (
    e: RadioChangeEvent
  ) => {
    setSize(e.target.value)
  }

  return (
    <>
      <Radio.Group
        value={size}
        onChange={handleSizeChange}
      >
        <Radio.Button value="large">
          Large
        </Radio.Button>
        <Radio.Button value="default">
          Default
        </Radio.Button>
        <Radio.Button value="small">
          Small
        </Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Select
        size={size}
        defaultValue="a1"
        onChange={handleChange}
        style={{ width: 200 }}
      >
        {children}
      </Select>
      <br />
      <Select
        mode="multiple"
        size={size}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        style={{ width: '100%' }}
      >
        {children}
      </Select>
      <br />
      <Select
        mode="tags"
        size={size}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        style={{ width: '100%' }}
      >
        {children}
      </Select>
    </>
  )
}

export default App`,ui=`import { Select } from 'antd-packages'
import React from 'react'

const { Option } = Select

const handleChange = (value: string[]) => {
  console.log(\`selected \${value}\`)
}

const App: React.FC = () => (
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="select one country"
    defaultValue={['china']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <div className="demo-option-label-item">
        <span role="img" aria-label="China">
          \u{1F1E8}\u{1F1F3}
        </span>
        China (\u4E2D\u56FD)
      </div>
    </Option>
    <Option value="usa" label="USA">
      <div className="demo-option-label-item">
        <span role="img" aria-label="USA">
          \u{1F1FA}\u{1F1F8}
        </span>
        USA (\u7F8E\u56FD)
      </div>
    </Option>
    <Option value="japan" label="Japan">
      <div className="demo-option-label-item">
        <span role="img" aria-label="Japan">
          \u{1F1EF}\u{1F1F5}
        </span>
        Japan (\u65E5\u672C)
      </div>
    </Option>
    <Option value="korea" label="Korea">
      <div className="demo-option-label-item">
        <span role="img" aria-label="Korea">
          \u{1F1F0}\u{1F1F7}
        </span>
        Korea (\u97E9\u56FD)
      </div>
    </Option>
  </Select>
)

export default App`,mi=`import { Select } from 'antd-packages'
import React from 'react'

const { Option } = Select

const App: React.FC = () => (
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) =>
      (
        option!.children as unknown as string
      ).includes(input)
    }
    filterSort={(optionA, optionB) =>
      (optionA!.children as unknown as string)
        .toLowerCase()
        .localeCompare(
          (
            optionB!.children as unknown as string
          ).toLowerCase()
        )
    }
  >
    <Option value="1">Not Identified</Option>
    <Option value="2">Closed</Option>
    <Option value="3">Communicated</Option>
    <Option value="4">Identified</Option>
    <Option value="5">Resolved</Option>
    <Option value="6">Cancelled</Option>
  </Select>
)

export default App`,gi=`import { Select } from 'antd-packages'
import React from 'react'

const { Option } = Select

const children: React.ReactNode[] = []
for (let i = 10; i < 36; i++) {
  children.push(
    <Option key={i.toString(36) + i}>
      {i.toString(36) + i}
    </Option>
  )
}

const handleChange = (value: string) => {
  console.log(\`selected \${value}\`)
}

const App: React.FC = () => (
  <Select
    mode="tags"
    style={{ width: '100%' }}
    placeholder="Tags Mode"
    onChange={handleChange}
  >
    {children}
  </Select>
)

export default App`,fi=`import { Select } from 'antd-packages'
import React from 'react'

const { Option, OptGroup } = Select

const handleChange = (value: string) => {
  console.log(\`selected \${value}\`)
}

const App: React.FC = () => (
  <Select
    defaultValue="lucy"
    style={{ width: 200 }}
    onChange={handleChange}
  >
    <OptGroup label="Manager">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </OptGroup>
    <OptGroup label="Engineer">
      <Option value="Yiminghe">yiminghe</Option>
    </OptGroup>
  </Select>
)

export default App`,vi=`import { Select } from 'antd-packages'
import React, { useState } from 'react'

const { Option } = Select
const provinceData = ['Zhejiang', 'Jiangsu']
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
}

type CityName = keyof typeof cityData

const App: React.FC = () => {
  const [cities, setCities] = useState(
    cityData[provinceData[0] as CityName]
  )
  const [secondCity, setSecondCity] = useState(
    cityData[provinceData[0] as CityName][0]
  )

  const handleProvinceChange = (
    value: CityName
  ) => {
    setCities(cityData[value])
    setSecondCity(cityData[value][0])
  }

  const onSecondCityChange = (
    value: CityName
  ) => {
    setSecondCity(value)
  }

  return (
    <>
      <Select
        defaultValue={provinceData[0]}
        style={{ width: 120 }}
        onChange={handleProvinceChange}
      >
        {provinceData.map((province) => (
          <Option key={province}>
            {province}
          </Option>
        ))}
      </Select>
      <Select
        style={{ width: 120 }}
        value={secondCity}
        onChange={onSecondCityChange}
      >
        {cities.map((city) => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
    </>
  )
}

export default App`,hi=`import { Select } from 'antd-packages'
import jsonp from 'fetch-jsonp'
import qs from 'qs'
import React, { useState } from 'react'

const { Option } = Select

let timeout: ReturnType<typeof setTimeout> | null
let currentValue: string

const fetch = (
  value: string,
  callback: (
    data: { value: string; text: string }[]
  ) => void
) => {
  if (timeout) {
    clearTimeout(timeout)
    timeout = null
  }
  currentValue = value

  const fake = () => {
    const str = qs.stringify({
      code: 'utf-8',
      q: value
    })
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then((response: any) => response.json())
      .then((d: any) => {
        if (currentValue === value) {
          const { result } = d
          const data = result.map(
            (item: any) => ({
              value: item[0],
              text: item[0]
            })
          )
          callback(data)
        }
      })
  }

  timeout = setTimeout(fake, 300)
}

const SearchInput: React.FC<{
  placeholder: string
  style: React.CSSProperties
}> = (props) => {
  const [data, setData] = useState<any[]>([])
  const [value, setValue] = useState<string>()

  const handleSearch = (newValue: string) => {
    if (newValue) {
      fetch(newValue, setData)
    } else {
      setData([])
    }
  }

  const handleChange = (newValue: string) => {
    setValue(newValue)
  }

  const options = data.map((d) => (
    <Option key={d.value}>{d.text}</Option>
  ))

  return (
    <Select
      showSearch
      value={value}
      placeholder={props.placeholder}
      style={props.style}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
    >
      {options}
    </Select>
  )
}

const App: React.FC = () => (
  <SearchInput
    placeholder="input search text"
    style={{ width: 200 }}
  />
)

export default App`,yi=`import { Select } from 'antd-packages'
import React from 'react'

const { Option } = Select

const handleChange = (value: {
  value: string
  label: React.ReactNode
}) => {
  console.log(value) // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

const App: React.FC = () => (
  <Select
    labelInValue
    defaultValue={{
      value: 'lucy',
      label: 'Lucy (101)'
    }}
    style={{ width: 120 }}
    onChange={handleChange}
  >
    <Option value="jack">Jack (100)</Option>
    <Option value="lucy">Lucy (101)</Option>
  </Select>
)

export default App`,Ci=`import { Select } from 'antd-packages'
import React from 'react'

const { Option } = Select

const children: React.ReactNode[] = []
for (let i = 10; i < 36; i++) {
  children.push(
    <Option key={i.toString(36) + i}>
      {i.toString(36) + i}
    </Option>
  )
}

const handleChange = (value: string) => {
  console.log(\`selected \${value}\`)
}

const App: React.FC = () => (
  <Select
    mode="tags"
    style={{ width: '100%' }}
    onChange={handleChange}
    tokenSeparators={[',']}
  >
    {children}
  </Select>
)

export default App`,wi=`import { Select, Spin } from 'antd-packages'
import type { SelectProps } from 'antd-packages/es/select'
import debounce from 'lodash/debounce'
import React, {
  useMemo,
  useRef,
  useState
} from 'react'

export interface DebounceSelectProps<
  ValueType = any
  > extends Omit<
  SelectProps<ValueType | ValueType[]>,
  'options' | 'children'
  > {
  fetchOptions: (
    search: string
  ) => Promise<ValueType[]>
  debounceTimeout?: number
}

function DebounceSelect<
  ValueType extends {
    key?: string
    label: React.ReactNode
    value: string | number
  } = any
>({
  fetchOptions,
  debounceTimeout = 800,
  ...props
}: DebounceSelectProps<ValueType>) {
  const [fetching, setFetching] = useState(false)
  const [options, setOptions] = useState<
    ValueType[]
  >([])
  const fetchRef = useRef(0)

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1
      const fetchId = fetchRef.current
      setOptions([])
      setFetching(true)

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return
        }

        setOptions(newOptions)
        setFetching(false)
      })
    }

    return debounce(loadOptions, debounceTimeout)
  }, [fetchOptions, debounceTimeout])

  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={
        fetching ? <Spin size="small" /> : null
      }
      {...props}
      options={options}
    />
  )
}

// Usage of DebounceSelect
interface UserValue {
  label: string
  value: string
}

async function fetchUserList(
  username: string
): Promise<UserValue[]> {
  console.log('fetching user', username)

  return fetch(
    'https://randomuser.me/api/?results=5'
  )
    .then((response) => response.json())
    .then((body) =>
      body.results.map(
        (user: {
          name: { first: string; last: string }
          login: { username: string }
        }) => ({
          label: \`\${user.name.first} \${user.name.last}\`,
          value: user.login.username
        })
      )
    )
}

const App: React.FC = () => {
  const [value, setValue] = useState<UserValue[]>(
    []
  )

  return (
    <DebounceSelect
      mode="multiple"
      value={value}
      placeholder="Select users"
      fetchOptions={fetchUserList}
      onChange={(newValue) => {
        setValue(newValue as UserValue[])
      }}
      style={{ width: '100%' }}
    />
  )
}

export default App`,ki=`import {
  MehOutlined,
  SmileOutlined
} from '@ant-design/icons'
import { Select } from 'antd-packages'
import React from 'react'

const smileIcon = <SmileOutlined />
const mehIcon = <MehOutlined />
const { Option } = Select

const handleChange = (value: string) => {
  console.log(\`selected \${value}\`)
}

const App: React.FC = () => (
  <>
    <Select
      suffixIcon={smileIcon}
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select
      suffixIcon={mehIcon}
      defaultValue="lucy"
      style={{ width: 120 }}
      disabled
    >
      <Option value="lucy">Lucy</Option>
    </Select>
  </>
)

export default App`,bi=`import { PlusOutlined } from '@ant-design/icons'
import {
  Divider,
  Input,
  Select,
  Space,
  Typography
} from 'antd-packages'
import React, { useState } from 'react'

const { Option } = Select

let index = 0

const App: React.FC = () => {
  const [items, setItems] = useState([
    'jack',
    'lucy'
  ])
  const [name, setName] = useState('')

  const onNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(event.target.value)
  }

  const addItem = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault()
    setItems([
      ...items,
      name || \`New item \${index++}\`
    ])
    setName('')
  }

  return (
    <Select
      style={{ width: 300 }}
      placeholder="custom dropdown render"
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider style={{ margin: '8px 0' }} />
          <Space
            align="center"
            style={{ padding: '0 8px 4px' }}
          >
            <Input
              placeholder="Please enter item"
              value={name}
              onChange={onNameChange}
            />
            <Typography.Link
              onClick={addItem}
              style={{ whiteSpace: 'nowrap' }}
            >
              <PlusOutlined /> Add item
            </Typography.Link>
          </Space>
        </>
      )}
    >
      {items.map((item) => (
        <Option key={item}>{item}</Option>
      ))}
    </Select>
  )
}

export default App`,Si=`import { Select } from 'antd-packages'
import React, { useState } from 'react'

const OPTIONS = [
  'Apples',
  'Nails',
  'Bananas',
  'Helicopters'
]

const App: React.FC = () => {
  const [selectedItems, setSelectedItems] =
    useState<string[]>([])

  const filteredOptions = OPTIONS.filter(
    (o) => !selectedItems.includes(o)
  )

  return (
    <Select
      mode="multiple"
      placeholder="Inserted are removed"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{ width: '100%' }}
    >
      {filteredOptions.map((item) => (
        <Select.Option key={item} value={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  )
}

export default App`,Pi=`import { Select } from 'antd-packages'
import React from 'react'

const { Option } = Select

const App: React.FC = () => (
  <>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      bordered={false}
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      disabled
      bordered={false}
    >
      <Option value="lucy">Lucy</Option>
    </Select>
  </>
)

export default App`,Ri=`import { Select, Tag } from 'antd-packages'
import type { CustomTagProps } from 'rc-select/lib/BaseSelect'
import React from 'react'

const options = [
  { value: 'gold' },
  { value: 'lime' },
  { value: 'green' },
  { value: 'cyan' }
]

const tagRender = (props: CustomTagProps) => {
  const { label, value, closable, onClose } =
    props
  const onPreventMouseDown = (
    event: React.MouseEvent<HTMLSpanElement>
  ) => {
    event.preventDefault()
    event.stopPropagation()
  }
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  )
}

const App: React.FC = () => (
  <Select
    mode="multiple"
    showArrow
    tagRender={tagRender}
    defaultValue={['gold', 'cyan']}
    style={{ width: '100%' }}
    options={options}
  />
)

export default App`,Ti=`import type { SelectProps } from 'antd-packages'
import { Select, Space } from 'antd-packages'
import React, { useState } from 'react'

interface ItemProps {
  label: string
  value: string
}

const options: ItemProps[] = []

for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i
  options.push({
    label: \`Long Label: \${value}\`,
    value
  })
}

const App: React.FC = () => {
  const [value, setValue] = useState([
    'a10',
    'c12',
    'h17',
    'j19',
    'k20'
  ])

  const selectProps: SelectProps = {
    mode: 'multiple',
    style: { width: '100%' },
    value,
    options,
    onChange: (newValue: string[]) => {
      setValue(newValue)
    },
    placeholder: 'Select Item...',
    maxTagCount: 'responsive'
  }

  return (
    <Space
      direction="vertical"
      style={{ width: '100%' }}
    >
      <Select {...selectProps} />
      <Select {...selectProps} disabled />
    </Space>
  )
}

export default App`,xi=`import type { SelectProps } from 'antd-packages'
import { Divider, Select, Typography } from 'antd-packages'
import React from 'react'

const { Title } = Typography

const options: SelectProps['options'] = []
for (let i = 0; i < 100000; i++) {
  const value = \`\${i.toString(36)}\${i}\`
  options.push({
    label: value,
    value,
    disabled: i === 10
  })
}

const handleChange = (value: string[]) => {
  console.log(\`selected \${value}\`)
}

const App: React.FC = () => (
  <>
    <Title level={3}>Ant Design 4.0</Title>
    <Title level={4}>
      {options.length} Items
    </Title>
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />

    <Divider />

    <Title level={3}>Ant Design 3.0</Title>
    <iframe
      title="Ant Design 3.0 Select demo"
      src="https://codesandbox.io/embed/solitary-voice-m3vme?fontsize=14&hidenavigation=1&theme=dark&view=preview"
      style={{ width: '100%', height: 300 }}
    />
  </>
)

export default App`,Ii=`import { Select, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space
    direction="vertical"
    style={{ width: '100%' }}
  >
    <Select
      status="error"
      style={{ width: '100%' }}
    />
    <Select
      status="warning"
      style={{ width: '100%' }}
    />
  </Space>
)

export default App`,Ai=`import type { RadioChangeEvent } from 'antd-packages'
import { Radio, Select } from 'antd-packages'
import type { SelectCommonPlacement } from 'antd-packages/es/_util/motion'
import React, { useState } from 'react'

const { Option } = Select

const App: React.FC = () => {
  const [placement, SetPlacement] =
    useState<SelectCommonPlacement>('topLeft')

  const placementChange = (
    e: RadioChangeEvent
  ) => {
    SetPlacement(e.target.value)
  }

  return (
    <>
      <Radio.Group
        value={placement}
        onChange={placementChange}
      >
        <Radio.Button value="topLeft">
          topLeft
        </Radio.Button>
        <Radio.Button value="topRight">
          topRight
        </Radio.Button>
        <Radio.Button value="bottomLeft">
          bottomLeft
        </Radio.Button>
        <Radio.Button value="bottomRight">
          bottomRight
        </Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Select
        defaultValue="HangZhou"
        style={{ width: 120 }}
        dropdownMatchSelectWidth={false}
        placement={placement}
      >
        <Option value="HangZhou">
          HangZhou #310000
        </Option>
        <Option value="NingBo">
          NingBo #315000
        </Option>
        <Option value="WenZhou">
          WenZhou #325000
        </Option>
      </Select>
    </>
  )
}

export default App`,Bi=`import { Button, Input, Select } from 'antd-packages'
import React from 'react'

const { Option } = Select

const handleChange = (
  value: string | string[]
) => {
  console.log(\`selected \${value}\`)
}

const App: React.FC = () => (
  <div
    style={{
      width: 500,
      position: 'relative',
      zIndex: 1,
      border: '1px solid red',
      background: '#FFF'
    }}
  >
    <Input style={{ width: 100 }} value="222" />
    <Select
      style={{ width: 120 }}
      onChange={handleChange}
      showSearch
      placeholder="233"
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
      <Option value="long">
        I am super super long!
      </Option>
    </Select>
    <Select
      mode="multiple"
      style={{ width: 120 }}
      defaultValue={['lucy']}
      onChange={handleChange}
      showSearch
      placeholder="233"
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
      <Option value="long">
        I am super super long!
      </Option>
    </Select>
    <span className="debug-align">AntDesign</span>
    <Button>222</Button>
  </div>
)

export default App`,Di=`import { Skeleton } from 'antd-packages'
import React from 'react'

const App: React.FC = () => <Skeleton />

export default App`,Fi=`import { Skeleton } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Skeleton avatar paragraph={{ rows: 4 }} />
)

export default App`,Oi=`import { Skeleton } from 'antd-packages'
import React from 'react'

const App: React.FC = () => <Skeleton active />

export default App`,Li=`import type { RadioChangeEvent } from 'antd-packages'
import {
  Divider,
  Form,
  Radio,
  Skeleton,
  Space,
  Switch
} from 'antd-packages'
import React, { useState } from 'react'

type SizeType = 'default' | 'small' | 'large'
type ButtonShapeType =
  | 'circle'
  | 'square'
  | 'round'
type AvatarShapeType = 'circle' | 'square'

const App: React.FC = () => {
  const [active, setActive] = useState(false)
  const [block, setBlock] = useState(false)
  const [size, setSize] =
    useState<SizeType>('default')
  const [buttonShape, setButtonShape] =
    useState<ButtonShapeType>('square')
  const [avatarShape, setAvatarShape] =
    useState<AvatarShapeType>('circle')

  const handleActiveChange = (
    checked: boolean
  ) => {
    setActive(checked)
  }

  const handleBlockChange = (
    checked: boolean
  ) => {
    setBlock(checked)
  }

  const handleSizeChange = (
    e: RadioChangeEvent
  ) => {
    setSize(e.target.value)
  }

  const handleShapeButton = (
    e: RadioChangeEvent
  ) => {
    setButtonShape(e.target.value)
  }

  const handleAvatarShape = (
    e: RadioChangeEvent
  ) => {
    setAvatarShape(e.target.value)
  }

  return (
    <>
      <Space>
        <Skeleton.Button
          active={active}
          size={size}
          shape={buttonShape}
          block={block}
        />
        <Skeleton.Avatar
          active={active}
          size={size}
          shape={avatarShape}
        />
        <Skeleton.Input
          active={active}
          size={size}
        />
      </Space>
      <br />
      <br />
      <Skeleton.Button
        active={active}
        size={size}
        shape={buttonShape}
        block={block}
      />
      <br />
      <br />
      <Skeleton.Input
        active={active}
        size={size}
        block={block}
      />
      <br />
      <br />
      <Skeleton.Image />
      <Divider />
      <Form
        layout="inline"
        style={{ margin: '16px 0' }}
      >
        <Form.Item label="Active">
          <Switch
            checked={active}
            onChange={handleActiveChange}
          />
        </Form.Item>
        <Form.Item label="Button and Input Block">
          <Switch
            checked={block}
            onChange={handleBlockChange}
          />
        </Form.Item>
        <Form.Item label="Size">
          <Radio.Group
            value={size}
            onChange={handleSizeChange}
          >
            <Radio.Button value="default">
              Default
            </Radio.Button>
            <Radio.Button value="large">
              Large
            </Radio.Button>
            <Radio.Button value="small">
              Small
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Button Shape">
          <Radio.Group
            value={buttonShape}
            onChange={handleShapeButton}
          >
            <Radio.Button value="square">
              Square
            </Radio.Button>
            <Radio.Button value="round">
              Round
            </Radio.Button>
            <Radio.Button value="circle">
              Circle
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Avatar Shape">
          <Radio.Group
            value={avatarShape}
            onChange={handleAvatarShape}
          >
            <Radio.Button value="square">
              Square
            </Radio.Button>
            <Radio.Button value="circle">
              Circle
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
    </>
  )
}

export default App`,Ni=`import { Button, Skeleton } from 'antd-packages'
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

export default App`,Mi=`import type Icon from '@ant-design/icons'
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined
} from '@ant-design/icons'
import {
  Avatar,
  List,
  Skeleton,
  Switch
} from 'antd-packages'
import React, { useState } from 'react'

interface IconTextProps {
  icon: typeof Icon
  text: React.ReactNode
}

const listData = Array.from({ length: 3 }).map(
  (_, i) => ({
    href: 'https://ant.design',
    title: \`ant design part \${i}\`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  })
)

const IconText = ({
  icon,
  text
}: IconTextProps) => (
  <span>
    {React.createElement(icon, {
      style: { marginRight: 8 }
    })}
    {text}
  </span>
)

const App: React.FC = () => {
  const [loading, setLoading] = useState(true)

  const onChange = (checked: boolean) => {
    setLoading(!checked)
  }
  return (
    <>
      <Switch
        checked={!loading}
        onChange={onChange}
      />

      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={
              !loading
                ? [
                    <IconText
                      icon={StarOutlined}
                      text="156"
                      key="list-vertical-star-o"
                    />,
                    <IconText
                      icon={LikeOutlined}
                      text="156"
                      key="list-vertical-like-o"
                    />,
                    <IconText
                      icon={MessageOutlined}
                      text="2"
                      key="list-vertical-message"
                    />
                  ]
                : undefined
            }
            extra={
              !loading && (
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              )
            }
          >
            <Skeleton
              loading={loading}
              active
              avatar
            >
              <List.Item.Meta
                avatar={
                  <Avatar src={item.avatar} />
                }
                title={
                  <a href={item.href}>
                    {item.title}
                  </a>
                }
                description={item.description}
              />
              {item.content}
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  )
}

export default App`,zi=`import { Slider, Switch } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(false)

  const onChange = (checked: boolean) => {
    setDisabled(checked)
  }

  return (
    <>
      <Slider
        defaultValue={30}
        disabled={disabled}
      />
      <Slider
        range
        defaultValue={[20, 50]}
        disabled={disabled}
      />
      Disabled:{' '}
      <Switch
        size="small"
        checked={disabled}
        onChange={onChange}
      />
    </>
  )
}

export default App`,Ei=`import {
  Col,
  InputNumber,
  Row,
  Slider
} from 'antd-packages'
import React, { useState } from 'react'

const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1)

  const onChange = (newValue: number) => {
    setInputValue(newValue)
  }

  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={
            typeof inputValue === 'number'
              ? inputValue
              : 0
          }
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={20}
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  )
}

const DecimalStep = () => {
  const [inputValue, setInputValue] = useState(0)

  const onChange = (value: number) => {
    if (isNaN(value)) {
      return
    }

    setInputValue(value)
  }

  return (
    <Row>
      <Col span={12}>
        <Slider
          min={0}
          max={1}
          onChange={onChange}
          value={
            typeof inputValue === 'number'
              ? inputValue
              : 0
          }
          step={0.01}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={0}
          max={1}
          style={{ margin: '0 16px' }}
          step={0.01}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  )
}

const App: React.FC = () => (
  <div>
    <IntegerStep />
    <DecimalStep />
  </div>
)

export default App`,$i=`import {
  FrownOutlined,
  SmileOutlined
} from '@ant-design/icons'
import { Slider } from 'antd-packages'
import React, { useState } from 'react'

interface IconSliderProps {
  max: number
  min: number
}

const IconSlider: React.FC<IconSliderProps> = (
  props
) => {
  const { max, min } = props
  const [value, setValue] = useState(0)

  const mid = Number(((max - min) / 2).toFixed(5))
  const preColorCls =
    value >= mid ? '' : 'icon-wrapper-active'
  const nextColorCls =
    value >= mid ? 'icon-wrapper-active' : ''

  return (
    <div className="icon-wrapper">
      <FrownOutlined className={preColorCls} />
      <Slider
        {...props}
        onChange={setValue}
        value={value}
      />
      <SmileOutlined className={nextColorCls} />
    </div>
  )
}

const App: React.FC = () => (
  <IconSlider min={0} max={20} />
)

export default App`,Zi=`import { Slider } from 'antd-packages'
import React from 'react'

const formatter = (value: number) => \`\${value}%\`

const App: React.FC = () => (
  <>
    <Slider tipFormatter={formatter} />
    <Slider tipFormatter={null} />
  </>
)

export default App`,Vi=`import { Slider } from 'antd-packages'
import React from 'react'

const onChange = (
  value: number | [number, number]
) => {
  console.log('onChange: ', value)
}

const onAfterChange = (
  value: number | [number, number]
) => {
  console.log('onAfterChange: ', value)
}

const App: React.FC = () => (
  <>
    <Slider
      defaultValue={30}
      onChange={onChange}
      onAfterChange={onAfterChange}
    />
    <Slider
      range
      step={10}
      defaultValue={[20, 50]}
      onChange={onChange}
      onAfterChange={onAfterChange}
    />
  </>
)

export default App`,Ki=`import { Slider } from 'antd-packages'
import type { SliderMarks } from 'antd-packages/lib/slider'
import React from 'react'

const marks: SliderMarks = {
  0: '0\xB0C',
  26: '26\xB0C',
  37: '37\xB0C',
  100: {
    style: {
      color: '#f50'
    },
    label: <strong>100\xB0C</strong>
  }
}

const App: React.FC = () => (
  <>
    <h4>included=true</h4>
    <Slider marks={marks} defaultValue={37} />
    <Slider
      range
      marks={marks}
      defaultValue={[26, 37]}
    />

    <h4>included=false</h4>
    <Slider
      marks={marks}
      included={false}
      defaultValue={37}
    />

    <h4>marks & step</h4>
    <Slider
      marks={marks}
      step={10}
      defaultValue={37}
    />

    <h4>step=null</h4>
    <Slider
      marks={marks}
      step={null}
      defaultValue={37}
    />
  </>
)

export default App`,Ui=`import { Slider } from 'antd-packages'
import type { SliderMarks } from 'antd-packages/lib/slider'
import React from 'react'

const style: React.CSSProperties = {
  display: 'inline-block',
  height: 300,
  marginLeft: 70
}

const marks: SliderMarks = {
  0: '0\xB0C',
  26: '26\xB0C',
  37: '37\xB0C',
  100: {
    style: {
      color: '#f50'
    },
    label: <strong>100\xB0C</strong>
  }
}

const App: React.FC = () => (
  <>
    <div style={style}>
      <Slider vertical defaultValue={30} />
    </div>
    <div style={style}>
      <Slider
        vertical
        range
        step={10}
        defaultValue={[20, 50]}
      />
    </div>
    <div style={style}>
      <Slider
        vertical
        range
        marks={marks}
        defaultValue={[26, 37]}
      />
    </div>
  </>
)

export default App`,ji=`import { Slider } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Slider defaultValue={30} tooltipVisible />
)

export default App`,Hi=`import { Slider, Switch } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [reverse, setReverse] = useState(true)

  return (
    <>
      <Slider
        defaultValue={30}
        reverse={reverse}
      />
      <Slider
        range
        defaultValue={[20, 50]}
        reverse={reverse}
      />
      Reversed:{' '}
      <Switch
        size="small"
        checked={reverse}
        onChange={setReverse}
      />
    </>
  )
}

export default App`,Gi=`import { Slider } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Slider
    range={{ draggableTrack: true }}
    defaultValue={[20, 50]}
  />
)

export default App`,Ji=`import { UploadOutlined } from '@ant-design/icons'
import {
  Button,
  Popconfirm,
  Space,
  Upload
} from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space>
    Space
    <Button type="primary">Button</Button>
    <Upload>
      <Button>
        <UploadOutlined /> Click to Upload
      </Button>
    </Upload>
    <Popconfirm
      title="Are you sure delete this task?"
      okText="Yes"
      cancelText="No"
    >
      <Button>Confirm</Button>
    </Popconfirm>
  </Space>
)

export default App`,Yi=`import { Card, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space
    direction="vertical"
    size="middle"
    style={{ display: 'flex' }}
  >
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
)

export default App`,Wi=`import { Button, Radio, Space } from 'antd-packages'
import type { SpaceSize } from 'antd-packages/es/space'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [size, setSize] = useState<
    SpaceSize | [SpaceSize, SpaceSize]
  >('small')

  return (
    <>
      <Radio.Group
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <Radio value="small">Small</Radio>
        <Radio value="middle">Middle</Radio>
        <Radio value="large">Large</Radio>
      </Radio.Group>
      <br />
      <br />
      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </>
  )
}

export default App`,Qi=`import { Button, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <div className="space-align-container">
    <div className="space-align-block">
      <Space align="center">
        center
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
    <div className="space-align-block">
      <Space align="start">
        start
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
    <div className="space-align-block">
      <Space align="end">
        end
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
    <div className="space-align-block">
      <Space align="baseline">
        baseline
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
  </div>
)

export default App`,Xi=`import { Button, Slider, Space } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [size, setSize] = useState(8)

  return (
    <>
      <Slider
        value={size}
        onChange={(value) => setSize(value)}
      />
      <br />
      <br />
      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </>
  )
}

export default App`,qi=`import { Button, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space size={[8, 16]} wrap>
    {new Array(20).fill(null).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Button key={index}>Button</Button>
    ))}
  </Space>
)

export default App`,_i=`import { Button, Popconfirm, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space>
    <>
      Button
      <Button>Button</Button>
    </>
    Button
    <Popconfirm
      title="Are you sure delete this task?"
      okText="Yes"
      cancelText="No"
    >
      <Button>Delete</Button>
    </Popconfirm>
    <Popconfirm
      title="Are you sure delete this task?"
      okText="Yes"
      cancelText="No"
    >
      <Button disabled>Delete</Button>
    </Popconfirm>
    {null}
    {false}
    {1}
    Button
    {null}
    {undefined}
  </Space>
)

export default App`,nl=`import { Space, Switch } from 'antd-packages'
import React, { useState } from 'react'

const style: React.CSSProperties = {
  width: 150,
  height: 100,
  background: 'red'
}

const App: React.FC = () => {
  const [singleCol, setSingleCol] =
    useState(false)

  return (
    <>
      <Switch
        checked={singleCol}
        onChange={() => {
          setSingleCol(!singleCol)
        }}
      />
      <div style={{ boxShadow: '0 0 5px green' }}>
        <Space
          style={{
            width: singleCol ? 307 : 310,
            background: 'blue'
          }}
          size={[8, 8]}
          wrap
        >
          <div style={style} />
          <div style={style} />
          <div style={style} />
          <div style={style} />
        </Space>
      </div>
    </>
  )
}

export default App`,el=`import { Divider, Space, Typography } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space split={<Divider type="vertical" />}>
    <Typography.Link>Link</Typography.Link>
    <Typography.Link>Link</Typography.Link>
    <Typography.Link>Link</Typography.Link>
  </Space>
)

export default App`,tl=`import { Spin } from 'antd-packages'
import React from 'react'

const App: React.FC = () => <Spin />

export default App`,al=`import { Space, Spin } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
)

export default App`,rl=`import { Spin } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <div className="example">
    <Spin />
  </div>
)

export default App`,ol=`import { Alert, Spin, Switch } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [loading, setLoading] = useState(false)

  const toggle = (checked: boolean) => {
    setLoading(checked)
  }

  return (
    <div>
      <Spin spinning={loading}>
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
      <div style={{ marginTop: 16 }}>
        Loading state\uFF1A
        <Switch
          checked={loading}
          onChange={toggle}
        />
      </div>
    </div>
  )
}

export default App`,sl=`import { Alert, Spin } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </Spin>
)

export default App`,il=`import { Alert, Spin, Switch } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [loading, setLoading] = useState(false)

  const toggle = (checked: boolean) => {
    setLoading(checked)
  }
  const container = (
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  )

  return (
    <div>
      <Spin spinning={loading} delay={500}>
        {container}
      </Spin>
      <div style={{ marginTop: 16 }}>
        Loading state\uFF1A
        <Switch
          checked={loading}
          onChange={toggle}
        />
      </div>
    </div>
  )
}

export default App`,ll=`import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd-packages'
import React from 'react'

const antIcon = (
  <LoadingOutlined
    style={{ fontSize: 24 }}
    spin
  />
)

const App: React.FC = () => (
  <Spin indicator={antIcon} />
)

export default App`,dl=`import { Button, Col, Row, Statistic } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic
        title="Active Users"
        value={112893}
      />
    </Col>
    <Col span={12}>
      <Statistic
        title="Account Balance (CNY)"
        value={112893}
        precision={2}
      />
      <Button
        style={{ marginTop: 16 }}
        type="primary"
      >
        Recharge
      </Button>
    </Col>
    <Col span={12}>
      <Statistic
        title="Active Users"
        value={112893}
        loading
      />
    </Col>
  </Row>
)

export default App`,cl=`import { LikeOutlined } from '@ant-design/icons'
import { Col, Row, Statistic } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic
        title="Feedback"
        value={1128}
        prefix={<LikeOutlined />}
      />
    </Col>
    <Col span={12}>
      <Statistic
        title="Unmerged"
        value={93}
        suffix="/ 100"
      />
    </Col>
  </Row>
)

export default App`,pl=`import {
  ArrowDownOutlined,
  ArrowUpOutlined
} from '@ant-design/icons'
import { Card, Col, Row, Statistic } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <div className="site-statistic-demo-card">
    <Row gutter={16}>
      <Col span={12}>
        <Card>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  </div>
)

export default App`,ul=`import { Col, Row, Statistic } from 'antd-packages'
import type { countdownValueType } from 'antd-packages/lib/statistic/utils'
import React from 'react'

const { Countdown } = Statistic
const deadline =
  Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30 // Moment is also OK

const App: React.FC = () => {
  const onFinish = () => {
    console.log('finished!')
  }

  const onChange = (val: countdownValueType) => {
    if (4.95 * 1000 < val && val < 5 * 1000) {
      console.log('changed!')
    }
  }

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Countdown
          title="Countdown"
          value={deadline}
          onFinish={onFinish}
        />
      </Col>
      <Col span={12}>
        <Countdown
          title="Million Seconds"
          value={deadline}
          format="HH:mm:ss:SSS"
        />
      </Col>
      <Col span={24} style={{ marginTop: 32 }}>
        <Countdown
          title="Day Level"
          value={deadline}
          format="D \u5929 H \u65F6 m \u5206 s \u79D2"
        />
      </Col>
      <Col span={12}>
        <Countdown
          title="Countdown"
          value={Date.now() + 10 * 1000}
          onChange={onChange}
        />
      </Col>
    </Row>
  )
}

export default App`,ml=`import { Steps } from 'antd-packages'
import React from 'react'

const { Step } = Steps

const App: React.FC = () => (
  <Steps current={1}>
    <Step
      title="Finished"
      description="This is a description."
    />
    <Step
      title="In Progress"
      subTitle="Left 00:00:08"
      description="This is a description."
    />
    <Step
      title="Waiting"
      description="This is a description."
    />
  </Steps>
)

export default App`,gl=`import { Steps } from 'antd-packages'
import React from 'react'

const { Step } = Steps

const App: React.FC = () => (
  <Steps size="small" current={1}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
  </Steps>
)

export default App`,fl=`import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Steps } from 'antd-packages'
import React from 'react'

const { Step } = Steps

const App: React.FC = () => (
  <Steps>
    <Step
      status="finish"
      title="Login"
      icon={<UserOutlined />}
    />
    <Step
      status="finish"
      title="Verification"
      icon={<SolutionOutlined />}
    />
    <Step
      status="process"
      title="Pay"
      icon={<LoadingOutlined />}
    />
    <Step
      status="wait"
      title="Done"
      icon={<SmileOutlined />}
    />
  </Steps>
)

export default App`,vl=`import { Button, message, Steps } from 'antd-packages'
import React, { useState } from 'react'

const { Step } = Steps

const steps = [
  {
    title: 'First',
    content: 'First-content'
  },
  {
    title: 'Second',
    content: 'Second-content'
  },
  {
    title: 'Last',
    content: 'Last-content'
  }
]

const App: React.FC = () => {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step
            key={item.title}
            title={item.title}
          />
        ))}
      </Steps>
      <div className="steps-content">
        {steps[current].content}
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => next()}
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() =>
              message.success(
                'Processing complete!'
              )
            }
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  )
}

export default App`,hl=`import { Steps } from 'antd-packages'
import React from 'react'

const { Step } = Steps

const App: React.FC = () => (
  <Steps direction="vertical" current={1}>
    <Step
      title="Finished"
      description="This is a description."
    />
    <Step
      title="In Progress"
      description="This is a description."
    />
    <Step
      title="Waiting"
      description="This is a description."
    />
  </Steps>
)

export default App`,yl=`import { Steps } from 'antd-packages'
import React from 'react'

const { Step } = Steps

const App: React.FC = () => (
  <Steps
    direction="vertical"
    size="small"
    current={1}
  >
    <Step
      title="Finished"
      description="This is a description."
    />
    <Step
      title="In Progress"
      description="This is a description."
    />
    <Step
      title="Waiting"
      description="This is a description."
    />
  </Steps>
)

export default App`,Cl=`import { Steps } from 'antd-packages'
import React from 'react'

const { Step } = Steps

const App: React.FC = () => (
  <Steps current={1} status="error">
    <Step
      title="Finished"
      description="This is a description"
    />
    <Step
      title="In Process"
      description="This is a description"
    />
    <Step
      title="Waiting"
      description="This is a description"
    />
  </Steps>
)

export default App`,wl=`import { Divider, Steps } from 'antd-packages'
import React from 'react'

const { Step } = Steps

const App: React.FC = () => (
  <>
    <Steps progressDot current={1}>
      <Step
        title="Finished"
        description="This is a description."
      />
      <Step
        title="In Progress"
        description="This is a description."
      />
      <Step
        title="Waiting"
        description="This is a description."
      />
    </Steps>
    <Divider />
    <Steps
      progressDot
      current={1}
      direction="vertical"
    >
      <Step
        title="Finished"
        description="This is a description. This is a description."
      />
      <Step
        title="Finished"
        description="This is a description. This is a description."
      />
      <Step
        title="In Progress"
        description="This is a description. This is a description."
      />
      <Step
        title="Waiting"
        description="This is a description."
      />
      <Step
        title="Waiting"
        description="This is a description."
      />
    </Steps>
  </>
)

export default App`,kl=`import type { StepsProps } from 'antd-packages'
import { Popover, Steps } from 'antd-packages'
import React from 'react'

const { Step } = Steps

const customDot: StepsProps['progressDot'] = (
  dot,
  { status, index }
) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
)

const App: React.FC = () => (
  <Steps current={1} progressDot={customDot}>
    <Step
      title="Finished"
      description="You can hover on the dot."
    />
    <Step
      title="In Progress"
      description="You can hover on the dot."
    />
    <Step
      title="Waiting"
      description="You can hover on the dot."
    />
    <Step
      title="Waiting"
      description="You can hover on the dot."
    />
  </Steps>
)

export default App`,bl=`import { Divider, Steps } from 'antd-packages'
import React from 'react'

const { Step } = Steps

const App: React.FC = () => (
  <>
    <Steps progressDot current={1} size="small">
      <Step
        title="Finished"
        description="This is a description."
      />
      <Step
        title="In Progress"
        description="This is a description."
      />
      <Step
        title="Waiting"
        description="This is a description."
      />
    </Steps>
    <Divider />
    <Steps
      progressDot
      current={1}
      direction="vertical"
      size="small"
    >
      <Step
        title="Finished"
        description="This is a description. This is a description."
      />
      <Step
        title="Finished"
        description="This is a description. This is a description."
      />
      <Step
        title="In Progress"
        description="This is a description. This is a description."
      />
      <Step
        title="Waiting"
        description="This is a description."
      />
      <Step
        title="Waiting"
        description="This is a description."
      />
    </Steps>
  </>
)

export default App`,Sl=`import { Divider, Steps } from 'antd-packages'
import React, { useState } from 'react'

const { Step } = Steps

const App: React.FC = () => {
  const [current, setCurrent] = useState(0)

  const onChange = (value: number) => {
    console.log('onChange:', current)
    setCurrent(value)
  }

  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
      >
        <Step
          title="Step 1"
          description="This is a description."
        />
        <Step
          title="Step 2"
          description="This is a description."
        />
        <Step
          title="Step 3"
          description="This is a description."
        />
      </Steps>

      <Divider />

      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
      >
        <Step
          title="Step 1"
          description="This is a description."
        />
        <Step
          title="Step 2"
          description="This is a description."
        />
        <Step
          title="Step 3"
          description="This is a description."
        />
      </Steps>
    </>
  )
}

export default App`,Pl=`import { Steps } from 'antd-packages'
import React, { useState } from 'react'

const { Step } = Steps

const App: React.FC = () => {
  const [current, setCurrent] = useState(0)

  const onChange = (value: number) => {
    console.log('onChange:', value)
    setCurrent(value)
  }

  return (
    <>
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
      >
        <Step
          title="Step 1"
          subTitle="00:00:05"
          status="finish"
          description="This is a description."
        />
        <Step
          title="Step 2"
          subTitle="00:01:02"
          status="process"
          description="This is a description."
        />
        <Step
          title="Step 3"
          subTitle="waiting for longlong time"
          status="wait"
          description="This is a description."
        />
      </Steps>
      <Steps
        type="navigation"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
      >
        <Step status="finish" title="Step 1" />
        <Step status="process" title="Step 2" />
        <Step status="wait" title="Step 3" />
        <Step status="wait" title="Step 4" />
      </Steps>
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
      >
        <Step status="finish" title="finish 1" />
        <Step status="finish" title="finish 2" />
        <Step
          status="process"
          title="current process"
        />
        <Step
          status="wait"
          title="wait"
          disabled
        />
      </Steps>
    </>
  )
}

export default App`,Rl=`import { Steps } from 'antd-packages'
import React from 'react'

const { Step } = Steps

const App: React.FC = () => (
  <Steps current={1} percent={60}>
    <Step
      title="Finished"
      description="This is a description."
    />
    <Step
      title="In Progress"
      subTitle="Left 00:00:08"
      description="This is a description."
    />
    <Step
      title="Waiting"
      description="This is a description."
    />
  </Steps>
)

export default App`,Tl=`import type { StepsProps } from 'antd-packages'
import { Button, Steps } from 'antd-packages'
import React, { useState } from 'react'

const { Step } = Steps

const App: React.FC = () => {
  const [percent, setPercentage] = useState(0)
  const [current, setCurrent] = useState(1)
  const [status, setStatus] =
    useState<StepsProps['status']>('process')
  return (
    <>
      <Button onClick={() => setPercentage(0)}>
        Percentage to undefined
      </Button>
      <Button
        onClick={() =>
          setPercentage((percent + 10) % 100)
        }
      >
        Percentage +
      </Button>
      <Button
        onClick={() => {
          setCurrent((current + 1) % 3)
          setPercentage(0)
        }}
      >
        Current +
      </Button>
      <Button onClick={() => setStatus('wait')}>
        Status Wait
      </Button>
      <Button
        onClick={() => setStatus('process')}
      >
        Status Process
      </Button>
      <Button onClick={() => setStatus('finish')}>
        Status Finish
      </Button>
      <Button onClick={() => setStatus('error')}>
        Status Error
      </Button>
      <Steps
        current={current}
        percent={percent}
        status={status}
      >
        <Step
          title="Finished"
          description="This is a description."
        />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step
          title="Waiting"
          description="This is a description."
        />
      </Steps>
      <Steps
        current={current}
        percent={percent}
        status={status}
        size="small"
      >
        <Step
          title="Finished"
          description="This is a description."
        />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step
          title="Waiting"
          description="This is a description."
        />
      </Steps>
      <Steps
        current={current}
        percent={percent}
        status={status}
        direction="vertical"
      >
        <Step
          title="Finished"
          description="This is a description."
        />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step
          title="Waiting"
          description="This is a description."
        />
      </Steps>
      <Steps
        current={current}
        percent={percent}
        status={status}
        size="small"
        direction="vertical"
      >
        <Step
          title="Finished"
          description="This is a description."
        />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step
          title="Waiting"
          description="This is a description."
        />
      </Steps>
    </>
  )
}

export default App`,xl=`import type { StepsProps } from 'antd-packages'
import { Card, Radio, Steps } from 'antd-packages'
import React, { useState } from 'react'

const { Step } = Steps

const App: React.FC = () => {
  const [size, setSize] =
    useState<StepsProps['size']>('default')

  const horizontalSteps = (
    <Card>
      <Steps size={size}>
        <Step
          title="Finished"
          description="This is a description."
        />
        <Step
          title="In Progress"
          description="This is a description."
        />
        <Step
          title="Waiting"
          description="This is a description."
        />
      </Steps>
    </Card>
  )

  return (
    <>
      <Radio.Group
        style={{ marginBottom: 16 }}
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <Radio value="small">Small</Radio>
        <Radio value="default">Default</Radio>
      </Radio.Group>
      <Steps size={size} direction="vertical">
        <Step
          title="Finished"
          description={horizontalSteps}
        />
        <Step
          title="In Progress"
          description="This is a description."
        />
        <Step
          title="Waiting"
          description="This is a description."
        />
      </Steps>
    </>
  )
}

export default App`,Il=`import { Switch } from 'antd-packages'
import React from 'react'

const onChange = (checked: boolean) => {
  console.log(\`switch to \${checked}\`)
}

const App: React.FC = () => (
  <Switch defaultChecked onChange={onChange} />
)

export default App`,Al=`import { Button, Switch } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true)

  const toggle = () => {
    setDisabled(!disabled)
  }

  return (
    <>
      <Switch
        disabled={disabled}
        defaultChecked
      />
      <br />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </>
  )
}

export default App`,Bl=`import {
  CheckOutlined,
  CloseOutlined
} from '@ant-design/icons'
import { Switch } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Switch
      checkedChildren="\u5F00\u542F"
      unCheckedChildren="\u5173\u95ED"
      defaultChecked
    />
    <br />
    <Switch
      checkedChildren="1"
      unCheckedChildren="0"
    />
    <br />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </>
)

export default App`,Dl=`/**
 * title: \u4E24\u79CD\u5927\u5C0F
 * desc: \`size="small"\`\u8868\u793A\u5C0F\u53F7\u5F00\u5173\u3002
 */

import { Switch } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </>
)

export default App`,Fl=`import { Switch } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </>
)

export default App`,Ol=`import { Space, Table, Tag } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color =
            tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    )
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

const App: React.FC = () => (
  <Table columns={columns} dataSource={data} />
)

export default App`,Ll=`import { Space, Table, Tag } from 'antd-packages'
import React from 'react'

const { Column, ColumnGroup } = Table

interface DataType {
  key: React.Key
  firstName: string
  lastName: string
  age: number
  address: string
  tags: string[]
}

const data: DataType[] = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

const App: React.FC = () => (
  <Table dataSource={data}>
    <ColumnGroup title="Name">
      <Column
        title="First Name"
        dataIndex="firstName"
        key="firstName"
      />
      <Column
        title="Last Name"
        dataIndex="lastName"
        key="lastName"
      />
    </ColumnGroup>
    <Column
      title="Age"
      dataIndex="age"
      key="age"
    />
    <Column
      title="Address"
      dataIndex="address"
      key="address"
    />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags: string[]) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(_: any, record: DataType) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
)

export default App`,Nl=`import { Divider, Radio, Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React, { useState } from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park'
  }
]

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (
    selectedRowKeys: React.Key[],
    selectedRows: DataType[]
  ) => {
    console.log(
      \`selectedRowKeys: \${selectedRowKeys}\`,
      'selectedRows: ',
      selectedRows
    )
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name
  })
}

const App: React.FC = () => {
  const [selectionType, setSelectionType] =
    useState<'checkbox' | 'radio'>('checkbox')

  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value)
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}

export default App`,Ml=`import { Button, Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React, { useState } from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data: DataType[] = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: \`Edward King \${i}\`,
    age: 32,
    address: \`London, Park Lane no. \${i}\`
  })
}

const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] =
    useState<React.Key[]>([])
  const [loading, setLoading] = useState(false)

  const start = () => {
    setLoading(true)
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([])
      setLoading(false)
    }, 1000)
  }

  const onSelectChange = (
    newSelectedRowKeys: React.Key[]
  ) => {
    console.log(
      'selectedRowKeys changed: ',
      selectedRowKeys
    )
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }
  const hasSelected = selectedRowKeys.length > 0

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected
            ? \`Selected \${selectedRowKeys.length} items\`
            : ''}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}

export default App`,zl=`import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import type { TableRowSelection } from 'antd-packages/lib/table/interface'
import React, { useState } from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data: DataType[] = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: \`Edward King \${i}\`,
    age: 32,
    address: \`London, Park Lane no. \${i}\`
  })
}

const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] =
    useState<React.Key[]>([])

  const onSelectChange = (
    newSelectedRowKeys: React.Key[]
  ) => {
    console.log(
      'selectedRowKeys changed: ',
      selectedRowKeys
    )
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection: TableRowSelection<DataType> =
  {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = []
          newSelectedRowKeys =
            changableRowKeys.filter(
              (_, index) => {
                if (index % 2 !== 0) {
                  return false
                }
                return true
              }
            )
          setSelectedRowKeys(newSelectedRowKeys)
        }
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = []
          newSelectedRowKeys =
            changableRowKeys.filter(
              (_, index) => {
                if (index % 2 !== 0) {
                  return true
                }
                return false
              }
            )
          setSelectedRowKeys(newSelectedRowKeys)
        }
      }
    ]
  }

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
    />
  )
}

export default App`,El=`import { Table } from 'antd-packages'
import type {
  ColumnsType,
  TableProps
} from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe'
      },
      {
        text: 'Jim',
        value: 'Jim'
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green'
          },
          {
            text: 'Black',
            value: 'Black'
          }
        ]
      }
    ],
    // specify the condition of filtering result
    // here is that finding the name started with \`value\`
    onFilter: (value: string, record) =>
      record.name.indexOf(value) === 0,
    sorter: (a, b) =>
      a.name.length - b.name.length,
    sortDirections: ['descend']
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London'
      },
      {
        text: 'New York',
        value: 'New York'
      }
    ],
    onFilter: (value: string, record) =>
      record.address.indexOf(value) === 0
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
]

const onChange: TableProps<DataType>['onChange'] =
  (pagination, filters, sorter, extra) => {
    console.log(
      'params',
      pagination,
      filters,
      sorter,
      extra
    )
  }

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
  />
)

export default App`,$l=`import { Table } from 'antd-packages'
import type {
  ColumnsType,
  TableProps
} from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe'
      },
      {
        text: 'Category 1',
        value: 'Category 1',
        children: [
          {
            text: 'Yellow',
            value: 'Yellow'
          },
          {
            text: 'Pink',
            value: 'Pink'
          }
        ]
      },
      {
        text: 'Category 2',
        value: 'Category 2',
        children: [
          {
            text: 'Green',
            value: 'Green'
          },
          {
            text: 'Black',
            value: 'Black'
          }
        ]
      }
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value: string, record) =>
      record.name.includes(value),
    width: '30%'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London'
      },
      {
        text: 'New York',
        value: 'New York'
      }
    ],
    onFilter: (value: string, record) =>
      record.address.startsWith(value),
    filterSearch: true,
    width: '40%'
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
]

const onChange: TableProps<DataType>['onChange'] =
  (pagination, filters, sorter, extra) => {
    console.log(
      'params',
      pagination,
      filters,
      sorter,
      extra
    )
  }

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
  />
)

export default App`,Zl=`/**
 * title: \u81EA\u5B9A\u4E49\u7B5B\u9009\u7684\u641C\u7D22
 * desc: \`filterSearch\`\u7528\u4E8E\u5F00\u542F\u7B5B\u9009\u9879\u7684\u641C\u7D22\uFF0C\u901A\u8FC7\`filterSearch:(input,record)=>boolean\`\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u7B5B\u9009\u65B9\u6CD5
 */

import { Table } from 'antd-packages'
import type {
  ColumnsType,
  TableProps
} from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe'
      },
      {
        text: 'Category 1',
        value: 'Category 1'
      },
      {
        text: 'Category 2',
        value: 'Category 2'
      }
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value: string, record) =>
      record.address.startsWith(value),
    width: '30%'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: <span>London</span>,
        value: 'London'
      },
      {
        text: <span>New York</span>,
        value: 'New York'
      }
    ],
    onFilter: (value: string, record) =>
      record.address.startsWith(value),
    filterSearch: true,
    width: '40%'
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
]

const onChange: TableProps<DataType>['onChange'] =
  (pagination, filters, sorter, extra) => {
    console.log(
      'params',
      pagination,
      filters,
      sorter,
      extra
    )
  }

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
  />
)

export default App`,Vl=`/**
 * title: \u591A\u5217\u6392\u5E8F
 * desc: \`column.sorter\`\u652F\u6301\`multiple\`\u5B57\u6BB5\u4EE5\u914D\u7F6E\u591A\u5217\u6392\u5E8F\u4F18\u5148\u7EA7\u3002\u901A\u8FC7\`sorter.compare\`\u914D\u7F6E\u6392\u5E8F\u903B\u8F91\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4E0D\u8BBE\u7F6E\u8BE5\u51FD\u6570\u53EA\u542F\u52A8\u591A\u5217\u6392\u5E8F\u7684\u4EA4\u4E92\u5F62\u5F0F\u3002
 */

import { Table } from 'antd-packages'
import type {
  ColumnsType,
  TableProps
} from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  chinese: number
  math: number
  english: number
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Chinese Score',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3
    }
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2
    }
  },
  {
    title: 'English Score',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1
    }
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89
  }
]

const onChange: TableProps<DataType>['onChange'] =
  (pagination, filters, sorter, extra) => {
    console.log(
      'params',
      pagination,
      filters,
      sorter,
      extra
    )
  }

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
  />
)

export default App`,Kl=`import type { TableProps } from 'antd-packages'
import { Button, Space, Table } from 'antd-packages'
import type {
  ColumnsType,
  FilterValue,
  SorterResult
} from 'antd-packages/lib/table/interface'
import React, { useState } from 'react'

interface DataType {
  key: string
  name: string
  age: number
  address: string
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
]

const App: React.FC = () => {
  const [filteredInfo, setFilteredInfo] =
    useState<Record<string, FilterValue | null>>(
      {}
    )
  const [sortedInfo, setSortedInfo] = useState<
    SorterResult<DataType>
  >({})

  const handleChange: TableProps<DataType>['onChange'] =
    (pagination, filters, sorter) => {
      console.log(
        'Various parameters',
        pagination,
        filters,
        sorter
      )
      setFilteredInfo(filters)
      setSortedInfo(
        sorter as SorterResult<DataType>
      )
    }

  const clearFilters = () => {
    setFilteredInfo({})
  }

  const clearAll = () => {
    setFilteredInfo({})
    setSortedInfo({})
  }

  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age'
    })
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' }
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value: string, record) =>
        record.name.includes(value),
      sorter: (a, b) =>
        a.name.length - b.name.length,
      sortOrder:
        sortedInfo.columnKey === 'name'
          ? sortedInfo.order
          : null,
      ellipsis: true
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder:
        sortedInfo.columnKey === 'age'
          ? sortedInfo.order
          : null,
      ellipsis: true
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: [
        { text: 'London', value: 'London' },
        { text: 'New York', value: 'New York' }
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value: string, record) =>
        record.address.includes(value),
      sorter: (a, b) =>
        a.address.length - b.address.length,
      sortOrder:
        sortedInfo.columnKey === 'address'
          ? sortedInfo.order
          : null,
      ellipsis: true
    }
  ]

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={setAgeSort}>
          Sort age
        </Button>
        <Button onClick={clearFilters}>
          Clear filters
        </Button>
        <Button onClick={clearAll}>
          Clear filters and sorters
        </Button>
      </Space>
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleChange}
      />
    </>
  )
}

export default App`,Ul=`import { SearchOutlined } from '@ant-design/icons'
import type { InputRef } from 'antd-packages'
import { Button, Input, Space, Table } from 'antd-packages'
import type {
  ColumnsType,
  ColumnType
} from 'antd-packages/lib/table'
import type { FilterConfirmProps } from 'antd-packages/lib/table/interface'
import React, { useRef, useState } from 'react'
import Highlighter from 'react-highlight-words'

interface DataType {
  key: string
  name: string
  age: number
  address: string
}

type DataIndex = keyof DataType

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
]

const App: React.FC = () => {
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] =
    useState('')
  const searchInput = useRef<InputRef>(null)

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }

  const handleReset = (
    clearFilters: () => void
  ) => {
    clearFilters()
    setSearchText('')
  }

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={\`Search \${dataIndex}\`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(
              e.target.value
                ? [e.target.value]
                : []
            )
          }
          onPressEnter={() =>
            handleSearch(
              selectedKeys as string[],
              confirm,
              dataIndex
            )
          }
          style={{
            marginBottom: 8,
            display: 'block'
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(
                selectedKeys as string[],
                confirm,
                dataIndex
              )
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() =>
              clearFilters &&
              handleReset(clearFilters)
            }
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false })
              setSearchText(
                (selectedKeys as string[])[0]
              )
              setSearchedColumn(dataIndex)
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(
          (value as string).toLowerCase()
        ),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(
          () => searchInput.current?.select(),
          100
        )
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={
            text ? text.toString() : ''
          }
        />
      ) : (
        text
      )
  })

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name')
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...getColumnSearchProps('age')
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) =>
        a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend']
    }
  ]

  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default App`,jl=`import { Table } from 'antd-packages'
import type {
  ColumnsType,
  TablePaginationConfig
} from 'antd-packages/lib/table'
import type {
  FilterValue,
  SorterResult
} from 'antd-packages/lib/table/interface'
import qs from 'qs'
import React, { useEffect, useState } from 'react'

interface DataType {
  name: {
    first: string
    last: string
  }
  gender: string
  email: string
  login: {
    uuid: string
  }
}

interface Params {
  pagination?: TablePaginationConfig
  sorter?: SorterResult<any> | SorterResult<any>[]
  total?: number
  sortField?: string
  sortOrder?: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: (name) =>
      \`\${name.first} \${name.last}\`,
    width: '20%'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' }
    ],
    width: '20%'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
]

const getRandomuserParams = (params: Params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params
})

const App: React.FC = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] =
    useState<TablePaginationConfig>({
      current: 1,
      pageSize: 10
    })

  const fetchData = (params: Params = {}) => {
    setLoading(true)
    fetch(
      \`https://randomuser.me/api?\${qs.stringify(
        getRandomuserParams(params)
      )}\`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results)
        setLoading(false)
        setPagination({
          ...params.pagination,
          total: 200
          // 200 is mock data, you should read it from server
          // total: data.totalCount,
        })
      })
  }

  useEffect(() => {
    fetchData({ pagination })
  }, [])

  const handleTableChange = (
    newPagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<DataType>
  ) => {
    fetchData({
      sortField: sorter.field as string,
      sortOrder: sorter.order as string,
      pagination: newPagination,
      ...filters
    })
  }

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  )
}

export default App`,Hl=`import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
]

const App: React.FC = () => (
  <div>
    <h4>Middle size table</h4>
    <Table
      columns={columns}
      dataSource={data}
      size="middle"
    />
    <h4>Small size table</h4>
    <Table
      columns={columns}
      dataSource={data}
      size="small"
    />
  </div>
)

export default App`,Gl=`import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data: DataType[] = []

for (let i = 0; i < 200; i += 1) {
  data.push({
    key: i,
    name: 'Sample Name',
    age: 30 + (i % 5),
    address: \`Sample Address \${i}\`
  })
}

const App: React.FC = () => (
  <div style={{ width: 300 }}>
    <Table
      columns={columns}
      dataSource={data}
      size="small"
      pagination={{ defaultCurrent: 13 }}
    />
  </div>
)

export default App`,Jl=`import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: string
  name: string
  money: string
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
    align: 'right'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    money: '\uFFE5300,000.00',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '\uFFE51,256,000.00',
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '\uFFE5120,000.00',
    address: 'Sidney No. 1 Lake Park'
  }
]

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
    title={() => 'Header'}
    footer={() => 'Footer'}
  />
)

export default App`,Yl=`import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
  description: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>
  }
]

const data: DataType[] = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description:
      'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable'
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description:
      'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
  }
]

const App: React.FC = () => (
  <Table
    columns={columns}
    expandable={{
      expandedRowRender: (record) => (
        <p style={{ margin: 0 }}>
          {record.description}
        </p>
      ),
      rowExpandable: (record) =>
        record.name !== 'Not Expandable'
    }}
    dataSource={data}
  />
)

export default App`,Wl=`import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
  description: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  Table.EXPAND_COLUMN,
  { title: 'Age', dataIndex: 'age', key: 'age' },
  Table.SELECTION_COLUMN,
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }
]

const data: DataType[] = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description:
      'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable'
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description:
      'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
  }
]

const App: React.FC = () => (
  <Table
    columns={columns}
    rowSelection={{}}
    expandable={{
      expandedRowRender: (record) => (
        <p style={{ margin: 0 }}>
          {record.description}
        </p>
      )
    }}
    dataSource={data}
  />
)

export default App`,Ql=`import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: string
  name: string
  age: number
  tel: string
  phone: number
  address: string
}

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const sharedOnCell = (
  _: DataType,
  index: number
) => {
  if (index === 4) {
    return { colSpan: 0 }
  }

  return {}
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
    onCell: (_, index) => ({
      colSpan: (index as number) < 4 ? 1 : 5
    })
  },
  {
    title: 'Age',
    dataIndex: 'age',
    onCell: sharedOnCell
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    onCell: (_, index) => {
      if (index === 2) {
        return { rowSpan: 2 }
      }
      // These two are merged into above cell
      if (index === 3) {
        return { rowSpan: 0 }
      }
      if (index === 4) {
        return { colSpan: 0 }
      }

      return {}
    }
  },
  {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
    onCell: sharedOnCell
  },
  {
    title: 'Address',
    dataIndex: 'address',
    onCell: sharedOnCell
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park'
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park'
  }
]

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
  />
)

export default App`,Xl=`import { Space, Switch, Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import type { TableRowSelection } from 'antd-packages/lib/table/interface'
import React, { useState } from 'react'

interface DataType {
  key: React.ReactNode
  name: string
  age: number
  address: string
  children?: DataType[]
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address'
  }
]

const data: DataType[] = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park'
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park'
          }
        ]
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park'
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
]

// rowSelection objects indicates the need for row selection
const rowSelection: TableRowSelection<DataType> =
{
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      \`selectedRowKeys: \${selectedRowKeys}\`,
      'selectedRows: ',
      selectedRows
    )
  },
  onSelect: (
    record,
    selected,
    selectedRows
  ) => {
    console.log(record, selected, selectedRows)
  },
  onSelectAll: (
    selected,
    selectedRows,
    changeRows
  ) => {
    console.log(
      selected,
      selectedRows,
      changeRows
    )
  }
}

const App: React.FC = () => {
  const [checkStrictly, setCheckStrictly] =
    useState(false)

  return (
    <>
      <Space
        align="center"
        style={{ marginBottom: 16 }}
      >
        CheckStrictly:{' '}
        <Switch
          checked={checkStrictly}
          onChange={setCheckStrictly}
        />
      </Space>
      <Table
        columns={columns}
        rowSelection={{
          ...rowSelection,
          checkStrictly
        }}
        dataSource={data}
      />
    </>
  )
}

export default App`,ql=`import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data: DataType[] = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: \`Edward King \${i}\`,
    age: 32,
    address: \`London, Park Lane no. \${i}\`
  })
}

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={{ pageSize: 50 }}
    scroll={{ y: 240 }}
  />
)

export default App`,_l=`import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left'
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left'
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1'
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2'
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3'
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4'
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5'
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6'
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7'
  },
  {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8'
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park'
  }
]

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{ x: 1300 }}
  />
)

export default App`,nd=`import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left'
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left'
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150
  },
  {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8'
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>
  }
]

const data: DataType[] = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: \`Edrward \${i}\`,
    age: 32,
    address: \`London Park no. \${i}\`
  })
}

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{ x: 1500, y: 300 }}
  />
)

export default App`,ed=`/**
 * title: \u8868\u5934\u5206\u7EC4
 * desc: \`columns[n]\`\u53EF\u4EE5\u5185\u5D4C\`children\`\uFF0C\u4EE5\u6E32\u67D3\u5206\u7EC4\u8868\u5934\u3002
 */

import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  street: string
  building: string
  number: number
  companyAddress: string
  companyName: string
  gender: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
    filters: [
      {
        text: 'Joe',
        value: 'Joe'
      },
      {
        text: 'John',
        value: 'John'
      }
    ],
    onFilter: (value: string, record) =>
      record.name.indexOf(value) === 0
  },
  {
    title: 'Other',
    children: [
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 150,
        sorter: (a, b) => a.age - b.age
      },
      {
        title: 'Address',
        children: [
          {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            width: 150
          },
          {
            title: 'Block',
            children: [
              {
                title: 'Building',
                dataIndex: 'building',
                key: 'building',
                width: 100
              },
              {
                title: 'Door No.',
                dataIndex: 'number',
                key: 'number',
                width: 100
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Company',
    children: [
      {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
        width: 200
      },
      {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName'
      }
    ]
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    fixed: 'right'
  }
]

const data: DataType[] = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M'
  })
}

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
    size="middle"
    scroll={{ x: 'calc(700px + 50%)', y: 240 }}
  />
)

export default App`,td=`import type { InputRef } from 'antd-packages'
import {
  Button,
  Form,
  Input,
  Popconfirm,
  Table
} from 'antd-packages'
import type { FormInstance } from 'antd-packages/lib/form'
import React, {
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'

const EditableContext =
  React.createContext<FormInstance<any> | null>(
    null
  )

interface Item {
  key: string
  name: string
  age: string
  address: string
}

interface EditableRowProps {
  index: number
}

const EditableRow: React.FC<EditableRowProps> = ({
  index,
  ...props
}) => {
  const [form] = Form.useForm()
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  )
}

interface EditableCellProps {
  title: React.ReactNode
  editable: boolean
  children: React.ReactNode
  dataIndex: keyof Item
  record: Item
  handleSave: (record: Item) => void
}

const EditableCell: React.FC<
  EditableCellProps
> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
    const [editing, setEditing] = useState(false)
    const inputRef = useRef<InputRef>(null)
    const form = useContext(EditableContext)!

    useEffect(() => {
      if (editing) {
        inputRef.current!.focus()
      }
    }, [editing])

    const toggleEdit = () => {
      setEditing(!editing)
      form.setFieldsValue({
        [dataIndex]: record[dataIndex]
      })
    }

    const save = async () => {
      try {
        const values = await form.validateFields()

        toggleEdit()
        handleSave({ ...record, ...values })
      } catch (errInfo) {
        console.log('Save failed:', errInfo)
      }
    }

    let childNode = children

    if (editable) {
      childNode = editing ? (
        <Form.Item
          style={{ margin: 0 }}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: \`\${title} is required.\`
            }
          ]}
        >
          <Input
            ref={inputRef}
            onPressEnter={save}
            onBlur={save}
          />
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{ paddingRight: 24 }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      )
    }

    return <td {...restProps}>{childNode}</td>
  }

type EditableTableProps = Parameters<
  typeof Table
>[0]

interface DataType {
  key: React.Key
  name: string
  age: string
  address: string
}

type ColumnTypes = Exclude<
  EditableTableProps['columns'],
  undefined
>

const App: React.FC = () => {
  const [dataSource, setDataSource] = useState<
    DataType[]
  >([
    {
      key: '0',
      name: 'Edward King 0',
      age: '32',
      address: 'London, Park Lane no. 0'
    },
    {
      key: '1',
      name: 'Edward King 1',
      age: '32',
      address: 'London, Park Lane no. 1'
    }
  ])

  const [count, setCount] = useState(2)

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter(
      (item) => item.key !== key
    )
    setDataSource(newData)
  }

  const defaultColumns: (ColumnTypes[number] & {
    editable?: boolean
    dataIndex: string
  })[] = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        editable: true
      },
      {
        title: 'age',
        dataIndex: 'age'
      },
      {
        title: 'address',
        dataIndex: 'address'
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (_, record: { key: React.Key }) =>
          dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() =>
                handleDelete(record.key)
              }
            >
              <a>Delete</a>
            </Popconfirm>
          ) : null
      }
    ]

  const handleAdd = () => {
    const newData: DataType = {
      key: count,
      name: \`Edward King \${count}\`,
      age: '32',
      address: \`London, Park Lane no. \${count}\`
    }
    setDataSource([...dataSource, newData])
    setCount(count + 1)
  }

  const handleSave = (row: DataType) => {
    const newData = [...dataSource]
    const index = newData.findIndex(
      (item) => row.key === item.key
    )
    const item = newData[index]
    newData.splice(index, 1, {
      ...item,
      ...row
    })
    setDataSource(newData)
  }

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell
    }
  }

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave
      })
    }
  })

  return (
    <div>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{ marginBottom: 16 }}
      >
        Add a row
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns as ColumnTypes}
      />
    </div>
  )
}

export default App`,ad=`import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography
} from 'antd-packages'
import React, { useState } from 'react'

interface Item {
  key: string
  name: string
  age: number
  address: string
}

const originData: Item[] = []
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: \`Edrward \${i}\`,
    age: 32,
    address: \`London Park no. \${i}\`
  })
}
interface EditableCellProps
  extends React.HTMLAttributes<HTMLElement> {
  editing: boolean
  dataIndex: string
  title: any
  inputType: 'number' | 'text'
  record: Item
  index: number
  children: React.ReactNode
}

const EditableCell: React.FC<
  EditableCellProps
> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode =
    inputType === 'number' ? (
      <InputNumber />
    ) : (
      <Input />
    )

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: \`Please Input \${title}!\`
            }
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}

const App: React.FC = () => {
  const [form] = Form.useForm()
  const [data, setData] = useState(originData)
  const [editingKey, setEditingKey] = useState('')

  const isEditing = (record: Item) =>
    record.key === editingKey

  const edit = (
    record: Partial<Item> & { key: React.Key }
  ) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record
    })
    setEditingKey(record.key)
  }

  const cancel = () => {
    setEditingKey('')
  }

  const save = async (key: React.Key) => {
    try {
      const row =
        (await form.validateFields()) as Item

      const newData = [...data]
      const index = newData.findIndex(
        (item) => key === item.key
      )
      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, {
          ...item,
          ...row
        })
        setData(newData)
        setEditingKey('')
      } else {
        newData.push(row)
        setData(newData)
        setEditingKey('')
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo)
    }
  }

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        const editable = isEditing(record)
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm
              title="Sure to cancel?"
              onConfirm={cancel}
            >
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        )
      }
    }
  ]

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType:
          col.dataIndex === 'age'
            ? 'number'
            : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    }
  })

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell
          }
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel
        }}
      />
    </Form>
  )
}

export default App`,rd=`import { DownOutlined } from '@ant-design/icons'
import type { TableColumnsType } from 'antd-packages'
import {
  Badge,
  Dropdown,
  Menu,
  Space,
  Table
} from 'antd-packages'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  platform: string
  version: string
  upgradeNum: number
  creator: string
  createdAt: string
}

interface ExpandedDataType {
  key: React.Key
  date: string
  name: string
  upgradeNum: string
}

const menu = (
  <Menu
    items={[
      { key: '1', label: 'Action 1' },
      { key: '2', label: 'Action 2' }
    ]}
  />
)

const App: React.FC = () => {
  const expandedRowRender = () => {
    const columns: TableColumnsType<ExpandedDataType> =
      [
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date'
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Status',
          key: 'state',
          render: () => (
            <span>
              <Badge status="success" />
              Finished
            </span>
          )
        },
        {
          title: 'Upgrade Status',
          dataIndex: 'upgradeNum',
          key: 'upgradeNum'
        },
        {
          title: 'Action',
          dataIndex: 'operation',
          key: 'operation',
          render: () => (
            <Space size="middle">
              <a>Pause</a>
              <a>Stop</a>
              <Dropdown overlay={menu}>
                <a>
                  More <DownOutlined />
                </a>
              </Dropdown>
            </Space>
          )
        }
      ]

    const data = []
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56'
      })
    }
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    )
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Platform',
      dataIndex: 'platform',
      key: 'platform'
    },
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version'
    },
    {
      title: 'Upgraded',
      dataIndex: 'upgradeNum',
      key: 'upgradeNum'
    },
    {
      title: 'Creator',
      dataIndex: 'creator',
      key: 'creator'
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      title: 'Action',
      key: 'operation',
      render: () => <a>Publish</a>
    }
  ]

  const data: DataType[] = []
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00'
    })
  }

  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ['0']
        }}
        dataSource={data}
      />
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ['0']
        }}
        dataSource={data}
        size="middle"
      />
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ['0']
        }}
        dataSource={data}
        size="small"
      />
    </>
  )
}

export default App`,od=`import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import update from 'immutability-helper'
import React, {
  useCallback,
  useRef,
  useState
} from 'react'
import {
  DndProvider,
  useDrag,
  useDrop
} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

interface DataType {
  key: string
  name: string
  age: number
  address: string
}

interface DraggableBodyRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  index: number
  moveRow: (
    dragIndex: number,
    hoverIndex: number
  ) => void
}

const type = 'DraggableBodyRow'

const DraggableBodyRow = ({
  index,
  moveRow,
  className,
  style,
  ...restProps
}: DraggableBodyRowProps) => {
  const ref = useRef<HTMLTableRowElement>(null)
  const [{ isOver, dropClassName }, drop] =
    useDrop({
      accept: type,
      collect: (monitor) => {
        const { index: dragIndex } =
          monitor.getItem() || {}
        if (dragIndex === index) {
          return {}
        }
        return {
          isOver: monitor.isOver(),
          dropClassName:
            dragIndex < index
              ? ' drop-over-downward'
              : ' drop-over-upward'
        }
      },
      drop: (item: { index: number }) => {
        moveRow(item.index, index)
      }
    })
  const [, drag] = useDrag({
    type,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })
  drop(drag(ref))

  return (
    <tr
      ref={ref}
      className={\`\${className}\${isOver ? dropClassName : ''
        }\`}
      style={{ cursor: 'move', ...style }}
      {...restProps}
    />
  )
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }
]

const App: React.FC = () => {
  const [data, setData] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ])

  const components = {
    body: {
      row: DraggableBodyRow
    }
  }

  const moveRow = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragRow = data[dragIndex]
      setData(
        update(data, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow]
          ]
        })
      )
    },
    [data]
  )

  return (
    <DndProvider backend={HTML5Backend}>
      <Table
        columns={columns}
        dataSource={data}
        components={components}
        onRow={(_, index) => {
          const attr = {
            index,
            moveRow
          }
          return attr as React.HTMLAttributes<any>
        }}
      />
    </DndProvider>
  )
}

export default App`,sd=`import { MenuOutlined } from '@ant-design/icons'
import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import { arrayMoveImmutable } from 'array-move'
import React, { useState } from 'react'
import type {
  SortableContainerProps,
  SortEnd
} from 'react-sortable-hoc'
import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from 'react-sortable-hoc'

interface DataType {
  key: string
  name: string
  age: number
  address: string
  index: number
}

const DragHandle = SortableHandle(() => (
  <MenuOutlined
    style={{ cursor: 'grab', color: '#999' }}
  />
))

const columns: ColumnsType<DataType> = [
  {
    title: 'Sort',
    dataIndex: 'sort',
    width: 30,
    className: 'drag-visible',
    render: () => <DragHandle />
  },
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    index: 0
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    index: 1
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    index: 2
  }
]

const SortableItem = SortableElement(
  (
    props: React.HTMLAttributes<HTMLTableRowElement>
  ) => <tr {...props} />
)
const SortableBody = SortableContainer(
  (
    props: React.HTMLAttributes<HTMLTableSectionElement>
  ) => <tbody {...props} />
)

const App: React.FC = () => {
  const [dataSource, setDataSource] =
    useState(data)

  const onSortEnd = ({
    oldIndex,
    newIndex
  }: SortEnd) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMoveImmutable(
        dataSource.slice(),
        oldIndex,
        newIndex
      ).filter((el: DataType) => !!el)
      console.log('Sorted items: ', newData)
      setDataSource(newData)
    }
  }

  const DraggableContainer = (
    props: SortableContainerProps
  ) => (
    <SortableBody
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  )

  const DraggableBodyRow: React.FC<any> = ({
    className,
    style,
    ...restProps
  }) => {
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(
      (x) => x.index === restProps['data-row-key']
    )
    return (
      <SortableItem
        index={index}
        {...restProps}
      />
    )
  }

  return (
    <Table
      pagination={false}
      dataSource={dataSource}
      columns={columns}
      rowKey="index"
      components={{
        body: {
          wrapper: DraggableContainer,
          row: DraggableBodyRow
        }
      }}
    />
  )
}

export default App`,id=`import { Table } from 'antd-packages'
import type {
  ColumnsType,
  ColumnType
} from 'antd-packages/lib/table'
import React, { useState } from 'react'
import type { ResizeCallbackData } from 'react-resizable'
import { Resizable } from 'react-resizable'

interface DataType {
  key: React.Key
  date: string
  amount: number
  type: string
  note: string
}

const ResizableTitle = (
  props: React.HTMLAttributes<any> & {
    onResize: (
      e: React.SyntheticEvent<Element>,
      data: ResizeCallbackData
    ) => void
    width: number
  }
) => {
  const { onResize, width, ...restProps } = props

  if (!width) {
    return <th {...restProps} />
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={(e) => {
            e.stopPropagation()
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{
        enableUserSelectHack: false
      }}
    >
      <th {...restProps} />
    </Resizable>
  )
}

const App: React.FC = () => {
  const [columns, setColumns] = useState<
    ColumnsType<DataType>
  >([
    {
      title: 'Date',
      dataIndex: 'date',
      width: 200
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      width: 100,
      sorter: (a, b) => a.amount - b.amount
    },
    {
      title: 'Type',
      dataIndex: 'type',
      width: 100
    },
    {
      title: 'Note',
      dataIndex: 'note',
      width: 100
    },
    {
      title: 'Action',
      key: 'action',
      render: () => <a>Delete</a>
    }
  ])
  const data: DataType[] = [
    {
      key: 0,
      date: '2018-02-11',
      amount: 120,
      type: 'income',
      note: 'transfer'
    },
    {
      key: 1,
      date: '2018-03-11',
      amount: 243,
      type: 'income',
      note: 'transfer'
    },
    {
      key: 2,
      date: '2018-04-11',
      amount: 98,
      type: 'income',
      note: 'transfer'
    }
  ]

  const handleResize =
    (index: number) =>
      (
        _: React.SyntheticEvent<Element>,
        { size }: ResizeCallbackData
      ) => {
        const newColumns = [...columns]
        newColumns[index] = {
          ...newColumns[index],
          width: size.width
        }
        setColumns(newColumns)
      }

  const mergeColumns: ColumnsType<DataType> =
    columns.map((col, index) => ({
      ...col,
      onHeaderCell: (column) => ({
        width: (column as ColumnType<DataType>)
          .width,
        onResize: handleResize(index)
      })
    }))

  return (
    <Table
      bordered
      components={{
        header: {
          cell: ResizableTitle
        }
      }}
      columns={mergeColumns}
      dataSource={data}
    />
  )
}

export default App`,ld=`import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    width: 150
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address:
      'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address:
      'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address:
      'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

const App: React.FC = () => (
  <Table columns={columns} dataSource={data} />
)

export default App`,dd=`import { Table, Tooltip } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    width: 150
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: {
      showTitle: false
    },
    render: (address) => (
      <Tooltip
        placement="topLeft"
        title={address}
      >
        {address}
      </Tooltip>
    )
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: {
      showTitle: false
    },
    render: (address) => (
      <Tooltip
        placement="topLeft"
        title={address}
      >
        {address}
      </Tooltip>
    )
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: {
      showTitle: false
    },
    render: (address) => (
      <Tooltip
        placement="topLeft"
        title={address}
      >
        {address}
      </Tooltip>
    )
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: {
      showTitle: false
    },
    render: (address) => (
      <Tooltip
        placement="topLeft"
        title={address}
      >
        {address}
      </Tooltip>
    )
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address:
      'New York No. 1 Lake Park, New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address:
      'London No. 2 Lake Park, London No. 2 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address:
      'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park'
  }
]

const App: React.FC = () => (
  <Table columns={columns} dataSource={data} />
)

export default App`,cd=`import { Table, Typography } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React from 'react'

const { Text } = Typography

interface DataType {
  key: string
  name: string
  borrow: number
  repayment: number
}

interface FixedDataType {
  key: React.Key
  name: string
  description: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Borrow',
    dataIndex: 'borrow'
  },
  {
    title: 'Repayment',
    dataIndex: 'repayment'
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    borrow: 10,
    repayment: 33
  },
  {
    key: '2',
    name: 'Jim Green',
    borrow: 100,
    repayment: 0
  },
  {
    key: '3',
    name: 'Joe Black',
    borrow: 10,
    repayment: 10
  },
  {
    key: '4',
    name: 'Jim Red',
    borrow: 75,
    repayment: 45
  }
]

const fixedColumns: ColumnsType<FixedDataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    fixed: true,
    width: 100
  },
  {
    title: 'Description',
    dataIndex: 'description'
  }
]

const fixedData: FixedDataType[] = []
for (let i = 0; i < 20; i += 1) {
  fixedData.push({
    key: i,
    name: ['Light', 'Bamboo', 'Little'][i % 3],
    description:
      'Everything that has a beginning, has an end.'
  })
}

const App: React.FC = () => (
  <>
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      summary={(pageData) => {
        let totalBorrow = 0
        let totalRepayment = 0

        pageData.forEach(
          ({ borrow, repayment }) => {
            totalBorrow += borrow
            totalRepayment += repayment
          }
        )

        return (
          <>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>
                Total
              </Table.Summary.Cell>
              <Table.Summary.Cell index={1}>
                <Text type="danger">
                  {totalBorrow}
                </Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2}>
                <Text>{totalRepayment}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>
                Balance
              </Table.Summary.Cell>
              <Table.Summary.Cell
                index={1}
                colSpan={2}
              >
                <Text type="danger">
                  {totalBorrow - totalRepayment}
                </Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        )
      }}
    />

    <br />

    <Table
      columns={fixedColumns}
      dataSource={fixedData}
      pagination={false}
      scroll={{ x: 2000, y: 500 }}
      bordered
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0}>
              Summary
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1}>
              This is a summary content
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  </>
)

export default App`,pd=`import { Table } from 'antd-packages'
import classNames from 'classnames'
import ResizeObserver from 'rc-resize-observer'
import React, {
  useEffect,
  useRef,
  useState
} from 'react'
import { VariableSizeGrid as Grid } from 'react-window'

const VirtualTable = (
  props: Parameters<typeof Table>[0]
) => {
  const { columns, scroll } = props
  const [tableWidth, setTableWidth] = useState(0)

  const widthColumnCount = columns!.filter(
    ({ width }) => !width
  ).length
  const mergedColumns = columns!.map((column) => {
    if (column.width) {
      return column
    }

    return {
      ...column,
      width: Math.floor(
        tableWidth / widthColumnCount
      )
    }
  })

  const gridRef = useRef<any>()
  const [connectObject] = useState<any>(() => {
    const obj = {}
    Object.defineProperty(obj, 'scrollLeft', {
      get: () => {
        if (gridRef.current) {
          return gridRef.current?.state
            ?.scrollLeft
        }
        return null
      },
      set: (scrollLeft: number) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({ scrollLeft })
        }
      }
    })

    return obj
  })

  const resetVirtualGrid = () => {
    gridRef.current.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: true
    })
  }

  useEffect(() => resetVirtualGrid, [tableWidth])

  const renderVirtualList = (
    rawData: object[],
    { scrollbarSize, ref, onScroll }: any
  ) => {
    ref.current = connectObject
    const totalHeight = rawData.length * 54

    return (
      <Grid
        ref={gridRef}
        className="virtual-grid"
        columnCount={mergedColumns.length}
        columnWidth={(index: number) => {
          const { width } = mergedColumns[index]
          return totalHeight > scroll!.y! &&
            index === mergedColumns.length - 1
            ? (width as number) -
                scrollbarSize -
                1
            : (width as number)
        }}
        height={scroll!.y as number}
        rowCount={rawData.length}
        rowHeight={() => 54}
        width={tableWidth}
        onScroll={({
          scrollLeft
        }: {
          scrollLeft: number
        }) => {
          onScroll({ scrollLeft })
        }}
      >
        {({
          columnIndex,
          rowIndex,
          style
        }: {
          columnIndex: number
          rowIndex: number
          style: React.CSSProperties
        }) => (
          <div
            className={classNames(
              'virtual-table-cell',
              {
                'virtual-table-cell-last':
                  columnIndex ===
                  mergedColumns.length - 1
              }
            )}
            style={style}
          >
            {
              (rawData[rowIndex] as any)[
                (mergedColumns as any)[
                  columnIndex
                ].dataIndex
              ]
            }
          </div>
        )}
      </Grid>
    )
  }

  return (
    <ResizeObserver
      onResize={({ width }) => {
        setTableWidth(width)
      }}
    >
      <Table
        {...props}
        className="virtual-table"
        columns={mergedColumns}
        pagination={false}
        components={{
          body: renderVirtualList
        }}
      />
    </ResizeObserver>
  )
}

// Usage
const columns = [
  { title: 'A', dataIndex: 'key', width: 150 },
  { title: 'B', dataIndex: 'key' },
  { title: 'C', dataIndex: 'key' },
  { title: 'D', dataIndex: 'key' },
  { title: 'E', dataIndex: 'key', width: 200 },
  { title: 'F', dataIndex: 'key', width: 100 }
]

const data = Array.from(
  { length: 100000 },
  (_, key) => ({ key })
)

const App: React.FC = () => (
  <VirtualTable
    columns={columns}
    dataSource={data}
    scroll={{ y: 300, x: '100vw' }}
  />
)

export default App`,ud=`import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name (all screens)',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Age (medium screen or bigger)',
    dataIndex: 'age',
    key: 'age',
    responsive: ['md']
  },
  {
    title: 'Address (large screen or bigger)',
    dataIndex: 'address',
    key: 'address',
    responsive: ['lg']
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  }
]

const App: React.FC = () => (
  <Table columns={columns} dataSource={data} />
)

export default App`,md=`import { DownOutlined } from '@ant-design/icons'
import type { TableColumnsType } from 'antd-packages'
import {
  Badge,
  Dropdown,
  Form,
  Menu,
  Space,
  Switch,
  Table
} from 'antd-packages'
import React, { useState } from 'react'

interface DataType {
  key: React.Key
  name: string
  platform: string
  version: string
  upgradeNum: number
  creator: string
  createdAt: string
}

interface ExpandedDataType {
  key: React.Key
  date: string
  name: string
  upgradeNum: string
}

const menu = (
  <Menu
    items={[
      { key: '1', label: 'Action 1' },
      { key: '2', label: 'Action 2' }
    ]}
  />
)

const App: React.FC = () => {
  const createExpandedRowRender =
    (bordered: boolean) => () => {
      const columns = [
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date'
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Status',
          key: 'state',
          render: () => (
            <span>
              <Badge status="success" />
              Finished
            </span>
          )
        },
        {
          title: 'Upgrade Status',
          dataIndex: 'upgradeNum',
          key: 'upgradeNum'
        },
        {
          title: 'Action',
          dataIndex: 'operation',
          key: 'operation',
          render: () => (
            <Space size="middle">
              <a>Pause</a>
              <a>Stop</a>
              <Dropdown overlay={menu}>
                <a>
                  More <DownOutlined />
                </a>
              </Dropdown>
            </Space>
          )
        }
      ]

      const data: ExpandedDataType[] = []
      for (let i = 0; i < 3; ++i) {
        data.push({
          key: i,
          date: '2014-12-24 23:12:00',
          name: 'This is production name',
          upgradeNum: 'Upgraded: 56'
        })
      }

      return (
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered={bordered}
        />
      )
    }

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Platform',
      dataIndex: 'platform',
      key: 'platform'
    },
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version'
    },
    {
      title: 'Upgraded',
      dataIndex: 'upgradeNum',
      key: 'upgradeNum'
    },
    {
      title: 'Creator',
      dataIndex: 'creator',
      key: 'creator'
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      title: 'Action',
      key: 'operation',
      render: () => <a>Publish</a>
    }
  ]

  const data: DataType[] = []
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00'
    })
  }

  const [
    rootTableBordered,
    setRootTableBordered
  ] = useState(true)
  const [
    childTableBordered,
    setChildTableBordered
  ] = useState(true)
  return (
    <>
      <Form
        layout="inline"
        className="components-table-demo-control-bar"
        style={{ marginBottom: 16 }}
      >
        <Form.Item label="Root Table Bordered">
          <Switch
            checked={rootTableBordered}
            onChange={(v) =>
              setRootTableBordered(v)
            }
          />
        </Form.Item>
        <Form.Item label="Child Table Bordered">
          <Switch
            checked={childTableBordered}
            onChange={(v) =>
              setChildTableBordered(v)
            }
          />
        </Form.Item>
      </Form>
      <Table
        title={() => 'cool'}
        footer={() => 'cool'}
        columns={columns}
        expandable={{
          expandedRowRender:
            createExpandedRowRender(
              childTableBordered
            )
        }}
        dataSource={data}
        bordered={rootTableBordered}
      />
    </>
  )
}

export default App`,gd=`import { Radio, Space, Table, Tag } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React, { useState } from 'react'

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

type TablePaginationPosition =
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight'

const topOptions = [
  { label: 'topLeft', value: 'topLeft' },
  { label: 'topCenter', value: 'topCenter' },
  { label: 'topRight', value: 'topRight' },
  { label: 'none', value: 'none' }
]

const bottomOptions = [
  { label: 'bottomLeft', value: 'bottomLeft' },
  {
    label: 'bottomCenter',
    value: 'bottomCenter'
  },
  { label: 'bottomRight', value: 'bottomRight' },
  { label: 'none', value: 'none' }
]

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <span>
        {tags.map((tag) => {
          let color =
            tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </span>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    )
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

const App: React.FC = () => {
  const [top, setTop] =
    useState<TablePaginationPosition>('topLeft')
  const [bottom, setBottom] =
    useState<TablePaginationPosition>(
      'bottomRight'
    )

  return (
    <div>
      <div>
        <Radio.Group
          style={{ marginBottom: 10 }}
          options={topOptions}
          value={top}
          onChange={(e) => {
            setTop(e.target.value)
          }}
        />
      </div>
      <Radio.Group
        style={{ marginBottom: 10 }}
        options={bottomOptions}
        value={bottom}
        onChange={(e) => {
          setBottom(e.target.value)
        }}
      />
      <Table
        columns={columns}
        pagination={{ position: [top, bottom] }}
        dataSource={data}
      />
    </div>
  )
}

export default App`,fd=`import { Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import type { TableRowSelection } from 'antd-packages/lib/table/interface'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name'
  }
]

const data: DataType[] = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name:
      i % 2 === 0
        ? \`Edward King \${i}\`
        : 'Another Row'
  })
}

const App: React.FC = () => {
  const rowSelection: TableRowSelection<DataType> =
  {
    renderCell: (
      checked,
      _record,
      index,
      node
    ) => ({
      props: {
        rowSpan: index % 2 === 0 ? 2 : 0
      },
      children: (
        <>
          {String(checked)}: {node}
        </>
      )
    })
  }
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
    />
  )
}

export default App`,vd=`import { Switch, Table } from 'antd-packages'
import type { ColumnsType } from 'antd-packages/lib/table'
import React, { useState } from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left'
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left'
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150
  },
  {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8'
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>
  }
]

const data: DataType[] = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: \`Edrward \${i}\`,
    age: 32,
    address: \`London Park no. \${i}\`
  })
}

const App: React.FC = () => {
  const [fixedTop, setFixedTop] = useState(false)

  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ x: 1500 }}
      summary={() => (
        <Table.Summary
          fixed={fixedTop ? 'top' : 'bottom'}
        >
          <Table.Summary.Row>
            <Table.Summary.Cell
              index={0}
              colSpan={2}
            >
              <Switch
                checkedChildren="Fixed Top"
                unCheckedChildren="Fixed Top"
                checked={fixedTop}
                onChange={() => {
                  setFixedTop(!fixedTop)
                }}
              />
            </Table.Summary.Cell>
            <Table.Summary.Cell
              index={2}
              colSpan={8}
            >
              Scroll Context
            </Table.Summary.Cell>
            <Table.Summary.Cell index={10}>
              Fix Right
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
      sticky
    />
  )
}

export default App`,hd=`import { DownOutlined } from '@ant-design/icons'
import type { RadioChangeEvent } from 'antd-packages'
import {
  Form,
  Radio,
  Space,
  Switch,
  Table
} from 'antd-packages'
import type { SizeType } from 'antd-packages/lib/config-provider/SizeContext'
import type {
  ColumnsType,
  TableProps
} from 'antd-packages/lib/table'
import type {
  ExpandableConfig,
  TableRowSelection
} from 'antd-packages/lib/table/interface'
import React, { useState } from 'react'

interface DataType {
  key: number
  name: string
  age: number
  address: string
  description: string
}

type TablePaginationPosition =
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight'

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London'
      },
      {
        text: 'New York',
        value: 'New York'
      }
    ],
    onFilter: (value, record) =>
      record.address.indexOf(value as string) ===
      0
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a>
          <Space>
            More actions
            <DownOutlined />
          </Space>
        </a>
      </Space>
    )
  }
]

const data: DataType[] = []
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: Number(\`\${i}2\`),
    address: \`New York No. \${i} Lake Park\`,
    description: \`My name is John Brown, I am \${i}2 years old, living in New York No. \${i} Lake Park.\`
  })
}

const defaultExpandable = {
  expandedRowRender: (record: DataType) => (
    <p>{record.description}</p>
  )
}
const defaultTitle = () => 'Here is title'
const defaultFooter = () => 'Here is footer'

const App: React.FC = () => {
  const [bordered, setBordered] = useState(false)
  const [loading, setLoading] = useState(false)
  const [size, setSize] =
    useState<SizeType>('large')
  const [expandable, setExpandable] = useState<
    ExpandableConfig<DataType> | undefined
  >(defaultExpandable)
  const [showTitle, setShowTitle] =
    useState(false)
  const [showHeader, setShowHeader] =
    useState(true)
  const [showfooter, setShowFooter] =
    useState(true)
  const [rowSelection, setRowSelection] =
    useState<
      TableRowSelection<DataType> | undefined
    >({})
  const [hasData, setHasData] = useState(true)
  const [tableLayout, setTableLayout] =
    useState(undefined)
  const [top, setTop] = useState<
    TablePaginationPosition | 'none'
  >('none')
  const [bottom, setBottom] =
    useState<TablePaginationPosition>(
      'bottomRight'
    )
  const [ellipsis, setEllipsis] = useState(false)
  const [yScroll, setYScroll] = useState(false)
  const [xScroll, setXScroll] = useState<
    string | undefined
  >(undefined)

  const handleBorderChange = (
    enable: boolean
  ) => {
    setBordered(enable)
  }

  const handleLoadingChange = (
    enable: boolean
  ) => {
    setLoading(enable)
  }

  const handleSizeChange = (
    e: RadioChangeEvent
  ) => {
    setSize(e.target.value)
  }

  const handleTableLayoutChange = (
    e: RadioChangeEvent
  ) => {
    setTableLayout(e.target.value)
  }

  const handleExpandChange = (
    enable: boolean
  ) => {
    setExpandable(
      enable ? defaultExpandable : undefined
    )
  }

  const handleEllipsisChange = (
    enable: boolean
  ) => {
    setEllipsis(enable)
  }

  const handleTitleChange = (enable: boolean) => {
    setShowTitle(enable)
  }

  const handleHeaderChange = (
    enable: boolean
  ) => {
    setShowHeader(enable)
  }

  const handleFooterChange = (
    enable: boolean
  ) => {
    setShowFooter(enable)
  }

  const handleRowSelectionChange = (
    enable: boolean
  ) => {
    setRowSelection(enable ? {} : undefined)
  }

  const handleYScrollChange = (
    enable: boolean
  ) => {
    setYScroll(enable)
  }

  const handleXScrollChange = (
    e: RadioChangeEvent
  ) => {
    setXScroll(e.target.value)
  }

  const handleDataChange = (
    newHasData: boolean
  ) => {
    setHasData(newHasData)
  }

  const scroll: {
    x?: number | string
    y?: number | string
  } = {}
  if (yScroll) {
    scroll.y = 240
  }
  if (xScroll) {
    scroll.x = '100vw'
  }

  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis
  }))
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true
    tableColumns[tableColumns.length - 1].fixed =
      'right'
  }

  const tableProps: TableProps<DataType> = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    footer: showfooter
      ? defaultFooter
      : undefined,
    rowSelection,
    scroll,
    tableLayout
  }

  return (
    <>
      <Form
        layout="inline"
        className="components-table-demo-control-bar"
        style={{ marginBottom: 16 }}
      >
        <Form.Item label="Bordered">
          <Switch
            checked={bordered}
            onChange={handleBorderChange}
          />
        </Form.Item>
        <Form.Item label="loading">
          <Switch
            checked={loading}
            onChange={handleLoadingChange}
          />
        </Form.Item>
        <Form.Item label="Title">
          <Switch
            checked={showTitle}
            onChange={handleTitleChange}
          />
        </Form.Item>
        <Form.Item label="Column Header">
          <Switch
            checked={showHeader}
            onChange={handleHeaderChange}
          />
        </Form.Item>
        <Form.Item label="Footer">
          <Switch
            checked={showfooter}
            onChange={handleFooterChange}
          />
        </Form.Item>
        <Form.Item label="Expandable">
          <Switch
            checked={!!expandable}
            onChange={handleExpandChange}
          />
        </Form.Item>
        <Form.Item label="Checkbox">
          <Switch
            checked={!!rowSelection}
            onChange={handleRowSelectionChange}
          />
        </Form.Item>
        <Form.Item label="Fixed Header">
          <Switch
            checked={!!yScroll}
            onChange={handleYScrollChange}
          />
        </Form.Item>
        <Form.Item label="Has Data">
          <Switch
            checked={!!hasData}
            onChange={handleDataChange}
          />
        </Form.Item>
        <Form.Item label="Ellipsis">
          <Switch
            checked={!!ellipsis}
            onChange={handleEllipsisChange}
          />
        </Form.Item>
        <Form.Item label="Size">
          <Radio.Group
            value={size}
            onChange={handleSizeChange}
          >
            <Radio.Button value="large">
              Large
            </Radio.Button>
            <Radio.Button value="middle">
              Middle
            </Radio.Button>
            <Radio.Button value="small">
              Small
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Table Scroll">
          <Radio.Group
            value={xScroll}
            onChange={handleXScrollChange}
          >
            <Radio.Button value={undefined}>
              Unset
            </Radio.Button>
            <Radio.Button value="scroll">
              Scroll
            </Radio.Button>
            <Radio.Button value="fixed">
              Fixed Columns
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Table Layout">
          <Radio.Group
            value={tableLayout}
            onChange={handleTableLayoutChange}
          >
            <Radio.Button value={undefined}>
              Unset
            </Radio.Button>
            <Radio.Button value="fixed">
              Fixed
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Pagination Top">
          <Radio.Group
            value={top}
            onChange={(e) => {
              setTop(e.target.value)
            }}
          >
            <Radio.Button value="topLeft">
              TopLeft
            </Radio.Button>
            <Radio.Button value="topCenter">
              TopCenter
            </Radio.Button>
            <Radio.Button value="topRight">
              TopRight
            </Radio.Button>
            <Radio.Button value="none">
              None
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Pagination Bottom">
          <Radio.Group
            value={bottom}
            onChange={(e) => {
              setBottom(e.target.value)
            }}
          >
            <Radio.Button value="bottomLeft">
              BottomLeft
            </Radio.Button>
            <Radio.Button value="bottomCenter">
              BottomCenter
            </Radio.Button>
            <Radio.Button value="bottomRight">
              BottomRight
            </Radio.Button>
            <Radio.Button value="none">
              None
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Table
        {...tableProps}
        pagination={{
          position: [
            top as TablePaginationPosition,
            bottom
          ]
        }}
        columns={tableColumns}
        dataSource={hasData ? data : []}
        scroll={scroll}
      />
    </>
  )
}

export default App`,yd=`import { Tabs } from 'antd-packages'
import React from 'react'

const { TabPane } = Tabs

const onChange = (key: string) => {
  console.log(key)
}

const App: React.FC = () => (
  <Tabs defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
)

export default App`,Cd=`import { Tabs } from 'antd-packages'
import React from 'react'

const { TabPane } = Tabs

const App: React.FC = () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Tab 1" key="1">
      Tab 1
    </TabPane>
    <TabPane tab="Tab 2" disabled key="2">
      Tab 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Tab 3
    </TabPane>
  </Tabs>
)

export default App`,wd=`import { Tabs } from 'antd-packages'
import React from 'react'

const { TabPane } = Tabs

const App: React.FC = () => (
  <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
)

export default App`,kd=`import {
  AndroidOutlined,
  AppleOutlined
} from '@ant-design/icons'
import { Tabs } from 'antd-packages'
import React from 'react'

const { TabPane } = Tabs

const App: React.FC = () => (
  <Tabs defaultActiveKey="2">
    <TabPane
      tab={
        <span>
          <AppleOutlined />
          Tab 1
        </span>
      }
      key="1"
    >
      Tab 1
    </TabPane>
    <TabPane
      tab={
        <span>
          <AndroidOutlined />
          Tab 2
        </span>
      }
      key="2"
    >
      Tab 2
    </TabPane>
  </Tabs>
)

export default App`,bd=`import type { RadioChangeEvent } from 'antd-packages'
import { Radio, Tabs } from 'antd-packages'
import React, { useState } from 'react'

const { TabPane } = Tabs

type TabPosition =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'

const App: React.FC = () => {
  const [mode, setMode] =
    useState<TabPosition>('top')

  const handleModeChange = (
    e: RadioChangeEvent
  ) => {
    setMode(e.target.value)
  }

  return (
    <div>
      <Radio.Group
        onChange={handleModeChange}
        value={mode}
        style={{ marginBottom: 8 }}
      >
        <Radio.Button value="top">
          Horizontal
        </Radio.Button>
        <Radio.Button value="left">
          Vertical
        </Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        style={{ height: 220 }}
      >
        {[
          ...Array.from(
            { length: 30 },
            (_, i) => i
          )
        ].map((i) => (
          <TabPane
            tab={\`Tab-\${i}\`}
            key={i}
            disabled={i === 28}
          >
            Content of tab {i}
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export default App`,Sd=`import {
  Button,
  Checkbox,
  Divider,
  Tabs
} from 'antd-packages'
import React, { useMemo, useState } from 'react'

const { TabPane } = Tabs

const CheckboxGroup = Checkbox.Group

const operations = <Button>Extra Action</Button>

const OperationsSlot: Record<
  PositionType,
  React.ReactNode
> = {
  left: (
    <Button className="tabs-extra-demo-button">
      Left Extra Action
    </Button>
  ),
  right: <Button>Right Extra Action</Button>
}

const options = ['left', 'right']

type PositionType = 'left' | 'right'

const App: React.FC = () => {
  const [position, setPosition] = useState<
    PositionType[]
  >(['left', 'right'])

  const slot = useMemo(() => {
    if (position.length === 0) return null

    return position.reduce(
      (acc, direction) => ({
        ...acc,
        [direction]: OperationsSlot[direction]
      }),
      {}
    )
  }, [position])

  return (
    <>
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </Tabs>
      <br />
      <br />
      <br />
      <div>
        You can also specify its direction or both
        side
      </div>
      <Divider />
      <CheckboxGroup
        options={options}
        value={position}
        onChange={(value) => {
          setPosition(value as PositionType[])
        }}
      />
      <br />
      <br />
      <Tabs tabBarExtraContent={slot}>
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </Tabs>
    </>
  )
}

export default App`,Pd=`import type { RadioChangeEvent } from 'antd-packages'
import { Radio, Tabs } from 'antd-packages'
import type { SizeType } from 'antd-packages/lib/config-provider/SizeContext'
import React, { useState } from 'react'

const { TabPane } = Tabs

const App: React.FC = () => {
  const [size, setSize] =
    useState<SizeType>('small')

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value)
  }

  return (
    <div>
      <Radio.Group
        value={size}
        onChange={onChange}
        style={{ marginBottom: 16 }}
      >
        <Radio.Button value="small">
          Small
        </Radio.Button>
        <Radio.Button value="middle">
          Middle
        </Radio.Button>
        <Radio.Button value="large">
          Large
        </Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        size={size}
        style={{ marginBottom: 32 }}
      >
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </Tabs>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
      >
        <TabPane tab="Card Tab 1" key="1">
          Content of card tab 1
        </TabPane>
        <TabPane tab="Card Tab 2" key="2">
          Content of card tab 2
        </TabPane>
        <TabPane tab="Card Tab 3" key="3">
          Content of card tab 3
        </TabPane>
      </Tabs>
    </div>
  )
}

export default App`,Rd=`import type { RadioChangeEvent } from 'antd-packages'
import { Radio, Space, Tabs } from 'antd-packages'
import React, { useState } from 'react'

const { TabPane } = Tabs

type TabPosition =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'

const App: React.FC = () => {
  const [tabPosition, setTabPosition] =
    useState<TabPosition>('left')

  const changeTabPosition = (
    e: RadioChangeEvent
  ) => {
    setTabPosition(e.target.value)
  }

  return (
    <>
      <Space style={{ marginBottom: 24 }}>
        Tab position:
        <Radio.Group
          value={tabPosition}
          onChange={changeTabPosition}
        >
          <Radio.Button value="top">
            top
          </Radio.Button>
          <Radio.Button value="bottom">
            bottom
          </Radio.Button>
          <Radio.Button value="left">
            left
          </Radio.Button>
          <Radio.Button value="right">
            right
          </Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs tabPosition={tabPosition}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab 3
        </TabPane>
      </Tabs>
    </>
  )
}

export default App`,Td=`import { Tabs } from 'antd-packages'
import React from 'react'

const { TabPane } = Tabs

const onChange = (key: string) => {
  console.log(key)
}

const App: React.FC = () => (
  <Tabs onChange={onChange} type="card">
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
)

export default App`,xd=`import { Tabs } from 'antd-packages'
import React, { useRef, useState } from 'react'

const { TabPane } = Tabs

const initialPanes = [
  {
    title: 'Tab 1',
    content: 'Content of Tab 1',
    key: '1'
  },
  {
    title: 'Tab 2',
    content: 'Content of Tab 2',
    key: '2'
  },
  {
    title: 'Tab 3',
    content: 'Content of Tab 3',
    key: '3',
    closable: false
  }
]

const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState(
    initialPanes[0].key
  )
  const [panes, setPanes] = useState(initialPanes)
  const newTabIndex = useRef(0)

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey)
  }

  const add = () => {
    const newActiveKey = \`newTab\${newTabIndex.current++}\`
    const newPanes = [...panes]
    newPanes.push({
      title: 'New Tab',
      content: 'Content of new Tab',
      key: newActiveKey
    })
    setPanes(newPanes)
    setActiveKey(newActiveKey)
  }

  const remove = (targetKey: string) => {
    let newActiveKey = activeKey
    let lastIndex = -1
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1
      }
    })
    const newPanes = panes.filter(
      (pane) => pane.key !== targetKey
    )
    if (
      newPanes.length &&
      newActiveKey === targetKey
    ) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key
      } else {
        newActiveKey = newPanes[0].key
      }
    }
    setPanes(newPanes)
    setActiveKey(newActiveKey)
  }

  const onEdit = (
    targetKey: string,
    action: 'add' | 'remove'
  ) => {
    if (action === 'add') {
      add()
    } else {
      remove(targetKey)
    }
  }

  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
    >
      {panes.map((pane) => (
        <TabPane
          tab={pane.title}
          key={pane.key}
          closable={pane.closable}
        >
          {pane.content}
        </TabPane>
      ))}
    </Tabs>
  )
}

export default App`,Id=`import { Tabs } from 'antd-packages'
import React from 'react'

const { TabPane } = Tabs

const App: React.FC = () => (
  <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Tab Title 1" key="1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </TabPane>
      <TabPane tab="Tab Title 2" key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane tab="Tab Title 3" key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>
    </Tabs>
  </div>
)

export default App`,Ad=`import { Button, Tabs } from 'antd-packages'
import React, { useRef, useState } from 'react'

const { TabPane } = Tabs

const defaultPanes = Array.from({
  length: 2
}).map((_, index) => {
  const id = String(index + 1)
  return {
    title: \`Tab \${id}\`,
    content: \`Content of Tab Pane \${index + 1}\`,
    key: id
  }
})

const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState(
    defaultPanes[0].key
  )
  const [panes, setPanes] = useState(defaultPanes)
  const newTabIndex = useRef(0)

  const onChange = (key: string) => {
    setActiveKey(key)
  }

  const add = () => {
    const newActiveKey = \`newTab\${newTabIndex.current++}\`
    setPanes([
      ...panes,
      {
        title: 'New Tab',
        content: 'New Tab Pane',
        key: newActiveKey
      }
    ])
    setActiveKey(newActiveKey)
  }

  const remove = (targetKey: string) => {
    const targetIndex = panes.findIndex(
      (pane) => pane.key === targetKey
    )
    const newPanes = panes.filter(
      (pane) => pane.key !== targetKey
    )
    if (
      newPanes.length &&
      targetKey === activeKey
    ) {
      const { key } =
        newPanes[
          targetIndex === newPanes.length
            ? targetIndex - 1
            : targetIndex
        ]
      setActiveKey(key)
    }
    setPanes(newPanes)
  }

  const onEdit = (
    targetKey: string,
    action: 'add' | 'remove'
  ) => {
    if (action === 'add') {
      add()
    } else {
      remove(targetKey)
    }
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button onClick={add}>ADD</Button>
      </div>
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
      >
        {panes.map((pane) => (
          <TabPane
            tab={pane.title}
            key={pane.key}
          >
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export default App`,Bd=`import type { TabsProps } from 'antd-packages'
import { Tabs } from 'antd-packages'
import React from 'react'
import {
  Sticky,
  StickyContainer
} from 'react-sticky'

const { TabPane } = Tabs

const renderTabBar: TabsProps['renderTabBar'] = (
  props,
  DefaultTabBar
) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        className="site-custom-tab-bar"
        style={{ ...style }}
      />
    )}
  </Sticky>
)

const App: React.FC = () => (
  <StickyContainer>
    <Tabs
      defaultActiveKey="1"
      renderTabBar={renderTabBar}
    >
      <TabPane
        tab="Tab 1"
        key="1"
        style={{ height: 200 }}
      >
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  </StickyContainer>
)

export default App`,Dd=`import type { TabsProps } from 'antd-packages'
import { Tabs } from 'antd-packages'
import React, { useRef, useState } from 'react'
import {
  DndProvider,
  useDrag,
  useDrop
} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const { TabPane } = Tabs

const type = 'DraggableTabNode'
interface DraggableTabPaneProps
  extends React.HTMLAttributes<HTMLDivElement> {
  index: React.Key
  moveNode: (
    dragIndex: React.Key,
    hoverIndex: React.Key
  ) => void
}

const DraggableTabNode = ({
  index,
  children,
  moveNode
}: DraggableTabPaneProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [{ isOver, dropClassName }, drop] =
    useDrop({
      accept: type,
      collect: (monitor) => {
        const { index: dragIndex } =
          monitor.getItem() || {}
        if (dragIndex === index) {
          return {}
        }
        return {
          isOver: monitor.isOver(),
          dropClassName: 'dropping'
        }
      },
      drop: (item: { index: React.Key }) => {
        moveNode(item.index, index)
      }
    })
  const [, drag] = useDrag({
    type,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })
  drop(drag(ref))

  return (
    <div
      ref={ref}
      style={{ marginRight: 24 }}
      className={isOver ? dropClassName : ''}
    >
      {children}
    </div>
  )
}

const DraggableTabs: React.FC<{
  children: React.ReactNode
}> = (props) => {
  const { children } = props
  const [order, setOrder] = useState<React.Key[]>(
    []
  )

  const moveTabNode = (
    dragKey: React.Key,
    hoverKey: React.Key
  ) => {
    const newOrder = order.slice()

    React.Children.forEach(
      children,
      (c: React.ReactElement) => {
        if (
          c.key &&
          newOrder.indexOf(c.key) === -1
        ) {
          newOrder.push(c.key)
        }
      }
    )

    const dragIndex = newOrder.indexOf(dragKey)
    const hoverIndex = newOrder.indexOf(hoverKey)

    newOrder.splice(dragIndex, 1)
    newOrder.splice(hoverIndex, 0, dragKey)

    setOrder(newOrder)
  }

  const renderTabBar: TabsProps['renderTabBar'] =
    (tabBarProps, DefaultTabBar) => (
      <DefaultTabBar {...tabBarProps}>
        {(node) => (
          <DraggableTabNode
            key={node.key}
            index={node.key!}
            moveNode={moveTabNode}
          >
            {node}
          </DraggableTabNode>
        )}
      </DefaultTabBar>
    )

  const tabs: React.ReactElement[] = []
  React.Children.forEach(
    children,
    (c: React.ReactElement) => {
      tabs.push(c)
    }
  )

  const orderTabs = tabs.slice().sort((a, b) => {
    const orderA = order.indexOf(a.key!)
    const orderB = order.indexOf(b.key!)

    if (orderA !== -1 && orderB !== -1) {
      return orderA - orderB
    }
    if (orderA !== -1) {
      return -1
    }
    if (orderB !== -1) {
      return 1
    }

    const ia = tabs.indexOf(a)
    const ib = tabs.indexOf(b)

    return ia - ib
  })

  return (
    <DndProvider backend={HTML5Backend}>
      <Tabs
        renderTabBar={renderTabBar}
        {...props}
      >
        {orderTabs}
      </Tabs>
    </DndProvider>
  )
}

const App: React.FC = () => (
  <DraggableTabs>
    <TabPane tab="tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </DraggableTabs>
)

export default App`,Fd=`import { Select, Tabs } from 'antd-packages'
import React, { useState } from 'react'

const { TabPane } = Tabs
const { Option } = Select

const positionList = [
  'left',
  'right',
  'top',
  'bottom'
]

const list = Array.from({ length: 20 }).map(
  (_, index) => index
)

const App: React.FC = () => {
  const [parentPos, setParentPos] =
    useState(undefined)
  const [childPos, setChildPos] =
    useState(undefined)
  const [parentType, setParentType] =
    useState(undefined)
  const [childType, setChildType] =
    useState(undefined)

  return (
    <div>
      <Select
        style={{ width: 200 }}
        onChange={(val) => {
          setParentPos(val)
        }}
      >
        {positionList.map((pos) => (
          <Option key={pos} value={pos}>
            Parent - {pos}
          </Option>
        ))}
      </Select>

      <Select
        style={{ width: 200 }}
        onChange={(val) => {
          setChildPos(val)
        }}
      >
        {positionList.map((pos) => (
          <Option key={pos} value={pos}>
            Child - {pos}
          </Option>
        ))}
      </Select>

      <Select
        style={{ width: 200 }}
        onChange={(val) => {
          setParentType(val)
        }}
      >
        <Option value="line">
          Parent - line
        </Option>
        <Option value="card">
          Parent - card
        </Option>
        <Option value="editable-card">
          Parent - card edit
        </Option>
      </Select>

      <Select
        style={{ width: 200 }}
        onChange={(val) => {
          setChildType(val)
        }}
      >
        <Option value="line">Child - line</Option>
        <Option value="card">Child - card</Option>
        <Option value="editable-card">
          Parent - card edit
        </Option>
      </Select>

      <Tabs
        defaultActiveKey="1"
        tabPosition={parentPos}
        type={parentType}
      >
        <TabPane tab="Tab 1" key="1">
          <Tabs
            defaultActiveKey="1"
            tabPosition={childPos}
            type={childType}
            style={{ height: 300 }}
          >
            {list.map((key) => (
              <TabPane
                tab={\`Tab \${key}\`}
                key={key}
              >
                TTTT {key}
              </TabPane>
            ))}
          </Tabs>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </div>
  )
}

export default App`,Od=`import { Tag } from 'antd-packages'
import React from 'react'

const log = (
  e: React.MouseEvent<HTMLElement>
) => {
  console.log(e)
}

const preventDefault = (
  e: React.MouseEvent<HTMLElement>
) => {
  e.preventDefault()
  console.log('Clicked! But prevent default.')
}

const App: React.FC = () => (
  <>
    <Tag>Tag 1</Tag>
    <Tag>
      <a href="https://github.com/ant-design/ant-design/issues/1862">
        Link
      </a>
    </Tag>
    <Tag closable onClose={log}>
      Tag 2
    </Tag>
    <Tag closable onClose={preventDefault}>
      Prevent Default
    </Tag>
  </>
)

export default App`,Ld=`import { Divider, Tag } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Divider orientation="left">Presets</Divider>
    <div>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
    </div>
    <Divider orientation="left">Custom</Divider>
    <div>
      <Tag color="#f50">#f50</Tag>
      <Tag color="#2db7f5">#2db7f5</Tag>
      <Tag color="#87d068">#87d068</Tag>
      <Tag color="#108ee9">#108ee9</Tag>
    </div>
  </>
)

export default App`,Nd=`import { Divider, Tag } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Divider orientation="left">
      Presets Inverse
    </Divider>
    <div>
      <Tag color="magenta-inverse">magenta</Tag>
      <Tag color="red-inverse">red</Tag>
      <Tag color="volcano-inverse">volcano</Tag>
      <Tag color="orange-inverse">orange</Tag>
      <Tag color="gold-inverse">gold</Tag>
      <Tag color="lime-inverse">lime</Tag>
      <Tag color="green-inverse">green</Tag>
      <Tag color="cyan-inverse">cyan</Tag>
      <Tag color="blue-inverse">blue</Tag>
      <Tag color="geekblue-inverse">geekblue</Tag>
      <Tag color="purple-inverse">purple</Tag>
    </div>
  </>
)

export default App`,Md=`import { PlusOutlined } from '@ant-design/icons'
import type { InputRef } from 'antd-packages'
import { Input, Tag, Tooltip } from 'antd-packages'
import React, {
  useEffect,
  useRef,
  useState
} from 'react'

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>([
    'Unremovable',
    'Tag 2',
    'Tag 3'
  ])
  const [inputVisible, setInputVisible] =
    useState(false)
  const [inputValue, setInputValue] = useState('')
  const [editInputIndex, setEditInputIndex] =
    useState(-1)
  const [editInputValue, setEditInputValue] =
    useState('')
  const inputRef = useRef<InputRef>(null)
  const editInputRef = useRef<InputRef>(null)

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus()
    }
  }, [inputVisible])

  useEffect(() => {
    editInputRef.current?.focus()
  }, [inputValue])

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter(
      (tag) => tag !== removedTag
    )
    console.log(newTags)
    setTags(newTags)
  }

  const showInput = () => {
    setInputVisible(true)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(e.target.value)
  }

  const handleInputConfirm = () => {
    if (
      inputValue &&
      tags.indexOf(inputValue) === -1
    ) {
      setTags([...tags, inputValue])
    }
    setInputVisible(false)
    setInputValue('')
  }

  const handleEditInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditInputValue(e.target.value)
  }

  const handleEditInputConfirm = () => {
    const newTags = [...tags]
    newTags[editInputIndex] = editInputValue
    setTags(newTags)
    setEditInputIndex(-1)
    setInputValue('')
  }

  return (
    <>
      {tags.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              ref={editInputRef}
              key={tag}
              size="small"
              className="tag-input"
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={
                handleEditInputConfirm
              }
            />
          )
        }

        const isLongTag = tag.length > 20

        const tagElem = (
          <Tag
            className="edit-tag"
            key={tag}
            closable={index !== 0}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={(e) => {
                if (index !== 0) {
                  setEditInputIndex(index)
                  setEditInputValue(tag)
                  e.preventDefault()
                }
              }}
            >
              {isLongTag
                ? \`\${tag.slice(0, 20)}...\`
                : tag}
            </span>
          </Tag>
        )
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        )
      })}
      {inputVisible && (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          className="tag-input"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag
          className="site-tag-plus"
          onClick={showInput}
        >
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </>
  )
}

export default App`,zd=`import { Tag } from 'antd-packages'
import React, { useState } from 'react'

const { CheckableTag } = Tag

const tagsData = [
  'Movies',
  'Books',
  'Music',
  'Sports'
]

const App: React.FC = () => {
  const [selectedTags, setSelectedTags] =
    useState<string[]>(['Books'])

  const handleChange = (
    tag: string,
    checked: boolean
  ) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag)
    console.log(
      'You are interested in: ',
      nextSelectedTags
    )
    setSelectedTags(nextSelectedTags)
  }

  return (
    <>
      <span style={{ marginRight: 8 }}>
        Categories:
      </span>
      {tagsData.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={(checked) =>
            handleChange(tag, checked)
          }
        >
          {tag}
        </CheckableTag>
      ))}
    </>
  )
}

export default App`,Ed=`import { Button, Tag } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(true)

  return (
    <>
      <Tag
        closable
        visible={visible}
        onClose={() => setVisible(false)}
      >
        Movies
      </Tag>
      <br />
      <Button
        size="small"
        onClick={() => setVisible(!visible)}
      >
        Toggle
      </Button>
    </>
  )
}

export default App`,$d=`import { PlusOutlined } from '@ant-design/icons'
import type { InputRef } from 'antd-packages'
import { Input, Tag } from 'antd-packages'
import { TweenOneGroup } from 'rc-tween-one'
import React, {
  useEffect,
  useRef,
  useState
} from 'react'

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>([
    'Tag 1',
    'Tag 2',
    'Tag 3'
  ])
  const [inputVisible, setInputVisible] =
    useState<boolean>(false)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<InputRef>(null)

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus()
    }
  }, [])

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter(
      (tag) => tag !== removedTag
    )
    console.log(newTags)
    setTags(newTags)
  }

  const showInput = () => {
    setInputVisible(true)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(e.target.value)
  }

  const handleInputConfirm = () => {
    if (
      inputValue &&
      tags.indexOf(inputValue) === -1
    ) {
      setTags([...tags, inputValue])
    }
    setInputVisible(false)
    setInputValue('')
  }

  const forMap = (tag: string) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault()
          handleClose(tag)
        }}
      >
        {tag}
      </Tag>
    )
    return (
      <span
        key={tag}
        style={{ display: 'inline-block' }}
      >
        {tagElem}
      </span>
    )
  }

  const tagChild = tags.map(forMap)
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100
          }}
          onEnd={(e) => {
            if (
              e.type === 'appear' ||
              e.type === 'enter'
            ) {
              ;(e.target as any).style =
                'display: inline-block'
            }
          }}
          leave={{
            opacity: 0,
            width: 0,
            scale: 0,
            duration: 200
          }}
          appear={false}
        >
          {tagChild}
        </TweenOneGroup>
      </div>
      {inputVisible && (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag
          onClick={showInput}
          className="site-tag-plus"
        >
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </>
  )
}

export default App`,Zd=`import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined
} from '@ant-design/icons'
import { Tag } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Tag
      icon={<TwitterOutlined />}
      color="#55acee"
    >
      Twitter
    </Tag>
    <Tag
      icon={<YoutubeOutlined />}
      color="#cd201f"
    >
      Youtube
    </Tag>
    <Tag
      icon={<FacebookOutlined />}
      color="#3b5999"
    >
      Facebook
    </Tag>
    <Tag
      icon={<LinkedinOutlined />}
      color="#55acee"
    >
      LinkedIn
    </Tag>
  </>
)

export default App`,Vd=`import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined
} from '@ant-design/icons'
import { Divider, Tag } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Divider orientation="left">
      Without icon
    </Divider>
    <div>
      <Tag color="success">success</Tag>
      <Tag color="processing">processing</Tag>
      <Tag color="error">error</Tag>
      <Tag color="warning">warning</Tag>
      <Tag color="default">default</Tag>
    </div>
    <Divider orientation="left">
      With icon
    </Divider>
    <div>
      <Tag
        icon={<CheckCircleOutlined />}
        color="success"
      >
        success
      </Tag>
      <Tag
        icon={<SyncOutlined spin />}
        color="processing"
      >
        processing
      </Tag>
      <Tag
        icon={<CloseCircleOutlined />}
        color="error"
      >
        error
      </Tag>
      <Tag
        icon={<ExclamationCircleOutlined />}
        color="warning"
      >
        warning
      </Tag>
      <Tag
        icon={<ClockCircleOutlined />}
        color="default"
      >
        waiting
      </Tag>
      <Tag
        icon={<MinusCircleOutlined />}
        color="default"
      >
        stop
      </Tag>
    </div>
  </>
)

export default App`,Kd=`import { CloseCircleOutlined } from '@ant-design/icons'
import { Tag } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Tag closable closeIcon="\u5173 \u95ED">
      Tag1
    </Tag>
    <Tag
      closable
      closeIcon={<CloseCircleOutlined />}
    >
      Tag2
    </Tag>
  </>
)

export default App`,Ud=`import { TimePicker } from 'antd-packages'
import type { Moment } from 'moment'
import moment from 'moment'
import React from 'react'

const onChange = (
  time: Moment,
  timeString: string
) => {
  console.log(time, timeString)
}

const App: React.FC = () => (
  <TimePicker
    onChange={onChange}
    defaultOpenValue={moment(
      '00:00:00',
      'HH:mm:ss'
    )}
  />
)

export default App`,jd=`import { TimePicker } from 'antd-packages'
import type { Moment } from 'moment'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [value, setValue] =
    useState<Moment | null>(null)

  const onChange = (time: Moment) => {
    setValue(time)
  }

  return (
    <TimePicker
      value={value}
      onChange={onChange}
    />
  )
}

export default App`,Hd=`import { TimePicker } from 'antd-packages'
import moment from 'moment'
import React from 'react'

const App: React.FC = () => (
  <>
    <TimePicker
      defaultValue={moment(
        '12:08:23',
        'HH:mm:ss'
      )}
      size="large"
    />
    <TimePicker
      defaultValue={moment(
        '12:08:23',
        'HH:mm:ss'
      )}
    />
    <TimePicker
      defaultValue={moment(
        '12:08:23',
        'HH:mm:ss'
      )}
      size="small"
    />
  </>
)

export default App`,Gd=`import { TimePicker } from 'antd-packages'
import moment from 'moment'
import React from 'react'

const App: React.FC = () => (
  <TimePicker
    defaultValue={moment('12:08:23', 'HH:mm:ss')}
    disabled
  />
)

export default App`,Jd=`import { TimePicker } from 'antd-packages'
import moment from 'moment'
import React from 'react'

const format = 'HH:mm'

const App: React.FC = () => (
  <TimePicker
    defaultValue={moment('12:08', format)}
    format={format}
  />
)

export default App`,Yd=`import { TimePicker } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <TimePicker minuteStep={15} secondStep={10} />
)

export default App`,Wd=`import { Button, TimePicker } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <TimePicker
      open={open}
      onOpenChange={setOpen}
      renderExtraFooter={() => (
        <Button
          size="small"
          type="primary"
          onClick={() => setOpen(false)}
        >
          OK
        </Button>
      )}
    />
  )
}

export default App`,Qd=`import { TimePicker } from 'antd-packages'
import type { Moment } from 'moment'
import React from 'react'

const onChange = (
  time: Moment,
  timeString: string
) => {
  console.log(time, timeString)
}

const App: React.FC = () => (
  <>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker
      use12Hours
      format="h:mm:ss A"
      onChange={onChange}
      style={{ width: 140 }}
    />
    <TimePicker
      use12Hours
      format="h:mm a"
      onChange={onChange}
    />
  </>
)

export default App`,Xd=`import { TimePicker } from 'antd-packages'
import type { Moment } from 'moment'
import moment from 'moment'
import React from 'react'

const onChange = (
  time: Moment,
  timeString: string
) => {
  console.log(time, timeString)
}

const App: React.FC = () => (
  <TimePicker
    onChange={onChange}
    defaultOpenValue={moment(
      '00:00:00',
      'HH:mm:ss'
    )}
    popupClassName="myCustomClassName"
  />
)

export default App`,qd=`import { TimePicker } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <TimePicker.RangePicker />
)

export default App`,_d=`import { TimePicker } from 'antd-packages'
import React from 'react'

const { RangePicker } = TimePicker

const App: React.FC = () => (
  <>
    <TimePicker bordered={false} />
    <RangePicker bordered={false} />
  </>
)

export default App`,nc=`import { Space, TimePicker } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space direction="vertical">
    <TimePicker status="error" />
    <TimePicker status="warning" />
    <TimePicker.RangePicker status="error" />
    <TimePicker.RangePicker status="warning" />
  </Space>
)

export default App`,ec=`import { SmileOutlined } from '@ant-design/icons'
import { TimePicker } from 'antd-packages'
import type { Moment } from 'moment'
import moment from 'moment'
import React from 'react'

const onChange = (
  time: Moment,
  timeString: string
) => {
  console.log(time, timeString)
}

const App: React.FC = () => (
  <TimePicker
    suffixIcon={<SmileOutlined />}
    onChange={onChange}
    defaultOpenValue={moment(
      '00:00:00',
      'HH:mm:ss'
    )}
  />
)

export default App`,tc=`import { Timeline } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Timeline>
    <Timeline.Item>
      Create a services site 2015-09-01
    </Timeline.Item>
    <Timeline.Item>
      Solve initial network problems 2015-09-01
    </Timeline.Item>
    <Timeline.Item>
      Technical testing 2015-09-01
    </Timeline.Item>
    <Timeline.Item>
      Network problems being solved 2015-09-01
    </Timeline.Item>
  </Timeline>
)

export default App`,ac=`import { SmileOutlined } from '@ant-design/icons'
import { Timeline } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Timeline>
    <Timeline.Item color="green">
      Create a services site 2015-09-01
    </Timeline.Item>
    <Timeline.Item color="green">
      Create a services site 2015-09-01
    </Timeline.Item>
    <Timeline.Item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>
        Solve initial network problems 3
        2015-09-01
      </p>
    </Timeline.Item>
    <Timeline.Item>
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item
      color="#00CCFF"
      dot={<SmileOutlined />}
    >
      <p>Custom color testing</p>
    </Timeline.Item>
  </Timeline>
)

export default App`,rc=`import { Button, Timeline } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [reverse, setReverse] = useState(false)

  const handleClick = () => {
    setReverse(!reverse)
  }

  return (
    <div>
      <Timeline
        pending="Recording..."
        reverse={reverse}
      >
        <Timeline.Item>
          Create a services site 2015-09-01
        </Timeline.Item>
        <Timeline.Item>
          Solve initial network problems
          2015-09-01
        </Timeline.Item>
        <Timeline.Item>
          Technical testing 2015-09-01
        </Timeline.Item>
      </Timeline>
      <Button
        type="primary"
        style={{ marginTop: 16 }}
        onClick={handleClick}
      >
        Toggle Reverse
      </Button>
    </div>
  )
}

export default App`,oc=`import { ClockCircleOutlined } from '@ant-design/icons'
import { Timeline } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Timeline mode="alternate">
    <Timeline.Item>
      Create a services site 2015-09-01
    </Timeline.Item>
    <Timeline.Item color="green">
      Solve initial network problems 2015-09-01
    </Timeline.Item>
    <Timeline.Item
      dot={
        <ClockCircleOutlined
          style={{ fontSize: '16px' }}
        />
      }
    >
      Sed ut perspiciatis unde omnis iste natus
      error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi
      architecto beatae vitae dicta sunt
      explicabo.
    </Timeline.Item>
    <Timeline.Item color="red">
      Network problems being solved 2015-09-01
    </Timeline.Item>
    <Timeline.Item>
      Create a services site 2015-09-01
    </Timeline.Item>
    <Timeline.Item
      dot={
        <ClockCircleOutlined
          style={{ fontSize: '16px' }}
        />
      }
    >
      Technical testing 2015-09-01
    </Timeline.Item>
  </Timeline>
)

export default App`,sc=`import { ClockCircleOutlined } from '@ant-design/icons'
import { Timeline } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Timeline>
    <Timeline.Item>
      Create a services site 2015-09-01
    </Timeline.Item>
    <Timeline.Item>
      Solve initial network problems 2015-09-01
    </Timeline.Item>
    <Timeline.Item
      dot={
        <ClockCircleOutlined className="timeline-clock-icon" />
      }
      color="red"
    >
      Technical testing 2015-09-01
    </Timeline.Item>
    <Timeline.Item>
      Network problems being solved 2015-09-01
    </Timeline.Item>
  </Timeline>
)

export default App`,ic=`import { ClockCircleOutlined } from '@ant-design/icons'
import { Timeline } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Timeline mode="right">
    <Timeline.Item>
      Create a services site 2015-09-01
    </Timeline.Item>
    <Timeline.Item>
      Solve initial network problems 2015-09-01
    </Timeline.Item>
    <Timeline.Item
      dot={
        <ClockCircleOutlined
          style={{ fontSize: '16px' }}
        />
      }
      color="red"
    >
      Technical testing 2015-09-01
    </Timeline.Item>
    <Timeline.Item>
      Network problems being solved 2015-09-01
    </Timeline.Item>
  </Timeline>
)

export default App`,lc=`import type { RadioChangeEvent } from 'antd-packages'
import { Radio, Timeline } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [mode, setMode] = useState<
    'left' | 'alternate' | 'right'
  >('left')

  const onChange = (e: RadioChangeEvent) => {
    setMode(e.target.value)
  }

  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20
        }}
      >
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group>
      <Timeline mode={mode}>
        <Timeline.Item label="2015-09-01">
          Create a services
        </Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">
          Solve initial network problems
        </Timeline.Item>
        <Timeline.Item>
          Technical testing
        </Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">
          Network problems being solved
        </Timeline.Item>
      </Timeline>
    </>
  )
}

export default App`,dc=`import { Tooltip } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
)

export default App`,cc=`import { Button, Tooltip } from 'antd-packages'
import React from 'react'

const text = <span>prompt text</span>

const buttonWidth = 70

const App: React.FC = () => (
  <div className="demo">
    <div
      style={{
        marginLeft: buttonWidth,
        whiteSpace: 'nowrap'
      }}
    >
      <Tooltip placement="topLeft" title={text}>
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="top" title={text}>
        <Button>Top</Button>
      </Tooltip>
      <Tooltip placement="topRight" title={text}>
        <Button>TR</Button>
      </Tooltip>
    </div>
    <div
      style={{
        width: buttonWidth,
        float: 'left'
      }}
    >
      <Tooltip placement="leftTop" title={text}>
        <Button>LT</Button>
      </Tooltip>
      <Tooltip placement="left" title={text}>
        <Button>Left</Button>
      </Tooltip>
      <Tooltip
        placement="leftBottom"
        title={text}
      >
        <Button>LB</Button>
      </Tooltip>
    </div>
    <div
      style={{
        width: buttonWidth,
        marginLeft: buttonWidth * 4 + 24
      }}
    >
      <Tooltip placement="rightTop" title={text}>
        <Button>RT</Button>
      </Tooltip>
      <Tooltip placement="right" title={text}>
        <Button>Right</Button>
      </Tooltip>
      <Tooltip
        placement="rightBottom"
        title={text}
      >
        <Button>RB</Button>
      </Tooltip>
    </div>
    <div
      style={{
        marginLeft: buttonWidth,
        clear: 'both',
        whiteSpace: 'nowrap'
      }}
    >
      <Tooltip
        placement="bottomLeft"
        title={text}
      >
        <Button>BL</Button>
      </Tooltip>
      <Tooltip placement="bottom" title={text}>
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip
        placement="bottomRight"
        title={text}
      >
        <Button>BR</Button>
      </Tooltip>
    </div>
  </div>
)

export default App`,pc=`import { Button, Tooltip } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Tooltip
      placement="topLeft"
      title="Prompt Text"
    >
      <Button>Align edge / \u8FB9\u7F18\u5BF9\u9F50</Button>
    </Tooltip>
    <Tooltip
      placement="topLeft"
      title="Prompt Text"
      arrowPointAtCenter
    >
      <Button>
        Arrow points to center / \u7BAD\u5934\u6307\u5411\u4E2D\u5FC3
      </Button>
    </Tooltip>
  </>
)

export default App`,uc=`import { Button, Tooltip } from 'antd-packages'
import React from 'react'

const wrapStyles: React.CSSProperties = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9'
}

const App: React.FC = () => (
  <div style={wrapStyles}>
    <Tooltip
      placement="left"
      title="Prompt Text"
      getPopupContainer={(trigger) =>
        trigger.parentElement!
      }
    >
      <Button>
        Adjust automatically / \u81EA\u52A8\u8C03\u6574
      </Button>
    </Tooltip>
    <br />
    <Tooltip
      placement="left"
      title="Prompt Text"
      getPopupContainer={(trigger) =>
        trigger.parentElement!
      }
      autoAdjustOverflow={false}
    >
      <Button>Ignore / \u4E0D\u5904\u7406</Button>
    </Tooltip>
  </div>
)

export default App`,mc=`import { Tooltip } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Tooltip
    destroyTooltipOnHide={{ keepParent: false }}
    title="prompt text"
  >
    <span>Tooltip will destroy when hidden.</span>
  </Tooltip>
)

export default App`,gc=`import { Button, Divider, Tooltip } from 'antd-packages'
import React from 'react'

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime'
]
const customColors = [
  '#f50',
  '#2db7f5',
  '#87d068',
  '#108ee9'
]

const App: React.FC = () => (
  <>
    <Divider orientation="left">Presets</Divider>
    <div>
      {colors.map((color) => (
        <Tooltip
          title="prompt text"
          color={color}
          key={color}
        >
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </div>
    <Divider orientation="left">Custom</Divider>
    <div>
      {customColors.map((color) => (
        <Tooltip
          title="prompt text"
          color={color}
          key={color}
        >
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </div>
  </>
)

export default App`,fc=`import { Transfer } from 'antd-packages'
import type { TransferDirection } from 'antd-packages/es/transfer'
import React, { useState } from 'react'

interface RecordType {
  key: string
  title: string
  description: string
}

const mockData: RecordType[] = Array.from({
  length: 20
}).map((_, i) => ({
  key: i.toString(),
  title: \`content\${i + 1}\`,
  description: \`description of content\${i + 1}\`
}))

const initialTargetKeys = mockData
  .filter((item) => Number(item.key) > 10)
  .map((item) => item.key)

const App: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState(
    initialTargetKeys
  )
  const [selectedKeys, setSelectedKeys] =
    useState<string[]>([])

  const onChange = (
    nextTargetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[]
  ) => {
    console.log('targetKeys:', nextTargetKeys)
    console.log('direction:', direction)
    console.log('moveKeys:', moveKeys)
    setTargetKeys(nextTargetKeys)
  }

  const onSelectChange = (
    sourceSelectedKeys: string[],
    targetSelectedKeys: string[]
  ) => {
    console.log(
      'sourceSelectedKeys:',
      sourceSelectedKeys
    )
    console.log(
      'targetSelectedKeys:',
      targetSelectedKeys
    )
    setSelectedKeys([
      ...sourceSelectedKeys,
      ...targetSelectedKeys
    ])
  }

  const onScroll = (
    direction: TransferDirection,
    e: React.SyntheticEvent<HTMLUListElement>
  ) => {
    console.log('direction:', direction)
    console.log('target:', e.target)
  }

  return (
    <Transfer
      dataSource={mockData}
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={onChange}
      onSelectChange={onSelectChange}
      onScroll={onScroll}
      render={(item) => item.title}
    />
  )
}

export default App`,vc=`import { Switch, Transfer } from 'antd-packages'
import type { TransferDirection } from 'antd-packages/es/transfer'
import React, { useState } from 'react'

interface RecordType {
  key: string
  title: string
  description: string
  disabled: boolean
}

const mockData: RecordType[] = Array.from({
  length: 20
}).map((_, i) => ({
  key: i.toString(),
  title: \`content\${i + 1}\`,
  description: \`description of content\${i + 1}\`,
  disabled: i % 3 < 1
}))

const oriTargetKeys = mockData
  .filter((item) => Number(item.key) % 3 > 1)
  .map((item) => item.key)

const App: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState<
    string[]
  >(oriTargetKeys)
  const [selectedKeys, setSelectedKeys] =
    useState<string[]>([])
  const [disabled, setDisabled] = useState(false)

  const handleChange = (
    newTargetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[]
  ) => {
    setTargetKeys(newTargetKeys)

    console.log('targetKeys: ', newTargetKeys)
    console.log('direction: ', direction)
    console.log('moveKeys: ', moveKeys)
  }

  const handleSelectChange = (
    sourceSelectedKeys: string[],
    targetSelectedKeys: string[]
  ) => {
    setSelectedKeys([
      ...sourceSelectedKeys,
      ...targetSelectedKeys
    ])

    console.log(
      'sourceSelectedKeys: ',
      sourceSelectedKeys
    )
    console.log(
      'targetSelectedKeys: ',
      targetSelectedKeys
    )
  }

  const handleScroll = (
    direction: TransferDirection,
    e: React.SyntheticEvent<
      HTMLUListElement,
      Event
    >
  ) => {
    console.log('direction:', direction)
    console.log('target:', e.target)
  }

  const handleDisable = (checked: boolean) => {
    setDisabled(checked)
  }

  return (
    <>
      <Transfer
        dataSource={mockData}
        titles={['Source', 'Target']}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={handleChange}
        onSelectChange={handleSelectChange}
        onScroll={handleScroll}
        render={(item) => item.title}
        disabled={disabled}
        oneWay
        style={{ marginBottom: 16 }}
      />
      <Switch
        unCheckedChildren="disabled"
        checkedChildren="disabled"
        checked={disabled}
        onChange={handleDisable}
      />
    </>
  )
}

export default App`,hc=`import { Transfer } from 'antd-packages'
import type { TransferDirection } from 'antd-packages/es/transfer'
import React, { useEffect, useState } from 'react'

interface RecordType {
  key: string
  title: string
  description: string
  chosen: boolean
}

const App: React.FC = () => {
  const [mockData, setMockData] = useState<
    RecordType[]
  >([])
  const [targetKeys, setTargetKeys] = useState<
    string[]
  >([])

  const getMock = () => {
    const tempTargetKeys = []
    const tempMockData = []
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: \`content\${i + 1}\`,
        description: \`description of content\${i + 1
          }\`,
        chosen: Math.random() * 2 > 1
      }
      if (data.chosen) {
        tempTargetKeys.push(data.key)
      }
      tempMockData.push(data)
    }
    setMockData(tempMockData)
    setTargetKeys(tempTargetKeys)
  }

  useEffect(() => {
    getMock()
  }, [])

  const filterOption = (
    inputValue: string,
    option: RecordType
  ) => option.description.indexOf(inputValue) > -1

  const handleChange = (
    newTargetKeys: string[]
  ) => {
    setTargetKeys(newTargetKeys)
  }

  const handleSearch = (
    dir: TransferDirection,
    value: string
  ) => {
    console.log('search:', dir, value)
  }

  return (
    <Transfer
      dataSource={mockData}
      showSearch
      filterOption={filterOption}
      targetKeys={targetKeys}
      onChange={handleChange}
      onSearch={handleSearch}
      render={(item) => item.title}
    />
  )
}

export default App`,yc=`import { Button, Transfer } from 'antd-packages'
import type {
  TransferDirection,
  TransferListProps
} from 'antd-packages/es/transfer'
import React, { useEffect, useState } from 'react'

interface RecordType {
  key: string
  title: string
  description: string
  chosen: boolean
}

const App: React.FC = () => {
  const [mockData, setMockData] = useState<
    RecordType[]
  >([])
  const [targetKeys, setTargetKeys] = useState<
    string[]
  >([])

  const getMock = () => {
    const tempTargetKeys = []
    const tempMockData = []
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: \`content\${i + 1}\`,
        description: \`description of content\${i + 1
          }\`,
        chosen: Math.random() * 2 > 1
      }
      if (data.chosen) {
        tempTargetKeys.push(data.key)
      }
      tempMockData.push(data)
    }
    setMockData(tempMockData)
    setTargetKeys(tempTargetKeys)
  }

  useEffect(() => {
    getMock()
  }, [])

  const handleChange = (
    newTargetKeys: string[]
  ) => {
    setTargetKeys(newTargetKeys)
  }

  const renderFooter = (
    _: TransferListProps<any>,
    {
      direction
    }: {
      direction: TransferDirection
    }
  ) => {
    if (direction === 'left') {
      return (
        <Button
          size="small"
          style={{ float: 'left', margin: 5 }}
          onClick={getMock}
        >
          Left button reload
        </Button>
      )
    }
    return (
      <Button
        size="small"
        style={{ float: 'right', margin: 5 }}
        onClick={getMock}
      >
        Right button reload
      </Button>
    )
  }

  return (
    <Transfer
      dataSource={mockData}
      showSearch
      listStyle={{
        width: 250,
        height: 300
      }}
      operations={['to right', 'to left']}
      targetKeys={targetKeys}
      onChange={handleChange}
      render={(item) =>
        \`\${item.title}-\${item.description}\`
      }
      footer={renderFooter}
    />
  )
}

export default App`,Cc=`import { Transfer } from 'antd-packages'
import type { TransferDirection } from 'antd-packages/es/transfer'
import React, { useEffect, useState } from 'react'

interface RecordType {
  key: string
  title: string
  description: string
  chosen: boolean
}

const App: React.FC = () => {
  const [mockData, setMockData] = useState<
    RecordType[]
  >([])
  const [targetKeys, setTargetKeys] = useState<
    string[]
  >([])

  const getMock = () => {
    const tempTargetKeys = []
    const tempMockData = []
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: \`content\${i + 1}\`,
        description: \`description of content\${i + 1
          }\`,
        chosen: Math.random() * 2 > 1
      }
      if (data.chosen) {
        tempTargetKeys.push(data.key)
      }
      tempMockData.push(data)
    }
    setMockData(tempMockData)
    setTargetKeys(tempTargetKeys)
  }

  useEffect(() => {
    getMock()
  }, [])

  const handleChange = (
    newTargetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[]
  ) => {
    console.log(
      newTargetKeys,
      direction,
      moveKeys
    )
    setTargetKeys(newTargetKeys)
  }

  const renderItem = (item: RecordType) => {
    const customLabel = (
      <span className="custom-item">
        {item.title} - {item.description}
      </span>
    )

    return {
      label: customLabel, // for displayed item
      value: item.title // for title and filter matching
    }
  }

  return (
    <Transfer
      dataSource={mockData}
      listStyle={{
        width: 300,
        height: 300
      }}
      targetKeys={targetKeys}
      onChange={handleChange}
      render={renderItem}
    />
  )
}

export default App`,wc=`import { Switch, Transfer } from 'antd-packages'
import type { TransferDirection } from 'antd-packages/es/transfer'
import React, { useEffect, useState } from 'react'

interface RecordType {
  key: string
  title: string
  description: string
  chosen: boolean
}

const App: React.FC = () => {
  const [oneWay, setOneWay] = useState(false)
  const [mockData, setMockData] = useState<
    RecordType[]
  >([])
  const [targetKeys, setTargetKeys] = useState<
    string[]
  >([])

  useEffect(() => {
    const newTargetKeys = []
    const newMockData = []
    for (let i = 0; i < 2000; i++) {
      const data = {
        key: i.toString(),
        title: \`content\${i + 1}\`,
        description: \`description of content\${i + 1
          }\`,
        chosen: Math.random() * 2 > 1
      }
      if (data.chosen) {
        newTargetKeys.push(data.key)
      }
      newMockData.push(data)
    }

    setTargetKeys(newTargetKeys)
    setMockData(newMockData)
  }, [])

  const onChange = (
    newTargetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[]
  ) => {
    console.log(
      newTargetKeys,
      direction,
      moveKeys
    )
    setTargetKeys(newTargetKeys)
  }

  return (
    <>
      <Transfer
        dataSource={mockData}
        targetKeys={targetKeys}
        onChange={onChange}
        render={(item) => item.title}
        oneWay={oneWay}
        pagination
      />
      <br />
      <Switch
        unCheckedChildren="one way"
        checkedChildren="one way"
        checked={oneWay}
        onChange={setOneWay}
      />
    </>
  )
}

export default App`,kc=`import {
  Switch,
  Table,
  Tag,
  Transfer
} from 'antd-packages'
import type {
  ColumnsType,
  TableRowSelection
} from 'antd-packages/es/table/interface'
import type {
  TransferItem,
  TransferProps
} from 'antd-packages/es/transfer'
import difference from 'lodash/difference'
import React, { useState } from 'react'

interface RecordType {
  key: string
  title: string
  description: string
  disabled: boolean
  tag: string
}

interface DataType {
  title: string
  tag: string
  description: string
}

interface TableTransferProps
  extends TransferProps<TransferItem> {
  dataSource: DataType[]
  leftColumns: ColumnsType<DataType>
  rightColumns: ColumnsType<DataType>
}

// Customize Table Transfer
const TableTransfer = ({
  leftColumns,
  rightColumns,
  ...restProps
}: TableTransferProps) => (
  <Transfer {...restProps}>
    {({
      direction,
      filteredItems,
      onItemSelectAll,
      onItemSelect,
      selectedKeys: listSelectedKeys,
      disabled: listDisabled
    }) => {
      const columns =
        direction === 'left'
          ? leftColumns
          : rightColumns

      const rowSelection: TableRowSelection<TransferItem> =
      {
        getCheckboxProps: (item) => ({
          disabled:
            listDisabled || item.disabled
        }),
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows
            .filter((item) => !item.disabled)
            .map(({ key }) => key)
          const diffKeys = selected
            ? difference(
              treeSelectedKeys,
              listSelectedKeys
            )
            : difference(
              listSelectedKeys,
              treeSelectedKeys
            )
          onItemSelectAll(
            diffKeys as string[],
            selected
          )
        },
        onSelect({ key }, selected) {
          onItemSelect(key as string, selected)
        },
        selectedRowKeys: listSelectedKeys
      }

      return (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={filteredItems}
          size="small"
          style={{
            pointerEvents: listDisabled
              ? 'none'
              : undefined
          }}
          onRow={({
            key,
            disabled: itemDisabled
          }) => ({
            onClick: () => {
              if (itemDisabled || listDisabled)
                return
              onItemSelect(
                key as string,
                !listSelectedKeys.includes(
                  key as string
                )
              )
            }
          })}
        />
      )
    }}
  </Transfer>
)

const mockTags = ['cat', 'dog', 'bird']

const mockData: RecordType[] = Array.from({
  length: 20
}).map((_, i) => ({
  key: i.toString(),
  title: \`content\${i + 1}\`,
  description: \`description of content\${i + 1}\`,
  disabled: i % 4 === 0,
  tag: mockTags[i % 3]
}))

const originTargetKeys = mockData
  .filter((item) => Number(item.key) % 3 > 1)
  .map((item) => item.key)

const leftTableColumns: ColumnsType<DataType> = [
  {
    dataIndex: 'title',
    title: 'Name'
  },
  {
    dataIndex: 'tag',
    title: 'Tag',
    render: (tag) => <Tag>{tag}</Tag>
  },
  {
    dataIndex: 'description',
    title: 'Description'
  }
]

const rightTableColumns: ColumnsType<
  Pick<DataType, 'title'>
> = [
    {
      dataIndex: 'title',
      title: 'Name'
    }
  ]

const App: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState<
    string[]
  >(originTargetKeys)
  const [disabled, setDisabled] = useState(false)
  const [showSearch, setShowSearch] =
    useState(false)

  const onChange = (nextTargetKeys: string[]) => {
    setTargetKeys(nextTargetKeys)
  }

  const triggerDisable = (checked: boolean) => {
    setDisabled(checked)
  }

  const triggerShowSearch = (
    checked: boolean
  ) => {
    setShowSearch(checked)
  }

  return (
    <>
      <TableTransfer
        dataSource={mockData}
        targetKeys={targetKeys}
        disabled={disabled}
        showSearch={showSearch}
        onChange={onChange}
        filterOption={(inputValue, item) =>
          item.title!.indexOf(inputValue) !==
          -1 ||
          item.tag.indexOf(inputValue) !== -1
        }
        leftColumns={leftTableColumns}
        rightColumns={rightTableColumns}
      />
      <Switch
        unCheckedChildren="disabled"
        checkedChildren="disabled"
        checked={disabled}
        onChange={triggerDisable}
        style={{ marginTop: 16 }}
      />
      <Switch
        unCheckedChildren="showSearch"
        checkedChildren="showSearch"
        checked={showSearch}
        onChange={triggerShowSearch}
        style={{ marginTop: 16 }}
      />
    </>
  )
}

export default App`,bc=`import { Transfer, Tree } from 'antd-packages'
import type {
  TransferDirection,
  TransferItem
} from 'antd-packages/es/transfer'
import type { DataNode } from 'antd-packages/es/tree'
import React, { useState } from 'react'

interface TreeTransferProps {
  dataSource: DataNode[]
  targetKeys: string[]
  onChange: (
    targetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[]
  ) => void
}

// Customize Table Transfer
const isChecked = (
  selectedKeys: (string | number)[],
  eventKey: string | number
) => selectedKeys.includes(eventKey)

const generateTree = (
  treeNodes: DataNode[] = [],
  checkedKeys: string[] = []
): DataNode[] =>
  treeNodes.map(({ children, ...props }) => ({
    ...props,
    disabled: checkedKeys.includes(
      props.key as string
    ),
    children: generateTree(children, checkedKeys)
  }))

const TreeTransfer = ({
  dataSource,
  targetKeys,
  ...restProps
}: TreeTransferProps) => {
  const transferDataSource: TransferItem[] = []
  function flatten(list: DataNode[] = []) {
    list.forEach((item) => {
      transferDataSource.push(
        item as TransferItem
      )
      flatten(item.children)
    })
  }
  flatten(dataSource)

  return (
    <Transfer
      {...restProps}
      targetKeys={targetKeys}
      dataSource={transferDataSource}
      className="tree-transfer"
      render={(item) => item.title!}
      showSelectAll={false}
    >
      {({
        direction,
        onItemSelect,
        selectedKeys
      }) => {
        if (direction === 'left') {
          const checkedKeys = [
            ...selectedKeys,
            ...targetKeys
          ]
          return (
            <Tree
              blockNode
              checkable
              checkStrictly
              defaultExpandAll
              checkedKeys={checkedKeys}
              treeData={generateTree(
                dataSource,
                targetKeys
              )}
              onCheck={(_, { node: { key } }) => {
                onItemSelect(
                  key as string,
                  !isChecked(checkedKeys, key)
                )
              }}
              onSelect={(
                _,
                { node: { key } }
              ) => {
                onItemSelect(
                  key as string,
                  !isChecked(checkedKeys, key)
                )
              }}
            />
          )
        }
      }}
    </Transfer>
  )
}

const treeData: DataNode[] = [
  { key: '0-0', title: '0-0' },
  {
    key: '0-1',
    title: '0-1',
    children: [
      { key: '0-1-0', title: '0-1-0' },
      { key: '0-1-1', title: '0-1-1' }
    ]
  },
  { key: '0-2', title: '0-3' }
]

const App: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState<
    string[]
  >([])
  const onChange = (keys: string[]) => {
    setTargetKeys(keys)
  }
  return (
    <TreeTransfer
      dataSource={treeData}
      targetKeys={targetKeys}
      onChange={onChange}
    />
  )
}

export default App`,Sc=`import { Space, Transfer } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space direction="vertical">
    <Transfer status="error" />
    <Transfer status="warning" showSearch />
  </Space>
)

export default App`,Pc=`import { Transfer } from 'antd-packages'
import type { SelectAllLabel } from 'antd-packages/es/transfer'
import React, { useState } from 'react'

interface RecordType {
  key: string
  title: string
  description: string
}

const mockData: RecordType[] = Array.from({
  length: 10
}).map((_, i) => ({
  key: i.toString(),
  title: \`content\${i + 1}\`,
  description: \`description of content\${i + 1}\`
}))

const oriTargetKeys = mockData
  .filter((item) => Number(item.key) % 3 > 1)
  .map((item) => item.key)

const selectAllLabels: SelectAllLabel[] = [
  'Select All',
  ({ selectedCount, totalCount }) =>
    \`\${selectedCount}/\${totalCount}\`
]

const App: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState(
    oriTargetKeys
  )
  return (
    <Transfer
      dataSource={mockData}
      targetKeys={targetKeys}
      onChange={setTargetKeys}
      render={(item) => item.title}
      selectAllLabels={selectAllLabels}
    />
  )
}

export default App`,Rc=`import { Tree } from 'antd-packages'
import type {
  DataNode,
  TreeProps
} from 'antd-packages/lib/tree'
import React from 'react'

const treeData: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true
          },
          {
            title: 'leaf',
            key: '0-0-0-1'
          }
        ]
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: (
              <span style={{ color: '#1890ff' }}>
                sss
              </span>
            ),
            key: '0-0-1-0'
          }
        ]
      }
    ]
  }
]

const App: React.FC = () => {
  const onSelect: TreeProps['onSelect'] = (
    selectedKeys,
    info
  ) => {
    console.log('selected', selectedKeys, info)
  }

  const onCheck: TreeProps['onCheck'] = (
    checkedKeys,
    info
  ) => {
    console.log('onCheck', checkedKeys, info)
  }

  return (
    <Tree
      checkable
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
    />
  )
}

export default App`,Tc=`import { Tree } from 'antd-packages'
import type { DataNode } from 'antd-packages/lib/tree'
import React, { useState } from 'react'

const treeData: DataNode[] = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' }
        ]
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' }
        ]
      },
      {
        title: '0-0-2',
        key: '0-0-2'
      }
    ]
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' }
    ]
  },
  {
    title: '0-2',
    key: '0-2'
  }
]

const App: React.FC = () => {
  const [expandedKeys, setExpandedKeys] =
    useState<React.Key[]>(['0-0-0', '0-0-1'])
  const [checkedKeys, setCheckedKeys] = useState<
    React.Key[]
  >(['0-0-0'])
  const [selectedKeys, setSelectedKeys] =
    useState<React.Key[]>([])
  const [autoExpandParent, setAutoExpandParent] =
    useState<boolean>(true)

  const onExpand = (
    expandedKeysValue: React.Key[]
  ) => {
    console.log('onExpand', expandedKeysValue)
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue)
    setAutoExpandParent(false)
  }

  const onCheck = (
    checkedKeysValue: React.Key[]
  ) => {
    console.log('onCheck', checkedKeysValue)
    setCheckedKeys(checkedKeysValue)
  }

  const onSelect = (
    selectedKeysValue: React.Key[],
    info: any
  ) => {
    console.log('onSelect', info)
    setSelectedKeys(selectedKeysValue)
  }

  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
    />
  )
}

export default App`,xc=`import { Tree } from 'antd-packages'
import type {
  DataNode,
  TreeProps
} from 'antd-packages/lib/tree'
import React, { useState } from 'react'

const x = 3
const y = 2
const z = 1
const defaultData: DataNode[] = []

const generateData = (
  _level: number,
  _preKey?: React.Key,
  _tns?: DataNode[]
) => {
  const preKey = _preKey || '0'
  const tns = _tns || defaultData

  const children = []
  for (let i = 0; i < x; i++) {
    const key = \`\${preKey}-\${i}\`
    tns.push({ title: key, key })
    if (i < y) {
      children.push(key)
    }
  }
  if (_level < 0) {
    return tns
  }
  const level = _level - 1
  children.forEach((key, index) => {
    tns[index].children = []
    return generateData(
      level,
      key,
      tns[index].children
    )
  })
}
generateData(z)

const App: React.FC = () => {
  const [gData, setGData] = useState(defaultData)
  const [expandedKeys] = useState([
    '0-0',
    '0-0-0',
    '0-0-0-0'
  ])

  const onDragEnter: TreeProps['onDragEnter'] = (
    info
  ) => {
    console.log(info)
    // expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E
    // setExpandedKeys(info.expandedKeys)
  }

  const onDrop: TreeProps['onDrop'] = (info) => {
    console.log(info)
    const dropKey = info.node.key
    const dragKey = info.dragNode.key
    const dropPos = info.node.pos.split('-')
    const dropPosition =
      info.dropPosition -
      Number(dropPos[dropPos.length - 1])

    const loop = (
      data: DataNode[],
      key: React.Key,
      callback: (
        node: DataNode,
        i: number,
        data: DataNode[]
      ) => void
    ) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data)
        }
        if (data[i].children) {
          loop(data[i].children!, key, callback)
        }
      }
    }
    const data = [...gData]

    // Find dragObject
    let dragObj: DataNode
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1)
      dragObj = item
    })

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || []
        // where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E
        item.children.unshift(dragObj)
      })
    } else if (
      ((info.node as any).props.children || [])
        .length > 0 && // Has children
      (info.node as any).props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || []
        // where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E
        item.children.unshift(dragObj)
        // in previous version, we use item.children.push(dragObj) to insert the
        // item to the tail of the children
      })
    } else {
      let ar: DataNode[] = []
      let i: number
      loop(data, dropKey, (_item, index, arr) => {
        ar = arr
        i = index
      })
      if (dropPosition === -1) {
        ar.splice(i!, 0, dragObj!)
      } else {
        ar.splice(i! + 1, 0, dragObj!)
      }
    }
    setGData(data)
  }

  return (
    <Tree
      className="draggable-tree"
      defaultExpandedKeys={expandedKeys}
      draggable
      blockNode
      onDragEnter={onDragEnter}
      onDrop={onDrop}
      treeData={gData}
    />
  )
}

export default App`,Ic=`import { Tree } from 'antd-packages'
import React, { useState } from 'react'

interface DataNode {
  title: string
  key: string
  isLeaf?: boolean
  children?: DataNode[]
}

const initTreeData: DataNode[] = [
  { title: 'Expand to load', key: '0' },
  { title: 'Expand to load', key: '1' },
  { title: 'Tree Node', key: '2', isLeaf: true }
]

// It's just a simple demo. You can use tree map to optimize update perf.
const updateTreeData = (
  list: DataNode[],
  key: React.Key,
  children: DataNode[]
): DataNode[] =>
  list.map((node) => {
    if (node.key === key) {
      return {
        ...node,
        children
      }
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(
          node.children,
          key,
          children
        )
      }
    }
    return node
  })

const App: React.FC = () => {
  const [treeData, setTreeData] =
    useState(initTreeData)

  const onLoadData = ({ key, children }: any) =>
    new Promise<void>((resolve) => {
      if (children) {
        resolve()
        return
      }
      setTimeout(() => {
        setTreeData((origin) =>
          updateTreeData(origin, key, [
            {
              title: 'Child Node',
              key: \`\${key}-0\`
            },
            {
              title: 'Child Node',
              key: \`\${key}-1\`
            }
          ])
        )

        resolve()
      }, 1000)
    })

  return (
    <Tree
      loadData={onLoadData}
      treeData={treeData}
    />
  )
}

export default App`,Ac=`import { Input, Tree } from 'antd-packages'
import type { DataNode } from 'antd-packages/lib/tree'
import React, { useMemo, useState } from 'react'

const { Search } = Input

const x = 3
const y = 2
const z = 1
const defaultData: DataNode[] = []

const generateData = (
  _level: number,
  _preKey?: React.Key,
  _tns?: DataNode[]
) => {
  const preKey = _preKey || '0'
  const tns = _tns || defaultData

  const children = []
  for (let i = 0; i < x; i++) {
    const key = \`\${preKey}-\${i}\`
    tns.push({ title: key, key })
    if (i < y) {
      children.push(key)
    }
  }
  if (_level < 0) {
    return tns
  }
  const level = _level - 1
  children.forEach((key, index) => {
    tns[index].children = []
    return generateData(
      level,
      key,
      tns[index].children
    )
  })
}
generateData(z)

const dataList: {
  key: React.Key
  title: string
}[] = []
const generateList = (data: DataNode[]) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i]
    const { key } = node
    dataList.push({ key, title: key as string })
    if (node.children) {
      generateList(node.children)
    }
  }
}
generateList(defaultData)

const getParentKey = (
  key: React.Key,
  tree: DataNode[]
): React.Key => {
  let parentKey: React.Key
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i]
    if (node.children) {
      if (
        node.children.some(
          (item) => item.key === key
        )
      ) {
        parentKey = node.key
      } else if (
        getParentKey(key, node.children)
      ) {
        parentKey = getParentKey(
          key,
          node.children
        )
      }
    }
  }
  return parentKey!
}

const App: React.FC = () => {
  const [expandedKeys, setExpandedKeys] =
    useState<React.Key[]>([])
  const [searchValue, setSearchValue] =
    useState('')
  const [autoExpandParent, setAutoExpandParent] =
    useState(true)

  const onExpand = (
    newExpandedKeys: string[]
  ) => {
    setExpandedKeys(newExpandedKeys)
    setAutoExpandParent(false)
  }

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target
    const newExpandedKeys = dataList
      .map((item) => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(
            item.key,
            defaultData
          )
        }
        return null
      })
      .filter(
        (item, i, self) =>
          item && self.indexOf(item) === i
      )
    setExpandedKeys(
      newExpandedKeys as React.Key[]
    )
    setSearchValue(value)
    setAutoExpandParent(true)
  }

  const treeData = useMemo(() => {
    const loop = (data: DataNode[]): DataNode[] =>
      data.map((item) => {
        const strTitle = item.title as string
        const index =
          strTitle.indexOf(searchValue)
        const beforeStr = strTitle.substring(
          0,
          index
        )
        const afterStr = strTitle.slice(
          index + searchValue.length
        )
        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span className="site-tree-search-value">
                {searchValue}
              </span>
              {afterStr}
            </span>
          ) : (
            <span>{strTitle}</span>
          )
        if (item.children) {
          return {
            title,
            key: item.key,
            children: loop(item.children)
          }
        }

        return {
          title,
          key: item.key
        }
      })

    return loop(defaultData)
  }, [searchValue])

  return (
    <div>
      <Search
        style={{ marginBottom: 8 }}
        placeholder="Search"
        onChange={onChange}
      />
      <Tree
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        treeData={treeData}
      />
    </div>
  )
}

export default App`,Bc=`import {
  CarryOutOutlined,
  FormOutlined
} from '@ant-design/icons'
import { Switch, Tree } from 'antd-packages'
import type { DataNode } from 'antd-packages/lib/tree'
import React, { useState } from 'react'

const treeData: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            icon: <CarryOutOutlined />
          },
          {
            title: (
              <>
                <div>multiple line title</div>
                <div>multiple line title</div>
              </>
            ),
            key: '0-0-0-1',
            icon: <CarryOutOutlined />
          },
          {
            title: 'leaf',
            key: '0-0-0-2',
            icon: <CarryOutOutlined />
          }
        ]
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-1-0',
            icon: <CarryOutOutlined />
          }
        ]
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-2-0',
            icon: <CarryOutOutlined />
          },
          {
            title: 'leaf',
            key: '0-0-2-1',
            icon: <CarryOutOutlined />,
            switcherIcon: <FormOutlined />
          }
        ]
      }
    ]
  },
  {
    title: 'parent 2',
    key: '0-1',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'parent 2-0',
        key: '0-1-0',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-1-0-0',
            icon: <CarryOutOutlined />
          },
          {
            title: 'leaf',
            key: '0-1-0-1',
            icon: <CarryOutOutlined />
          }
        ]
      }
    ]
  }
]

const App: React.FC = () => {
  const [showLine, setShowLine] = useState<
    boolean | { showLeafIcon: boolean }
  >(true)
  const [showIcon, setShowIcon] =
    useState<boolean>(false)
  const [showLeafIcon, setShowLeafIcon] =
    useState<boolean>(true)

  const onSelect = (
    selectedKeys: React.Key[],
    info: any
  ) => {
    console.log('selected', selectedKeys, info)
  }

  const onSetLeafIcon = (checked: boolean) => {
    setShowLeafIcon(checked)
    setShowLine({ showLeafIcon: checked })
  }

  const onSetShowLine = (checked: boolean) => {
    setShowLine(
      checked ? { showLeafIcon } : false
    )
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        showLine:{' '}
        <Switch
          checked={!!showLine}
          onChange={onSetShowLine}
        />
        <br />
        <br />
        showIcon:{' '}
        <Switch
          checked={showIcon}
          onChange={setShowIcon}
        />
        <br />
        <br />
        showLeafIcon:{' '}
        <Switch
          checked={showLeafIcon}
          onChange={onSetLeafIcon}
        />
      </div>
      <Tree
        showLine={showLine}
        showIcon={showIcon}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={treeData}
      />
    </div>
  )
}

export default App`,Dc=`import {
  DownOutlined,
  FrownFilled,
  FrownOutlined,
  MehOutlined,
  SmileOutlined
} from '@ant-design/icons'
import { Tree } from 'antd-packages'
import type { DataNode } from 'antd-packages/lib/tree'
import React from 'react'

const treeData: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    icon: <SmileOutlined />,
    children: [
      {
        title: 'leaf',
        key: '0-0-0',
        icon: <MehOutlined />
      },
      {
        title: 'leaf',
        key: '0-0-1',
        icon: ({ selected }) =>
          selected ? (
            <FrownFilled />
          ) : (
            <FrownOutlined />
          )
      }
    ]
  }
]

const App: React.FC = () => (
  <Tree
    showIcon
    defaultExpandAll
    defaultSelectedKeys={['0-0-0']}
    switcherIcon={<DownOutlined />}
    treeData={treeData}
  />
)

export default App`,Fc=`import { Tree } from 'antd-packages'
import type {
  DataNode,
  DirectoryTreeProps
} from 'antd-packages/lib/tree'
import React from 'react'

const { DirectoryTree } = Tree

const treeData: DataNode[] = [
  {
    title: 'parent 0',
    key: '0-0',
    children: [
      {
        title: 'leaf 0-0',
        key: '0-0-0',
        isLeaf: true
      },
      {
        title: 'leaf 0-1',
        key: '0-0-1',
        isLeaf: true
      }
    ]
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      {
        title: 'leaf 1-0',
        key: '0-1-0',
        isLeaf: true
      },
      {
        title: 'leaf 1-1',
        key: '0-1-1',
        isLeaf: true
      }
    ]
  }
]

const App: React.FC = () => {
  const onSelect: DirectoryTreeProps['onSelect'] =
    (keys, info) => {
      console.log('Trigger Select', keys, info)
    }

  const onExpand: DirectoryTreeProps['onExpand'] =
    (keys, info) => {
      console.log('Trigger Expand', keys, info)
    }

  return (
    <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
    />
  )
}

export default App`,Oc=`import { DownOutlined } from '@ant-design/icons'
import { Tree } from 'antd-packages'
import type {
  DataNode,
  TreeProps
} from 'antd-packages/lib/tree'
import React from 'react'

const treeData: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0'
          },
          {
            title: 'leaf',
            key: '0-0-0-1'
          },
          {
            title: 'leaf',
            key: '0-0-0-2'
          }
        ]
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: 'leaf',
            key: '0-0-1-0'
          }
        ]
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        children: [
          {
            title: 'leaf',
            key: '0-0-2-0'
          },
          {
            title: 'leaf',
            key: '0-0-2-1'
          }
        ]
      }
    ]
  }
]

const App: React.FC = () => {
  const onSelect: TreeProps['onSelect'] = (
    selectedKeys,
    info
  ) => {
    console.log('selected', selectedKeys, info)
  }

  return (
    <Tree
      showLine
      switcherIcon={<DownOutlined />}
      defaultExpandedKeys={['0-0-0']}
      onSelect={onSelect}
      treeData={treeData}
    />
  )
}

export default App`,Lc=`import { Tree } from 'antd-packages'
import type { DataNode } from 'antd-packages/lib/tree'
import React from 'react'

const dig = (path = '0', level = 3) => {
  const list = []
  for (let i = 0; i < 10; i += 1) {
    const key = \`\${path}-\${i}\`
    const treeNode: DataNode = {
      title: key,
      key
    }

    if (level > 0) {
      treeNode.children = dig(key, level - 1)
    }

    list.push(treeNode)
  }
  return list
}

const treeData = dig()

const App: React.FC = () => (
  <Tree
    treeData={treeData}
    height={233}
    defaultExpandAll
  />
)

export default App`,Nc=`import React from 'react'
import { Tree, Switch } from 'antd-packages'
import { CarryOutOutlined } from '@ant-design/icons'

const x = 3
const y = 2
const z = 1
const gData = []

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0'
  const tns = _tns || gData

  const children = []
  for (let i = 0; i < x; i++) {
    const key = \`\${preKey}-\${i}\`
    tns.push({
      title: key,
      key,
      icon: <CarryOutOutlined />
    })
    if (i < y) {
      children.push(key)
    }
  }
  if (_level < 0) {
    return tns
  }
  const level = _level - 1
  children.forEach((key, index) => {
    tns[index].children = []
    return generateData(
      level,
      key,
      tns[index].children
    )
  })
}
generateData(z)

class App extends React.Component {
  state = {
    gData,
    expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
    showLine: true,
    showIcon: true,
    showLeafIcon: true
  }

  onDragEnter = (info) => {
    console.log(info)
    // expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  }

  onDrop = (info) => {
    console.log(info)
    const dropKey = info.node.key
    const dragKey = info.dragNode.key
    const dropPos = info.node.pos.split('-')
    const dropPosition =
      info.dropPosition -
      Number(dropPos[dropPos.length - 1])

    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data)
        }
        if (data[i].children) {
          loop(data[i].children, key, callback)
        }
      }
    }
    const data = [...this.state.gData]

    // Find dragObject
    let dragObj
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1)
      dragObj = item
    })

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || []
        // where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5C3E\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E
        item.children.push(dragObj)
      })
    } else if (
      (info.node.props.children || []).length >
        0 && // Has children
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || []
        // where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E
        item.children.unshift(dragObj)
      })
    } else {
      let ar
      let i
      loop(data, dropKey, (item, index, arr) => {
        ar = arr
        i = index
      })
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj)
      } else {
        ar.splice(i + 1, 0, dragObj)
      }
    }

    this.setState({
      gData: data
    })
  }

  setShowLine = (showLine) => {
    const { showLeafIcon } = this.state
    if (showLine) {
      if (showLeafIcon) {
        this.setState({
          showLine: {
            showLeafIcon: true
          }
        })
      } else {
        this.setState({
          showLine: true
        })
      }
    } else {
      this.setState({
        showLine: false
      })
    }
  }

  setShowIcon = (showIcon) => {
    this.setState({
      showIcon
    })
  }

  setShowLeafIcon = (showLeafIcon) => {
    this.setState({
      showLeafIcon,
      showLine: { showLeafIcon }
    })
  }

  render() {
    const {
      showLine,
      showIcon,
      showLeafIcon,
      expandedKeys
    } = this.state
    const {
      setShowLine,
      setShowIcon,
      setShowLeafIcon
    } = this
    return (
      <>
        <div style={{ marginBottom: 16 }}>
          showLine:{' '}
          <Switch
            checked={showLine}
            onChange={setShowLine}
          />
          <br />
          <br />
          showIcon:{' '}
          <Switch
            checked={showIcon}
            onChange={setShowIcon}
          />
          <br />
          <br />
          showLeafIcon:{' '}
          <Switch
            checked={showLeafIcon}
            onChange={setShowLeafIcon}
          />
        </div>
        <Tree
          showLine={showLine}
          showIcon={showIcon}
          className="draggable-tree"
          defaultExpandedKeys={expandedKeys}
          draggable
          blockNode
          onDragEnter={this.onDragEnter}
          onDrop={this.onDrop}
          treeData={this.state.gData}
        />
      </>
    )
  }
}

export default App`,Mc=`import { Tree } from 'antd-packages'
import type { DataNode } from 'antd-packages/lib/tree'
import React from 'react'

const treeData: DataNode[] = []

for (let i = 0; i < 100; i += 1) {
  const children: DataNode[] = []

  for (let j = 0; j < 100; j += 1) {
    children.push({
      title: \`child \${i}-\${j}\`,
      key: \`l-\${i}-\${j}\`
    })
  }

  treeData.push({
    title: \`parent \${i}\`,
    key: \`l-\${i}\`,
    children
  })
}

const App: React.FC = () => (
  <Tree
    defaultExpandAll
    height={400}
    treeData={treeData}
  />
)

export default App`,zc=`import { TreeSelect } from 'antd-packages'
import React, { useState } from 'react'

const { TreeNode } = TreeSelect

const App: React.FC = () => {
  const [value, setValue] = useState<
    string | undefined
  >(undefined)

  const onChange = (newValue: string) => {
    setValue(newValue)
  }

  return (
    <TreeSelect
      showSearch
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto'
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
    >
      <TreeNode value="parent 1" title="parent 1">
        <TreeNode
          value="parent 1-0"
          title="parent 1-0"
        >
          <TreeNode value="leaf1" title="leaf1" />
          <TreeNode value="leaf2" title="leaf2" />
        </TreeNode>
        <TreeNode
          value="parent 1-1"
          title="parent 1-1"
        >
          <TreeNode
            value="leaf3"
            title={
              <b style={{ color: '#08c' }}>
                leaf3
              </b>
            }
          />
        </TreeNode>
      </TreeNode>
    </TreeSelect>
  )
}

export default App`,Ec=`import { TreeSelect } from 'antd-packages'
import React, { useState } from 'react'

const { TreeNode } = TreeSelect

const App: React.FC = () => {
  const [value, setValue] = useState<string>()

  const onChange = (newValue: string) => {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <TreeSelect
      showSearch
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto'
      }}
      placeholder="Please select"
      allowClear
      multiple
      treeDefaultExpandAll
      onChange={onChange}
    >
      <TreeNode value="parent 1" title="parent 1">
        <TreeNode
          value="parent 1-0"
          title="parent 1-0"
        >
          <TreeNode
            value="leaf1"
            title="my leaf"
          />
          <TreeNode
            value="leaf2"
            title="your leaf"
          />
        </TreeNode>
        <TreeNode
          value="parent 1-1"
          title="parent 1-1"
        >
          <TreeNode
            value="sss"
            title={
              <b style={{ color: '#08c' }}>sss</b>
            }
          />
        </TreeNode>
      </TreeNode>
    </TreeSelect>
  )
}

export default App`,$c=`import { TreeSelect } from 'antd-packages'
import React, { useState } from 'react'

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1'
      },
      {
        title: 'Child Node2',
        value: '0-0-2'
      }
    ]
  },
  {
    title: 'Node2',
    value: '0-1'
  }
]

const App: React.FC = () => {
  const [value, setValue] = useState<string>()

  const onChange = (newValue: string) => {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <TreeSelect
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto'
      }}
      treeData={treeData}
      placeholder="Please select"
      treeDefaultExpandAll
      onChange={onChange}
    />
  )
}

export default App`,Zc=`import { TreeSelect } from 'antd-packages'
import React, { useState } from 'react'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0'
      }
    ]
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0'
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1'
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2'
      }
    ]
  }
]

const App: React.FC = () => {
  const [value, setValue] = useState(['0-0-0'])

  const onChange = (newValue: string[]) => {
    console.log('onChange ', value)
    setValue(newValue)
  }

  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%'
    }
  }

  return <TreeSelect {...tProps} />
}

export default App`,Vc=`import type { TreeSelectProps } from 'antd-packages'
import { TreeSelect } from 'antd-packages'
import type { DefaultOptionType } from 'antd-packages/es/select'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [value, setValue] = useState<string>()
  const [treeData, setTreeData] = useState<
    Omit<DefaultOptionType, 'label'>[]
  >([
    {
      id: 1,
      pId: 0,
      value: '1',
      title: 'Expand to load'
    },
    {
      id: 2,
      pId: 0,
      value: '2',
      title: 'Expand to load'
    },
    {
      id: 3,
      pId: 0,
      value: '3',
      title: 'Tree Node',
      isLeaf: true
    }
  ])

  const genTreeNode = (
    parentId: number,
    isLeaf = false
  ) => {
    const random = Math.random()
      .toString(36)
      .substring(2, 6)
    return {
      id: random,
      pId: parentId,
      value: random,
      title: isLeaf
        ? 'Tree Node'
        : 'Expand to load',
      isLeaf
    }
  }

  const onLoadData: TreeSelectProps['loadData'] =
    ({ id }) =>
      new Promise((resolve) => {
        setTimeout(() => {
          setTreeData(
            treeData.concat([
              genTreeNode(id, false),
              genTreeNode(id, true),
              genTreeNode(id, true)
            ])
          )
          resolve(undefined)
        }, 300)
      })

  const onChange = (newValue: string) => {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <TreeSelect
      treeDataSimpleMode
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto'
      }}
      placeholder="Please select"
      onChange={onChange}
      loadData={onLoadData}
      treeData={treeData}
    />
  )
}

export default App`,Kc=`import { Space, Switch, TreeSelect } from 'antd-packages'
import React, { useState } from 'react'

const { TreeNode } = TreeSelect

const App: React.FC = () => {
  const [treeLine, setTreeLine] = useState(true)
  const [showLeafIcon, setShowLeafIcon] =
    useState(false)

  return (
    <Space direction="vertical">
      <Switch
        checkedChildren="treeLine"
        unCheckedChildren="treeLine"
        checked={treeLine}
        onChange={() => setTreeLine(!treeLine)}
      />
      <Switch
        disabled={!treeLine}
        checkedChildren="showLeafIcon"
        unCheckedChildren="showLeafIcon"
        checked={showLeafIcon}
        onChange={() =>
          setShowLeafIcon(!showLeafIcon)
        }
      />
      <TreeSelect
        treeLine={treeLine && { showLeafIcon }}
        style={{ width: 300 }}
      >
        <TreeNode
          value="parent 1"
          title="parent 1"
        >
          <TreeNode
            value="parent 1-0"
            title="parent 1-0"
          >
            <TreeNode
              value="leaf1"
              title="my leaf"
            />
            <TreeNode
              value="leaf2"
              title="your leaf"
            />
          </TreeNode>
          <TreeNode
            value="parent 1-1"
            title="parent 1-1"
          >
            <TreeNode value="sss" title="sss" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    </Space>
  )
}

export default App`,Uc=`import type { RadioChangeEvent } from 'antd-packages'
import { Radio, TreeSelect } from 'antd-packages'
import type { SelectCommonPlacement } from 'antd-packages/es/_util/motion'
import React, { useState } from 'react'

const { TreeNode } = TreeSelect

const App: React.FC = () => {
  const [placement, SetPlacement] =
    useState<SelectCommonPlacement>('topLeft')

  const placementChange = (
    e: RadioChangeEvent
  ) => {
    SetPlacement(e.target.value)
  }

  return (
    <>
      <Radio.Group
        value={placement}
        onChange={placementChange}
      >
        <Radio.Button value="topLeft">
          topLeft
        </Radio.Button>
        <Radio.Button value="topRight">
          topRight
        </Radio.Button>
        <Radio.Button value="bottomLeft">
          bottomLeft
        </Radio.Button>
        <Radio.Button value="bottomRight">
          bottomRight
        </Radio.Button>
      </Radio.Group>
      <br />
      <br />

      <TreeSelect
        showSearch
        dropdownStyle={{
          maxHeight: 400,
          overflow: 'auto',
          minWidth: 300
        }}
        placeholder="Please select"
        dropdownMatchSelectWidth={false}
        placement={placement}
        allowClear
        treeDefaultExpandAll
      >
        <TreeNode
          value="parent 1"
          title="parent 1"
        >
          <TreeNode
            value="parent 1-0"
            title="parent 1-0"
          >
            <TreeNode
              value="leaf1"
              title="leaf1"
            />
            <TreeNode
              value="leaf2"
              title="leaf2"
            />
          </TreeNode>
          <TreeNode
            value="parent 1-1"
            title="parent 1-1"
          >
            <TreeNode
              value="leaf3"
              title={
                <b style={{ color: '#08c' }}>
                  leaf3
                </b>
              }
            />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    </>
  )
}

export default App`,jc=`import { Space, TreeSelect } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space
    direction="vertical"
    style={{ width: '100%' }}
  >
    <TreeSelect
      status="error"
      style={{ width: '100%' }}
      placeholder="Error"
    />
    <TreeSelect
      status="warning"
      style={{ width: '100%' }}
      multiple
      placeholder="Warning multiple"
    />
  </Space>
)

export default App`,Hc=`import { SmileOutlined } from '@ant-design/icons'
import { TreeSelect } from 'antd-packages'
import React, { useState } from 'react'

const { TreeNode } = TreeSelect
const icon = <SmileOutlined />

const App: React.FC = () => {
  const [value, setValue] = useState<string>()

  const onChange = (newValue: string) => {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <TreeSelect
      showSearch
      suffixIcon={icon}
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto'
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
    >
      <TreeNode value="parent 1" title="parent 1">
        <TreeNode
          value="parent 1-0"
          title="parent 1-0"
        >
          <TreeNode
            value="leaf1"
            title="my leaf"
          />
          <TreeNode
            value="leaf2"
            title="your leaf"
          />
        </TreeNode>
        <TreeNode
          value="parent 1-1"
          title="parent 1-1"
        >
          <TreeNode
            value="sss"
            title={
              <b style={{ color: '#08c' }}>sss</b>
            }
          />
        </TreeNode>
      </TreeNode>
    </TreeSelect>
  )
}

export default App`,Gc=`import { Divider, Typography } from 'antd-packages'
import React from 'react'

const { Title, Paragraph, Text, Link } =
  Typography

const blockContent = \`AntV \u662F\u8682\u8681\u91D1\u670D\u5168\u65B0\u4E00\u4EE3\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848\uFF0C\u81F4\u529B\u4E8E\u63D0\u4F9B\u4E00\u5957\u7B80\u5355\u65B9\u4FBF\u3001\u4E13\u4E1A\u53EF\u9760\u3001\u4E0D\u9650\u53EF\u80FD\u7684\u6570\u636E\u53EF\u89C6\u5316\u6700\u4F73\u5B9E\u8DF5\u3002\u5F97\u76CA\u4E8E\u4E30\u5BCC\u7684\u4E1A\u52A1\u573A\u666F\u548C\u7528\u6237\u9700\u6C42\u6311\u6218\uFF0CAntV \u7ECF\u5386\u591A\u5E74\u79EF\u7D2F\u4E0E\u4E0D\u65AD\u6253\u78E8\uFF0C\u5DF2\u652F\u6491\u6574\u4E2A\u963F\u91CC\u96C6\u56E2\u5185\u5916 20000+ \u4E1A\u52A1\u7CFB\u7EDF\uFF0C\u901A\u8FC7\u4E86\u65E5\u5747\u5343\u4E07\u7EA7 UV \u4EA7\u54C1\u7684\u4E25\u82DB\u8003\u9A8C\u3002
\u6211\u4EEC\u6B63\u5728\u57FA\u7840\u56FE\u8868\uFF0C\u56FE\u5206\u6790\uFF0C\u56FE\u7F16\u8F91\uFF0C\u5730\u7406\u7A7A\u95F4\u53EF\u89C6\u5316\uFF0C\u667A\u80FD\u53EF\u89C6\u5316\u7B49\u5404\u4E2A\u53EF\u89C6\u5316\u7684\u9886\u57DF\u8015\u8018\uFF0C\u6B22\u8FCE\u540C\u8DEF\u4EBA\u4E00\u8D77\u524D\u884C\u3002\`

const App: React.FC = () => (
  <Typography>
    <Title>Introduction</Title>
    <Paragraph>
      In the process of internal desktop
      applications development, many different
      design specs and implementations would be
      involved, which might cause designers and
      developers difficulties and duplication and
      reduce the efficiency of development.
    </Paragraph>
    <Paragraph>
      After massive project practice and
      summaries, Ant Design, a design language for
      background applications, is refined by Ant
      UED Team, which aims to{' '}
      <Text strong>
        uniform the user interface specs for
        internal background projects, lower the
        unnecessary cost of design differences and
        implementation and liberate the resources
        of design and front-end development
      </Text>
      .
    </Paragraph>
    <Title level={2}>
      Guidelines and Resources
    </Title>
    <Paragraph>
      We supply a series of design principles,
      practical patterns and high quality design
      resources (<Text code>Sketch</Text> and{' '}
      <Text code>Axure</Text>), to help people
      create their product prototypes beautifully
      and efficiently.
    </Paragraph>

    <Paragraph>
      <ul>
        <li>
          <Link href="/docs/spec/proximity">
            Principles
          </Link>
        </li>
        <li>
          <Link href="/docs/spec/overview">
            Patterns
          </Link>
        </li>
        <li>
          <Link href="/docs/resources">
            Resource Download
          </Link>
        </li>
      </ul>
    </Paragraph>

    <Paragraph>
      Press <Text keyboard>Esc</Text> to exit...
    </Paragraph>

    <Divider />

    <Title>\u4ECB\u7ECD</Title>
    <Paragraph>
      \u8682\u8681\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u662F\u4E00\u4E2A\u5E9E\u5927\u4E14\u590D\u6742\u7684\u4F53\u7CFB\u3002\u8FD9\u7C7B\u4EA7\u54C1\u4E0D\u4EC5\u91CF\u7EA7\u5DE8\u5927\u4E14\u529F\u80FD\u590D\u6742\uFF0C\u800C\u4E14\u53D8\u52A8\u548C\u5E76\u53D1\u9891\u7E41\uFF0C\u5E38\u5E38\u9700\u8981\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u80FD\u591F\u5FEB\u901F\u7684\u505A\u51FA\u54CD\u5E94\u3002\u540C\u65F6\u8FD9\u7C7B\u4EA7\u54C1\u4E2D\u6709\u5B58\u5728\u5F88\u591A\u7C7B\u4F3C\u7684\u9875\u9762\u4EE5\u53CA\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u62BD\u8C61\u5F97\u5230\u4E00\u4E9B\u7A33\u5B9A\u4E14\u9AD8\u590D\u7528\u6027\u7684\u5185\u5BB9\u3002
    </Paragraph>
    <Paragraph>
      \u968F\u7740\u5546\u4E1A\u5316\u7684\u8D8B\u52BF\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u5BF9\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u6709\u4E86\u8FDB\u4E00\u6B65\u7684\u8981\u6C42\u3002\u5E26\u7740\u8FD9\u6837\u7684\u4E00\u4E2A\u7EC8\u6781\u76EE\u6807\uFF0C\u6211\u4EEC\uFF08\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\uFF09\u7ECF\u8FC7\u5927\u91CF\u7684\u9879\u76EE\u5B9E\u8DF5\u548C\u603B\u7ED3\uFF0C\u9010\u6B65\u6253\u78E8\u51FA\u4E00\u4E2A\u670D\u52A1\u4E8E\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u7684\u8BBE\u8BA1\u4F53\u7CFB
      Ant Design\u3002\u57FA\u4E8E
      <Text mark>\u300E\u786E\u5B9A\u300F\u548C\u300E\u81EA\u7136\u300F</Text>
      \u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2\uFF0C\u901A\u8FC7\u6A21\u5757\u5316\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u964D\u4F4E\u5197\u4F59\u7684\u751F\u4EA7\u6210\u672C\uFF0C\u8BA9\u8BBE\u8BA1\u8005\u4E13\u6CE8\u4E8E
      <Text strong>\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C</Text>\u3002
    </Paragraph>
    <Title level={2}>\u8BBE\u8BA1\u8D44\u6E90</Title>
    <Paragraph>
      \u6211\u4EEC\u63D0\u4F9B\u5B8C\u5584\u7684\u8BBE\u8BA1\u539F\u5219\u3001\u6700\u4F73\u5B9E\u8DF5\u548C\u8BBE\u8BA1\u8D44\u6E90\u6587\u4EF6\uFF08
      <Text code>Sketch</Text> \u548C
      <Text code>Axure</Text>
      \uFF09\uFF0C\u6765\u5E2E\u52A9\u4E1A\u52A1\u5FEB\u901F\u8BBE\u8BA1\u51FA\u9AD8\u8D28\u91CF\u7684\u4EA7\u54C1\u539F\u578B\u3002
    </Paragraph>

    <Paragraph>
      <ul>
        <li>
          <Link href="/docs/spec/proximity-cn">
            \u8BBE\u8BA1\u539F\u5219
          </Link>
        </li>
        <li>
          <Link href="/docs/spec/overview-cn">
            \u8BBE\u8BA1\u6A21\u5F0F
          </Link>
        </li>
        <li>
          <Link href="/docs/resources-cn">
            \u8BBE\u8BA1\u8D44\u6E90
          </Link>
        </li>
      </ul>
    </Paragraph>

    <Paragraph>
      <blockquote>{blockContent}</blockquote>
      <pre>{blockContent}</pre>
    </Paragraph>

    <Paragraph>
      \u6309<Text keyboard>Esc</Text>\u952E\u9000\u51FA\u9605\u8BFB\u2026\u2026
    </Paragraph>
  </Typography>
)

export default App`,Jc=`import { Typography } from 'antd-packages'
import React from 'react'

const { Title } = Typography

const App: React.FC = () => (
  <>
    <Title>h1. Ant Design</Title>
    <Title level={2}>h2. Ant Design</Title>
    <Title level={3}>h3. Ant Design</Title>
    <Title level={4}>h4. Ant Design</Title>
    <Title level={5}>h5. Ant Design</Title>
  </>
)

export default App`,Yc=`import { Typography } from 'antd-packages'
import React from 'react'

const { Title, Paragraph, Text } = Typography

const App: React.FC = () => (
  <>
    <Title>Introduction</Title>
    <Paragraph>
      In the process of internal desktop
      applications development, many different
      design specs and implementations would be
      involved, which might cause designers and
      developers difficulties and duplication and
      reduce the efficiency of development.
    </Paragraph>
    <Paragraph>
      After massive project practice and
      summaries, Ant Design, a design language for
      background applications, is refined by Ant
      UED Team, which aims to
      <Text strong>
        uniform the user interface specs for
        internal background projects, lower the
        unnecessary cost of design differences and
        implementation and liberate the resources
        of design and front-end development
      </Text>
      .
    </Paragraph>
    <Title level={2}>
      Guidelines and Resources
    </Title>
    <Paragraph>
      We supply a series of design principles,
      practical patterns and high quality design
      resources (<Text code>Sketch</Text> and{' '}
      <Text code>Axure</Text>), to help people
      create their product prototypes beautifully
      and efficiently.
    </Paragraph>

    <Paragraph>
      <ul>
        <li>
          <a href="/docs/spec/proximity">
            Principles
          </a>
        </li>
        <li>
          <a href="/docs/pattern/navigation">
            Patterns
          </a>
        </li>
        <li>
          <a href="/docs/resource/download">
            Resource Download
          </a>
        </li>
      </ul>
    </Paragraph>

    <Title id="intro">\u4ECB\u7ECD</Title>
    <Paragraph>
      \u8682\u8681\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u662F\u4E00\u4E2A\u5E9E\u5927\u4E14\u590D\u6742\u7684\u4F53\u7CFB\u3002\u8FD9\u7C7B\u4EA7\u54C1\u4E0D\u4EC5\u91CF\u7EA7\u5DE8\u5927\u4E14\u529F\u80FD\u590D\u6742\uFF0C\u800C\u4E14\u53D8\u52A8\u548C\u5E76\u53D1\u9891\u7E41\uFF0C\u5E38\u5E38\u9700\u8981\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u80FD\u591F\u5FEB\u901F\u7684\u505A\u51FA\u54CD\u5E94\u3002\u540C\u65F6\u8FD9\u7C7B\u4EA7\u54C1\u4E2D\u6709\u5B58\u5728\u5F88\u591A\u7C7B\u4F3C\u7684\u9875\u9762\u4EE5\u53CA\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u62BD\u8C61\u5F97\u5230\u4E00\u4E9B\u7A33\u5B9A\u4E14\u9AD8\u590D\u7528\u6027\u7684\u5185\u5BB9\u3002
    </Paragraph>
    <Paragraph>
      \u968F\u7740\u5546\u4E1A\u5316\u7684\u8D8B\u52BF\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u5BF9\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u6709\u4E86\u8FDB\u4E00\u6B65\u7684\u8981\u6C42\u3002\u5E26\u7740\u8FD9\u6837\u7684\u4E00\u4E2A\u7EC8\u6781\u76EE\u6807\uFF0C\u6211\u4EEC\uFF08\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\uFF09\u7ECF\u8FC7\u5927\u91CF\u7684\u9879\u76EE\u5B9E\u8DF5\u548C\u603B\u7ED3\uFF0C\u9010\u6B65\u6253\u78E8\u51FA\u4E00\u4E2A\u670D\u52A1\u4E8E\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u7684\u8BBE\u8BA1\u4F53\u7CFB
      Ant Design\u3002\u57FA\u4E8E
      <Text mark>\u300E\u786E\u5B9A\u300F\u548C\u300E\u81EA\u7136\u300F</Text>
      \u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2\uFF0C\u901A\u8FC7\u6A21\u5757\u5316\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u964D\u4F4E\u5197\u4F59\u7684\u751F\u4EA7\u6210\u672C\uFF0C\u8BA9\u8BBE\u8BA1\u8005\u4E13\u6CE8\u4E8E
      <Text strong>\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C</Text>\u3002
    </Paragraph>
    <Title level={2}>\u8BBE\u8BA1\u8D44\u6E90</Title>
    <Paragraph>
      \u6211\u4EEC\u63D0\u4F9B\u5B8C\u5584\u7684\u8BBE\u8BA1\u539F\u5219\u3001\u6700\u4F73\u5B9E\u8DF5\u548C\u8BBE\u8BA1\u8D44\u6E90\u6587\u4EF6\uFF08
      <Text code>Sketch</Text> \u548C
      <Text code>Axure</Text>
      \uFF09\uFF0C\u6765\u5E2E\u52A9\u4E1A\u52A1\u5FEB\u901F\u8BBE\u8BA1\u51FA\u9AD8\u8D28\u91CF\u7684\u4EA7\u54C1\u539F\u578B\u3002
    </Paragraph>

    <Paragraph>
      <ul>
        <li>
          <a href="/docs/spec/proximity">
            \u8BBE\u8BA1\u539F\u5219
          </a>
        </li>
        <li>
          <a href="/docs/pattern/navigation">
            \u8BBE\u8BA1\u6A21\u5F0F
          </a>
        </li>
        <li>
          <a href="/docs/resource/download">
            \u8BBE\u8BA1\u8D44\u6E90
          </a>
        </li>
      </ul>
    </Paragraph>

    <Paragraph>
      <ul>
        <li>I am an unordered item</li>
        <li>
          I am an unordered item with an ordered
          sublist
          <ol>
            <li>I am ordered</li>
          </ol>
          <ul>
            <li>I am unordered</li>
          </ul>
        </li>
      </ul>
      <ol>
        <li>
          Ordered list item with unordered sublist
          <ul>
            <li>I am unordered!</li>
            <li>I am also unordered!</li>
          </ul>
        </li>
      </ol>
    </Paragraph>
  </>
)

export default App`,Wc=`import { Space, Typography } from 'antd-packages'
import React from 'react'

const { Text, Link } = Typography

const App: React.FC = () => (
  <Space direction="vertical">
    <Text>Ant Design (default)</Text>
    <Text type="secondary">
      Ant Design (secondary)
    </Text>
    <Text type="success">
      Ant Design (success)
    </Text>
    <Text type="warning">
      Ant Design (warning)
    </Text>
    <Text type="danger">Ant Design (danger)</Text>
    <Text disabled>Ant Design (disabled)</Text>
    <Text mark>Ant Design (mark)</Text>
    <Text code>Ant Design (code)</Text>
    <Text keyboard>Ant Design (keyboard)</Text>
    <Text underline>Ant Design (underline)</Text>
    <Text delete>Ant Design (delete)</Text>
    <Text strong>Ant Design (strong)</Text>
    <Text italic>Ant Design (italic)</Text>
    <Link
      href="https://ant.design"
      target="_blank"
    >
      Ant Design (Link)
    </Link>
  </Space>
)

export default App`,Qc=`import {
  CheckOutlined,
  HighlightOutlined,
  SmileFilled,
  SmileOutlined
} from '@ant-design/icons'
import { Divider, Radio, Typography } from 'antd-packages'
import React, { useState } from 'react'

const { Paragraph } = Typography

const App: React.FC = () => {
  const [editableStr, setEditableStr] = useState(
    'This is an editable text.'
  )
  const [customIconStr, setCustomIconStr] =
    useState(
      'Custom Edit icon and replace tooltip text.'
    )
  const [clickTriggerStr, setClickTriggerStr] =
    useState(
      'Text or icon as trigger - click to start editing.'
    )
  const [chooseTrigger, setChooseTrigger] =
    useState<('icon' | 'text')[]>(['icon'])
  const [
    customEnterIconStr,
    setCustomEnterIconStr
  ] = useState(
    'Editable text with a custom enter icon in edit field.'
  )
  const [noEnterIconStr, setNoEnterIconStr] =
    useState(
      'Editable text with no enter icon in edit field.'
    )
  const [hideTooltipStr, setHideTooltipStr] =
    useState('Hide Edit tooltip.')
  const [lengthLimitedStr, setLengthLimitedStr] =
    useState(
      'This is an editable text with limited length.'
    )

  const radioToState = (
    input: string
  ): ('icon' | 'text')[] => {
    switch (input) {
      case 'text':
        return ['text']
      case 'both':
        return ['icon', 'text']
      case 'icon':
      default:
        return ['icon']
    }
  }

  const stateToRadio = () => {
    if (chooseTrigger.indexOf('text') !== -1) {
      return chooseTrigger.indexOf('icon') !== -1
        ? 'both'
        : 'text'
    }
    return 'icon'
  }

  return (
    <>
      <Paragraph
        editable={{ onChange: setEditableStr }}
      >
        {editableStr}
      </Paragraph>
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: 'click to edit text',
          onChange: setCustomIconStr
        }}
      >
        {customIconStr}
      </Paragraph>
      Trigger edit with:{' '}
      <Radio.Group
        onChange={(e) =>
          setChooseTrigger(
            radioToState(e.target.value)
          )
        }
        value={stateToRadio()}
      >
        <Radio value="icon">icon</Radio>
        <Radio value="text">text</Radio>
        <Radio value="both">both</Radio>
      </Radio.Group>
      <Paragraph
        editable={{
          tooltip: 'click to edit text',
          onChange: setClickTriggerStr,
          triggerType: chooseTrigger
        }}
      >
        {clickTriggerStr}
      </Paragraph>
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: 'click to edit text',
          onChange: setCustomEnterIconStr,
          enterIcon: <CheckOutlined />
        }}
      >
        {customEnterIconStr}
      </Paragraph>
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: 'click to edit text',
          onChange: setNoEnterIconStr,
          enterIcon: null
        }}
      >
        {noEnterIconStr}
      </Paragraph>
      <Paragraph
        editable={{
          tooltip: false,
          onChange: setHideTooltipStr
        }}
      >
        {hideTooltipStr}
      </Paragraph>
      <Paragraph
        editable={{
          onChange: setLengthLimitedStr,
          maxLength: 50,
          autoSize: { maxRows: 5, minRows: 3 }
        }}
      >
        {lengthLimitedStr}
      </Paragraph>
      <Typography.Title
        editable
        level={1}
        style={{ margin: 0 }}
      >
        h1. Ant Design
      </Typography.Title>
      <Typography.Title
        editable
        level={2}
        style={{ margin: 0 }}
      >
        h2. Ant Design
      </Typography.Title>
      <Typography.Title
        editable
        level={3}
        style={{ margin: 0 }}
      >
        h3. Ant Design
      </Typography.Title>
      <Typography.Title
        editable
        level={4}
        style={{ margin: 0 }}
      >
        h4. Ant Design
      </Typography.Title>
      <Typography.Title
        editable
        level={5}
        style={{ margin: 0 }}
      >
        h5. Ant Design
      </Typography.Title>
      <Divider />
      <Paragraph copyable>
        This is a copyable text.
      </Paragraph>
      <Paragraph
        copyable={{ text: 'Hello, Ant Design!' }}
      >
        Replace copy text.
      </Paragraph>
      <Paragraph
        copyable={{
          icon: [
            <SmileOutlined key="copy-icon" />,
            <SmileFilled key="copied-icon" />
          ],
          tooltips: [
            'click here',
            'you clicked!!'
          ]
        }}
      >
        Custom Copy icon and replace tooltips
        text.
      </Paragraph>
      <Paragraph copyable={{ tooltips: false }}>
        Hide Copy tooltips.
      </Paragraph>
    </>
  )
}

export default App`,Xc=`import { Switch, Typography } from 'antd-packages'
import React, { useState } from 'react'

const { Paragraph, Text } = Typography

const App: React.FC = () => {
  const [ellipsis, setEllipsis] = useState(true)

  return (
    <>
      <Switch
        checked={ellipsis}
        onChange={() => {
          setEllipsis(!ellipsis)
        }}
      />

      <Paragraph ellipsis={ellipsis}>
        Ant Design, a design language for
        background applications, is refined by Ant
        UED Team. Ant Design, a design language
        for background applications, is refined by
        Ant UED Team. Ant Design, a design
        language for background applications, is
        refined by Ant UED Team. Ant Design, a
        design language for background
        applications, is refined by Ant UED Team.
        Ant Design, a design language for
        background applications, is refined by Ant
        UED Team. Ant Design, a design language
        for background applications, is refined by
        Ant UED Team.
      </Paragraph>

      <Paragraph
        ellipsis={
          ellipsis
            ? {
                rows: 2,
                expandable: true,
                symbol: 'more'
              }
            : false
        }
      >
        Ant Design, a design language for
        background applications, is refined by Ant
        UED Team. Ant Design, a design language
        for background applications, is refined by
        Ant UED Team. Ant Design, a design
        language for background applications, is
        refined by Ant UED Team. Ant Design, a
        design language for background
        applications, is refined by Ant UED Team.
        Ant Design, a design language for
        background applications, is refined by Ant
        UED Team. Ant Design, a design language
        for background applications, is refined by
        Ant UED Team.
      </Paragraph>

      <Text
        style={
          ellipsis ? { width: 100 } : undefined
        }
        ellipsis={
          ellipsis
            ? { tooltip: 'I am ellipsis now!' }
            : false
        }
      >
        Ant Design, a design language for
        background applications, is refined by Ant
        UED Team.
      </Text>
    </>
  )
}

export default App`,qc=`import { Typography } from 'antd-packages'
import React from 'react'

const { Text } = Typography

const EllipsisMiddle: React.FC<{
  suffixCount: number
  children: string
}> = ({ suffixCount, children }) => {
  const start = children
    .slice(0, children.length - suffixCount)
    .trim()
  const suffix = children
    .slice(-suffixCount)
    .trim()
  return (
    <Text
      style={{ maxWidth: '100%' }}
      ellipsis={{ suffix }}
    >
      {start}
    </Text>
  )
}

const App: React.FC = () => (
  <EllipsisMiddle suffixCount={12}>
    In the process of internal desktop
    applications development, many different
    design specs and implementations would be
    involved, which might cause designers and
    developers difficulties and duplication and
    reduce the efficiency of development.
  </EllipsisMiddle>
)

export default App`,_c=`import { Slider, Switch, Typography } from 'antd-packages'
import React, { useState } from 'react'

const { Text, Paragraph } = Typography

const App: React.FC = () => {
  const [rows, setRows] = useState(1)
  const [longText, setLongText] = useState(true)
  const [copyable, setCopyable] = useState(false)
  const [editable, setEditable] = useState(false)
  const [expandable, setExpandable] =
    useState(false)

  return (
    <>
      <Switch
        checked={longText}
        checkedChildren="Long Text"
        onChange={setLongText}
      />
      <Switch
        checked={copyable}
        onChange={setCopyable}
      />
      <Switch
        checked={editable}
        onChange={setEditable}
      />
      <Switch
        checked={expandable}
        onChange={setExpandable}
      />
      <Slider
        value={rows}
        min={1}
        max={10}
        onChange={setRows}
      />
      {longText ? (
        <Paragraph
          ellipsis={{ rows, expandable }}
          copyable={copyable}
          editable={editable}
        >
          Ant Design, a design language for
          background applications, is refined by
          Ant UED Team. This is a nest sample{' '}
          <Text code strong delete>
            Test
          </Text>{' '}
          case. Bnt Design, a design language for
          background applications, is refined by
          Ant UED Team. Cnt Design, a design
          language for background applications, is
          refined by Ant UED Team. Dnt Design, a
          design language for background
          applications, is refined by Ant UED
          Team. Ent Design, a design language for
          background applications, is refined by
          Ant UED Team.
        </Paragraph>
      ) : (
        <Paragraph
          ellipsis={{ rows, expandable }}
          copyable={copyable}
          editable={editable}
        >
          Hello World
        </Paragraph>
      )}

      <Text
        style={{ width: 100 }}
        ellipsis
        copyable
      >
        Ant Design is a design language for
        background applications, is refined by Ant
        UED Team.
      </Text>

      <p>
        [Before]<Text ellipsis>not ellipsis</Text>
        [After]
      </p>
    </>
  )
}

export default App`,np=`import { Slider, Typography } from 'antd-packages'
import React, { useState } from 'react'

const { Paragraph } = Typography

const App: React.FC = () => {
  const [rows, setRows] = useState(1)

  const article =
    "To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life"

  return (
    <>
      <Slider
        value={rows}
        min={1}
        max={10}
        onChange={setRows}
      />
      <Paragraph
        ellipsis={{
          rows,
          expandable: true,
          suffix: '--William Shakespeare',
          onEllipsis: (ellipsis) => {
            console.log(
              'Ellipsis changed:',
              ellipsis
            )
          }
        }}
        title={\`\${article}--William Shakespeare\`}
      >
        {article}
      </Paragraph>
    </>
  )
}

export default App`,ep=`import { UploadOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd-packages'
import { Button, message, Upload } from 'antd-packages'
import React from 'react'

const props: UploadProps = {
  name: 'file',
  action:
    'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(
        \`\${info.file.name} file uploaded successfully\`
      )
    } else if (info.file.status === 'error') {
      message.error(
        \`\${info.file.name} file upload failed.\`
      )
    }
  }
}

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>
      Click to Upload
    </Button>
  </Upload>
)

export default App`,tp=`import {
  LoadingOutlined,
  PlusOutlined
} from '@ant-design/icons'
import { message, Upload } from 'antd-packages'
import type { UploadChangeParam } from 'antd-packages/es/upload'
import type {
  RcFile,
  UploadFile,
  UploadProps
} from 'antd-packages/es/upload/interface'
import React, { useState } from 'react'

const getBase64 = (
  img: RcFile,
  callback: (url: string) => void
) => {
  const reader = new FileReader()
  reader.addEventListener('load', () =>
    callback(reader.result as string)
  )
  reader.readAsDataURL(img)
}

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng =
    file.type === 'image/jpeg' ||
    file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error(
      'You can only upload JPG/PNG file!'
    )
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] =
    useState<string>()

  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(
        info.file.originFileObj as RcFile,
        (url) => {
          setLoading(false)
          setImageUrl(url)
        }
      )
    }
  }

  const uploadButton = (
    <div>
      {loading ? (
        <LoadingOutlined />
      ) : (
        <PlusOutlined />
      )}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{ width: '100%' }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  )
}

export default App`,ap=`import { UploadOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd-packages'
import { Button, Upload } from 'antd-packages'
import React from 'react'

const props: UploadProps = {
  action:
    'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList)
    }
  },
  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/xxx.png'
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png'
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/zzz.png'
    }
  ]
}

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>
      Upload
    </Button>
  </Upload>
)

export default App`,rp=`import { PlusOutlined } from '@ant-design/icons'
import { Modal, Upload } from 'antd-packages'
import type {
  RcFile,
  UploadProps
} from 'antd-packages/es/upload'
import type { UploadFile } from 'antd-packages/es/upload/interface'
import React, { useState } from 'react'

const getBase64 = (
  file: RcFile
): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () =>
      resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

const App: React.FC = () => {
  const [previewVisible, setPreviewVisible] =
    useState(false)
  const [previewImage, setPreviewImage] =
    useState('')
  const [previewTitle, setPreviewTitle] =
    useState('')
  const [fileList, setFileList] = useState<
    UploadFile[]
  >([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error'
    }
  ])

  const handleCancel = () =>
    setPreviewVisible(false)

  const handlePreview = async (
    file: UploadFile
  ) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(
        file.originFileObj as RcFile
      )
    }

    setPreviewImage(
      file.url || (file.preview as string)
    )
    setPreviewVisible(true)
    setPreviewTitle(
      file.name ||
      file.url!.substring(
        file.url!.lastIndexOf('/') + 1
      )
    )
  }

  const handleChange: UploadProps['onChange'] = ({
    fileList: newFileList
  }) => setFileList(newFileList)

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )
  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8
          ? null
          : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{ width: '100%' }}
          src={previewImage}
        />
      </Modal>
    </>
  )
}

export default App`,op=`import { UploadOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd-packages'
import { Button, Upload } from 'antd-packages'
import type { UploadFile } from 'antd-packages/es/upload/interface'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [fileList, setFileList] = useState<
    UploadFile[]
  >([
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png'
    }
  ])

  const handleChange: UploadProps['onChange'] = (
    info
  ) => {
    let newFileList = [...info.fileList]

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = fileList.slice(-2)

    // 2. Read from response and show file link
    newFileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url
      }
      return file
    })

    setFileList(newFileList)
  }

  const props = {
    action:
      'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: handleChange,
    multiple: true
  }
  return (
    <Upload {...props} fileList={fileList}>
      <Button icon={<UploadOutlined />}>
        Upload
      </Button>
    </Upload>
  )
}

export default App`,sp=`import { InboxOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd-packages'
import { message, Upload } from 'antd-packages'
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
        \`\${info.file.name} file uploaded successfully.\`
      )
    } else if (status === 'error') {
      message.error(
        \`\${info.file.name} file upload failed.\`
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

export default App`,ip=`import { UploadOutlined } from '@ant-design/icons'
import { Button, Upload } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    directory
  >
    <Button icon={<UploadOutlined />}>
      Upload Directory
    </Button>
  </Upload>
)

export default App`,lp=`/**
 * title: \u624B\u52A8\u4E0A\u4F20
 * desc: \`beforeUpload\`\u8FD4\u56DE\`false\`\u540E\uFF0C\u624B\u52A8\u4E0A\u4F20\u6587\u4EF6\u3002
 */

import { UploadOutlined } from '@ant-design/icons'
import { Button, message, Upload } from 'antd-packages'
import type {
  RcFile,
  UploadFile,
  UploadProps
} from 'antd-packages/es/upload/interface'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [fileList, setFileList] = useState<
    UploadFile[]
  >([])
  const [uploading, setUploading] =
    useState(false)

  const handleUpload = () => {
    const formData = new FormData()
    fileList.forEach((file) => {
      formData.append('files[]', file as RcFile)
    })
    setUploading(true)
    // You can use any AJAX library you like
    fetch(
      'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      {
        method: 'POST',
        body: formData
      }
    )
      .then((res) => res.json())
      .then(() => {
        setFileList([])
        message.success('upload successfully.')
      })
      .catch(() => {
        message.error('upload failed.')
      })
      .finally(() => {
        setUploading(false)
      })
  }

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file)
      const newFileList = fileList.slice()
      newFileList.splice(index, 1)
      setFileList(newFileList)
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file])

      return false
    },
    fileList
  }

  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>
          Select File
        </Button>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </>
  )
}

export default App`,dp=`/**
 * title: \u53EA\u4E0A\u4F20 png \u56FE\u7247
 * desc: \`beforeUpload\`\u8FD4\u56DE\`false\`\u6216\`Promise.reject\`\u65F6\uFF0C\u53EA\u7528\u4E8E\u62E6\u622A\u4E0A\u4F20\u884C\u4E3A\uFF0C\u4E0D\u4F1A\u963B\u6B62\u6587\u4EF6\u8FDB\u5165\u4E0A\u4F20\u5217\u8868\uFF08[\u539F\u56E0](https://github.com/ant-design/ant-design/issues/15561#issuecomment-475108235)\uFF09\u3002\u5982\u679C\u9700\u8981\u963B\u6B62\u5217\u8868\u5C55\u73B0\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD4\u56DE\`Upload.LIST_IGNORE\`\u5B9E\u73B0\u3002
 */

import { UploadOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd-packages'
import { Button, message, Upload } from 'antd-packages'
import React from 'react'

const props: UploadProps = {
  beforeUpload: (file) => {
    const isPNG = file.type === 'image/png'
    if (!isPNG) {
      message.error(
        \`\${file.name} is not a png file\`
      )
    }
    return isPNG || Upload.LIST_IGNORE
  },
  onChange: (info) => {
    console.log(info.fileList)
  }
}

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>
      Upload png only
    </Button>
  </Upload>
)

export default App`,cp=`import { UploadOutlined } from '@ant-design/icons'
import { Button, Upload } from 'antd-packages'
import type { UploadFile } from 'antd-packages/es/upload/interface'
import React from 'react'

const fileList: UploadFile[] = [
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-2',
    name: 'yyy.png',
    status: 'error'
  }
]

const App: React.FC = () => (
  <>
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      defaultFileList={[...fileList]}
    >
      <Button icon={<UploadOutlined />}>
        Upload
      </Button>
    </Upload>
    <br />
    <br />
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      defaultFileList={[...fileList]}
      className="upload-list-inline"
    >
      <Button icon={<UploadOutlined />}>
        Upload
      </Button>
    </Upload>
  </>
)

export default App`,pp=`import { UploadOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd-packages'
import { Button, Upload } from 'antd-packages'
import React from 'react'

const props: UploadProps = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file)
    // Your process logic. Here we just mock to the same file
    return fetch(
      'https://next.json-generator.com/api/json/get/4ytyBoLK8',
      {
        method: 'POST',
        body: file
      }
    )
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail)
  }
}

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>
      Upload
    </Button>
  </Upload>
)

export default App`,up=`import { UploadOutlined } from '@ant-design/icons'
import { Button, Space, Upload } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space
    direction="vertical"
    style={{ width: '100%' }}
    size="large"
  >
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={1}
    >
      <Button icon={<UploadOutlined />}>
        Upload (Max: 1)
      </Button>
    </Upload>
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={3}
      multiple
    >
      <Button icon={<UploadOutlined />}>
        Upload (Max: 3)
      </Button>
    </Upload>
  </Space>
)

export default App`,mp=`import { UploadOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd-packages'
import { Button, Upload } from 'antd-packages'
import React from 'react'

const props: UploadProps = {
  action:
    'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  beforeUpload(file) {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const img = document.createElement('img')
        img.src = reader.result as string
        img.onload = () => {
          const canvas =
            document.createElement('canvas')
          canvas.width = img.naturalWidth
          canvas.height = img.naturalHeight
          const ctx = canvas.getContext('2d')!
          ctx.drawImage(img, 0, 0)
          ctx.fillStyle = 'red'
          ctx.textBaseline = 'middle'
          ctx.font = '33px Arial'
          ctx.fillText('Ant Design', 20, 20)
          canvas.toBlob((result) =>
            resolve(result as any)
          )
        }
      }
    })
  }
}

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>
      Upload
    </Button>
  </Upload>
)

export default App`,gp=`import { UploadOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd-packages'
import {
  Button,
  Form,
  message,
  Upload
} from 'antd-packages'
import type { UploadFile } from 'antd-packages/es/upload/interface'
import React, { useEffect, useState } from 'react'

interface OSSDataType {
  dir: string
  expire: string
  host: string
  accessId: string
  policy: string
  signature: string
}

interface AliyunOSSUploadProps {
  value?: UploadFile[]
  onChange?: (fileList: UploadFile[]) => void
}

const AliyunOSSUpload = ({
  value,
  onChange
}: AliyunOSSUploadProps) => {
  const [OSSData, setOSSData] =
    useState<OSSDataType>()

  // Mock get OSS api
  // https://help.aliyun.com/document_detail/31988.html
  const mockGetOSSData = () => ({
    dir: 'user-dir/',
    expire: '1577811661',
    host: '//www.mocky.io/v2/5cc8019d300000980a055e76',
    accessId: 'c2hhb2RhaG9uZw==',
    policy: 'eGl4aWhhaGFrdWt1ZGFkYQ==',
    signature: 'ZGFob25nc2hhbw=='
  })

  const init = async () => {
    try {
      const result = await mockGetOSSData()
      setOSSData(result)
    } catch (error) {
      message.error(error)
    }
  }

  useEffect(() => {
    init()
  }, [])

  const handleChange: UploadProps['onChange'] = ({
    fileList
  }) => {
    console.log('Aliyun OSS:', fileList)
    onChange?.([...fileList])
  }

  const onRemove = (file: UploadFile) => {
    const files = (value || []).filter(
      (v) => v.url !== file.url
    )

    if (onChange) {
      onChange(files)
    }
  }

  const getExtraData: UploadProps['data'] = (
    file
  ) => ({
    key: file.url,
    OSSAccessKeyId: OSSData?.accessId,
    policy: OSSData?.policy,
    Signature: OSSData?.signature
  })

  const beforeUpload: UploadProps['beforeUpload'] =
    async (file) => {
      if (!OSSData) return false

      const expire = Number(OSSData.expire) * 1000

      if (expire < Date.now()) {
        await init()
      }

      const suffix = file.name.slice(
        file.name.lastIndexOf('.')
      )
      const filename = Date.now() + suffix
      // @ts-ignore
      file.url = OSSData.dir + filename

      return file
    }

  const uploadProps: UploadProps = {
    name: 'file',
    fileList: value,
    action: OSSData?.host,
    onChange: handleChange,
    onRemove,
    data: getExtraData,
    beforeUpload
  }

  return (
    <Upload {...uploadProps}>
      <Button icon={<UploadOutlined />}>
        Click to Upload
      </Button>
    </Upload>
  )
}

const App: React.FC = () => (
  <Form labelCol={{ span: 4 }}>
    <Form.Item label="Photos" name="photos">
      <AliyunOSSUpload />
    </Form.Item>
  </Form>
)

export default App`,fp=`import {
  FileExcelTwoTone,
  FilePdfTwoTone,
  FileWordTwoTone,
  LoadingOutlined,
  PaperClipOutlined,
  PictureTwoTone,
  PlusOutlined
} from '@ant-design/icons'
import { Modal, Upload } from 'antd-packages'
import type {
  RcFile,
  UploadFile,
  UploadProps
} from 'antd-packages/es/upload/interface'
import React, { useState } from 'react'

const getBase64 = (
  file: RcFile
): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () =>
      resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

const App: React.FC = () => {
  const [previewVisible, setPreviewVisible] =
    useState(false)
  const [previewImage, setPreviewImage] =
    useState('')
  const [fileList, setFileList] = useState<
    UploadFile[]
  >([
    {
      uid: '-2',
      name: 'pdf.pdf',
      status: 'done',
      url: 'http://cdn07.foxitsoftware.cn/pub/foxit/cpdf/FoxitCompanyProfile.pdf'
    },
    {
      uid: '-3',
      name: 'doc.doc',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.doc'
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'error'
    },
    {
      uid: '-5',
      name: 'pdf.pdf',
      status: 'error'
    },
    {
      uid: '-6',
      name: 'doc.doc',
      status: 'error'
    }
  ])

  const handleCancel = () =>
    setPreviewVisible(false)

  const handlePreview = async (
    file: UploadFile
  ) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(
        file.originFileObj as RcFile
      )
    }

    setPreviewVisible(true)
    setPreviewImage(
      file.url || (file.preview as string)
    )
  }

  const handleChange: UploadProps['onChange'] = ({
    fileList: newFileList
  }) => setFileList(newFileList)

  const handleIconRender: UploadProps['iconRender'] =
    (file, listType) => {
      const fileSufIconList = [
        {
          type: <FilePdfTwoTone />,
          suf: ['.pdf']
        },
        {
          type: <FileExcelTwoTone />,
          suf: ['.xlsx', '.xls', '.csv']
        },
        {
          type: <FileWordTwoTone />,
          suf: ['.doc', '.docx']
        },
        {
          type: <PictureTwoTone />,
          suf: [
            '.webp',
            '.svg',
            '.png',
            '.gif',
            '.jpg',
            '.jpeg',
            '.jfif',
            '.bmp',
            '.dpg'
          ]
        }
      ]
      // console.log(1, file, listType);
      let icon =
        file.status === 'uploading' ? (
          <LoadingOutlined />
        ) : (
          <PaperClipOutlined />
        )
      if (
        listType === 'picture' ||
        listType === 'picture-card'
      ) {
        if (
          listType === 'picture-card' &&
          file.status === 'uploading'
        ) {
          icon = <LoadingOutlined /> // or icon = 'uploading...';
        } else {
          fileSufIconList.forEach((item) => {
            if (
              item.suf.includes(
                file.name.slice(
                  file.name.lastIndexOf('.')
                )
              )
            ) {
              icon = item.type
            }
          })
        }
      }
      return icon
    }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        iconRender={handleIconRender}
      >
        {fileList.length >= 8
          ? null
          : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{ width: '100%' }}
          src={previewImage}
        />
      </Modal>
    </>
  )
}

export default App`,vp=`import {
  StarOutlined,
  UploadOutlined
} from '@ant-design/icons'
import type { UploadProps } from 'antd-packages/lib/Upload'
import { Button, Upload } from 'antd-packages'
import React from 'react'

const props: UploadProps = {
  action:
    'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList)
    }
  },
  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/xxx.png'
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png'
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/zzz.png'
    }
  ],
  showUploadList: {
    showDownloadIcon: true,
    downloadIcon: 'Download',
    showRemoveIcon: true,
    removeIcon: (
      <StarOutlined
        onClick={(e) =>
          console.log(
            e,
            'custom removeIcon event'
          )
        }
      />
    )
  }
}

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>
      Upload
    </Button>
  </Upload>
)

export default App`,hp=`import { UploadOutlined } from '@ant-design/icons'
import { Button, Tooltip, Upload } from 'antd-packages'
import type {
  UploadFile,
  UploadProps
} from 'antd-packages/es/upload/interface'
import update from 'immutability-helper'
import React, {
  useCallback,
  useRef,
  useState
} from 'react'
import {
  DndProvider,
  useDrag,
  useDrop
} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const type = 'DragableUploadList'

interface DragableUploadListItemProps {
  originNode: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >
  file: UploadFile
  fileList: UploadFile[]
  moveRow: (
    dragIndex: any,
    hoverIndex: any
  ) => void
}

const DragableUploadListItem = ({
  originNode,
  moveRow,
  file,
  fileList
}: DragableUploadListItemProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const index = fileList.indexOf(file)
  const [{ isOver, dropClassName }, drop] =
    useDrop({
      accept: type,
      collect: (monitor) => {
        const { index: dragIndex } =
          monitor.getItem() || {}
        if (dragIndex === index) {
          return {}
        }
        return {
          isOver: monitor.isOver(),
          dropClassName:
            dragIndex < index
              ? ' drop-over-downward'
              : ' drop-over-upward'
        }
      },
      drop: (item: any) => {
        moveRow(item.index, index)
      }
    })
  const [, drag] = useDrag({
    type,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })
  drop(drag(ref))
  const errorNode = (
    <Tooltip title="Upload Error">
      {originNode.props.children}
    </Tooltip>
  )
  return (
    <div
      ref={ref}
      className={\`ant-upload-draggable-list-item \${isOver ? dropClassName : ''
        }\`}
      style={{ cursor: 'move' }}
    >
      {file.status === 'error'
        ? errorNode
        : originNode}
    </div>
  )
}

const App: React.FC = () => {
  const [fileList, setFileList] = useState<
    UploadFile[]
  >([
    {
      uid: '-1',
      name: 'image1.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-2',
      name: 'image2.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-3',
      name: 'image3.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-4',
      name: 'image4.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error'
    }
  ])

  const moveRow = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragRow = fileList[dragIndex]
      setFileList(
        update(fileList, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow]
          ]
        })
      )
    },
    [fileList]
  )

  const onChange: UploadProps['onChange'] = ({
    fileList: newFileList
  }) => {
    setFileList(newFileList)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        fileList={fileList}
        onChange={onChange}
        itemRender={(
          originNode,
          file,
          currFileList
        ) => (
          <DragableUploadListItem
            originNode={originNode}
            file={file}
            fileList={currFileList}
            moveRow={moveRow}
          />
        )}
      >
        <Button icon={<UploadOutlined />}>
          Click to Upload
        </Button>
      </Upload>
    </DndProvider>
  )
}

export default App`,yp=`import { Upload } from 'antd-packages'
import ImgCrop from 'antd-img-crop'
import type {
  RcFile,
  UploadFile,
  UploadProps
} from 'antd-packages/es/upload/interface'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [fileList, setFileList] = useState<
    UploadFile[]
  >([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ])

  const onChange: UploadProps['onChange'] = ({
    fileList: newFileList
  }) => {
    setFileList(newFileList)
  }

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(
          file.originFileObj as RcFile
        )
        reader.onload = () =>
          resolve(reader.result as string)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }

  return (
    <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
  )
}

export default App`,Cp=`import { UploadOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd-packages'
import { Button, message, Upload } from 'antd-packages'
import React from 'react'

const props: UploadProps = {
  name: 'file',
  action:
    'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(
        \`\${info.file.name} file uploaded successfully\`
      )
    } else if (info.file.status === 'error') {
      message.error(
        \`\${info.file.name} file upload failed.\`
      )
    }
  },
  progress: {
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068'
    },
    strokeWidth: 3,
    format: (percent) =>
      percent &&
      \`\${parseFloat(percent.toFixed(2))}%\`
  }
}

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>
      Click to Upload
    </Button>
  </Upload>
)

export default App`,wp=`import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined
} from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Space>
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined rotate={180} />
    <LoadingOutlined />
  </Space>
)

export default App`,kp=`import Icon, {
  HomeOutlined
} from '@ant-design/icons'
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'
import { Space } from 'antd'
import React from 'react'

const HeartSvg = () => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
  >
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
)

const PandaSvg = () => (
  <svg
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    fill="currentColor"
  >
    <path
      d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
      fill="#6B676E"
      p-id="1143"
    />
    <path
      d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
      fill="#FFEBD2"
      p-id="1144"
    />
    <path
      d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
      fill="#E9D7C3"
      p-id="1145"
    />
    <path
      d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
      fill="#FFFFFF"
      p-id="1146"
    />
    <path
      d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
      fill="#6B676E"
      p-id="1147"
    />
    <path
      d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
      fill="#464655"
      p-id="1148"
    />
    <path
      d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1149"
    />
    <path
      d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1150"
    />
  </svg>
)

const HeartIcon = (
  props: Partial<CustomIconComponentProps>
) => <Icon component={HeartSvg} {...props} />

const PandaIcon = (
  props: Partial<CustomIconComponentProps>
) => <Icon component={PandaSvg} {...props} />

const App: React.FC = () => (
  <Space>
    <HeartIcon style={{ color: 'hotpink' }} />
    <PandaIcon style={{ fontSize: '32px' }} />
    <Icon
      component={
        HomeOutlined as React.ForwardRefExoticComponent<any>
      }
    />
    <HomeOutlined />
  </Space>
)

export default App`,bp=`import { createFromIconfontCN } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'

const IconFont = createFromIconfontCN({
  scriptUrl:
    '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
})

const App: React.FC = () => (
  <Space>
    <IconFont type="icon-tuichu" />
    <IconFont type="icon-facebook" />
    <IconFont type="icon-twitter" />
  </Space>
)

export default App`,Sp=`/**
 * title: \u4F7F\u7528 iconfont.cn \u7684\u591A\u4E2A\u8D44\u6E90
 * desc: \`@ant-design/icons@4.1.0\` \u4EE5\u540E\uFF0C\`scriptUrl\` \u53EF\u5F15\u7528\u591A\u4E2A\u8D44\u6E90\uFF0C\u7528\u6237\u53EF\u7075\u6D3B\u7684\u7BA1\u7406 [iconfont.cn](http://iconfont.cn/) \u56FE\u6807\u3002\u5982\u679C\u8D44\u6E90\u7684\u56FE\u6807\u51FA\u73B0\u91CD\u540D\uFF0C\u4F1A\u6309\u7167\u6570\u7EC4\u987A\u5E8F\u8FDB\u884C\u8986\u76D6\u3002
 */

import { createFromIconfontCN } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js' // icon-shoppingcart, icon-python
  ]
})

const App: React.FC = () => (
  <Space>
    <IconFont type="icon-javascript" />
    <IconFont type="icon-java" />
    <IconFont type="icon-shoppingcart" />
    <IconFont type="icon-python" />
  </Space>
)

export default App`,Pp=`import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone
} from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Space>
    <SmileTwoTone />
    <HeartTwoTone twoToneColor="#eb2f96" />
    <CheckCircleTwoTone twoToneColor="#52c41a" />
  </Space>
)
