namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hop.vy == 0) {
        hop.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite2, location2) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    sprites.destroy(flower)
    bee = sprites.create(img`
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
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        ........................
        .........11...111.......
        ........1111.11111......
        ........1111.11111......
        ........111111111.......
        ........111111111.......
        .........1155555........
        .........5f5555f55......
        ......155f55555f555.....
        ....11555f55555f555f....
        ....11555f55555f555.....
        ......155f55555f555f....
        .......55ff5555f555.....
        ........55f5555f55......
        ............55555.......
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ...........55555........
        .........5f5555f55......
        ......155f55555f555.....
        ....11555f55555f555f....
        ....11555f55555f555.....
        ......155f55555f555f....
        .......55ff5555f555.....
        ........55f5555f55......
        ............55555.......
        ........................
        `],
    200,
    true
    )
    bee.setPosition(hop.x + 30, hop.y - 80)
    bee.follow(hop, 5000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (hop.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeScoreBy(-1)
    }
})
let bee: Sprite = null
let flower: Sprite = null
let coin2: Sprite = null
let hop: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999119999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999911919999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999911111111911111119991199999999999999999999999999999999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999
    9999999999991111111111199999991119911999999999999999999999999999999999999911111199111119919999999119999199999999999999999999999999999999999999999999999999999999
    9999999999111111911191111111111111111111199999999999999999999999999999999919111111911111111111191991911199999999999999999999999999999999999999999999999999999999
    9999999991911911111111111911111911199911111999999999999999999999999999999911199119199191199119919991191199999999999999999999999999999999999999999999999999999999
    9999999991111111191111111111111111119911199119999999999999999999999999991119919111999119999111111111119111999999999999999999999999999999999999999999999999999999
    9999911111111111111119911999111999191111111919999999999999999999999999919111191111991919991111111111199199199999999999999999999999999999999999999999999999999999
    9999911111111111111111111919111911191119191919999999999999999999999999911919111919119911119111111911199199199999999999999999999999999999999999999999999999999999
    9999191111111111191111111111111111111119191919999999999999999999999999911911111919199911999911911991999111999999999999999999999999999999999999999999999999999999
    9999191111191111111911111199999199111111191919999999999999999999999999919111111111191119111111111111999199999999999999999999999999999999999999999999999999999999
    9999199119111111111111111111111111199911191919999999999999999999999999991111991911119111119111991111111199999999999999999999999999999999999999999999999999999999
    9999199111111111111111119111119199199999111119999999999999999999999999991191991111911199911191911999119999999999999999999999999999999999999999999999999999999999
    9999199911111111111111111199111199199999919999999999999999999999999999999191111199919111111191191999999999999999999999999999999999999999999999999999999999999999
    9999199999991111111119111111999999999999999999999999999999999999999999999191111199919991199111119999999999999999999999999999999999999999999999999999999999999999
    9999911111111119919199999999999999999999999999999999999999999999999999999119111199911111111111999999999999999999999999999999999999999999999999999999999999999999
    9999999999991111111999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999119119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911199911199119999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991199191199999991199919999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999119999111199999999911119999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991991191119119991199911919999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999119119119111191119919199119999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991911999111919191911111111919999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991199911111111119911119119919999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991919919111911199191111911919911999999
    9999999999999999999999999999999999999999996999999999999999999999999999999999999999999999999999999999999999999999999999999991919911911111119111111111111111999999
    9999999999999999999999999999999999999999966666999999999999999999999999999999999999999999999999999999999999999999999999999999119119191911111111119911911111991199
    9999999999999999999999999999999999999966666666999999999999999999999999999999999999999999999999999999999999999999999999999999111911911111191111999911911191119911
    9999999999999999999999999999999999996666666666999999999999999999999999999999999999999999999999999999999999999999999999999999111111119111111111111111111111191911
    9999999999999999999999999999999999666666666666999999999999999999999999999999999999999999999999999999999999999999999999999999911111111919911119919111111119191111
    9999999999999999999999999999999966666666666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999919991111111199911119111911
    9999999999999999999999999999999666666666666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999919919111111199911111119919
    9999999999999999999999999999966666666666666666699999999999999999999999999999999999999999999999999999999999999999999999999999999999999991199919919111111991119119
    9999999999999999999999999966666666666666666666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111991191999991911111919
    9999999999999999999999999666666666666666666666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999991999111119999991191111919
    9999999999999999999999996666666666666666666666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999991999991911999991991199119
    9999999999999999999999666666666666666666666666666699999999999999999999999999999999999999999999999999999999999999999999999999999999999991999919999111111111999999
    9999999999999999999966666666666666666666666666666666699999999999999999999999969999999999999999999999999999999999999999999999999999999991111199999999911111999999
    9999999999999999996666666666666666666666666666666666666999999999999999999966666699999999999999999999999999999999999999999999999999999999999999999999999991999999
    9999999999999999666666666666666666666666666666666666666699999999999999999966666699999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999966666666666666666666666666666666666666666669999999999999999966666699999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999666666666666666666666666666666666666666666666999999999999999966666669999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999966666666666666666666666666666666666666666666666669999999999999666666666999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999996666666666666666666666666666666666666666666666666666999999999999666666666699999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999666666666666666666666666666666666666666666666666666666699999999996666666666669999999999999999999999999999999999999999999999999999999999999999999999999999
    9999966666666666666666666666666666666666666666666666666666666666999999996666666666669999999999999999999999999999999999999999999999999999999999999999999999999999
    9996666666666666666666666666666666666666666666666666666666666666666999966666666666666999999999999999999999999999999999999999999999999999999999999999999999999999
    9666666666666666666666666666666666666666666666666666666666666666666669666666666666666699999999999999999999999999999999999999999999999999999999999999999999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999999999999999999999999999999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999999666669999999999999999999999999999999999999999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999666666699999999999999999999999999999999999999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999966666666669999999999999999999999999999999999999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999966666666666669999999999999999999999999999999999999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999999999999999999999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999999999999999999999999999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999666669999999999999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999666666999999999999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999666666666699999999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999999666666666699999999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999996666666666666699999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999966666666666666669999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999666666666666666666999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666996666666666666666666699999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
