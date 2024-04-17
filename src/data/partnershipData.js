import { MdVolunteerActivism, MdAddLocationAlt } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

// Partnership Opportunities to be displayed
export const partnershipData = [
    {
        image: <MdVolunteerActivism className="cta-icon volunteer-icon" />,
        action: 'Volunteer',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        text: 'Become a Volunteer',
        style: 'variation-1'
    },
    {
        image: <FaHandshake className="cta-icon partnership-icon" />,
        action: 'Partner with us',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        text: 'Become a Partner',
        style: 'variation-2'
    },
    {
        image: <MdAddLocationAlt className="cta-icon chapter-icon" />,
        action: 'Build a New Chapter',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        text: 'Check Requirements',
        style: 'variation-3'
    }
];