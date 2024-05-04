import { MdVolunteerActivism, MdAddLocationAlt } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

// Partnership Opportunities to be displayed
export const partnershipData = [
    {
        image: <MdVolunteerActivism className="cta-icon volunteer-icon" />,
        action: 'Join Our Team',
        info: 'Help shape the future of quantum! Collaborate with passionate minds on high-impact initiatives.',
        text: 'Become a Volunteer',
        style: 'variation-1'
    },
    {
        image: <FaHandshake className="cta-icon partnership-icon" />,
        action: 'Partner with us',
        info: 'Upskill your workforce and accelerate research and industry applications through our programs.',
        text: 'Become a Partner',
        style: 'variation-2'
    },
    {
        image: <MdAddLocationAlt className="cta-icon chapter-icon" />,
        action: 'Build a New Chapter',
        info: 'Lead the local quantum movement.  Spark a quantum revolution in your region!',
        text: 'Check Requirements',
        style: 'variation-3'
    }
];