import React, { useCallback, useState } from 'react';
import Footer from '../../components/Footer';
import PersonnalData from './PersonnalData';
import ProjectDescription from './ProjectDescription';
import ProjectSpecialities from './ProjectSpecialities';
import Summary from './Summary';

const ProjectDetails = () => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({
        name: '',
        email: '',
        skypeId: '',
        description: '',
        image: 'imgs/avatar.png'
    });

    const [image, setImage] = useState('imgs/avatar.png');

    const handleNextStep = useCallback((e) => {
        setStep(p => p + 1)
    }, []);
    const handlePreviousStep = useCallback((e) => {
        setStep(p => p - 1)
    }, []);

    const handleChange = useCallback(({currentTarget}) => {
        const { name, value} = currentTarget;
        setData(d => ({...d, [name]: value}));
    }, []);

    let content = null;

    switch (step) {
        case 1:
            content = <PersonnalData handleChange={handleChange} data={data} setImage={setImage} image={image}/>;
            break;
        case 2: 
            content = <ProjectDescription handleChange={handleChange} data={data} />
            break;
        case 3:
            content = <ProjectSpecialities />
            break;
        case 4: 
            content = <Summary data={data}/>
            break;
        default:
            break;
    }

    return(
        <>
            <section className="container">
                { content }
                <div className="navigation">
                    {step > 1 && <button className="btn btn-primary m-2" onClick={handlePreviousStep}><i className="fas fa-arrow-left"></i> Previous </button>}
                    {step < 4 && <button className="btn btn-primary m-2" onClick={handleNextStep}> Next <i className="fas fa-arrow-right"></i></button>}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ProjectDetails;