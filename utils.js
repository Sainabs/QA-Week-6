function shuffleArray(array) {
    let arrCopy = [...array]
    for (let i = arrCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
    }
    return arrCopy
}

module.exports = {
    shuffleArray

    // :() => {
    //     return ["red","green","blue"]    
    // }    
    
    // returnarray,
    // returnTwo: ()=>{
    //     return 2
    // },
    // sameLength
    // greeting: (name)=>{
    //     return `Hello, ${name}.` 
}