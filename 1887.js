const object1 = {
    keyOne: "value One",
    keyTwo: "value Two",
    keyThree: "value Three"
  };
  const url = "https://localhost:400";

  const finalUrl = `${url}?${Object.entries(object1)}`;
  
  console.log(finalUrl);
  