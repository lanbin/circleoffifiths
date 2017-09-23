/**
 * [upperFirstChar upper the first character of string]
 * @param  {[String]} str [string input]
 * @return {[String]}     [result string]
 */
export function upperFirstChar(str) {
  if (typeof str !== 'string') return ''
  return str.replace(/^\S/, (c) => c.toUpperCase())
}

/**
 * [nonToUnderline replace all non-whitespace character to underline]
 * @param  {[String]} str [string input]
 * @return {[String]}     [result string]
 */
export function nonToUnderline(str) {
  if (typeof str !== 'string') return ''
  return str.replace(/\s/g, '_')
}

/**
 * [extendsGroup Phaser.Group extend function]
 * @param  {[Object]}    opt  [some config]
 * @param  {[Function]}    ex_body [real extend function body]
 * @param  {...[any]} args [the argument to ex_body function]
 * @return {[Phaser.Group]}         [extended Phaser.Group sub object]
 */
export function extendsGroup(opt, ex_body, ...args) {
  var _opt = Object.assign({
        name: 'group_' + Math.floor(Math.random() * 1e4),
        parent: null
      },
      opt),
    bigName = upperFirstChar(_opt['name'])

  /**
   * [ex_Group extended Phaser.Group constructor]
   * @param  {[Phaser.Game]} game
   */
  var ex_Group = function(game) {
    Phaser.Group.call(this,
      game,
      _opt.parent,
      bigName, !!_opt.addToStage, !!_opt.enableBody,
      _opt.physicsBodyType || Phaser.Physics.ARCADE)

    ex_body.call(this, game, ...args)
  }

  ex_Group.prototype = Object.create(Phaser.Group.prototype)
  ex_Group.prototype.constructor = ex_Group

  return ex_Group
}