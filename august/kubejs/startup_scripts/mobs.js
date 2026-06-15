EntityJSEvents.attributes(event => {
    /**
     * While the entity builders come with pre-added default attributes you may
     * add your own attributes here as well for more control over your entity's attributes.
     * This also works to modify existing mob's attributes such as in this example we are modifying
     * an allay's max health.
     */
    event.modify('minecraft:spider', attribute => {
        attribute.add("minecraft:generic.max_health", 28)
    })
    event.modify('minecraft:cave_spider', attribute => {
        attribute.add("minecraft:generic.max_health", 20)
    })
})