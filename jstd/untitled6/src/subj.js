/**
 * Created with JetBrains PhpStorm.
 * User: Elena.Pogorelova
 * Date: 8/22/12
 * Time: 6:51 PM
 * To change this template use File | Settings | File Templates.
 */

var Subject = function () {
};
/**
 * @param {boolean} flag
 * @param {number} a
 * @param {number} b
*/
Subject.prototype.addition = function (a, b, flag) {
    if (flag) {
        return a + b;
    }
    return "not counted";
};
