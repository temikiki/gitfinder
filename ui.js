class Ui{

  constructor(){
    this.profile = document.getElementById("profile")
  }

  showProfile(user){
    console.log(user)

    this.profile.innerHTML = `
      <div class= "card card-body mb-3">
        <div class ="row">
        <div class = "col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target= "_blank" class="btn btn-primary btn-lg btn-block mb-4">View profile</a>
        </div>
        <div class="col-md-9">
        <span class="badge badge-primary">Public repos: ${user.public_repos}</span>
        <span class="badge badge-secondary">Public gists: ${user.public_gists}</span>
        <span class="badge badge-success">followers: ${user.followers}</span>
        <span class="badge badge-info">Following: ${user.following}</span>
        <br><br>
        <ul class='list-group'>
        <li class="list-group-item">Company: ${user.company}</li>
        <li class="list-group-item">Website/blog: ${user.blog}</li>
        <li class="list-group-item">Location: ${user.location}</li>
        <li class="list-group-item">Created since when: ${user.created_at}</li>
        
        </ul>
        </div>
        
        </div>
      
      </div>
      <h3 class="page-heading mb-3"> Latest repos</h3>

      <div id="repo"></div>
    
    `
  }

  showRepos(repos){
    let output = '';

    repos.forEach(function(repo){
      output += `
        <div class= " " >
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank"> ${repo.name}</a>
            </div>
            
              <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forms_count}</span>
              </div
          </div>
        </div>
        <hr>
        <br>
      
      `;
    });

    document.getElementById('repos').innerHTML = output;
  }
  
  showAlert(message, className){
    this.clearAlert()
    //create div
    const div = document.createElement('div');

    //add classname
    div.className = className;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');

    container.insertBefore(div,search );

    setTimeout(()=>{
      this.clearAlert()
    },3000);
  }

  clearAlert(){
    const currentAlert =document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }

  clearProfile(){
    this.profile.innerHTML = ""; 
  }

}