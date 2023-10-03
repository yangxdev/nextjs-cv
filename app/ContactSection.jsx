import ContactLink from "./ContactLink";
import GithubIcon from './Icons/GithubIcon';
import LinkedinIcon from './Icons/LinkedinIcon';
import InstagramIcon from './Icons/InstagramIcon';
import EmailIcon from './Icons/EmailIcon';
import PhoneIcon from './Icons/PhoneIcon';
import LocationIcon from './Icons/LocationIcon';

const ContactSection = () => (
    <div className="card-left-section1-contacts flex flex-nowrap text-sm font-light">
        <div className="card-left-section1-contacts-left mr-4">
            <ContactLink
                href="https://github.com/yangxdev"
                iconName="github"
                label="github.com/yangxdev"
                icon={<GithubIcon />}
            />
            <ContactLink
                href="linkedin.com/in/yangxdev"
                iconName="linkedin"
                label="linkedin.com/in/yangxng"
                icon={<LinkedinIcon />}
            />
            <ContactLink
                href="instagram.com/yang.xng"
                iconName="instagram"
                label="instagram.com/yang.xng"
                icon={<InstagramIcon />}
            />
        </div>
        <div className="card-left-section1-contacts-right">
            <ContactLink
                href="mailto: yangxdev@gmail.com"
                iconName="email"
                label="yangxdev@gmail.com"
                icon={<EmailIcon />}
            />
            <ContactLink
                href="tel: +39 3342229699"
                iconName="phone"
                label="+39 3342229699"
                icon={<PhoneIcon />}
            />
            <ContactLink
                href="https://www.google.com/maps/place/Milan,+Italy"
                iconName="location"
                label="Milan, Italy"
                icon={<LocationIcon />}
            />
        </div>
    </div>
);

export default ContactSection;