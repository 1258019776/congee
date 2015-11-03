/*global $,CKEDITOR */

define(['jquery', 'ckeditor', 'ckeditor', 'jquery.mixitup', 'jquery.pwstabs', 'jquery.nicescroll'], function() {
  'use strict';
  var init = function () {
    /**
     * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
     * For licensing, see LICENSE.md or http://ckeditor.com/license
     */

    CKEDITOR.editorConfig = function (config) {
      config.allowedContent = true;
      config.language = 'zh-cn';
      //config.skin = 'minimalist';
      config.pasteFilter = null;
      config.forcePasteAsPlainText = false;
      config.allowedContent = true;
      config.pasteFromWordRemoveFontStyles = false;
      config.pasteFromWordRemoveStyles = false;
      config.extraPlugins = 'floating-tools,notification,autosave,templates,markdown,wordcount,' +
        'clipboard,pastefromword,smiley,lineutils,widget,fontawesome,dialog,music';
      //['eqneditor']
      config.height = 637;
      config.contentsCss = 'ckeditor/plugins/fontawesome/font-awesome/css/font-awesome.min.css';
      config.font_names = '\'Helvetica Neue\';Hiragino Sans GB;STHeiti Light;STHeiti;STKaiti;STSong;STFangsong;';

      config.wordcount = {

        // Whether or not you want to show the Paragraphs Count
        showParagraphs: true,

        // Whether or not you want to show the Word Count
        showWordCount: true,

        // Whether or not you want to show the Char Count
        showCharCount: true,

        // Whether or not you want to count Spaces as Chars
        countSpacesAsChars: true,

        // Whether or not to include Html chars in the Char Count
        countHTML: true
      };

      config.toolbar = [
        {name: 'document', items: ['Preview', 'Music', 'Smiley', 'FontAwesome']},
        {name: 'clipboard', items: ['Undo', 'Redo']},
        {
          name: 'basicstyles',
          items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat']
        },
        {
          name: 'paragraph',
          items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv',
            '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
        },
        '/',
        {name: 'styles', items: ['Format', 'Font', 'FontSize']},
        {name: 'colors', items: ['TextColor', 'BGColor']},
        {name: 'tools', items: ['Maximize', 'ShowBlocks', 'Source', 'Markdown']}
      ];
    };


    var congee = CKEDITOR.replace('congee', {
      uiColor: '#fafafa'
    });

    congee.on('change', function (evt) {

    });

    congee.on('instanceReady', function (ev) {
      $('.tabset8').pwstabs({
        effect: 'slideleft',
        defaultTab: 1,
        tabsPosition: 'vertical',
        verticalPosition: 'left'
      });
      $('#Container').mixItUp().on('click', '.mix', function(event){
        var template = $(event.currentTarget).html();
        congee.insertHtml(template);
      });
    });

    $(document).ready(function () {
      $('#Container').niceScroll({
        mousescrollstep: 40
      });
    });
  };

  var config = {
    'defaultColor': '#4caf50',
    'defaultFontSize': '20px'
  };

  var colorPicker = function (changeCB) {
    $('#colorpicker').spectrum({
      showPaletteOnly: true,
      togglePaletteOnly: true,
      togglePaletteMoreText: 'more',
      togglePaletteLessText: 'less',
      color: '#4caf50',
      palette: [
        ['#1abc9c','#16a085','#2ecc71','#27ae60','#4caf50','#8bc34a','#cddc39'],
        ['#3498db','#2980b9','#34495e','#2c3e50','#2196f3','#03a9f4','#00bcd4','#009688'],
        ['#e74c3c','#c0392b','#f44336'],
        ['#e67e22','#d35400','#f39c12','#ff9800','#ff5722','#ffc107'],
        ['#f1c40f','#ffeb3b'],
        ['#9b59b6','#8e44ad','#9c27b0','#673ab7','#e91e63','#3f51b5'],
        ['#795548'],
        ['#9e9e9e','#607d8b','#7f8c8d','#95a5a6','#bdc3c7'],
        ['#ecf0f1','efefef']
      ],
      change: changeCB
    });
  };

  return {
    init: init,
    config: config,
    colorPicker: colorPicker
  };
});
