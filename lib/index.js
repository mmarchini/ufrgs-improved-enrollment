function toggleUnavailable() {
  var unavailableTr = $("tr", "table#poss").filter(function(i, tr){
    if($(tr).hasClass('TabForte')) return false;
    var td = $($("td", tr)[1]);
    return $("img", td).length == 0;
  });

  unavailableTr.toggleClass("hidden");
}

$("fieldset", "#conteudo").append('<input class="button" type="button" id="botaoImprimir" onclick="toggleUnavailable();" value=" Ocultar Não Disponíveis " style="float:right;">');
