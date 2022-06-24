// DROPDOWN MENU FETCHED API JAVA SCRIPT (INVOICE EDIT)

fetch('https://fakestoreapi.com/products').then((data)=>{
 	return data.json();
}).then((objectData)=> {
	console.log(objectData[0].title);
	let tableData="";
	// let dropData="";
	objectData.map((values)=> {
		tableData=`<tr>
															      
															      <td>${values.title}</td>
															      <td>$${values.price}</td>
															      <td>1</td>
															      <td>$${values.price}</td>
															    </tr>`;
		// dropData+=`<option>${values.title}</option>`;	
	});
	document.getElementById("table-body").innerHTML=tableData;
	// document.getElementById("drop-api").innerHTML=dropData;
}).catch((err)=> {
	console.log(err);
})



























// fetch('https://fakestoreapi.com/products').then((data)=>{
// 	return data.json();
// }).then((completedata)=>{
// 	let data1="";
// 	let data2="";
// 	completedata.map((values)=>{
// 		data1=  	`<tr>
//     							<td>
//     								<table>
//     									<thead>
//     										<td>Description</td>
//     									</thead>
//     									<tr>
//     										<td>${values.title}</td>
//     									</tr>
//     								</table>
//     							</td>
//     							<td>
//     								<table cellspacing="80">
//     									<thead>
//     										<td>Rate</td>
//     										<td>Qty</td>
//     										<td>Line Total</td>
//     									</thead>
//     									<tr>
//     										<td>${values.price}</td>
//     										<td>1</td>
//     										<td>${values.price}</td>
//     									</tr>
//     								</table>
//     							</td>
//     						</tr>`
//     	data2= `<tr>
//     							<td class="details">Transaction 1 <br> Paid on 5th May, 2022 </td> 
//     							<td class="address"> Amount Paid <br>${values.price}</td>
    							
//     						</tr>`    									    									    								
// 	});
// 	document.getElementById("fetching").innerHTML=data1;
// 	document.getElementById("fetchings").innerHTML=data2;

// }).catch((err)=>{
// 	console.log(err);
// })