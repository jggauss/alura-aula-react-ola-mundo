import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/fotojgcurriculo.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá Mundo
            </h1>
            <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou José Geraldo Araújo, programador. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)</p>
        </div>
        <div className={styles.imagens}>
            <img className={styles.imagens} alt="Foto José Geraldo"
            src={circuloColorido}
            aria-hidden={true}
            />
            <img className={styles.minhaFoto}
            src={minhaFoto}
            alt="Foto José Geraldo"
            />
        </div>
    </div>
  )
}
