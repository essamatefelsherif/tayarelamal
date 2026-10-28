window.onload = () => {

	let chartConfig = {
		type: 'horizontal column',
		zAxis_scale_type: 'stacked',
		title:{
			label:{
				text: '⋯ البرنامج الزمني لمستهدفات المحور الإقتصادي ⋯',
				align: 'center',
				style: {
					fontFamily: 'Noto Naskh Arabic',
					fontWeight: 'bold',
					// fontSize: 'large',
					color: 'maroon',
				},
			},
			position: "center",
		},
		legend: {
			visible: true,
			position: 'bottom',
			template: '%icon %name'
		},
		xAxis_visible: false,
		palette: 'mixed',
		yAxis:{
			cultureName: 'ar-EG',
			defaultTick: {
				label: {
					text: '{%value:n} شهر',
					style: {
						fontFamily: 'Noto Naskh Arabic',
						fontWeight: 'bold',
						color: 'maroon',
					},
				},
			},
			scale: {
				type: 'auto',
				interval: 3,
				range: [0, 24],
			},
		},
		defaultSeries: {
			defaultPoint: {
				hatch_color: 'darkenMore',
				label: {
					text: '%name',
					padding: 2,
				}
			}
		},

		series: [
			{
				name: 'المرحلة الأولى',
				points: [
					{
						name: 'المرحلة الأولى ⋯ التدابير العاجلة',
						outline: {
							color: 'darkenMore',
							width: 2
						},
						hatch_style: 'light-downward-diagonal',
						y: [0, 3]
					},
					{
						name: 'توحيد الرؤية الوطنية بين الدولة والقطاع الخاص',
						marker_visible: true,
						y: [0.5, 0.5],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'وقف إستنزاف الإحتياطي الدولاري',
						marker_visible: true,
						y: [1, 1],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'كسر التضخم السلعي وحماية الطبقات الكادحة',
						marker_visible: true,
						y: [1.5, 1.5],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'بدء تسجيل وتأمين عمال ورش بير السلم',
						marker_visible: true,
						y: [2, 2],
						tooltip: '{%name}',
						label_align: 'right',
					},
				]
			},
			{
				name: 'المرحلة الثانية',
				points: [
					{
						name: 'المرحلة الثانية ⋯ الهيكلة المؤسسية، تعبئة الموارد الكامنة، وإطلاق التمويل الوطني',
						outline: {
							color: 'darkenMore',
							width: 2
						},
						hatch_style: 'light-downward-diagonal',
						y: [3, 12]
					},
					{
						name: 'خفض عجز الموازنة دون إستدانة جديدة وتحقيق العدالة الضريبية',
						marker_visible: true,
						y: [4, 4],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'خفض تكاليف الإنتاج الصناعي بنسبة ٣٥٪ نهارا',
						marker_visible: true,
						y: [5, 5],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'توجيه الإئتمان نحو الأنشطة الإنتاجية وإحلال الواردات',
						marker_visible: true,
						y: [6, 6],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'تسليم الدفعة الأولى من المجمعات الجاهزة بالتراخيص',
						marker_visible: true,
						y: [7, 7],
						tooltip: '{%name}',
						label_align: 'right',
					},
				]
			},
			{
				name: 'المرحلة الثالثة',
				points: [
					{
						name: 'المرحلة الثالثة ⋯ الإستقلال الإقتصادي، جني ثمار الإنتاج، والتوجه نحو التصدير',
						outline: {
							color: 'darkenMore',
							width: 2
						},
						hatch_style: 'light-downward-diagonal',
						y: [12, 24]
					},
					{
						name: 'التحول الشامل إلى "إقتصاد إنتاجي" واستعادة الملكية العامة وتوفير فرص عمل',
						marker_visible: true,
						y: [13, 13],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'تحويل الديون قصيرة الأجل إلى طويلة الأجل وإسقاط غير المشروع منها',
						marker_visible: true,
						y: [14, 14],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'تحقيق إكتفاء ٧٥٪ للقمح و ٥٠٪ للزيوت.',
						marker_visible: true,
						y: [15, 15],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'نمو الصادرات السلعية بنسبة لا تقل عن ٢٥٪',
						marker_visible: true,
						y: [16, 16],
						tooltip: '{%name}',
						label_align: 'right',
					},
				]
			},
		]
	};

	let chart = JSC.chart('chartDiv', chartConfig);
};
