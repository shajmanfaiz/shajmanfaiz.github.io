//  data={.js}
import { useTranslation } from 'react-i18next';

export const data = () => {
  const { t } = useTranslation();

  return {
    name: t('name'),
    position: t('position'),
    contactInformation: t('contactInformation'),
    email: t('email'),
    address: t('address'),
    domain: t('domain'),
    resumeLink: t('resumeLink'),
    greeting: t('greeting'),
    contactButtonText: t('contactButtonText'),
    resumeButtonText: t('resumeButtonText'),
    aboutTitle: t('aboutTitle'),
    technicalSkillsTitle: t('technicalSkillsTitle'),
    toolsTitle: t('toolsTitle'),
    projectsTitle: t('projectsTitle'),
    projectsSubtitle: t('projectsSubtitle'),
    navLinks: t('navLinks', { returnObjects: true }),
    socialMedia: t('socialMedia', { returnObjects: true }),
    summary: t('summary'),
    education: t('education', { returnObjects: true }),
    workExperience: t('workExperience', { returnObjects: true }),
    certifications: t('certifications', { returnObjects: true }),
    projects: t('projects', { returnObjects: true }),
    skills: t('skills', { returnObjects: true }),
    languages: t('languages', { returnObjects: true }),
    hobbies: t('hobbies', { returnObjects: true }),
    quote: t('quote'),
    tools: t('tools', { returnObjects: true }),
    contactTitle: t('contactTitle'),
    contactDescription: t('contactDescription'),
    sayHelloButton: t('sayHelloButton'),
  };
};