// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'http://localhost:1337',
  host: "0.0.0.0",
  titleTemplate: "%s - CHL",
  siteDescription: "A Static Website With Gridsome",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: 'http://localhost:1337',
        apiURL: 'http://106.75.49.216:1337',
        queryLimit: 1000,
        contentTypes: ['projects', 'journals'],
        // singleTypes: ['impressum'],
        // 访问受保护的数据
        // loginData: {
        //   identifier: '',
        //   password: ''
        // },
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  },
  templates: {
    StrapiProjects: [
      {
        path: '/projects/:id',
        component: './src/templates/ProjectPost.vue'
      }
    ],
    StrapiJournals: [
      {
        path: '/journals/:id',
        component: './src/templates/JournalPost.vue'
      }
    ]
  }
}
