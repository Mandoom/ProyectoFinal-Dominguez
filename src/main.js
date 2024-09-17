class StockProducts {

    static stockArray = [] //to create products
    static categoryNameArray = ["All"] // for category names that will be used for filter
    constructor(singleItemData){
        this.id = singleItemData.id;
        const englishNameEntry = singleItemData.names.find(nameEntry => nameEntry.language.name === "en");  // find specific language entry
          if (englishNameEntry) {
            this.name = englishNameEntry.name;
        } else {
            this.name = singleItemData.name;
        };
        this.description = singleItemData.effect_entries.effect 
        this.price = singleItemData.cost;
        this.category = singleItemData.category.name;
        this.img = singleItemData.sprites.default;
        if (this.price > 0) { // from this point, discard if   price is lower to 0 
            StockProducts.stockArray.push(this);
        } //make conditional  
        if (!StockProducts.categoryNameArray.includes(this.category)) {
            
            StockProducts.categoryNameArray.push(this.category)
        } 
         // push "this" element to the class static property
    }
    // we can create static methods to acces the array, and manipulate its data within the class: for example to search find products and add product discounts.
   
}