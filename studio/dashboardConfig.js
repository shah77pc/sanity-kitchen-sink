export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ef788f7965b24acb8344dc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-j6rwodru',
                  apiId: '4a7d86c3-4a85-4b4d-bd9d-a612425c7827'
                },
                {
                  buildHookId: '60ef788f65dc694c94b1a618',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9ypk43gu',
                  apiId: 'a65a9760-b6b6-4b68-bddd-c64d74516716'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shah77pc/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9ypk43gu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
