const mineflayer = require('mineflayer')
const vec3 = require('vec3')
const delay = require('util').promisify(setTimeout)

var settings = {
    host: 'play.craxecraft.com', // minecraft server ip
    // port: '43467',
    username: 'KULLANICI ADI',
    password: 'OYUNSİFRE',
    version: '1.8.8',
    auth: 'offline'
}

const botKarakter = () => {

const bot = mineflayer.createBot(settings);

const cac = 9
const dirt = 20
const sand = 9
const fence = 6


  // Sunucuya bağlanın
  bot.once("spawn", () => {
    bot.chat(`/login ${settings.password}`)
    console.log(`${settings.host} Sunucusuna ${settings.username} Olarak Giriş Yapıldı!`)


    // 15 saniye sonra mesaj gönder
    setTimeout(() => {
      bot.chat("/skyblock")
    }, 7500)

     // 30 saniye sonra mesaj gönder
     setTimeout(() => {
      bot.chat("/home")
    }, 8500)
  });


async function digLayer() {

    await bot.dig(bot.blockAt(bot.entity.position.offset(2, -2, 0)), true);
    await bot.dig(bot.blockAt(bot.entity.position.offset(2, -2, 2)), true);
    await bot.dig(bot.blockAt(bot.entity.position.offset(0, -2, 2)), true);
    await bot.dig(bot.blockAt(bot.entity.position.offset(-2, -2, 2)), true);
    await bot.dig(bot.blockAt(bot.entity.position.offset(-2, -2, 0)), true);
    await bot.dig(bot.blockAt(bot.entity.position.offset(-2, -2, -2)), true);
    await bot.dig(bot.blockAt(bot.entity.position.offset(0, -2, -2)), true);
    await bot.dig(bot.blockAt(bot.entity.position.offset(2, -2, -2)), true);
}

async function buildUp() {
    await bot.equip(bot.inventory.items().find(item => item.name === 'dirt'), "hand")
    const referenceBlock = bot.blockAt(bot.entity.position.offset(0, -1, 0))
    const jumpY = Math.floor(bot.entity.position.y) + 1.0
    bot.setControlState('jump', true)
    bot.on('move', placeIfHighEnough)

    let tryCount = 0

    async function placeIfHighEnough() {
        if (bot.entity.position.y > jumpY) {
            try {
                await bot.placeBlock(referenceBlock, vec3(0, 1, 0))
                bot.setControlState('jump', false)
                bot.removeListener('move', placeIfHighEnough)
                //bot.chat('Placing a block was successful')
            } catch (err) {
                tryCount++
                if (tryCount > 10) {
                    bot.chat(err.message)
                    bot.setControlState('jump', false)
                    bot.removeListener('move', placeIfHighEnough)
                }
            }
        }
    }
}

async function buildUpSand() {
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    const referenceBlock = bot.blockAt(bot.entity.position.offset(0, -1, 0))
    const jumpY = Math.floor(bot.entity.position.y) + 1.0
    bot.setControlState('jump', true)
    bot.on('move', placeIfHighEnough)

    let tryCount = 0

    async function placeIfHighEnough() {
        if (bot.entity.position.y > jumpY) {
            try {
                await bot.placeBlock(referenceBlock, vec3(0, 1, 0))
                bot.setControlState('jump', false)
                bot.removeListener('move', placeIfHighEnough)
                //bot.chat('Placing a block was successful')
            } catch (err) {
                tryCount++
                if (tryCount > 10) {
                    bot.chat(err.message)
                    bot.setControlState('jump', false)
                    bot.removeListener('move', placeIfHighEnough)
                }
            }
        }
    }
}

async function buildCactus() {
    await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(1, -3, 1)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-1, -3, 1)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-1, -3, -1)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(1, -3, -1)), vec3(0, 1, 0))
}

async function buildlayer() {

        
    //Plaziert den Sand
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -2, 0)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -2, 2)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -2, 2)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -2, 2)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -2, 0)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -2, -2)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -2, -2)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -2, -2)), vec3(0, 1, 0))
    
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(1, -2, 1)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-1, -2, 1)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-1, -2, -1)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(1, -2, -1)), vec3(0, 1, 0))

}

