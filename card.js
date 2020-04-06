function card (data){
  var result = (`
  <div class="card text-center">
    <div class="card-header">
     ${data.name}
     <br>
     <i class="fas fa-coffee"></i>
     ${data.getRole()}
     <br>
    
    </div>
    <div class="card-body text-left">
       
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: ${data.email}:</li>
            <li class="list-group-item">
               ${data.getRole()==="Manager"? "office number: " + data.officeNumber : data.getRole()==="Engineer"? "github: " + data.github : 
                "school: "+  data.school}
            </li>
          </ul>
      
    </div>
   
  </div>
  `)
  return result
}

// data={
//   name: 'bob', id: 2, email: 'bob@burger', github: 'bob' , getRole: function() {
//     return "Engineer"
//   }
// }

// console.log(card(data))
module.exports = card 


