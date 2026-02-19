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
				name: 'Formal Education',
				points: [
					{
						name: 'Formal Education',
						outline: {
							color: 'darkenMore',
							width: 2
						},
						hatch_style: 'light-downward-diagonal',
						y: ['1986-10-01', '1998-12-31']
					},
					{
						name: 'BSc. Degree in Civil Engineering',
						marker_visible: true,
						y: ['1986-11-01', '1986-11-01']
					},
					{
						name: 'Professional Certificate in Computer Systems',
						y: ['1997-10-01', '1998-12-31']
					}
				]
			},
			{
				name: 'Work History',
				points: [
					{
						name: 'Work History',
						outline: {
							color: 'darkenMore',
							width: 2
						},
						hatch_style: 'light-downward-diagonal',
						y: ['1987-01-01', '2025-08-31']
					},
					{
						name: 'FORTRAN',
						marker_visible: true,
						y: ['1987-01-14', '1987-01-14'],
					},
					{
						name: 'AI & Prolog',
						marker_visible: true,
						y: ['1987-04-16', '1987-04-16']
					},

					{
						name: 'Programming - Structural Analysis',
						y: ['1987-05-01', '1998-12-31']
					},
					{
						name: 'C/C++ Developer',
						y: ['2000-03-15', '2005-09-15']
					},
					{
						name: 'GIS Engineer and DBA',
						y: ['2005-09-22', '2017-10-31']
					},
					{
						name: 'Freelancer Developer',
						y: ['2017-11-01', '2025-08-31']
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
