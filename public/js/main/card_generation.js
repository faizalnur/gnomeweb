//============== Card Generation ===========

function generateGenerationCard(generationNum,childPoint=null,position=1) {
    const calloutContainer = $("#gnome-menu");
    const htmlCode = `
      <div class="bd-callout bd-callout-${generateColorCard(generationNum)} w-100" data-toggle="modal" data-target="#gnomeModal" onClick="generateModalHeader('${generationNum}','${idCard}','${childPoint}','${parseInt(position)+1}')">
        <h5>Generation ${generationNum}</h5>
        K - N
      </div>
    `;
    calloutContainer.append(htmlCode);
    generationlist.push({id:idCard,generationNum:generationNum,class:'bd-callout-success'})
    idCard++;
}

function generateUIFDCard(generationNum=null,position=1) {
    const calloutContainer = $("#gnome-menu");
    const htmlCode = `
      <div class="bd-callout bd-callout-${generateColorCard(generationNum)} w-100">
        <h5>UIFD ${position}</h5>
        (from generation ${generationNum})
      </div>
    `;
    calloutContainer.append(htmlCode);
    generationlist.push({id:idCard,generationNum:generationNum,class:'bd-callout-success'})
}

function generateColorCard(id) {
    if(id%4==0){
        return 'success'
    }else if(id%3==0){
        return 'info'
    }else if(id%2==0){
        return 'danger'
    }else{
        return 'primary'
    }
}





