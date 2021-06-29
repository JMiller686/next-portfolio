import SectionTitle from './SectionTitle'
import ContentBox from '../components/ContentBox'
import WorkItem from './WorkItem'

import WORK_DATA from '../data/WORK_DATA';

import southWackerImg from '../public/200southwacker.png';
import wwfamImg from '../public/wwfam.png';
import istImg from '../public/ist.png';
import abcImg from '../public/abccustomwebsites.png';
import playworksImg from '../public/playworkschicago.png';


import pageStyles from '../styles/Page.module.scss'

const Work = () => {
    console.log(WORK_DATA)
    return (
        <section className={pageStyles.container} id="work">
            <SectionTitle eyebrow='Check Out My' title='Work' />

            <ContentBox>
                {
                    WORK_DATA.map(item => (
                        <WorkItem 
                            title={item.title}
                            imgSrc={item.imgSrc}
                            imgAlt={item.imgAlt}
                            description={item.description}
                            siteUrl={item.siteUrl}
                        />
                    ))
                }
            </ContentBox>
        </section>
    )
}

export default Work;
