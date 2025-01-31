# OurWorld_Compact
FUFU自制兼容mod

## 📌 mod简介
这是一个通过kubejs实现的、为各种添加至Ourworld中的成品mod制作的兼容模组。其中包括已存在的mod之间配方的扩展，物品与机器交互的适配，以及一些新发明出来的配方（也许）。

## 🔧 安装与使用
### 1️⃣ **安装**
必须使用当前最新的OurWorld整合包。整合包版本为1.19.2，Fabric，必须安装kubejs1.19.2以及其依赖mod。
### 2️⃣ **使用**
安装好环境后启动游戏，会在路径中生成一个新的kubejs文件夹，路径为...PCL\.minecraft\versions\xxx1.19.2\kubejs（若有版本隔离），直接下载文件后更新kubejs中的文件即可。

# 📝 更新日志

所有的更改都记录在此文件中。

---

## 2025-01-25
### Create（机械动力）与 Farmersrespite（农夫暇事）中【咖啡】【咖啡豆】的兼容
- 新增流体：【Coffee Liquid】【Coffee Liquid Bucket】，可入水桶一样放置，不可无限
- Coffee Liquid 可以使用 Create 中的流体储罐等管道实现运输与存储
- 新增 Create 中【动力搅拌机】的配方：2*咖啡豆 + 333ml水 = 333ml Coffee Liquid（烈焰人燃烧室普通加热条件）
- 新增 Farmersrespite 中【咖啡】的配方：注液器 333ml Coffee Liquid + 1*玻璃瓶 = 1*咖啡
