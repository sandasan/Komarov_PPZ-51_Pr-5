// #region 1
// Текст за замовчуванням для Завдання
const defaultText = 'komarovo';
const defaultKey = 'password';
// #endregion 1

// Функція генерування ключа для Завдання
function generateKey() {
    // Масив для запам'ятовування зенерованих чисел для формування випадкового ключа
    let result = '';
    // Формуємо ключ з масива згенерованих чисел та вставляємо його в поле для вводу ключа
    document.getElementById('taskKey').value = result;
};

// Функція шифрування текста для Завдання
function submit(text = defaultText, key = defaultKey) {
    let result = '';
    for (let char of text) {
        
    }
    document.getElementById('taskAnswer').value = result;
};

// Функція для отримання випадкового цілого числа у діапазоні від 0 до max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Функція для приведення числа до двозначного вигляду та у вигляді рядка (тексту)
function getTwoDigitNumberAsString(number) {
    return number.toString().length == 1 ? '0' + number.toString() : number.toString();
}

// Функція отримання модульної суми
function getModuleSum(number1, number2, maxNumber) {
    return (number1 + number2) % maxNumber;
}

// Функція для отримання позиції (i, j) символа
function getSymbolPosition(symbol, key) {
    for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < key[0].length; j++) {
            if (key[i][j] == symbol) {
                let result = {};
                result.i = i;
                result.j = j;
                return result;
            }
        }
    }
};