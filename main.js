class ProductManager{
    constructor(){
        this.products = [];
    }

    getProducts = () =>{return this.products}

    getNextID = () =>{
        const count = this.products.length;
        return (count>0) ? this.products[count-1].id + 1 : 1;
    }

    existProduct = (code) => { 
        return this.products.some((prod) => prod.code ===code);
    }

    getProductbyId = (id) => {
        return this.products.find((prod) => prod.id == id) ?? "No se ha encontrado registro sobre este pirata.";
    }

    addProduct = (title, description, price, thumbnail, code, stock) =>{
        if(!this.existProduct(code)){
            const product = {
                id: this.getNextID(),
                code: code ?? 0,
                title: title ?? "",
                description: description ?? "",
                price: price ?? 0.0,
                thumbnail: thumbnail ?? "",
                stock: stock ?? 0
            }
            this.products.push(product);
        }else{
            console.error(`Error, recompensa de ${title} actualizada. Su codigo ${code} ya existe con su nuevo valor`);
        }
    }
}

const productsManager = new ProductManager();
console.log(productsManager.getProducts());
console.log("\n ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ \n");

productsManager.addProduct("Monkey D Luffy", "Sombrero de Paja", 100000000, "https://cdn.shopify.com/s/files/1/0413/4253/3797/files/luffy_100_millions_large.jpg?v=1596110876", 1, 1);


console.log(productsManager.getProducts());

productsManager.addProduct("Roronoa Zoro", "Cazador de Piratas", 60000000, "https://pm1.narvii.com/6827/788c6961b3a97e847cd8c4bdd50b3f94a2a86d0dv2_hq.jpg", 2, 1);
productsManager.addProduct("Monkey D Luffy", "Sombrero de Paja", 30000000, "http://pm1.narvii.com/6827/d6c22ef9af032e2b0e02de7f9c801872ef3ce00av2_00.jpg", 1, 0);

console.log(productsManager.getProducts());
console.log("\n ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ \n");

console.log(productsManager.getProductbyId(1));
console.log("\n ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ \n");

console.log(productsManager.getProductbyId(2));
console.log("\n ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ \n");

console.log(productsManager.getProductbyId(5));
console.log("\n ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ \n");
