interface PickType {
    id: number
    firstName: string
    lastName: string
  }
  
  function showPickType(args: Pick<PickType, "firstName" | "lastName">) {
    console.log(args)
  }
  
  showPickType({ firstName: "John", lastName: "Doe" })
  // Output: {firstName: "John"}
  
//   showPickType({ id: 3 })
  // Error: Object literal may only specify known properties, and 'id' does not exist in type 'Pick<PickType, "firstName" | "lastName">'