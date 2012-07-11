// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for Fluid column.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('clover.ui.scaffolding.FluidColumn');
goog.require('clover.ui.scaffolding.Grid');
goog.require('goog.ui.SplitPane');
goog.require('goog.ui.SplitPane.Orientation');



/**
 * @param {goog.ui.Component} firstComponent Left or Top component.
 * @param {goog.ui.Component} secondComponent Right or Bottom component.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @constructor
 * @extends {goog.ui.SplitPane}
 */
clover.ui.scaffolding.FluidColumn = function(firstComponent, secondComponent,
    opt_domHelper) {
  goog.base(this, firstComponent, secondComponent,
      goog.ui.SplitPane.Orientation.HORIZONTAL, opt_domHelper);
  // ���ׂĂ̗v�f�� clover.ui.scaffolding.GridRow �Ń��b�v���Ȃ��ƂˁB
  // mixin �p�����ł��Ȃ��̂� �Z�b�^�[�ƃQ�b�^�[��  clover.ui.scaffolding.GridR
  // ow �𐧌䂷��C���[�W�H
  // ���ɂ���قڒ��ۃN���X�Ƃ��ė��p����ȊO�̉����ł��Ȃ������B
};
goog.inherits(clover.ui.scaffolding.FluidColumn, goog.ui.SplitPane);
