---
title: Divider 分割线
group:
  title: 布局
  order: 1
nav:
  title: Divider 分割线
  path: /components
--- 

# 分割线 Divider

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## 水平分割线

<code src="./demos/horizontal.tsx"></code>

## 带文字的分割线

<code src="./demos/with-text.tsx"></code>

## 分割文字使用正文样式

<code src="./demos/plain.tsx"></code>

## 垂直分割线

<code src="./demos/vertical.tsx"></code>

## 样式自定义

<code src="./demos/customize-style.tsx"></code>

## API

| 参数              | 说明                                                                                            | 类型                          | 默认值       | 版本  |
| ----------------- | ----------------------------------------------------------------------------------------------- | ----------------------------- | ------------ | ----- |
| children          | 嵌套的标题                                                                                      | ReactNode                     | -            |       |
| className         | 分割线样式类                                                                                    | string                        | -            |       |
| dashed            | 是否虚线                                                                                        | boolean                       | false        |       |
| orientation       | 分割线标题的位置                                                                                | `left` \| `right` \| `center` | `center`     |       |
| orientationMargin | 标题和最近 left/right 边框之间的距离，去除了分割线，同时 `orientation` 必须为 `left` 或 `right` | string \| number              | -            |       |
| plain             | 文字是否显示为普通正文样式                                                                      | boolean                       | false        | 4.2.0 |
| style             | 分割线样式对象                                                                                  | CSSProperties                 | -            |       |
| type              | 水平还是垂直类型                                                                                | `horizontal` \| `vertical`    | `horizontal` |       |
