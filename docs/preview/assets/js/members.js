window.onload = (e) => {

	const portrait = window.matchMedia("(orientation: portrait)");
	let isPortrait = portrait.matches;

	const chartConfig = {
		debug: true,
		type: 'horizontalColumn',
		title_label_text: '⋯ عضوية مجموعات الواتس  واللجنة التأسيسية ⋯', /* code expansion feature */
		title_position: 'right', /* code expansion feature */
		yAxis: { label_text: '' },
		xAxis: {
			label_text: '',
			categories: [
		' ... مكتب أمانة التثقيف والتدريب<strong>WhatsApp</strong>',
		' ... أمانة التثقيف والتدريب (عمل وإبداع)<strong>WhatsApp</strong>',
		' ... فعاليات تثقيفية.. (صوت الأمل)<strong>WhatsApp</strong>',
		' ... كورس القائد الأمل (مجموعة متابعة)<strong>WhatsApp</strong>',
		' ... أمانة التثقيف والتدريب (تعريف)<strong>WhatsApp</strong>',
		' ... اللجنة التأسيسية<strong>Signal</strong>',
		' ... حزب تيار الأمل محافظة القاهرة<strong>WhatsApp</strong>',
		' ... حزب تيار الأمل محافظة الاسكندرية<strong>WhatsApp</strong>',
		' ... حزب تيار الأمل محافظة الجيزة<strong>WhatsApp</strong>',
		' ... حزب تيار الأمل محافظة البحيرة<strong>WhatsApp</strong>',
			],
		},
		legend_visible: !isPortrait,
		legend: {template: '%icon %name'},
		defaultSeries: {
			defaultPoint: {
				label: { text: '%yValue', padding: 2 },
			}
		},
		animation: false,
		series: [
			{
				name: 'عضو',
				points: [7, 18, 126, 46, 15, 19, 214, 86, 138, 63]
			},
			{
				name: 'مغادر',
				points: [0, 4, 11, 3, 1, 1, 3, 3, 2, 0]
			},
		],
	};

	JSC.chart('chartDiv', chartConfig);

	portrait.addEventListener("change", (e) => {
		if(e.matches){
			// Portrait mode
			isPortrait = true;
		}
		else{
        // Landscape mode
			isPortrait = false;
		}
		chartConfig.legend_visible = !isPortrait;
		JSC.chart('chartDiv', chartConfig);
	});
}
