interface OmitType {
    id: number
    firstName: string
    lastName: string
  }
  
  function showOmitType(args: Omit<PickType, "firstName" | "lastName">) {
    console.log(args)
  }
  
  showOmitType({ id: 7 })
  // Output: {id: 7}
  
//   showOmitType({ firstName: "John" })
  // Error: Object literal may only specify known properties, and 'firstName' does not exist in type 'Pick<PickType, "id">'