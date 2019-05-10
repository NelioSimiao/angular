export class Lancamento {
  codigo: number;
  tipo = 'RECEITA';
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  observacao: string;
  pessoa = new Pessoa();
  categoria = new Categoria();
}

export class Pessoa {
  codigo: number;
  nome: string;
  activo= true;
  endereco = new Endereco();
}

export class Endereco {
  lagradouro: string;
  numero: string;
  bairro: string;
  complemento: string;
  cidade: string;
  estado: string;
}

export class Categoria {
  codigo: number;
}
