import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";
import { code } from "./const";

export default function Solidity2(){
    return(
        <Layout>
            <Title>Sintaxis de Solidity Part 2</Title>
            <TitleDescription>Sigue explorando la sintaxis del lenguaje de los smart contract de Ethereum para tener un mayor dominio</TitleDescription>
            <SubTitle>Llamar a contratos principales</SubTitle>
            <ExtraText>Los contratos principales se pueden llamar directamente o utilizando la palabra clave super.</ExtraText>
            <ExtraText>Al utilizar la palabra clave super, se llamarán todos los contratos principales inmediatos.</ExtraText>
            <Code code={code.callfathercontract}/>
            <SubTitle>Visibilidad</SubTitle>
            <ExtraText>Las funciones y variables de estado deben declarar si son accesibles mediante otros contratos.</ExtraText>
            <ExtraText>Las funciones se pueden declarar como</ExtraText>
            <ExtraText>° public- cualquier contrato y cuenta pueden llamar</ExtraText>
            <ExtraText>° private- sólo dentro del contrato que define la función</ExtraText>
            <ExtraText>° internal- sólo contrato interno que hereda una internalfunción</ExtraText>
            <ExtraText>° external- solo otros contratos y cuentas pueden llamar</ExtraText>
            <ExtraText>Las variables de estado se pueden declarar como public, private o internal pero no external.</ExtraText>
            <Code code={code.visibility}/>
            <SubTitle>Interface</SubTitle>
            <ExtraText>Puede interactuar con otros contratos declarando un Interface.</ExtraText>
            <ExtraText>Interface</ExtraText>
            <ExtraText>° no se pueden implementar funciones</ExtraText>
            <ExtraText>° puede heredar de otras interfaces</ExtraText>
            <ExtraText>° todas las funciones declaradas deben ser externas</ExtraText>
            <ExtraText>° no se puede declarar un constructor</ExtraText>
            <ExtraText>° no se pueden declarar variables de estado</ExtraText>
            <Code code={code.interface}/>
            <SubTitle>Payable</SubTitle>
            <ExtraText>Las funciones y direcciones declaradas payable pueden figurar ether en el contrato.</ExtraText>
            <Code code={code.payable}/>
            <SubTitle>Enviar y Recibir Ether en un contrato</SubTitle>
            <SubTitle>¿Cómo enviar éter?</SubTitle>
            <ExtraText>Puede enviar Ether a otros contratos mediante</ExtraText>
            <ExtraText>° transfer (2300 gas, error de lanzamiento)</ExtraText>
            <ExtraText>° send (2300 gasolina, devuelve bool)</ExtraText>
            <ExtraText>° call (reenvía todo el gas o establece el gas, devuelve bool)</ExtraText>
            <SubTitle>¿Qué método deberías utilizar?</SubTitle>
            <ExtraText>call en combinación con la protección de reentrada es el método recomendado para usar después de diciembre de 2019.</ExtraText>
            <SubTitle>¿Cómo recibir éter?</SubTitle>
            <ExtraText>Un contrato que recibe Ether debe tener al menos una de las funciones siguientes</ExtraText>
            <ExtraText>° receive() external payable</ExtraText>
            <ExtraText>° fallback() external payable</ExtraText>
            <Code code={code.sendyreceive}/>
            <SubTitle>Llamar a otro contrato</SubTitle>
            <ExtraText>El contrato puede llamar a otros contratos de 2 maneras.</ExtraText>
            <ExtraText>La forma más sencilla es simplemente llamarlo, como A.foo(x, y, z).</ExtraText>
            <ExtraText>Otra forma de llamar a otros contratos es utilizar el nivel bajo call.</ExtraText>
            <ExtraText>Este método no se recomienda.</ExtraText>
            <Code code={code.callAnother}/>
            <SubTitle>Contrato que crea otros contratos</SubTitle>
            <ExtraText>Los contratos pueden ser creados por otros contratos usando la palabra clave new. Desde 0.8.0, las palabras clave new admiten funciones create2 especificando opciones salt.</ExtraText>
            <Code code={code.createnew}/>
            <SubTitle>Try catch</SubTitle>
            <ExtraText>try / catch solo puede detectar errores de llamadas a funciones externas y creación de contratos.</ExtraText>
            <Code code={code.trycatch}/>
            <SubTitle>Import</SubTitle>
            <ExtraText>Puede importar archivos locales y externos en Solidity.</ExtraText>
            <SubTitle>Local</SubTitle>
            <ExtraText>Aquí esta la estructura de nuestro folder.</ExtraText>
            <Code code={code.foldstruc}/>
            <ExtraText>Foo.sol</ExtraText>
            <Code code={code.importlocalfoo}/>
            <ExtraText>Import.sol</ExtraText>
            <Code code={code.importlocalimp}/>
            <SubTitle>External</SubTitle>
            <ExtraText>También puedes importar desde GitHub simplemente copiando la URL.</ExtraText>
            <Code code={code.externalimp}/>
            <SubTitle>Library</SubTitle>
            <ExtraText>Las bibliotecas son similares a los contratos, pero no puedes declarar ninguna variable de estado y no puedes enviar ether.</ExtraText>
            <ExtraText>Una biblioteca está integrada en el contrato si todas las funciones de la biblioteca son internas. De lo contrario, la biblioteca debe implementarse y luego vincularse antes de implementar el contrato.</ExtraText>
            <Code code={code.library}/>
            <SubTitle>ABI encode y decode</SubTitle>
            <ExtraText>abi es un formato usado para convertir datos en bytes los cuales se leen como una especie de hash, por ejemplo un uint 5 convertido en bytes sería igual a 0x0000000000000000000000000000000000000000000000000000000000000005, y 0x0000000000000000000000000000000000000000000000000000000000000005 en bytes decodeado sería igual a uint 5, con abi puedes en un solo dato bytes hashear varios datos a la vez como en el siguiente ejemplo:</ExtraText>
            <Code code={code.abi}/>
            <SubTitle>Hash con Keccak256</SubTitle>
            <ExtraText>keccak256 calcula el hash Keccak-256 de la entrada.</ExtraText>
            <ExtraText>Algunos casos de uso son:</ExtraText>
            <ExtraText>° Crear una identificación única determinista a partir de una entrada</ExtraText>
            <ExtraText>° Esquema de compromiso-revelación</ExtraText>
            <ExtraText>° Firma criptográfica compacta (firmando el hash en lugar de una entrada más grande)</ExtraText>
            <ExtraText>Un Hash sirve para esconder una clave, por ejemplo una constraseña hasheada para que nadie pueda ver el valor guardado, solo quien la creo la puede volver a introducir y comrpobar que sea la misma, igualando la misma clave y convertida en abi.encodePacked u otro tipo de encode, dentro de un keccak función con el hash creado de la misma clave al igualarlos obtendrá true, tal como se muestra en la función guess.</ExtraText>
            <Code code={code.keccak256}/>
            <SubTitle>Verificando firma</SubTitle>
            <ExtraText>Los mensajes pueden firmarse fuera de la cadena y luego verificarse en la cadena mediante un contrato inteligente.</ExtraText>
            <Code code={code.verifysign}/>
            <SubTitle>Técnicas de ahorro de gas</SubTitle>
            <ExtraText>Algunas técnicas para ahorrar gas.</ExtraText>
            <ExtraText>° Reemplazando memory con call data</ExtraText>
            <ExtraText>° Cargando variable de estado a la memoria</ExtraText>
            <ExtraText>° Reemplace el bucle i++ con ++i</ExtraText>
            <ExtraText>° Elementos de matriz de almacenamiento en caché</ExtraText>
            <ExtraText>° Cortocircuito</ExtraText>
        </Layout>
    )
}