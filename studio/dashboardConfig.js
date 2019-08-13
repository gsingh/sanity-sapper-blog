export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d522c8240ec3b9a2eb6f920',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-acd83q71',
                  apiId: '2a77381b-b2c5-4e31-9639-34fa9525ab89'
                },
                {
                  buildHookId: '5d522c8255ab7d8b1aa0920e',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-xchhshew',
                  apiId: 'c0fb7878-8a64-462e-933a-20ca9594a05d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gsingh/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-xchhshew.netlify.com', category: 'apps'}
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
