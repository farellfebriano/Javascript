class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
  }
  set(key, values) {
    const addres = this._hash(key);
    if (!this.data[addres]) {
      this.data[addres] = [];
    }
    this.data[addres].push([key, values]);
  }
}

MyhashTable = new HashTable(10);
MyhashTable.set("grapes", 10000);
// myHashTable.get("grapes");
// MyhashTable.set("apples", 9);
// myHashTable.get("apples");
console.log(MyhashTable.data);
