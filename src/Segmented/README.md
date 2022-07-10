---
title: 分段控制器 Segmented
order: 4
group:
  title: 数据展示
nav:
  title: 分段控制器 Segmented
  path: /components
---

# 分段控制器 Segmented

分段控制器。自 `antd@4.20.0` 版本开始提供该组件。

## 何时使用

- 用于展示多个选项并允许用户选择其中单个选项；
- 当切换选中选项时，关联区域的内容会发生变化。

## 基本

<code src="./demos/basic.tsx"></code>

## Block 分段选择器

<code src="./demos/block.tsx"></code>

## 不可用

<code src="./demos/disabled.tsx"></code>

## 受控模式

<code src="./demos/controlled.tsx"></code>

## 自定义渲染

<code src="./demos/custom.tsx"></code>

## 动态数据

<code src="./demos/dynamic.tsx"></code>

## 三种大小

<code src="./demos/size.tsx"></code>

## 设置图标

<code src="./demos/with-icon.tsx"></code>

## 只设置图标

<code src="./demos/icon-only.tsx"></code>

## 受控同步模式

<code src="./demos/controlled-two.tsx"></code>

## 统一高度

<code src="./demos/size-consistent.tsx"></code>

## API

> 自 `antd@4.20.0` 版本开始提供该组件。

### Segmented

| 参数         | 说明                         | 类型                                                                                                                      | 默认值 | 版本 |
| ------------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------ | ---- |
| block        | 将宽度调整为父元素宽度的选项 | boolean                                                                                                                   | false  |      |
| defaultValue | 默认选中的值                 | string \| number                                                                                                          |        |      |
| disabled     | 是否禁用                     | boolean                                                                                                                   | false  |      |
| onChange     | 选项变化时的回调函数         | function(value: string \| number)                                                                                         |        |      |
| options      | 数据化配置选项内容           | string\[] \| number\[] \| Array<{ label: ReactNode value: string icon? ReactNode disabled?: boolean className?: string }> | []     |      |
| size         | 控件尺寸                     | `large` \| `middle` \| `small`                                                                                            | -      |      |
| value        | 当前选中的值                 | string \| number                                                                                                          |        |      |