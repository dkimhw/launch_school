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


let munsters2 = {
  Herman: 32,
  Lily: 33,
  Grandpa: 35,
  Eddie: 400,
  Marilyn: 23
};

function messWithDemographics2(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember += 5;
  });
}

messWithDemographics2(munsters2);

console.log(munsters2);