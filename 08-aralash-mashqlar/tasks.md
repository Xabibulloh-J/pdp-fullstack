

---

## 1. Selsiydan Farengeytga ⭐ (arifmetik operatorlar)

`celsiusToFahrenheit(c)` — formula: `F = C × 9 / 5 + 32`.

```js
celsiusToFahrenheit(0);   // 32
celsiusToFahrenheit(100); // 212
celsiusToFahrenheit(-40); // -40
```

---

## 2. Ikkalasiga ham bo'linadimi? ⭐ (`%`, `&&`)

`isDivisibleBy(n, a, b)` — `n` ham `a` ga, ham `b` ga qoldiqsiz bo'linsa `true`.

```js
isDivisibleBy(30, 3, 5); // true
isDivisibleBy(9, 3, 5);  // false
```

---

## 3. Chegaralash ⭐ (`if` yoki ternary)

`clamp(n, min, max)` — `n` ni `[min, max]` oralig'iga keltiring: `min` dan kichik bo'lsa `min`, `max` dan katta bo'lsa `max`, aks holda `n` ning o'zi.

```js
clamp(5, 1, 10);  // 5
clamp(-3, 0, 10); // 0
clamp(42, 0, 10); // 10
```

---

## 4. Harfni sanash ⭐ (`for...of`)

`countChar(text, char)` — `text` da `char` necha marta uchrashini qaytarsin. Katta-kichik harf **farq qiladi** (`"A"` va `"a"` boshqa-boshqa).

```js
countChar("banana", "a"); // 3
countChar("Aa", "a");     // 1
```

---

## 5. Juft va toq yig'indilari ⭐ (`for...of` + `if`)

`evenOddSums(numbers)` — juft sonlar yig'indisi va toq sonlar yig'indisini obyektda qaytarsin.

```js
evenOddSums([1, 2, 3, 4, 5]); // { even: 6, odd: 9 }
evenOddSums([]);              // { even: 0, odd: 0 }
```

---

## 6. Chipta narxi ⭐⭐ (`if` zanjiri)

`ticketPrice(age, isStudent)` — qoidalar **shu tartibda** tekshiriladi:

1. 5 yoshdan kichik — **0** (bepul)
2. 12 yoshgacha (12 ham) — **5000**
3. 65 va undan katta — **6000**
4. talaba — **8000**
5. boshqalar — **12000**

```js
ticketPrice(4, true);   // 0
ticketPrice(20, true);  // 8000
ticketPrice(70, false); // 6000
```

> Tartib muhim: 70 yoshli talaba qancha to'laydi? Nega?

---

## 7. Tana massasi indeksi ⭐⭐ (formula + `if` zanjiri)

`bmiCategory(weightKg, heightM)` — `BMI = vazn / bo'y²`. Natija:

| BMI | Natija |
| --- | --- |
| `< 18.5` | `"kam vazn"` |
| `18.5 – 24.99` | `"normal"` |
| `25 – 29.99` | `"ortiqcha vazn"` |
| `30+` | `"semizlik"` |

```js
bmiCategory(70, 1.75); // "normal"  (BMI ≈ 22.9)
```

---

## 8. So'zlar soni ⭐⭐ (`for` + `if`)

`wordCount(sentence)` — gapdagi so'zlar sonini qaytarsin. So'zlar orasida bir nechta bo'sh joy, boshida/oxirida bo'sh joy bo'lishi mumkin. `split()` ishlatmang — harflar bo'ylab yuring.

```js
wordCount("salom dunyo");   // 2
wordCount("  a  b   c ");   // 3
wordCount("   ");           // 0
```

<details><summary>Maslahat</summary>

Yangi so'z — bo'sh joydan keyin kelgan birinchi bo'sh bo'lmagan harf. Buning uchun "hozir so'z ichidamanmi?" degan mantiqiy o'zgaruvchi saqlang.
</details>

---

## 9. Kabisa yillar soni ⭐⭐ (`for` + murakkab shart)

`leapYearsBetween(from, to)` — `from` dan `to` gacha (ikkalasi ham kiradi) nechta kabisa yil borligini qaytarsin.

Kabisa yil: 4 ga bo'linadi **va** 100 ga bo'linmaydi, **yoki** 400 ga bo'linadi.

```js
leapYearsBetween(2000, 2024); // 7
leapYearsBetween(1900, 1900); // 0
```

---

