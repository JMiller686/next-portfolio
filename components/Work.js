import SectionTitle from './SectionTitle'
import ContentBox from '../components/ContentBox'
import WorkItem from './WorkItem'

import southWackerImg from '../public/200southwacker.png';
import wwfamImg from '../public/wwfam.png';
import istImg from '../public/ist.png';
import abcImg from '../public/abccustomwebsites.png';
import playworksImg from '../public/playworkschicago.png';


import pageStyles from '../styles/Page.module.scss'

const Work = () => {
    return (
        <section className={pageStyles.container} id="work">
            <SectionTitle eyebrow='Check Out My' title='Work' />

            <ContentBox>
                <WorkItem 
                    imgSrc={southWackerImg}
                    imgAlt="200 South Wacker Commerical Office Space"
                    title="200 South Wacker"
                    description="HTML, CSS, JavaScript, ASP.NET"
                    siteUrl="https://200southwacker.com"
                />

                <WorkItem 
                    imgSrc={wwfamImg}
                    imgAlt="Weight Watchers Mississippi, Southern Alabama and Florida Panhandle"
                    title="Weight Watchers FAM"
                    description="HTML, CSS, JavaScript, ASP.NET"
                    siteUrl="https://wwfam.com"
                />

                <WorkItem 
                    imgSrc={istImg}
                    imgAlt="Illinois State Treasurer"
                    title="Illinois State Treasurer"
                    description="HTML, CSS, JavaScript, ASP.NET"
                    siteUrl="https://illinoistreasurer.gov"
                />

                <WorkItem 
                    imgSrc={abcImg}
                    imgAlt="ABC Custom Contractor Websites"
                    title="ABC Custom Websites"
                    description="HTML, CSS, JavaScript, ASP.NET"
                    siteUrl="https://abccustomwebsites.com"
                />

                <WorkItem 
                    imgSrc={playworksImg}
                    imgAlt="PlayWorks Therapy"
                    title="PlayWorks Therapy"
                    description="Wordpress"
                    siteUrl="https://playworkschicago.com"
                />
            </ContentBox>
        </section>
    )
}

export default Work;
