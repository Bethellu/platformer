@namespace
class SpriteKind:
    coin = SpriteKind.create()
    flower = SpriteKind.create()

def on_overlap_tile(sprite, location):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_a_pressed():
    if hop.vy == 0:
        hop.vy = -150
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile2(sprite2, location2):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
    """),
    on_overlap_tile2)

def on_on_overlap(sprite3, otherSprite):
    info.change_score_by(1)
    sprites.destroy(otherSprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.coin, on_on_overlap)

def on_on_overlap2(sprite4, otherSprite2):
    global bee
    sprites.destroy(flower2)
    bee = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    animation.run_image_animation(bee,
        [img("""
                ....111111..11111.......
                        ....111111..111111......
                        ....111111.1111111......
                        ....111111.1111111......
                        ....111111.1111111......
                        .....1111111111111......
                        ....5111111111111..111..
                        ...15f111511111f5551.1..
                        ..155f555f55555f5551.f..
                        11115f555f55555f5551....
                        .1155f555f55555f55511...
                        ...15f555f55555f5551.f..
                        .....f555ff5555f55511...
                        .........5f5555f55..11..
                        ........................
                        ........................
            """),
            img("""
                ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        .....f5555f555ff55......
                        ....5f555ff5555f555111..
                        ...15f555f55555f5551.1..
                        ..155f555f55555f5551.f..
                        11115f555f55555f5551....
                        .1155f555f55555f55511...
                        ...15f555f55555f5551.f..
                        .....f555ff5555f55511...
                        .........5f555ff55..11..
                        ........................
                        ........................
            """)],
        200,
        True)
    bee.set_position(hop.x + 30, hop.y - 80)
    bee.follow(hop, 5000)
sprites.on_overlap(SpriteKind.player, SpriteKind.flower, on_on_overlap2)

def on_on_overlap3(sprite5, otherSprite3):
    sprites.destroy(otherSprite3)
    if hop.y < otherSprite3.y:
        info.change_score_by(3)
    else:
        info.change_score_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap3)

bee: Sprite = None
flower2: Sprite = None
coin2: Sprite = None
hop: Sprite = None
scene.set_background_color(9)
hop = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(hop, 100, 0)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
hop.ay = 350
scene.camera_follow_sprite(hop)
info.set_life(5)
for value in tiles.get_tiles_by_type(assets.tile("""
    myTile2
""")):
    coin2 = sprites.create(img("""
            . . b b b b . . 
                    . b 5 5 5 5 b . 
                    b 5 d 3 3 d 5 b 
                    b 5 3 5 5 1 5 b 
                    c 5 3 5 5 1 d c 
                    c d d 1 1 d d c 
                    . f d d d d f . 
                    . . f f f f . .
        """),
        SpriteKind.coin)
    animation.run_image_animation(coin2,
        [img("""
                . . b b b b . . 
                        . b 5 5 5 5 b . 
                        b 5 d 3 3 d 5 b 
                        b 5 3 5 5 1 5 b 
                        c 5 3 5 5 1 d c 
                        c d d 1 1 d d c 
                        . f d d d d f . 
                        . . f f f f . .
            """),
            img("""
                . . . b b . . . 
                        . . b 5 5 b . . 
                        . b 5 d 3 5 b . 
                        . b 5 3 5 5 b . 
                        . c 5 3 5 d c . 
                        . c 5 d 1 d c . 
                        . . f d d f . . 
                        . . . f f . . .
            """),
            img("""
                . . . b b . . . 
                        . . b 5 5 b . . 
                        . . b 1 1 b . . 
                        . . b 5 5 b . . 
                        . . b d d b . . 
                        . . c d d c . . 
                        . . c 3 3 c . . 
                        . . . f f . . .
            """),
            img("""
                . . . b b . . . 
                        . . b 5 5 b . . 
                        . b 5 1 d 5 b . 
                        . b 5 1 3 5 b . 
                        . c d 1 3 5 c . 
                        . c d d 1 5 c . 
                        . . f d d f . . 
                        . . . f f . . .
            """),
            img("""
                . . b b b b . . 
                        . b 5 5 5 5 b . 
                        b 5 d 3 3 d 5 b 
                        b 5 3 5 5 1 5 b 
                        c 5 3 5 5 1 d c 
                        c d d 1 1 d d c 
                        . f d d d d f . 
                        . . f f f f . .
            """)],
        150,
        True)
    tiles.place_on_tile(coin2, value)
    tiles.set_tile_at(value, assets.tile("""
        transparency16
    """))
for value2 in tiles.get_tiles_by_type(assets.tile("""
    myTile3
""")):
    flower2 = sprites.create(img("""
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
        """),
        SpriteKind.flower)
    tiles.place_on_tile(flower2, value2)
    tiles.set_tile_at(value2, assets.tile("""
        transparency16
    """))