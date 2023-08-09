import { FC } from "react"
import { Text, Wrapper } from "../styles";

const Terms: FC<{visible?: boolean}> = ({visible = false}) => {
  return (
    <Wrapper className={`p-3 term ${(visible) ? "visible" : void(0)}`} $maxWidth="48vw" $flexDirection="column">
      <Text className="term">
        <h1>NCA Parts - Termos</h1>
        <p>
          Bem vindo ao website NCA Parts, onde todos os serviços são ofertados pela empresa NCA Tech,
          cujo nome/ função social é NCA PARTS COMÉRCIO DE MÁQUINAS LTDA, inscrito sob o CNPJ nº 35.274.163/0001-47,
          com endereçõ na Rua Acedílo Monteiro de Lima, CEP 88309-640, Itajaí, SC, representado por meio dessa página web.
        </p>
        <h4 className="align-self-start">1. Do Objeto</h4>
        <p>
          Essa plataforma tem como finalidade de “e-commerce”, ou seja, disponibilizar a venda de produtos e serviços online
          disponibilizados na nossa plataforma ou aplicativo. este documento foi criado pelo advogado Diego Castro e modificado
          com permissão para este website.
        </p>
        <h4 className="align-self-start">2. Da reserva de produtos</h4>
        <p>
          2.1 O nosso website não trabalha com nenhuma possibilidade de reservar qualquer um dos produtos ofertados em nossa plataforma.<br/>
          2.2 O fato de o produto estar no carrinho de compras não é tido como uma reserva e não impossibilita que outras pessoas possam adquirir
          o produto e eles venham a se esgotar.
        </p>
        <h4 className="align-self-start">3. Das obrigações do cliente</h4>
        <p>
          3.1 O cliente deverá informar os dados de forma completa e correta no momento de cadastro em nossa plataforma.<br />
          3.2 É responsabilidade do cliente qualquer erro na escrita ou na transmissão errônea dos dados. <br />
          3.3 Para efetuar qualquer compra em nosso website ou adicionar produtos ao carrinho é necessário logar com o usuário e senha que foi
          fornecido no momento do cadastro.<br/>
          3.4 Não informar os seus dados de login a terceiros sob pena de ser responsabilizado por qualquer conduta advinda desse uso.<br/>
          3.5 Cada cliente só poderá efetuar um cadastro, não sendo aceito mais de uma conta por CPF.<br/>
          3.6 Usar a plataforma respeitando a ética, bons costumes, legislações e ordenamentos vigentes no país, sob pena de sofrer sanções.<br/>
          3.7 Ser maior de idade (18 anos) e ter capacidade plena para realizar o cadastro e efetuar compras em nossa plataforma.<br />
          3.7.1 Se um menor de idade ou pessoa física sem capacidade plena vir a adquirir algum produto ou serviço ofertado em nossa plataforma,
          entenderemos que os responsáveis autorizaram, respondendo esses por toda e qualquer situação que advir, bem como pela compra.<br/>
          3.8 Não comentar ou enviar imagens nas avaliações que possam ir de encontro com a ética e o respeito, ou que tenha cunho difamatório,
          ofensivo, de ódio ou preconceituoso.<br/>
          3.9 O primeiro login de acesso será feito através de um link enviado para o seu e-mail cadastrado.<br/>
          3.10 Não fornecer qualquer informação falsa, fraudulenta ou que não seja correspondente aos seus dados.<br/>
        </p>
        <h4 className="align-self-start">4. Das obrigações do proprietário do e-commerce</h4>
        <p>
          4.1 Informar de forma ostensiva e verdadeira sobre as características e especificações do produto disponível para venda de forma clara
          e completa. ( Ex: Cores, altura, material ou largura).<br/>
          4.2 Enviar os produtos dentro do prazo estabelecido.<br/>
          4.3 Disponibilizar uma plataforma segura.<br/>
          4.4 Disponibilizar imagens, áudios e vídeos informativos sobre os produtos ofertados, e condizentes com o que será entregue ao cliente.<br/>
          4.5 Emitir a nota fiscal do produto que será enviado e enviá-la ao cliente junto do produto.<br/>
          4.6 Informar como deve ocorrer o manuseio, a limpeza ou lavagem do produto e qualquer informação considerada relevante relacionada ao produto.<br/>
        </p>
        <h4 className="align-self-start">5. Isenção de responsabilidade</h4>
        <p>
          5. Isenção de responsabilidade<br/>
          5.1 Não nos responsabilizamos pelo mau uso ou manuseio errado do produto, bem como de qualquer dano que possa ocorrer na instalação de qualquer
          produto adquirido em nossa plataforma.<br/>
          5.2 Todos os produtos que vendemos estão dentro dos padrões e condições que vem de fábrica, do distribuidor ou da empresa que revendeu o produto.<br/>
          5.3 Fornecemos todas as informações pertinentes relacionadas ao produto, bem como os mesmos vão acompanhados de instruções de uso e cuidados em
          suas caixas ou através de manual de instruções.<br/>
        </p>
        <h4 className="align-self-start">6. Da propriedade intelectual</h4>
        <p>
          6.1 Todo o design e paginação são de propriedade do nosso website, e foram desenvolvidos por um prestador de serviços que foi contratado
          para tal finalidade.<br/>
          6.2 Toda imagem, ilustração, obras de arte, HTML, nomes comerciais, softwares ou vídeo disponibilizados em nossa plataforma por um dos
          gerenciadores da página são de nossa propriedade.<br/>
          6.2.1 As imagens e vídeos são meramente ilustrativas, pois dependendo do monitor ou da tela do aparelho eletrônico o mesmo pode apresentar
          variação de cores ou tons.<br/>
          6.3 A logo, a marca e toda a aparência da webempresa/empresa são de nossa propriedade.<br/>
          6.4 É vedada a cópia sem autorização de qualquer imagem, vídeo, design, áudios, aparência ou descrições de produtos existentes em nossa web
          página, sob pena se responder por sanções quem desobedecer.<br/>
          6.5 Não nos responsabilizamos por links externos que possam vir a aparecer em nossa página.<br/>
          6.5.1 Há algumas áreas que poderão apresentar propagandas ou divulgação de links, mas não temos qualquer tipo de relação, por isso muito cuidado
          ao navegar por essas páginas e ao fornecer os seus dados, pois navegar por essas páginas é responsabilidade do usuário/cliente.<br/>
          6.6 Nada contido em nossa web página garante o direito a concessão de licença ou direito de uso sem o consentimento expresso de um dos<br/>
          gerenciadores da página ou do proprietário da página.
          6.7 O consentimento de cópia ou compartilhamento deve vir por escrito de forma clara e expressa.<br/>
          6.8 É vedado compartilhar, copiar, plagiar ou disponibilizar qualquer conteúdo, foto, vídeo ou áudio encontrado em nosso site sem consentimento
          expresso.<br/>
        </p>
        <h4 className="align-self-start">7. Formas de pagamento</h4>
        <p>
          7.1 As formas de pagamento aceitas em nosso e-commerce são cartão de crédito e débito, ou boleto bancário.<br/>
          7.2 O boleto bancário poderá ser emitido no momento em que você escolheu a opção, preencheu os dados requisitados e gerou.<br/>
          7.2.1 O boleto tem vencimento na data exposta no mesmo, não sendo aceito após a data de vencimento.<br/>
          7.2.2 Se o boleto vencer e o pagamento não tiver sido efetuado, o produto voltará a ficar disponível para venda e será necessário realizar 
          uma nova compra para adquiri-lo.<br/>
          7.3 O produto será enviado assim que o pagamento for processado, registrado e confirmado em nossa plataforma.<br/>
          7.4 Qualquer outra forma de pagamento não é aceita por nosso e-commerce.<br/>
          7.5 Cupons de descontos são aceitos, desde que tenhamos disponibilizados, estando sujeitos a esgotarem ou terem vigência cancelada a qualquer
          momento.<br/>
          7.5 Se o cliente quiser parcelar o produto em mais vezes deverá arcar com os juros da operadora.<br/>
          7.6 Para solicitar o estorno entre em contato com a nossa Central de Atendimento ou SAC.<br/>
        </p>
        <h4 className="align-self-start">8. Troca e devolução</h4>
        <p>
          8.1 O cliente poderá devolver o produto ou trocar que foi adquirido em nosso e-commerce em até 7 dias, seja qual for a razão, conforme a previsão
          expressa no Código de Defesa do Consumidor em seu art. 49.
          8.1.1 Para que ocorra a troca ou a devolução é necessário que o produto esteja conforme foi entregue, com todos os acessórios, manual e
          embalagem, caixa.
          8.1.2 O produto que será devolvido ou trocado não poderá apresentar qualquer marca de uso, como o produto estar trincado, riscado ou apresentar
          sinais de quedas.
          8.2 Se você requisitou a troca do produto o novo será enviado para o endereço e você será notificado sobre o envio via e-mail.
          8.3 Se você solicitou o reembolso, a devolução do valor ocorrerá da forma como foi efetuado o pagamento.
          8.3.1 Se foi via cartão de crédito ou débito o valor será creditado ou debitado na fatura atual ou na seguinte do cartão, pois informaremos a
          administradora do cartão.
          8.3.2 Se o pagamento foi feito via boleto bancário, o valor de reembolso será restituído dentro de 30 dias úteis diretamente na conta que
          solicitaremos no momento de sua requisição de devolução.
        </p>
        <h4 className="align-self-start">9. Do doumento</h4>
        <p>
          9.1 Este documento foi feito pelo Advogado Diego Castro (OAB/PI 15.613) e foi modificado com permissão para uso neste site. 
        </p>
        <h2 className="align-self-start">Política de Privacidade (LGPD)</h2>
        <p>

        </p>
      </Text>
    </Wrapper>
  )
}

export default Terms;