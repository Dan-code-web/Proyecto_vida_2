export interface Pedido {
  folio: number;
  cliente: string;
  productos: Producto[];
  observaciones?: string;
}

export type CategoriaPan = "dulce" | "salado" | "integral";

export type Producto = {
  id: number;
  nombre: string;
  precio: number;
  categoria: CategoriaPan;
  descripcion?: string;
};
