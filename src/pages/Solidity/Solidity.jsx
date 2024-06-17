import { Code, ExtraText, SubTitle, Title, TitleDescription } from '../../components'
import Layout from '../../layout/Layout'
import { code } from './const'

export default function Solidity(){
    return(
        <Layout>
            <Title>Solidity Lenguaje para crear smart contracts en Ethereum</Title>
            <TitleDescription>Solidity es un lenguaje para crear contratos inteligentes en la red de Ethereum, comunicarse con la red, creación de tokens erc20 entre otros los cuales son monedas de la misma red de ethereum un ejemplo de ellas son BAT, LINK, ZRX, entre muchos otros los cuales son criptmonedas que aportan un valor distinto.</TitleDescription>
            <SubTitle>Sintaxis básica de Solidity</SubTitle>
            <SubTitle>Licencia y versión</SubTitle>
            <ExtraText>En el siguiente ejemplo de código en un archivo con el nombre mycontract.sol para empezar vemos en la parte de arriba la licencia comentada y la versión del lenguaje con pragma solidity ^version, Solidity es un lenguaje que tiene actualizaciones constantes y puedes especificar la versión con la cual la sintaxis puede cambiar un poco.
            </ExtraText>
            <SubTitle>Estructura de un contrato y tipos de datos</SubTitle>
            <ExtraText>La estructura de un contrato es similar a la de una clase en cualquier otro lenguaje, en lugar de usar class usamos contract, dentro podemos definir un contructor y variables de estado a travéz de los distintos tipos de datos en solidity, como string, int, uint que son numeros positivos, en solidity no existen los flotantes pero con bibliotecas como Zepelyn se pueden facilitar los calculos, tenemos los struct que son como los objetos, los enum que son opciones , también los array definidos como en el ejemplo.</ExtraText>
            <SubTitle>Funciones</SubTitle>
            <ExtraText>definimos una función con la palabra reservada function seguido del nombre de la misma, podemos también agregar parámetros, despues de los parametros si es publica, privada, internal o external, lo que significa si podemos acceder a dicha función a travéz de otro contrato o solo dentro de este, si es view, pure, payable, nonpayable, las view muestran el valor de las variables de estado, los pure que realizan una operación sin utilizar las variables de estado, las payable son funciones que envian Ether de una wallet a otra.</ExtraText>
            <ExtraText>Puedes también agregar que debe retornar la función con la palabra reservada returns y parentesis donde especificas el tipo de dato que esperas que la función retorne</ExtraText>
            <Code code={code.sol}/>
            <SubTitle>Variables de Estado, locales y Globales</SubTitle>
            <ExtraText>Las variables de estado son las que definimos dentro del contrato, las locales se definen dentro de funciones y solo existen al usar dicha función, las variables Globales contienen información de la blockchain, block contiene información del bloque el momento en que se ejecuta una operación como el timestamp entre otros datos, msg contiene información de la transacción como de que wallet se envió la transacción entre otros datos.</ExtraText>
            <Code code={code.var}/>
            <SubTitle>Variables constantes</SubTitle>
            <ExtraText>Las constantes son variables que su valor no puede cambiar</ExtraText>
            <Code code={code.const}/>
            <SubTitle>Variables inmutables</SubTitle>
            <ExtraText>Tampoco se puede cambiar su valor de la variable al igual que las constantes, la diferencia es que se puede inicializar su valor en el constructor</ExtraText>
            <Code code={code.inmu}/>
            <SubTitle>Mapping</SubTitle>
            <ExtraText>Los Mapping usan una llave o clave para almacenar un valor, para usarlos primero hay que definirlos pero vacío no se puede inicializar un valor y por eso debes luego guardar un valor para poder usarlo.</ExtraText>
            <Code code={code.mapping}/>
            <SubTitle>Structuras de Control</SubTitle>
            <ExtraText>Así como en otros lenguajes tambien podemos usar los if,ternarios y loops</ExtraText>
            <Code code={code.controlstructs}/>
            <SubTitle>Ether /wei /gwei</SubTitle>
            <ExtraText>Estas son las unidades de medida que representan las fracciones de ETH en una transacción, asi como el dolar que 100 centimos representan un dolar y tiene dos fracciones, 1 wei representa 18 fracciones de 1 Ether (1 seguido de 18 ceros), 1gwei representa 9 fracciones de 1 Ether (1 seguido de 9 ceros). Son unidades de medida y se pueden igualar con uint como 10x18 == 1 ether, ó 1^18 == 1 ether. 
            </ExtraText>
            <Code code={code.etherandwei}/>
            <SubTitle>Métodos para Arreglos</SubTitle>
            <ExtraText>Los métodos para arreglos sirven para eliminar, cambiar o eliminar los elementos de un arreglo</ExtraText>
            <Code code={code.arraym}/>
            <SubTitle>Funciones para el manejo de Errores en Solidity</SubTitle>
            <SubTitle>Require</SubTitle>
            <ExtraText>La función require juega un papel fundamental en el desarrollo de contratos Solidity seguros y confiables. Al emplear la función require de manera efectiva, puede validar entradas, hacer cumplir condiciones y mejorar la integridad general de la lógica de su contrato.</ExtraText>
            <Code code={code.hrequire}/>
            <SubTitle>Assert</SubTitle>
            <ExtraText>La función de afirmación se utiliza para verificar errores internos en el código del contrato. Toma una expresión booleana como argumento, genera una excepción y revierte la transacción si la expresión se evalúa como falsa. Sin embargo, a diferencia de la función require, la función afirmar solo debe usarse para verificar errores internos en el código del contrato que nunca deberían ocurrir. He aquí un ejemplo:</ExtraText>
            <Code code={code.hassert}/>
            <SubTitle>Revert</SubTitle>
            <ExtraText>La función de reversión es similar a la función require en el sentido de que se utiliza para revertir una transacción si no se cumple una condición. Sin embargo, la función de reversión proporciona más flexibilidad en el manejo de errores y le permite proporcionar una cadena de motivo para explicar por qué se revirtió la transacción. He aquí un ejemplo:</ExtraText>
            <Code code={code.hrevert}/>
        </Layout>
    )
}