import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          {/* Título Principal */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
              Quiz Interativo de Python
            </h1>
            <p className="text-xl text-gray-600">
              Estruturas Condicionais, Operadores e Repetição
            </p>
          </div>

          {/* Descrição */}
          <div className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed">
              Teste seus conhecimentos sobre programação Python através de questões interativas
              com feedback imediato. Aperfeiçoe seus conhecimentos sobre estruturas condicionais,
              operadores e estruturas de repetição.
            </p>
          </div>

          {/* Botão Iniciar */}
          <button
            onClick={onStart}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-xl py-4 px-12 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl mb-10"
          >
            Iniciar
          </button>

          {/* Informações do Quiz */}
          <div className="border-t border-gray-200 pt-6 mt-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>15 Questões</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Feedback Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Conceitos Fundamentais</span>
              </div>
            </div>

            {/* Autores */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Desenvolvido por:</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-gray-700">
                <span className="font-semibold">Matheus Henrique Imberio</span>
                <span className="hidden sm:inline text-gray-400">•</span>
                <span className="font-semibold">Pedro Conrado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;

