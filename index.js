function calcORM(){
  ormWeight = document.querySelector("#inputORMWeight").value;
  ormReps = document.querySelector("#inputORMReps").value;
  resultORM = document.querySelector("#resultORM");

  if(ormWeight === "" || ormReps === ""){
    resultORM.innerHTML = "무게와 반복 횟수를 모두 입력해주세요.";
    return;
  }

  // Epley 공식
  orm = ormWeight * (1 + ormReps / 30);

  // resultORM.innerHTML = "예상 1RM : " + orm.toFixed(1) + " kg";

  makeRMTable(orm);
}

function makeRMTable(orm){
  table = document.querySelector("#rmTable");
  s = "<tr><th>RM</th><th>중량(kg)</th></tr>";

  for(let n = 1; n <= 10; ++n){
    weightForN = orm / (1 + n / 30);
    s += "<tr><td>" + n + "RM</td><td>" + weightForN.toFixed(1) + "</td></tr>";
  }

  table.innerHTML = s;
}

