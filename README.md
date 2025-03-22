# **Hashmap in JavaScript**

A HashMap is a data structure that indexes key-value pairs using a function that 'hashes' the key and assigns it to a bucket based on the resulting hash number. This bucket is used to access a specific key directly with an O(1) time complexity in the best-case scenario. As a result, it's quite efficient and straightforward to use. However, in the worst-case scenario, the time complexity for accessing, removing, or inserting a value can degrade to O(n). This happens when the bucket you're looking at contains a linked list, and the time required increases relative to the number of key-value pairs stored in that bucket.


If you want to know more about you can read this [article](https://samwho.dev/hashing/).
This project was made for the course of The Odin Project, from the section "A bit of Computer Science".
In this task, I've had to implement a class `HashMap` to produce hashmaps that increases their capacity when the `loadFactor` is reached.



# **How to use**:
```javascript
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
