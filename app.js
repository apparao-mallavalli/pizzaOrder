const pizza = new Pizza;

const welcomeMessage = ["Hai , welcome", "Hello , how ca i help you ?"];

let orderStatus = ["order accepted", "order was preparing", "order yet to reach ", "Delivered"];

let name = "";
let mobileNumber = 0;
let emailValue = "";
let doorNo = "";
let street = "";
let city = "";
let pincode = 0;
let pizzaType = "";
let pizzaSize = "";
let pizzaQuantity = 0;
let status = "";

let orderId = 0;


//Random number generator 
function random(n) {
  return Math.floor(Math.random() * n);
}


//Called when the user enters input 
function entered() {

  let input = document.getElementById("input_value").value;

  document.getElementById("input_value").value = "";

  if (input.toLowerCase() == "hi") {
    incomingTemplate(input);
    let output = welcomeMessage[random(2)];
    let msg = outingTemplate(output);
    this.welcome();

  } else if (input.toLowerCase() == "how are you") {
    incomingTemplate(input);
    outingTemplate(" I am fine ,what about you .");
    welcome();


  } else {
    incomingTemplate(input);
    outingTemplate("sorry , i can't find you . ");
    welcome();
  }


}

//called when related to welcome
function welcome() {

  msg = `<div class="outgoing_msg" >
         <div class="sent_msg">
         <button  onclick ="request(this)" type="button" class="btn btn-primary" value ="status">Check Order status</button><br><br>
         <button onclick ="request(this)" type="button" class="btn btn-primary" value ="order">Order a Pizza</button>
      <span class="time_date"> 11:01 AM | June 9</span>
    </div>
   </div>`;

  document.getElementById("myBtn").disabled = true;
  document.getElementById("input_value").disabled = true;
  frag = document.createRange().createContextualFragment(msg);

  document.getElementById("chat").appendChild(frag);

}

//called when the user selects an option
function request(button) {
  document.getElementById("input_value").disabled = false;
  document.getElementById("myBtn").disabled = false;
  let selected = button.value;

  if (selected == "status")
    statusFun();

  else
    order();

}


//function of status
function statusFun() {

  let msg = `<div class="outgoing_msg">
  <div class="sent_msg">
      <p>Enter your order number</p>
      <span class="time_date"> 11:01 AM | June 9</span>
  </div>
</div>`;
  let frag = document.createRange().createContextualFragment(msg);

  document.getElementById("chat").appendChild(frag);
  document.getElementById("myBtn").onclick = checkStatus;

}



//checking the order with the help of service.js file
function checkStatus() {
  orderId = document.getElementById("input_value").value;
  document.getElementById("input_value").value = "";
  pizza.get(orderId).then(data => {
    if (data != null) {
      outingTemplate(`Hey ${data.username} .You ordered  ${data.pizzaItem} .The status of your order is ${data.status}`);
    } else {
      outingTemplate("Please check your orderId once .Thank you");
    }
  }).catch(err => {
    outingTemplate("Please check your orderId once .Thank you ");
  });
}


// Taking the order .Order flow starts from this function

function order() {
  document.getElementById("myBtn").onclick = pizzaQuant;
  incomingTemplate("I want to order the pizza");
  let msg = outingTemplate("Choose One Item ");
  document.getElementById("myBtn").onclick = pizzaQuant;
  msg = `<div class="outgoing_msg" >
  <div class="sent_msg">
  <button  onclick ="pizzaItem(this)" type="button" class="btn btn-primary" value ="Broccolini or broccoli ">Broccolini or broccoli </button><br><br>
  <button onclick ="pizzaItem(this)" type="button" class="btn btn-primary" value ="Gorgonzola and mushroom">Gorgonzola and mushroom</button>
  <br><button  onclick ="pizzaItem(this)" type="button" class="btn btn-primary" value ="Gorgonzola, radicchio.">Gorgonzola, radicchio.</button><br><br>
  <button onclick ="pizzaItem(this)" type="button" class="btn btn-primary" value ="Mixed sliced mushrooms and garlic.">Mixed sliced mushrooms and garlic.</button>
  <span class="time_date"> 11:01 AM | June 9</span>
</div>
</div>`;

  document.getElementById("myBtn").disabled = true;
  document.getElementById("input_value").disabled = true;
  let frag = document.createRange().createContextualFragment(msg);
  document.getElementById("chat").appendChild(frag);


}

