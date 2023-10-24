function mySetTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function makeToys() {
  return new Promise((resolve, reject) => {
    mySetTimeout(3000).then(() => {
      if (Math.random() > 0.1) {
        resolve("undefected");
      } else {
        reject("defected");
      }
    });
  });
}

function deliverToys() {
  return new Promise((resolve) => {
    mySetTimeout(2000).then(() => {
      resolve("Toys delivered");
    });
  });
}

function sellToys(status) {
  return new Promise((resolve, reject) => {
    mySetTimeout(1000).then(() => {
      if (status === "undefected" && Math.random() > 0.5) {
        resolve("Toy sold");
      } else {
        reject("Toy did not sell");
      }
    });
  });
}

function toyShopProcess() {
  makeToys()
    .then((status) => deliverToys())
    .then((deliveryResult) => {
      console.log(deliveryResult);
      return sellToys(status);
    })
    .then((sellingResult) => {
      console.log(sellingResult);
    })
    .catch((error) => {
      console.log(error);
    });
}

toyShopProcess();

async function makeToys() {
  await mySetTimeout(3000);
  if (Math.random() > 0.1) {
    return "undefected";
  } else {
    return "defected";
  }
}

async function deliverToys() {
  await mySetTimeout(2000);
  return "Toys delivered";
}

async function sellToys(status) {
  await mySetTimeout(1000);
  if (status === "undefected" && Math.random() > 0.5) {
    return "Toy sold";
  } else {
    return "Toy did not sell";
  }
}

async function toyShopProcess() {
  try {
    const toyStatus = await makeToys();
    const deliveryResult = await deliverToys();
    console.log(deliveryResult);
    const sellingResult = await sellToys(toyStatus);
    console.log(sellingResult);
  } catch (error) {
    console.log(error);
  }
}

toyShopProcess();
