


let textarea = document.getElementById('area');
let characterCount = document.getElementById('char');
let wordCount = document.getElementById('word');

textarea.addEventListener('input', function() {
    countCharacters();
    countWords();
});

function countCharacters() {
    let content = textarea.value.trim();
    characterCount.textContent = content.length;
    characterCount.style.color = 'black';
}

function countWords() {
    let content = textarea.value.trim();
    let wordList = content.split(/\s/);
    let words = wordList.filter(function(element) {
        return element != "";
    });
    wordCount.textContent = words.length;
}