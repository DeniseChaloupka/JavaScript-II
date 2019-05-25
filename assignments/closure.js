// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let monster = "Monsters";
let trained = "trained";
let lineThree = "no commin' back"

function lyricLineOne() {
  const realMonster = "are real";
  console.log(`Cause my ${monster} ${realMonster}`);

  function lyricLineTwo() {
    const verylyrics = "how to kill,";
    console.log(`and they're ${trained} ${verylyrics}`);

    function lyricLineThree() {
      const lyrical = "they just laughed"
      console.log(`And there's ${lineThree} and ${lyrical} at how I feel`);

    }

    lyricLineThree();
  }

  lyricLineTwo();
}
lyricLineOne();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  return function () {
    count++;
    return count;
  }

};

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
