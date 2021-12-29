const slider = {
	props: {
		'sliderName': String,
		'sliderValue': String,
		'startingValue': String,
		'maxValue': String
	},

	template: `
		<div class="slider">
			<label>{{ sliderName }} | <span style="color: #c2bdff">{{ sliderValue }}</span></label>
			<br>
			<div class="slidercontainer">
				<input 
					type="range" 
					:min="startingValue" 
					:max="maxValue"
					:value="sliderValue"
					@input="$emit('input', $event.target.value)"
				>
				<div class="mt-2">
					<span>{{ startingValue }}</span>
					<span>{{ maxValue }}</span>
				</div>
			</div>
		</div>
	`,
}