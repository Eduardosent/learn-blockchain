import { Code, ExtraText, SubTitle, Title, TitleDescription } from '../../components'
import Layout from '../../layout/Layout'

export default function TokenMetadata(){
    return(
        <Layout>
            <Title>Crea un toke-spl 2022 con metadata, mintea y transfiere</Title>
            <TitleDescription>Aprenderas a crear un token y agregarle metadata.</TitleDescription>
            <SubTitle>Instalaciones</SubTitle>
            <SubTitle>Instala Solana Cli</SubTitle>
            <ExtraText>Ve a la documentacion oficial para instalar solana-cli en tu equipos</ExtraText>
            <SubTitle>Crea el folder del token</SubTitle>
            <Code code={`mkdir new-token\ncd new-token`}/>
            <SubTitle>Crea el Keypair para el mint authority</SubTitle>
            <ExtraText>Servira para un owner que tendra la autoridad del token</ExtraText>
            <Code code={`solana-keygen grind --starts-with bos:1`}/>
            <ExtraText>Generara un json con el Keypair del bos asi:</ExtraText>
            <Code code={`bosy1VC2BH2gh5fdXA3oKn53EuATLwapLWC4VR2sGHJ.json`}/>
            <SubTitle>Configura solana para que utilice el keypar del bos que generaste</SubTitle>
            <Code code={'solana config set --keypair bosy1VC2BH2gh5fdXA3oKn53EuATLwapLWC4VR2sGHJ.json'}/>
            <ExtraText>Cinfigura para la red que usaras en este caso devnet</ExtraText>
            <Code code={'solana config set --url devnet'}/>
            <ExtraText>Con este comando obtienes la configuracion</ExtraText>
            <Code code={'solana config get'}/>
            <SubTitle>Obtener Sol para devnet</SubTitle>
            <ExtraText>Existen faucets para obtener Sol y solo necesitaras tu wallet que puedes obtener asi:</ExtraText>
            <Code code={'solana address'}/>
            <ExtraText>O puedes hacerlo desde la linea de comandos:</ExtraText>
            <Code code={'solana airdrop 2'}/>
            <ExtraText>Tu defines cuantos SOL recibiras en la red devnet en este caso 2.</ExtraText>
            <SubTitle>Genera el Mint address del token</SubTitle>
            <Code code={'solana-keygen grind --starts-with mnt:1'}/>
            <SubTitle>Habilitar la metadata</SubTitle>
            <Code code={'spl-token create-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb --enable-metadata mntTymSqMU4e1NEDdxJ9XoPN4MitCgQ7xxGW6AuRAWQ.json'}/>
            <SubTitle>Crea la imagen que usaras para tu token</SubTitle>
            <ExtraText>Genera la imagen, guardala en un servidor valido, el siguiente servidor esta recomendado</ExtraText>
            <Code code={'https://app.pinata.cloud/'}/>
            <SubTitle>Crea la metadata</SubTitle>
            <ExtraText>En el folder del token, donde tienes el bos y mint keypairs guarda el metadata.json, y cambia los datos por los datos que tendra tu token, incluyendo una url valida para la imagen del token</ExtraText>
            <Code code={`{
  "name": "Example Token",
  "symbol": "EXMPL",
  "description": "Example token from Solana Making a Token guide.",
  "image": "https://raw.githubusercontent.com/solana-developers/opos-asset/main/assets/CompressedCoil/image.png"
}`}/>
            <SubTitle>Sube la metadata a un servidor</SubTitle>
            <ExtraText>Podras subir tu metadata a un servidor como github cargando tu proyecto y mostrando la url donde esta tu metadata.json asi:</ExtraText>
            <Code code={`https://raw.githubusercontent.com/solana-developers/opos-asset/main/assets/CompressedCoil/metadata.json`}/>
            <ExtraText>Recuerda usar una url valida como en el ejemplo</ExtraText>
            <SubTitle>Agregar la metadata al Token</SubTitle>
            <ExtraText>Inicializa la metadata del token con el siguiente comando:</ExtraText>
            <Code code={`spl-token initialize-metadata mntTymSqMU4e1NEDdxJ9XoPN4MitCgQ7xxGW6AuRAWQ 'Example token' 'EXMPL' https://raw.githubusercontent.com/solana-developers/opos-asset/main/assets/CompressedCoil/metadata.json`}/>
            <SubTitle>Visualiza tu token en Solana Explorer</SubTitle>
            <ExtraText>Ya cargas la metadata a tu token y entonces puede ser visualizado desde Solana Explorer con la siguiente url</ExtraText>
            <Code code={'https://explorer.solana.com/'}/>
            <SubTitle>Crea una cuenta que almacene el suministro de tu token</SubTitle>
            <Code code={'spl-token create-account mntTymSqMU4e1NEDdxJ9XoPN4MitCgQ7xxGW6AuRAWQ'}/>
            <SubTitle>Mintea tu Token</SubTitle>
            <ExtraText>Con el siguiente comando podras generar unidades de tu token, en el ejemplo se crean 100 unidades, si minteas 100 en 10 ocasiones tu suministro sera 1000, puedes generar tokens ilimitadamente a menos que restrinjas el minteo para dar un suministro fijo</ExtraText>
            <Code code={'spl-token mint mntTymSqMU4e1NEDdxJ9XoPN4MitCgQ7xxGW6AuRAWQ 100'}/>
            <SubTitle>Transfiere el Token hacia cualquier wallet</SubTitle>
            <ExtraText>Puedes transferir el token con el siguiente comando:</ExtraText>
            <Code code={'spl-token transfer mntTymSqMU4e1NEDdxJ9XoPN4MitCgQ7xxGW6AuRAWQ 10 (recipient wallet address) --fund-recipient'}/>
        </Layout>
    )
}