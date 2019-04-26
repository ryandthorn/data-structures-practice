class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error("Index error");
    }

    const newNode = {
      value
    };

    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // Find the node which we want to insert after
      const node = this._find(index - 1);
      newNode.next = node.next;
      node.next = newNode;
    }

    this.length++;
  }

  _find(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }
}
