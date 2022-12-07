const fs = require('fs');

class ProductManager {
    constructor(path) {
        this.path = path;
        this.format = 'utf-8';
    }

    getNewID = list =>{
        const count = list.length;
        return (count > 0) ? list[count - 1].id + 1 : 1;
    } 
    existProduct = (code, list) => {
        return ;
    }

    addProduct = async ({title, description, price, thumbnail, code, stock}) => {
        const list = await this.getProducts();
        const newID = this.getNewID(list);
        const exis = list.some(el => el.code == code);
        if (!exis) {
            const newProduct = {
                id: newID,
                title: title ?? "",
                description: description ?? "",
                price: price ?? 0.0,
                thumbnail: thumbnail ?? "",
                code: code ?? '',
                stock: stock ?? 0
            };
            list.push(newProduct);
            await this.write(list);
            return newProduct;
        }
        return {error: `code: ${code} already exists`};
    }

    read = () => {
        if (fs.existsSync(this.path)) {
            return fs.promises.readFile(this.path, this.format).then(r => JSON.parse(r));
        }
        return [];
    }

    getProducts = async () => {
        const list = await this.read();
        return list;
    }

    write = async list => {
        fs.promises.writeFile(this.path, JSON.stringify(list));
    }

    

    getProductbyId = async (id) => {
        const list = await this.getProducts();
        return list.find((prod) => prod.id == id) ?? {error: `product not found`};;
    }

    updateProduct = async (id, campo, update) => {
        const list = await this.getProducts();
        const idx = list.indexOf(e => e.id == id);
        
        if(idx < 0) return "product not found";
        list[idx][campo] = update;
        await this.write(list);
        return list[idx][campo];
    }

    updateProductObj = async (id, obj) => {
        obj.id = id;
        const list = await this.read();

        const idx = list.findIndex((e) => e.id == id);
        if (idx < 0) return;
        list[idx] = obj;
        await this.write(list);
    }

    deleteProduct = async (id) => {
        const list = await this.getProducts();
        const idx = list.findIndex((e) => e.id == id);
        if (idx < 0) return;
        list.splice(idx, 1);
        await this.write(list);
        return list;
    }

}

/* const run = async () => {
    const manager = new ProductManager('products.json');
    console.log(await manager.getProducts());
    await manager.addProduct("Monkey D Luffy", "Sombrero de Paja", 100000000, "https://cdn.shopify.com/s/files/1/0413/4253/3797/files/luffy_100_millions_large.jpg?v=1596110876", 1, 1);
    await manager.addProduct("Roronoa Zoro", "Cazador de Piratas", 60000000, "https://pm1.narvii.com/6827/788c6961b3a97e847cd8c4bdd50b3f94a2a86d0dv2_hq.jpg", 2, 1);
    await manager.addProduct("Chopper", "El amante del algodón de azúcar", 50, "https://static.wikia.nocookie.net/onepiece/images/8/82/Primer_cartel_de_Chopper.png/revision/latest?cb=20160221004445&path-prefix=es", 3, 1);
    
    console.log(await manager.getProducts());
    
    console.log("\n ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ ⚓ \n");

    await manager.addProduct("Monkey D Luffy", "Sombrero de Paja", 30000000, "https://cdn.shopify.com/s/files/1/0413/4253/3797/files/luffy_100_millions_large.jpg?v=1596110876", 1, 1);

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

run(); */

module.exports = ProductManager;