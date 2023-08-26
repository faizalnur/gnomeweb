function generateScript(){
const part1 = detail_form.map(entry => entry.couple_name+' '+entry.trait_description+` with ${header_form.trait} [ ${header_form.gene} ]`).join('/');
const part2 = detail_form.map(entry => '<p style="margin-bottom:10px">'+entry.couple_name+' '+entry.description+','+entry.trait_description+'.The condition is inherited in an '+header_form.pattern+' pattern,<span style="font-weight:700">which means both copies of the gene in each cell carry a pathological mutation. The parents are obligate carriers and most carriers for autosomal recessive conditions are usually healthy with no symptoms or signs of the disease. It was further explained to the family that in each pregnancy there is a 25% risk of having a child with Sickle cell disease regardless of the sex of the baby, a 50 % chance for the baby to be a carrier (like his parents) and a 25% chance of being normal./</span></p>').join('');
// Log to console
console.log('detail_form',detail_form)
console.log("selected part 1",part1)
var script=`
<p>${part1}</p>

<p style="font-weight:700;margin-bottom:10px">
Sickle cell disease overview:
</p>
<p style="margin-bottom:10px">
Sickle cell disease is a group of disorders that affects hemoglobin, the molecule in red blood cells that delivers oxygen to cells throughout the body. People with this disease have atypical hemoglobin molecules called hemoglobin S, which can distort red blood cells into a sickle, or crescent, shape.
</p>
<p style="margin-bottom:10px">
Signs and symptoms of sickle cell disease usually begin in early childhood. Characteristic features of this disorder include a low number of red blood cells (anemia), repeated infections, and periodic episodes of pain. The severity of symptoms varies from person to person. Some people have mild symptoms, while others are frequently hospitalized for more serious complications.
</p>
<p style="margin-bottom:30px">
The signs and symptoms of sickle cell disease are caused by the sickling of red blood cells. When red blood cells sickle, they break down prematurely, which can lead to anemia. Anemia can cause shortness of breath, fatigue, and delayed growth and development in children. The rapid breakdown of red blood cells may also cause yellowing of the eyes and skin, which are signs of jaundice. Painful episodes can occur when sickled red blood cells, which are stiff and inflexible, get stuck in small blood vessels. These episodes deprive tissues and organs, such as the lungs, kidneys, spleen, and brain, of oxygen-rich blood and can lead to organ damage. A particularly serious complication of sickle cell disease is high blood pressure in the blood vessels that supply the lungs (pulmonary hypertension), which can lead to heart failure. Pulmonary hypertension occurs in about 10 percent of adults with sickle cell disease.
</p>
<p style="font-weight:700;margin-bottom:10px">
Family history:
</p>
${part2}

    `
    $('#script').html(script)
}