let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  
//   function({
//     incomingProperty: varName = defaultValue
//     ...
//   })

  function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    console.log(`${title} ${width} ${height}` ); 
    console.log(items); 
  }
  
  showMenu(options);