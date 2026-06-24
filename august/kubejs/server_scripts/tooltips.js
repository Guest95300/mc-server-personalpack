const CUSTOM_TOOLTIP_ITEMS = [
    'redomesticate:rotten_apple',
    'redomesticate:sinister_carrot',
    'redomesticate:deed_of_ownership',
    'redomesticate:wayward_lantern',
    'redomesticate:drum',
    '#redomesticate:pet_beds'
];

ItemEvents.modifyTooltips(event => {
    // Existing redomesticate items (non-shift)
    for (const item of CUSTOM_TOOLTIP_ITEMS) {
        event.modify(item, { shift: false }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.gray("Shift"),
                Text.darkGray("] for Item information")
            ]))
        })
    }

    // Existing redomesticate items (shift variants)
    event.modify('redomesticate:rotten_apple', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Chance to form if an apple item despawns on the ground."),
            Text.green("- Fed to a horse in order to turn it into a zombie horse.")
        ])
    })

    event.modify('redomesticate:sinister_carrot', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Rarely found as loot in Woodland Mansions"),
            Text.green("- Fed to a zombie horse in order to turn it into a skeleton horse.")
        ])
    })

    event.modify('redomesticate:deed_of_ownership', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Purchased from the Animal Tamer villager."),
            Text.green("- Right click on your tamed pet to bind it to the deed."),
            Text.green("- Give the bounded deed to another player to transfer ownership of the pet.")
        ])
    })

    event.modify('redomesticate:wayward_lantern', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.yellow("- Can be used as decoration."),
            Text.green("- Pets in 'follow' mode that are within unloaded chunks find their way to the nearest Wayward lantern."),
            Text.green("- That means you can no longer lose pets on death thousands of blocks away.")
        ])
    })

    event.modify('redomesticate:drum', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Order all tamed mobs to follow, stay or wander depending on the beat."),
            Text.green("- Can be used with redstone, commanding tamed mobs of the original placer.")
        ])
    })

    event.modify('#redomesticate:pet_beds', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Move one of your tamed mobs to a pet bed to bind its respawn point."),
            Text.green("- Respawn point is set when either ZZZ particles appear or when the pet bed location appears when looked at."),
            Text.green("- Mobs respawn at dawn.")
        ])
    })

    // ========== NEW BLOCKS ==========
    // Replace 'supplementaries:' with your actual mod ID (e.g., 'redomesticate:')

    // Globe
    event.modify('supplementaries:globe', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:globe', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Rare item found in shipwrecks or sold by wandering trader."),
            Text.green("- Displays randomly generated blocky world unique to your seed."),
            Text.green("- Interact to spin and display current world coordinates."),
            Text.green("- Each spin rotates by one face."),
            Text.green("- Spins when powered by redstone."),
            Text.green("- Comparator output depends on current face (useful for activation mechanisms).")
        ])
    })

    // Hourglass
    event.modify('supplementaries:hourglass', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:hourglass', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can be filled with any kind of sand, dust or powder or even slime and honey."),
            Text.green("- Once filled the dust will slowly start falling downward with a time that depends on the material used"),
            Text.green("- Can give a comparator output that depends on the remaining time. Useful for timed mechanisms"),
            Text.green("- Can be reset by either rotating twice with a turn table or by shift clicking")
        ])
    })

    // Pulley Block
    event.modify('supplementaries:pulley_block', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:pulley_block', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Has a single inventory slot which can accept any chain or rope like block."),
            Text.green("- When a turn table rotates the block (providing it's connected to the right axis) it will start deploying or retracting the items it's holding in its inventory, depending if it's getting rotated clock-wise or counter clock-wise."),
            Text.green("- When rotated it will also rotate all the pulleys adjacent to it that are facing the same axis"),
            Text.green("- Can be chained together. This means that all chains and ropes being pulled/pushed by a pulley will have the chance to be accepted by a receiving pulley.")
        ])
    })

    // Turn Table
    event.modify('supplementaries:turn_table', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:turn_table', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can change the orientation of the block that it's facing"),
            Text.green("- Can shuffle inventory content when rotating any inventory block over the horizontal axis."),
            Text.green("- Also constantly rotates entities that are standing on it (only works when facing upwards).")
        ])
    })

    // Relayer
    event.modify('supplementaries:relayer', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:relayer', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Observer like block whose purpose is to copy whatever signal it has in front to its back"),
            Text.green("- Useful to reliably transmit analog power without dispersion"),
            Text.green("- Useful to power an array of Crystal Displays or other similar blocks as multiple relayer chains can be stacked next to eachother without interfering")
        ])
    })

    // Cog Block
    event.modify('supplementaries:cog_block', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:cog_block', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Acts as a form of upgraded redstone in solid block form."),
            Text.green("- Pretty intuitive to use, you just power one and it will power its adjacent cogs, up to 14 blocks away, just like with redstone dust. "),
            Text.green("- The real use for this is to be able to make compact vertical redstone signaling.")
        ])
    })

    // Speaker Block
    event.modify('supplementaries:speaker_block', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:speaker_block', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can send a message in chat to all players in a certain radius when activated by redstone."),
            Text.green("- Alternatively it also provides a \"narrator mode\" which will send the message via the game narrator instead."),
            Text.green("- Can be renamed in an anvil to change the name that will be displayed in chat. Rename it \"\" to get rid of it completely.")
        ])
    })

    // Spring Launcher
    event.modify('supplementaries:spring_launcher', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:spring_launcher', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- When activated it extends like a piston and will propel any entities that lie ontop of it in the direction it's moving, twice as far as the vanilla piston-slime block setup."),
            Text.green("- Additionally, it can also push you up if you were to fall on it from a certain height when it's already extended. Try it out, it's really fun!")
        ])
    })

    // Cannon
    event.modify('supplementaries:cannon', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:cannon', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Shoots any item. Blocks get placed, projectile items shot as entities."),
            Text.green("- Shooting power depends on selected gunpowder level."),
            Text.green("- Place on any side of a block."),
            Text.green("- Activate with flint & steel, gunpowder trail, or redstone."),
            Text.green("- Each gunpowder level requires and consumes 1 gunpowder."),
            Text.green("- Shift-click or click maneuver button to enter maneuver mode."),
            Text.green("- Rotate mouse to aim precisely. Shows trajectory & landing point."),
            Text.green("- Scroll wheel to increase power level."),
            Text.green("- 3 aiming modes: parabolic 1, parabolic 2, manual aim (Space Bar to switch)."),
            Text.green("- Left Click to fire, Right Click to hide trajectory."),
            Text.green("- Exit with E, Shift, or Esc."),
            Text.green("- Can be rotated smoothly with a Turn Table.")
        ])
    })

    // Cannonball
    event.modify('supplementaries:cannonball', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:cannonball', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Cannon-specific projectile."),
            Text.green("- Breaks blocks it touches based on kinetic energy."),
            Text.green("- Each broken block subtracts energy proportional to block hardness."),
            Text.green("- Can bounce off ground when shot from steep angle."),
            Text.green("- Transfers energy to entities based on their mass (hitbox)."),
            Text.green("- Cannonballs can bounce off each other!")
        ])
    })

    // Candle Holders
    event.modify('#supplementaries:candle_holders', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('#supplementaries:candle_holders', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can be placed on walls, floors, and ceilings."),
            Text.green("- Stack up to 4 to create candelabras and chandeliers."),
            Text.green("- Gives off more light than candles."),
            Text.green("- Can be lit/extinguished with fire charges, flaming arrows, gunpowder, shovels, etc."),
            Text.green("- Comes in 17 colors.")
        ])
    })

    // Awning
    event.modify('#supplementaries:awnings', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('#supplementaries:awnings', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Click with empty hand to tilt."),
            Text.green("- Shift while on awning makes you fall through."),
            Text.green("- Bounces you off when falling on it (angle matters!)."),
            Text.green("- Can be placed on supporting blocks or against themselves."),
            Text.green("- Place on upper or lower part of a block.")
        ])
    })

    // Pedestal
    event.modify('supplementaries:pedestal', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:pedestal', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Stack vertically to visually connect."),
            Text.green("- Place one item on top."),
            Text.green("- Special visuals for swords, tools, tridents, and globes."),
            Text.green("- Removing item triggers observer update (great for traps!)."),
            Text.green("- Swapping with a sack prevents the update."),
            Text.green("- Horizontal banner that swings in the wind."),
            Text.green("- Fancy animation with fabulous graphics."),
            Text.green("- Unique pattern textures — craft from existing banners."),
            Text.green("- Comes in all colors."),
            Text.green("- Raise/lower when placed on a stick pole.")
        ])
    })

    // Bunting
    event.modify('#supplementaries:buntings', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('#supplementaries:buntings', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can be placed on ropes, walls, and ceilings."),
            Text.green("- Comes in all colors."),
            Text.green("- Swings in the wind.")
        ])
    })

    // Present
    event.modify('supplementaries:present', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:present', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Container block holding 1 item stack."),
            Text.green("- GUI lets you choose recipient and write a description."),
            Text.green("- Once packed, only you and recipient can open it."),
            Text.green("- Comes in 16 + 1 colors.")
        ])
    })

    // slidy Block
    event.modify('supplementaries:slidy_block', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:slidy_block', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Push with right click."),
            Text.green("- On ice: keeps moving."),
            Text.green("- On soap: changes direction randomly.")
        ])
    })

    // Ash
    event.modify('supplementaries:ash', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:ash', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Burning blocks may create ash layers (amount depends on flammability)."),
            Text.green("- Affected by gravity, can pile up."),
            Text.green("- Harvest with shovel — used to craft soap."),
            Text.green("- Drops from burning mobs."),
            Text.green("- Found in basalt deltas."),
            Text.green("- Rain slowly washes away ash layers.")
        ])
    })

    // Soap Block
    event.modify('supplementaries:soap_block', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:soap_block', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Makes entities \"slip\" when walking on it."),
            Text.green("- Place next to wet sponge + bellows to emit bubble particles.")
        ])
    })

    // Sugar Cube
    event.modify('supplementaries:sugar_cube', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:sugar_cube', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Dissolves into particles when touching water."),
            Text.green("- Dissolves in rain.")
        ])
    })

    // Lunch box
    event.modify('supplementaries:lunch_basket', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:lunch_basket', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Holds up to 9 stacks of food."),
            Text.green("- Right-click to open/close."),
            Text.green("- Eat food directly from open lunch box."),
            Text.green("- Left-click to switch selected food (must be closed)."),
            Text.green("- Shift-click to place down as a block.")
        ])
    })

    // Gravel Bricks
    event.modify('supplementaries:gravel_bricks', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:gravel_bricks', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Breaks when jumped or fallen on."),
            Text.green("- Can be made into Suspicious variant holding any item.")
        ])
    })

    // Notice Board
    event.modify('supplementaries:notice_board', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:notice_board', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Displays a written book, map, or banner pattern."),
            Text.green("- Books show one page at a time."),
            Text.green("- Text resolution depends on page text amount (add whitespace to make smaller)."),
            Text.green("- Redstone pulse turns to next page."),
            Text.green("- Can be waxed to prevent interactions.")
        ])
    })

    // Fodder
    event.modify('supplementaries:fodder', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:fodder', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Layered block that automatically feeds animals."),
            Text.green("- Hungry animals eat one layer (controlled by tag)."),
            Text.green("- Makes babies age faster, puts adults in love mode."),
            Text.green("- Place down with dispensers."),
            Text.green("- Hoe removes/destroys one layer.")
        ])
    })

    // Bamboo Spikes
    event.modify('#supplementaries:bamboo_spikes', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('#supplementaries:bamboo_spikes', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Slows and damages mobs walking on them."),
            Text.green("- With Quark/Create: pushable with pistons/contraptions — extra damage when extending."),
            Text.green("- Infuse with lingering potions (craft, click, or faucet pour).")
        ])
    })

    // Hat Stand
    event.modify('supplementaries:hat_stand', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:hat_stand', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Like an armor stand, but just the head."),
            Text.green("- Shift-click with empty hand to wobble it.")
        ])
    })

    // Lumisene Liquid
    event.modify('supplementaries:lumisene_bucket', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:lumisene_bucket', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Finite liquid — up to 16 layers per block."),
            Text.green("- Spreads evenly as thin as possible."),
            Text.green("- Bucket deploys/scoops exactly 16 connected layers."),
            Text.green("- Unique light properties & iridescent animated texture."),
            Text.green("- Can be lit on fire — spreads instantly to all connected blocks."),
            Text.green("- Stepping on applies Flammable effect for a few seconds."),
            Text.green("- Drinking from bottle gives Glowing + Flammable effects."),
            Text.green("- Flammable effect: extends on-fire duration, spreads fire while walking."),
            Text.green("- Floats on water.")
        ])
    })

    // Lumisene Liquid bottle
    event.modify('supplementaries:lumisene_bottle', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:lumisene_bottle', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Finite liquid — up to 16 layers per block."),
            Text.green("- Spreads evenly as thin as possible."),
            Text.green("- Bucket deploys/scoops exactly 16 connected layers."),
            Text.green("- Unique light properties & iridescent animated texture."),
            Text.green("- Can be lit on fire — spreads instantly to all connected blocks."),
            Text.green("- Stepping on applies Flammable effect for a few seconds."),
            Text.green("- Drinking from bottle gives Glowing + Flammable effects."),
            Text.green("- Flammable effect: extends on-fire duration, spreads fire while walking."),
            Text.green("- Floats on water.")
        ])
    })

    // Planter
    event.modify('supplementaries:planter', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:planter', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Supports any plant/crop without water (great for Nether farms)."),
            Text.green("- Prevents crop trampling.")
        ])
    })

    // Blackboard
    event.modify('supplementaries:blackboard', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:blackboard', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Draw black & white patterns (MS Paint in Minecraft!)."),
            Text.green("- Edit without GUI by holding dye."),
            Text.green("- Drawing persists when broken."),
            Text.green("- Preview drawing in item tooltip."),
            Text.green("- Duplicate like banners."),
            Text.green("- Clear with wet sponge or soap."),
            Text.green("- Wax to prevent interactions."),
            Text.green("- Accepts glow ink."),
            Text.green("- Colored blackboards can be enabled in configs.")
        ])
    })

    // Framed Blocks (Braces, Cross Braces, Frames)
    event.modify('#supplementaries:timber_frames', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('#supplementaries:timber_frames', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- 3 shapes: Braces, Cross Braces, and Frames."),
            Text.green("- Click with any solid block to place it inside the frame."),
            Text.green("- Axe breaks the frame but not the contained block.")
        ])
    })

    // Daub and Wattle & Daub
    event.modify('supplementaries:daub', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:daub', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Medieval-themed decorative block."),
            Text.green("- Place Daub inside a Framed Block to convert to Wattle & Daub.")
        ])
    })

    // Safe
    event.modify('supplementaries:safe', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:safe', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Lock with a key — content only accessible to key holders."),
            Text.green("- Shift-click with key or tripwire hook to unlock/clear ownership."),
            Text.green("- Config option: indestructible unless holding correct key.")
        ])
    })

    // Netherite Doors & Trapdoors
    event.modify('supplementaries:netherite_door', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:netherite_door', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can be locked with keys — only key owner can interact."),
            Text.green("- Accessible to everyone until first locked.")
        ])
    })

    // Gold Doors & Trapdoors
    event.modify('supplementaries:gold_door', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:gold_door', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- When powered by redstone, disables ALL player interaction."),
            Text.green("- Powered door cannot be opened or closed regardless of state.")
        ])
    })

    // Iron Gates
    event.modify('supplementaries:iron_gate', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:iron_gate', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Decorative upgraded fence gate."),
            Text.green("- Visually connects with gates placed above/below.")
        ])
    })

    // Gold Gates
    event.modify('supplementaries:gold_gate', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:gold_gate', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Decorative upgraded fence gate."),
            Text.green("- Visually connects with gates placed above/below.")
        ])
    })

    // Ropes
    event.modify('supplementaries:rope', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:rope', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Place against ceilings, fences, walls, or existing ropes."),
            Text.green("- Breakable by projectiles."),
            Text.green("- Shearing removes bottom connection."),
            Text.green("- Place against vertical rope to extend downward, pushing attached blocks."),
            Text.green("- Shift-click with empty hand pulls up last attached block (great for wells!)."),
            Text.green("- Dynamically wraps around fences, walls, beams, and posts."),
            Text.green("- Falling prevents fall damage (cool sound plays)."),
            Text.green("- Burns very fast (like gunpowder)."),
            Text.green("- Supports Buntings.")
        ])
    })

    // Flint Block
    event.modify('supplementaries:flint_block', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:flint_block', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Decorative and storage block for extra flint."),
            Text.green("- Piston pushes it against iron-like block to produce sparks."),
            Text.green("- Nearby flammable blocks catch fire — durationless flint & steel!"),
            Text.green("- Works in reverse (move iron against flint)."),
            Text.green("- Works with Quark magnets."),
            Text.green("- Stepping with iron boots also sets things on fire.")
        ])
    })

    // Feather Block
    event.modify('supplementaries:feather_block', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:feather_block', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Extremely fluffy!"),
            Text.green("- Fall or step on it: emits feather particles."),
            Text.green("- Slowly fall into it, negating all fall damage.")
        ])
    })

    // Doormat
    event.modify('supplementaries:doormat', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:doormat', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Holds and displays 3 lines of text."),
            Text.green("- Cats occasionally sit on it."),
            Text.green("- Hide one item below it (shift-click any face except top).")
        ])
    })

    // Sconce, Candelabras, Candle Holders, Fire Pits
    event.modify('supplementaries:sconce', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:sconce', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Decorative torch alternatives."),
            Text.green("- Light with flint & steel, fire charges, fire arrows, or placeable gunpowder."),
            Text.green("- Extinguish by waterlogging or splash water potion."),
            Text.green("- Don't break when waterlogged.")
        ])
    })

    // Way Signs
    event.modify('#supplementaries:way_signs', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('#supplementaries:way_signs', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Place up to 2 on any fence or placed stick."),
            Text.green("- Orientation depends on player facing when placing."),
            Text.green("- Reverse direction by shift-clicking."),
            Text.green("- Click with compass to point toward world spawn or lodestone."),
            Text.green("- Supports dyes and inks like all signs."),
            Text.green("- Can be placed against walls.")
        ])
    })

    // Flower box
    event.modify('supplementaries:flower_box', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:flower_box', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Holds tall flowers, vines, cave vines, nether vines, etc."),
            Text.green("- Configurable to hold up to 3 plants."),
            Text.green("- Place in middle of block, to the side, or hang from ceilings.")
        ])
    })

    // Statue
    event.modify('supplementaries:statue', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:statue', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Holds an item in hand."),
            Text.green("- Special visuals for candles, tools, and swords."),
            Text.green("- Waves when powered by redstone.")
        ])
    })

    // Sack
    event.modify('supplementaries:sack', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:sack', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- 9 slots of portable inventory."),
            Text.green("- Heavy: carrying more than 2 applies overencumbered effect."),
            Text.green("- Gravity block — deals damage when falling on entities (depends on content)."),
            Text.green("- Slots and properties configurable."),
            Text.green("- Interact like a bundle."),
            Text.green("- Fancy tooltip with Quark installed.")
        ])
    })

    // Goblets
    event.modify('supplementaries:goblet', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:goblet', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Holds and displays any liquid."),
            Text.green("- Click drinkable liquids to drink instantly."),
            Text.green("- Interacts with comparators.")
        ])
    })

    // Cages
    event.modify('supplementaries:cage', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:cage', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Capture small animals/mobs with cage item (right/left click)."),
            Text.green("- Right-click full cage to release mob."),
            Text.green("- Shift-right-click to place cage block."),
            Text.green("- Chickens still lay eggs while captured!")
        ])
    })

    // Jars
    event.modify('supplementaries:jar', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:jar', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Stores up to 12 cookie-like items."),
            Text.green("- Eat stored cookies directly by interacting."),
            Text.green("- Can store and capture small mobs (like cages).")
        ])
    })

    // Slingshot
    event.modify('supplementaries:slingshot', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:slingshot', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Shoots blocks! Blocks place themselves where they land (if suitable)."),
            Text.green("- Enchantable with Quick Charge, Multi Shot, and Stasis."),
            Text.green("- Stasis (new enchantment, found in End Cities): shoots in straight line without gravity."),
            Text.green("- Stasis also adds a white block outline showing where the projectile will land.")
        ])
    })

    // Confetti Popper
    event.modify('supplementaries:confetti_popper', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:confetti_popper', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Makes confetti. Fun!"),
            Text.green("- Can be placed on your head for a party hat."),
            Text.green("- Creepers can also wear them! Watch out for explosions though."),
            Text.green("- Shift to place one layer on the ground.")
        ])
    })

    // Altimeter
    event.modify('supplementaries:altimeter', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:altimeter', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Visually shows current height/Y level.")
        ])
    })

    // Slice Maps
    event.modify('supplementaries:slice_map', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:slice_map', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Display the world as viewed from a certain Y level."),
            Text.green("- Slice map Y level is decided when first created.")
        ])
    })

    // Flute
    event.modify('supplementaries:flute', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:flute', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Bind to pets (or horses) by clicking on the animal."),
            Text.green("- Play to summon nearby non-sitting bound pets to the player."),
            Text.green("- Plays a random song from a selected list.")
        ])
    })

    // Wrench
    event.modify('supplementaries:wrench', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:wrench', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Rotates any rotatable block (signs, way signs, double skulls, double chests, beds, etc.)."),
            Text.green("- Shift right-click to reverse rotation direction."),
            Text.green("- Rotation axis = the face you click."),
            Text.green("- Can also rotate entities like item frames and armor stands (left-click)."),
            Text.green("- Doubles as fast melee weapon: same damage as wooden sword, much faster."),
            Text.green("- Can be enchanted with Knockback.")
        ])
    })

    // Soap
    event.modify('supplementaries:soap', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:soap', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Craft with dyed items to revert them to default/white state (works with modded items too)."),
            Text.green("- Use on copper blocks to clean away waxing and oxidation in one use."),
            Text.green("- Use on pets, sheep, slimes, and withers to wash them."),
            Text.green("- Washes away blackboards, antique globes, maps, sticky pistons, tipped spikes, and more.")
        ])
    })

    // Bubble Blower
    event.modify('supplementaries:bubble_blower', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:bubble_blower', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Blow soap bubbles at your friends!"),
            Text.green("- Recharge by crafting with soap."),
            Text.green("- If enchanted with Stasis: places fancy soap bubble blocks in mid-air wherever you aim.")
        ])
    })

    // Antique Ink
    event.modify('supplementaries:antique_ink', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:antique_ink', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Rare item found in urns, fishing loot, or sold by master cartographers."),
            Text.green("- Use on any sign to change its font to a fancy Antiquable font."),
            Text.green("- Craft with a map to turn it into an Antique Map (treasure map look)."),
            Text.green("- Craft with a globe to get a Sepia Globe."),
            Text.green("- Craft with an original written book to get a Tattered Book (cannot be copied, uses Antiquable font).")
        ])
    })

    // Key
    event.modify('supplementaries:key', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('supplementaries:key', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Used to lock Safes, Netherite Doors, Netherite Trapdoors, and Lock Blocks."),
            Text.green("- To lock: rename the key to your desired password, then click on the unlockable block."),
            Text.green("- To clear ownership: shift-click with the correct key on the locked block."),
            Text.green("- To open a locked block: key just needs to be in your inventory or Curio slot (not necessarily in hand).")
        ])
    })

    // Cauldron
    event.modify('minecraft:cauldron', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('minecraft:cauldron', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can now be used to store ANY liquid and can be used to Mix Potions and Dyes."),
            Text.green("- A heat source below boils the cauldron."),
            Text.green("- Stepping into a cauldron with a potion applies the potion effect.")
        ])
    })

    // Lantern
    event.modify('minecraft:lantern', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('minecraft:lantern', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Has a new special animation when holding it."),
            Text.green("- Can now be hung on walls.")
        ])
    })

    // Soul Lantern
    event.modify('minecraft:soul_lantern', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('minecraft:soul_lantern', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Has a new special animation when holding it."),
            Text.green("- Can now be hung on walls.")
        ])
    })

    // Hanging Signs
    event.modify('#minecraft:all_hanging_signs', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('#minecraft:all_hanging_signs', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can now hold any item on both faces."),
            Text.green("- Can also display a banner patterns."),
            Text.green("- Will display a visual connection when attached to fences or walls.")
        ])
    })

    // Carpets
    event.modify('#amendments:stairs_carpets', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('#amendments:stairs_carpets', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can now be placed atop slabs and stairs.")
        ])
    })

    // Cake
    event.modify('minecraft:cake', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('minecraft:cake', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can now be stacked + candle!")
        ])
    })

    // Skulls
    event.modify('#minecraft:skulls', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('#minecraft:skulls', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can now be stacked + candle...")
        ])
    })

    // Banners
    event.modify('#minecraft:banners', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('#minecraft:banners', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can now be placed on ceilings")
        ])
    })

    // Pots
    event.modify('minecraft:flower_pot', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('minecraft:flower_pot', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can now be hung below a ceiling, chain, or rope.")
        ])
    })

    // Bell
    event.modify('minecraft:bell', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('minecraft:bell', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can now be hung below a ceiling, chain, or rope.")
        ])
    })

    // BooknQuill
    event.modify('minecraft:writable_book', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('minecraft:writable_book', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Now has a new GUI for writing text on a lectern.")
        ])
    })

    const TIN = [
 'caverns_and_chasms:raw_tin',
 'caverns_and_chasms:tin_ingot',
 'caverns_and_chasms:tin_nugget',
 'create:crushed_raw_tin',
 'caverns_and_chasms:tin_bars',
 'caverns_and_chasms:tin_chain',
 'caverns_and_chasms:tin_block',
 'caverns_and_chasms:tin_bricks',
 'caverns_and_chasms:chiseled_tin_bricks',
 'caverns_and_chasms:tinplate_block',
 'caverns_and_chasms:tin_ore',
 'caverns_and_chasms:deepslate_tin_ore',
 'caverns_and_chasms:cylindrite_tin_ore',
 'caverns_and_chasms:cassiterite_tin_ore',
 'caverns_and_chasms:raw_tin_block',
 'caverns_and_chasms:float_glass', 
 'caverns_and_chasms:float_glass_pane'
]

    // Tin
    for (const item of TIN) {
        event.modify(item, { shift: false }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.gray("Shift"),
                Text.darkGray("] for Item information")
            ]))
        })
        event.modify(item, { shift: true }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.white("Shift"),
                Text.darkGray("] for Item information")
            ]))
            text.add(Text.empty())
            text.add([
                Text.green("- Tin ore generates above Deepslate, but below sea level in certain parts of the world"),
                Text.green("- Has an affinity for Redstone components, which generally involve winding up or responding to different levels of power."),
                Text.yellow("- Projectiles shot at blocks made of Tin will ricochet off of them."),
                Text.yellow("- Placing a block made of Tin next to another block will make the opposite side of that block deflective too.")
            ])
        })
    }

    // Bouncer
    event.modify('caverns_and_chasms:bouncer', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:bouncer', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Deflects projectiles even more powerfully than regular Tin blocks. It will also emit a short Redstone signal proportional to how close to the middle the projectile hit, just like Target blocks!")
        ])
    })

    const STR_DCT = [ 'caverns_and_chasms:storage_duct', 'caverns_and_chasms:storage_duct_hatch' ]

    // Storage Duct
    for (const item of STR_DCT) {
        event.modify(item, { shift: false }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.gray("Shift"),
                Text.darkGray("] for Item information")
            ]))
        })
        event.modify(item, { shift: true }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.white("Shift"),
                Text.darkGray("] for Item information")
            ]))
            text.add(Text.empty())
            text.add([
                Text.green("- Multiple ducts can be linked together into one unified container whose contents can be viewed and scrolled through all at once!"),
                Text.green("- Hoppers can collect items from any part of a duct pipeline, meaning that you can insert items into one end of the duct and then extract them instantly from the other end."),
                Text.yellow("- Storage Duct Hatches are a block designed to allow you to access the contents of the storage duct from any part of your system")
            ])
        })
    }

    const RLLR = ['caverns_and_chasms:roller_door', 'caverns_and_chasms:roller_window']

    // Roller Door/Window
    for (const item of RLLR) {
        event.modify(item, { shift: false }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.gray("Shift"),
                Text.darkGray("] for Item information")
            ]))
        })
        event.modify(item, { shift: true }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.white("Shift"),
                Text.darkGray("] for Item information")
            ]))
            text.add(Text.empty())
            text.add([
                Text.green("- Functions much like a garage door. "),
                Text.green("- They can be opened and closed by powering them with redstone or right-clicking the bottom a Tuning Fork to manually open them."),
                Text.yellow("- Can be placed horizontally or vertically.")
            ])
        })
    }

    const SRTR = ['caverns_and_chasms:splurter', 'caverns_and_chasms:scatterer']

    // Splurter/Scatterer
    for (const item of SRTR) {
        event.modify(item, { shift: false }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.gray("Shift"),
                Text.darkGray("] for Item information")
            ]))
        })
        event.modify(item, { shift: true }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.white("Shift"),
                Text.darkGray("] for Item information")
            ]))
            text.add(Text.empty())
            text.add([
                Text.green("- Splurters and Scatterers are upgrades to the dropper and dispenser respectively."),
                Text.green("- They have a range respective to the signal strength and output more of their inventories at once."),
                Text.yellow("- The splurter will drop its entire inventory on activation, whereas the scatterer will only empty one item per slot, as it’s able to shoot projectiles like a dispenser.")
            ])
        })
    }

    // Aegis
    event.modify('caverns_and_chasms:aegis', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:aegis', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Fully deflects projectiles.")
        ])
    })

    // Packing Container
    event.modify('caverns_and_chasms:packing_container', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:packing_container', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Packing Containers with items in them will automatically fill when picking up more of that same item."),
            Text.green("- Holds up to 8 stacks of a single item type."),
            Text.green("- Can also be dyed like Leather Armor to gain a colored label stripe around their base.")
        ])
    })

    const TRQS = ['caverns_and_chasms:turquoise', 'caverns_and_chasms:turquoise_ore', 'caverns_and_chasms:deepslate_turquoise_ore']

    // Turquoise
    for (const item of TRQS) {
        event.modify(item, { shift: false }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.gray("Shift"),
                Text.darkGray("] for Item information")
            ]))
        })
        event.modify(item, { shift: true }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.white("Shift"),
                Text.darkGray("] for Item information")
            ]))
            text.add(Text.empty())
            text.add([
                Text.green("- Turquoise can be crafted with an Armor Trim Smithing Template to create a Trim Modifier Smithing Template")
            ])
        })
    }

    // Modifier Smithing Template
    event.modify('caverns_and_chasms:trim_modifier_smithing_template', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:trim_modifier_smithing_template', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Using the template with Spinel creates a Faded trim, which renders the trim at 50% opacity for subtler trim designs."),
            Text.green("- Emissive trims can also be made by using the template with Glow Ink, which will give the armor a nice glow.")
        ])
    })

    // Dismantling Table
    event.modify('caverns_and_chasms:dismantling_table', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:dismantling_table', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Allows you to undo your past armor upgrades, receiving your smithing templates & materials back for the small cost of some Spinel.")
        ])
    })

    // Bejeweled Anvil
    event.modify('caverns_and_chasms:bejeweled_anvil', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:bejeweled_anvil', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Costs no XP to use, however, this anvil is very fragile and is destroyed immediately after use")
        ])
    })

    // Toolbelt
    event.modify('caverns_and_chasms:toolbelt', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:toolbelt', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Offers two additional block reach, with an enchantment available, Extending, that allows for up to three more")
        ])
    })

    const CPR_AMR = ['caverns_and_chasms:copper_helmet', 'caverns_and_chasms:copper_chestplate', 'caverns_and_chasms:copper_boots', 'caverns_and_chasms:copper_leggings', 'caverns_and_chasms:copper_shovel', 'caverns_and_chasms:copper_pickaxe', 'caverns_and_chasms:copper_axe', 'caverns_and_chasms:copper_hoe']

    // Turquoise
    for (const item of CPR_AMR) {
        event.modify(item, { shift: false }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.gray("Shift"),
                Text.darkGray("] for Item information")
            ]))
        })
        event.modify(item, { shift: true }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.white("Shift"),
                Text.darkGray("] for Item information")
            ]))
            text.add(Text.empty())
            text.add([
                Text.gold("- Massive durability."),
                Text.gold("- Slowly oxidizes when equipped/held, and can be waxed."),
                Text.gold("- Oxidation increases mining level for tools and defense for armor, but lowers movement speed."),
                Text.yellow("- Tank Gameplay.")
            ])
        })
    }

    // Zirconia
    event.modify('caverns_and_chasms:zirconia', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:zirconia', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can be used to repair any item as though it were the repair material, useful for expensive equipment."),
            Text.green("- Can be used as a trim material."),
            Text.green("- Can be used to duplicate music discs.")
        ])
    })

    // Sparklers
    event.modify('#caverns_and_chasms:sparklers', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('#caverns_and_chasms:sparklers', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Lit manually with Flint and Steel, and lighting them a second time (or sometimes colliding with them) will cause a small, non-destructive explosion of particles. "),
            Text.green("- Sparklers can be dyed in all sixteen dye colors for some awesome building opportunities!")
        ])
    })

    // Gunpowder Block
    event.modify('caverns_and_chasms:gunpowder_block', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:gunpowder_block', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Creates a large and destructive instant explosion of black smoke when lit! ")
        ])
    })

    // Flint Block
    event.modify('caverns_and_chasms:flint_block', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:flint_block', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Has gravity unless attached from above. "),
            Text.green("- When it lands, or if another falling block grazes it, it will spark and ignite fires around it, including lighting adjacent TNT. ")
        ])
    })

    // Rhyolite
    event.modify('caverns_and_chasms:rhyolite', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:rhyolite', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- When lava pours onto a bubble column, the lava will cool into Rhyolite, therefore making Rhyolite renewable! ")
        ])
    })

    // Tinplate
    event.modify('caverns_and_chasms:tinplate', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:tinplate', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Lets you wax Copper blocks, like Honeycomb, but less painfully"),
            Text.green("- Can also be made into a storage block that functions like Tin Blocks, deflecting projectiles, but projectiles that bounce off Tinplate will bounce twice instead of once!")
        ])
    })

    // Hoop
    event.modify('caverns_and_chasms:hoop', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:hoop', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Detects when an item or projectile goes through it, releasing a redstone signal approximate to the velocity."),
            Text.yellow("- Fun for minigames, especially as projectiles that miss will bounce off of the sides!"),
            Text.green("- You can make the hoop smaller with a Tuning Fork")
        ])
    })

    // Spinel
    event.modify('caverns_and_chasms:spinel', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:spinel', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Extra common inside Lush Caves biomes."),
            Text.green("- Can be brewed into Rewind potions. When a Rewind potion expires, you are teleported back to the location where you were first given the effect."),
            Text.green("- Spinel also creates Tether potions, a new potion type that can be worn on your head."),
            Text.yellow("- Can be combined with Golden apples, TNT, Arrows for new special items.")
        ])
    })

    // Tether Potions
    event.modify('caverns_and_chasms:tether_potion', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:tether_potion', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Grants you the designated potion effect continuously until you take damage or it is taken off."),
            Text.green("- Instant effects are not granted continuously, but rather when the potion is removed or destroyed.")
        ])
    })

    // Impact Potions
    event.modify('caverns_and_chasms:impact_potion', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:impact_potion', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Splashes the designated potion effect around you when you take damage.")
        ])
    })

    // Trail Potions
    event.modify('caverns_and_chasms:trail_potion', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:trail_potion', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Just like a trail potion, however it creates lingering zones of the designated potion effect behind you.")
        ])
    })

    // Tuning Fork
    event.modify('caverns_and_chasms:tuning_fork', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:tuning_fork', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Used to transfer notes between note blocks, to help with making note block contraptions in survival."),
            Text.green("- Can also be used to control Copper and Iron Golems.")
        ])
    })

    // Barometer
    event.modify('caverns_and_chasms:barometer', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:barometer', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Shows weather on the surface.")
        ])
    })

    // Bejeweled Apple
    event.modify('caverns_and_chasms:bejeweled_apple', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:bejeweled_apple', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Bestows random effects when consumed.")
        ])
    })

    // Bejeweled Pearl
    event.modify('caverns_and_chasms:bejeweled_pearl', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:bejeweled_pearl', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can be thrown to teleport players where they land, but unlike ender pearls, they are fragile and liable to break before landing, teleporting the player midair."),
            Text.green("- Can either be thrown immediately or held to \"cook\" like a grenade."),
            Text.green("- Used to brew potions of rewind.")
        ])
    })

    // Blunt Arrow
    event.modify('caverns_and_chasms:blunt_arrow', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:blunt_arrow', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Deals no damage but applies enchantments on hit.")
        ])
    })

    const GLDB = ['caverns_and_chasms:golden_water_bucket', 'caverns_and_chasms:golden_bucket', 'caverns_and_chasms:golden_lava_bucket', 'caverns_and_chasms:golden_powder_snow_bucket', 'caverns_and_chasms:golden_milk_bucket']

    // Golden Buckets
    for (const item of GLDB) {
        event.modify(item, { shift: false }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.gray("Shift"),
                Text.darkGray("] for Item information")
            ]))
        })
        event.modify(item, { shift: true }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.white("Shift"),
                Text.darkGray("] for Item information")
            ]))
            text.add(Text.empty())
            text.add([
                Text.gold("- Holds up to 3 sources of fluid.")
            ])
        })
    }

    // Depth Gauge
    event.modify('caverns_and_chasms:depth_gauge', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:depth_gauge', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Displays the player's current height in the world. Analogous to the Vanilla Clock.")
        ])
    })

    // Monocle
    event.modify('caverns_and_chasms:monocle', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:monocle', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.aqua("- fancy innit")
        ])
    })

    // Unicorn Horn
    event.modify('caverns_and_chasms:unicorn_horn', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:unicorn_horn', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.aqua("Put a unicorn horn on a horse with copper horse armor"),
            Text.aqua("It's awesome"),
            Text.aqua("- bagel from the Abnormal's discord server")
        ])
    })

    // Redstone Resistor
    event.modify('caverns_and_chasms:resistor', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:resistor', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Inverse of the Repeater; instead of strengthening the incoming signal, they weaken it by an amount that can be modified by moving the slider on its side.")
        ])
    })

    // Redstone Refractor
    event.modify('caverns_and_chasms:refractor', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('caverns_and_chasms:refractor', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- When powered by Redstone, it redirects the received signal randomly to one of its three outputs. "),
            Text.green("- The weight of each output can be modified by moving the corresponding torch.")
        ])
    })

    // Mining Pouches
    event.modify('galosphere:mining_pouch', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('galosphere:mining_pouch', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Found in mole burrows after moles buried them."),
            Text.green("- When the Pouch is fulfilled, it can be returned to any mole burrow and the mole burrow will start spitting gifts out."),
            Text.yellow("- Mining quests can be completed to obtain new items like Ancient City maps, opal flakes, etc.")
        ])
    })

    // Opal Flakes
    event.modify('galosphere:opal_flakes', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('galosphere:opal_flakes', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- When used on any saplings, it will convert them into opal saplings which can be grown into an opal tree")
        ])
    })

    // Rope darts
    event.modify('galosphere:rope_dart', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('galosphere:rope_dart', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Functionally a grappling hook."),
            Text.green("- Does not work on physics objects.")
        ])
    })

    // Monstrometer
    event.modify('galosphere:monstrometer', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('galosphere:monstrometer', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Detects Monster areas by emitting blue or yellow indicator particles."),
            Text.aqua("- Blue Particles mean Monsters can spawn"),
            Text.yellow("- Yellow Particles means Monsters cannot spawn")
        ])
    })

    // Palladium Bomb
    event.modify('galosphere:palladium_bomb', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('galosphere:palladium_bomb', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can be customized with combustion table to enhance its traits")
        ])
    })

    // Echo Bell
    event.modify('galosphere:echo_bell', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('galosphere:echo_bell', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Will emit crystal sounds or particles occasionally when it detects an ore (5x3x5)")
        ])
    })

    const STLNG = ['galosphere:sterling_helmet', 'galosphere:sterling_chestplate', 'galosphere:sterling_leggings', 'galosphere:sterling_boots', 'galosphere:sterling_horse_armor']

    // Sterling Armor/Horse Armor
    for (const item of STLNG) {
        event.modify(item, { shift: false }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.gray("Shift"),
                Text.darkGray("] for Item information")
            ]))
        })
        event.modify(item, { shift: true }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.white("Shift"),
                Text.darkGray("] for Item information")
            ]))
            text.add(Text.empty())
            text.add([
                Text.gold("- Mitigates damage from illagers."),
                Text.gold("- Prevents sinking into powder snow"),
                Text.gold("- Attach a banner to the helmet or horse armor like a bundle.")
            ])
        })
    }

    // Allurite block
    event.modify('galosphere:allurite_block', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('galosphere:allurite_block', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Placing this block adjacent to a block that produces sound will mitigate the sounds by 90%")
        ])
    })

    // Burrow Anchor
    event.modify('galosphere:burrow_anchor', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('galosphere:burrow_anchor', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Acts like a teleporter except the bottom needs to have a sculk linkage (line of sculk blocks) to another Anchor"),
            Text.green("- Once connected, player can sneak on top of the anchor and burrow it like a Warden")
        ])
    })

    // Composter
    event.modify('minecraft:composter', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('minecraft:composter', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Extra: Right clicking a semi-filled composter with a lumiere shard will turn the compost into lumiere compost, which drops glowstone dust when it's fully filled."),
            Text.green("- Extra: Afilled composter underneath a Pink Salt Straw will have a 50% chance of converting the composter into a saline composter (Converts the compost into coarse dirt).")
        ])
    })

    // Mole Burrow
    event.modify('galosphere:mole_burrow', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('galosphere:mole_burrow', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Mole Burrows are a home source for moles and it works similar to beehives"),
            Text.green("- A source of mining quests.")
        ])
    })

    // Combustion Table
    event.modify('galosphere:combustion_table', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('galosphere:combustion_table', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- A new workstation table that allows the players to customize their own silver bombs."),
            Text.green("- Gunpowder increases the blast radius"),
            Text.green("- String increases the duration"),
            Text.green("- Slimeball increases the bounciness of the bomb")
        ])
    })

    // Stranded Membrane Block
    event.modify('galosphere:stranded_membrane_block', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('galosphere:stranded_membrane_block', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- A new variant of cured membrane block that is permeable and transparent"),
            Text.green("- It can be used to transit items based on its facing direction state")
        ])
    })

    // Shadow Frame
    event.modify('galosphere:shadow_frame', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('galosphere:shadow_frame', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- A new technical decor block that can mimic other blocks based on what you have right clicked it with"),
            Text.green("- It's collision can be controlled. If it is being powered by redstone, it will be collidable. Otherwise, it will stay non-collidable"),
            Text.red("- Hidden rooms or traps can be made possible with this block!")
        ])
    })

    // Anvil
    event.modify('minecraft:anvil', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('minecraft:anvil', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can now be repaired using iron ingots.")
        ])
    })

    // Elder eye
    event.modify('upgrade_aquatic:elder_eye', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('upgrade_aquatic:elder_eye', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Emits redstone upon detecting movement.")
        ])
    })

    // Coralstone
    event.modify('upgrade_aquatic:coralstone', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('upgrade_aquatic:coralstone', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Place next to coral to take on colour properties."),
            Text.green("- Will grow coral when powered with redstone.")
        ])
    })

    // Television
    event.modify('vista:television', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('vista:television', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Right click with a casette to set a show/channel."),
            Text.green("- Power with redstone to turn on the TV."),
            Text.green("- A Hollow casette will display the perspective of the binded viewfinder, thus creating a remote camera view."),
            Text.green("- Shift click to pause.")
        ])
    })

    // Viewfinder
    event.modify('vista:viewfinder', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('vista:viewfinder', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.gold("- Surveillance camera."),
            Text.green("- Can be connected to a Television by linking a hollow casette to the viewfinder and putting the cassette into the TV."),
            Text.green("- View distance can be changed with redstone."),
            Text.green("- Can have glass panes or mob heads applied to have the linked TV get a particular tint effects / shaders.")
        ])
    })

    // Cassette
    event.modify('vista:cassette', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('vista:cassette', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can be dropped by creepers killed by a pillager arrow.")
        ])
    })

    // Grappling Hook
    event.modify('addon_gancho:plunger_launcher_test', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('addon_gancho:plunger_launcher_test', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Fires a cable between two points"),
            Text.green("- Use a Cable Trolley to ride along the cable"),
            Text.green("- Shift, Space, Ctrl+Space have different ways of dismounting the player. "),
            Text.green("- Right-click a player who's riding to grab their free hand and get carried along. "),
            Text.green("- Remove cables with the Create Wrench (Shift + right-click). ")
        ])
    })

    // Cable Trolley
    event.modify('addon_gancho:conector', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('addon_gancho:conector', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- To be used with the Create: Grappling Hook.")
        ])
    })

    // Swing Hook
    event.modify('addon_gancho:grapple_swing', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('addon_gancho:grapple_swing', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Functionally a Grappling Hook that works on simulated objects."),
            Text.green("- Sneak + Forwards to reel in & vice versa.")
        ])
    })

    // Contraption Lift
    event.modify('create_lnl:contraption_lift', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('create_lnl:contraption_lift', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Blocks placed on top will be automatically simulated, anchored and centered."),
            Text.green("- Simulations can be binded to the contraption lift to be anchored on top of the lift when placed.")
        ])
    })

    const TIRE = ['offroad:small_tire', 'offroad:tire', 'offroad:large_tire', 'offroad:monstrous_tire', 'create_lnl:monstrous_slime_tire', 'create_lnl:large_slime_tire', 'create_lnl:slime_tire', 'create_lnl:small_slime_tire']

    // Tires
    for (const item of TIRE) {
        event.modify(item, { shift: true }, text => {
            text.add(Text.empty())
            text.add([
                Text.green("- Can now be placed in-world and function."),
                Text.green("- Possibly useful for centered wheels.")
            ])
        })
    }

    // Physic Welder
    event.modify('create_lnl:physic_welder', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('create_lnl:physic_welder', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Functionally a longer ranged and more efficient version of the slime ball for contraptions.")
        ])
    })

    // Industrial iron
    event.modify('create:industrial_iron_block', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('create:industrial_iron_block', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can now be used as casing for cogs, etc.")
        ])
    })

    // Flywheel Bearing
    event.modify('bits_n_bobs:flywheel_bearing', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('bits_n_bobs:flywheel_bearing', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Stores rotational energy up to a certain point."),
            Text.green("- Depending on the weight of the attached structure, outputs a large amount of Stress Units."),
            Text.green("- Useful for multiplying the SU capacity of ground contraptions."),
            Text.green("- Aesthetically approved for large water wheel builds.")
        ])
    })

    // Industrial Belt
    event.modify('bits_n_tracks:industrial_belt', { shift: false }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for Item information")
        ]))
    })
    event.modify('bits_n_tracks:industrial_belt', { shift: true }, text => {
        text.insert(1, Text.join([
            Text.darkGray("Hold ["),
            Text.white("Shift"),
            Text.darkGray("] for Item information")
        ]))
        text.add(Text.empty())
        text.add([
            Text.green("- Can only be used on physical or industrial flanged cogwheels."),
            Text.green("- Attached like a chain on cogwheels and can move simulated contraptions when used as a track.")
        ])
    })

    const BTWHLS = ['bits_n_tracks:tiny_flanged_cogwheel', 'bits_n_tracks:flanged_cogwheel', 'bits_n_tracks:medium_flanged_cogwheel', 'bits_n_tracks:large_flanged_cogwheel', 'bits_n_tracks:industrial_tiny_flanged_cogwheel', 'bits_n_tracks:industrial_flanged_cogwheel', 'bits_n_tracks:medium_industrial_flanged_cogwheel', 'bits_n_tracks:large_industrial_flanged_cogwheel']

    // Track Wheels
    for (const item of BTWHLS) {
        event.modify(item, { shift: false }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.gray("Shift"),
                Text.darkGray("] for Item information")
            ]))
        })
        event.modify(item, { shift: true }, text => {
            text.insert(1, Text.join([
                Text.darkGray("Hold ["),
                Text.white("Shift"),
                Text.darkGray("] for Item information")
            ]))
            text.add(Text.empty())
            text.add([
                Text.green("- Can be used to transport kinetic energy using either mechanical belts or industrial belts."),
                Text.green("- When left clicked using a Cog Alignment Lever, it can now be used as a track for moving simulated contraptions.")
            ])
        })
    }
})