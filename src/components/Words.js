import wordBank from "../generalWordBank.txt";
import wordleBank from "./../wordle-bank.txt";
export const boardDefault = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]
];

export const generateWordSet = async () =>{
    //Lesson learned for effeciency
    //Use of array and icludes method will loop through array large timecomplexity
    
    //Unique and unordered elements
    //Great data structure for wordle bank O(1)
    let wordSet;
    let randomlyChosenWord;
    await fetch(wordleBank)
    .then((response) => response.text())
    .then((result) => {
        const wordArr = result.split("\n")
        //Random index chosen based on length of array, then rounded down
        //Math.random returns integer between 0 and 1
        randomlyChosenWord = wordArr[Math.floor(Math.random() * wordArr.length)]
        wordSet = new Set(wordArr);
    })
    //Object wordSet
    return {wordSet , randomlyChosenWord};

}