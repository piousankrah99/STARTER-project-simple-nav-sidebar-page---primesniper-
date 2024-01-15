
function toggleSidebar() {
    const sidebar = document.querySelector('.sideBar');

    sidebar.classList.toggle('active');
}


//
// const itemCardFunc = (itemArr)=>{
//     let cardContainer = document.querySelector(".cards")
//     cardContainer.innerHTML=''
//     if(itemArr.length !==0){
//         itemArr.forEach(item => {
//             console.log({item})
//             const {name, price} = item
//             let actionButton;
//
//             if (item.toUpperCase() === "LAPTOPS") {
//                 actionButton = Laptops
//             }
//             if (item.toUpperCase() === "CARS") {
//                 actionButton = Cars
//             }
//
//             if (item.toUpperCase() === "PHONES") {
//                 actionButton = Phones
//             }
//             if (item.toUpperCase() === "APPLIANCES") { //"agency"
//                 actionButton = Appliances
//             }
//             if (item.toUpperCase() === "REAL ESTATE") { //"agency"
//                 actionButton = RealEstate
//             }
//             if (item.toUpperCase() === "FOOD") { //"agency"
//                 actionButton = Food
//             }
//
// //onclick="${actionButton.name}()"
//
//             const card = `<div class="cardInner" onclick="${actionButton?.name}()" >
//  <a class="w-100">
//  <div class="namePrice">
//  <h6 class="fs-6 ">${name}</h6>
//  <p class="fs-3 mt-1 mb-1" >${price}</p>
//  </div>
//  <!-- <i class="fa-solid fa-computer fs-3 "></i>-->
//  <i class='icon'></i>
//
//  </a>
//  </div> `
//             cardContainer.insertAdjacentHTML("beforeend", card)
//         })
//     }
//
//     else {
//     cardContainer.innerHTML='<p>NO DEVICE AVAILABLE FOR THIS SITE</p>'
//     }
//
// }
