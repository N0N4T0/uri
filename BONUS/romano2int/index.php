<!-- Transformar numeração Romana em Inteiro -->

<!-- Lógica de Resolução
- Loop em cada letra
- Condições:
-- Caso a próxima letra seja MAIOR que a atual (do loop):
--- DIMINUIR a atual
-- Caso contrário:
--- AUMENTAR a atual.
 -->


<?php
function romano2int($romano) {
    $romano = strtoupper($romano);
    $n = 0;
    $numeros = [
        'I' => 1,
        'V' => 5,
        'X' => 10,
        'L' => 50,
        'C' => 100,
        'D' => 500,
        'M' => 1000
    ];

    //quantos itens há em determinada string
    $letras = strlen($romano);

    for($i=0; $i<$letras; $i++){
        $atual = $romano[$i];     
        $prox = $romano[$i+1] ?? false;  //para PHP 7.4+
        //$prox = (isset($romano[$i+1])) ? $romano[$i+1] : false; //para PHP 7.3-

        if($prox && $numeros[$prox] > $numeros[$atual]){
            $n -= $numeros[$atual];
        }  else {
            $n += $numeros[$atual];
        }
    }

    return $n;
}

echo romano2int('X');