async function buildString() {
    //Plaziert den string
    await bot.equip(bot.inventory.items().find(item => item.name === 'string'), "hand")

    //dış hatlar
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -2, -2)), vec3(1, 0, 0)); // sağ ön
    await bot.equip(bot.inventory.items().find(item => item.name === 'string'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -2, -2)), vec3(0, 0, 1)) // sağ taraf ön
    await bot.equip(bot.inventory.items().find(item => item.name === 'string'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -2, 0)), vec3(0, 0, 1)) // sağ taraf arka
    await bot.equip(bot.inventory.items().find(item => item.name === 'string'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -2, 2)), vec3(1, 0, 0)); // arka sağ
    await bot.equip(bot.inventory.items().find(item => item.name === 'string'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -2, 2)), vec3(-1, 0, 0)); // arka sol
    await bot.equip(bot.inventory.items().find(item => item.name === 'string'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -2, 0)), vec3(0, 0, 1)) // sol taraf arka
    await bot.equip(bot.inventory.items().find(item => item.name === 'string'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -2, -2)), vec3(0, 0, 1)) // sol taraf ön
    await bot.equip(bot.inventory.items().find(item => item.name === 'string'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -2, -2)), vec3(-1, 0, 0)); // sol ön

    // iç hatlar
    await bot.equip(bot.inventory.items().find(item => item.name === 'string'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -2, -2)), vec3(0, 0, 1))
    await bot.equip(bot.inventory.items().find(item => item.name === 'string'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -2, 0)), vec3(-1, 0, 0));
    await bot.equip(bot.inventory.items().find(item => item.name === 'string'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -2, 2)), vec3(0, 0, -1));
    await bot.equip(bot.inventory.items().find(item => item.name === 'string'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -2, 0)), vec3(1, 0, 0));

}

async function DigDirt(){
    // -3 te bulunan toprağı kır
    await bot.dig(bot.blockAt(bot.entity.position.offset(0, -2, 0)), true);
    
    // Bekleme işlemi
    await delay(1000); // 1 saniye bekleyelim (gerekirse süreyi artırabilirsiniz)

    await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -3, 0)), vec3(0, 1, 0))
}

async function DigDirt2(){
    // -3 te bulunan toprağı kır
    await bot.dig(bot.blockAt(bot.entity.position.offset(0, -2, 0)), true);
    await bot.dig(bot.blockAt(bot.entity.position.offset(0, -3, 0)), true);
    
    // Bekleme işlemi
    await delay(1000); // 1 saniye bekleyelim (gerekirse süreyi artırabilirsiniz)

    await bot.equip(bot.inventory.items().find(item => item.name === 'string'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -4, 0)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'string'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -3, 0)), vec3(0, 1, 0))
    
    await bot.dig(bot.blockAt(bot.entity.position.offset(0, -3, 0)), vec3(0, 1, 0))
}

async function buildSecondLayer () {
    
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    
    // kum ekleme
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -2, -1)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -2, 1)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(1, -2, 2)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-1, -2, 2)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -2, 1)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -2, -1)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-1, -2, -2)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(1, -2, -2)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(1, -2, 0)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -2, 1)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-1, -2, 0)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -2, -1)), vec3(0, 1, 0))
}

async function buildStringSecond() {
    //Plaziert den string
    await bot.equip(bot.inventory.items().find(item => item.name === 'string'), "hand")

    //dış hatlar
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -2, 0)), vec3(0, 1, 0))
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -1, 0)), vec3(0, 1, 0))

    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -2, 2)), vec3(0, 1, 0))
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -1, 2)), vec3(0, 1, 0))

    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -2, 2)), vec3(0, 1, 0))
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -1, 2)), vec3(0, 1, 0))

    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -2, 2)), vec3(0, 1, 0))
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -1, 2)), vec3(0, 1, 0))

    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -2, 0)), vec3(0, 1, 0))
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -1, 0)), vec3(0, 1, 0))

    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -2, -2)), vec3(0, 1, 0))
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -1, -2)), vec3(0, 1, 0))

    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -2, -2)), vec3(0, 1, 0))
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -1, -2)), vec3(0, 1, 0))

    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -2, -2)), vec3(0, 1, 0))
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -1, -2)), vec3(0, 1, 0))



    
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(1, -2, 1)), vec3(0, 1, 0))
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(1, -1, 1)), vec3(0, 1, 0))
    
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-1, -2, 1)), vec3(0, 1, 0))
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-1, -1, 1)), vec3(0, 1, 0))
    
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-1, -2, -1)), vec3(0, 1, 0))
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-1, -1, -1)), vec3(0, 1, 0))
    
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(1, -2, -1)), vec3(0, 1, 0))
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(1, -1, -1)), vec3(0, 1, 0))


    await bot.dig(bot.blockAt(bot.entity.position.offset(2, -1, 0)), vec3(0, 1, 0))
    await bot.dig(bot.blockAt(bot.entity.position.offset(2, -1, 2)), vec3(0, 1, 0))
    await bot.dig(bot.blockAt(bot.entity.position.offset(0, -1, 2)), vec3(0, 1, 0))
    await bot.dig(bot.blockAt(bot.entity.position.offset(-2, -1, 2)), vec3(0, 1, 0))
    await bot.dig(bot.blockAt(bot.entity.position.offset(-2, -1, 0)), vec3(0, 1, 0))
    await bot.dig(bot.blockAt(bot.entity.position.offset(-2, -1, -2)), vec3(0, 1, 0))
    await bot.dig(bot.blockAt(bot.entity.position.offset(0, -1, -2)), vec3(0, 1, 0))
    await bot.dig(bot.blockAt(bot.entity.position.offset(2, -1, -2)), vec3(0, 1, 0))


    
    await bot.dig(bot.blockAt(bot.entity.position.offset(1, -1, 1)), vec3(0, 1, 0))
    await bot.dig(bot.blockAt(bot.entity.position.offset(-1, -1, 1)), vec3(0, 1, 0))
    await bot.dig(bot.blockAt(bot.entity.position.offset(-1, -1, -1)), vec3(0, 1, 0))
    await bot.dig(bot.blockAt(bot.entity.position.offset(1, -1, -1)), vec3(0, 1, 0))
}

