import SectionTitle from './SectionTitle'
import ContentBox from '../components/ContentBox'

import {DiHtml5, DiCss3, DiSass, DiJsBadge, DiReact, DiJqueryLogo, DiWordpress, DiNetmagazine, DiGithubBadge, DiVisualstudio, DiPhotoshop} from 'react-icons/di'
import {SiNextDotJs} from 'react-icons/si'
import pageStyles from '../styles/Page.module.scss'

const Skills = () => {
    return (
        <section className={pageStyles.container} id="skills">
            <SectionTitle eyebrow='Take a look at my' title='Skills' />

            <ContentBox>
                <div className={pageStyles.skillWrap}>
                    <div className={pageStyles.skillBox}>
                        <DiHtml5 className={pageStyles.html} />
                        <p>HTML</p>
                    </div>

                    <div className={pageStyles.skillBox}>
                        <DiCss3 className={pageStyles.css} />
                        <p>CSS</p>
                    </div>

                    <div className={pageStyles.skillBox}>
                        <DiSass className={pageStyles.sass} />
                        <p>Sass</p>
                    </div>

                    <div className={pageStyles.skillBox}>
                        <DiJsBadge className={pageStyles.js} />
                        <p>Javascirpt</p>
                    </div>

                    <div className={pageStyles.skillBox}>
                        <DiReact className={pageStyles.react} />
                        <p>React</p>
                    </div>

                    <div className={pageStyles.skillBox}>
                        <SiNextDotJs className={pageStyles.next} />
                        <p>Next.js</p>
                    </div>

                    <div className={pageStyles.skillBox}>
                        <DiJqueryLogo className={pageStyles.jQuery} />
                        <p>jQuery</p>
                    </div>

                    <div className={pageStyles.skillBox}>
                        <DiNetmagazine className={pageStyles.net} />
                        <p>.NET</p>
                    </div>

                    <div className={pageStyles.skillBox}>
                        <DiWordpress className={pageStyles.wordpress} />
                        <p>Wordpress</p>
                    </div>

                    <div className={pageStyles.skillBox}>
                        <DiGithubBadge className={pageStyles.github} />
                        <p>Github</p>
                    </div>

                    <div className={pageStyles.skillBox}>
                        <DiPhotoshop className={pageStyles.photoshop}/>
                        <p>Photoshop</p>
                    </div>

                    <div className={pageStyles.skillBox}>
                        <DiVisualstudio className={pageStyles.visualStudio}/>
                        <p>Visual Studio</p>
                    </div>
                </div>
            </ContentBox>
        </section>
    )
}

export default Skills;
