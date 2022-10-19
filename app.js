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
    const asciiBinFromText = getTextInBinary(text);
    console.log('_01_ Представляємо літери у двійковому вигляді за таблицею ASCII :>> ', text, asciiBinFromText);

    // _02_ Робимо початкову перестановку IP бітів вхіного блоку
    const initiallyPermutatedBits = makeInitialPermutation(asciiBinFromText);
    console.log('_02_ Робимо початкову перестановку IP бітів вхіного блоку :>> ', initiallyPermutatedBits);

    // _03_ Ділимо цей блок на ліву та праву частини по 32 біти
    const leftAndRightParts = divideBlockIntoLeftAndRight(initiallyPermutatedBits);
    console.log('_03_ Ділимо цей блок на ліву та праву частини по 32 біти :>> ', leftAndRightParts);

    // _04_ Формуємо ключ раунду
    let roundKey = formRoundKey(key);
    console.log('_04_ Формуємо ключ раунду :>> ', key, roundKey);

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

// Функція для дії _01_ Представляємо літери у двійковому вигляді за таблицею ASCII
function getTextInBinary(text) {
    const asciiBinFromText = [];
    for (let symbol of text) {
        asciiBinFromText.push(symbolToBinary(symbol));
    }
    return asciiBinFromText;
}

// Функція для дії _02_ Робимо початкову перестановку IP бітів вхіного блоку
function makeInitialPermutation(asciiBinFromText) {
    const initialPermutationTable = [
        [58, 50, 42, 34, 26, 18, 10, 2],
        [60, 52, 44, 36, 28, 20, 12, 4],
        [62, 54, 46, 38, 30, 22, 14, 6],
        [64, 56, 48, 40, 32, 24, 16, 8],
        [57, 49, 41, 33, 25, 17, 9, 1],
        [59, 51, 43, 35, 27, 19, 11, 3],
        [61, 53, 45, 37, 29, 21, 13, 5],
        [63, 55, 47, 39, 31, 23, 15, 7]
    ];
    const initiallyPermutatedBits = [];
    const getNewByte = (row) => {
        let result = '';
        for (let index of row) {
            // Перевіряємо, чи кратне значення index кількості елементів масиву asciiBinFromText
            const isIndexMultiplesOfInitialPermutationTableLength = index % asciiBinFromText.length == 0;
            let i = isIndexMultiplesOfInitialPermutationTableLength ?
                index / initialPermutationTable.length - 1 :
                Math.floor(index / initialPermutationTable.length);
            let j = isIndexMultiplesOfInitialPermutationTableLength ?
                asciiBinFromText[0].length - 1 :
                index % asciiBinFromText[0].length - 1;
            // console.log('index :>> ', index); // y
            // console.log('i :>> ', i); // y
            // console.log('j :>> ', j); // y
            result += asciiBinFromText[i][j];
        }
        // console.log('result :>> ', result); // y
        return result;
    };
    for (let row of initialPermutationTable) {
        initiallyPermutatedBits.push(getNewByte(row));
    }
    return initiallyPermutatedBits;
}

// Функція для дії _03_ Ділимо цей блок на ліву та праву частини по 32 біти
function divideBlockIntoLeftAndRight(initiallyPermutatedBits) {
    const result = {'left': [], 'right': []};
    const arrayLength = initiallyPermutatedBits.length;
    const halfArrayLength = arrayLength / 2;
    result.left = initiallyPermutatedBits.slice(0, halfArrayLength);
    result.right = initiallyPermutatedBits.slice(halfArrayLength, arrayLength);
    return result;
}

// Функція для дії _04_ Формуємо ключ раунду
function formRoundKey(keyText) {
    const result = getTextInBinary(keyText);
    return result;
}

// Функція для дії _05_ Здійснюємо перестановку PC-1


// Функція для дії _06_ Розбиваємо цю послідовність біт на 2 частини по 28 біт


// Функція для дії _07_ Виконуємо циклічний зсув обох частин на 1 біт вліво


// Функція для дії _08_ З'єднуємо обидві частини


// Функція для дії _09_ До цієї частини застосовуємо перестановку PC-2


// Функція для дії _10_ Функція раунду


// Функція для дії _11_ Застосовуємо до R функцію розширення E


// Функція для дії _12_ Складаємо даний вектор (результат виконання попереднього кроку) та ключ раунду порозрядно за модулем 2 (виконуємо між ними операцію XOR)


// Функція для дії _13_ Розбиваємо цю 48-бітну послідовність на 8 блоків по 6 біт


// Функція для дії _14_ Подаємо кожен з отриманих блоків на вхід відповідному S-блоку


// Функція для дії _15_ Складаємо з результатів попереднього кроку послідовність 4-бітних векторів


// Функція для дії _16_ Застосовуємо до цієї послідовності (довжиною 32 біт) перестановку P


// Функція для дії _17_ Порозрядно складаємо по модулю 2 (виконуємо між ними операцію XOR) значення функції раунду з лівою частиною вхідного блоку L


// Функція для дії _18_ Заключні дії алгоритму DES


// Функція для дії _19_ Результат 16 раундів (за умовою Лабораторної - 1 раунду) розбиваємо на дві 32-бітні посліовності та міняємо їх місцями


// Функція для дії _20_ Застосовуємо до отриманих 64 біт наступну перестановку (IP-1)


// Функція для дії _21_ Переводимо послідовність 8-бітних блоків в ASCII-сивмоли


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