import React, { useRef } from 'react'
import Header from '../modules/Header'
import IntroSection from '../modules/IntroSection'
import LegalPersons from '../modules/LegalPersons'
import AnalysisTools from '../modules/AnalysisTools'
import IndividualSolutions from '../modules/IndividualSolutions'
import Footer from '../modules/Footer'

const Home = () => {
    const legalPersonsRef = useRef(null);
    const analysisToolsRef = useRef(null);
    const individualSolutionsRef = useRef(null);
    const footerRef = useRef(null);

    const handleButtonClick = () => {
        legalPersonsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleFourButtonClick = () => {
        individualSolutionsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleFooterButtonClick = (index) => {
        if(index === 0) {
            legalPersonsRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if(index === 1) {
            individualSolutionsRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if(index === 2) {
            footerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLegalPersonsButtonClick = (index) => {
        if (index < 2) {
            analysisToolsRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            handleFourButtonClick();
        }
    };

    return (
        <>  
            <Header onFooterButtonClick={handleFooterButtonClick} />
            <IntroSection onButtonClick={handleButtonClick} />
            <div ref={legalPersonsRef}>
                <LegalPersons onButtonClick={handleLegalPersonsButtonClick} />
            </div>
            <div ref={analysisToolsRef}>
                <AnalysisTools onButtonClick={handleFourButtonClick} />
            </div>
            <div ref={individualSolutionsRef}>
                <IndividualSolutions />
            </div>
            <div ref={footerRef}>
                <Footer onFooterButtonClick={handleFooterButtonClick} />
            </div>
        </>
    )
}

export default Home;
