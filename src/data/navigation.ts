// Sticky navigation. `sections` lists the page section ids that highlight each item.
export const navItems = [
  { id: 'home', label: 'Home', sections: ['home'] },
  { id: 'about', label: 'About', sections: ['about', 'capabilities'] },
  { id: 'experience', label: 'Experience', sections: ['experience'] },
  { id: 'projects', label: 'Projects', sections: ['projects', 'apps'] },
  { id: 'engineering', label: 'Engineering', sections: ['architecture', 'engineering'] },
  { id: 'education', label: 'Education', sections: ['mentoring', 'education'] },
  { id: 'contact', label: 'Contact', sections: ['contact'] },
]

/** Every section on the page, in order. */
export const pageSections = [
  'home',
  'about',
  'capabilities',
  'experience',
  'projects',
  'apps',
  'architecture',
  'engineering',
  'mentoring',
  'education',
  'contact',
]
