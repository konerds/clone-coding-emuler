import { IObjProcessWork, IObjRoster, IObjTeam } from '../interface';
import IconCircleStep1 from '../assets/image/icon/icon-circle-step1.svg';
import IconCircleStep2 from '../assets/image/icon/icon-circle-step2.svg';
import IconCircleStep3 from '../assets/image/icon/icon-circle-step3.svg';
import IconCircleStep4 from '../assets/image/icon/icon-circle-step4.svg';
import IconCircleStep5 from '../assets/image/icon/icon-circle-step5.svg';
import IconProcessWork1 from '../assets/image/icon/icon-step1-visual-design.svg';
import IconProcessWork2 from '../assets/image/icon/icon-step2-webflow-dev.svg';
import IconProcessWork3 from '../assets/image/icon/icon-step3-feedback.svg';
import IconProcessWork4 from '../assets/image/icon/icon-step4-onboarding.svg';
import IconProcessWork5 from '../assets/image/icon/icon-step5-launch.svg';
import ImgProfileDan from '../assets/image/img-profile-dan.png';
import ImgArrowDan from '../assets/image/img-arrow-dan.svg';
import ImgFact1ProfileDan from '../assets/image/img-fact1-dan.png';
import ImgFact2ProfileDan from '../assets/image/img-fact2-dan.png';
import ImgProfileAdam from '../assets/image/img-profile-adam.png';
import ImgFact1ProfileAdam from '../assets/image/img-fact1-adam.png';
import ImgFact2ProfileAdam from '../assets/image/img-fact2-adam.png';
import ImgArrowAdam from '../assets/image/img-arrow-adam.svg';
import ImgPerson1Roster from '../assets/image/img-person1-roster.png';
import ImgPerson2Roster from '../assets/image/img-person2-roster.png';
import ImgPerson3Roster from '../assets/image/img-person3-roster.png';
import ImgPerson4Roster from '../assets/image/img-person4-roster.png';
import ImgPerson5Roster from '../assets/image/img-person5-roster.png';

export const listObjProcessWork: IObjProcessWork[] = [
  {
    iconStep: IconCircleStep1,
    image: IconProcessWork1,
    title: 'Share your designs',
    desc: {
      sentence: 'Determine costs and timeline...',
      paragraph:
        'We review your designs in detail and provide you with a fixed-price-breakdown for each page and a timeline for the project.',
    },
  },
  {
    iconStep: IconCircleStep2,
    image: IconProcessWork2,
    title: 'Begin development',
    desc: {
      sentence: 'Begin building on Webflow...',
      paragraph: `If you're happy with the price, we'll start the work right away, by building each page across mobile, tablet and desktop.`,
    },
  },
  {
    iconStep: IconCircleStep3,
    image: IconProcessWork3,
    title: 'Provide feedback',
    desc: {
      sentence: 'Add the final polish...',
      paragraph: `Once we're 80% of the way through to completion, we will share a link for you to review the website on a staging site and provide feedback.`,
    },
  },
  {
    iconStep: IconCircleStep4,
    image: IconProcessWork4,
    title: 'Webflow training & support',
    desc: {
      sentence: 'Learn how to use Webflow...',
      paragraph:
        'We provide you with post-30 day launch support and a library of personalised tutorials on how to use your new website so that you are well equiped to take control of the website.',
    },
  },
  {
    iconStep: IconCircleStep5,
    image: IconProcessWork5,
    title: 'Launch new website',
    desc: {
      sentence: 'Release it to the world...',
      paragraph:
        'Once the website has been put through final testing, we will transfer the website to your own Webflow account and domain and launch the website on your desired date.',
    },
  },
];

export const listObjTeam: IObjTeam[] = [
  {
    introduce:
      'Dan takes care of day to day business operations, ensures projects run smoothly and finds the best Webflow talent to help execute projects.',
    imageProfile: ImgProfileDan,
    positionProfile: 'co-founder',
    nameProfile: 'Dan',
    iconArrow: ImgArrowDan,
    textFact: '"driven & friendly"',
    imageFact1: ImgFact1ProfileDan,
    altImageFact1:
      'Image and text that reads &quot;started his first business at age 15&quot;',
    imageFact2: ImgFact2ProfileDan,
    altImageFact2:
      'Image and text that reads &quot;can play beethoven blindfolded&quot;',
  },
  {
    introduce:
      'Adam provides creative direction for the business and ensures all projects ensures your website will be built on Webflow, pixel perfect.',
    imageProfile: ImgProfileAdam,
    positionProfile: 'co-founder',
    nameProfile: 'Adam',
    iconArrow: ImgArrowAdam,
    textFact: '"passionate & creative"',
    imageFact1: ImgFact1ProfileAdam,
    altImageFact1: 'Image and text that reads &quot;can moonwalk like MJ&quot;',
    imageFact2: ImgFact2ProfileAdam,
    altImageFact2:
      'Image and text that reads &quot;taught himself photoshop at age 12&quot;',
  },
];

export const listObjRoster: IObjRoster[] = [
  {
    name: '1',
    imagePerson: ImgPerson1Roster,
  },
  {
    name: '2',
    imagePerson: ImgPerson2Roster,
  },
  {
    name: '3',
    imagePerson: ImgPerson3Roster,
  },
  {
    name: '4',
    imagePerson: ImgPerson4Roster,
  },
  {
    name: '5',
    imagePerson: ImgPerson5Roster,
  },
];
