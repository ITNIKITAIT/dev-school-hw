class PaginationHelper {
    constructor(arr, n) {
        this.arr = arr;
        this.n = n;
    }
    pageCount() {
        return Math.ceil(this.arr.length / this.n);
    }
    itemCount() {
        return this.arr.length;
    }
    pageItemCount(page) {
        if (page < 0) return -1;
        page = page + 1;
        if (page * this.n <= this.arr.length) return this.n;
        else {
            let total = (page * this.n) - this.arr.length;
            if (total < this.n) return this.n - total;
            else return -1;
        }
    }
    pageIndex(index) {
        if (index > this.arr.length - 1 || index < 0) return -1;
        return Math.floor(index / this.n);
    }
}

const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1