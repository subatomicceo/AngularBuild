define(['app'], function(app) {
  app.controller('aboutCtrl', ['$scope', '$state', '$rootScope', '$stateParams', function($scope, $state, $rootScope, $stateParams) {
    if ($stateParams.tab === 'contacts') this.tab = 4;
    else this.tab = 1;
    this.inquiry = '1';
    this.templates = {
      team: 'app/components/about/team.html',
      company: 'app/components/about/company.html',
      careers: 'app/components/about/careers.html',
      contact: 'app/components/about/contact.html'
    };

    this.contacts = {
      general: {},
      brand: {},
      influencer: {}
    };

    this.slides = [{
      image: 'assets/img/about/1.jpg',
      note: 'THE PEOPLE BEHIND IT ALL'
    }, {
      image: 'assets/img/about/2.jpg',
      note: 'CREATING A DIFFERENT KIND OF BUZZ'
    }, {
      image: 'assets/img/about/3.jpg',
      note: 'WE\'RE ALWAYS LOOKING FOR TALENTED PEOPLE TO JOIN OUR TEAM'
    }, {
      image: 'assets/img/about/4.jpg',
      note: 'WHAT CAN WE HELP YOU WITH?'
    }];

    this.team = [{
      image: 'assets/img/about/team/team-alex-d.jpg',
      name: 'Alex Dahan',
      dessignation: 'Founder &amp; Creative Director'
    }, {
      image: 'assets/img/about/team/team-eric.jpg',
      name: 'Eric Dahan',
      dessignation: 'CEO &amp; Co-founder'
    }, {
      image: 'assets/img/about/team/team-joey.jpg',
      name: 'Joey Chowaiki',
      dessignation: 'Community Manager &amp; Co-founder'
    }, {
      image: 'assets/img/about/team/team-felix.jpg',
      name: 'Felix LaHaye Dahan',
      dessignation: 'Co-founder'
    }, {
      image: 'assets/img/about/team/team-jason.jpg',
      name: 'Jason Weber',
      dessignation: 'EVP of business Development'
    }, {
      image: 'assets/img/about/team/team-jisun.jpg',
      name: 'Jisun Kim',
      dessignation: 'Marketing Manager'
    }, {
      image: 'assets/img/about/team/team-nick.jpg',
      name: 'Nick Lucas',
      dessignation: 'CTO'
    }, {
      image: 'assets/img/about/team/team-solange.jpg',
      name: 'Solange Rubio',
      dessignation: 'Head of Social Engineering'
    }, {
      image: 'assets/img/about/team/team-kira.jpg',
      name: 'Kira Rudik',
      dessignation: 'Project Manager'
    }, {
      image: 'assets/img/about/team/team-nadine.jpg',
      name: 'Nadine Bloemer',
      dessignation: 'Operations Manager'
    }, {
      image: 'assets/img/about/team/team-natalie.jpg',
      name: 'Natalie Crippen',
      dessignation: 'Senior Social Engineer'
    }, {
      image: 'assets/img/about/team/team-monique.jpg',
      name: 'Monique Leyva',
      dessignation: 'Junior Social Engineer'
    }, {
      image: 'assets/img/about/team/team-sirena.jpg',
      name: 'Sirena Laguna',
      dessignation: 'Business Development &amp; Talent Relations'
    }, {
      image: 'assets/img/about/team/team-chelsea-k.jpg',
      name: 'Chelsea Kerzner',
      dessignation: 'Brand Engineer, Fashion'
    }, {
      image: 'assets/img/about/team/team-fernando.jpg',
      name: 'Fernando Romero',
      dessignation: 'VP of Business Development'
    }, {
      image: 'assets/img/about/team/team-mike.jpg',
      name: 'Mike French',
      dessignation: 'Strategic Development NYC'
    }, {
      image: 'assets/img/about/team/team-casey.jpg',
      name: 'Casey Bitzberger',
      dessignation: 'Influencer Developer'
    }, {
      image: 'assets/img/about/team/team-greg.jpg',
      name: 'Greg Parks',
      dessignation: 'Technical Lead'
    }, {
      image: 'assets/img/about/team/team-alex.jpg',
      name: 'Alex Gomez',
      dessignation: 'Software Engineer'
    }, {
      image: 'assets/img/about/team/team-dan.jpg',
      name: 'Dan Kincaid',
      dessignation: 'Software Engineer'
    }, {
      image: 'assets/img/about/team/team-alex-i.jpg',
      name: 'Alex Ivashchenko',
      dessignation: 'Software Engineer'
    }, {
      image: 'assets/img/about/team/team-mykola.jpg',
      name: 'Mykola Sedletskyi',
      dessignation: 'Software Engineer'
    }, {
      image: 'assets/img/about/team/team-adam.jpg',
      name: 'Adam Ames',
      dessignation: 'Software QA Analyst'
    }, {
      image: 'assets/img/about/team/team-ryan.jpg',
      name: 'Ryan Brown',
      dessignation: 'Visual Expert'
    }];

  }]);
});
