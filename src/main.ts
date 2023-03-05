import kaboom from 'kaboom'
import { KaboomCtx } from 'kaboom'

const k = kaboom({
    global: true,
    scale: 1,
    debug: true,
    background: [0,0,0,1]
})

k.loadRoot('./assets/')
k.loadSprite('block', 'block.png')

function createLabel(k: KaboomCtx, message: string) {
    k.add([
        k.text(message, {
            size: 32
        }),
        k.pos(k.width() * 0.5, k.height() * 0.5),
        k.color(255,255,255),
        k.origin('center')
    ])

    k.add([
        k.sprite('block'),
        k.pos(100, 100)
    ])
}

k.scene('main', () => {
    createLabel(k, 'Helllo to Kaboom.js!') 
})

k.go('main')

