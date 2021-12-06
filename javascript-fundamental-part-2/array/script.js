const friends = ['Mamun', 'Mimi', 'Marjia'];

// Add elements
const newLength = friends.push('Hasnath');
console.log(friends);
console.log(newLength);

friends.unshift('Khan');
console.log(friends);

// Remove elements
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

