const fs = require('fs');

class ProductManager {
    constructor(path) {
        this.path = path;
        this.format = 'utf-8';
    }

    createProduct = async (title, description, price, thumbnail, code, stock) => {
        let list = this.getProducts();
        let modif = list.then(products => {
            let newID = (products.length > 0) ? products[products.length - 1].id + 1 : 1;
            if(! this.existProduct(code, products)){
                const newProduct = {
                    id: newID,
                    title: title ?? "",
                    description: description ?? "",
                    price: price ?? 0.0,
                    thumbnail: thumbnail ?? "",
                    code: code ?? '',
                    stock: stock ?? 0
                }
                products.push(newProduct);
            }
            return products;
        })
            .then(productNew => fs.promises.writeFile(this.path, JSON.stringify(productNew)));
        return modif;

    }

    getProducts = async () => {
        return fs.promises.readFile(this.path, this.format)
            .then(content => JSON.parse(content))
            .catch(e => {
                console.log('ERROR', e);
                return []
            })
    }

    existProduct = (code, arr) => {
        return arr.some(el => el.code === code);
    }

    getProductbyId = async (id) => {
        try {
            return await this.getProducts().then(products => products.find((prod) => prod.id == id) ?? "Not Found");
        } catch (error) {
            console.log('Error: ', error);
            return {}
        }
    }

    updateProduct = async (id, campo, update) => {
        try {
            return await this.getProducts()
            .then(products => {
                products.forEach(prod => {
                    if (prod.id == id) {
                        (prod[campo]) && (prod[campo] = update);
                    }
                });
                return products;
            })
            .then(productNew => fs.promises.writeFile(this.path, JSON.stringify(productNew)));
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    deleteProduct = async (id) => {
        try {
            await this.getProducts()
            .then(products => {
                let index;
                products.forEach((prod, idx) => {
                    if (prod.id == id) {
                        index = idx;
                    }
                });
                products.splice(index, 1)
                return products;
            })
            .then(productNew => fs.promises.writeFile(this.path, JSON.stringify(productNew)));
        } catch (error) {
            console.log('Error: ', error);
        }
    }

}

const run = async () => {
    const manager = new ProductManager('products.json');
    console.log(await manager.getProducts());
    await manager.createProduct("Monkey D Luffy", "Sombrero de Paja", 100000000, "https://cdn.shopify.com/s/files/1/0413/4253/3797/files/luffy_100_millions_large.jpg?v=1596110876", 1, 1);
    await manager.createProduct("Roronoa Zoro", "Cazador de Piratas", 60000000, "https://pm1.narvii.com/6827/788c6961b3a97e847cd8c4bdd50b3f94a2a86d0dv2_hq.jpg", 2, 1);
    await manager.createProduct("Chopper", "El amante del algodón de azúcar", 50, "https://static.wikia.nocookie.net/onepiece/images/8/82/Primer_cartel_de_Chopper.png/revision/latest?cb=20160221004445&path-prefix=es", 3, 1);
    
    console.log(await manager.getProducts());
    
    console.log("\n ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ \n");

    await manager.createProduct("Monkey D Luffy", "Sombrero de Paja", 30000000, "https://cdn.shopify.com/s/files/1/0413/4253/3797/files/luffy_100_millions_large.jpg?v=1596110876", 1, 1);

    console.log("\n ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ \n");
    console.log(await manager.getProducts());

    console.log("\n ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ \n");
    
    manager.deleteProduct(1);

    console.log("\n ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ \n");

    manager.updateProduct(1, 'price', 100000000)
    console.log(await manager.getProductbyId(1));

    console.log("\n ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ \n");

    console.log(await manager.getProductbyId(3));

    console.log("\n ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ \n");

    console.log(await manager.getProducts());

}

run();