## 10. Mukammal son ⭐⭐ (`for` + `%`)

`isPerfectNumber(n)` — son o'zidan boshqa barcha bo'luvchilari yig'indisiga teng bo'lsa `true`. Masalan, `6 = 1 + 2 + 3`.

```js
isPerfectNumber(6);  // true
isPerfectNumber(28); // true  (1+2+4+7+14)
isPerfectNumber(12); // false
isPerfectNumber(1);  // false
```

---

## 11. Ikkilik sanoq sistemasi ⭐⭐ (`while`)

`numberToBinary(n)` — manfiy bo'lmagan butun sonni ikkilik satr ko'rinishida qaytarsin. `toString(2)` ishlatmang: sonni 2 ga bo'lib, qoldiqlarni teskari tartibda yig'ing.

```js
numberToBinary(5);   // "101"
numberToBinary(10);  // "1010"
numberToBinary(0);   // "0"
```

---

## 12. Tub sonlar ro'yxati ⭐⭐ (ichma-ich tsikl)

`primesUpTo(n)` — `n` gacha (n ham kiradi) barcha tub sonlar massivi.

```js
primesUpTo(10); // [2, 3, 5, 7]
primesUpTo(1);  // []
```

---

## 13. Piramida ⭐⭐ (ichma-ich tsikl)

`pyramid(n)` — `n` qatorli piramida (satrlar massivi). `i`-qatorda `n - i` ta bo'sh joy va `2i - 1` ta `"*"` bo'lsin. Oxirida ortiqcha bo'sh joy bo'lmasin.

```js
pyramid(3);
// ["  *",
//  " ***",
//  "*****"]
```

---

## 14. O'quvchi hisoboti ⭐⭐ (tsikl + shartlar)

`studentReport(scores)` — ballar massividan o'rtacha (bitta kasr raqamgacha yaxlitlangan, `Math.round(x * 10) / 10`) va baho qaytarsin:

- `90+` → `"A"`, `80+` → `"B"`, `70+` → `"C"`, `60+` → `"D"`, qolgani → `"F"`
- massiv bo'sh bo'lsa: `{ average: 0, grade: "F" }`

Baho **yaxlitlanmagan** o'rtacha bo'yicha aniqlanadi (`59.5` → `"F"`).

```js
studentReport([90, 80, 70]);  // { average: 80, grade: "B" }
studentReport([100, 95]);     // { average: 97.5, grade: "A" }
```

---

## 15. Parol kuchi ⭐⭐⭐ (`for...of` + shartlar)

`passwordStrength(password)` — to'rtta mezondan nechtasi bajarilganini sanang:

1. uzunligi kamida 8
2. kamida bitta raqam (`0`–`9`)
3. kamida bitta **katta** harf (`A`–`Z`)
4. kamida bitta maxsus belgi: `! @ # $ %`

Natija: 0–1 ta → `"zaif"`, 2–3 ta → `"o'rta"`, 4 ta → `"kuchli"`.

```js
passwordStrength("abc");       // "zaif"
passwordStrength("Abcdefg1");  // "o'rta"
passwordStrength("Abcdefg1!"); // "kuchli"
```

<details><summary>Maslahat</summary>

Har bir mezon uchun `false` bilan boshlanuvchi mantiqiy o'zgaruvchi oling va harflar bo'ylab yurib, mos kelganda `true` qiling.
</details>

---

## 16. Son topish o'yini ⭐⭐⭐ (tsikl + `return` + shartlar)

`guessGame(secret, guesses)` — o'yinchi navbatma-navbat taxmin qiladi. Har bir taxmin uchun maslahat:

- taxmin yashirin sondan kichik → `"kattaroq"` (yashirin son kattaroq)
- taxmin katta → `"kichikroq"`
- to'g'ri topdi → `"topdingiz"` va o'yin **shu yerda to'xtaydi**

Natija: `{ won, attempts, hints }` — `attempts` — qilingan urinishlar soni, `hints` — shu urinishlar maslahatlari.

```js
guessGame(5, [3, 8, 5, 9]);
// { won: true, attempts: 3, hints: ["kattaroq", "kichikroq", "topdingiz"] }

guessGame(7, [1, 2]);
// { won: false, attempts: 2, hints: ["kattaroq", "kattaroq"] }
```

> `5` dan keyingi `9` hisobga olinmaydi — tsiklni to'g'ri joyda to'xtating.
