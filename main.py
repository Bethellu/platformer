@namespace
class SpriteKind:
    coin = SpriteKind.create()
list2: List[number] = []

def on_overlap_tile(sprite, location):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
    """),
    on_overlap_tile2)

def on_a_pressed():
    if hop.vy == 0:
        hop.vy = -150
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

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
for value in list2:
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