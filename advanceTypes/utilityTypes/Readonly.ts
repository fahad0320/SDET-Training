interface ReadonlyType {
    id: number
    name: string
  }
  
  function showReadonlyType(args: Readonly<ReadonlyType>) {
    // args.id = 4
    console.log(args)
  }
  
  showReadonlyType({ id: 1, name: "Doe" })
  // Error: Cannot assign to 'id' because it is a read-only property.