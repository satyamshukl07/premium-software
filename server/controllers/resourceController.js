import { blogArticles, successStories } from '../../src/data/contentData.js';

export const getResources = (req, res) => {
  return res.json({
    success: true,
    data: {
      blogs: blogArticles,
      caseStories: successStories,
      webinars: [
        {
          id: 'webinar-1',
          title: 'Mastering Preventative Maintenance Scheduling in MEX v16',
          date: 'Live on October 14, 2026',
          duration: '45 mins',
          speaker: 'David Henderson (MEX Senior Consultant)',
          status: 'Upcoming',
        },
        {
          id: 'webinar-2',
          title: 'Paperless Work Requests and Mobile App Deployments',
          date: 'On-demand recorded',
          duration: '38 mins',
          speaker: 'Chloe Bennett (Product Specialist)',
          status: 'On-Demand',
        },
      ],
      whitepapers: [
        {
          id: 'wp-changing-guard',
          title: 'The Changing of the Guard is Coming — Are You Future Ready?',
          pages: '18 pages',
          format: 'PDF Guide',
          downloadUrl: '#',
        },
        {
          id: 'wp-roi-cmms',
          title: 'Calculating the Hard ROI of Modern CMMS Implementation',
          pages: '24 pages',
          format: 'Executive Whitepaper',
          downloadUrl: '#',
        },
      ],
    },
  });
};
