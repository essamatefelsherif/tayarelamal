window.onload = () => {

	let chartConfig = {
		type: 'horizontal column',
		zAxis_scale_type: 'stacked',
		legend: {
			visible: true,
			position: 'top',
			template: '%icon %name'
		},
		xAxis_visible: false,
		palette: 'mixed',
		yAxis_scale_type: 'time',

		defaultSeries: {
			defaultPoint: {
				hatch_color: 'darkenMore',
				label: { text: '%name', padding: 2 }
			}
		},

		series: [
			{
				name: 'Interviews',
				points: [
					{
						name: 'لقاءات صحفية',
						outline: {
							color: 'darkenMore',
							width: 2
						},
						hatch_style: 'light-downward-diagonal',
						y: ['2015-06-30', '2027-04-30']
					},
					{
						name: 'Mehwar TV',
						marker_visible: true,
						y: ['2016-04-20', '2016-04-20'],
						tooltip: 'Mehwar TV ⋯ 20-Apr-2016',
						label_align: 'right'
					},
					{
						name: 'Al-Hayah TV Network',
						marker_visible: true,
						y: ['2016-08-02', '2016-08-02'],
						tooltip: "Al-Hayah TV Network ⋯ 02-Aug-2016",
						label_align: 'right'
					},
					{
						name: 'Al-Hayah TV Network ',
						marker_visible: true,
						y: ['2017-01-07', '2017-01-07'],
						tooltip: "Al-Hayah TV Network ⋯ 07-Jan-2017",
						label_align: 'right'
					},
					{
						name: 'Al-Masry Al-Youm',
						marker_visible: true,
						y: ['2017-08-28', '2017-08-28'],
						tooltip: "Al-Masry Al-Youm ⋯ 28-Aug-2017",
						label_align: 'right'
					},
					{
						name: 'MBC Misr',
						marker_visible: true,
						y: ['2018-04-18', '2018-04-18'],
						tooltip: "MBC Misr ⋯ 18-Apr-2018",
						label_align: 'right'
					},
					{
						name: 'BBC',
						marker_visible: true,
						y: ['2018-07-28', '2018-07-28'],
						tooltip: "BBC ⋯ 28-Jul-2018",
						label_align: 'right'
					},
					{
						name: 'BBC ',
						marker_visible: true,
						y: ['2019-01-05', '2019-01-05'],
						tooltip: "BBC ⋯ 05-Jan-2019",
						label_align: 'right'
					},
					{
						name: 'Al Mashhad Newspaper',
						marker_visible: true,
						y: ['2019-05-20', '2019-05-20'],
						tooltip: "Al Mashhad Newspaper ⋯ 20-May-2019",
						label_align: 'right'
					},
					{
						name: 'France 24',
						marker_visible: true,
						y: ['2019-10-10', '2019-10-10'],
						tooltip: "France 24 ⋯ 10-Oct-2019",
						label_align: 'right'
					},
					{
						name: 'BBC  ',
						marker_visible: true,
						y: ['2019-10-26', '2019-10-26'],
						tooltip: "BBC ⋯ 26-Oct-2019",
						label_align: 'right'
					},
					{
						name: 'BBC   ',
						marker_visible: true,
						y: ['2021-01-04', '2021-01-04'],
						tooltip: "BBC ⋯ 04-Jan-2021",
						label_align: 'right'
					},
					{
						name: 'BBC    ',
						marker_visible: true,
						y: ['2021-01-10', '2021-01-10'],
						tooltip: "BBC ⋯ 10-Jan-2021",
						label_align: 'right'
					},
					{
						name: 'BBC     ',
						marker_visible: true,
						y: ['2022-05-22', '2022-05-22'],
						tooltip: "BBC ⋯ 22-May-2022",
						label_align: 'right'
					},
					{
						name: 'Al-Manassa',
						marker_visible: true,
						y: ['2023-09-27', '2023-09-27'],
						tooltip: "Al-Manassa ⋯ 27-Sep-2023",
						label_align: 'right'
					},
					{
						name: 'BBC      ',
						marker_visible: true,
						y: ['2025-06-06', '2025-06-06'],
						tooltip: "BBC ⋯ 06-Jun-2025",
						label_align: 'right'
					},

					{
						name: 'Alhoria News #1',
						marker_visible: true,
						y: ['2025-09-01', '2025-09-01'],
						tooltip: "Alhoria News #1 ⋯ 01-Sep-2025",
						label_align: 'right'
					},
					{
						name: 'Alhoria News #2',
						marker_visible: true,
						y: ['2025-09-02', '2025-09-02'],
						tooltip: "Alhoria News #2 ⋯ 02-Sep-2025",
						label_align: 'right'
					},
					{
						name: 'Hafez Al-Mirazi',
						marker_visible: true,
						y: ['2025-09-17', '2025-09-17'],
						tooltip: "Hafez Al-Mirazi ⋯ 17-Sep-2025",
						label_align: 'right'
					},
					{
						name: 'Fakar Taany #1',
						marker_visible: true,
						y: ['2025-11-16', '2025-11-16'],
						tooltip: "Fakar Taany #1 ⋯ 16-Nov-2025",
						label_align: 'right'
					},
					{
						name: 'Fakar Taany #2',
						marker_visible: true,
						y: ['2025-11-19', '2025-11-19'],
						tooltip: "Fakar Taany #2 ⋯ 19-Nov-2025",
						label_align: 'right'
					},

				]
			},
			{
				name: 'Professional Certificates',
				points: [
					{
						name: 'Certificates',
						outline: {
							color: 'darkenMore',
							width: 2
						},
						hatch_style: 'light-downward-diagonal',
						y: ['2019-09-01', '2023-09-30']
					},
					{
						name: 'Project Manager',
						marker_visible: true,
						y: ['2019-09-26', '2019-09-26']
					},
					{
						name: 'Git',
						marker_visible: true,
						y: ['2020-12-04', '2020-12-04']
					},
					{
						name: 'C',
						marker_visible: true,
						y: ['2021-06-30', '2021-06-30']
					},
					{
						name: 'C Professional',
						marker_visible: true,
						y: ['2021-08-16', '2021-08-16']
					},
					{
						name: 'C++',
						marker_visible: true,
						y: ['2021-09-06', '2021-09-06']
					},
					{
						name: 'C++ Professional',
						marker_visible: true,
						y: ['2022-02-24', '2022-02-24']
					},
					{
						name: 'MongoDB',
						marker_visible: true,
						y: ['2023-03-09', '2023-03-09']
					},
					{
						name: 'JavaScript',
						marker_visible: true,
						y: ['2023-09-04', '2023-09-04']
					},
				]
			}
		]
	};

	let chart = JSC.chart('chartDiv', chartConfig);
};
