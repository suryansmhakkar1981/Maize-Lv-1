// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000101010101010101010101010101010101020505050505050505050505050501010600090909000000000000090008010106000900090009000909000900080101060009000900090009000009000801010600090009000900090009090008010106000900090909000900090000080101060000000900000009000909000801010600090009000900090000090008010106000900090009000009000900080101060009000900090900090009000801010600090009000009000900000008010106000909090900090009000900080101060000000900000000090009000a010103070707070707070707070707040101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . 2 2 2 . . . . . . 2 . 2 2 
2 2 . 2 . 2 . 2 . 2 2 . 2 . 2 2 
2 2 . 2 . 2 . 2 . 2 . . 2 . 2 2 
2 2 . 2 . 2 . 2 . 2 . 2 2 . 2 2 
2 2 . 2 . 2 2 2 . 2 . 2 . . 2 2 
2 2 . . . . . . . 2 . 2 2 . 2 2 
2 2 . 2 . 2 . 2 . 2 . . 2 . 2 2 
2 2 . 2 . 2 . 2 . . 2 . 2 . 2 2 
2 2 . 2 . 2 . 2 2 . 2 . 2 . 2 2 
2 2 . 2 . 2 . . 2 . 2 . . . 2 2 
2 2 . 2 2 2 2 . 2 . 2 . 2 . 2 2 
2 2 . . . 2 . . . . 2 . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.builtin.forestTiles4,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
