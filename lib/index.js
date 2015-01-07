function toggleUnavailable() {
  var unavailableTr = $("tr", "table#poss").filter(function(i, tr){
    if($(tr).hasClass('TabForte')) return false;
    var td = $($("td", tr)[1]);
    return $("img", td).length === 0;
  });

  unavailableTr.toggleClass("hidden");
}

var hideButton = $('<input class="button" type="button" id="botaoImprimir" value=" Ocultar Não Disponíveis " style="float:right;"/>');
hideButton.click(function(e) {
    if($(e.target).val() == " Ocultar Não Disponíveis ") {
        $(e.target).val(" Exibir Não Disponíveis ");
    }
    else {
        $(e.target).val(" Ocultar Não Disponíveis ");
    } 
    toggleUnavailable(); 
});
$("fieldset", "#conteudo").append(hideButton);
