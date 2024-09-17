class Github {
  constructor(){
   
    this.client_id = "Ov23liIcWrn6itrcht4q"
    this.client_secret ="e58426cd8491d7580c72aa6ff26c261a53b1d780"
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}
    /repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return{
      profile,
      repos

    }

  }
}