const github = new Github;

const ui = new Ui;


const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if(userText !== ""){
    console.log(userText)
    github.getUser(userText)
    .then((data)=>{
    

      if(data.profile.message === "Not Found"){
        //alert not found
        ui.showAlert("User Not Found", "alert alert-danger");
      }else{

        //show profile
       
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  }else{
    //clear input
    ui.clearProfile()
  }

  e.preventDefault()
})