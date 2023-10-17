export default interface IUser {
  nome: string;
  email: string
  senha: string;
  revendedor?: boolean;
  contato?: string;
}