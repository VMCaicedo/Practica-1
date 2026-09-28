function ShoppingList() {
    this.items = [];

    const numberOfItems = parseInt(process.argv[2]);

    for (let i = 0; i < numberOfItems; i++) {
        const quantity = process.argv[3 + i * 2];
        const item = process.argv[4 + i * 2];

        this.items.push({
            item: item,
            quantity: quantity
        });
    }
}

const shoppingList = new ShoppingList();

console.log(shoppingList.items);