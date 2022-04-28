const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },

    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

   const issue = {
     title: '',
     repositoryNameAssociated: '',
     status: '',
     numberOfComments: '',
     labels: '',
     author: '',
     dateCreated: '',
     lastUpdated: '',
     getTitleAndAuthor() {
       return this.title + this.author;
     },
     getGeneralInfo() {
       return `title: ${title}, /n repositoryNameAssociated: ${repositoryNameAssociated}`  
     }
   }

  const pullRequest = {
    title: '',
    branchName: '',
    dateCreated: '',
    status: '',
    repositoryNameAssociated: '',
    getStatus() {
      return this.status;
    },
    getTitleAndAuthor() {
      return this.title + this.author;
    }
  }

  //Facebook
  const userTwitter = {
    user: 'Daniel',
    username: 'DanielCortez',
    biografia: '...',
    edad: '10',
    getNombre() {
      return this.username;
    },
    getEdad() {
      return this.edad;
    }
  }

  const trending_topic ={
    position: '20',
    descripcion: '',
    dateCreated: '',
    author: ''
  }

  const hashtag = {
    name: '',
    descripcion: '',
    dateCreated: '',
    author:''
  }

  //Facebook 
  const userFacebook = {
    user: '', 
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phoneName: '',
    dateCreated: ''
  }

  const post = {
    title: '',
    description : '',
    dateCreated: '',
    images: [],
    relatedUsers: []
  }

  const biography = {
    fullName: '',
    description: '',
    history: '',
    location: '',
    hobby: []
  }

  //Uber 
  const profile = {
    user: '',
    firstName: '',
    lastName: '',
    email: '',
    dateCreated: ''
  }

  const travel = {
    from: '',
    to: '',
  }
