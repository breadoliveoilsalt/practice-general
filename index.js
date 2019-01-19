////////////////////////////////////////////////////////////////////////////////

// Random note problem practice:

function checkMagazine(magazine, note) {
    let wordCount = {}
        // assumes no punctuation
    let wordArr = magazine.split(" ")

    wordArr.forEach(function (word) {
        if (wordCount[word]) {
            wordCount[word] += 1
        } else {
            wordCount[word] = 1
        }
    })

    note.forEach((word) => {
        if (wordCount[word]) {
            wordCount[word] -= 1
        } else if (!wordCount[word] || wordCount[word === 0]) {
            return "No"
        }
    })

    return "Yes"
}

let mag1 = "two times three is not four"
let note1 = "two times two is four"

let mag2 = "ive got a lovely bunch of coconuts"
let note2 = "ive got some coconuts"
