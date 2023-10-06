import ICategoria from "./categoria";
import Fabricante from "./fabricante";

export default interface IProduct {
  id: number;
  nome: string;
  sku: string;
  final: boolean;
  desc: string;
  imagens: string[];
  produto: IProduct | null;
  fabricante: Fabricante;
  tipos: ICategoria[];
  grupos: ICategoria[];
  modelos: ICategoria[];
}