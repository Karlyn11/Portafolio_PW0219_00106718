let carnet_field = document.querySelector("#carnet_field")
let schedule_dropdown = document.querySelector("#schedule_field")
let late_switch = document.querySelector("#late_switch")
let submit_btn = document.querySelector("#submit_btn")

let table_body = document.querySelector("#table_body")
let carnet_regex= new RegExp('^[0-9]{8}$')

let student_list = []
let serial = 0

let printArray = ()=>{
table_body.innerHTML=""

student_list.forEach(element =>{
let new_row = document.createElement("tr")
new_row.classList.add("table-active")
new_row.innerHTML =
`<th scope='row'>${element.carnet}</th>
<td>${element.horario}</td>
<td>${element.ingreso}</td>
<td>${element.tarde}</td>`

let new_cell = document.createElement("td")
let new_btn= document.createElement("button")
let new_cell2= document.createElement("td")
let new_field= document.createElement("input")
new_field.type= "text"
new_field.value= ""
new_field.className= "form-control"
new_field.id= "verif_field"

new_btn.className = "btn btn-danger"
new_btn.innerText = "DROP"
new_btn.value = element.id

new_btn.addEventListener("click", event =>{
let id_actual = event.target.value
let verif_field=document.querySelector("#verif_field")

student_list.forEach((element, pos)=>{
if(id_actual == element.id && element.carnet==verif_field.value){
student_list.splice(pos,1)
printArray()
}
else {
    alert("Escribir Carnet en el campo para poder borrar")
}
})
})
new_cell2.appendChild(new_field)
new_cell.appendChild(new_btn)
new_row.appendChild(new_cell)
new_row.append(new_cell2)
table_body.appendChild(new_row)
})
}
let addStudent = (carnet, schedule, late)=>{
let datetime = new Date()
let datetime_string = datetime.toLocaleString()

student_list.push({
"id": serial,
"carnet": carnet,
"horario": schedule,
"tarde": late,
"ingreso": datetime_string
})
serial++
}

let parseLateSwitch= (value)=>{
if(value){
return "Tarde"
}
return "Bien"
}

submit_btn.addEventListener("click", ()=>{
let carnet = carnet_field.value
let schedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text
let late = parseLateSwitch(late_switch.checked)

if(carnet_regex.test(carnet)){
addStudent(carnet, schedule, late)
printArray()
}else{
alert("Formato de carnet no válido")
}
})

carnet_field.addEventListener("keyup", (event)=>{
let keyCode = event.keyCode
let carnet = carnet_field.value

if(keyCode == 13){
submit_btn.click()
}

if(carnet_regex.test(carnet)){
submit_btn.disabled = false;
}else{
submit_btn.disabled = true;
}
})