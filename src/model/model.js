const model = {
  common: {
    navbar: {
      buttons: [
        {link:'/home', name:'home'}, 
        {link:'/about-me', name:'about me'}, 
        {name:'my work', subitems:[
          {link:'/work/calculator', name: 'calculator for dogs'},
          {link:'/work/find-meal', name: 'find perfect meal for you'},
        ]
        }, 
        {link:'/codewars', name:'codewars'},
        {link:'/contact', name:'contact'}
      ]
    },
    footer: {
      contact: 'designed and developed by Urszula Jaworska'
    }
  }
};

export default model;