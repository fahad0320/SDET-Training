interface GenericType<T> {
    id: number
    name: T
  }
  
  function showGenericType(args: GenericType<string>) {
    console.log(args)
  }
  
  showGenericType({ id: 1, name: "test" })
  // Output: {id: 1, name: "test"}
  
  function showTypeTwo(args: GenericType<number>) {
    console.log(args)
  }
  
  showTypeTwo({ id: 1, name: 4 })
  // Output: {id: 1, name: 4}