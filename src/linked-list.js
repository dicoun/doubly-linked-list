const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
    }

    append(data) {

        var NewNode = new Node();
        NewNode.data = data;
        if(this.length == null){
                this._head = NewNode;
                this._tail = NewNode;
        }
        else{
            if(this._head.next == null){
                this._head.next = NewNode;
                NewNode.prev = this._head;
                this._tail = NewNode;
            }
            else{
                this._tail.next = NewNode;
                NewNode.prev = this._tail;
                this._tail = NewNode;
            }
        }




    }

    head() {}

    tail() {}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
