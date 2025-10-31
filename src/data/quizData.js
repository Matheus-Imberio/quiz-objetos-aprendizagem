export const questions = [
  {
    pergunta: "O que será impresso pelo código abaixo?\n\nx = 5\nif x > 3:\n    print('Maior')\nelse:\n    print('Menor')",
    respostaCorreta: "Maior",
    alternativas: ['Menor', 'Maior', 'Erro', 'Nada'],
    feedback: "Como x é 5, a condição x > 3 é verdadeira, logo o bloco if é executado."
  },
  {
    pergunta: "Qual operador é usado para comparar igualdade em Python?",
    respostaCorreta: "==",
    alternativas: ['=', '==', '!=', 'equals'],
    feedback: "O operador == verifica igualdade; o sinal = é usado para atribuição."
  },
  {
    pergunta: "Qual será a saída?\n\nx = 10\nif x % 2 == 0:\n    print('Par')\nelse:\n    print('Ímpar')",
    respostaCorreta: "Par",
    alternativas: ['10', 'Par', 'Ímpar', 'Nenhum'],
    feedback: "x % 2 == 0 é verdadeiro, logo o número é par."
  },
  {
    pergunta: "Em Python, qual dessas opções é uma estrutura de repetição?",
    respostaCorreta: "while",
    alternativas: ['if', 'while', 'elif', 'switch'],
    feedback: "O while repete um bloco de código enquanto a condição for verdadeira."
  },
  {
    pergunta: "O que este código imprime?\n\nfor i in range(3):\n    print(i)",
    respostaCorreta: "0 1 2",
    alternativas: ['1 2 3', '0 1 2', '0 1 2 3', '3 2 1'],
    feedback: "range(3) gera 0, 1 e 2 — o limite superior não é incluído."
  },
  {
    pergunta: "O que faz o operador != ?",
    respostaCorreta: "Compara diferença",
    alternativas: ['Atribui valor', 'Compara igualdade', 'Compara diferença', 'Inverte condição'],
    feedback: "!= retorna True se os valores forem diferentes."
  },
  {
    pergunta: "Qual será o resultado?\n\na = 5\nb = 2\nprint(a // b)",
    respostaCorreta: "2",
    alternativas: ['2.5', '2', '3', 'Erro'],
    feedback: "O operador // faz divisão inteira, descartando o resto."
  },
  {
    pergunta: "Qual saída este código gera?\n\ncount = 0\nwhile count < 3:\n    print(count)\n    count += 1",
    respostaCorreta: "0 1 2",
    alternativas: ['1 2 3', '0 1 2', '0 1 2 3', 'Loop infinito'],
    feedback: "O laço executa enquanto count < 3, imprimindo 0, 1 e 2."
  },
  {
    pergunta: "Em Python, o que faz a expressão x = not True ?",
    respostaCorreta: "False",
    alternativas: ['True', 'False', 'Erro', 'Inverte tipo'],
    feedback: "O operador not inverte o valor lógico."
  },
  {
    pergunta: "Qual saída resulta do código?\n\nx = 3\ny = 7\nif x < y and y < 10:\n    print('OK')",
    respostaCorreta: "OK",
    alternativas: ['OK', 'Erro', 'Nada', 'False'],
    feedback: "Ambas as condições são verdadeiras, então o if executa o print."
  },
  {
    pergunta: "Qual o resultado?\n\nfor i in range(1, 6, 2):\n    print(i)",
    respostaCorreta: "1 3 5",
    alternativas: ['1 2 3 4 5', '1 3 5', '1 3', '2 4'],
    feedback: "O terceiro parâmetro do range indica o passo (2 em 2)."
  },
  {
    pergunta: "O que será impresso?\n\nx = 4\nif x > 2:\n    if x < 6:\n        print('Dentro')",
    respostaCorreta: "Dentro",
    alternativas: ['Dentro', 'Nada', 'Erro', 'Fora'],
    feedback: "As duas condições são verdadeiras, então o bloco interno é executado."
  },
  {
    pergunta: "O que o código faz?\n\nfor i in range(5):\n    if i == 2:\n        break\n    print(i)",
    respostaCorreta: "0 1",
    alternativas: ['0 1 2 3 4', '0 1', '2 3 4', 'Nenhuma'],
    feedback: "O break encerra o laço quando i == 2."
  },
  {
    pergunta: "O que imprime?\n\nfor i in range(3):\n    for j in range(2):\n        print(i, j)",
    respostaCorreta: "6 pares",
    alternativas: ['3 pares', '6 pares', '2 pares', 'Nenhum'],
    feedback: "O laço interno roda 2 vezes para cada um dos 3 valores de i, totalizando 6 execuções."
  },
  {
    pergunta: "Qual será a saída?\n\nx = 0\nfor i in range(1, 4):\n    x += i\nprint(x)",
    respostaCorreta: "6",
    alternativas: ['6', '10', '4', '3'],
    feedback: "O laço soma 1 + 2 + 3, resultando em 6."
  }
];
