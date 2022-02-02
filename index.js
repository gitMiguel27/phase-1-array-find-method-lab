// code your solution here
function superbowlWin(array) {
    const findWin = array.find(function(element) {
        if (element.result === 'W') {
            return element.year;
        }
    })
    if (findWin !== undefined) {
        return findWin.year;
    }
}