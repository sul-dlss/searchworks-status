export const statusEndpoints = {
  swSolr: {
    displayName: 'SearchWorks catalog (Solr)',
    endpointUrl: 'https://searchworks.stanford.edu/status/all.json',
    status: 'pending',
    critical: true,
    position: 1,
  },
  ebsco: {
    displayName: 'Articles+ (EDS)',
    endpointUrl: 'https://status.ebsco.com/index.json',
    status: 'pending',
    critical: true,
    position: 2,
  },
  libraryDrupal: {
    displayName: 'Library website',
    endpointUrl: 'https://library.stanford.edu/healthcheck.php',
    status: 'pending',
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
  liveAvailability: {
    displayName: 'Live availability lookups',
    endpointUrl: 'https://searchworks.stanford.edu/status/all.json',
    status: 'pending',
    position: 7,
  },
  citationService: {
    displayName: 'OCLC citation service',
    endpointUrl: 'https://searchworks.stanford.edu/status/all.json',
    status: 'pending',
    position: 8,
  },
};

export const statuses = {
  up: {
    icon: '✅',
    legend: 'Searchworks is up',
    message: 'No issues',
    global_message: 'Indexes and supporting services are responding normally.',
  },
  maintenance: {
    icon: '🛠',
    legend: 'Scheduled maintenance',
    message: 'Scheduled maintenance',
    global_message: 'Services may encounter slowness or brief outages.',
  },
  issue: {
    icon: '⚠️',
    legend: 'SearchWorks may have an issue',
    message: 'Performance is slower than normal',
    global_message: 'One of its supporting services is affected.',
  },
  // Triggered by New Relic monitoring
  slow: {
    icon: '⚠️',
    legend: 'SearchWorks is slow',
    global_message: 'The operations team has been alerted.',
  },
  pending: {
    icon: '🔄',
    message: 'Checking status ...',
  },
  outage: {
    icon: '🚫',
    legend: 'SearchWorks is partly down',
    message: 'Service is down; operations team is aware',
    global_message: 'One of its indexes is not responding. We\'re on it.',
  },
  fatal: {
    icon: '🚫',
    legend: 'SearchWorks is down',
    global_message: 'We\'re on it. Check Incidents for updates.',
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
    title: 'Page load time',
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
