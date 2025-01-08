type UnionType = string | number

function showUnionType(arg: UnionType) {
  console.log(arg)
}

showUnionType("test")
// Output: test

showUnionType(7)
// Output: 7