RecipeViewerEvents.removeCategories(event => {
    console.log(event.categoryIds)
	event.remove('minecraft:smithing')
	event.remove('emi:anvil_repairing')
	event.remove('emi:grinding')
    event.remove('minecraft:anvil')
})


// ─────────────────────────────────────────────
//  CONFIG — add any item IDs you want hidden
// ─────────────────────────────────────────────
const REMOVED_ITEMS = [
 'minecraft:diamond_shovel',
 'minecraft:diamond_pickaxe',
 'minecraft:diamond_axe',
 'minecraft:diamond_hoe',
 'minecraft:netherite_shovel',
 'minecraft:netherite_pickaxe',
 'minecraft:netherite_axe',
 'minecraft:netherite_hoe',
 'minecraft:diamond_helmet',
 'minecraft:diamond_chestplate',
 'minecraft:diamond_leggings',
 'minecraft:diamond_boots',
 'minecraft:netherite_helmet',
 'minecraft:netherite_chestplate',
 'minecraft:netherite_leggings',
 'minecraft:netherite_boots',
 'minecraft:diamond_horse_armor',
 'minecraft:diamond_sword',
 'minecraft:netherite_sword',
 'spearcore:diamond_spear', 
 'spearcore:netherite_spear'
];

ItemEvents.modifyTooltips(event => {
    for (const item of REMOVED_ITEMS) {
        event.modify(item, tooltip => {
            // Repeatedly remove line index 1 (everything after the item name)
            for (let i = 0; i < 20; i++) {
                tooltip.removeLine(1);
            }
        });
    }
});

// ─────────────────────────────────────────────
//  2. Add an info page to each removed item
//     saying "This item no longer exists."
//     (visible if the player looks it up
//      directly, e.g. via /emi or a command)
// ─────────────────────────────────────────────
RecipeViewerEvents.addInformation('item', event => {
  for (const id of REMOVED_ITEMS) {
    event.add(id, [
      'This item no longer exists.'
    ]);
  }
});

// kubejs/client_scripts/hide_emi_entries.js

RecipeViewerEvents.removeEntries('item', event => {
    [
        'cdmoveset:katana',
        'cdmoveset:yamato',
        'cdmoveset:s_wooden_spear',
        'cdmoveset:s_stone_spear',
        'cdmoveset:s_iron_spear',
        'cdmoveset:s_golden_spear',
        'cdmoveset:s_wooden_tachi',
        'cdmoveset:s_stone_tachi',
        'cdmoveset:s_iron_tachi',
        'cdmoveset:s_golden_tachi',
        'cdmoveset:s_wooden_sword',
        'cdmoveset:s_stone_sword',
        'cdmoveset:s_iron_sword',
        'cdmoveset:s_golden_sword',
        'cdmoveset:s_wooden_longsword',
        'cdmoveset:s_stone_longsword',
        'cdmoveset:s_iron_longsword',
        'cdmoveset:s_golden_longsword',
        'cdmoveset:s_wooden_greatsword',
        'cdmoveset:s_stone_greatsword',
        'cdmoveset:s_iron_greatsword',
        'cdmoveset:s_golden_greatsword',
        'cdmoveset:great_tachi',
        'cdmoveset:phantom_katana',
    ].forEach(item => event.remove(item));
});

ClientEvents.loggedIn(event => {
    console.log('=== ALL KEYBIND NAMES ===')
    console.log(KeyBindUtil.getAllKeyName())

    console.log('=== ALL KEYBIND CATEGORIES ===')
    console.log(KeyBindUtil.getAllKeyCategory())
})

const BLIND_TEXT = 'You are blind. You are blind. You are blind. You are blind. You are blind. You are blind. You are blind. You are blind.'
const POTION_TYPES = [
    'minecraft:potion',
    'minecraft:splash_potion',
    'minecraft:lingering_potion',
    'minecraft:tipped_arrow'
]
const NIGHT_VISION_VARIANTS = [
    'minecraft:night_vision',
    'minecraft:long_night_vision'
]
 
for (const potionType of POTION_TYPES) {
    for (const variant of NIGHT_VISION_VARIANTS) {
        RecipeViewerEvents.addInformation('minecraft:brewing', `${potionType}{Potion:"${variant}"}`, event => {
            event.addInformation(Component.literal(BLIND_TEXT))
        })
    }
}