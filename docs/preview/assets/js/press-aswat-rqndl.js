window.onload = (e) => {

	const portrait = window.matchMedia("(orientation: portrait)");
	let isPortrait = portrait.matches;

	const chartConfig = {
		debug: true,
		type: 'horizontalColumn',
		title_label_text: 'مشاهدات علي وسائل التواصل الإجتماعي ... YouTube',
		yAxis: { label_text: '' },
		xAxis: {
			label_text: 'أصوات مع رشا قنديل',
			categories: [
		'١٤ سبتمبر ٢٠٢٦<br>ماذا حدث للـ ١٠٠ جنيه؟',
		'٢٣ سبتمبر ٢٠٢٦<br>عن تاريخ الحراك الطلابي',
		'٢٩ سبتمبر ٢٠٢٦<br>عن أزمة التعليم'
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
	const videoID = ['e6ncMbtRP_4', '7AxfEgJercI', 'HcJqDjd4DG8'];
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
