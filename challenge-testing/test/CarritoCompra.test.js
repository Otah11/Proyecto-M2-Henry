const CarritoCompra = require("../index");

describe("CarritoCompra", () => {
  describe("constructor", () => {
    test("debe inicializar el carrito como un array vacío", () => {
      const carrito = new CarritoCompra();
      expect(carrito.carrito).toEqual([]);
    });
  });

  describe("agregarProducto", () => {
    test("debe agregar el producto al carrito", () => {
      const carrito = new CarritoCompra();
      const producto = { nombre: "Producto1", precio: 10 };
      carrito.agregarProducto(producto);
      expect(carrito.carrito).toContain(producto);
    });
  });

  describe("calcularTotal", () => {
    test("debe calcular el total de la compra cuando hay productos en el carrito", () => {
      const carrito = new CarritoCompra();
      carrito.agregarProducto({ nombre: "Producto1", precio: 10 });
      carrito.agregarProducto({ nombre: "Producto2", precio: 20 });
      expect(carrito.calcularTotal()).toBe(30);
    });

    test("debe devolver 0 si el carrito está vacío", () => {
      const carrito = new CarritoCompra();
      expect(carrito.calcularTotal()).toBe(0);
    });
  });

  describe("aplicarDescuento", () => {
    test("debe aplicar el descuento al total de la compra cuando hay productos en el carrito", () => {
      const carrito = new CarritoCompra();
      carrito.agregarProducto({ nombre: "Producto1", precio: 10 });
      carrito.agregarProducto({ nombre: "Producto2", precio: 20 });
      carrito.aplicarDescuento(10); // 10% de descuento
      expect(carrito.calcularTotal()).toBe(27); // Total: 30 - 10% = 27
    });

    test("no debe aplicar el descuento si el porcentaje es 0", () => {
      const carrito = new CarritoCompra();
      carrito.agregarProducto({ nombre: "Producto1", precio: 10 });
      carrito.aplicarDescuento(0); // Sin descuento
      expect(carrito.calcularTotal()).toBe(10); // Total sin descuento: 10
    });

    test("no debe aplicar el descuento si el carrito está vacío", () => {
      const carrito = new CarritoCompra();
      carrito.aplicarDescuento(10); // No hay productos en el carrito
      expect(carrito.calcularTotal()).toBe(0); // Total: 0
    });
  });
});