//selecting the pizza item
function pizzaItem(button) {
  pizzaType = button.value;
  incomingTemplate(pizzaType);
  outingTemplate("Choose  Item size ");
  //document.getElementById("myBtn").onclick = userName;
  let msg = `<div class="outgoing_msg" >
  <div class="sent_msg">
  <button  onclick ="pizzaSiz(this)" type="button" class="btn btn-primary" value ="Large">Large </button><br><br>
  <button onclick ="pizzaSiz(this)" type="button" class="btn btn-primary" value ="Medium">Medium</button>
  <button  onclick ="pizzaSiz(this)" type="button" class="btn btn-primary" value ="Small">Small</button><br><br>
  <span class="time_date"> 11:01 AM | June 9</span>
</div>
</div>`;

  document.getElementById("myBtn").disabled = true;
  document.getElementById("input_value").disabled = true;
  let frag = document.createRange().createContextualFragment(msg);
  document.getElementById("chat").appendChild(frag);

}

//selecting the pizza size
function pizzaSiz(button) {
  pizzaSize = button.value;
  incomingTemplate(pizzaSize);
  outingTemplate("Choose  Item Qunatity ");
  document.getElementById("myBtn").disabled = false;
  document.getElementById("input_value").disabled = false;
  document.getElementById("myBtn").onclick = pizzaQuant;

}

//selecting the pizza qunatity
function pizzaQuant() {
  pizzaQuantity = document.getElementById("input_value").value;
  incomingTemplate(pizzaQuantity);
  document.getElementById("input_value").value = "";
  let msg = outingTemplate("Enter your Name");
  document.getElementById("myBtn").onclick = userName;
}


//selecting the username
function userName() {
  name = document.getElementById("input_value").value;
  incomingTemplate(name);
  document.getElementById("input_value").value = "";
  let msg = outingTemplate("Enter your Email");
  document.getElementById("myBtn").onclick = email;

}

//selecting the email
function email() {
  emailValue = document.getElementById("input_value").value;
  incomingTemplate(emailValue);
  document.getElementById("input_value").value = "";
  outingTemplate("Enter Your Mobile number");
  document.getElementById("myBtn").onclick = mobile;


}

//selecting the mobile number
function mobile() {
  mobileNumber = document.getElementById("input_value").value;
  document.getElementById("input_value").value = "";
  incomingTemplate(mobileNumber);
  outingTemplate("Enter Your Door number");
  document.getElementById("myBtn").onclick = dno;

}

//selecting the door number
function dno() {
  doorNo = document.getElementById("input_value").value;
  incomingTemplate(doorNo);
  document.getElementById("input_value").value = "";
  let msg = outingTemplate("Enter Your Street");
  document.getElementById("myBtn").onclick = streetFun;

}

//selecting the street name
function streetFun() {
  street = document.getElementById("input_value").value;
  incomingTemplate(street);
  document.getElementById("input_value").value = "";
  let msg = outingTemplate("Enter Your City Name");
  document.getElementById("myBtn").onclick = cityFun;
}

//selecting the city name
function cityFun() {
  city = document.getElementById("input_value").value;
  incomingTemplate(city);
  document.getElementById("input_value").value = "";
  let msg = outingTemplate("Enter Your Pincode");
  document.getElementById("myBtn").onclick = pinFun;
}

//selecting the pincode name
function pinFun() {
  pincode = document.getElementById("input_value").value;
  incomingTemplate(pincode);
  document.getElementById("input_value").value = "";
  let msg = outingTemplate("Enter Your Pincode");
  document.getElementById("myBtn").onclick = pinFun;
  console.log(name + " " + emailValue + " " + mobileNumber);
  outingTemplate("Hey" + " " + name + " ," + "Thank you for your order ,you will receive your order soon.");
  orderPizza();

}

//Finally ,taken all the details and posting the data into database with help of service file.
function orderPizza() {
  status = orderStatus[random(orderStatus.length)];

  pincode = parseInt(pincode);
  pizzaQuantity = parseInt(pizzaQuantity);
  pizza.post(name, mobileNumber, emailValue, doorNo, street, city, pincode, pizzaType, pizzaSize, pizzaQuantity, status).then(data => {
    this.orderId = data.id;
    outingTemplate("Please note down order Id for your reference and to know the status of your order  : " + this.orderId);
  });
}






//creating Outgoing template
function outingTemplate(message) {
  let outgoing = `<div class="outgoing_msg">
  <div class="sent_msg">
      <p>${message}</p>
      <span class="time_date"> 11:01 AM | June 9</span>
  </div>
</div>`;

  let frag = document.createRange().createContextualFragment(outgoing);

  document.getElementById("chat").appendChild(frag);

}

//creating incomingTemplate

function incomingTemplate(message) {

  let incoming = `<div class="incoming_msg">
  <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
          alt="sunil"> </div>
  <div class="received_msg">
      <div class="received_withd_msg">
          <p>${message}</p>
          <span class="time_date"> 11:01 AM | June 9</span>
      </div>
  </div>
</div>`;

  let frag = document.createRange().createContextualFragment(incoming);

  document.getElementById("chat").appendChild(frag);

}