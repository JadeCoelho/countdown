let data = document.querySelector("#data");
let btn = document.querySelector(".btn-descobrir");
let btnOk = document.querySelector(".btn-ok");
let diaAtual = document.querySelector(".dia");
let mesAtual = document.querySelector(".mes");
let anoAtual = document.querySelector(".ano");
let horaAtual = document.querySelector(".hr");
let minAtual = document.querySelector(".min");
let segAtual = document.querySelector(".seg");
let restante = document.querySelector(".restante");
let erro = document.querySelector(".erro");
let diasRes = document.querySelector(".dias-res");
let hrsRes = document.querySelector(".hrs-res");
let minsRes = document.querySelector(".mins-res");
let segsRes = document.querySelector(".segs-res");

function atualizaHora() {
  let dataHoje = new Date();

  let diaHoje = formatar(dataHoje.getDate());
  let mesHoje = formatar(dataHoje.getMonth() + 1);
  let anoHoje = dataHoje.getFullYear();

  diaAtual.innerHTML = diaHoje;
  mesAtual.innerHTML = mesHoje;
  anoAtual.innerHTML = anoHoje;

  let hora = formatar(dataHoje.getHours());
  let min = formatar(dataHoje.getMinutes());
  let seg = formatar(dataHoje.getSeconds());

  horaAtual.innerHTML = hora;
  minAtual.innerHTML = min;
  segAtual.innerHTML = seg;
}

atualizaHora();
setInterval(() => {
  atualizaHora();
}, 1000);

btn.addEventListener("click", () => {
  comparaDatas();
  setInterval(() => {
    comparaDatas();
  }, 1000);
});

function comparaDatas() {
  let dataEscolhida = new Date(data.value);
  let dataHoje = new Date();

  let totalSeg = (dataEscolhida - dataHoje) / 1000;

  let dias = formatar(Math.floor(totalSeg / 3600 / 24));
  let horas = formatar(Math.floor(totalSeg / 3600) % 24);
  let minutos = formatar(Math.floor(totalSeg / 60) % 60);
  let segundos = formatar(Math.floor(totalSeg) % 60);

  diasRes.innerHTML = dias;
  hrsRes.innerHTML = horas;
  minsRes.innerHTML = minutos;
  segsRes.innerHTML = segundos;

  if (totalSeg < 0) {
    restante.style.display = "none";
    btnOk.style.display = "inline-block";
    erro.innerHTML = `A data selecionada já passou. <br> A data deve ser, no mínimo, a de hoje.</p>`;

    btnOk.addEventListener("click", () => {
      location.reload();
    });
  }
}

function formatar(n) {
  return n < 10 && n >= 0 ? `0${n}` : n;
}
