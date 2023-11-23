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
    await fetch(wordleBank).then((response) => response.text()).then((result) => {
        const wordArr = result.split("\n")
        wordSet = new Set(wordArr);
    })
    //Object wordSet
    return {wordSet};

}