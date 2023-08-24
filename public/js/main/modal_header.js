function saveHeader(){
    if(!$('#trait_header').val()||!$('#gene_header').val()){
        alert("please complete form");
    }else{
        header_form={
            'trait':$('#trait_header').val(),
            'gene':$('#gene_header').val()
        }
        $('#traitModal').modal('hide');
    }

}
function done(){
    $('#patternModal').modal('show');
}
function savePattern(){
    $('#patternModal').modal('hide');
}