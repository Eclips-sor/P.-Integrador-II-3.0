// botão sanduíche //
const botaoMenu = document.querySelector('.botao-menu');
const menu = document.querySelector('.menu');
botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('aberto');
});

const campoBusca = document.getElementById('input-busca');
campoBusca.addEventListener('input', () => {
    filtrarSaneantes(campoBusca.value);
});

function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

function filtrarSaneantes(texto) {
    const textoNormalizado = normalizarTexto(texto);
    const caixas = document.querySelectorAll('.container-misturas .caixa');

    caixas.forEach((caixa) => {
        const titulo = normalizarTexto(
            caixa.querySelector('.titulo-mistura h1').textContent
        );
        caixa.style.display = titulo.includes(textoNormalizado) ? '' : 'none';
    });
}

function criarInformacaoClasse(classe, rotulo, valor) {
    const elemento = document.createElement('div');
    elemento.className = classe;

    const rotuloElemento = document.createElement('p');
    rotuloElemento.className = 'p-dentro';
    rotuloElemento.textContent = `${rotulo}:`;

    const valorElemento = document.createElement('p');
    valorElemento.textContent = valor || 'Não informado';

    elemento.append(rotuloElemento, valorElemento);
    return elemento;
}

function criarCardSaneante(saneante) {
    const caixa = document.createElement('div');
    caixa.className = 'caixa';

    const titulo = document.createElement('div');
    titulo.className = 'titulo-mistura';

    const nome = document.createElement('h1');
    nome.textContent = saneante.nome;
    titulo.append(nome);

    const informacoes = document.createElement('div');
    informacoes.className = 'conteiner-info';
    informacoes.append(
        criarInformacaoClasse(
            'periculosidade',
            'Nível de periculosidade',
            saneante.nível
        ),
        criarInformacaoClasse('marca', 'Marca do produto', saneante.marca),
        criarInformacaoClasse(
            'pode-ser',
            'Pode ser misturado',
            saneante.misturar
        )
    );

    caixa.append(titulo, informacoes);
    return caixa;
}

async function carregarSaneantes() {
    const container = document.querySelector('.container-misturas');
    const status = document.getElementById('saneantes-status');

    try {
        const resposta = await window.supabaseClient
            .from('saneantes')
            .select('id, nome, marca, nível, misturar')
            .eq('nível', 1)
            .order('nome');

        if (resposta.error) {
            throw resposta.error;
        }

        container.replaceChildren();

        if (!resposta.data.length) {
            status.textContent = 'Nenhum saneante de nível 1 foi encontrado.';
            container.append(status);
            return;
        }

        resposta.data.forEach((saneante) => {
            container.append(criarCardSaneante(saneante));
        });
    } catch (error) {
        console.error('Falha ao carregar saneantes:', error);
        status.textContent = 'Não foi possível carregar os saneantes.';
    }
}

carregarSaneantes();
