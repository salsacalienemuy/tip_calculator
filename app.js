var tipCalculator = angular.module("TipCalculator", []);

/* conversion rates and UI idea from: http://convert.french-property.co.uk/ */

tipCalculator.controller('TipCalculatorController', [
	'$scope', function($scope){
		
		var ucc = this;
		
		//attributes
		ucc.lengthValue = 0;
		

		//cities to populate the drop-down box
		ucc.metric_volume_units = 
		[
			{
				unit_name: "10%",
				unit_code: "cm3",
				type: "metric"
			},
			{
				unit_name: "15%",
				unit_code: "m3",
				type: "metric"
			},
			{
				unit_name: "20%",
				unit_code: "l",
				type: "metric"
			}
		];		
		
		function lengthUpdated(){
			console.log(ucc.lengthValue);
		}
		
		$scope.$watch('ucc.lengthValue', lengthUpdated);
		
		ucc.selected_tip_amount = ucc.tip_amount[0];
		
		//behaviors
		
		ucc.showTipAmount = function(){
			console.log(ucc.selected_tip_amount.amount_name);
		}
		
	}
]);
