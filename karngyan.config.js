// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'anamika kumari',
  domain: 'anamika.dev', // add without https:// , used in meta tags and share urls
  image: '/profile.jpeg',
  email: 'anamikak005@gmail.com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'anamikapandey745',
    // linkedin: 'karngyan',
    // facebook: 'karnsometimes',
    // twitter: 'gyankarn',
    // instagram: 'karngyan.dev',
    // codestats: 'karngyan' // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: false,
    url: 'https://www.buymeacoffee.com/karngyan'
  },
  projects: {
    enabled: false,
  },
  blog: {
    enabled: false,
  },
  resume: {
    enabled: false,
    pdfUrl: '/RESUME_GYAN_KARN_DARK.pdf' // add files in static folder
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'macOS Catalina'},
      {title: 'Memory', value: '16 GB 2667 MHz DDR4'},
      {title: 'Keyboard', value: 'Keychron K2 - Gateron Brown Keys'},
      {title: 'Mouse', value: 'Logitech Silent Pebble'},
      {title: 'Monitor', value: 'LG QHD (2560 x 1440) 27 Inch IPS Display'},
      {title: 'Laptop • Processor • Graphics', value: 'MacBook Pro (16-inch, 2019) • 2.6 GHz 6-Core Intel Core i7 • AMD Radeon Pro 5300M 4 GB + Intel UHD Graphics 630 1536 MB'}
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      // { name: 'SendPost', src: '/images/sendpost.png', url: 'https://sendpost.io' },
      { name: 'Amazon', src: '/images/amazon.png', url: 'https://amazon.in' },
      { name: 'Hopscotch', src: '/hopscotch.png', url: 'https://hopscotch.in' },
      // { name: 'InterviewReady', src: '/images/interviewready-io.png', url: 'https://get.interviewready.io' },
      // { name: 'CrioDo', src: '/images/crio.png', url: 'https://crio.do' },
    ]
  },
  loadingIndicator: {
    name: 'cube-grid'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a beer',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'i blog tech',
        haveALook: 'have a look',
        friendlyNeighborhood: 'your friendly neighborhood',
        description: 'i am a software developnment engineer at amazon. i code mostly in java and enjoy developing highly available backend services.',
        words: ['developer', 'designer', 'engineer', 'programmer', 'encoder'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'i try to write once in a while. let me know your thoughts in comments'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'it takes a lot of time to write man'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net flex'
      },
      projects: {
        header: 'projects',
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read'
      }
    }
  }
}
