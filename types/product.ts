import ICategoria from "./categoria";

export default interface IProduct {
  id: number,
  nome: string,
  sku: string,
  final: boolean,
  desc: string,
  imagens: string[],
  produto: IProduct | null,
  tipo: ICategoria | null,
  subtipo: ICategoria | null,
  marca: ICategoria | null,
  modelo: ICategoria | null,
  versao: ICategoria | null,
}