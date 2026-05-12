import './Projetos.css'
import { ProjectCard } from '../../../../components/ProjectCard/ProjectCard'
import imgMsJJ from '../../../../assets/imgMsJJ.png'
import imgEletroline from '../../../../assets/imgEletroline.png'

const projetos = [
    {
        nome: 'MS Jiu-Jitsu',
        descricao: 'Projeto real de landing page moderna para uma academia de jiu-jitsu, com seções de metodologia, localização interativa, galeria, depoimentos e matrícula.',
        imagem: imgMsJJ,
        tecnologias: ['React', 'TypeScript', 'CSS'],
        linkVercel: 'https://ms-jiujitsu.vercel.app/',
        linkGithub: 'https://github.com/gabe-lima/ms-jiujitsu',
    },

    {
        nome: 'Eletroline Eletrônica',
        descricao: 'Projeto real de um site para uma assistência técnica autorizada e renomada, de marcas como JBL, Harman, Crown, etc.',
        imagem: imgEletroline,
        tecnologias: ['React', 'TypeScript', 'CSS'],
        linkVercel: 'https://eletroline.com.br/',
        linkGithub: 'https://github.com/gabe-lima/ms-jiujitsu',
    },
    // adicione novos projetos aqui
]

export function Projetos() {
    return (
        <section id="projetos" className="projetos">
            <div className="projetos-container">
                <h2 className="projetos-titulo">Projetos</h2>
                <p className="projetos-subtitulo">Alguns dos projetos que desenvolvi recentemente.</p>

                <div className="projetos-grid">
                    {projetos.map((projeto) => (
                        <ProjectCard key={projeto.nome} {...projeto} />
                    ))}
                </div>
            </div>
        </section>
    )
}