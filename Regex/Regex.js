// ---------------------Regular Expression.
// Regular Expression is sequence of charecter that define a search pattern.
// it enables fast and quick searching in the data.
// Regular are incredibly used in web-development for searching and validation
// with set of pattern.

//----- Modifiers.

// g :Global search finds all matches instead of stopping after first search.
// i :Case-insensitive search
// m :multiline search.
// u :Unicode search.
// x :Ignore whitespaces.

// let string="Regular are incredibly used in web-deveLopmenT for searching and validation";
// let res=string.match(/a/i)
// console.log(res)

// let string="Regular are A incredibly Aused in web-deveLopmenT for searching and validation";
// let pattern=/a/ig
// let res=string.match(pattern)
// console.log(res)

// let string="Regular are A incredibly Aused in web-deveLopmenT for searching and validation";
// let pattern=/a/ig
// let res=string.search(pattern)
// console.log(res)

// 1.Metacharecter

// 1. `.` : Matches any chracter with ('.')

// let regex=/at..b/;
// console.log(regex.test('atcebmts'))

// 2. (\d) : Matches any digit 0-9;
// let data="how are you username dev@123 and email ysdev901@gmail.com"
// let regex=/\d+/g
// console.log(data.match(regex))

// 3. (\D) : Matches any non-digit 0-9;
// let data="how are you username dev@123 and email ysdev901@gmail.com"
// let regex=/\D+/g
// console.log(data.match(regex))

// 4. (\w) : Matches any word charecter;
// let data="how are you username dev@123 and email ysdev_901@gmail.com!"
// let regex=/\w/g
// console.log(data.match(regex))

// 5. (\W) : Matches any Non-word charecter;
// let data="how are you username dev@123 and email ysdev_901@gmail.com!"
// let regex=/\W/g
// console.log(data.match(regex))

// 6.(\s) : Matches any whitespace (space tab newline )
// let data="how are AMAN "
// let regex=/\s/g
// console.log(data.match(regex))

// 7.(\S) : Matches any Non-whitespace (space tab newline )
// let data="how are you username dev@123 and email ysdev_901@gmail.com!"
// let regex=/\S+/g
// console.log(data.match(regex))

// 8.(\b) : Word boundary (match posistion start or end of word)
// let regex=/\baman\b/
// console.log(regex.test('aman  ajay abhay'))

// 9.(\B) : Non-Word boundary (match posistion start or end of word)
// let regex=/\Baman\B/
// console.log(regex.test('aman  ajay abhay'))

// 10. (^) : Matches the starting of string.
// let reg=/^ae/
// console.log(reg.test("ae yor bro"))

// 11. ($) : Matches the ending of string.
// let reg=/ae$/g
// console.log(reg.test("ae yor bro ae"))

// 12 (|) : Alternate (or)
// let reg=/good|bad/
// console.log(reg.test('i am very bad'))
// console.log(reg.test('i am good but pata nhi'))

// 13 (|) :  Grouping.
// let reg=/(hello|swim)ing?/
// console.log(reg.test('i helloing am very gameing'))
// console.log(reg.test('i am good but pata nhi'))

// 14 (+) : Matches one or more of the preceding charecter
// let reg=/to+/
// console.log(reg.test('to'))
// console.log(reg.test('tooo'))
// console.log(reg.test('tooooo'))

// 15 (\) : Escape special character.
// let reg=/\@/
// console.log(reg.test('a@b'))
// console.log(reg.test('abc'))


// 2. Brackets

let reg=/[aeiou]/
console.log(reg.test('my name is aditya singh'));
console.log('my name is aditya singh'.match(reg))