async function buildSecondLayerCactus () {

    await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")

    //kaktüs üstüne çıkma
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -1, -1)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -1, 1)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(1, -1, 2)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-1, -1, 2)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -1, 1)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -1, -1)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-1, -1, -2)), vec3(0, 1, 0))
    await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
    await bot.placeBlock(bot.blockAt(bot.entity.position.offset(1, -1, -2)), vec3(0, 1, 0))
}

async function cactus(x){
    for(let layer =0; layer < x; layer++){

        //Plaziert den Kaktus
        await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
        await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -1, 0)), vec3(0, 1, 0))
        await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
        await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -1, 2)), vec3(0, 1, 0))
        await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
        await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -1, 2)), vec3(0, 1, 0))
        await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
        await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -1, 2)), vec3(0, 1, 0))
        await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
        await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -1, 0)), vec3(0, 1, 0))
        await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
        await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-2, -1, -2)), vec3(0, 1, 0))
        await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
        await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -1, -2)), vec3(0, 1, 0))
        await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
        await bot.placeBlock(bot.blockAt(bot.entity.position.offset(2, -1, -2)), vec3(0, 1, 0))

        // kumla 1 blok yukarı
        await buildUpSand()
        await delay(500)

        // toprakla 1 blok yukarı
        await buildUp()
        await delay(500)

        // ipleri yerleştir
        await buildString()
        await delay(500)

        // ikinci kat kum
        await buildSecondLayer()
        await delay(500)

        // -2 den 1 blok toprak kırma
        await DigDirt()
        await delay(500)

        // iç 4 kaktüs yerleştirme
        await buildCactus()
        await delay(500)

        // ipleri yerleştir
        await buildStringSecond()
        await delay(500)

        // 2. kat kaktüs yerleştir
        await buildSecondLayerCactus()
        await delay(500)
        
        // toprakla 1 blok yukarı
        await buildUp()
        await delay(500)
        
        // toprakla 1 blok yukarı
        await buildUp()
        await delay(500)

        // -2 den 1 blok toprak kırma
        await DigDirt2()
        await delay(500)
        
        // toprakla 1 blok yukarı
        await buildUp()
        await delay(500)
        await bot.dig(bot.blockAt(bot.entity.position.offset(0, -2, 0)), vec3(0, 1, 0))

        await bot.equip(bot.inventory.items().find(item => item.name === 'sand'), "hand")
        await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -3, 0)), vec3(0, 1, 0))
        
        await bot.dig(bot.blockAt(bot.entity.position.offset(0, -1, 0)), vec3(0, 1, 0))
  
        await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
        await bot.placeBlock(bot.blockAt(bot.entity.position.offset(1, -3, 0)), vec3(0, 1, 0))
        await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
        await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -3, 1)), vec3(0, 1, 0))
        await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
        await bot.placeBlock(bot.blockAt(bot.entity.position.offset(-1, -3, 0)), vec3(0, 1, 0))
        await bot.equip(bot.inventory.items().find(item => item.name === 'cactus'), "hand")
        await bot.placeBlock(bot.blockAt(bot.entity.position.offset(0, -3, -1)), vec3(0, 1, 0))

        // kum + dış kaktüs
        await buildlayer()
        await delay(500)

    }
}


bot.on('chat', (username, message)=>{
    if (username === bot.username)return
    if (message.startsWith("kat")){
        const msg = message.split(" ")

        cactus(msg[1])
    }else if(message.startsWith("calculate")){
        const calcu = message.split(" ")

        bot.chat(`Miktarda hata var ${cac * calcu[1]} Kaktus, ${dirt * calcu[1]} ve, ${sand * calcu[1]} Sand ve ${fence * calcu[1]} miktarında!}` )
        
    }

    if (message.startsWith("tpa")){
        bot.chat(`/tpa aesir`)
    }

    if (message.startsWith("hm")){
        bot.chat(`/home`)
    }

    if (message.startsWith("sthm")){
        bot.chat(`/sethome`)
    }
})


bot.on('error', (err) => {
    if (err.code === 'ECONNREFUSED') {
      console.log(`Sunucuya Bağlanırken Hata Oluştu / ${err.adress}:${err.port}`)
    }
    else {
      console.log(`Tanımlanamayan hata: ${err}`)
    }
  });

bot.on('kicked', console.log)
bot.on('error', console.log)
}
botKarakter();