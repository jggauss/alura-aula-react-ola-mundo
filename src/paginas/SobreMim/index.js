import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/fotojgcurriculo.png'

export default function SobreMim() {
    return (
        <div>
            <PostModelo
                fotoCapa={fotoCapa}
                titulo="Sobre mim"
            >
                <h3 className={styles.subtitulo}>
                </h3>
                <img
                    src={fotoSobreMim}
                    alt="Foto José Geraldo"
                    className={styles.fotoSobreMim}
                />
                <p className={styles.paragrafo}>
                    Olá, meu nome é José Geraldo e estou feliz em vê-lo por aqui.
                </p>
                <p className={styles.paragrafo}>
                    Minha história com programação começou em 1991 quando graduei no curso Superior em Análise e processamento de dados no Centro de Ensino Superior de Juiz de Fora. Eu aprendi lógica de programação e o básico de várias linguagens, cobol, Pascal, Clipper e C++, estas linguagens, com exceção do C+ não são mais utilizadas. Desde criança eu já gostava de programação e no início da década de 90 eu já havia tido dois computadores. Um TK85 e um MSX-Gradiente XP-350
                </p>
                <p className={styles.paragrafo}>
                    Eu trabalhava no Banco Bemge para pagar a faculdade que era particular. Como fui sendo promovido no Banco, segui carreira bancária e depois de formado não segui a carreira de programação. Trabalhei durante 24 anos em Banco tendo ido depois para o Banco Itaú. Onde continuei a carreira de bancário atendendo empresas. 
                    Hoje sou aposentado pela previdência privada do banco.
                </p>
                <p className={styles.paragrafo}>
                    Em dezembro de 2015 eu sai do banco e abri uma empresa de vendas pela internet. Hoje tenho um sócio que cuida do dia a dia da empresa e toda a parte de integração com lojas virtuais já foi realizada e os funcionários conduzem o trabalho. Eu não faço parte do dia a dia da empresa.
                </p>
                <p className={styles.paragrafo}>
                    Eu voltei a estudar programação em 2021 pois sentia nescessidade de fazer algumas alterações no site da empresa. Então eu comecei a estudar e não parei mais. Estudei CSS, HTML, Javascript, Mysql, MongoDB, Php, React, Testes, Design, AWS, Redes, Wordpress e o que mais aparece pela frente. Eu não paro. Gosto de estar sempre aprendendo.
                </p>
                <p className={styles.paragrafo}>
                    Hoje eu procuro uma vaga para começar em um time de programação. Sei que preciso começar de baixo, então desejo começar como programador Jr. Sou muito esforçado, criativo e gosto de implementar as técnicas que aprendo. Tenho muita abertura para aprender e sinto falta de trabalhar em uma equipe onde possa aprender com programadores mais experientes.
                    Muito obrigado por sua atenção e espero ter a oportunidade de conversarmos.
                    Atenciosamente,
                    José Geraldo
                </p>


            </PostModelo>
        </div>
    )
}
