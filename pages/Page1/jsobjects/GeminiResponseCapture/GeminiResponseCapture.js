export default {
	displayGeminiResponse (){
		Input4.setValue(Api1.data.candidates[0].content.parts[0].text);
	}	
}