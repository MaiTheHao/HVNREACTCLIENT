export const score = {
	HK1: {
		toan: {
			TX: [10, 3, 9, 10],
			GK: [8.8],
			CK: [9.8],
			DTBHK: [5],
		},
		li: {
			TX: [8, 8.5, 9, 9.5],
			GK: [8],
			CK: [9],
			DTBHK: [5],
		},
		hoa: {
			TX: [7.5, 8, 8.5, 9],
			GK: [7.5],
			CK: [8],
			DTBHK: [5],
		},
		sinh: {
			TX: [0, 4, 8, 8.5],
			GK: [2],
			CK: [4.5],
			DTBHK: [5],
		},
		tin: {
			TX: [8, 8.5, 9, 9.5],
			GK: [8],
			CK: [9],
			DTBHK: [5],
		},
		van: {
			TX: [7.5, 8, 8.5, 9],
			GK: [7.5],
			CK: [8],
			DTBHK: [5],
		},
		su: {
			TX: [2, 7.5, 8, 8.5],
			GK: [3],
			CK: [5.5],
			DTBHK: [5],
		},
		dia: {
			TX: [7.5, 8, 8.5, 9],
			GK: [7.5],
			CK: [8],
			DTBHK: [5],
		},
		anh: {
			TX: [8, 8.5, 9, 9.5],
			GK: [8],
			CK: [9],
			DTBHK: [5],
		},
		gdcd: {
			TX: [7.5, 8, 8.5, 9],
			GK: [7.5],
			CK: [8],
			DTBHK: [5],
		},
		cn: {
			TX: [8, 8.5, 9, 9.5],
			GK: [8],
			CK: [9],
			DTBHK: [5],
		},
		td: {
			TX: [9, 9.5, 10, 10],
			GK: [9],
			CK: [9.5],
			DTBHK: [5],
		},
		gdqp: {
			TX: [9, 9.5, 10, 10],
			GK: [9],
			CK: [9.5],
			DTBHK: [5],
		},
	},
	HK2: {
		toan: {
			TX: [10, 9, 10, 10],
			GK: [9.2],
			CK: [10],
			DTBHK: [5],
		},
		li: {
			TX: [9, 9.5, 10, 10],
			GK: [8.8],
			CK: [9.5],
			DTBHK: [5],
		},
		hoa: {
			TX: [8.5, 9, 9.5, 10],
			GK: [8],
			CK: [8.5],
			DTBHK: [5],
		},
		sinh: {
			TX: [4, 2.5, 9, 9.5],
			GK: [2.8],
			CK: [8.3],
			DTBHK: [0],
		},
		tin: {
			TX: [9, 9.5, 10, 10],
			GK: [8.8],
			CK: [9.5],
			DTBHK: [5],
		},
		van: {
			TX: [8, 8.5, 9, 9.5],
			GK: [8],
			CK: [8.5],
			DTBHK: [5],
		},
		su: {
			TX: [4, 3.5, 9, 9.5],
			GK: [4.8],
			CK: [8.3],
			DTBHK: [0],
		},
		dia: {
			TX: [8, 8.5, 9, 9.5],
			GK: [8],
			CK: [8.5],
			DTBHK: [5],
		},
		anh: {
			TX: [9, 9.5, 10, 10],
			GK: [9],
			CK: [9.5],
			DTBHK: [5],
		},
		gdcd: {
			TX: [8, 8.5, 9, 9.5],
			GK: [8],
			CK: [8.5],
			DTBHK: [5],
		},
		cn: {
			TX: [9, 9.5, 10, 10],
			GK: [9],
			CK: [9.5],
			DTBHK: [5],
		},
		td: {
			TX: [10, 10, 10, 10],
			GK: [9.5],
			CK: [10],
			DTBHK: [5],
		},
		gdqp: {
			TX: [10, 10, 10, 10],
			GK: [9.5],
			CK: [10],
			DTBHK: [5],
		},
	},
};

export const score_all = {
	toan: [score.HK1.toan.CK[0], score.HK2.toan.CK[0], ((score.HK1.toan.CK[0] + score.HK2.toan.CK[0]) / 2).toFixed(1)],
	li: [score.HK1.li.CK[0], score.HK2.li.CK[0], ((score.HK1.li.CK[0] + score.HK2.li.CK[0]) / 2).toFixed(1)],
	hoa: [score.HK1.hoa.CK[0], score.HK2.hoa.CK[0], ((score.HK1.hoa.CK[0] + score.HK2.hoa.CK[0]) / 2).toFixed(1)],
	sinh: [score.HK1.sinh.CK[0], score.HK2.sinh.CK[0], ((score.HK1.sinh.CK[0] + score.HK2.sinh.CK[0]) / 2).toFixed(1)],
	tin: [score.HK1.tin.CK[0], score.HK2.tin.CK[0], ((score.HK1.tin.CK[0] + score.HK2.tin.CK[0]) / 2).toFixed(1)],
	van: [score.HK1.van.CK[0], score.HK2.van.CK[0], ((score.HK1.van.CK[0] + score.HK2.van.CK[0]) / 2).toFixed(1)],
	su: [score.HK1.su.CK[0], score.HK2.su.CK[0], ((score.HK1.su.CK[0] + score.HK2.su.CK[0]) / 2).toFixed(1)],
	dia: [score.HK1.dia.CK[0], score.HK2.dia.CK[0], ((score.HK1.dia.CK[0] + score.HK2.dia.CK[0]) / 2).toFixed(1)],
	anh: [score.HK1.anh.CK[0], score.HK2.anh.CK[0], ((score.HK1.anh.CK[0] + score.HK2.anh.CK[0]) / 2).toFixed(1)],
	gdcd: [score.HK1.gdcd.CK[0], score.HK2.gdcd.CK[0], ((score.HK1.gdcd.CK[0] + score.HK2.gdcd.CK[0]) / 2).toFixed(1)],
	cn: [score.HK1.cn.CK[0], score.HK2.cn.CK[0], ((score.HK1.cn.CK[0] + score.HK2.cn.CK[0]) / 2).toFixed(1)],
	td: [score.HK1.td.CK[0], score.HK2.td.CK[0], ((score.HK1.td.CK[0] + score.HK2.td.CK[0]) / 2).toFixed(1)],
	gdqp: [score.HK1.gdqp.CK[0], score.HK2.gdqp.CK[0], ((score.HK1.gdqp.CK[0] + score.HK2.gdqp.CK[0]) / 2).toFixed(1)],
};