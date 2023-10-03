const ContactLink = ({ href, iconName, label, icon }) => (
    <div className={`card-left-section1-contacts-${iconName} mb-1`}>
        <a className="flex items-center" href={href} target="_blank" rel="noopener noreferrer">
            {icon}
            <div className="ml-1">{label}</div>
        </a>
    </div>
);

export default ContactLink;
