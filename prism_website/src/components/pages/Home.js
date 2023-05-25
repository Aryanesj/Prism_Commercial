import React, { useRef } from 'react'
import IntroSection from '../modules/IntroSection'
import LegalPersons from '../modules/LegalPersons'
import AnalysisTools from '../modules/AnalysisTools'
import IndividualSolutions from '../modules/IndividualSolutions'

const Home = () => {
    const legalPersonsRef = useRef(null);
	const individualSolutionsRef = useRef(null);

    const handleButtonClick = () => {
        legalPersonsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

	const handleFourButtonClick = () => {
        individualSolutionsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <IntroSection onButtonClick={handleButtonClick} />
            <div ref={legalPersonsRef}>
                <LegalPersons />
            </div>
            <AnalysisTools onButtonClick={handleFourButtonClick} />
			<div ref={individualSolutionsRef}>
				<IndividualSolutions />
			</div>
        </>
    )
}

export default Home;
