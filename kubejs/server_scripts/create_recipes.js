ServerEvents.recipes(event => {
    // 配方 1：咖啡液混合搅拌
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 27000
            },
            {
                "item": "farmersrespite:coffee_beans"
            },
            {
                "item": "farmersrespite:coffee_beans"
            }
        ],
        "results": [
            {
                "fluid": "create:coffee_liq",
                "amount": 27000
            }
        ],
        "heatRequirement": "heated"
    });

    // 配方 2：咖啡液灌装成 Farmer's Respite 咖啡
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:glass_bottle"
            },
            {
                "fluid": "create:coffee_liq",
                "amount": 27000
            }
        ],
        "results": [
            {
                "item": "farmersrespite:coffee"
            }
        ]
    });
    // 配方 3：分液池 - 将 Farmer's Respite 咖啡转换为咖啡液
    event.custom({
        "type": "create:emptying", // 配方类型为分液池 (Emptying)
        "ingredients": [
            {
                "item": "farmersrespite:coffee" // 输入：Farmer's Respite 的咖啡
            }
        ],
        "results": [
            {
                "fluid": "create:coffee_liq", // 输出流体：咖啡液
                "amount": 27000 // 输出流体数量：27000（Fabric 单位）
            },
            {
                "item": "minecraft:glass_bottle" // 掉落物品：玻璃瓶
            }
        ]
    });

});

