import SectionItem from "./SectionItem";
import Divider from "./Divider";
import UnimibLogo from './Icons/UnimibIcon';

const Education = () => (
    <div className="card-right-section2-education">
        <h1 className="uppercase font-bold text-xl mb-1">Education</h1>
        <Divider />
        <UnimibLogo />
        <SectionItem 
            title="Bachelor of Computer Science"
            company="University of Milan - Bicocca"
            companyUrl="https://www.unimib.it/"
            startDate="September 2020"
            endDate="July 2023"
            present={false}
            location="Milan, MI"
            locationUrl="https://www.google.com/maps/place/Milan,+Italy"
            description={[
                // "Mobil Devices Programming",
                // "Networks and Operative Systems",
                // "Algorithms and Data Structures",
                // "Software Engineering",
                // "Databases"
            ]}
        />
        <SectionItem 
            title="Diploma of Information Technology"
            company="ITTS Belluzzi - Da Vinci"
            companyUrl="https://www.ittsrimini.edu.it/"
            startDate="September 2015"
            endDate="July 2020"
            present={false}
            location="Rimini, RN"
            locationUrl="https://www.google.com/maps/place/Rimini,+RN"
            description={[
                // "Web Technology",
                // "Computer Networking"
            ]}
        />
    </div>
);

export default Education;