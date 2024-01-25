function formatarMoeda(input) {
    // Obtém a localização do usuário
    const localizacaoUsuario = navigator.language || 'pt-BR'; // Padrão para o Brasil caso não seja detectada

    // Remove caracteres não numéricos e substitui ',' por '.'
    const valorLimpo = input.value.replace(/[^\d,]/g, '').replace(',', '.');

    // Converte o valor para um número
    const valorNumerico = parseFloat(valorLimpo);

    // Verifica se o valor é um número válido e não excede 12 dígitos
    if (!isNaN(valorNumerico) && valorLimpo.length <= 12) {
        // Formata o valor como moeda com base na localização
        const valorFormatado = new Intl.NumberFormat(localizacaoUsuario, {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(valorNumerico);

        // Atualiza o valor no input
        input.value = valorFormatado;
    } else {
        // Trata o caso em que o valor não é um número válido ou excede 12 dígitos
        input.value = '';
    }
}

function mostrarImagem(imagem) {
    document.getElementById('imagemVestuario').src = imagem;
}

function changeColor(elementId, color) {
    document.getElementById(elementId).style.color = color;
}

function resetColor(elementId) {
    document.getElementById(elementId).style.color = '';
}

function changeBackgroundColor(bgColor, textColor, detailColor) {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    // Adicione alterações de cor para detalhes laterais e no rodapé se necessário
}

