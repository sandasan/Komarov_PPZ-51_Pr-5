// Текст за замовчуванням для Завдання
const defaultText = 'komarovo';
// Ключ за замовчуванням для Завдання
const defaultKey = 'password';

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
    // _01_ Представляємо літери у двійковому вигляді за таблицею ASCII
    for (let char of text) {

    }
    // _02_ Робимо початкову перестановку IP бітів вхіного блоку

    // _03_ Ділимо цей блок на ліву та праву частини по 32 біти

    // _04_ Формуємо ключ раунду

    // _05_ Здійснюємо перестановку PC-1

    // _06_ Розбиваємо цю послідовність біт на 2 частини по 28 біт

    // _07_ Виконуємо циклічний зсув обох частин на 1 біт вліво

    // _08_ З'єднуємо обидві частини

    // _09_ До цієї частини застосовуємо перестановку PC-2

    // _10_ Функція раунду

    // _11_ Застосовуємо до R функцію розширення E

    // _12_ Складаємо даний вектор (результат виконання попереднього кроку) та ключ раунду порозрядно за модулем 2 (виконуємо між ними операцію XOR)

    // _13_ Розбиваємо цю 48-бітну послідовність на 8 блоків по 6 біт

    // _14_ Подаємо кожен з отриманих блоків на вхід відповідному S-блоку

    // _15_ Складаємо з результатів попереднього кроку послідовність 4-бітних векторів

    // _16_ Застосовуємо до цієї послідовності (довжиною 32 біт) перестановку P

    // _17_ Порозрядно складаємо по модулю 2 (виконуємо між ними операцію XOR) значення функції раунду з лівою частиною вхідного блоку L

    // _18_ Заключні дії алгоритму DES

    // _19_ Результат 16 раундів (за умовою Лабораторної - 1 раунду) розбиваємо на дві 32-бітні посліовності та міняємо їх місцями

    // _20_ Застосовуємо до отриманих 64 біт наступну перестановку (IP-1)

    // _21_ Переводимо послідовність 8-бітних блоків в ASCII-сивмоли

    // Записуємо значення результату в його поле на веб-сторінці
    document.getElementById('taskAnswer').value = result;
};

// Функція для отримання символа в двійковому вигляді за таблицею ASCII
function symbolToBinary(symbol) {
    const symbolCode = symbol.charCodeAt(0);
    const bits = 8;
    return byteString(symbolCode, bits);
}

// Функція для переведення десяткового числа до двійкового у вигляді рядку довжиною bits біт
function byteString(number, bits) {
    if (number < 0 || number > 255 || number % 1 !== 0) {
        throw new Error(number + " does not fit in a byte");
    }
    return (getStringWithSymbol("0", bits - 1) + number.toString(2)).substr(-1 * bits);
}

// Функція для отримання рядку з повторень символу symbol times разів
function getStringWithSymbol(symbol, times) {
    return symbol.repeat(times);
}

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