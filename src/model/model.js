const model = {
  common: {
    navbar: {
      buttons: [
        {link:'/home', name:'home'}, 
        {link:'/about-me', name:'about me'}, 
        {name:'my work', subitems:[
          {link:'/calculator', name: 'calculator for dogs'},
          {link:'/find-meal', name: 'find perfect meal for you'},
          {link:'/other', name: 'other stuff'}
        ]
        }, 
        {link:'/contact', name:'contact'}
      ]
    },
    footer: {
      contact: 'contact me!'
    }
  }
};

export default model;