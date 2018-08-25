function show(str){
    var  dataList=document.getElementsByClassName('datalist');
    dataList='';
    var profile = document.getElementById('profile');
    profile.innerHTML='';
    
    if (str.length !== 0){
    var xhttp = new XMLHttpRequest();
    xhttp.open(method = "GET", url = "https://api.github.com/search/users?q="+str ,user ="7affacd2673d47bfdee8", password= "5e402d4e3c51b0edaa164b9581f92d7bfe064981");
    console.log(this.responseText)
    xhttp.onload= function(){ 
        
            if(this.status == 200){
                
               var users = JSON.parse(this.responseText);
               var userlist = users.items;
               console.log(userlist);
               profile.innerHTML=`
                            <div class="panel panel-default">
                            <div class="panel-heading">
                            <h3 class="panel-title">${userlist[0].login}</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-3">
                                    <img style="width :75%" class="thunmbnail" src="${userlist[0].avatar_url}">
                                    <a target="_blank" class="btn btn-primary btn-block" href="${userlist[0].html_url}">View Profile</a>
                                    </div>
                                    <div class ="col-md-9">
                                    <span class="label label-info">ID: ${userlist[0].id}</span><br>
                                    <span class="label label-info">Git Score: ${userlist[0].score}</span><br>
                                    <br><br>
                                    </div>
                            </div>
                            </div>
                            `;            
                     
                
            }
        }
    };
    
    xhttp.send();
}