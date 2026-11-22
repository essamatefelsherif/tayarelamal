window.onload = (e) => {

	const portrait = window.matchMedia("(orientation: portrait)");
	let isPortrait = portrait.matches;

	const chartConfig = {
		debug: true,
		type: 'horizontalColumn',
		title_label_style_fontFamily: 'Noto Naskh Arabic',
		title_label_text: '… <strong> مشاهدات علي YouTube </strong> …',
		title_label_style_color: 'maroon',
		yAxis: { label_text: '' },
		xAxis: {
			label_text: '… <strong> أصوات مع أحمد الطنطاوي </strong> …',
			categories: [
				'<strong>٤ سبتمبر ٢٠٢٦</strong><br>أين تقف مصر من كارثة سد النهضة؟',
				'<strong>١١ سبتمبر ٢٠٢٦</strong><br>روشتة وطنية لحل الأزمة المالية',
				'<strong>١٨ سبتمبر ٢٠٢٦</strong><br>تعديل الدستور أم تفصيل الدستور؟',
				'<strong>٢٥ سبتمبر ٢٠٢٦</strong><br>حكومة حقيقية لا سكرتارية رئاسية',
				'<strong>٢ أكتوبر ٢٠٢٦</strong><br>برلمان للشعب لا صدى صوت للسلطة',
				'<strong>٩ أكتوبر ٢٠٢٦</strong><br>الأركان الأربعة لإصلاح مؤسسة الرئاسة',
				'<strong>١٦ أكتوبر ٢٠٢٦</strong><br>١٥ خطوة لإصلاح المحليات (١)',
				'<strong>٢٣ أكتوبر ٢٠٢٦</strong><br>١٥ خطوة لإصلاح المحليات (٢)',
				'<strong>٣٠ أكتوبر ٢٠٢٦</strong><br>لماذا نفشل في التحول المدني الديمقراطي وتنجح الدول الأخرى؟',
				'<strong>٦ نوفمبر ٢٠٢٦</strong><br>أزمة الإعلام في مصر.. كيف يمكن استعادة الحرية والاستقلال؟',
			],
			label_style_fontFamily: 'Noto Naskh Arabic',
			label_style_color: 'maroon',
		},
		yAxis_visible: false,
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
	const videoID = ['SO29HVu00Xw', 'pJ8A8Cuu3eM', 'QEdWpiT_qSQ', 'buVduIHdxx8', '313YvOq5cLY', '5wax1tzDc8o', 'vlOl7kMlI4w', 'PJhx_eBlt9Q', 'xVVVY5sCHAU', 'GMZeA8IETMA'];
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
