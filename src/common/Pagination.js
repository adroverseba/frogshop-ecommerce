import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/20/solid';

export const Pagination = ({ setOffset, productLimit, totalQty }) => {
  const pivot = 2;
  /*con el pivote podemos decidir cuántos números queremos que estén
  del lado izquierdo y del lado derecho*/
  const itemsArray = []; //Inicialmente necesitamos un array vacío para poder iterar
  const [current, setCurrent] = useState(1); //Debe ser en 1
  const totalNumberPages = Math.ceil(totalQty / productLimit);
  //Con Math.ceil se obtiene un número entero por encima del resultado
  //Con el pivote se calculan los números que estarán al inicio y al final del reglón de páginas
  const final = Math.min(Math.max(pivot * 2 + 2, pivot + current + 1), totalNumberPages + 1);
  const initial = Math.min(Math.max(final - (pivot * 2 + 1), 1), Math.max(current - pivot, 1));

  //Se irá agregando al array los botones que aparecerán en el reglón de páginas
  for (let i = initial; i < final; i++) {
    itemsArray.push(
      <button
        key={`Page-${i}`}
        onClick={() => {
          setCurrent(i);
          setOffset((i - 1) * productLimit);
        }}
        href="#"
        aria-current="page"
        className={`${getShade(i)}
                    relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
      >
        {i}
      </button>
    );
  }

  //Con la función getShade se resalta la página seleccionada
  function getShade(i) {
    return i === current ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50';
  }

  //Con startButton la interfaz muestra los primeros 5 productos del total
  const startButton = () => {
    setCurrent(1);
    setOffset(0);
  };

  //Con prevButton se selecionará la página que corresponda a lado izquierdo de la actual
  const prevButton = () => {
    if (current > 1) {
      setCurrent(current - 1);
      setOffset((current - 2) * productLimit);
    }
  };

  //Con prevButton se selecionará la página que corresponda a lado derecho de la actual
  const nextButton = () => {
    if (current < totalNumberPages) {
      setCurrent(current + 1);
      setOffset(current * productLimit);
    }
  };

  //Con endButton la interfaz muestra los últimos 5 productos del total
  const endButton = () => {
    setCurrent(totalNumberPages);
    setOffset((totalNumberPages - 1) * productLimit);
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Previous
        </button>
        <button href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{productLimit * (current - 1) + 1}</span> to{' '}
            <span className="font-medium">{current * productLimit < totalQty ? current * productLimit : totalQty}</span> of <span className="font-medium">{totalQty}</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              onClick={startButton}
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50
                        relative inline-flex items-center px-2 py-2 rounded-l-md
                        border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Start</span>
              <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={prevButton}
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50
                        relative inline-flex items-center px-2 py-2 rounded-l-md
                        border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {itemsArray}
            <button
              onClick={nextButton}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md
                        border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={endButton}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md
                        border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">End</span>
              <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
