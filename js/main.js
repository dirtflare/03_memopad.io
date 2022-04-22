'use strict'

// Todoのテキスト入力欄(text-input)
const textInput = document.getElementById('text-input')
// Todoのリスト部分(todo-list)
const todoList = document.getElementById('todo-list')

// 入力欄にTodoを入力したものをエンターでリストに追加(addEventListener)
textInput.addEventListener('keydown', e => {
    // テキストボックスの中にある入力欄の値（テキスト)←value / trim()で文字の前後の空白にリーチ
    const text = textInput.value.trim();
    // 値が空白の場合&エンター以外が押された場合は処理せずエンター実行のみ動作
    if (text === '' || e.key !== 'Enter') {
        return;
    }

    // ボタン操作で動作するタグ li, span, button
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    // クラスにlist-itemをつける
    li.classList.add('list-item');
    // todoのテキスト部分（入力欄に入れた値）
    span.textContent = text;
    // span.classList.add('todo-text');

    // ボタンの属性振り
    button.textContent = '削除';
    button.type = 'button';
    button.classList.add('delete-button');
    // クリックされた時の処理(addEventListener)
    button.addEventListener('click', e => {
        // removeChildでulタグの中の要素を削除→e.target（削除ボタン)→closestで遡って直近のliタグを認識・削除
        todoList.removeChild(e.target.closest('li'));
    });

    // liタグの中に（）入れる
    li.appendChild(span);
    li.appendChild(button);
    // ulタグ(todoList)の中にliタグを入れる
    todoList.appendChild(li);

    textInput.value = '';

});





