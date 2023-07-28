import IKit from "./kit";
import IProduct from "./product";

export default interface IItem {
  id: number,
  valor_real: string,
  valor_real_revenda: string,
  skus_relacionados: string[],
  importada: boolean,
  disponivel: boolean,
  produto: IProduct,
  kit: IKit | null
}