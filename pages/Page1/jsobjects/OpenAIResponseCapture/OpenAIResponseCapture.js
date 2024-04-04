export default {
	displayOpenAIResponse (){
		Input3.setValue(Api2.data.choices[0].message.content);
	}	
}