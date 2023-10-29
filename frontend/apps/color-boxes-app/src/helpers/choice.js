/**
 * Returns a random item from a list (arr)
 * @param {[]} arr
 * @returns
 */

const choice = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

export { choice };
