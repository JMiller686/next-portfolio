import SectionTitle from './SectionTitle';
import ContentBox from '../components/ContentBox';
import WorkItem from './WorkItem';

import WORK_DATA from '../data/WORK_DATA';


import pageStyles from '../styles/Page.module.scss'

const Work = () => {
    return (
        <section className={pageStyles.container} id="work">
            <SectionTitle eyebrow='Check Out My' title='Work' />

            <ContentBox>
                {WORK_DATA.map((item, idx) => (
                    <WorkItem 
                        key={item.id}
                        id={item.id}
                        imgSrc={item.imgSrc}
                        imgAlt={item.imgAlt}
                        title={item.title}
                        description={item.description}
                        siteUrl={item.siteUrl}
                    />
                ))}
                
            </ContentBox>
        </section>
    )
}

export default Work;
