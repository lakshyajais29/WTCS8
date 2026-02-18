function placeOrder(item, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Select your order");
      console.log("Your food item is:", item);
      resolve(item);
    }, delay);
  });
}

function assignRider(orderId, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Your Order ID is:", orderId);
      resolve(orderId);
    }, delay);
  });
}

function pickupOrder(riderId, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Your order is picked up");
      console.log("Your Rider ID is:", riderId);
      resolve(riderId);
    }, delay);
  });
}

function deliverOrder(orderId, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Your order is Delivered Successfully");
      console.log("Your Order ID is:", orderId);
      resolve(orderId);
    }, delay);
  });
}

// async function run() {
//   try {
//     await placeOrder("Pasta", 1000);
//     await assignRider(1234, 2000);
//     await pickupOrder(9876, 2000);
//     await deliverOrder(1234, 1000);
//   } catch (err) {
//     console.log("Error:", err);
//   } finally {
//     console.log("Tracking closed");
//   }
// }

placeOrder("Burger", 1000)
  .then(() => {
    return assignRider(1234, 2000);
  })
  .then(() => {
    return pickupOrder(9876, 2000);
  })
  .then(() => {
    return deliverOrder(1234, 3000);
  })
  .then(() => {
    console.log("Tracking ended");
  })
  .catch((err) => {
    console.log("Error:", err);
  });

