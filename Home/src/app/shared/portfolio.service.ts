import { Injectable } from '@angular/core';
import { GalleryItem } from '../home/gallery/galleryItem';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getPortfolio(): GalleryItem[]{
    return PORTFOLIO;
  }

  getItemById(id: number): GalleryItem{
    console.log(PORTFOLIO.find(item => item.id === +id));
    return PORTFOLIO.find(item => item.id === +id);
  }
}

const PORTFOLIO: GalleryItem[] = [
  {
    id: 1,
    title: 'College Park',
    description: 'Premium Custom school website for College Park, Georgia.',
    thumbnail: 'url("assets/images/Portfolio/CollegePark.png")',
    details: {
      image: 'url("assets/images/Portfolio/CollegePark.png")',
      client: 'West Corporation',
      description: `I developed this premium custom website template using the SchoolMessenger CMS.
      This premium custom site was developed for College Park, Georgia and can be viewed here:
      <a href="https://www.collegeparkga.com/" target="_blank">College Park Website</a>.`,
      startDate: new Date('2018-12-01'),
      endDate: new Date('2018-12-20'),
      technologies: 'HTML5, CSS3, Javascript, jQuery, SchoolMessenger CMS',
      notes: ['Developed the template only. Design was created by a co-worker']
    }
  },
  {
    id: 2,
    title: 'Immaculata HS',
    description: 'Premium Custom school website for district and schools.',
    thumbnail: 'url("assets/images/Portfolio/Immaculata.png")',
    details: {
      image: 'url("assets/images/Portfolio/Immaculata.png")',
      client: 'West Corporation',
      description: `I developed this premium custom website template using the SchoolMessenger CMS.
      This premium custom site was developed for Immaculata High School in New Jersey.
      This template contained a custom homepage, landing pages, and subpage designs. You can view the site here:
      <a href="https://www.immaculatahighschool.org/" target="_blank">Immaculata HS Website</a>.`,
      startDate: new Date('2018-11-01'),
      endDate: new Date('2018-11-30'),
      technologies: 'HTML5, CSS3, Javascript, jQuery, SchoolMessenger CMS',
      notes: ['Developed the template only. Design was created by a co-worker']
    }
  },
  {
    id: 3,
    title: 'Newington PS',
    description: 'Custom school website for district and high school.',
    thumbnail: 'url("assets/images/Portfolio/NPS.png")',
    details: {
      image: 'url("assets/images/Portfolio/NPS.png")',
      client: 'West Corporation',
      description: `I developed this premium custom website template using the SchoolMessenger CMS.
      This premium custom site was developed for Newington Public Schools.
      This template contained a custom homepage and subpage designs. You can view the site here:
      <a href="https://www.npsct.org/" target="_blank">Newington PS Website</a>.`,
      startDate: new Date('2018-10-15'),
      endDate: new Date('2018-10-31'),
      technologies: 'HTML5, CSS3, Javascript, jQuery, SchoolMessenger CMS',
      notes: ['Developed the template only. Design was created by a co-worker']
    }
  },
  {
    id: 4,
    title: 'South Brunswick PS',
    description: 'Premium Custom school website for district and schools.',
    thumbnail: 'url("assets/images/Portfolio/SBSD.png")',
    details: {
      image: 'url("assets/images/Portfolio/SBSD.png")',
      client: 'West Corporation',
      description: `I developed this premium custom website template using the SchoolMessenger CMS.
      This premium custom site was developed for South Brunswick Public Schools.
      This template contained a custom homepage and subpage designs. You can view the site here:
      <a href="https://www.sbschools.org/" target="_blank">South Brunswick PS Website</a>.`,
      startDate: new Date('2018-10-15'),
      endDate: new Date('2018-10-31'),
      technologies: 'HTML5, CSS3, Javascript, jQuery, SchoolMessenger CMS',
      notes: ['Developed the template only. Design was created by a co-worker',
      'The current template on thier site has been modified by the client and is no longer fully representative of what I provided.']
    }
  },
  {
    id: 5,
    title: 'Dental Health PC',
    description: 'Custom healthcare website for dentist office.',
    thumbnail: 'url("assets/images/Portfolio/DHC.png")',
    details: {
      image: 'url("assets/images/Portfolio/DHC.png")',
      client: 'West Corporation',
      description: `I designed and developed this premium custom website template using the SchoolMessenger CMS.
      This premium custom site was developed for Dental Health PC dental offices.
      This template contained a custom homepage and subpage designs. You can view the site here:
      <a href="http://www.hollardentalgroup.com/" target="_blank">Dental Health PC Website</a>.`,
      startDate: new Date('2018-10-01'),
      endDate: new Date('2018-10-03'),
      technologies: 'HTML5, CSS3, Javascript, jQuery, SchoolMessenger CMS',
      notes: ['Designed the UI and developed the front-end',
      'The current template on thier site has been modified by west corportation and the header is different than my original design.']
    }
  },
  {
    id: 6,
    title: 'Dr. Gregory Jann DDS',
    description: 'Custom healthcare website for dentist office with nautical theme.',
    thumbnail: 'url("assets/images/Portfolio/GregoryJannDDS.png")',
    details: {
      image: 'url("assets/images/Portfolio/GregoryJannDDS.png")',
      client: 'West Corporation',
      description: `I designed and developed this premium custom website template using the SchoolMessenger CMS.
      This premium custom site was developed for Dr. Gregory Jann DDS.
      This template contained a custom homepage and subpage designs.
      The website is no longer hosted on SchoolMessengers servers so there is no link to the current implementation`,
      startDate: new Date('2018-10-03'),
      endDate: new Date('2018-10-06'),
      technologies: 'HTML5, CSS3, Javascript, jQuery, SchoolMessenger CMS',
      notes: ['Designed the UI and developed the front-end']
    }
  },
  {
    id: 7,
    title: 'Smiles of Skaneateles',
    description: 'Custom healthcare website for dentist office.',
    thumbnail: 'url("assets/images/Portfolio/Smilesbyskaneateles.png")',
    details: {
      image: 'url("assets/images/Portfolio/Smilesbyskaneateles.png")',
      client: 'West Corporation',
      description: `I designed and developed this premium custom website template using the SchoolMessenger CMS.
      This premium custom site was developed for Smiles of Skaneateles dental offices.
      This template contained a custom homepage and subpage designs. You can view the site here:
      <a href="http://www.smilesofskaneateles.com/" target="_blank">Smiles of Skaneateles Website</a>.`,
      startDate: new Date('2018-10-06'),
      endDate: new Date('2018-10-09'),
      technologies: 'HTML5, CSS3, Javascript, jQuery, SchoolMessenger CMS',
      notes: ['Designed the UI and developed the front-end']
    }
  },
  {
    id: 8,
    title: 'MTS Orthodontics',
    description: 'Custom healthcare website for dentist office.',
    thumbnail: 'url("assets/images/Portfolio/mtsOrtho.png")',
    details: {
      image: 'url("assets/images/Portfolio/mtsOrtho.png")',
      client: 'West Corporation',
      description: `I designed and developed this premium custom website template using the SchoolMessenger CMS.
      This premium custom site was developed for MTS Orthodontics.
      This template contained a custom homepage and subpage designs.
      The website is no longer hosted on SchoolMessengers servers so there is no link to the current implementation`,
      startDate: new Date('2018-10-09'),
      endDate: new Date('2018-10-12'),
      technologies: 'HTML5, CSS3, Javascript, jQuery, SchoolMessenger CMS',
      notes: ['Designed the UI and developed the front-end']
    }
  },
  {
    id: 9,
    title: 'Muskoka Tourism - Wireframes',
    description: 'The preliminary wireframes from the new Muskoka Tourism website.',
    thumbnail: 'url("assets/images/Portfolio/Muskoka.png")',
    details: {
      image: 'url("assets/images/Portfolio/Muskoka.png")',
      client: 'Interview with Pixelcarve',
      description: `This was a quick mockup I created for a job interview for Pixelcarve.
      This was some of my early work so the design is very simple and not representative of my current style.
      I have included this to show my experience with Axure and rapid prototyping with the software.
      Please see the following link for an example of the basic prototype.
      <a href="http://jsiy6x.axshare.com/#g=1&amp;p=home_page" target="_blank">Muskoka Tourism Prototype</a>.`,
      startDate: new Date('2016-09-12'),
      endDate: new Date('2016-09-13'),
      technologies: 'Axure'
    }
  },
  {
    id: 10,
    title: 'LEAP CHILE - Wireframes',
    description: 'Some of the wireframes from the Chilean Scotiabank website.',
    thumbnail: 'url("assets/images/Portfolio/Scotiabank.png")',
    details: {
      image: 'url("assets/images/Portfolio/Scotiabank.png',
      client: 'Scotia Bank International',
      description: `This is the first mockup and interactive prototype I created for my first full-time job with Scotiabank.
      It includes a number of different process flows outlined by the business analysts on the agile team.
      Please view these Axure prototypes here
      <a href="http://c2yg72.axshare.com/#g=1&amp;p=main_menu" target="_blank">Scotiabank Prototypes</a>.`,
      startDate: new Date('2019-02-01'),
      endDate: new Date('2016-09-01'),
      technologies: 'Axure'
    }
  },
  {
    id: 11,
    title: 'Portfolio - Version 1',
    description: 'The older version of my website and my initial portfolio.',
    thumbnail: 'url("assets/images/Portfolio/Old.png")',
    details: {
      image: 'url("assets/images/Portfolio/Old.png")',
      description: `This is the first iteration of my website I made fresh out of university in 2015.
      For a complete tour of the design process and website please see the attached website here:
      <a href="http://www.christopherdavidong.com/Old/process" target="_blank">Old Website (Version 1)</a>.`,
      startDate: new Date('2015-07-01'),
      endDate: new Date('2015-07-06'),
      technologies: 'HTML5, CSS3, Javascript, jQuery, Angular 1',
      notes: ['Created with the original Angular JS Framework',
      'Displayed the entire branding and UX/UI design process',
      'Used an older website design layout with large margins and set content widths']
    }
  },
  {
    id: 12,
    title: 'Misc',
    description: 'Miscellaneous artwork, branding, and iconography.',
    thumbnail: 'url("assets/images/Portfolio/cUniverse.png")',
    details: {
      image: 'url("assets/images/Portfolio/cUniverse.png")',
      description: `An assortment of miscellaneous artwork, branding, and iconography
      created for the production of my first website/portfolio.
      This represents some of my early work fresh out of university.
      Please see my <a href="https://www.behance.net/gallery/53041243/Misc" target="_blank">Behance Gallery</a> for full catalogue.`,
      startDate: new Date('2015-07-02'),
      endDate: new Date('2015-07-06'),
      technologies: 'Gimp',
      notes: ['Artwork used for the branding and UX/UI desgin process of my first portfolio website']
    }
  },
  {
    id: 13,
    title: 'CAA Travel Search/Booking Widget',
    description: 'A custom web application built using Inspiretec\'s Harmony product]',
    thumbnail: 'url("assets/images/Portfolio/caa.png")',
    details: {
      image: 'url("assets/images/Portfolio/caa.png")',
      description: `Maintained, supported, and developed new features for the CAA travel search/booking widget.
      The web application was builted on Inspiretec's Harmony application.
      The front-end stack was a mixture of HTML, CSS, Javascript, jQuery, React, Jade, and Ractive.
      The Back-end stack was developed with Java and used a custom framework, Knotty.
      Please see <a href="https://www.caasco.com/travel" target="_blank">CAASCO Travel site</a> to see the application in use.`,
      startDate: new Date('2019-02-12'),
      endDate: new Date('2020-02-12'),
      technologies: 'HTML5, CSS3, Javascript, jQuery, React, Jade, Ractive, Java, Knotty Framework',
      notes: ['Worked as a full-stack developer on this project']
    }
  }
]

