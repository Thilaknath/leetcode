const assert = require('assert');
function inventoryList() {
  const names = [];
  return {
    add: (name) => {
      assert(name !== '');
      assert(!names.includes(name));
      assert(names.length <= 10);
      names.push(name);
    },
    remove: (name) => {
      const idx = names.indexOf(name);
      if (idx !== -1) {
        names.splice(idx, 1);
      }
    },
    getList: () => [...names],
  };
}

1

function inventory(){
  items: [],
  return {
    add: function(item) {
        this.items.push(item);
      },
      remove: function(index) {
        this.items.splice(index, 1);
      }
  }
};