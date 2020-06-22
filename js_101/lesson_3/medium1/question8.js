let munsters = {
    Herman: { age: 32, gender: "male" },
    Lily: { age: 30, gender: "female" },
    Grandpa: { age: 402, gender: "male" },
    Eddie: { age: 10, gender: "male" },
    Marilyn: { age: 23, gender: "female" }
  };
  
  function messWithDemographics(demoObject) {
    Object.values(demoObject).forEach(familyMember => {
      familyMember["age"] += 42;
      familyMember["gender"] = "other";
    });
  }

  messWithDemographics(munsters);

/*
In JS, objects are pass by reference so `demoObject` points to `munsters`. If he wanted to preserve the original `munsters` - he would need to make a copy first.
*/