hop = sprites.create(img`
    . . . . 4 4 4 . . . . 4 4 4 . . 
    . . . 4 5 5 5 e . . e 5 5 5 4 . 
    . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
    . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
    . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
    . . . e e 5 5 5 5 5 5 5 5 e e . 
    . . . . e 5 f 5 5 5 5 f 5 e . . 
    f f . . f 5 5 5 4 4 5 5 5 f . . 
    f 5 f . f 6 5 5 f f 5 5 4 f . . 
    f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
    . f 5 4 4 5 5 5 5 5 5 4 f . . . 
    . . f f 5 5 4 5 5 5 5 5 f . . . 
    . . . f 5 f f 5 f f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(hop, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
hop.ay = 350
scene.cameraFollowSprite(hop)
info.setLife(5)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    coin2 = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.coin)
    animation.runImageAnimation(
    coin2,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 3 5 b . 
        . b 5 3 5 5 b . 
        . c 5 3 5 d c . 
        . c 5 d 1 d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `],
    150,
    true
    )
    tiles.placeOnTile(coin2, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    flower = sprites.create(img`
        .........ccc........
        ......cccc3cc.......
        .....cc3c3c3c.......
        .....c33ccbcc.......
        .....cb3cb3b3c......
        .....ccccccc3c......
        .....c33bbc33c......
        .....cc333cccc......
        ......ccccc7..6.....
        ...........7666.....
        .......5..766.......
        .......7776.........
        ........76..........
        ........6...........
        ........6...........
        ........6...........
        ........66..........
        .........6..........
        ....................
        ....................
        `, SpriteKind.flower)
    tiles.placeOnTile(flower, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
