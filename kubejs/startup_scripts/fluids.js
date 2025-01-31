StartupEvents.registry('fluid', event => {
    event.create('create:coffee_liq') // 流体ID
        .thinTexture(0x412811) // 颜色 (深棕色，0xRRGGBB)
        .bucketColor(0x412811) // 桶的颜色
        .displayName('Coffee Liquid') // 游戏内名称
        .stillTexture('minecraft:block/water_still') // 使用 Minecraft 的水静态纹理
        .flowingTexture('minecraft:block/water_flow') // 使用 Minecraft 的水流动纹理
        .luminosity(0) // 亮度一般（无发光）
        .viscosity(750) // 粘度较低（流动更快）
        .density(750) // 密度中等
})