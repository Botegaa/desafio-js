
    function Somatorio() {
      
      const numero = parseInt(document.getElementById('numero').value);

     
      const resultado = somatorioCalculo(numero);
      document.getElementById('resultado').textContent = `O somatório é: ${resultado}`;
    }

    function somatorioCalculo(numero) {
      let somatorio = 0;

      for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          somatorio += i;
        }
      }

      return somatorio;
    }
 