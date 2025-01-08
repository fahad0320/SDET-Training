interface RequiredType {
    id: number
    firstName?: string
    lastName?: string
  }
  
  function showRequiredType(args: Required<RequiredType>) {
    console.log(args)
  }
  
  showRequiredType({ id: 1, firstName: "John", lastName: "Doe" })
  // Output: { id: 1, firstName: "John", lastName: "Doe" }
  
//   showRequiredType({ id: 1 })
  // Error: Type '{ id: number: }' is missing the following properties from type 'Required<RequiredType>': firstName, lastName