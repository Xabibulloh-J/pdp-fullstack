const util = require("util");
const m = require("./starter.js");

let otdi = 0;
let yiqildi = 0;

function teng(olingan, kutilgan) {
  if (!util.isDeepStrictEqual(olingan, kutilgan)) {
    throw new Error(
      `kutilgan: ${util.inspect(kutilgan)}, olingan: ${util.inspect(olingan)}`
    );
  }
}

function sinov(nom, fn) {
  try {
    fn();
    otdi++;
    console.log(`  ✓ ${nom}`);
  } catch (xato) {
    yiqildi++;
    console.log(`  ✗ ${nom}\n      ${xato.message.split("\n")[0]}`);
  }
}

function yakun() {
  console.log(`\nNatija: ${otdi} ta o'tdi, ${yiqildi} ta yiqildi`);
  process.exitCode = yiqildi ? 1 : 0;
}

const yaqin = (a, b) => Math.abs(a - b) < 1e-9;

sinov("1. celsiusToFahrenheit", () => {
  teng(m.celsiusToFahrenheit(0), 32);
  teng(m.celsiusToFahrenheit(100), 212);
  teng(m.celsiusToFahrenheit(-40), -40);
  teng(yaqin(m.celsiusToFahrenheit(37), 98.6), true);
});

sinov("2. isDivisibleBy", () => {
  teng(m.isDivisibleBy(30, 3, 5), true);
  teng(m.isDivisibleBy(9, 3, 5), false);
  teng(m.isDivisibleBy(10, 3, 5), false);
  teng(m.isDivisibleBy(0, 3, 5), true);
});

sinov("3. clamp", () => {
  teng(m.clamp(5, 1, 10), 5);
  teng(m.clamp(-3, 0, 10), 0);
  teng(m.clamp(42, 0, 10), 10);
  teng(m.clamp(10, 0, 10), 10);
});

sinov("4. countChar", () => {
  teng(m.countChar("banana", "a"), 3);
  teng(m.countChar("banana", "n"), 2);
  teng(m.countChar("banana", "z"), 0);
  teng(m.countChar("", "a"), 0);
  teng(m.countChar("Aa", "a"), 1);
});

sinov("5. evenOddSums", () => {
  teng(m.evenOddSums([1, 2, 3, 4, 5]), { even: 6, odd: 9 });
  teng(m.evenOddSums([]), { even: 0, odd: 0 });
  teng(m.evenOddSums([2, 4]), { even: 6, odd: 0 });
  teng(m.evenOddSums([-1, -2]), { even: -2, odd: -1 });
});

sinov("6. ticketPrice", () => {
  teng(m.ticketPrice(4, false), 0);
  teng(m.ticketPrice(4, true), 0);
  teng(m.ticketPrice(5, false), 5000);
  teng(m.ticketPrice(12, true), 5000);
  teng(m.ticketPrice(20, true), 8000);
  teng(m.ticketPrice(20, false), 12000);
  teng(m.ticketPrice(65, true), 6000);
  teng(m.ticketPrice(70, false), 6000);
});

sinov("7. bmiCategory", () => {
  teng(m.bmiCategory(50, 1.8), "kam vazn");
  teng(m.bmiCategory(18.5, 1), "normal");
  teng(m.bmiCategory(70, 1.75), "normal");
  teng(m.bmiCategory(25, 1), "ortiqcha vazn");
  teng(m.bmiCategory(85, 1.75), "ortiqcha vazn");
  teng(m.bmiCategory(30, 1), "semizlik");
  teng(m.bmiCategory(100, 1.75), "semizlik");
});

sinov("8. wordCount", () => {
  teng(m.wordCount("salom dunyo"), 2);
  teng(m.wordCount("  a  b   c "), 3);
  teng(m.wordCount("bitta"), 1);
  teng(m.wordCount(""), 0);
  teng(m.wordCount("   "), 0);
});

sinov("9. leapYearsBetween", () => {
  teng(m.leapYearsBetween(2000, 2024), 7);
  teng(m.leapYearsBetween(1900, 1900), 0);
  teng(m.leapYearsBetween(2000, 2000), 1);
  teng(m.leapYearsBetween(1896, 1904), 2);
  teng(m.leapYearsBetween(2021, 2023), 0);
});

sinov("10. isPerfectNumber", () => {
  for (const p of [6, 28, 496, 8128]) teng(m.isPerfectNumber(p), true);
  for (const x of [0, 1, 2, 12, 27, 100]) teng(m.isPerfectNumber(x), false);
});

sinov("11. numberToBinary", () => {
  teng(m.numberToBinary(0), "0");
  teng(m.numberToBinary(1), "1");
  teng(m.numberToBinary(5), "101");
  teng(m.numberToBinary(10), "1010");
  teng(m.numberToBinary(255), "11111111");
});

sinov("12. primesUpTo", () => {
  teng(m.primesUpTo(10), [2, 3, 5, 7]);
  teng(m.primesUpTo(1), []);
  teng(m.primesUpTo(2), [2]);
  teng(m.primesUpTo(30), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
});

sinov("13. pyramid", () => {
  teng(m.pyramid(3), ["  *", " ***", "*****"]);
  teng(m.pyramid(1), ["*"]);
  teng(m.pyramid(0), []);
  teng(m.pyramid(4)[3], "*******");
});

sinov("14. studentReport", () => {
  teng(m.studentReport([90, 80, 70]), { average: 80, grade: "B" });
  teng(m.studentReport([100, 95]), { average: 97.5, grade: "A" });
  teng(m.studentReport([59, 60]), { average: 59.5, grade: "F" });
  teng(m.studentReport([65, 66, 66]), { average: 65.7, grade: "D" });
  teng(m.studentReport([]), { average: 0, grade: "F" });
});

sinov("15. passwordStrength", () => {
  teng(m.passwordStrength("abc"), "zaif");
  teng(m.passwordStrength("abcdefgh"), "zaif");
  teng(m.passwordStrength("abcdefg1"), "o'rta");
  teng(m.passwordStrength("A1!"), "o'rta");
  teng(m.passwordStrength("Abcdefg1"), "o'rta");
  teng(m.passwordStrength("Abcdefg1!"), "kuchli");
});

sinov("16. guessGame", () => {
  teng(m.guessGame(5, [3, 8, 5, 9]), {
    won: true,
    attempts: 3,
    hints: ["kattaroq", "kichikroq", "topdingiz"],
  });
  teng(m.guessGame(7, [1, 2]), {
    won: false,
    attempts: 2,
    hints: ["kattaroq", "kattaroq"],
  });
  teng(m.guessGame(4, []), { won: false, attempts: 0, hints: [] });
  teng(m.guessGame(4, [4]), { won: true, attempts: 1, hints: ["topdingiz"] });
});

yakun();
