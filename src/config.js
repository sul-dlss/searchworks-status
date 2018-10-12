export const statusEndpoints = {
  searchworksApplication: {
    displayName: 'SearchWorks website',
    endpointUrl: 'https://searchworks.stanford.edu/status/all.json',
    status: 'pending',
    critical: true, // While this is technically critical, it will actually trigger a fatal status
    position: 1,
  },
  swSolr: {
    displayName: 'Catalog index (Solr)',
    endpointUrl: 'https://searchworks.stanford.edu/status/all.json',
    status: 'pending',
    critical: true,
    position: 2,
  },
  ebsco: {
    displayName: 'Articles+ (EDS)',
    endpointUrl: 'https://status.ebsco.com/index.json',
    status: 'pending',
    critical: true,
    position: 3,
  },
  libraryHours: {
    displayName: 'Library hours',
    endpointUrl: 'https://library-hours.stanford.edu/status/all.json',
    status: 'pending',
    position: 4,
  },
  requests: {
    displayName: 'Requests',
    endpointUrl: 'https://requests.stanford.edu/status/all.json',
    status: 'pending',
    position: 5,
  },
  embed: {
    displayName: 'SDR embedded content',
    endpointUrl: 'https://embed.stanford.edu/status/all.json',
    status: 'pending',
    position: 6,
  },
  libraryDrupal: {
    displayName: 'Library website',
    endpointUrl: 'https://library.stanford.edu/healthcheck.php',
    status: 'pending',
    position: 7,
  },
  liveAvailability: {
    displayName: 'Live availability lookups',
    endpointUrl: 'https://searchworks.stanford.edu/status/all.json',
    status: 'pending',
    position: 8,
  },
  citationService: {
    displayName: 'OCLC citation service',
    endpointUrl: 'https://searchworks.stanford.edu/status/all.json',
    status: 'pending',
    position: 9,
  },
};

export const statuses = {
  up: {
    icon: '✅',
    legend: 'No issues',
    message: 'No issues',
    global_message: 'All services are operating normally.',
  },
  maintenance: {
    icon: '🛠',
    legend: 'Maintenance',
    message: 'Unavailable during scheduled maintenance.',
  },
  issue: {
    icon: '⚠️',
    legend: 'Issue',
    message: 'Performance issue.',
    global_message: 'There is an issue with SearchWorks or a related service.',
  },
  pending: {
    icon: '🔄',
    message: 'Checking status ...',
  },
  outage: {
    icon: '🚫',
    legend: 'Outage',
    message: 'Not responding. SearchWorks team has been notified.',
  },
  fatal: {
    icon: '🚫',
    legend: 'Outage',
    global_message: 'SearchWorks is unavailable. Tech team has been notified.',
  },
};

// SUL Maintenance windows in PST
export const maintenanceWindows = [
  {
    day: 0,
    startHour: 4,
    endHour: 8,
  },
  {
    day: 2,
    startHour: 4,
    endHour: 8,
  },
  {
    day: 4,
    startHour: 4,
    endHour: 8,
  },
  {
    day: 6,
    startHour: 4,
    endHour: 8,
  },
];

export const graphs = {
  swResponseTime: {
    title: 'SearchWorks page load time',
    position: 1,
    horizons: [
      { label: '6 hours', iframeSrc: 'https://rpm.newrelic.com/public/charts/9ALOIQ1o17Q' },
      { label: '3 days', iframeSrc: 'https://rpm.newrelic.com/public/charts/c6qFHIdWFdG' },
      { label: '30 days', iframeSrc: 'https://rpm.newrelic.com/public/charts/9dxzdf4V71h' },
    ],
  },
  solr: {
    title: 'Catalog index (Solr) response time',
    position: 2,
    horizons: [
      { label: '6 hours', iframeSrc: 'https://rpm.newrelic.com/public/charts/80xp1hfSf6h' },
      { label: '3 days', iframeSrc: 'https://rpm.newrelic.com/public/charts/biAaCaONpRC' },
    ],
  },
  ebsco: {
    title: 'Articles+ (EDS) response time',
    position: 3,
    horizons: [
      { label: '6 hours', iframeSrc: 'https://rpm.newrelic.com/public/charts/cfcfetW1YGr' },
      { label: '3 days', iframeSrc: 'https://rpm.newrelic.com/public/charts/bgq3iP9fhSo' },
    ],
  },
};
