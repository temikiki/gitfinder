class Github {
  constructor(){
   
    this.client_id = "Ov23liIcWrn6itrcht4q"
    this.client_secret ="e58426cd8491d7580c72aa6ff26c261a53b1d780"
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    return{
      profile

    }

  }
}