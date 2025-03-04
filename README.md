# **Hashmap in JavaScript**

A Hashmap is a data structure that indexes key-values pair with some sort of function that 'hashes' the key and puts a hash number in a bucket. This bucket is used to access a specific key directly with a `O(1)` time in a best case scenario. So it's pretty straightforward to use. In a worst case scenario, you will have a `O(n)` time to acess, remove or insert a value, because if inside the bucket you are looking there is a linked list, the time will increase relatively with the number of key-value pairs inside this bucket.


If you want to know more about you can read this [article](https://samwho.dev/hashing/).
This project was made for the course of The Odin Project, from the section "A bit of Computer Science".
In this task, I've had to implement a class `HashMap` to produce hashmaps that increases their capacity when the `loadFactor` is reached.



# **How to use**:
```
// Initialize an instance
const test = new HashMap();

// set receives a key and value and puts them in a bucket
test.set('lion', 'golden');
test.set('cat', 'orange');
test.set('dog', 'caramel');

// get will return the value from a specific key, if the key is not found, return null
test.get('lion'); // 'The value of lion is golden'
test.get('hakuna'); // null

// has will return true if the key exists in hashmap, if not will return false
test.has('cat'); // true
test.has('t-rex'); // false

// remove will delete a key-value, if the key is not found, will return an Error
test.remove('lion');
test.remove('shark'); //Error: Key not found!

// length will return the size of the buckets array, it has something to with the capacity and load factor, not the actual number of buckets filled
test.length(); // 16

// clear will remove all buckets;
test.clear(); // this.buckets = [];

// keys will return all the keys
test.keys(); // Key: dog Key: cat

// values will return all the values
test.values(); // Value: caramel Value: orange

// entries will return all entries
test.entries [[ 'dog', 'caramel' ], [ 'cat', 'orange' ]]
```
