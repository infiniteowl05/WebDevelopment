$(document).ready(function(){
        // Read value on page load
        $("#currentRate b").html($("#interestRate").val());

        // Read value on change
        $("#interestRate").change(function(){
            $("#currentRate b").html($(this).val());
        });

				var $yrSelect = $("#yearList");
				for (i=0;i<=99;i++){
						$yrSelect.append($("<option></option>").val(i).html(i+" Years"))
				}

				var $moSelect = $("#monthList");
				for (i=0;i<=11;i++){
						$moSelect.append($("<option></option>").val(i).html(i+" Months"))
				}


    });
