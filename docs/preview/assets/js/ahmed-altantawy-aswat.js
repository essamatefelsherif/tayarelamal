window.onload = (e) => {

	const portrait = window.matchMedia("(orientation: portrait)");
	let isPortrait = portrait.matches;

	const chartConfig = {
		debug: true,
		type: 'horizontalColumn',
		title_label_text: 'مشاهدات علي وسائل التواصل الإجتماعي ... YouTube',
		yAxis: { label_text: '' },
		xAxis: {
			label_text: 'أصوات مع أحمد الطنطاوي',
			categories: [
		'٤ سبتمبر ٢٠٢٦<br>أين تقف مصر من كارثة سد النهضة؟',
		'١١ سبتمبر ٢٠٢٦<br>روشتة وطنية لحل الأزمة المالية',
		'١٨ سبتمبر ٢٠٢٦<br>تعديل الدستور أم تفصيل الدستور؟',
			],
		},
		legend_visible: !isPortrait,
		defaultSeries: {
			defaultPoint: {
				label: { text: '%yValue', padding: 2 },
			}
		},
		animation: false,
		series: [
			{
				name: 'Views',
				points: [72526, 177093, 0]
			},
			{
				name: 'Likes',
				points: [2906, 2400, 0]
			},
			{
				name: 'Comments',
				points: [493, 508, 0]
			},
		],
	};

	const apiKey = 'AIzaSyB3c5EHgnE7iCXKURAV3jrupwFIDtnwz0Q';
	const videoID = ['SO29HVu00Xw', 'pJ8A8Cuu3eM', 'QEdWpiT_qSQ', ];
	const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key=${apiKey}&part=snippet,contentDetails,statistics,status`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			if(data.items && data.items.length > 0){
				let viewCount    = data.items.map(e => +e.statistics.viewCount);
				let likeCount    = data.items.map(e => +e.statistics.likeCount);
				let commentCount = data.items.map(e => +e.statistics.commentCount);

				chartConfig.series[0].points = viewCount;
				chartConfig.series[1].points = likeCount;
				chartConfig.series[2].points = commentCount;

				JSC.chart('chartDiv', chartConfig);
			}
		})
		.catch(error => {
			console.error('Error fetching view count:', error);
		});

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
