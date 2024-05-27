import { useState, useEffect } from 'react';
import '../App.css';

function Body() {
  const [iva, setIva] = useState('23');
  const [quantidade, setQuantidade] = useState('');
  const [resultado, setResultado] = useState('');

  useEffect(() => {
    calcularResultado();
  }, [iva, quantidade]);

  const formatarNumero = (numero) => {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const calcularResultado = () => {
    const valorIva = parseFloat(iva) / 100;
    const valorQuantidade = parseFloat(quantidade);
    
    if (!isNaN(valorIva) && !isNaN(valorQuantidade)) {
      const resultadoCalculado = valorIva * valorQuantidade;
      setResultado(formatarNumero(resultadoCalculado.toFixed(2)));
    }
  };

  return (
    <div className='min-h-screen flex justify-center items-center bg-gradient-to-r from-lime-200 to-lime-300'>
      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <div className=" p-4 rounded-lg flex flex-col">
          <h2 className="text-xl font-bold mb-4">Calcular IVA</h2>
          <label htmlFor="iva" className="mb-2">Digite o IVA (%):</label>
          <input
            type="number"
            id="iva"
            value={iva}
            onChange={(e) => setIva(e.target.value)}
            placeholder="23%"
            className="w-full p-2 mb-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />

          <label htmlFor="quantidade" className="mb-2">Digite a quantidade:</label>
          <input
            type="number"
            id="quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            className="w-full p-2 mb-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />

          <label htmlFor="resultado" className="mb-2">Total:</label>
          <input
            type="text"
            id="resultado"
            value={resultado}
            readOnly
            className="w-full p-2 mb-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />

          <button onClick={calcularResultado} className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Calcular
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
