'use strict';

function openFolderDialog(){
    var inputField = document.querySelector('#folderselector');
    inputField.addEventListener('change', function(){
        var folderPath = this.value;
        alert('Folder path is '+folderPath);
    }, false);
    inputField.click();
}

function bindSelectFolderClick(){
    var button = document.querySelector('#select_folder');
    button.addEventListener('click', function(){
        openFolderDialog();
    });
}

window.onload = function(){
    bindSelectFolderClick();
}