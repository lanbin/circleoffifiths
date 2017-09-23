/**
 *  Circle of Fifths
 *  This game is for circle of fifths learning
 *  I love this circle, but can't remember it
 *  I hope this game will help me to remeber it and learn the developing of Phaser
 *
 *                    -- lanbin 2017-09-23
 */

/**
 * require base libray of Phaser
 */
require('pixi')
require('p2')

/**
 * require base style file
 */
require('normalize.css')
require('../style/index.less')

/**
 * [Phaser Game Engine]
 */
const Phaser = require('phaser')

/**
 * basic data
 */
var gameDom = document.querySelector('#game')
var gameDomStyle = gameDom.getBoundingClientRect()


var game = new Phaser.Game(
    gameDomStyle.width,
    gameDomStyle.height,
    'game',
    Phaser.AUTO,
    {
      preload: function(){},
      create: function(){},
      update: function(){}
    }
  )
