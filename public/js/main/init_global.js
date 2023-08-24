//======init global var
var idCard=1
var forms=[]
var header_form={}
var person=0
var generationlist=[]
$(window).on('load', function() {
    $('#traitModal').modal({backdrop: 'static', keyboard: false}).modal('show');
});
generateGenerationCard(1)