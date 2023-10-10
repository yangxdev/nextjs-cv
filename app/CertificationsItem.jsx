const CertificationsItem = ({ title, grade }) => (
    <li className="certification-item">
        <span className="certification-title">{title}:&nbsp;</span>
        <span className="certification-grade"><strong>{grade}</strong></span>
    </li>
);

export default CertificationsItem;