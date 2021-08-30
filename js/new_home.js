window.addEventListener('DOMContentLoaded', () => {
    createInnerHTML();
});

//Template literal ES6 feature 
const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
         <tr>
             <td>
                 <img class="profile" alt="" src="../assets/profile-images/Ellipse -7.png">
             </td>
             <td>Niharika Gowda</td>
             <td>Female</td>
             <td><div class ='dept-label'>HR</div>
                  <div class='dept-label'>Finance</div></td>
            <td>3000000</td>
             <td>1 Nov 2020</td>
             <td> 
                 <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                 <img id="1" alt="Edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
             </td>
         </tr>
         `;
     document.querySelector('#table-display').innerHTML=innerHtml;
}