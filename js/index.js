// JavaScript Document
var vm = new Vue({
	el: '#app',
	data: {
		abouts: [
			{
				title: '澄清專區-防疫觀念篇',
				content: '媒體報導「澳洲大學研究指出，『精油』也能抗病毒！只要聞15分鐘，鼻腔內的流感病毒幾乎全清空」？專家提醒，研究團隊進行的實驗中，精油必須要接觸「依附空氣中飄浮灰塵的病毒」，才會有抗病毒的作用,因此為「部分錯誤」訊息。',
				image: 'img/news1.jpg',
				value: '70',
				text: '70%'
			},
			{
				title: '澄清專區-偏方篇',
				content: '目前尚未有針對新冠病毒的疫苗被研發出來，根據CDC說。網路上更有流傳食用蒜頭、大口喝接骨木糖漿、大量吞維他命C片、甚至喝工業用漂白水等可以「治癒」病毒的方法，這些皆為不實的說法，民眾不可採信。',
				image: 'img/news2.jpg',
				value: '100',
				text: '100%'
			},
					{
				title: '澄清專區-物資篇',
				content: '社群平台流傳訊息指出：「買不到口罩別急，有15個口罩就夠用了，到第15天再把第一個拿出來用，病毒都隔離14天了。專家指出，用過的口罩放14天會有細菌孳生，傳言所提的重複使用方式，並不可行。',
				image: 'img/news3.jpg',
				value: '100',
				text: '100%'
			}
		],
		articles: [
			{
				title: '來源',
				content: '2019 年 12 月起中國湖北武漢市發現不明原因肺炎群聚，疫情初期 個案多與武漢華南海鮮城活動史有關，中國官方於 2020 年 1 月 9 日公布其病原體為新型冠狀病毒。此疫情隨後迅速在中國其他省市 與世界各地擴散，並證實可有效人傳人。',
				image: 'img/item1.jpg',
			},
			{
				title: '病毒命名',
				content: '世界衛生組織（WHO）於 2020 年 1 月 30 日公布此 為一公共衛生緊急事件，2 月 11 日將此新型冠狀病毒所造成的疾病稱為 COVID-19（Coronavirus Disease-2019），國際病毒學分類學會則將此病毒學名定為 SARS-CoV-2（Severe Acute Respiratory Syndrome Coronavirus 2）。',
				image: 'img/item2.jpg',
			},
			{
				title: '國內第一例確診',
				content: '為監測與防治此新興傳 染病，我國於 2020 年 1 月 15 日起公告「嚴重特殊傳染性肺炎」 （COVID-19）為第五類法定傳染病，並於 2020 年 1 月 21 日確診第 一起境外移入確診個案，另於 1 月 28 日確診第 1 例本土個案，為 境外移入造成之家庭群聚感染。',
				image: 'img/item3.jpg',
			},
			{
				title: '臨床表現',
				content: '依據世界衛生組織公告，感染新型冠狀病毒 SARS-CoV-2 至發病之 潛伏期為 1 至 14 天（多數為 5 至 6 天)。個案臨床表現主要為發熱，少數病人呼吸困難，胸	部 X 光片呈雙肺浸潤性病灶。',
				image: 'img/item4.jpg',
			},
			{
				title: '動物宿主',
				content: '冠狀病毒(CoV)為一 群有外套膜之 RNA 病毒，外表為圓形，在電子顯微鏡下可看到類似皇冠的突起因此得名。除已知會感染人類的七種冠狀病毒以外，其他的動物宿主包括蝙蝠、豬、牛、火雞、貓、狗、雪貂等。並有零星的跨物種傳播報告。',
				image: 'img/item5.jpg',
			},
			{
				title: '確診檢測',
				content: '確診病人發病後呼吸道病毒持續排出（viral shedding）期間仍無法正確得知，唯依國內經驗與國際文獻得知，確診病人上呼吸道檢體可持續檢測 SARS-CoV-2 核酸陽性平均達兩週以上，且下呼吸道檢體檢出病毒的時間可能更久。 ',
				image: 'img/item6.jpg',
			},
			{
				title: '了解傳播途徑',
				content: '從確診個案之流病調查與實驗室檢測得知，藉由近距離飛沫、直接或間接接觸帶有病毒的口鼻分泌物、或無呼吸道防護下長時間與確診病人處於 2 公尺內之密閉空間裡，將增加人傳人之感染風險。',
				image: 'img/item7.jpg',
			},
			{
				title: '疫苗',
				content: '分子生物學核酸為檢測為 SARS-CoV-2 急性感染期之檢 驗首選，且可藉由定序研究其流行病學與病毒演化。血清學檢測（serological test）目前正在發展中，可能適用於確診病人感染後恢復期之檢測。',
				image: 'img/item8.jpg',
			},
			{
				title: '治療方法',
				content: '目前所有的冠狀病毒並無特定推薦的治療方式，多為採用支持性療法。最新治療建議，請參考衛生福利部疾病管制署公告之「新型冠狀病毒(SARS-CoV-2)感染臨床處置暫行指引」。 ',
				image: 'img/item9.jpg',
			}
		],
		charts: [
			{
				img: 'img/chart1.png',
				id: 'chart1',
			},
			{
				img: 'img/chart2.png',
				id: 'chart2',
			},
			{
				img: 'img/chart3.png',
				id: 'chart3',
			},
			{
				img: 'img/chart4.png',
				id: 'chart4',
			}
		],
		information: [
			{
				title: '口罩資訊專區',
				content: '需戴口罩三大時機：出入醫院時，有發燒或呼吸道症狀時，免疫力較差者。口罩照分為以下幾種: 布口罩、一般口罩、外科口罩、活性碳口罩、N95口罩。',
			},
			{
				title: '衛生保健專區',
				content: '在疫情延燒的時候，如何做好衛生保護自己?人多地方戴口罩、保持手部清潔、定期量體溫、保持社交距離、定期清消環境。',
			},
			{
				title: '防疫懶人包',
				content: '什麼是新冠狀病毒?人畜共通傳染病、SARS親戚(79%基因相似)、近似蝙蝠冠狀病毒。怎麼傳?有限度人傳人，近距離、長時間親密接觸。',
			},
		],
		questions: [
			{
				Q: '要怎麼調配消毒水?',
				A: '一般的環境，如家具、廚房，消毒可用1:50的稀釋漂白水。浴室或馬桶表面則應使用1:10得稀釋漂白水消毒。消毒應每天一次，並使用當天泡製的漂白水。',
				icon: 'fas fa-pump-medical'
			},
			{
				Q: '口罩可以重複戴嗎?',
				A: '如需重複戴同一副口罩，僅線同一人使用。脫下口罩後，建議可先將口罩汙染一面往內摺後，放置於乾淨、透氣的容器內。用以保存口罩之容器應於使用後丟棄或定期潔。',
				icon: 'fas fa-head-side-mask'
			},
			{
				Q: '如何預防新型冠狀病毒?',
				A: '目前來沒有疫苗可用來預防冠狀病毒感染，預防措施建議包括勤洗手、佩戴外科口罩，盡量避免出入人潮擁擠、空氣不流通的公共場所。同時要避免接觸野生動物。',
				icon: 'fas fa-shield-virus'
			},
			{
				Q: '新型冠狀病毒的潛伏期是多久?',
				A: '潛伏期是從暴露病毒至可能發病的這段觀察時間，依據世界衛生組織與中國大陸官方資訊，2019新型冠狀病毒感染之潛伏期為2至12天（平均7天）。',
				icon: 'fas fa-viruses'
			}
		],
		aboutIndex: 0,
		infoIndex: 0,
		optionIndex: 1,
		articleIndex: 0
	},
	methods: {
		send(){
			alert('感謝您的建議 我們會盡快給出回復');
		},
		subscript(){
			alert('成功訂閱')
		}
	},
	computed: {
		about(){
			return this.abouts[this.aboutIndex]
		},
		info(){
			return this.information[this.infoIndex]
		},
		article(){
			return this.articles[this.articleIndex]
		}
	}
})