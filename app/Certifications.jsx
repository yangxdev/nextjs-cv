import Divider from "./Divider";
import CertificationsItem from "./CertificationsItem";

const Certifications = () => (
    <div className="card-right-section4-certifications">
        <h1 className="uppercase font-bold text-xl mb-1">Certifications</h1>
        <Divider />
        <CertificationsItem title="OLS English" grade="C1" />
        <CertificationsItem title="Open Badge Bbetween English" grade="C1" />
    </div>
);

export default Certifications;