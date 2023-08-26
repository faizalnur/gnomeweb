function saveHeader(){
    if(!$('#trait_header').val()||!$('#gene_header').val()){
        alert("please complete form");
    }else{
        header_form={
            'trait':$('#trait_header').val(),
            'gene':$('#gene_header').val(),
            'pattern':''
        }
        $('#traitModal').modal('hide');
    }
  
}
function done(){
    $('#patternModal').modal('show');
}
function savePattern(){
    $('#patternModal').modal('hide');
    //scriptModal
    const selectedRadioButton = document.querySelector('input[name="pattern"]:checked');
  
    if (selectedRadioButton) {
        const selectedValue = selectedRadioButton.value;
        console.log('Selected Pattern:', selectedValue);
        header_form.pattern=selectedValue
    }
    detail_form=groupObjectsByIdCard(forms)
    console.log("all_forms",JSON.stringify(groupObjectsByIdCard(forms)))
    $('#scriptModal').modal('show');
    generateScript()
}

function groupObjectsByIdCard(data) {
    const grouped = [];
    var old_data=data
    data.map(obj => {
      const idcard = obj.idcard;
      let group = grouped.find(group => group.idcard === idcard);
      if (!group) {
        group = { idcard,numcard:obj.numcard,couple_name:'',married_type:'',description:'not married', member: [],childvalUIFD:0 ,childval:0,married_type:''};
        grouped.push(group);
      }
      
      if(obj.rb =='married'){
          group.married_type="Married"
          group.description="are not consanguineous related"
      }
      if(obj.rb2 =='married_cousin'){
          group.married_type="Married First Cousin"
          group.description="are consanguineous related as first cousins"
      }
      group.couple_name = !group.couple_name.length?obj.nameperson:group.couple_name+' and '+obj.nameperson
      group.childvalUIFD += obj.childvalUIFD;
      group.childval += obj.childval;
      group.member.push(obj);
    });
    grouped.forEach((group_item)=>{
      group_item.normalChild=0
      group_item.carrierChild=0
      group_item.hemophiliacChild=0
      group_item.trait_description=""
      var child=data.filter(function(item) {
                        return item.childpoint == 'childpoint-'+group_item.numcard+"-"+group_item.idcard;
                      });
      group_item.trait_description=`doesn't have child`
      if(child.length){
          group_item.normalChild= child.reduce(function(acc, item_) {
              return acc + (item_.trait === 'normal' ? 1 : 0);
            }, 0);
          group_item.carrierChild= child.reduce(function(acc, item_) {
              return acc + (item_.trait === 'carrier' ? 1 : 0);
            }, 0);
           group_item.hemophiliacChild= child.reduce(function(acc, item_) {
              return acc + (item_.trait === 'hemophiliac' ? 1 : 0);
            }, 0);
            group_item.trait_description=' have '+group_item.normalChild+' Normal Children,'
            group_item.trait_description+=group_item.carrierChild+' Carrier Children, '
              group_item.trait_description+=group_item.hemophiliacChild+' Hemophiliac Children, and '
            group_item.trait_description+=group_item.childvalUIFD+' UIFD Children.'
      }
       
      group_item.child=child
        return group_item
    })
    return grouped;
  }