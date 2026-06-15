



RecipeViewerEvents.removeCategories(event => {
	event.remove('minecraft:smithing')
	event.remove('emi:anvil_repairing')
	event.remove('emi:grinding')
})


RecipeViewerEvents.removeRecipes(event => {
    event.remove("emi:/crafting/repairing/minecraft/diamond_shovel");
    event.remove("emi:/crafting/repairing/minecraft/diamond_pickaxe");
    event.remove("emi:/crafting/repairing/minecraft/diamond_axe");
    event.remove("emi:/crafting/repairing/minecraft/diamond_hoe");
    event.remove("emi:/crafting/repairing/minecraft/netherite_shovel");
    event.remove("emi:/crafting/repairing/minecraft/netherite_pickaxe");
    event.remove("emi:/crafting/repairing/minecraft/netherite_axe");
    event.remove("emi:/crafting/repairing/minecraft/netherite_hoe");
    event.remove("emi:/crafting/repairing/minecraft/diamond_helmet");
    event.remove("emi:/crafting/repairing/minecraft/diamond_chestplate");
    event.remove("emi:/crafting/repairing/minecraft/diamond_leggings");
    event.remove("emi:/crafting/repairing/minecraft/diamond_boots");
    event.remove("emi:/crafting/repairing/minecraft/netherite_helmet");
    event.remove("emi:/crafting/repairing/minecraft/netherite_chestplate");
    event.remove("emi:/crafting/repairing/minecraft/netherite_leggings");
    event.remove("emi:/crafting/repairing/minecraft/netherite_boots");
    event.remove("emi:/crafting/repairing/minecraft/diamond_sword");
    event.remove("emi:/crafting/repairing/minecraft/netherite_sword");
    event.remove("emi:/crafting/repairing/spearcore/diamond_spear");
    event.remove("emi:/crafting/repairing/spearcore/netherite_spear");
});

// kubejs/server_scripts/remove_diamond_gear_trades.js

const BLOCKED_ITEMS = [
    "minecraft:diamond_shovel",
    "minecraft:diamond_pickaxe",
    "minecraft:diamond_axe",
    "minecraft:diamond_hoe",
    "minecraft:diamond_helmet",
    "minecraft:diamond_chestplate",
    "minecraft:diamond_leggings",
    "minecraft:diamond_boots",
    "minecraft:diamond_horse_armor",
    "minecraft:diamond_sword",
];

MoreJS.villagerTrades((event) => {
    for (const item of BLOCKED_ITEMS) {
        event.removeTrades({ output: item });
    }
});

const EQUIPMENT_MOBS = new Set([
    'minecraft:zombie',
    'minecraft:skeleton',
    'minecraft:wither_skeleton',
    'minecraft:zombie_villager',
    'minecraft:husk',
    'minecraft:stray',
    'minecraft:drowned',
    'minecraft:piglin',
    'minecraft:piglin_brute',
    'minecraft:zombified_piglin',
    'minecraft:vindicator',
    'minecraft:pillager',
]);

EntityEvents.spawned((event) => {
    const entity = event.entity;
    if (!EQUIPMENT_MOBS.has(entity.type)) return;

    const slots = ['head', 'chest', 'legs', 'feet'];
    for (const slot of slots) {
        const item = entity.getEquipment(slot);
        if (item && item.id.includes('diamond')) {
            entity.setEquipment(slot, Item.of('minecraft:air'));
        }
    }
});


BlockEvents.rightClicked('minecraft:enchanting_table', event => {
    event.cancel()
})

BlockEvents.rightClicked('caverns_and_chasms:atoning_table', event => {
    event.cancel()
})

MoreJS.registerPotionBrewing(event => {
    // Remove all recipes where the output is any night vision variant
    event.removePotionBrewing({
        output: /night_vision/
    })
 
    // Remove all recipes where the input is any night vision variant
    // (e.g. night_vision -> long_night_vision upgrade brews)
    event.removePotionBrewing({
        input: /night_vision/
    })
})
