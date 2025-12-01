ServerEvents.recipes( event => {
    event.remove({id:'biomeswevegone:white_stained_glass_from_white_sand'})
    event.remove({id:'biomeswevegone:black_stained_glass_from_black_sand'})
    event.remove({id:'biomeswevegone:blue_stained_glass_from_blue_sand'})
    event.remove({id:'biomeswevegone:purple_stained_glass_from_purple_sand'})
    event.remove({id:'biomeswevegone:pink_stained_glass_from_pink_sand'})
    event.remove({id:'biomeswevegone:white_wool_from_white_allium_petal_block'})
    event.remove({id:'biomeswevegone:pink_wool_from_pink_allium_petal_block'})
    event.remove({id:'biomeswevegone:purple_wool_from_allium_petal_block'})
    event.remove({id:'minecraft:white_allium_petal_block'})
    event.remove({id:'minecraft:pink_allium_petal_block'})
    event.remove({id:'minecraft:allium_petal_block'})

    event.recipes.gtceu.compressor('white_allium_petal_to_wool')
        .itemInputs('4x biomeswevegone:white_allium_petal_block')
        .itemOutputs('minecraft:white_wool')
        .duration(160)
        .EUt(3);
    event.recipes.gtceu.compressor('pink_allium_petal_to_wool')
        .itemInputs('4x biomeswevegone:pink_allium_petal_block')
        .itemOutputs('minecraft:pink_wool')
        .duration(160)
        .EUt(3);
    event.recipes.gtceu.compressor('allium_petal_to_wool')
        .itemInputs('4x biomeswevegone:allium_petal_block')
        .itemOutputs('minecraft:purple_wool')
        .duration(160)
        .EUt(3);

    event.recipes.gtceu.compressor('allium_to_allium_petal')
        .itemInputs('9x minecraft:allium')
        .itemOutputs('biomeswevegone:allium_petal_block')
        .duration(60)
        .EUt(2);
    event.recipes.gtceu.compressor('pink_allium_to_pink_allium_petal')
        .itemInputs('9x biomeswevegone:pink_allium')
        .itemOutputs('biomeswevegone:pink_allium_petal_block')
        .duration(60)
        .EUt(2);
    event.recipes.gtceu.compressor('white_allium_to_white_allium_petal')
        .itemInputs('9x biomeswevegone:white_allium')
        .itemOutputs('biomeswevegone:white_allium_petal_block')
        .duration(60)
        .EUt(2);
})