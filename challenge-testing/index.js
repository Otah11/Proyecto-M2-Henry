class CarritoCompra {
    constructor() {
      this.carrito = [];
    }
  
    agregarProducto(producto) {
      this.carrito.push(producto);
    }
  
    calcularTotal() {
      return this.carrito.reduce((total, producto) => total + producto.precio, 0);
    }
  
    aplicarDescuento(porcentaje) {
      const total = this.calcularTotal();
      const descuento = total * (porcentaje / 100);
      const totalConDescuento = total - descuento;
      this.carrito.forEach(producto => {
        producto.precio -= (producto.precio * porcentaje) / 100;
      });
      return totalConDescuento;
    }
}
  
module.exports = CarritoCompra;
