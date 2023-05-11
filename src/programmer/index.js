/*
 * @Author: 牛洪法
 * @Date: 2017-09-10 16:32:38
 * @LastEditors: 牛洪法 1242849166@qq.com
 * @LastEditTime: 2023-05-10 17:45:01
 * @FilePath: /骨架屏/Users/hfy/Project/english/programmer/index.js
 * @Description: 描述
 */
$(function(){
	
	initPage();
	
    var url = $('#audio').attr('src');

    // 点击发音图标里发音
    $('img.pronounce').click(function(){
        var word = $(this).parent().find('p').eq(0).text();
        newurl = url.replace('hello',word);
        $('#audio').attr('src',newurl).trigger('play');
    });

    // 点击单词时发音
    $('p.word').click(function(){
        var word = $(this).text();
        newurl = url.replace('hello',word);
        $('#audio').attr('src',newurl).trigger('play');
    })

    // 点击go按钮页面滚动条跳转
    $('.banner button').click(function(){
        $(window).scrollTop(404);
    })
	
	async function initPage () {
		console.log(222)
		console.log(await getWords())
	}
	async function getWords () {
		return new Promise((resolve) => {
			$.get(
				"js/word/word.programmer.json", 
				{}, 
				(res) => resolve(res)
			);
		})
	}
    
})
