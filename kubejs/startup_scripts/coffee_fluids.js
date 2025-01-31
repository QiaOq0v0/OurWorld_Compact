StartupEvents.registry('fluid', event => {
    event.create('create:coffee_liq') 
        .thinTexture(0x4e3012) // 颜色
        .displayName('Coffee Americano Liquid') // 游戏内名称
        .stillTexture('minecraft:block/water_still') 
        .flowingTexture('minecraft:block/water_flow') 
        .luminosity(0) // 亮度
        .viscosity(600) // 粘度
        .density(600) // 密度
        .noBucket();

    event.create('create:long_coffee_liq') 
        .thinTexture(0x412811) 
        .displayName('Coffee Latte Liquid') 
        .stillTexture('minecraft:block/water_still') 
        .flowingTexture('minecraft:block/water_flow')
        .luminosity(0) 
        .viscosity(750) 
        .density(750) 
        .noBucket();

    event.create('create:strong_coffee_liq') 
        .thinTexture(0x38200b) 
        .displayName('Coffee Mocha Liquid') 
        .stillTexture('minecraft:block/water_still') 
        .flowingTexture('minecraft:block/water_flow')
        .luminosity(0) 
        .viscosity(900) 
        .density(900) 
        .noBucket();
})
