const CarritoCompra = require("../index");

describe("CarritoCompra", () => {
  describe("constructor", () => {
    it("debe inicializar el carrito como un array vacío", () => {
      const carrito = new CarritoCompra();
      expect(carrito.carrito).toEqual([]);
    });
  });

  describe("agregarProducto", () => {
    it("debe agregar el producto al carrito", () => {
      const carrito = new CarritoCompra();
      const producto = { nombre: "Producto1", precio: 10 };
      carrito.agregarProducto(producto);
      expect(carrito.carrito).toContain(producto);
    });
  });

  describe("calcularTotal", () => {
    it("debe calcular el total de la compra cuando hay productos en el carrito", () => {
      const carrito = new CarritoCompra();
      carrito.agregarProducto({ nombre: "Producto1", precio: 10 });
      carrito.agregarProducto({ nombre: "Producto2", precio: 20 });
      expect(carrito.calcularTotal()).toBe(30);
    });

    it("debe devolver 0 si el carrito está vacío", () => {
      const carrito = new CarritoCompra();
      expect(carrito.calcularTotal()).toBe(0);
    });
  });

  describe("aplicarDescuento", () => {
    it("debe aplicar el descuento al total de la compra cuando hay productos en el carrito", () => {
      const carrito = new CarritoCompra();
      carrito.agregarProducto({ nombre: "Producto1", precio: 10 });
      carrito.agregarProducto({ nombre: "Producto2", precio: 20 });
      carrito.aplicarDescuento(10); // 10% de descuento
      expect(carrito.calcularTotal()).toBe(27); // total: 30 - 10% = 27
    });

    it("no debe aplicar el descuento si el porcentaje es 0", () => {
      const carrito = new CarritoCompra();
      carrito.agregarProducto({ nombre: "Producto1", precio: 10 });
      carrito.aplicarDescuento(0); // sin descuento
      expect(carrito.calcularTotal()).toBe(10); // total sin descuento: 10
    });

    it("no debe aplicar el descuento si el carrito está vacío", () => {
      const carrito = new CarritoCompra();
      carrito.aplicarDescuento(10); // no hay productos en el carrito
      expect(carrito.calcularTotal()).toBe(0); // total: 0
    });
  });
});
