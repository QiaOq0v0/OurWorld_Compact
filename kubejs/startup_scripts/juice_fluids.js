StartupEvents.registry('fluid', event => {
    // ori coffee liquid = Coffee Americano Liquid 美式咖啡
    event.create('create:coffee_liq') 
        .thinTexture(0x4e3012) // 颜色
        .displayName('Coffee Americano Liquid') // 游戏内名称
        .stillTexture('minecraft:block/water_still') 
        .flowingTexture('minecraft:block/water_flow') 
        .luminosity(0) // 亮度
        .viscosity(600) // 粘度
        .density(600) // 密度
        .noBucket();

    // long coffee liquid = Coffee Latte Liquid 拿铁咖啡
    event.create('create:long_coffee_liq') 
        .thinTexture(0x412811) 
        .displayName('Coffee Latte Liquid') 
        .stillTexture('minecraft:block/water_still') 
        .flowingTexture('minecraft:block/water_flow')
        .luminosity(0) 
        .viscosity(750) 
        .density(750) 
        .noBucket();

    // strong coffee liq = Coffee Mocha Liquid 摩卡咖啡
    event.create('create:strong_coffee_liq') 
        .thinTexture(0x38200b) 
        .displayName('Coffee Mocha Liquid') 
        .stillTexture('minecraft:block/water_still') 
        .flowingTexture('minecraft:block/water_flow')
        .luminosity(0) 
        .viscosity(900) 
        .density(900) 
        .noBucket();

    // hot_cocoa_liq = Hot Cocoa Liquid 热可可
    event.create('create:hot_cocoa_liq') 
        .thinTexture(0x6f3706) 
        .displayName('Hot Cocoa Liquid') 
        .stillTexture('minecraft:block/water_still') 
        .flowingTexture('minecraft:block/water_flow')
        .luminosity(0) 
        .viscosity(3500) 
        .density(1200) 
        .noBucket();

    // melon_juice_liq = Melon Juice Liquid 西瓜汁
    event.create('create:melon_juice_liq') 
        .thinTexture(0xff3f2e) 
        .displayName('Melon Juice Liquid') 
        .stillTexture('minecraft:block/water_still') 
        .flowingTexture('minecraft:block/water_flow')
        .luminosity(0) 
        .viscosity(1500) 
        .density(1000) 
        .noBucket();

    // melon_juice_plus_liq = Melon Juice Plus Liquid 西瓜汁+
    event.create('create:melon_juice_plus_liq') 
        .thinTexture(0xff1a05) 
        .displayName('Melon Juice Plus Liquid') 
        .stillTexture('minecraft:block/water_still') 
        .flowingTexture('minecraft:block/water_flow')
        .luminosity(0) 
        .viscosity(1500) 
        .density(1000) 
        .noBucket();

    // apple_cider_liq = Apple Cider Liquid 苹果酒
    event.create('create:apple_cider_liq') 
        .thinTexture(0xed7021) 
        .displayName('Apple Cider Liquid') 
        .stillTexture('minecraft:block/water_still') 
        .flowingTexture('minecraft:block/water_flow')
        .luminosity(0) 
        .viscosity(1500) 
        .density(1000) 
        .noBucket();

    // apple_milk_cider_liq = Apple Milk Cider Liquid 苹果奶酒
    event.create('create:apple_milk_cider_liq') 
        .thinTexture(0xef8c4d) 
        .displayName('Apple Milk Cider Liquid') 
        .stillTexture('minecraft:block/water_still') 
        .flowingTexture('minecraft:block/water_flow')
        .luminosity(0) 
        .viscosity(1500) 
        .density(1000) 
        .noBucket();

    // apple_sweet_cider_liq = Apple Sweet Cider Liquid 苹果甜酒
    event.create('create:apple_sweet_cider_liq') 
        .thinTexture(0xea6410) 
        .displayName('Apple Sweet Cider Liquid') 
        .stillTexture('minecraft:block/water_still') 
        .flowingTexture('minecraft:block/water_flow')
        .luminosity(0) 
        .viscosity(1500) 
        .density(1000) 
        .noBucket();
})
