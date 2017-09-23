/**
 *  Circle of Fifths
 *  This game is for circle of fifths learning
 *  I love this circle, but can't remember it
 *  I hope this game will help me to remeber it and learn the developing of Phaser
 *
 *                    -- lanbin 2017-09-23
 */

/**
 * import base libray of Phaser
 */
import 'pixi'
import 'p2'

/**
 * import base style file
 */
import 'normalize.css'
import '../style/index.less'

/**
 * Phaser Game Engine
 */
import Phaser from 'phaser'

/**
 * add plugins
 */
import 'phaser-plugin-advanced-timing'
import 'phaser-plugin-scene-graph'
import '../plugins/phaser-plugin-save-cpu.js'

/**
 * import Scenes
 */
import WelcomeScene from './scenes/welcome.js'

/**
 * basic data
 */
var gameDom = document.querySelector('#game')
var gameDomStyle = gameDom.getBoundingClientRect()


var game = new Phaser.Game(
  gameDomStyle.width,
  gameDomStyle.height,
  Phaser.AUTO,
  gameDom, {
    init: function() {
      var plugins = game.plugins,
        debug = game.debug
        // add plugins
        // save cpu plugin for static display
      plugins.add(Phaser.Plugin.SaveCPU)

      if (process.env.NODE_ENV == 'dev') {
        plugins.add(Phaser.Plugin.AdvancedTiming, {
          mode: 'graph'
        })
        debug.gameInfo(0, 140)

        // print the display tree
        plugins.add(Phaser.Plugin.SceneGraph)
      }
    },
    preload: function() {},
    create: function() {
      var welcomeScene = new WelcomeScene(game)
        // add welcomeScene to stage
      game.stage.addChild(welcomeScene)
    },
    render: function() {
      if (process.env.NODE_ENV == 'dev') {
        var debug = game.debug
        debug.renderGraph(game.stage, game.width - 300, 20, debug.font, debug.lineHeight)
      }
    },
    update: function() {}
  }
)