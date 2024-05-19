
const processArray = require('./arrayManipulation.js');


function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
      throw new Error("::::::::::ERR0R:::::::::\n");
    }
      const userProfiles = [];
      let id = 1;
      for (let i = 0; i < originalNames.length; i++) {
      const originalName = originalNames[i];
      const modifiedName = modifiedNames[i];
    const userProfile = {
        id:id++, 
        originalName,
        modifiedName,
      };
      userProfiles.push(userProfile);
    }
    return userProfiles;
  }
  
const stringsArray = ["julia", "eminem", "darko", "demon", "jjcock","okoe","yuo"];
const formattedStrings=["julia","EMINEM","darko","DEMON","jjcock","OKOE","yuo"];
const userProfiles=createUserProfiles(stringsArray,formattedStrings);

for (let i = 0; i < userProfiles.length; i++) {
    console.log(JSON.stringify(userProfiles[i], null, 2));}


