
import { extendsGroup } from '@/lib/utils.js'



export default extendsGroup({
  name: 'Welcome'
}, function(game){
  var backgroundSprite = new Phaser.Sprite(game)
  backgroundSprite.width = game.width
  backgroundSprite.height = game.height
  backgroundSprite.tint = 0xff0000
  this.add(backgroundSprite)

  console.log(this)
  console.log('i will create a welcome scenes here')
})