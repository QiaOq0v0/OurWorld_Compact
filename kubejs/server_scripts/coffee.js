// 机械动力 & 农夫暇事兼容 咖啡、咖啡豆
ServerEvents.recipes(event => {
    // 配方 加热搅拌
    // 制作ORI咖啡液
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

    // ORI咖啡液 升级-> LONG咖啡液
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": "create:coffee_liq",
                "amount": 27000
            },
            {
                "fluid": "milk:still_milk", 
                "amount": 27000 
            }
        ],
        "results": [
            {
                "fluid": "create:long_coffee_liq",
                "amount": 27000
            }
        ],
        "heatRequirement": "heated"
    });

    // LONG咖啡液 升级-> STRONG咖啡液
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": "create:long_coffee_liq",
                "amount": 27000
            },
            {
                "fluid": "create:honey", 
                "amount": 27000 
            }
        ],
        "results": [
            {
                "fluid": "create:strong_coffee_liq",
                "amount": 27000
            }
        ],
        "heatRequirement": "heated"
    });

    // 注液器灌装
    // ORI咖啡液灌装成ORI咖啡
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

    // LONG咖啡液灌装成LONG咖啡
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:glass_bottle"
            },
            {
                "fluid": "create:long_coffee_liq",
                "amount": 27000
            }
        ],
        "results": [
            {
                "item": "farmersrespite:long_coffee"
            }
        ]
    });

    // STRONG咖啡液灌装成STRONG咖啡
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:glass_bottle"
            },
            {
                "fluid": "create:strong_coffee_liq",
                "amount": 27000
            }
        ],
        "results": [
            {
                "item": "farmersrespite:strong_coffee"
            }
        ]
    });

    // 分液池存储
    // ORI
    event.custom({
        "type": "create:emptying", 
        "ingredients": [
            {
                "item": "farmersrespite:coffee" 
            }
        ],
        "results": [
            {
                "fluid": "create:coffee_liq", 
                "amount": 27000 
            },
            {
                "item": "minecraft:glass_bottle" 
            }
        ]
    });

    // LONG
    event.custom({
        "type": "create:emptying", 
        "ingredients": [
            {
                "item": "farmersrespite:long_coffee" 
            }
        ],
        "results": [
            {
                "fluid": "create:long_coffee_liq", 
                "amount": 27000 
            },
            {
                "item": "minecraft:glass_bottle" 
            }
        ]
    });

    // STRONG
    event.custom({
        "type": "create:emptying", 
        "ingredients": [
            {
                "item": "farmersrespite:strong_coffee" 
            }
        ],
        "results": [
            {
                "fluid": "create:strong_coffee_liq", 
                "amount": 27000 
            },
            {
                "item": "minecraft:glass_bottle" 
            }
        ]
    });

});

