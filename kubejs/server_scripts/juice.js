// 机械动力 & 农夫乐事、农夫暇事液体兼容 
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

    // 制作热可可
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": "milk:still_milk", 
                "amount": 27000 
            },
            {
                "item": "minecraft:cocoa_beans"
            },
            {
                "item": "minecraft:sugar"
            }
        ],
        "results": [
            {
                "fluid": "create:hot_cocoa_liq",
                "amount": 27000
            }
        ],
        "heatRequirement": "heated"
    });

    // 制作西瓜汁
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 27000
            },
            {
                "item": "minecraft:melon_slice"
            },
            {
                "item": "minecraft:sugar"
            }
        ],
        "results": [
            {
                "fluid": "create:melon_juice_liq",
                "amount": 27000
            }
        ],
        "heatRequirement": "heated"
    });

    // 制作苹果酒
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 27000
            },
            {
                "item": "minecraft:apple"
            },
            {
                "item": "minecraft:sugar"
            }
        ],
        "results": [
            {
                "fluid": "create:apple_cider_liq",
                "amount": 27000
            }
        ],
        "heatRequirement": "heated"
    });

    // 西瓜汁 升级-> 西瓜汁+
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": "create:melon_juice_liq",
                "amount": 27000
            },
            {
                "fluid": "create:honey", 
                "amount": 27000 
            }
        ],
        "results": [
            {
                "fluid": "create:melon_juice_plus_liq",
                "amount": 27000
            }
        ],
        "heatRequirement": "heated"
    });

    // 苹果酒 升级-> 苹果奶酒
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": "create:apple_cider_liq",
                "amount": 27000
            },
            {
                "fluid": "milk:still_milk", 
                "amount": 27000 
            }
        ],
        "results": [
            {
                "fluid": "create:apple_milk_cider_liq",
                "amount": 27000
            }
        ],
        "heatRequirement": "heated"
    });

    // 苹果酒 升级-> 苹果甜酒
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": "create:apple_cider_liq",
                "amount": 27000
            },
            {
                "fluid": "create:honey", 
                "amount": 27000 
            }
        ],
        "results": [
            {
                "fluid": "create:apple_sweet_cider_liq",
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
    // 热可可液液灌装成热可可
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:glass_bottle"
            },
            {
                "fluid": "create:hot_cocoa_liq",
                "amount": 27000
            }
        ],
        "results": [
            {
                "item": "farmersdelight:hot_cocoa"
            }
        ]
    });

    // 西瓜汁液灌装成西瓜汁
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:glass_bottle"
            },
            {
                "fluid": "create:melon_juice_liq",
                "amount": 27000
            }
        ],
        "results": [
            {
                "item": "farmersdelight:melon_juice"
            }
        ]
    });

    // 西瓜汁+液灌装成西瓜汁+
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:glass_bottle"
            },
            {
                "fluid": "create:melon_juice_plus_liq",
                "amount": 27000
            }
        ],
        "results": [
            {
                "item": "farmersrespite:strong_melon_juice"
            }
        ]
    });

    // 苹果酒液灌装成苹果酒
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:glass_bottle"
            },
            {
                "fluid": "create:apple_cider_liq",
                "amount": 27000
            }
        ],
        "results": [
            {
                "item": "farmersdelight:apple_cider"
            }
        ]
    });

    // 苹果奶酒液灌装成苹果奶酒
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:glass_bottle"
            },
            {
                "fluid": "create:apple_milk_cider_liq",
                "amount": 27000
            }
        ],
        "results": [
            {
                "item": "farmersrespite:long_apple_cider"
            }
        ]
    });

    // 苹果奶酒液灌装成苹果奶酒
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:glass_bottle"
            },
            {
                "fluid": "create:apple_sweet_cider_liq",
                "amount": 27000
            }
        ],
        "results": [
            {
                "item": "farmersrespite:strong_apple_cider"
            }
        ]
    });

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
    // 热可可 - 分液池存储
    event.custom({
        "type": "create:emptying",
        "ingredients": [
            {
                "item": "farmersdelight:hot_cocoa"
            }
        ],
        "results": [
            {
                "fluid": "create:hot_cocoa_liq",
                "amount": 27000
            },
            {
                "item": "minecraft:glass_bottle"
            }
        ]
    });

    // 西瓜汁 - 分液池存储
    event.custom({
        "type": "create:emptying",
        "ingredients": [
            {
                "item": "farmersdelight:melon_juice"
            }
        ],
        "results": [
            {
                "fluid": "create:melon_juice_liq",
                "amount": 27000
            },
            {
                "item": "minecraft:glass_bottle"
            }
        ]
    });

    // 西瓜汁+ - 分液池存储
    event.custom({
        "type": "create:emptying",
        "ingredients": [
            {
                "item": "farmersrespite:strong_melon_juice"
            }
        ],
        "results": [
            {
                "fluid": "create:melon_juice_plus_liq",
                "amount": 27000
            },
            {
                "item": "minecraft:glass_bottle"
            }
        ]
    });

    // 苹果酒 - 分液池存储
    event.custom({
        "type": "create:emptying",
        "ingredients": [
            {
                "item": "farmersdelight:apple_cider"
            }
        ],
        "results": [
            {
                "fluid": "create:apple_cider_liq",
                "amount": 27000
            },
            {
                "item": "minecraft:glass_bottle"
            }
        ]
    });

    // 苹果奶酒 - 分液池存储
    event.custom({
        "type": "create:emptying",
        "ingredients": [
            {
                "item": "farmersrespite:long_apple_cider"
            }
        ],
        "results": [
            {
                "fluid": "create:apple_milk_cider_liq",
                "amount": 27000
            },
            {
                "item": "minecraft:glass_bottle"
            }
        ]
    });

    // 甜苹果酒 - 分液池存储
    event.custom({
        "type": "create:emptying",
        "ingredients": [
            {
                "item": "farmersrespite:strong_apple_cider"
            }
        ],
        "results": [
            {
                "fluid": "create:apple_sweet_cider_liq",
                "amount": 27000
            },
            {
                "item": "minecraft:glass_bottle"
            }
        ]
    });
    
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

