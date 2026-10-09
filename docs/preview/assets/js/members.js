window.onload = (e) => {

	const portrait = window.matchMedia("(orientation: portrait)");
	let isPortrait = portrait.matches;

	const chartConfig = {
		debug: true,
		type: 'horizontalColumn',
		title_label_text: 'عضوية مجموعات الواتس',
		yAxis: { label_text: '' },
		xAxis: {
			label_text: 'مجموعات الواتس',
			categories: [
		'<strong>WhatsApp</strong><br>مكتب أمانة التثقيف والتدريب؟',
		'<strong>WhatsApp</strong><br>أمانة التثقيف والتدريب (عمل وإبداع)',
		'<strong>WhatsApp</strong><br>فعاليات تثقيفية.. (صوت الأمل)',
		'<strong>WhatsApp</strong><br>كورس القائد الأمل (مجموعة متابعة)',
		'<strong>WhatsApp</strong><br>أمانة التثقيف والتدريب (تعريف)',
		'<strong>Signal</strong><br>اللجنة التأسيسية 2026',
		'<strong>WhatsApp</strong><br>حزب تيار الأمل محافظة القاهرة',
		'<strong>WhatsApp</strong><br>حزب تيار الأمل محافظة الاسكندرية',
		'<strong>WhatsApp</strong><br>حزب تيار الأمل محافظة الجيزة',
			],
		},
//		legend_visible: !isPortrait,
		legend_visible: false,
		defaultSeries: {
			defaultPoint: {
				label: { text: '%yValue', padding: 2 },
			}
		},
		animation: false,
		series: [
			{
				name: 'عضو',
				points: [7, 18, 121, 48, 16, 19, 214, 86, 138]
			},
			{
				name: 'مغادر',
				points: [0, 4, 10, 1, 0, 1, 11, 3, 7]
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
//		chartConfig.legend_visible = !isPortrait;
		chartConfig.legend_visible = false;
		JSC.chart('chartDiv', chartConfig);
	});
}
