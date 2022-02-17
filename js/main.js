
const drinkType = "BEBIDA";
const footType = "COMIDA";

class ProductoFacturable {
    constructor(name, description, price, quantity, productype) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.quantity = quantity;
      this.productype = productype;
    }
  }
  let sandwich = new ProductoFacturable("Sandwich", "Pan relleno con queso y jamon", 400, 0, footType); 
  let  tinyBread = new ProductoFacturable("Criollos", "Criollo de hojaldre", 30, 0, footType);  
  let moonMiddle = new ProductoFacturable("Medialunas", "Croassant dulce", 120, 0, footType);  
  let coffee = new ProductoFacturable("Cafe con leche", "Cafe tostado con leche", 200, 0, drinkType); 
  let lemonade = new ProductoFacturable("Limonada", "Bebida fria de limon", 300, 0, drinkType); 
  let water = new ProductoFacturable("Agua", "Agua mineral", 110, 0, drinkType); 

  let products = [sandwich, tinyBread, moonMiddle, coffee, lemonade, water];

alert("Bienvenido!\nA continuación te muestro el menú de desayuno");
getOrder(footType);
getOrder(drinkType);
getBill();
function verificarOpcion(opcion) {
    esValida = (!isNaN(opcion) && parseInt(opcion) >= 0 && parseInt(opcion) < products.length) ;
    if (esValida) {
        return  parseInt(opcion);
    } else {
        return null;
    }
}

function getProducts(productType){
    let productslist = ""; 
    for (i = 0; i < products.length; i++) {
        if (products[i].productype==productType){
            productslist =productslist+ "Cod: "+ i + " Nombre: " + products[i].name + "\n";
        }
      }
      return productslist;
 }

 function getOrder(productType){
    let selectedCode = -1;
    do {
        selectedCode = prompt("LISTA \n" + getProducts(productType)+"Ingresa el codigo del producto según lo que deseas ordenar: ");
    } while (verificarOpcion(selectedCode) == null);
    setQuantityProduc(selectedCode);
 }

 function setQuantityProduc(selectedCode){
    let quantity
    do {
        quantity = prompt("Usted ha seleccionado \n" + "Nombre: " + products[selectedCode].name + "\n Descripción: " + products[selectedCode].description + "\n Precio: " + products[selectedCode].price +"\n Ingresa el codigo del producto según lo que deseas ordenar: ");
    } while (isNaN(quantity));
    products[selectedCode].quantity = parseInt(quantity);
 }

 function getBill(){
    let productslist = "Detalles de facturación \n"; 
    let total = 0;
    for (i = 0; i < products.length; i++) {
        if (products[i].quantity > 0){
            productslist =productslist+ "Cod: "+ i + " Nombre: " + products[i].name + " Cantidad: "+products[i].quantity+" Subtotal: " + products[i].quantity * products[i].price+ "\n";
            total = total +( products[i].quantity * products[i].price);
        }
      }
      productslist = productslist + "TOTAL: " + total;
      alert( productslist);
 }