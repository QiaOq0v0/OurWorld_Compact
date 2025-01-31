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
});
