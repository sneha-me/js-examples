function generateTable(servicesObj,selectorId){
		//	var selectorId = $(div).attr("id");
			//alert(selectorId);
			var rowCount = servicesObj.rowsHeading.count;
			var headCount = servicesObj.header.count;
			alert("rowCount =" +rowCount);
			alert("headCount =" +headCount);
			var table = $('<table/>').attr("border","1").addClass("main_table");
			// For header
			var headRow = $('<tr/>');
			for(i=0; i<= headCount; i++){
				if(i == 0){
					var header = $(headRow).append('<th> </th>');
					$('#'+selectorId).append($(table).append(header));
				}
				else {
					header = $(headRow).append('<th>' +servicesObj.header[1-1]+ '</th>');
					$('#'+selectorId).append($(table).append(header));
				}
			}
			for(i=0;i<rowCount;i++){
				var row = $('<tr/>');
				for(j=0; j< (headCount+1) ; j++){
					if(j == 0){
						var col = $(row).append('<td class="colRows">' + servicesObj.rowsHeading[i] + '</td>');
						$('#'+selectorId).append($(table).append(col));
					}
					else{
						var col = $(row).append('<td class="col"> <input type="checkbox"></td>');
						$('#'+selectorId).append($(table).append(col));
					}
				}
				
			}
		}
		
		
/* 		$(document).ready(function(){
			var servicesObj = {
				0 : "Loyalty",
				1 : "Reservation",
				2 : "Location",
				3 : "Module",
				4 : "hello"
				
			}
			var count = 0;
			for(k in servicesObj){
				if(servicesObj.hasOwnProperty(k)){
				 ++count;
				
				}
				
			}
			//alert(count);
			generateTable(count,3,servicesObj);
		}); */
		
	