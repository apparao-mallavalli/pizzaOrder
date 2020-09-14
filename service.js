class Pizza {

    //get data
    async get(id) {
        id = parseInt(id);

        let response = await fetch('https://pizzaorder-env-3.eba-phvwyknc.ap-south-1.elasticbeanstalk.com/pizzaOrders/'+ id);
        let user = await response.json();

        return user;

    }

    //post data
    async post(userName, mobile, email, doorNo, street, city, pincode, pizzaItem, pizzaSize, pizzaQuantity, status) {
        let response = await fetch("https://pizzaorder-env-3.eba-phvwyknc.ap-south-1.elasticbeanstalk.com/pizzaOrders", {

            // Adding method type 
            method: "POST",

            // Adding body or contents to send 
            body: JSON.stringify({
                username: userName,
                mobile: mobile,
                email: email,
                dno: doorNo,
                street: street,
                city: city,
                pincode: pincode,
                pizzaItem: pizzaItem,
                pizzaSize: pizzaSize,
                pizzaQuantity: pizzaQuantity,
                status: status

            }),

            // Adding headers to the request 
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        let user = await response.json();
        return user;
    }
}
