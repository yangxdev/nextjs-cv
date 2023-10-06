const ContactLink = (props) => (
    <div className={`card-left-section1-contacts-${props.iconName} mb-1`}>
        <a className="flex items-center" href={props.href} target="_blank" rel="noopener noreferrer">
            {props.icon}
            <div className="ml-1">{props.label}</div>
        </a>
    </div>
);

export default ContactLink;
