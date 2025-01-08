interface PartialType {
    id: number
    firstName: string
    lastName: string
  }
  
  function showPartialType(args: Partial<PartialType>) {
    console.log(args)
  }
  
  showPartialType({ id: 1 })
  // Output: {id: 1}
  
  showPartialType({ firstName: "John", lastName: "Doe" })
  // Output: {firstName: "John", lastName: "Doe"}