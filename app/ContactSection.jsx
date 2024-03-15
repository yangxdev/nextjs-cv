import ContactLink from "./ContactLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => (
    <div className="card-left-section1-contacts flex flex-nowrap text-sm font-light">
        <div className="card-left-section1-contacts-left mr-4 ml-1 ">
            <ContactLink
                href="https://www.linkedin.com/in/yangxng"
                iconName="linkedin"
                label="linkedin.com/in/yangxdev"
                icon={<FontAwesomeIcon width="14" icon={faLinkedinIn} />}
            />
            <ContactLink
                href="https://github.com/yangxdev"
                iconName="github"
                label="github.com/yangxdev"
                icon={<FontAwesomeIcon width="14" icon={faGithub} />}
            />
            <ContactLink
                href="https://telegram.me/yangxng"
                iconName="telegram"
                label="telegram.me/yangxng"
                icon={<FontAwesomeIcon width="14" icon={faTelegram} />}
            />
        </div>
        <div className="card-left-section1-contacts-right">
            <ContactLink
                href="mailto: yangxdev@gmail.com"
                iconName="email"
                label="yangxdev@gmail.com"
                icon={<FontAwesomeIcon width="14" icon={faEnvelope} />}
            />
            <ContactLink
                href="tel: +39 3342229699"
                iconName="phone"
                label="+39 334 222 9699"
                icon={<FontAwesomeIcon width="14" icon={faPhone} />}
            />
            <ContactLink
                href="https://www.google.com/maps/place/Milan,+Italy"
                iconName="location"
                label="Milan, Italy"
                icon={<FontAwesomeIcon width="14" icon={faMapMarkerAlt} />}
            />
        </div>
    </div>
);

export default ContactSection;