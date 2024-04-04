export default {
	generatePrompt () {
		//	write code here
		//	this.myVar1 = [1,2,3]
				var prompt = 'Following are the column names for table ' + Select1.selectedOptionValue  + '.' + Select2.selectedOptionValue + '.' + Select3.selectedOptionValue + ' : ' + MultiSelect1.selectedOptionValues + '. ' + Input1.text + '. Print only the SQL.';
		Input2.setValue(prompt);

	},
}