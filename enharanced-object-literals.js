console.log("------- enharanced object literals ---------");

function createBookShop(inventory) {
    return {
        //inventory: inventory,
        inventory,
        //inventoryValue: function() {
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        //priceForTitle: function(title) {
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;

        },
        titleForprice(price) {
            return this.inventory.find(book => book.price === price).title;

        }
    };
}

    const inventoryA = [
        { title: "Harry Potter", price: 10 },
        { title: "Meet me in Bathroom", price: 15 },
        { title: "Bitter Moon", price: 12 }
    ];

    const bookShop = createBookShop(inventoryA);
    console.log(bookShop.inventoryValue());
    console.log(bookShop.priceForTitle("Meet me in Bathroom"));
    console.log(bookShop.titleForprice(12));

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width, //:width, 
    height //:height
  };
}

console.log(canvasDimensions(2,20));

