var globalVariable = 'Ma aflu in contextul global';

function contextTest() {
  var localVariable = 'Ma afluu in contextul local';

  console.log(globalVariable);
  console.log(localVariable);
  console.log(noVariable);
}

contextTest();
