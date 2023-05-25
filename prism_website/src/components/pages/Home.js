import React, { useRef } from 'react'
import IntroSection from '../modules/IntroSection'
import LegalPersons from '../modules/LegalPersons'
import AnalysisTools from '../modules/AnalysisTools'
import IndividualSolutions from '../modules/IndividualSolutions'

const Home = () => {
    const legalPersonsRef = useRef(null);
    const analysisToolsRef = useRef(null);
    const individualSolutionsRef = useRef(null);

    const handleButtonClick = () => {
        legalPersonsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleFourButtonClick = () => {
        individualSolutionsRef.current.scrollIntoView({ behavior: 'smooth' });
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
        </>
    )
}

export default Home;

