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
						name: 'Interviews',
						outline: {
							color: 'darkenMore',
							width: 2
						},
						hatch_style: 'light-downward-diagonal',
						y: ['2016-04-10', '2025-12-31']
					},
					{
						name: 'Mehwar TV',
						marker_visible: true,
						y: ['2016-04-20', '2016-04-20'],
          tooltip: '<i>%name</i>'

					},
					{
						name: 'Al-Hayah TV Network #1',
						marker_visible: true,
						y: ['2016-08-02', '2016-08-02']
					},
					{
						name: 'Al-Hayah TV Network #2',
						marker_visible: true,
						y: ['2017-01-07', '2017-01-07']
					},
					{
						name: 'Al-Masry Al-Youm',
						marker_visible: true,
						y: ['2017-08-28', '2017-08-28']
					},
					{
						name: 'MBC Misr',
						marker_visible: true,
						y: ['2018-04-18', '2018-04-18']
					},
					{
						name: 'BBC',
						marker_visible: true,
						y: ['2018-07-28', '2018-07-28']
					},
					{
						name: 'BBC',
						marker_visible: true,
						y: ['2019-01-05', '2019-01-05']
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
