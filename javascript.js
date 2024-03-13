



function calcular(tipo, valor) {
  
    if (tipo === 'ação') {

        if (valor === 'c') {
            document.getElementById('visor').value = ''
        }

        if (valor === '+' || valor === '*' || valor === '/' || valor === '.' || valor === '-') {
            document.getElementById('visor').value += valor 

        }
        if (valor === '=') {
            var resultado_campo = eval(document.getElementById('visor').value)
            document.getElementById('visor').value = resultado_campo
        }
    }
    else if (tipo === 'valor')  {
        document.getElementById('visor').value += valor 
    }
    


}