class Node {
  constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
  }
}


class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.size = Math.floor(this.capacity * this.loadFactor);
    this.buckets = [];
  }

  _hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    console.log(hashCode);
    return hashCode;
  }

  _resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = [];
    this.threshold = Math.floor(this.capacity * this.loadFactor);

    this.count = 0;

    for (bucket in oldBuckets) {
      this.set(bucket.key, bucket.value);
    }


  }

  set (key, value) {
    const index = this._hash(key);
    
    if (!this.buckets[index]) { // If does not exist the object, it will be created
      this.buckets[index] = {};
    }
    
    const bucket = this.buckets[index];

    if (bucket.key === key) { // Tests if exists a key in that specific bucket, otherwise, fill it with key and value
      bucket.value = value;
    } else {
      bucket.key = key;
      bucket.value = value;
      this.count++;
    }

    if (this.count > this.threshold) {
      this._resize;
    }

  }

  get (key) {
    const buckets = this.buckets;
    const index = this._hash(key);
    
    if (buckets[index]) { 
      return `The value of ${key} is ${buckets[index].value}`;
    }

    return null;
  }

  has (key) {
    const index = this._hash(key);

    if (this.buckets[index] && this.buckets[index].key === key) {
      return true;
    }

    return false;
  }

  remove (key) {
    const index = this._hash(key);

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (this.buckets[index]) {
      delete this.buckets[index];
    } else {
      throw new Error("Key not found!");
    }
  }

  length () {
    return this.buckets.length;
  }

  clear () {
    this.buckets = [];
  }

  keys () {
    return this.buckets.filter((element) => {
      console.log(`Key: ${element.key}`)
    })
  }

  values () {
    return this.buckets.filter((element) => {
      console.log(`Value: ${element.value} `);
    })
  }

  entries () {
    const formatOutput = []; 
    this.buckets
    .filter((element) => element !== undefined)
    .map((key) => {
      const keyValue = [key.key, key.value];
      formatOutput.push(keyValue)
    })
    return formatOutput;
  }

}


