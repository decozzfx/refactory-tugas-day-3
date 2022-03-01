const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo', 'abc.exe', '', 'abc.txt' ]
const filePaths = files.reduce((acc, file) => {

  const fileName = file.trim()
  if(fileName) {
    const filePath = `~/cool_app/${fileName}`
    acc.push(filePath)
  }
  return acc
}, [])

console.log(filePaths)

// const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
// let filePaths = [];

// for (let file of files) {
//   const fileName = file.trim();
//   if(fileName) {
//     const filePath = `~/cool_app/${fileName}`;
//     filePaths.push(filePath);
//   }
// }