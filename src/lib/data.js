import enCommon from '../../locales/en/common.json';
import arCommon from '../../locales/ar/common.json';

const translations = {
  en: enCommon,
  ar: arCommon,
};

export const data = (locale = 'en') => {
  const tData = translations[locale] || translations['en'];
  const t = (key) => {
    const value = tData[key];
    if (value === undefined) return key;
    return value;
  };
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
    navLinks: t('navLinks'),
    socialMedia: t('socialMedia'),
    summary: t('summary'),
    education: t('education'),
    workExperience: t('workExperience'),
    certifications: t('certifications'),
    projects: t('projects'),
    skills: t('skills'),
    languages: t('languages'),
    hobbies: t('hobbies'),
    quote: t('quote'),
    tools: t('tools'),
    contactTitle: t('contactTitle'),
    contactDescription: t('contactDescription'),
    sayHelloButton: t('sayHelloButton'),
  };
};
