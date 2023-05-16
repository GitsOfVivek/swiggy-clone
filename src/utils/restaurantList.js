// 20230516203011
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING

export default {
	statusCode: 0,
	data: {
		cacheExpiryTime: 320,
		pages: 1,
		pageIndex: 0,
		scrubber: 0,
		filters: [
			{
				type: 'FilterWidget',
				title: 'Cuisines',
				key: 'CUISINES',
				configType: 'checkbox',
				visible: 1,
				options: [
					{
						option: 'American',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Andhra',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Arabian',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Asian',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Bakery',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Barbecue',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Bengali',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Beverages',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Bihari',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Biryani',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Burgers',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Cafe',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Chaat',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Chettinad',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Chinese',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Continental',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Desserts',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Fast Food',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Grill',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Healthy Food',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Hyderabadi',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Ice Cream',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Ice Cream Cakes',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Indian',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Italian',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Italian-American',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Juices',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Kebabs',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Lebanese',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Lucknowi',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Maharashtrian',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Mediterranean',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Mexican',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Mughlai',
						selected: 0,
						visible: 1,
					},
					{
						option: 'North Indian',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Oriental',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Pan-Asian',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Pastas',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Pizzas',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Punjabi',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Salads',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Seafood',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Snacks',
						selected: 0,
						visible: 1,
					},
					{
						option: 'South Indian',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Street Food',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Sweets',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Tandoor',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Thai',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Thalis',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Tibetan',
						selected: 0,
						visible: 1,
					},
					{
						option: 'Waffle',
						selected: 0,
						visible: 1,
					},
				],
				detail: '',
				heading: 'Cuisines',
				applicable: 1,
				searchable: 1,
			},
			{
				type: 'FilterWidget',
				title: 'Show Restaurants With',
				key: 'SHOW_RESTAURANTS_WITH',
				configType: 'checkbox',
				visible: 1,
				options: [
					{
						option: 'Pure Veg',
						selected: 0,
						visible: 1,
					},
				],
				detail: '',
				heading: 'Offers & More',
				applicable: 1,
				searchable: 0,
			},
		],
		sorts: [
			{
				type: 'SortWidget',
				key: 'RELEVANCE',
				title: 'Relevance',
				selected: 1,
				visible: 1,
				defaultSelection: true,
			},
			{
				type: 'SortWidget',
				key: 'DELIVERY_TIME',
				title: 'Delivery Time',
				selected: 0,
				visible: 1,
				defaultSelection: false,
			},
			{
				type: 'SortWidget',
				key: 'RATING',
				title: 'Rating',
				selected: 0,
				visible: 1,
				defaultSelection: false,
			},
			{
				type: 'SortWidget',
				key: 'COST_FOR_TWO',
				title: 'Cost: Low to High',
				selected: 0,
				visible: 1,
				defaultSelection: false,
			},
			{
				type: 'SortWidget',
				key: 'COST_FOR_TWO_H2L',
				title: 'Cost: High to Low',
				selected: 0,
				visible: 1,
				defaultSelection: false,
			},
		],
		configs: {
			ribbons: {
				PREORDER: {
					type: 'PREORDER',
					text: 'Preorder',
					textColor: '#ffffff',
					imageId: 'sfefefefeegeg',
					topBackgroundColor: '#d53d4c',
					bottomBackgroundColor: '#af2330',
					priority: 3,
				},
				EXCLUSIVE: {
					type: 'EXCLUSIVE',
					text: 'Exclusive',
					textColor: '#ffffff',
					imageId: 'sfefefefeegeg',
					topBackgroundColor: '#fa4a5b',
					bottomBackgroundColor: '#d12a3b',
					priority: 2,
				},
				NEW: {
					type: 'NEW',
					text: 'Newly Added',
					textColor: '#ffffff',
					imageId: 'sfefefefeegeg',
					topBackgroundColor: '#d53d4c',
					bottomBackgroundColor: '#af2330',
					priority: 4,
				},
				REPEAT: {
					type: 'REPEAT',
					text: 'Repeat',
					textColor: '#ffffff',
					imageId: 'sfefefefeegeg',
					topBackgroundColor: '#D53D4C',
					bottomBackgroundColor: '#B02331',
					priority: 6,
				},
				CLOUD: {
					type: 'CLOUD',
					text: 'Daily Menus',
					textColor: '#ffffff',
					imageId: 'sfefefefeegeg',
					topBackgroundColor: '#fa4a5b',
					bottomBackgroundColor: '#d12a3b',
					priority: 5,
				},
				PREMIUM: {
					type: 'PREMIUM',
					text: 'Premium',
					textColor: '#ffffff',
					imageId: 'sfefefefeegeg',
					topBackgroundColor: '#8a584b',
					bottomBackgroundColor: '#583229',
					priority: 7,
				},
				PROMOTED: {
					type: 'PROMOTED',
					text: 'Promoted',
					textColor: '#ffffff',
					imageId: 'sfefefefeegeg',
					topBackgroundColor: '#3a3c41',
					bottomBackgroundColor: '#1e2023',
					priority: 1,
				},
			},
			croutons: {
				SPECIAL: {
					type: 'Crouton',
					bgColor: '#282C3F',
					icon: 'surge_listing_piuzrv',
					textColor: '#ffffff',
					title: 'High Demand',
					message: 'Surge fee of Rs ${amount} may be applicable',
				},
			},
		},
		cards: [
			{
				cardType: 'carousel',
				layoutAlignmentType: 'VERTICAL',
				data: {
					type: 'carousel',
					subtype: 'topCarousel',
					data: {
						cards: [
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 635529,
									creativeId:
										'rng/md/carousel/production/pneknawbadtvceqzwiep',
									type: 'restaurantCollectionV2',
									link: '49301',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									thirdPartyVendor: '',
									thirdPartyAddress: false,
								},
							},
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 334239,
									creativeId:
										'rng/md/carousel/production/ehchczipeejs7qrk82u6',
									type: 'restaurantCollectionV2',
									link: '56792',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									thirdPartyVendor: '',
									thirdPartyAddress: false,
								},
							},
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 304998,
									creativeId:
										'rng/md/carousel/production/awurei8ypqkafoqay9ym',
									type: 'restaurantCollectionV2',
									link: '47668',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									thirdPartyVendor: '',
									thirdPartyAddress: false,
								},
							},
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 181635,
									creativeId:
										'rng/md/carousel/production/yparhmxrby5lv0ubsel4',
									type: 'restaurantCollectionV2',
									link: '56413',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									thirdPartyVendor: '',
									thirdPartyAddress: false,
								},
							},
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 181633,
									creativeId:
										'rng/md/carousel/production/dpqcjrxwruipnt1wyqnh',
									type: 'restaurantCollectionV2',
									link: '56422',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									thirdPartyVendor: '',
									thirdPartyAddress: false,
								},
							},
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 181629,
									creativeId:
										'rng/md/carousel/production/lyn9at38gjithnogzfui',
									type: 'restaurantCollectionV2',
									link: '56417',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									thirdPartyVendor: '',
									thirdPartyAddress: false,
								},
							},
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 181630,
									creativeId:
										'rng/md/carousel/production/jmeoz6zu9fi0h9tw7xrb',
									type: 'restaurantCollectionV2',
									link: '56414',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									thirdPartyVendor: '',
									thirdPartyAddress: false,
								},
							},
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 607188,
									creativeId:
										'rng/md/carousel/production/oxe97jexxbnxqtbhg2zo',
									type: 'restaurantCollectionV2',
									link: '11740',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									thirdPartyVendor: '',
									thirdPartyAddress: false,
								},
							},
						],
					},
				},
				parentWidget: false,
			},
			{
				cardType: 'carousel',
				layoutAlignmentType: 'VERTICAL',
				data: {
					type: 'carousel',
					subtype: 'openFilter',
					data: {
						cards: [
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 181684,
									creativeId: 'bkhjfipzydkoqncrxpyi',
									type: 'restaurantCollectionV2',
									link: '11718',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									title: 'Offers Near You',
									subtitle: '0 OPTIONS',
									restaurants: [],
									totalCount: 0,
									dwebOpenFilterTitle: 'Offers Near You',
									dwebOpenFilterBgColor: '#FF0000',
									dwebOpenFilterSelectIcon:
										'eyperwsfhaoa5vktjtu4',
									dwebOpenFilterDeselectIcon:
										'urw8usdf4mk9aywd59gq',
								},
							},
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 181680,
									creativeId: 'a3jqjjod5taken7dh1bs',
									type: 'restaurantCollectionV2',
									link: '11721',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									title: 'Veg Only',
									subtitle: '0 OPTIONS',
									restaurants: [],
									totalCount: 0,
									dwebOpenFilterTitle: 'Vegetarian Options',
									dwebOpenFilterBgColor: '#FF0000',
									dwebOpenFilterSelectIcon:
										'qtjc8dzfexg72lug37a0',
									dwebOpenFilterDeselectIcon:
										'bm8bziikwyvwqsml1clm',
								},
							},
						],
					},
				},
				parentWidget: false,
			},
			{
				cardType: 'seeAllRestaurants',
				layoutAlignmentType: 'VERTICAL',
				data: {
					type: 'seeAllRestaurants',
					data: {
						title: 'SEE ALL',
						totalOpenRestaurants: 711,
						cards: [
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '290590',
									name: 'Kwality Walls Frozen Dessert and Ice Cream Shop',
									uuid: '819fc50a-a342-4d1d-89de-be05af5ffb17',
									city: '79',
									area: 'Kankarbagh',
									totalRatingsString: '5000+ ratings',
									cloudinaryImageId: 'iehiemnocsdvcqyyyw6v',
									cuisines: [
										'Desserts',
										'Ice Cream',
										'Ice Cream Cakes',
									],
									tags: [],
									costForTwo: 10000,
									costForTwoString: '₹100 FOR TWO',
									deliveryTime: 32,
									minDeliveryTime: 32,
									maxDeliveryTime: 32,
									slaString: '32 MINS',
									lastMileTravel: 3,
									slugs: {
										restaurant:
											'kwality-walls-khajpura-khajpura-5',
										city: 'patna',
									},
									cityState: '79',
									address:
										'N-22, Tilak nagar, 8 building North to Munna Chowk, Kankarbagh Patna 80020.',
									locality: 'Tilak Nagar',
									parentId: 582,
									unserviceable: false,
									veg: true,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									ribbon: [
										{
											type: 'PROMOTED',
										},
									],
									chain: [],
									feeDetails: {
										fees: [
											{
												name: 'distance',
												fee: 2100,
												message: '',
											},
											{
												name: 'time',
												fee: 0,
												message: '',
											},
											{
												name: 'special',
												fee: 0,
												message: '',
											},
										],
										totalFees: 2100,
										message: '',
										title: 'Delivery Charge',
										amount: '2100',
										icon: '',
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: '',
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID:
										'cid=6794703~p=1~eid=00000188-2513-9279-543f-4cf200d40140',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: [],
									},
									lastMileTravelString: '3 kms',
									hasSurge: false,
									sla: {
										restaurantId: '290590',
										deliveryTime: 32,
										minDeliveryTime: 32,
										maxDeliveryTime: 32,
										lastMileTravel: 3,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY',
									},
									promoted: true,
									avgRating: '4.6',
									totalRatings: 5000,
									new: false,
								},
								subtype: 'basic',
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '242395',
									name: 'Ram Babu Restaurant',
									uuid: 'd681e274-d851-4cd9-ba53-8cfe1810572d',
									city: '79',
									area: 'Kankarbagh',
									totalRatingsString: '5000+ ratings',
									cloudinaryImageId: 'mq1vlwbzjanzdeukja3d',
									cuisines: [
										'Chinese',
										'North Indian',
										'Biryani',
									],
									tags: [],
									costForTwo: 30000,
									costForTwoString: '₹300 FOR TWO',
									deliveryTime: 34,
									minDeliveryTime: 34,
									maxDeliveryTime: 34,
									slaString: '34 MINS',
									lastMileTravel: 0.699999988079071,
									slugs: {
										restaurant:
											'ram-babu-restaurant-kankarbagh-kankarbagh',
										city: 'patna',
									},
									cityState: '79',
									address:
										'Chandmadi road,Kankarbagh,patna - 800020',
									locality: 'Chandmadi road',
									parentId: 166239,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									chain: [],
									feeDetails: {
										fees: [
											{
												name: 'distance',
												fee: 2100,
												message: '',
											},
											{
												name: 'time',
												fee: 0,
												message: '',
											},
											{
												name: 'special',
												fee: 0,
												message: '',
											},
										],
										totalFees: 2100,
										message: '',
										title: 'Delivery Charge',
										amount: '2100',
										icon: '',
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: '',
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID: '',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: [],
									},
									lastMileTravelString: '0.6 kms',
									hasSurge: false,
									aggregatedDiscountInfoV3: {
										header: '₹125 OFF',
										subHeader: 'ABOVE ₹199',
										discountTag: 'FLAT DEAL',
										headerTypeV2: 0,
									},
									sla: {
										restaurantId: '242395',
										deliveryTime: 34,
										minDeliveryTime: 34,
										maxDeliveryTime: 34,
										lastMileTravel: 0.699999988079071,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY',
									},
									promoted: false,
									avgRating: '3.5',
									totalRatings: 5000,
									new: false,
								},
								subtype: 'basic',
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '152335',
									name: 'Hungry Hope',
									uuid: '9ef51d0d-3f4a-49c8-8601-3c3b16f816e5',
									city: '79',
									area: 'Kankarbagh',
									totalRatingsString: '10000+ ratings',
									cloudinaryImageId: 'cv4hmfd42qioasn0tqtd',
									cuisines: ['Indian', 'Chinese'],
									tags: [],
									costForTwo: 30000,
									costForTwoString: '₹300 FOR TWO',
									deliveryTime: 35,
									minDeliveryTime: 35,
									maxDeliveryTime: 35,
									slaString: '35 MINS',
									lastMileTravel: 2.4000000953674316,
									slugs: {
										restaurant:
											'hungry-hope-kankarbagh-kankarbagh',
										city: 'patna',
									},
									cityState: '79',
									address:
										'Shila Ram Complex, Kankarbagh, Patna',
									locality: 'RBI Flats Colony',
									parentId: 104720,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									chain: [],
									feeDetails: {
										fees: [
											{
												name: 'distance',
												fee: 2100,
												message: '',
											},
											{
												name: 'time',
												fee: 0,
												message: '',
											},
											{
												name: 'special',
												fee: 0,
												message: '',
											},
										],
										totalFees: 2100,
										message: '',
										title: 'Delivery Charge',
										amount: '2100',
										icon: '',
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: '',
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID: '',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: [],
									},
									lastMileTravelString: '2.4 kms',
									hasSurge: false,
									aggregatedDiscountInfoV3: {
										header: '₹125 OFF',
										subHeader: 'ABOVE ₹199',
										discountTag: 'FLAT DEAL',
										headerTypeV2: 0,
									},
									sla: {
										restaurantId: '152335',
										deliveryTime: 35,
										minDeliveryTime: 35,
										maxDeliveryTime: 35,
										lastMileTravel: 2.4000000953674316,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY',
									},
									promoted: false,
									avgRating: '3.7',
									totalRatings: 10000,
									new: false,
								},
								subtype: 'basic',
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '358125',
									name: 'Matkawala',
									uuid: '28901a43-acde-43df-acfc-86205befe315',
									city: '79',
									area: 'Patliputra Colony',
									totalRatingsString: '1000+ ratings',
									cloudinaryImageId: 'lrpfop5j19q4sbatjjth',
									cuisines: ['North Indian', 'Bihari'],
									tags: [],
									costForTwo: 20000,
									costForTwoString: '₹200 FOR TWO',
									deliveryTime: 41,
									minDeliveryTime: 41,
									maxDeliveryTime: 41,
									slaString: '41 MINS',
									lastMileTravel: 5,
									slugs: {
										restaurant:
											'matkawala-srikrishnapuri-srikrishnapuri',
										city: 'patna',
									},
									cityState: '79',
									address:
										'House 2, Road No. 1 Ganesh Path Parwati Chowk, Shivpuri Patna Pin Code 800023',
									locality: 'Shiv puri',
									parentId: 133581,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									ribbon: [
										{
											type: 'PROMOTED',
										},
									],
									chain: [],
									feeDetails: {
										fees: [
											{
												name: 'distance',
												fee: 3100,
												message: '',
											},
											{
												name: 'time',
												fee: 0,
												message: '',
											},
											{
												name: 'special',
												fee: 0,
												message: '',
											},
										],
										totalFees: 3100,
										message: '',
										title: 'Delivery Charge',
										amount: '3100',
										icon: '',
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: '',
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID:
										'cid=6786507~p=4~eid=00000188-2513-9279-543f-4cf300d4045a',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: [],
									},
									lastMileTravelString: '5 kms',
									hasSurge: false,
									aggregatedDiscountInfoV3: {
										header: '20% OFF',
										subHeader: 'UPTO ₹50',
										discountTag: '',
										headerTypeV2: 0,
									},
									sla: {
										restaurantId: '358125',
										deliveryTime: 41,
										minDeliveryTime: 41,
										maxDeliveryTime: 41,
										lastMileTravel: 5,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY',
									},
									promoted: true,
									avgRating: '4.0',
									totalRatings: 1000,
									new: false,
								},
								subtype: 'basic',
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '591085',
									name: ' 0612 Road Chef ( Kankarbagh)',
									uuid: '60f81790-ef98-41f5-b195-1a0c9fca266f',
									city: '79',
									area: 'Kankarbagh',
									totalRatingsString: '1000+ ratings',
									cloudinaryImageId: 'qo1ypqreeaulytd7cmgr',
									cuisines: [
										'Indian',
										'Tandoor',
										'Chinese',
										'Biryani',
									],
									tags: [],
									costForTwo: 20000,
									costForTwoString: '₹200 FOR TWO',
									deliveryTime: 38,
									minDeliveryTime: 38,
									maxDeliveryTime: 38,
									slaString: '38 MINS',
									lastMileTravel: 1.2999999523162842,
									slugs: {
										restaurant:
											'0612-road-chef-online-kankarbagh-kankarbagh',
										city: 'patna',
									},
									cityState: '79',
									address:
										'SANJAY NAGAR ROAD NO.10 NEAR BY PASS ROAD KANKARBAGH',
									locality: 'Sanjay Nagar Road',
									parentId: 353495,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									chain: [],
									feeDetails: {
										fees: [
											{
												name: 'distance',
												fee: 2100,
												message: '',
											},
											{
												name: 'time',
												fee: 0,
												message: '',
											},
											{
												name: 'special',
												fee: 0,
												message: '',
											},
										],
										totalFees: 2100,
										message: '',
										title: 'Delivery Charge',
										amount: '2100',
										icon: '',
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: '',
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID: '',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: [],
									},
									lastMileTravelString: '1.2 kms',
									hasSurge: false,
									aggregatedDiscountInfoV3: {
										header: '₹125 OFF',
										subHeader: 'ABOVE ₹199',
										discountTag: 'FLAT DEAL',
										headerTypeV2: 0,
									},
									sla: {
										restaurantId: '591085',
										deliveryTime: 38,
										minDeliveryTime: 38,
										maxDeliveryTime: 38,
										lastMileTravel: 1.2999999523162842,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY',
									},
									promoted: false,
									avgRating: '4.1',
									totalRatings: 1000,
									new: false,
								},
								subtype: 'basic',
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '88781',
									name: 'Sujata Family Restaurant',
									uuid: '3ac5f62e-fca8-4c33-8fdc-4603804bb14a',
									city: '79',
									area: 'Fraser Road',
									totalRatingsString: '10000+ ratings',
									cloudinaryImageId: 'np13tsnfrxylkrk1ykm5',
									cuisines: [
										'Mughlai',
										'Chinese',
										'North Indian',
									],
									tags: [],
									costForTwo: 30000,
									costForTwoString: '₹300 FOR TWO',
									deliveryTime: 39,
									minDeliveryTime: 39,
									maxDeliveryTime: 39,
									slaString: '39 MINS',
									lastMileTravel: 2.700000047683716,
									slugs: {
										restaurant:
											'sujata-family-restaurant-fraser-road-fraser-road',
										city: 'patna',
									},
									cityState: '79',
									address:
										'Hotel Mayur, Fraser Road Area, Patna',
									locality: '',
									parentId: 196672,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									chain: [],
									feeDetails: {
										fees: [
											{
												name: 'distance',
												fee: 2100,
												message: '',
											},
											{
												name: 'time',
												fee: 0,
												message: '',
											},
											{
												name: 'special',
												fee: 0,
												message: '',
											},
										],
										totalFees: 2100,
										message: '',
										title: 'Delivery Charge',
										amount: '2100',
										icon: '',
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: '',
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID: '',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: [],
									},
									lastMileTravelString: '2.7 kms',
									hasSurge: false,
									aggregatedDiscountInfoV3: {
										header: '₹125 OFF',
										subHeader: 'ABOVE ₹199',
										discountTag: 'FLAT DEAL',
										headerTypeV2: 0,
									},
									sla: {
										restaurantId: '88781',
										deliveryTime: 39,
										minDeliveryTime: 39,
										maxDeliveryTime: 39,
										lastMileTravel: 2.700000047683716,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY',
									},
									promoted: false,
									avgRating: '3.5',
									totalRatings: 10000,
									new: false,
								},
								subtype: 'basic',
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '611043',
									name: "La Pino'z Pizza",
									uuid: '2c672757-7f7c-4b20-8e91-1b2d77205e5e',
									city: '79',
									area: 'Golambar',
									totalRatingsString: '100+ ratings',
									cloudinaryImageId: 'pwllxm2marsfiln5dlvi',
									cuisines: [
										'Pizzas',
										'Pastas',
										'Italian',
										'Desserts',
										'Beverages',
									],
									tags: [],
									costForTwo: 30000,
									costForTwoString: '₹300 FOR TWO',
									deliveryTime: 48,
									minDeliveryTime: 48,
									maxDeliveryTime: 48,
									slaString: '48 MINS',
									lastMileTravel: 3.5999999046325684,
									slugs: {
										restaurant:
											'la-pinoz-pizza-south-gandhi-maidan-fraser-road',
										city: 'patna',
									},
									cityState: '79',
									address:
										'A-5,A-6 Twin Tower , Hathua, South Gandhi Maidan , Patna - 800001',
									locality: 'Old Jakkanpur',
									parentId: 4961,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									ribbon: [
										{
											type: 'PROMOTED',
										},
									],
									chain: [],
									feeDetails: {
										fees: [
											{
												name: 'distance',
												fee: 2100,
												message: '',
											},
											{
												name: 'time',
												fee: 0,
												message: '',
											},
											{
												name: 'special',
												fee: 0,
												message: '',
											},
										],
										totalFees: 2100,
										message: '',
										title: 'Delivery Charge',
										amount: '2100',
										icon: '',
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: '',
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID:
										'cid=6675240~p=31~eid=00000188-2513-9279-543f-4cfc00d41f6e',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: [],
									},
									lastMileTravelString: '3.5 kms',
									hasSurge: false,
									aggregatedDiscountInfoV3: {
										header: '₹125 OFF',
										subHeader: 'ABOVE ₹249',
										discountTag: 'FLAT DEAL',
										headerTypeV2: 0,
									},
									sla: {
										restaurantId: '611043',
										deliveryTime: 48,
										minDeliveryTime: 48,
										maxDeliveryTime: 48,
										lastMileTravel: 3.5999999046325684,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY',
									},
									promoted: true,
									avgRating: '3.4',
									totalRatings: 100,
									new: false,
								},
								subtype: 'basic',
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '132703',
									name: 'Dosa Station',
									uuid: '88548026-0dfa-457d-a8c0-f6f4dea37b58',
									city: '79',
									area: 'Kankarbagh',
									totalRatingsString: '5000+ ratings',
									cloudinaryImageId: 'rv8vzoxlvdb80jwvx21h',
									cuisines: ['South Indian'],
									tags: [],
									costForTwo: 15000,
									costForTwoString: '₹150 FOR TWO',
									deliveryTime: 32,
									minDeliveryTime: 32,
									maxDeliveryTime: 32,
									slaString: '32 MINS',
									lastMileTravel: 1.7000000476837158,
									slugs: {
										restaurant:
											'dosa-station-kankarbagh-kankarbagh',
										city: 'patna',
									},
									cityState: '79',
									address:
										'P.c Colony, East A Nagar, Kankarbagh, Patna',
									locality: 'P C Colony',
									parentId: 19938,
									unserviceable: false,
									veg: true,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									chain: [],
									feeDetails: {
										fees: [
											{
												name: 'distance',
												fee: 2100,
												message: '',
											},
											{
												name: 'time',
												fee: 0,
												message: '',
											},
											{
												name: 'special',
												fee: 0,
												message: '',
											},
										],
										totalFees: 2100,
										message: '',
										title: 'Delivery Charge',
										amount: '2100',
										icon: '',
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: '',
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID: '',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: [],
									},
									lastMileTravelString: '1.7 kms',
									hasSurge: false,
									aggregatedDiscountInfoV3: {
										header: '₹125 OFF',
										subHeader: 'ABOVE ₹199',
										discountTag: 'FLAT DEAL',
										headerTypeV2: 0,
									},
									sla: {
										restaurantId: '132703',
										deliveryTime: 32,
										minDeliveryTime: 32,
										maxDeliveryTime: 32,
										lastMileTravel: 1.7000000476837158,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY',
									},
									promoted: false,
									avgRating: '3.0',
									totalRatings: 5000,
									new: false,
								},
								subtype: 'basic',
							},
						],
						totalRestaurants: 711,
					},
					subtype: 'personalized',
				},
				parentWidget: false,
			},
		],
		nextPageFetch: 0,
	},
	tid: '91decdce-848a-4a28-b7df-63d00f45dab3',
	sid: '7384829a-a5d4-49fd-b3e2-a2e57e695eab',
	deviceId: '81a5848c-a918-4774-361b-5b0678b6ebb7',
	csrfToken: 'wbffAqqNlOiQ-DAqXRmj-3VkXAIc5ssNOS0J9lpo',
};
