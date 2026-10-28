window.onload = () => {

	let chartConfig = {
		type: 'horizontal column',
		zAxis_scale_type: 'stacked',
		title:{
			label:{
				text: '⋯ البرنامج الزمني لمستهدفات المحور السياسي ⋯',
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
						name: 'المرحلة الأولى ⋯ الإجراءات العاجلة',
						outline: {
							color: 'darkenMore',
							width: 2
						},
						hatch_style: 'light-downward-diagonal',
						y: [0, 3]
					},
					{
						name: 'تصفية ملف سجناء الرأي',
						marker_visible: true,
						y: [0.5, 0.5],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'إسترداد ثقة الشارع',
						marker_visible: true,
						y: [1, 1],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'كسر سيطرة الصوت الواحد',
						marker_visible: true,
						y: [1.5, 1.5],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'وقف التلفيق والتدوير',
						marker_visible: true,
						y: [2, 2],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'حماية حرمة المنازل',
						marker_visible: true,
						y: [2.5, 2.5],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'بدء تعويض المتضررين ماديا ومعنويا',
						marker_visible: true,
						y: [3, 3],
						tooltip: '{%name}',
						label_align: 'right',
					},
				]
			},
			{
				name: 'المرحلة الثانية',
				points: [
					{
						name: 'المرحلة الثانية ⋯ الإصلاحات التشريعية والمؤسسية وضمانات المحاكمة العادلة',
						outline: {
							color: 'darkenMore',
							width: 2
						},
						hatch_style: 'light-downward-diagonal',
						y: [3, 12]
					},
					{
						name: 'كسر إحتكار الأغلبية المصنوعة',
						marker_visible: true,
						y: [4, 4],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'تحجيم المال السياسي',
						marker_visible: true,
						y: [5, 5],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'وضع كافة المسئولين تحت رقابة الشعب',
						marker_visible: true,
						y: [6, 6],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'إنهاء التغول الأمني',
						marker_visible: true,
						y: [7, 7],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'كفالة ضمانات المحاكمة العادلة والشفاهية',
						marker_visible: true,
						y: [8, 8],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'تفكيك بنية الإستبداد والإفلات من العقاب',
						marker_visible: true,
						y: [9, 9],
						tooltip: '{%name}',
						label_align: 'right',
					},
				]
			},
			{
				name: 'المرحلة الثالثة',
				points: [
					{
						name: 'المرحلة الثالثة ⋯ مراجعة الدستور وإعادة الهيكلة السيادية وحوكمة إنفاذ القانون',
						outline: {
							color: 'darkenMore',
							width: 2
						},
						hatch_style: 'light-downward-diagonal',
						y: [12, 24]
					},
					{
						name: 'التحول الشامل لدولة القانون والمؤسسات',
						marker_visible: true,
						y: [13, 13],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'تأمين التنافسية الإقتصادية',
						marker_visible: true,
						y: [14, 14],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'تحويل الإعلام لسلطة رابعة',
						marker_visible: true,
						y: [15, 15],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'تحقيق المصالحة الوطنية الشاملة',
						marker_visible: true,
						y: [16, 16],
						tooltip: '{%name}',
						label_align: 'right',
					},
					{
						name: 'ترسيخ مبدأ التداول السلمي للسلطة',
						marker_visible: true,
						y: [17, 17],
						tooltip: '{%name}',
						label_align: 'right',
					},
				]
			},
		]
	};

	let chart = JSC.chart('chartDiv', chartConfig);
};
