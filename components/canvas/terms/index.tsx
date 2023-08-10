import { FC } from "react"
import { Text, Wrapper } from "../styles";

const Terms: FC<{visible?: boolean}> = ({visible = false}) => {
  return (
    <Wrapper className={`p-3 term ${(visible) ? "visible" : ""}`} $maxWidth="48vw" $flexDirection="column">
      <Text className={'term'}>
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
          Na (NCA Parts), privacidade e segurança são prioridades e nos comprometemos com a transparência do tratamento de dados pessoais dos nossos
          usuários/clientes. Por isso, esta presente Política de Privacidade estabelece como é feita a coleta, uso e transferência de informações de
          clientes ou outras pessoas que acessam ou usam nosso site.
        </p>
        <p>
          Ao utilizar nossos serviços, você entende que coletaremos e usaremos suas informações pessoais nas formas descritas nesta Política, sob
          as normas da Constituição Federal de 1988 (art. 5º, LXXIX; e o art. 22º, XXX – incluídos pela EC 115/2022), das normas de Proteção
          de Dados (LGPD, Lei Federal 13.709/2018), das disposições consumeristas da Lei Federal 8078/1990 e as demais normas do ordenamento jurídico
          brasileiro aplicáveis.
        </p>
        <h4 className="align-self-start">1. Quais dados coletamos sobre você e para qual finalidade?</h4>
        <p>
          Nosso site coleta e utiliza alguns dados pessoais seus, de forma a viabilizar a prestação de serviços e aprimorar a experiência de uso.<br/>
          1.1. Dados pessoais fornecidos pelo titular<br/>
          E-mail, para armazenar o perfil dos nossos clientes
          e enviar notificações sobre áreas de interesse.<br/>
          1.2. Dados pessoais coletados automaticamente<br/>
          Localização de acesso e data.<br/>
          2. Como coletamos os seus dados?<br/>
          Nesse sentido, a coleta dos seus dados pessoais ocorre da seguinte forma:
          Quando o usuário coloca seu e-mail e através de outras API's.<br/>
        </p>
        <h4 className="align-self-start">2. Consentimento</h4>
        <p>
          É a partir do seu consentimento que tratamos os seus dados pessoais. O consentimento é a manifestação livre, informada e inequívoca pela qual você autoriza
          a NCA a tratar seus dados.<br/>
          Assim, em consonância com a Lei Geral de Proteção de Dados, seus dados só serão coletados, tratados e armazenados mediante prévio e expresso
          consentimento.<br/>
          O seu consentimento será obtido de forma específica para cada finalidade acima descrita, evidenciando o compromisso de transparência e boa-fé da
          NCA para com seus usuários/clientes, seguindo as regulações legislativas pertinentes.<br/>
          Ao utilizar os serviços da NCA e fornecer seus dados pessoais, você está ciente e consentindo com as disposições desta Política de Privacidade,
          além de conhecer seus direitos e como exercê-los.<br/>
          A qualquer tempo e sem nenhum custo, você poderá revogar seu consentimento.
          É importante destacar que a revogação do consentimento para o tratamento dos dados pode implicar a impossibilidade da performance adequada
          de alguma funcionalidade do site que dependa da operação. Tais consequências serão informadas previamente.<br/>
        </p>
        <h4 className="align-self-start">3. Quais são os seus direitos?</h4>
        <p>
        A NCA assegura a seus usuários/clientes seus direitos de titular previstos no artigo 18 da Lei Geral de Proteção de Dados. Dessa forma, você
        pode, de maneira gratuita e a qualquer tempo:<br/>
        Confirmar a existência de tratamento de dados, de maneira simplificada ou em formato claro e completo;<br/>
        Acessar seus dados, podendo solicitá-los em uma cópia legível sob forma impressa ou por meio eletrônico, seguro e idôneo;<br/>
        Corrigir seus dados, ao solicitar a edição, correção ou atualização destes;<br/>
        Limitar seus dados quando desnecessários, excessivos ou tratados em desconformidade com a legislação através da anonimização, bloqueio
        ou eliminação;<br/>
        Solicitar a portabilidade de seus dados, através de um relatório de dados cadastrais que a NCA trata a seu respeito;<br/>
        Eliminar seus dados tratados a partir de seu consentimento, exceto nos casos previstos em lei;<br/>
        Revogar seu consentimento, desautorizando o tratamento de seus dados.<br/>
        Informar-se sobre a possibilidade de não fornecer seu consentimento e sobre as consequências da negativa.<br/>
        </p>
        <h4 className="align-self-start">4. Como você pode exercer seus direitos de titular?</h4>
        <p>
          Para exercer seus direitos de titular, você deve entrar em contato com a NCA através dos seguintes meios disponíveis:
          Telefone: 47 99779-6606<br/>
          De forma a garantir a sua correta identificação como titular dos dados pessoais objeto da solicitação, é possível que solicitemos documentos
          ou demais comprovações que possam comprovar sua identidade. Nessa hipótese, você será informado previamente.<br/>
        </p>
        <h4 className="align-self-start">5. Como e por quanto tempo seus dados serão armazenados</h4>
        <p>
          Seus dados pessoais coletados pela NCA serão utilizados e armazenados durante o tempo necessário para a prestação do serviço ou para que as
          finalidades elencadas na presente Política de Privacidade sejam atingidas, considerando os direitos dos titulares dos dados e dos
          controladores.<br/>
          De modo geral, seus dados serão mantidos enquanto a relação contratual entre você e a NCA perdurar. Findado o período de armazenamento dos dados
          pessoais, estes serão excluídos de nossas bases de dados ou anonimizados, ressalvadas as hipóteses legalmente previstas no artigo 16 lei
          geral de proteção de dados, a saber:<br/>
          I – cumprimento de obrigação legal ou regulatória pelo controlador;<br/>
          II – estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;<br/>
          III – transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos nesta Lei; ou<br/>
          IV – uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados.<br/>
          Isto é, informações pessoais sobre você que sejam imprescindíveis para o cumprimento de determinações legais, judiciais e administrativas e/ou
          para o exercício do direito de defesa em processos judiciais e administrativos serão mantidas, a despeito da exclusão dos demais dados.<br/>
          O armazenamento de dados coletados pela NCA reflete o nosso compromisso com a segurança e privacidade dos seus dados. Empregamos medidas e
          soluções técnicas de proteção aptas a garantir a confidencialidade, integridade e inviolabilidade dos seus dados. Além disso, também contamos
          com medidas de segurança apropriadas aos riscos e com controle de acesso às informações armazenadas.<br/>
        </p>
        <h4 className="align-self-start">6. O que fazemos para manter seus dados seguros?</h4>
        <p>
          Para mantermos suas informações pessoais seguras, usamos ferramentas físicas, eletrônicas e gerenciais orientadas para a proteção da sua
          privacidade.<br/>
          Aplicamos essas ferramentas levando em consideração a natureza dos dados pessoais coletados, o contexto e a finalidade do tratamento e os
          riscos que eventuais violações gerariam para os direitos e liberdades do titular dos dados coletados e tratados.<br/>
          Entre as medidas que adotamos, destacamos as seguintes:<br/>
          Apenas pessoas autorizadas têm acesso a seus dados pessoais;<br/>
          O acesso a seus dados pessoais é feito somente após o compromisso de confidencialidade;<br/>
          Seus dados pessoais são armazenados em ambiente seguro e idôneo;<br/>
          A NCA se compromete a adotar as melhores posturas para evitar incidentes de segurança. Contudo, é necessário destacar que nenhuma página
          virtual é inteiramente segura e livre de riscos. É possível que, apesar de todos os nossos protocolos de segurança, problemas de culpa
          exclusivamente de terceiros ocorram, como ataques cibernéticos de hackers, ou também em decorrência da negligência ou imprudência do próprio
          usuário/cliente.<br/>
          Em caso de incidentes de segurança que possa gerar risco ou dano relevante para você ou qualquer um de nossos usuários/clientes, comunicaremos
          aos afetados e a Autoridade Nacional de Proteção de Dados sobre o ocorrido, em consonância com as disposições da Lei Geral de
          Proteção de Dados.<br/>
        </p>
        <h4 className="align-self-start">7. Com quem seus dados podem ser compartilhados?</h4>
        <p>
          Tendo em vista a preservação de sua privacidade, a NCA não compartilhará seus dados pessoais com nenhum terceiro não autorizado.<br/>
          Além disso, também existem outras hipóteses em que seus dados poderão ser compartilhados, que são:<br/>
          I – Determinação legal, requerimento, requisição ou ordem judicial, com autoridades judiciais, administrativas ou governamentais competentes;<br/>
          II – Caso de movimentações societárias, como fusão, aquisição e incorporação, de forma automática;<br/>
          III – Proteção dos direitos da NCA em qualquer tipo de conflito, inclusive os de teor judicial.<br/>
          7.1. Transferência internacional de dados<br/>
          Alguns dos terceiros com quem compartilhamos seus dados podem ser localizados ou ou possuir instalações localizadas em países estrangeiros.<br/>
          Nessas condições, de toda forma, seus dados pessoais estarão sujeitos à Lei Geral de Proteção de Dados e às demais legislações brasileiras de
          proteção de dados.<br/>
          Nesse sentido, a NCA se compromete a sempre adotar eficientes padrões de segurança cibernética e de proteção de dados, nos melhores esforços de
          garantir e cumprir as exigências legislativas.<br/>
          Ao concordar com essa Política de Privacidade, você concorda com esse compartilhamento, que se dará conforme as finalidades descritas no
          presente instrumento.<br/>
        </p>
        <h4 className="align-self-start">8. Cookies ou dados de navegação</h4>
        <p>
          A NCA faz uso de Cookies, que são arquivos de texto enviados pela plataforma ao seu computador e que nele se armazenam, que contém
          informações relacionadas à navegação do site. Em suma, os Cookies são utilizados para aprimorar a experiência de uso.<br/>
          Ao acessar nosso site e consentir com o uso de Cookies, você manifesta conhecer e aceitar a utilização de um sistema de coleta de dados de
          navegação com o uso de Cookies em seu dispositivo.<br/>
          A NCA utiliza os seguintes Cookies:<br/>
          Cookies de autenticação e de preferências.<br/>
          Você pode, a qualquer tempo e sem nenhum custo, alterar as permissões, bloquear ou recusar os Cookies. Todavia, a revogação do consentimento
          de determinados Cookies pode inviabilizar o funcionamento correto de alguns recursos da plataforma.<br/>
        </p>
        <h4 className="align-self-start">9. Alteração desta Política de Privacidade</h4>
        <p>
          A atual versão da Política de Privacidade foi formulada e atualizada pela última vez em: 10/08/2023.<br/>
          Reservamos o direito de modificar essa Política de Privacidade a qualquer tempo, principalmente em função da adequação a eventuais alterações
          feitas em nosso site ou em âmbito legislativo. Recomendamos que você a revise com frequência.<br/>
          Eventuais alterações entrarão em vigor a partir de sua publicação em nosso site e sempre lhe notificaremos acerca das mudanças ocorridas.<br/>
          Ao utilizar nossos serviços e fornecer seus dados pessoais após tais modificações, você as consente.<br/>
        </p>
        <h4 className="align-self-start">10. Responsabilidade</h4>
        <p>
          A NCA prevê a responsabilidade dos agentes que atuam nos processos de tratamento de dados, em conformidade com os artigos 42 ao 45 da Lei Geral de Proteção de Dados.
          Nos comprometemos em manter esta Política de Privacidade atualizada, observando suas disposições e zelando por seu cumprimento.
          Além disso, também assumimos o compromisso de buscar condições técnicas e organizativas seguramente aptas a proteger todo o processo de tratamento de dados.
          Caso a Autoridade Nacional de Proteção de Dados exija a adoção de providências em relação ao tratamento de dados realizado pela NCA, comprometemo-nos a segui-las. 
        </p>
        <h4 className="align-self-start">10.1 Isenção de responsabilidade</h4>
        <p>
          Conforme mencionado no Tópico 6, embora adotemos elevados padrões de segurança a fim de evitar incidentes, não há nenhuma página virtual
          inteiramente livre de riscos. Nesse sentido, a NCA não se responsabiliza por:<br/>
          I – Quaisquer consequências decorrentes da negligência, imprudência ou imperícia dos usuários em relação a seus dados individuais.
          Garantimos e nos responsabilizamos apenas pela segurança dos processos de tratamento de dados e do cumprimento das finalidades descritas no
          presente instrumento. Destacamos que a responsabilidade em relação à confidencialidade dos dados de acesso é do usuário;<br/>
          II – Ações maliciosas de terceiros, como ataques de hackers, exceto se comprovada conduta culposa ou deliberada da NCA;<br/>
          Destacamos que em caso de incidentes de segurança que possam gerar risco ou dano relevante para você ou qualquer um de nossos
          usuários/clientes, comunicaremos aos afetados e a Autoridade Nacional de Proteção de Dados sobre o ocorrido e cumpriremos as providências
          necessárias;<br/>
          III – Inveracidade das informações inseridas pelo usuário/cliente nos registros necessários para a utilização dos serviços da NCA. 
          Quaisquer consequências decorrentes de informações falsas ou inseridas de má-fé são de inteiramente responsabilidade do usuário/cliente.<br/>
        </p>
        <h4 className="align-self-start">11. Encarregado de Proteção de Dados</h4>
        <p>
          A NCA disponibiliza os seguintes meios para que você possa entrar em contato conosco para exercer seus direitos de titular: 47 99779-6606.<br/>
          Caso tenha dúvidas sobre esta Política de Privacidade ou sobre os dados pessoais que tratamos, você pode entrar em contato com o nosso
          Encarregado de Proteção de Dados Pessoais, através dos seguintes canais:<br/>
          desenvolvimento@ncaparts.com.br<br/>
        </p>
      </Text>
    </Wrapper>
  )
}

export default Terms;