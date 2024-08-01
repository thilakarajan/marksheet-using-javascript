
const button = document.getElementsByTagName('button')[0]

let total1 = document.getElementById('sub1-t')
let total2 = document.getElementById('sub2-t')
let total3 = document.getElementById('sub3-t')
let total4 = document.getElementById('sub4-t')
let total5 = document.getElementById('sub5-t')
let total6 = document.getElementById('sub6-t')
let total7 = document.getElementById('sub7-t')
let total8 = document.getElementById('sub8-t')

button.addEventListener('click',()=>{
    let sub1 = Number(document.getElementById('sub1').value)
    let sub2 = Number(document.getElementById('sub2').value)
    let sub3 = Number(document.getElementById('sub3').value)
    let sub4 = Number(document.getElementById('sub4').value)
    let sub5 = Number(document.getElementById('sub5').value)
    let sub6 = Number(document.getElementById('sub6').value)
    let sub7 = Number(document.getElementById('sub7').value)
    let sub8 = Number(document.getElementById('sub8').value)
    try{
        if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 || sub6>100 || sub7>100 || sub8>100){
            throw "Marks shouldn't be greater than 100"
        }
        total1.innerHTML = sub1
        total2.innerHTML = sub2
        total3.innerHTML = sub3
        total4.innerHTML = sub4
        total5.innerHTML = sub5
        total6.innerHTML = sub6
        total7.innerHTML = sub7
        total8.innerHTML = sub8
        let total = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8
        document.getElementById('grand-total').innerHTML = total
        document.getElementById('percentage').innerHTML = `${total / 8}%`
        if(sub1<35 || sub2<35||sub3<35||sub4<35||sub5<35||sub6<35||sub7<35||sub8<35)
            document.getElementById('result').innerHTML='FAIL'
        let grade = document.getElementById('grade')
        if(total>=80)
            grade.innerHTML = 'A'
        else if(total>=70)
            grade.innerHTML = 'B'
        else if(total>=60)
            grade.innerHTML = 'C'
        else if(total>=50)
            grade.innerHTML = 'D'
        else if(total>=35)
            grade.innerHTML = 'E'
        else
        grade.innerHTML = 'F'
    }
    catch(error){
        alert(error)
        total1.innerHTML = '00'
        total2.innerHTML = '00'
        total3.innerHTML = '00'
        total4.innerHTML = '00'
        total5.innerHTML = '00'
        total6.innerHTML = '00'
        total7.innerHTML = '00'
        total8.innerHTML = '00'
        document.getElementById('sub1').value = ''
        document.getElementById('sub2').value = ''
        document.getElementById('sub3').value = ''
        document.getElementById('sub4').value = ''
        document.getElementById('sub5').value = ''
        document.getElementById('sub6').value = ''
        document.getElementById('sub7').value = ''
        document.getElementById('sub8').value = ''
        document.getElementById('grand-total').innerHTML = '000'
        document.getElementById('percentage').innerHTML = `00.00%`
    }

})