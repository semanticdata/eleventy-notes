// @ts-check
const {defineConfig, createNotesQuery} = require('./.app/app-config')

module.exports = defineConfig({
  title: 'Eleventy Notes',
  description:
    'A simple, lightweight, and flexible note-taking template for Eleventy.',
  editThisNote: {
    url: 'https://github.com/semanticdata/eleventy-notes/edit/{{branch}}/{{file}}'
  },
  customProperties: {
    properties: [
      {
        path: 'props',
        options: {
          date: {
            locale: 'en-US'
          }
        }
      }
    ]
  },
  sidebar: {
    links: [
      {
        url: 'https://github.com/semanticdata/eleventy-notes',
        label: 'GitHub / Support',
        icon: 'github'
      },
      {
        url: 'https://www.buymeacoffee.com/sandroroth',
        label: 'Buy me a coffee',
        icon: 'coffee'
      }
    ],
    sections: [
      {
        label: 'Notes',
        groups: [
          {
            label: 'All Notes',
            query: createNotesQuery({
              pattern: '^/Notes/[^/]+$'
            })
          }
        ]
      },
      {
        label: 'Introduction',
        groups: [
          {
            query: createNotesQuery({
              pattern: '^/Documentation/[^/]+$'
            })
          }
        ]
      },
      {
        label: 'Guides',
        groups: [
          {
            label: 'Writing Notes',
            query: createNotesQuery({
              pattern: '^/Documentation/Writing/',
              tree: {
                replace: {
                  '^/\\w+': ''
                }
              }
            })
          },
          {
            label: 'Organizing Notes',
            query: createNotesQuery({
              pattern: '^/Documentation/Organizing/'
            })
          },
          {
            label: 'Core Features',
            query: createNotesQuery({
              pattern: '^/Documentation/Features/',
              tree: {
                replace: {
                  '^/\\w+': ''
                }
              }
            })
          },
          {
            label: 'Deployment',
            query: createNotesQuery({
              pattern: '^/Documentation/Deployment/'
            })
          }
        ]
      },
      {
        label: 'Releases',
        groups: [
          {
            query: createNotesQuery({
              pattern: '^/Documentation/Releases/'
            })
          }
        ]
      }
    ]
  },
  tags: {
    map: {
      'dynamic-content': 'dynamic content'
    }
  }
})
