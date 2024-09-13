const github = new Github()

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if(userText !== ""){
    console.log(userText)
    github.getUser(userText)
    .then((data)=>{
    

      if(data.profile.message === "Not Found"){
        //alert not found

      }else{

        //show profile
        console.log(data)
      }
    })
  }else{
    //clear input
  }

  e.preventDefault()
})