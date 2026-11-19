const PHONICS_DATA = {
  "level1": {
    "title": "लेवल 1: एबीसीडी और बोलने का तरीका (A to Z Alphabet & Mouth Guide)",
    "subtitle": "A से Z तक हर अक्षर का नाम, उसकी प्राथमिक आवाज़, और मुंह, होंठ व जीभ की सही स्थिति (Mouth Articulation) सीखें।",
    "chartImage": "img/mouth_guide.jpg",
    "mouthShapes": [
      {
        "id": "all",
        "name": "सभी 26 अक्षर (A to Z)",
        "icon": "🔤",
        "desc": "सभी 26 अक्षरों को क्रम से देखें और उच्चारण सीखें"
      },
      {
        "id": "lips_closed",
        "name": "दोनों होंठ बंद (Lips Closed)",
        "icon": "👄",
        "letters": [
          "B",
          "P",
          "M"
        ],
        "desc": "दोनों होंठ आपस में मिलते हैं: B, P, M"
      },
      {
        "id": "teeth_on_lip",
        "name": "दांत होंठ पर (Teeth on Lip)",
        "icon": "🦷",
        "letters": [
          "F",
          "V"
        ],
        "desc": "ऊपर के सामने वाले दांत नीचे के होंठ को छूते हैं: F, V"
      },
      {
        "id": "wide_smile",
        "name": "खुला मुंह / मुस्कान (Wide Smile)",
        "icon": "😊",
        "letters": [
          "A",
          "E",
          "I",
          "Y"
        ],
        "desc": "मुंह चौड़ा खुलता है, जैसे मुस्कुरा रहे हों: A, E, I, Y"
      },
      {
        "id": "rounded_lips",
        "name": "गोल होंठ (Rounded Lips)",
        "icon": "⭕",
        "letters": [
          "O",
          "U",
          "W",
          "Q"
        ],
        "desc": "होंठ सीटी की तरह आगे गोल होते हैं: O, U, W, Q"
      },
      {
        "id": "tongue_up",
        "name": "जीभ ऊपर मसूड़े पर (Tongue Up)",
        "icon": "👅",
        "letters": [
          "T",
          "D",
          "L",
          "N",
          "R"
        ],
        "desc": "जीभ की नोक ऊपर के मसूड़े/दांतों के पीछे लगती है: T, D, L, N, R"
      },
      {
        "id": "teeth_closed_hiss",
        "name": "दांत बंद / फुसफुसाहट (Hiss & Buzz)",
        "icon": "🐝",
        "letters": [
          "S",
          "Z",
          "C",
          "J",
          "X"
        ],
        "desc": "दांत हल्के मिले होते हैं और हवा निकलती है: S, Z, C, J, X"
      },
      {
        "id": "throat_breath",
        "name": "खुले गले से हवा (Throat Breath)",
        "icon": "🌬️",
        "letters": [
          "H",
          "K",
          "G"
        ],
        "desc": "गले के पीछे से खुली सांस या भारी आवाज़: H, K, G"
      }
    ],
    "letters": [
      {
        "id": "l1_a",
        "upper": "A",
        "lower": "a",
        "isVowel": true,
        "nameHindi": "ए (Ay)",
        "primarySound": "ऐ",
        "mouthCategory": "wide_smile",
        "mouthBadge": "मुंह चौड़ा खोलें (मुस्कान)",
        "mouthGuide": "मुंह को चौड़ा खोलें, जैसे आप खुलकर मुस्कुरा रहे हों। जीभ को मुंह के निचले हिस्से में बिल्कुल सपाट रखें और आवाज़ निकालें — 'ऐ' (जैसे Apple, Cat)।",
        "words": [
          {
            "w": "Apple",
            "h": "ऐपल",
            "m": "सेब"
          },
          {
            "w": "Ant",
            "h": "ऐंट",
            "m": "चींटी"
          },
          {
            "w": "Axe",
            "h": "ऐक्स",
            "m": "कुल्हाड़ी"
          }
        ]
      },
      {
        "id": "l1_b",
        "upper": "B",
        "lower": "b",
        "isVowel": false,
        "nameHindi": "बी (Bee)",
        "primarySound": "ब",
        "mouthCategory": "lips_closed",
        "mouthBadge": "दोनों होंठ बंद (हवा का झटका)",
        "mouthGuide": "दोनों होंठों को आपस में मिलाकर कसकर बंद करें। अंदर हवा का दबाव बनाएं, फिर होंठों को झटके से खोलते हुए आवाज़ बाहर छोड़ें — 'ब'। गले में कंपन महसूस होगा।",
        "words": [
          {
            "w": "Ball",
            "h": "बॉल",
            "m": "गेंद"
          },
          {
            "w": "Bat",
            "h": "बैट",
            "m": "बल्ला"
          },
          {
            "w": "Boy",
            "h": "बॉय",
            "m": "लड़का"
          }
        ]
      },
      {
        "id": "l1_c",
        "upper": "C",
        "lower": "c",
        "isVowel": false,
        "nameHindi": "सी (See)",
        "primarySound": "क (मुख्य) / स",
        "mouthCategory": "throat_breath",
        "mouthBadge": "जीभ का पिछला हिस्सा तालु पर",
        "mouthGuide": "जीभ के पिछले हिस्से को मुंह के ऊपरी तालु से लगाएं। फिर एक छोटी सूखी हवा का झटका छोड़ें — 'क'। (E, I, Y से पहले 'स' बोला जाता है, जैसे City, Cell)।",
        "words": [
          {
            "w": "Cat",
            "h": "कैट",
            "m": "बिल्ली"
          },
          {
            "w": "Cup",
            "h": "कप",
            "m": "प्याला"
          },
          {
            "w": "Car",
            "h": "कार",
            "m": "गाड़ी"
          }
        ]
      },
      {
        "id": "l1_d",
        "upper": "D",
        "lower": "d",
        "isVowel": false,
        "nameHindi": "डी (Dee)",
        "primarySound": "ड",
        "mouthCategory": "tongue_up",
        "mouthBadge": "जीभ की नोक ऊपर के मसूड़े पर",
        "mouthGuide": "जीभ की नोक को ऊपर के दांतों के ठीक पीछे मसूड़े पर मजबूती से लगाएं। हवा का दबाव बनाकर जीभ को झटके से नीचे लाएं और आवाज़ बोलें — 'ड'। गले में कंपन होगा।",
        "words": [
          {
            "w": "Dog",
            "h": "डॉग",
            "m": "कुत्ता"
          },
          {
            "w": "Door",
            "h": "डोर",
            "m": "दरवाज़ा"
          },
          {
            "w": "Duck",
            "h": "डक",
            "m": "बतख"
          }
        ]
      },
      {
        "id": "l1_e",
        "upper": "E",
        "lower": "e",
        "isVowel": true,
        "nameHindi": "ई (Ee)",
        "primarySound": "ए",
        "mouthCategory": "wide_smile",
        "mouthBadge": "आधा खुला मुंह (शिथिल होंठ)",
        "mouthGuide": "मुंह को आधा खोलें, होंठों को थोड़ा सा ढीला रखें (relaxed smile)। जीभ बीच में रहेगी। एक छोटी और स्पष्ट आवाज़ निकालें — 'ए' (जैसे Egg, Pen, Bed)।",
        "words": [
          {
            "w": "Egg",
            "h": "एग",
            "m": "अंडा"
          },
          {
            "w": "Elephant",
            "h": "एलिफ़ेंट",
            "m": "हाथी"
          },
          {
            "w": "Exit",
            "h": "एग्ज़िट",
            "m": "निकास द्वार"
          }
        ]
      },
      {
        "id": "l1_f",
        "upper": "F",
        "lower": "f",
        "isVowel": false,
        "nameHindi": "एफ़ (Ef)",
        "primarySound": "फ़",
        "mouthCategory": "teeth_on_lip",
        "mouthBadge": "ऊपर के दांत नीचे के होंठ पर",
        "mouthGuide": "ऊपर के सामने वाले दो दांतों को नीचे के होंठ पर हल्के से टिकाएं। दोनों के बीच से हवा को बाहर फूंकें — 'फ़'। (दोनों होंठ आपस में नहीं मिलने चाहिए!)",
        "words": [
          {
            "w": "Fish",
            "h": "फ़िश",
            "m": "मछली"
          },
          {
            "w": "Fan",
            "h": "फ़ैन",
            "m": "पंखा"
          },
          {
            "w": "Fox",
            "h": "फ़ॉक्स",
            "m": "लोमड़ी"
          }
        ]
      },
      {
        "id": "l1_g",
        "upper": "G",
        "lower": "g",
        "isVowel": false,
        "nameHindi": "जी (Jee)",
        "primarySound": "ग",
        "mouthCategory": "throat_breath",
        "mouthBadge": "गले के पीछे से भारी गूंज",
        "mouthGuide": "जीभ के पिछले हिस्से को ऊपर तालु से लगाएं और गले से एक भारी, गूंजती आवाज़ के साथ छोड़ें — 'ग'। गले में कंपन साफ महसूस होगा।",
        "words": [
          {
            "w": "Go",
            "h": "गो",
            "m": "जाना"
          },
          {
            "w": "Girl",
            "h": "गर्ल",
            "m": "लड़की"
          },
          {
            "w": "Gun",
            "h": "गन",
            "m": "बंदूक"
          }
        ]
      },
      {
        "id": "l1_h",
        "upper": "H",
        "lower": "h",
        "isVowel": false,
        "nameHindi": "एच (Aych)",
        "primarySound": "ह",
        "mouthCategory": "throat_breath",
        "mouthBadge": "मुंह खोलकर सिर्फ गर्म हवा छोड़ें",
        "mouthGuide": "मुंह को थोड़ा खुला रखें और अंदर फेफड़ों से गर्म हवा सीधे बाहर फेंकें — 'ह'। जैसे सर्दियों में हाथ पर या शीशे पर भाप छोड़ते हैं।",
        "words": [
          {
            "w": "Hat",
            "h": "हैट",
            "m": "टोपी"
          },
          {
            "w": "Hen",
            "h": "हेन",
            "m": "मुर्गी"
          },
          {
            "w": "Hot",
            "h": "हॉट",
            "m": "गर्म"
          }
        ]
      },
      {
        "id": "l1_i",
        "upper": "I",
        "lower": "i",
        "isVowel": true,
        "nameHindi": "आई (Eye)",
        "primarySound": "इ",
        "mouthCategory": "wide_smile",
        "mouthBadge": "छोटा मुंह, हल्की मुस्कान",
        "mouthGuide": "मुंह को बहुत कम खोलें, होंठों को हल्का सा किनारों की तरफ खींचें और बहुत छोटी आवाज़ निकालें — 'इ'। बिना किसी खिंचाव के तुरंत समाप्त होने वाली आवाज़।",
        "words": [
          {
            "w": "In",
            "h": "इन",
            "m": "अंदर"
          },
          {
            "w": "Ink",
            "h": "इंक",
            "m": "स्याही"
          },
          {
            "w": "Igloo",
            "h": "इग्लू",
            "m": "बर्फ का घर"
          }
        ]
      },
      {
        "id": "l1_j",
        "upper": "J",
        "lower": "j",
        "isVowel": false,
        "nameHindi": "जे (Jay)",
        "primarySound": "ज",
        "mouthCategory": "teeth_closed_hiss",
        "mouthBadge": "जीभ तालु पर, होंठ आगे",
        "mouthGuide": "जीभ को ऊपर के तालु पर चिपकाएं, होंठों को थोड़ा सा आगे निकालें और आवाज़ के साथ झटके से खोलें — 'ज'। जैसे Jam, Jump।",
        "words": [
          {
            "w": "Jam",
            "h": "जैम",
            "m": "मुरब्बा"
          },
          {
            "w": "Jug",
            "h": "जग",
            "m": "पानी का लोटा"
          },
          {
            "w": "Jump",
            "h": "जंप",
            "m": "कूदना"
          }
        ]
      },
      {
        "id": "l1_k",
        "upper": "K",
        "lower": "k",
        "isVowel": false,
        "nameHindi": "के (Kay)",
        "primarySound": "क",
        "mouthCategory": "throat_breath",
        "mouthBadge": "सूखी हवा का कुरकुरा झटका",
        "mouthGuide": "जीभ का पिछला हिस्सा तालु से लगाकर हवा रोकें, फिर बिना आवाज़ गूंजे सिर्फ एक साफ कुरकुरी हवा बाहर छोड़ें — 'क'। जैसे King, Kite।",
        "words": [
          {
            "w": "King",
            "h": "किंग",
            "m": "राजा"
          },
          {
            "w": "Kite",
            "h": "काइट",
            "m": "पतंग"
          },
          {
            "w": "Kid",
            "h": "किड",
            "m": "बच्चा"
          }
        ]
      },
      {
        "id": "l1_l",
        "upper": "L",
        "lower": "l",
        "isVowel": false,
        "nameHindi": "एल (El)",
        "primarySound": "ल",
        "mouthCategory": "tongue_up",
        "mouthBadge": "जीभ ऊपर के दांतों के पीछे टिकी रहे",
        "mouthGuide": "अपनी जीभ की नोक को ऊपर के सामने वाले दांतों के ठीक पीछे मसूड़े पर सटाकर रखें। जीभ को वहीं टिकाए रखें और हवा को जीभ के दोनों किनारों से बहने दें — 'ल'।",
        "words": [
          {
            "w": "Lip",
            "h": "लिप",
            "m": "होंठ"
          },
          {
            "w": "Leg",
            "h": "लेग",
            "m": "पैर"
          },
          {
            "w": "Lamp",
            "h": "लैंप",
            "m": "दीपक"
          }
        ]
      },
      {
        "id": "l1_m",
        "upper": "M",
        "lower": "m",
        "isVowel": false,
        "nameHindi": "एम (Em)",
        "primarySound": "म",
        "mouthCategory": "lips_closed",
        "mouthBadge": "होंठ बंद, नाक से गूंज",
        "mouthGuide": "दोनों होंठों को कोमलता से बंद रखें। मुंह से कोई हवा बाहर नहीं आएगी; आवाज़ को नाक के रास्ते गूंजने दें — 'म्मम'। नाक पर कंपन महसूस होगा।",
        "words": [
          {
            "w": "Man",
            "h": "मैन",
            "m": "आदमी"
          },
          {
            "w": "Mat",
            "h": "मैट",
            "m": "चटाई"
          },
          {
            "w": "Milk",
            "h": "मिल्क",
            "m": "दूध"
          }
        ]
      },
      {
        "id": "l1_n",
        "upper": "N",
        "lower": "n",
        "isVowel": false,
        "nameHindi": "एन (En)",
        "primarySound": "न",
        "mouthCategory": "tongue_up",
        "mouthBadge": "जीभ तालु पर, नाक से गूंज",
        "mouthGuide": "मुंह खुला रहेगा। जीभ की नोक को ऊपर के मसूड़े पर चिपकाकर हवा रोकें, और आवाज़ नाक के रास्ते निकालें — 'न्नन' (जैसे Net, No)।",
        "words": [
          {
            "w": "Net",
            "h": "नेट",
            "m": "जाल"
          },
          {
            "w": "Nose",
            "h": "नोज़",
            "m": "नाक"
          },
          {
            "w": "Nut",
            "h": "नट",
            "m": "मेवा / अखरोट"
          }
        ]
      },
      {
        "id": "l1_o",
        "upper": "O",
        "lower": "o",
        "isVowel": true,
        "nameHindi": "ओ (Oh)",
        "primarySound": "ऑ",
        "mouthCategory": "rounded_lips",
        "mouthBadge": "होंठों को पूरा गोल 'O' बनाएं",
        "mouthGuide": "मुंह को खोलें और अपने होंठों को एक गोल वृत्त (circle) जैसा बनाएं। जबड़े को नीचे गिराएं और आवाज़ निकालें — 'ऑ' (जैसे Ox, On, Hot)।",
        "words": [
          {
            "w": "Ox",
            "h": "ऑक्स",
            "m": "बैल"
          },
          {
            "w": "On",
            "h": "ऑन",
            "m": "पर / चालू"
          },
          {
            "w": "Owl",
            "h": "आउल",
            "m": "उल्लू"
          }
        ]
      },
      {
        "id": "l1_p",
        "upper": "P",
        "lower": "p",
        "isVowel": false,
        "nameHindi": "पी (Pee)",
        "primarySound": "प",
        "mouthCategory": "lips_closed",
        "mouthBadge": "होंठों से हवा का हल्का पफ",
        "mouthGuide": "दोनों होंठों को बंद करें। अंदर हवा भरें, और बिना किसी गले की आवाज़ के सिर्फ हवा का हल्का पफ बाहर छोड़ें — 'प'। हाथ आगे रखेंगे तो ठंडी हवा लगेगी।",
        "words": [
          {
            "w": "Pen",
            "h": "पेन",
            "m": "कलम"
          },
          {
            "w": "Pot",
            "h": "पॉट",
            "m": "बर्तन"
          },
          {
            "w": "Pig",
            "h": "पिग",
            "m": "सूअर"
          }
        ]
      },
      {
        "id": "l1_q",
        "upper": "Q",
        "lower": "q",
        "isVowel": false,
        "nameHindi": "क्यू (Kyoo)",
        "primarySound": "क्व",
        "mouthCategory": "rounded_lips",
        "mouthBadge": "क + गोल होंठ (क्व)",
        "mouthGuide": "Q हमेशा U के साथ आता है (QU)। पहले गले से 'क' बनाएं और तुरंत होंठों को गोल करके 'व' जोड़ें — 'क्व' (जैसे Queen, Quick)।",
        "words": [
          {
            "w": "Queen",
            "h": "क्वीन",
            "m": "रानी"
          },
          {
            "w": "Quick",
            "h": "क्विक",
            "m": "तेज़"
          },
          {
            "w": "Quiet",
            "h": "क्वाइट",
            "m": "शांत"
          }
        ]
      },
      {
        "id": "l1_r",
        "upper": "R",
        "lower": "r",
        "isVowel": false,
        "nameHindi": "आर (Aar)",
        "primarySound": "र",
        "mouthCategory": "tongue_up",
        "mouthBadge": "जीभ पीछे मुड़ेगी, तालु नहीं छुएगी",
        "mouthGuide": "अंग्रेज़ी का 'R' हिंदी के 'र' जैसा तालु पर नहीं फड़कता! जीभ को पीछे की तरफ थोड़ा सा मोड़ें (curl back), पर तालु से छूने न दें। होंठ थोड़े गोल रखें — 'र'।",
        "words": [
          {
            "w": "Rat",
            "h": "रैट",
            "m": "चूहा"
          },
          {
            "w": "Red",
            "h": "रेड",
            "m": "लाल"
          },
          {
            "w": "Run",
            "h": "रन",
            "m": "दौड़ना"
          }
        ]
      },
      {
        "id": "l1_s",
        "upper": "S",
        "lower": "s",
        "isVowel": false,
        "nameHindi": "एस (Es)",
        "primarySound": "स",
        "mouthCategory": "teeth_closed_hiss",
        "mouthBadge": "दांत मिलाकर सीटी जैसी हवा",
        "mouthGuide": "ऊपर और नीचे के दांतों को हल्का सा आपस में मिलाएं। जीभ को दांतों के पीछे रखें और बीच से सांप की तरह लगातार हवा बाहर फेंकें — 'स्स्स' (जैसे Sun, Sit)।",
        "words": [
          {
            "w": "Sun",
            "h": "सन",
            "m": "सूरज"
          },
          {
            "w": "Sit",
            "h": "सिट",
            "m": "बैठना"
          },
          {
            "w": "Star",
            "h": "स्टार",
            "m": "तारा"
          }
        ]
      },
      {
        "id": "l1_t",
        "upper": "T",
        "lower": "t",
        "isVowel": false,
        "nameHindi": "टी (Tee)",
        "primarySound": "ट",
        "mouthCategory": "tongue_up",
        "mouthBadge": "जीभ की नोक से कुरकुरा झटका",
        "mouthGuide": "जीभ की नोक को ऊपर के दांतों के ठीक पीछे मसूड़े पर मजबूती से लगाएं। फिर बिना किसी गले की आवाज़ के, सिर्फ हवा का एक तेज कुरकुरा झटका छोड़ें — 'ट' (जैसे Top, Ten)।",
        "words": [
          {
            "w": "Tap",
            "h": "टैप",
            "m": "नल"
          },
          {
            "w": "Ten",
            "h": "टेन",
            "m": "दस"
          },
          {
            "w": "Top",
            "h": "टॉप",
            "m": "लट्टू / शिखर"
          }
        ]
      },
      {
        "id": "l1_u",
        "upper": "U",
        "lower": "u",
        "isVowel": true,
        "nameHindi": "यू (Yoo)",
        "primarySound": "अ",
        "mouthCategory": "wide_smile",
        "mouthBadge": "हल्का खुला मुंह, छोटी अ ध्वनि",
        "mouthGuide": "मुंह को बहुत स्वाभाविक तरीके से हल्का सा खोलें। जीभ नीचे रहेगी। पेट से बिना किसी ज़ोर के एक छोटी सी आवाज़ निकालें — 'अ' (जैसे Up, Cup, Bus)।",
        "words": [
          {
            "w": "Up",
            "h": "अप",
            "m": "ऊपर"
          },
          {
            "w": "Umbrella",
            "h": "अम्ब्रेला",
            "m": "छाता"
          },
          {
            "w": "Under",
            "h": "अंडर",
            "m": "नीचे"
          }
        ]
      },
      {
        "id": "l1_v",
        "upper": "V",
        "lower": "v",
        "isVowel": false,
        "nameHindi": "वी (Vee)",
        "primarySound": "व (वाइब्रेशन)",
        "mouthCategory": "teeth_on_lip",
        "mouthBadge": "दांत होंठ पर + वाइब्रेशन",
        "mouthGuide": "ऊपर के सामने वाले दांतों को नीचे के होंठ पर टिकाएं (जैसे 'F' में किया था), लेकिन इस बार गले से आवाज़ निकालें ताकि होंठ पर बिजली जैसा कंपन (buzzing) महसूस हो — 'व'।",
        "words": [
          {
            "w": "Van",
            "h": "वैन",
            "m": "वैन गाड़ी"
          },
          {
            "w": "Vase",
            "h": "वाज़",
            "m": "गुलदस्ता"
          },
          {
            "w": "Vest",
            "h": "वेस्ट",
            "m": "बनियान"
          }
        ]
      },
      {
        "id": "l1_w",
        "upper": "W",
        "lower": "w",
        "isVowel": false,
        "nameHindi": "डबल-यू (Double-U)",
        "primarySound": "व (गोल होंठ)",
        "mouthCategory": "rounded_lips",
        "mouthBadge": "होंठ सीटी जैसे गोल (दांत नहीं छुएंगे!)",
        "mouthGuide": "V और W में सबसे बड़ा अंतर यही है! W में दांत होंठ को बिल्कुल नहीं छूते। होंठों को सीटी बजाने जैसा आगे गोल करें, फिर झटके से आवाज़ के साथ खोलें — 'व' (जैसे Win, Water)।",
        "words": [
          {
            "w": "Win",
            "h": "विन",
            "m": "जीतना"
          },
          {
            "w": "Water",
            "h": "वॉटर",
            "m": "पानी"
          },
          {
            "w": "Web",
            "h": "वेब",
            "m": "मकड़ी का जाला"
          }
        ]
      },
      {
        "id": "l1_x",
        "upper": "X",
        "lower": "x",
        "isVowel": false,
        "nameHindi": "एक्स (Ex)",
        "primarySound": "क्स",
        "mouthCategory": "teeth_closed_hiss",
        "mouthBadge": "क + स का त्वरित जोड़",
        "mouthGuide": "गले के पीछे से पहले एक हल्का 'क' बोलें और तुरंत दांतों के बीच से 'स' की हवा छोड़ें — 'क्स' (जैसे Box, Six, Fox)।",
        "words": [
          {
            "w": "X-ray",
            "h": "एक्स-रे",
            "m": "एक्स-रे फोटो"
          },
          {
            "w": "Xylophone",
            "h": "ज़ाइलोफ़ोन",
            "m": "जलतरंग"
          },
          {
            "w": "Xerox",
            "h": "ज़ेरॉक्स",
            "m": "फोटोकॉपी"
          }
        ]
      },
      {
        "id": "l1_y",
        "upper": "Y",
        "lower": "y",
        "isVowel": false,
        "nameHindi": "वाय (Why)",
        "primarySound": "य",
        "mouthCategory": "wide_smile",
        "mouthBadge": "जीभ तालु के पास, 'य' ध्वनि",
        "mouthGuide": "मुंह को 'ई' की स्थिति में रखें, जीभ का मध्य हिस्सा तालु के करीब रहेगा। फिर एक त्वरित झटके के साथ आवाज़ निकालें — 'य' (जैसे Yes, Yak)।",
        "words": [
          {
            "w": "Yak",
            "h": "याक",
            "m": "पहाड़ी बैल"
          },
          {
            "w": "Yes",
            "h": "यस",
            "m": "हाँ"
          },
          {
            "w": "Yarn",
            "h": "यार्न",
            "m": "ऊन का धागा"
          }
        ]
      },
      {
        "id": "l1_z",
        "upper": "Z",
        "lower": "z",
        "isVowel": false,
        "nameHindi": "ज़ेड (Zed / Zee)",
        "primarySound": "ज़ (नुक़्ते वाला ज़)",
        "mouthCategory": "teeth_closed_hiss",
        "mouthBadge": "मधुमक्खी जैसी भिनभिनाहट (Buzz)",
        "mouthGuide": "दांतों को आपस में हल्का सटाएं, और गले से गूंजती आवाज़ निकालें। मधुमक्खी के भिनभिनाने जैसी झनझनाहट पैदा करें — 'ज़्ज़ज़' (जैसे Zoo, Zip)। हिंदी का साधारण 'ज' नहीं, नुक़्ते वाला 'ज़' है!",
        "words": [
          {
            "w": "Zoo",
            "h": "ज़ू",
            "m": "चिड़ियाघर"
          },
          {
            "w": "Zip",
            "h": "ज़िप",
            "m": "चेन"
          },
          {
            "w": "Zebra",
            "h": "ज़ेबरा",
            "m": "ज़ेबरा"
          }
        ]
      }
    ],
    "patterns": [
      {
        "id": "pat_1_lips_closed",
        "num": "1",
        "img": "img/mouth_1_lips_closed.jpg",
        "shapeKey": "lips_closed",
        "title": "1. दोनों होंठ बंद (Lips Closed)",
        "subtitle": "मुंह के दोनों होंठ आपस में कसकर मिलते हैं और हवा को रोककर छोड़ा जाता है",
        "letters": [
          "B",
          "P",
          "M"
        ],
        "badge": "👄 3 अक्षर: B, P, M",
        "borderColor": "#F59E0B",
        "bgColor": "#FFFBEB",
        "guide": "दोनों होंठों को आपस में मिलाकर कसकर बंद करें। P में सिर्फ हवा का पफ, B में गले से आवाज़, और M में नाक से आवाज़ निकलती है।"
      },
      {
        "id": "pat_2_teeth_lip",
        "num": "2",
        "img": "img/mouth_2_teeth_lip.jpg",
        "shapeKey": "teeth_on_lip",
        "title": "2. दांत नीचे के होंठ पर (Teeth on Lower Lip)",
        "subtitle": "ऊपर के सामने वाले दांत निचले होंठ के अंदरूनी हिस्से पर टिकते हैं",
        "letters": [
          "F",
          "V"
        ],
        "badge": "🦷 2 अक्षर: F, V",
        "borderColor": "#10B981",
        "bgColor": "#ECFDF5",
        "guide": "ऊपर के दो सामने वाले दांत नीचे के होंठ पर टिकाएं। F में सिर्फ सूखी हवा फूंकें, और V में होंठ पर मोबाइल जैसा कंपन महसूस करें।"
      },
      {
        "id": "pat_3_wide_smile",
        "num": "3",
        "img": "img/mouth_3_wide_smile.jpg",
        "shapeKey": "wide_smile",
        "title": "3. चौड़ी मुस्कान / खुला मुंह (Wide Smile)",
        "subtitle": "मुंह चौड़ा खुलता है और होंठ मुस्कान की तरह दोनों तरफ खिंचते हैं",
        "letters": [
          "A",
          "E",
          "I",
          "Y"
        ],
        "badge": "😃 4 अक्षर: A, E, I, Y",
        "borderColor": "#F97316",
        "bgColor": "#FFF7ED",
        "guide": "मुंह को चौड़ा खोलें और होंठों पर मुस्कान लाएं। A में बड़ा जबड़ा नीचे गिराएं ('ऐ'), E में आधा खुला ('ए'), I में हल्की मुस्कान ('इ'), Y में त्वरित 'य'।"
      },
      {
        "id": "pat_4_rounded_lips",
        "num": "4",
        "img": "img/mouth_4_rounded_lips.jpg",
        "shapeKey": "rounded_lips",
        "title": "4. गोल होंठ (Rounded Lips)",
        "subtitle": "होंठ सीटी बजाने की तरह आगे निकलकर गोल वृत्त (Circle) बनाते हैं",
        "letters": [
          "O",
          "W",
          "U",
          "Q"
        ],
        "badge": "⭕ 4 अक्षर: O, W, U, Q",
        "borderColor": "#EC4899",
        "bgColor": "#FDF2F8",
        "guide": "होंठों को सीटी बजाने की तरह आगे गोल करें। W का सुनहरा नियम: दांत होंठ को कभी नहीं छुएंगे! O में खुला गोल, U में अ/यू, और Q में QU का गोल 'क्व'।"
      },
      {
        "id": "pat_5_tongue_behind_teeth",
        "num": "5",
        "img": "img/mouth_5_tongue_behind_teeth.jpg",
        "shapeKey": "tongue_up",
        "title": "5. जीभ दांतों के पीछे मसूड़े पर (Tongue Behind Teeth)",
        "subtitle": "जीभ की नोक ऊपर के दांतों के ठीक पीछे मसूड़े के टीले पर लगती है",
        "letters": [
          "T",
          "D",
          "L",
          "N",
          "R"
        ],
        "badge": "👅 5 अक्षर: T, D, L, N, R",
        "borderColor": "#0EA5E9",
        "bgColor": "#F0F9FF",
        "guide": "जीभ की नोक को ऊपर के दांतों के ठीक पीछे मसूड़े पर लगाएं। T में हवा का झटका, D में 'ड', L में किनारों से हवा, N में नाक से, और R में जीभ पीछे मुड़ती है।"
      },
      {
        "id": "pat_6_tongue_between_teeth",
        "num": "6",
        "img": "img/mouth_6_tongue_between_teeth.jpg",
        "shapeKey": "teeth_closed_hiss",
        "title": "6. दांत मिलाकर सीटी व भिनभिनाहट (Teeth Closed & Tongue)",
        "subtitle": "दांत हल्के मिले होते हैं और हवा सीटी या भिनभिनाहट बनकर निकलती है",
        "letters": [
          "S",
          "Z",
          "C",
          "J",
          "X"
        ],
        "badge": "🐝 5 अक्षर: S, Z, C, J, X",
        "borderColor": "#8B5CF6",
        "bgColor": "#F5F3FF",
        "guide": "ऊपर और नीचे के दांतों को हल्का सा मिलाएं। S में सांप जैसी सीटी ('स्स्स'), Z में मधुमक्खी की भिनभिनाहट ('ज़्ज़ज़'), C में 'स', J में 'ज', X में 'क्स'।"
      },
      {
        "id": "pat_7_throat_breath",
        "num": "7",
        "img": "",
        "shapeKey": "throat_breath",
        "title": "7. खुले गले से सांस / भारी हवा (Throat & Breath)",
        "subtitle": "गले की गहराई और जीभ के पिछले हिस्से से हवा व आवाज़ निकलती है",
        "letters": [
          "H",
          "K",
          "G"
        ],
        "badge": "🌬️ 3 अक्षर: H, K, G",
        "borderColor": "#6366F1",
        "bgColor": "#EEF2FF",
        "guide": "H में मुंह खुला रखकर फेफड़ों से सीधी गर्म हवा छोड़ें ('ह')। K में जीभ का पिछला हिस्सा तालु से चिपकाकर हवा छोड़ें ('क')। G में गले से भारी गूंज निकालें ('ग')।"
      }
    ]
  },
  "level2": {
    "title": "44 अंग्रेज़ी ध्वनियां (44 English Sounds / Phonemes)",
    "subtitle": "अंग्रेज़ी में 26 अक्षर हैं लेकिन 44 ध्वनियां हैं। इन्हें सीखना यानी अंग्रेज़ी पढ़ने की असली नींव पाना।",
    "categories": [
      {
        "id": "ph_shortvowels",
        "name": "छोटी Vowel ध्वनियां — 7 Short Vowels",
        "icon": "🔵",
        "desc": "7 छोटी स्वर ध्वनियां जो CVC शब्दों में मिलती हैं",
        "phonemes": [
          {
            "symbol": "/ɪ/",
            "label": "Short I",
            "hindiApprox": "इ (छोटी, हल्की)",
            "tip": "हिंदी की 'इ' से थोड़ी ढीली — Sit बोलते समय 'इ' का उच्चारण थोड़ा और हल्का करें",
            "words": [
              {
                "w": "Bit",
                "h": "बिट",
                "m": "थोड़ा"
              },
              {
                "w": "Sit",
                "h": "सिट",
                "m": "बैठना"
              },
              {
                "w": "Pin",
                "h": "पिन",
                "m": "पिन"
              },
              {
                "w": "Ship",
                "h": "शिप",
                "m": "जहाज़"
              },
              {
                "w": "Milk",
                "h": "मिल्क",
                "m": "दूध"
              },
              {
                "w": "Lip",
                "h": "लिप",
                "m": "होंठ"
              }
            ],
            "paragraph": "Tim is a little kid who lives on a big green hill. His pink pig, Pip, likes to dig in the soft dirt and swim in the cold river. One sunny morning, Tim took a quick trip to the fish pond with a small tin dish. He saw six swift fish swim past a thin stick. Tim sat on a big rock to drink his fresh cold milk and eat a crisp fig. Suddenly, Pip the pig began to slip near the river brink! Tim did a quick sprint and gave a big lift to help Pip out of the wet ditch. Pip gave a funny grin and shook his wet pink skin. Tim gave him a crisp biscuit and a gentle pat on his chin. They both walked up the big hill, past the old wind mill, feeling fit and full of joy. It was a splendid trip with no slips or spills, and Tim was glad to bring Pip back to his warm shed before the chill of the evening set in. Tim lit a small lamp on his wooden desk, read a good list of fun riddles, and fed his pet rabbit a bit of sweet clover. Every kid on the hill knew that Tim and Pip were the best of chums. Later that afternoon, Tim and Pip visited the big mill by the cliff. Tim took a sip of fresh milk and picked up six thin sticks to build a bridge. Pip saw a swift fish swim in the spring. Tim did a quick spin and gave a cheerful grin as he saw his friend win a silver pin. They sat on the rim of the well until the wind grew brisk and chill. Tim held his tin cup with a firm grip and walked back with a happy skip.",
            "sentences": [
              "Tim is a little kid who lives on a big green hill.",
              "His pink pig, Pip, likes to dig in the soft dirt and swim in the cold river.",
              "One sunny morning, Tim took a quick trip to the fish pond with a small tin dish.",
              "He saw six swift fish swim past a thin stick.",
              "Tim sat on a big rock to drink his fresh cold milk and eat a crisp fig.",
              "Suddenly, Pip the pig began to slip near the river brink!",
              "Tim did a quick sprint and gave a big lift to help Pip out of the wet ditch.",
              "Pip gave a funny grin and shook his wet pink skin.",
              "Tim gave him a crisp biscuit and a gentle pat on his chin.",
              "They both walked up the big hill, past the old wind mill, feeling fit and full of joy.",
              "It was a splendid trip with no slips or spills, and Tim was glad to bring Pip back to his warm shed before the chill of the evening set in.",
              "Tim lit a small lamp on his wooden desk, read a good list of fun riddles, and fed his pet rabbit a bit of sweet clover.",
              "Every kid on the hill knew that Tim and Pip were the best of chums.",
              "Later that afternoon, Tim and Pip visited the big mill by the cliff.",
              "Tim took a sip of fresh milk and picked up six thin sticks to build a bridge.",
              "Pip saw a swift fish swim in the spring.",
              "Tim did a quick spin and gave a cheerful grin as he saw his friend win a silver pin.",
              "They sat on the rim of the well until the wind grew brisk and chill.",
              "Tim held his tin cup with a firm grip and walked back with a happy skip."
            ],
            "wordCount": 304,
            "mouthShape": "wide_smile",
            "mouthBadge": "👄 जबड़ा थोड़ा खुला + होंठ रिलैक्स (हल्की मुस्कान)",
            "mouthGuide": "हिंदी की 'इ' बोलते समय मुंह थोड़ा तना रहता है, लेकिन अंग्रेज़ी के Short I में जबड़े को नीचे ढीला छोड़ें। होंठों पर हल्की सी मुस्कान रहेगी। जीभ मुंह के बीच में थोड़ी ऊपर रहेगी। आवाज बहुत छोटी और कोमल निकालें — 'इ' (जैसे Sit, Pin, Bit)।",
            "anchor": {
              "word": "Ink",
              "hindi": "इंक",
              "meaning": "स्याही",
              "icon": "🖋️"
            }
          },
          {
            "symbol": "/e/",
            "label": "Short E",
            "hindiApprox": "ए (हल्का, छोटा)",
            "tip": "हिंदी की 'ए' से मिलती-जुलती — Pen, Bed में इस्तेमाल होती है",
            "words": [
              {
                "w": "Bed",
                "h": "बेड",
                "m": "बिस्तर"
              },
              {
                "w": "Pen",
                "h": "पेन",
                "m": "कलम"
              },
              {
                "w": "Hen",
                "h": "हेन",
                "m": "मुर्गी"
              },
              {
                "w": "Net",
                "h": "नेट",
                "m": "जाल"
              },
              {
                "w": "Red",
                "h": "रेड",
                "m": "लाल"
              },
              {
                "w": "Ten",
                "h": "टेन",
                "m": "दस"
              }
            ],
            "paragraph": "Ben has a fine red hen named Penny who lives in a warm wooden shed by the well. Every morning at ten, Ben takes his red pen and a yellow pad to check the hen house. He steps out on the wet grass to feed ten hens with fresh seeds. Penny the hen steps out of her nest and rings a little brass bell with her peck. Ben smiles and lets the hens run in the pen. Then Ben met his best friend Ted near the red brick fence. Ted had a pet dog named Rex who can fetch a tennis ball and rest on a soft bed. Ted said, \"Let us help Meg mend her tent before the west wind gets too strong.\" Ben and Ted ran to the shed, got ten metal pegs, and set the tent firm in the open meadow. They did their very best and finished the task before twelve. Then Meg gave them ten red apples, some fresh bread, and sweet berry jam. They sat on a wide bench by the elm tree, fed a few bread crumbs to the red hen, and felt very merry. When the sunset turned the west sky red, Ben led his red hen back into the warm shed and went home to rest his head on his soft bed. When evening came, Ben went back to his red shed to check on his ten best hens. He placed fresh eggs in a net basket and set it on the wooden bench. Ben fed the hens with red grains and swept the wet steps. His pet dog Ned rested his head on Ben's left leg. Ben read a letter from his friend Ted and felt very blessed. The red bell chimed seven times, telling Ben that it was time to rest on his soft red bed.",
            "sentences": [
              "Ben has a fine red hen named Penny who lives in a warm wooden shed by the well.",
              "Every morning at ten, Ben takes his red pen and a yellow pad to check the hen house.",
              "He steps out on the wet grass to feed ten hens with fresh seeds.",
              "Penny the hen steps out of her nest and rings a little brass bell with her peck.",
              "Ben smiles and lets the hens run in the pen.",
              "Then Ben met his best friend Ted near the red brick fence.",
              "Ted had a pet dog named Rex who can fetch a tennis ball and rest on a soft bed.",
              "Ted said, \"Let us help Meg mend her tent before the west wind gets too strong.\" Ben and Ted ran to the shed, got ten metal pegs, and set the tent firm in the open meadow.",
              "They did their very best and finished the task before twelve.",
              "Then Meg gave them ten red apples, some fresh bread, and sweet berry jam.",
              "They sat on a wide bench by the elm tree, fed a few bread crumbs to the red hen, and felt very merry.",
              "When the sunset turned the west sky red, Ben led his red hen back into the warm shed and went home to rest his head on his soft bed.",
              "When evening came, Ben went back to his red shed to check on his ten best hens.",
              "He placed fresh eggs in a net basket and set it on the wooden bench.",
              "Ben fed the hens with red grains and swept the wet steps.",
              "His pet dog Ned rested his head on Ben's left leg.",
              "Ben read a letter from his friend Ted and felt very blessed.",
              "The red bell chimed seven times, telling Ben that it was time to rest on his soft red bed."
            ],
            "wordCount": 307,
            "mouthShape": "wide_smile",
            "mouthBadge": "😃 मुंह आधा खुला + जबड़ा एक अंगुली जितना नीचे",
            "mouthGuide": "मुंह को आधा खोलें, इतना कि ऊपर-नीचे के दांतों के बीच एक अंगुली आसानी से आ सके। होंठ चौड़ाई में थोड़े फैले होंगे। जीभ का आगे का हिस्सा निचले दांतों के पीछे रहेगा। आवाज़ पेट से साफ और छोटी निकालें — 'ए' (जैसे Pen, Red, Egg)।",
            "anchor": {
              "word": "Elephant",
              "hindi": "एलिफ़ेंट",
              "meaning": "हाथी",
              "icon": "🐘"
            }
          },
          {
            "symbol": "/æ/",
            "label": "Short A",
            "hindiApprox": "ऐ (मुंह चौड़ा खोलकर)",
            "tip": "हिंदी 'ऐ' और 'अ' के बीच की ध्वनि — मुंह चौड़ा खोलकर 'ऐ' बोलें",
            "words": [
              {
                "w": "Cat",
                "h": "कैट",
                "m": "बिल्ली"
              },
              {
                "w": "Bat",
                "h": "बैट",
                "m": "बल्ला"
              },
              {
                "w": "Hat",
                "h": "हैट",
                "m": "टोपी"
              },
              {
                "w": "Map",
                "h": "मैप",
                "m": "नक्शा"
              },
              {
                "w": "Fan",
                "h": "फ़ैन",
                "m": "पंखा"
              },
              {
                "w": "Man",
                "h": "मैन",
                "m": "आदमी"
              }
            ],
            "paragraph": "Sam is a happy young man with a black cat named Max and a tan cap. Sam packed his canvas bag with an apple, a ham sandwich, and a glass of jam, then set out on a grand path across the valley. Max the black cat sat flat on the front of the wagon, tapping the wooden slats with his paws. As they passed the cattle farm, a fat black ram ran along the fence, and Sam waved his plaid flag. Sam stopped by a wooden stand to buy a fresh batch of hand-picked carrots from a man named Dan. Dan had a brass pan, a tin can, and a wide flat map of the land. Sam spread the map out on a flat rock and planned his track to the camping ground. A sudden gust of wind blew Dan's black cap into a shallow sand trap, but Sam ran fast, grabbed the strap, and brought it back in a snap. Dan was glad and clapped Sam on the back with a friendly hand. The afternoon was packed with fun as Sam sat on a plaid mat, ate his ham snack, and shared a scrap of apple with Max the cat. When the shadows stretched across the sand, Sam packed his bag, fastened every strap, and walked back along the gravel track with his trusty black cat resting gently in his lap. Max the cat sat on Dad's lap while Dan packed a black bag for the camp. Dad had a map of the land and a brass lamp. Dan gave Max a gentle pat on his back and put a cap on his head. They had a ham sandwich with a dash of apple jam. The black cat drank milk from a flat pan on the mat. Max began to nap in Dan's lap as the fan turned with a soft clap.",
            "sentences": [
              "Sam is a happy young man with a black cat named Max and a tan cap.",
              "Sam packed his canvas bag with an apple, a ham sandwich, and a glass of jam, then set out on a grand path across the valley.",
              "Max the black cat sat flat on the front of the wagon, tapping the wooden slats with his paws.",
              "As they passed the cattle farm, a fat black ram ran along the fence, and Sam waved his plaid flag.",
              "Sam stopped by a wooden stand to buy a fresh batch of hand-picked carrots from a man named Dan.",
              "Dan had a brass pan, a tin can, and a wide flat map of the land.",
              "Sam spread the map out on a flat rock and planned his track to the camping ground.",
              "A sudden gust of wind blew Dan's black cap into a shallow sand trap, but Sam ran fast, grabbed the strap, and brought it back in a snap.",
              "Dan was glad and clapped Sam on the back with a friendly hand.",
              "The afternoon was packed with fun as Sam sat on a plaid mat, ate his ham snack, and shared a scrap of apple with Max the cat.",
              "When the shadows stretched across the sand, Sam packed his bag, fastened every strap, and walked back along the gravel track with his trusty black cat resting gently in his lap.",
              "Max the cat sat on Dad's lap while Dan packed a black bag for the camp.",
              "Dad had a map of the land and a brass lamp.",
              "Dan gave Max a gentle pat on his back and put a cap on his head.",
              "They had a ham sandwich with a dash of apple jam.",
              "The black cat drank milk from a flat pan on the mat.",
              "Max began to nap in Dan's lap as the fan turned with a soft clap."
            ],
            "wordCount": 313,
            "mouthShape": "jaw_drop",
            "mouthBadge": "😲 जबड़ा पूरा नीचे + चौड़ा मुंह (जैसे सेब खा रहे हों)",
            "mouthGuide": "जबड़े को पूरा नीचे गिराएं और मुंह को चौड़ा खोलें, जैसे आप बड़ा सेब खाने जा रहे हों! जीभ को मुंह के फर्श पर बिल्कुल सपाट (flat) रखें। आवाज़ थोड़ी लंबी और चौड़ी निकलेगी — 'ऐ' (जैसे Cat, Apple, Man)।",
            "anchor": {
              "word": "Apple",
              "hindi": "ऐपल",
              "meaning": "सेब",
              "icon": "🍎"
            }
          },
          {
            "symbol": "/ɒ/",
            "label": "Short O",
            "hindiApprox": "ऑ (गोल मुंह, छोटा)",
            "tip": "हिंदी 'ऑ' जैसी — डॉक्टर, स्टॉप में आने वाली 'ऑ'",
            "words": [
              {
                "w": "Pot",
                "h": "पॉट",
                "m": "मटका"
              },
              {
                "w": "Dog",
                "h": "डॉग",
                "m": "कुत्ता"
              },
              {
                "w": "Hot",
                "h": "हॉट",
                "m": "गर्म"
              },
              {
                "w": "Fox",
                "h": "फ़ॉक्स",
                "m": "लोमड़ी"
              },
              {
                "w": "Box",
                "h": "बॉक्स",
                "m": "डिब्बा"
              },
              {
                "w": "Cot",
                "h": "कॉट",
                "m": "चारपाई"
              }
            ],
            "paragraph": "Tom is a jolly boy who has a loyal dog named Spot and a clever pet fox named Todd. One hot summer morning, Tom got up at six of the clock and put a big copper pot on the hot stove. He cooked a hot broth of fresh crops and beans, poured it into a wide crock, and set it on the block to cool. Spot the dog ran across the wooden dock, chasing a green frog that hopped from rock to rock near the lotus pond. The frog dropped into the soft moss with a funny plop! Tom got his rod and a wooden tackle box, then walked to the top of the rocky dock to fish. He cast his line into the deep spot of the pond and watched the red bobber bob on the water. A soft breeze made the tree tops rock and drop a dry acorn onto the dock. Tom caught three strong fish, unhooked them with care, and dropped them into a wet basket. Todd the fox popped out from behind a hollow log, his long bushy tail swishing like a soft mop. Tom shared a bit of cooked cod with Spot and Todd, and they rested together under the shade of a tall rock. When the clock struck noon, Tom packed his fishing rod into the long box, hopped onto his red bicycle, and trotted back along the sandy road to his cottage. Spot the dog jumped on top of a mossy log as Tom washed the big copper pot. A clever fox popped its head from behind a wooden box in the fog. Tom had a hot cup of tea on the spot while Spot chased a brown moth across the lot. The clock on the shop struck four with a loud clop. Spot trotted back to Tom and dropped a soft knot of rope right into Tom's open palm.",
            "sentences": [
              "Tom is a jolly boy who has a loyal dog named Spot and a clever pet fox named Todd.",
              "One hot summer morning, Tom got up at six of the clock and put a big copper pot on the hot stove.",
              "He cooked a hot broth of fresh crops and beans, poured it into a wide crock, and set it on the block to cool.",
              "Spot the dog ran across the wooden dock, chasing a green frog that hopped from rock to rock near the lotus pond.",
              "The frog dropped into the soft moss with a funny plop!",
              "Tom got his rod and a wooden tackle box, then walked to the top of the rocky dock to fish.",
              "He cast his line into the deep spot of the pond and watched the red bobber bob on the water.",
              "A soft breeze made the tree tops rock and drop a dry acorn onto the dock.",
              "Tom caught three strong fish, unhooked them with care, and dropped them into a wet basket.",
              "Todd the fox popped out from behind a hollow log, his long bushy tail swishing like a soft mop.",
              "Tom shared a bit of cooked cod with Spot and Todd, and they rested together under the shade of a tall rock.",
              "When the clock struck noon, Tom packed his fishing rod into the long box, hopped onto his red bicycle, and trotted back along the sandy road to his cottage.",
              "Spot the dog jumped on top of a mossy log as Tom washed the big copper pot.",
              "A clever fox popped its head from behind a wooden box in the fog.",
              "Tom had a hot cup of tea on the spot while Spot chased a brown moth across the lot.",
              "The clock on the shop struck four with a loud clop.",
              "Spot trotted back to Tom and dropped a soft knot of rope right into Tom's open palm."
            ],
            "wordCount": 318,
            "mouthShape": "rounded_lips",
            "mouthBadge": "⭕ जबड़ा नीचे + होंठ हल्के अंडाकार (Oval)",
            "mouthGuide": "मुंह को नीचे की तरफ खोलें और होंठों को हल्का सा गोल (अंडाकार) करें। जीभ को थोड़ा पीछे की तरफ खींचें। आवाज़ छोटी और गहरी होगी — 'ऑ' (जैसे Hot, Dog, Box)। हिंदी का 'ओ' नहीं, यह खुला 'ऑ' है!",
            "anchor": {
              "word": "Ox",
              "hindi": "ऑक्स",
              "meaning": "बैल",
              "icon": "🐂"
            }
          },
          {
            "symbol": "/ʌ/",
            "label": "Short U",
            "hindiApprox": "अ (बीच की, हल्की)",
            "tip": "हिंदी 'अ' जैसी — Cup, Run, Sun में आती है। हिंदी की 'उ' से अलग!",
            "words": [
              {
                "w": "Cup",
                "h": "कप",
                "m": "प्याला"
              },
              {
                "w": "Run",
                "h": "रन",
                "m": "दौड़ना"
              },
              {
                "w": "Sun",
                "h": "सन",
                "m": "सूरज"
              },
              {
                "w": "Hut",
                "h": "हट",
                "m": "झोपड़ी"
              },
              {
                "w": "Bus",
                "h": "बस",
                "m": "बस"
              },
              {
                "w": "Fun",
                "h": "फ़न",
                "m": "मज़ा"
              }
            ],
            "paragraph": "Gus is a cheerful young lad who loves to run under the warm summer sun. He has a funny brown pup named Buster who loves to jump into the mud and hunt for bugs among the shrubs. Every sunny day, Gus takes his tin cup, a crust of fresh bread, and runs out to the farm yard. A big yellow duck led her ducklings from the truck to the pond with a jolly cluck. Gus chuckled as Buster did a wild jump over a mossy stump and tumbled into a soft mud puddle. Gus had to scrub the pup with warm suds in a wooden tub, using a stiff brush to get the red dust off his fur. After the tub, Buster shook his wet coat, sending drops flying across the sunlit rug. Then Gus picked a bunch of ripe red plums from the plum tree, put them in a wicker jug, and shared them with his sister Dusty. They strummed a cheerful tune on a small toy drum, hummed a sunny song, and watched a busy bumble bee hum over the clover shrubs. Gus felt lucky to have such a sunny day full of fun, love, and laughter with his loyal pup and his family under the blue summer sky. Gus the pup ran across the mud to jump onto the soft rug. Ann poured warm milk into a red mug and gave Gus a loving hug. A tiny bug spun around the flower bud under the bright sun. Ann cut a sweet bun for lunch and gave Gus a crumb. Gus did a fun jump over the wooden tub and dug in the dust. They had so much fun under the summer sun until dusk fell over the hut. Always remember to practice reading this target sound by repeating these key words out loud: Cup, Run, Sun, Hut, Bus, Fun. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Gus is a cheerful young lad who loves to run under the warm summer sun.",
              "He has a funny brown pup named Buster who loves to jump into the mud and hunt for bugs among the shrubs.",
              "Every sunny day, Gus takes his tin cup, a crust of fresh bread, and runs out to the farm yard.",
              "A big yellow duck led her ducklings from the truck to the pond with a jolly cluck.",
              "Gus chuckled as Buster did a wild jump over a mossy stump and tumbled into a soft mud puddle.",
              "Gus had to scrub the pup with warm suds in a wooden tub, using a stiff brush to get the red dust off his fur.",
              "After the tub, Buster shook his wet coat, sending drops flying across the sunlit rug.",
              "Then Gus picked a bunch of ripe red plums from the plum tree, put them in a wicker jug, and shared them with his sister Dusty.",
              "They strummed a cheerful tune on a small toy drum, hummed a sunny song, and watched a busy bumble bee hum over the clover shrubs.",
              "Gus felt lucky to have such a sunny day full of fun, love, and laughter with his loyal pup and his family under the blue summer sky.",
              "Gus the pup ran across the mud to jump onto the soft rug.",
              "Ann poured warm milk into a red mug and gave Gus a loving hug.",
              "A tiny bug spun around the flower bud under the bright sun.",
              "Ann cut a sweet bun for lunch and gave Gus a crumb.",
              "Gus did a fun jump over the wooden tub and dug in the dust.",
              "They had so much fun under the summer sun until dusk fell over the hut.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Cup, Run, Sun, Hut, Bus, Fun.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 359,
            "mouthShape": "wide_smile",
            "mouthBadge": "😐 मुंह स्वाभाविक खुला + बिल्कुल तनावमुक्त जबड़ा",
            "mouthGuide": "मुंह को बिल्कुल स्वाभाविक और रिलैक्स रखें, जैसे कोई हैरान होकर 'अ' बोलता है। होंठ और जीभ बिना किसी खिंचाव के बीच में रहेंगे। पेट से हल्की सी आवाज़ का झटका दें — 'अ' (जैसे Cup, Sun, Bus)।",
            "anchor": {
              "word": "Umbrella",
              "hindi": "अम्ब्रेला",
              "meaning": "छाता",
              "icon": "☂️"
            }
          },
          {
            "symbol": "/ʊ/",
            "label": "Short OO",
            "hindiApprox": "उ (छोटा, हल्का)",
            "tip": "हिंदी की छोटी 'उ' — Put, Book, Pull में इस्तेमाल",
            "words": [
              {
                "w": "Put",
                "h": "पुट",
                "m": "रखना"
              },
              {
                "w": "Book",
                "h": "बुक",
                "m": "किताब"
              },
              {
                "w": "Pull",
                "h": "पुल",
                "m": "खींचना"
              },
              {
                "w": "Full",
                "h": "फ़ुल",
                "m": "भरा"
              },
              {
                "w": "Push",
                "h": "पुश",
                "m": "धकेलना"
              },
              {
                "w": "Bull",
                "h": "बुल",
                "m": "बैल"
              }
            ],
            "paragraph": "Brook took a good walk through the shady woods with a heavy wool coat and an old picture book in his wooden cart. He walked along the mossy brook until he stood beside an ancient oak tree with deep roots. Brook pulled out his book, shook off a stray dry leaf, and looked at the beautiful drawings of wolves and owls that lived in the northern bush. Nearby, an old woodsman was cutting firewood with a steel hook, stacking the good dry wood in a neat pile near his wooden cabin. The woodsman looked up with a kind smile, took off his wool cap, and invited Brook inside for a warm meal. A big black iron pot was cooking a rich stew on the stone hearth, filling the room with the smell of sweet spices and fresh baked bread. The woodsman pulled a sturdy wooden stool near the fire, took a ladle, and poured Brook a full bowl of hot soup. Brook thanked the good cook, ate with joy, and read aloud a chapter from his book about a clever bull that pulled a heavy cart across a muddy brook. The woodsman listened with a cheerful nod, pleased to have such a pleasant visitor in his quiet woodland home before the cold winter set in. Brooks walked into the cozy wooden room and shook the snow from his wool coat. He took a look at the cook who stood by the wood stove. The cook shook a pot of good soup and smiled. Brooks took a seat on the footstool and read his favorite book by the fire. He took a wooden spoon and tasted the good broth. It felt so good to rest his feet on the wool rug in the warm room. Always remember to practice reading this target sound by repeating these key words out loud: Put, Book, Pull, Full, Push, Bull. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Brook took a good walk through the shady woods with a heavy wool coat and an old picture book in his wooden cart.",
              "He walked along the mossy brook until he stood beside an ancient oak tree with deep roots.",
              "Brook pulled out his book, shook off a stray dry leaf, and looked at the beautiful drawings of wolves and owls that lived in the northern bush.",
              "Nearby, an old woodsman was cutting firewood with a steel hook, stacking the good dry wood in a neat pile near his wooden cabin.",
              "The woodsman looked up with a kind smile, took off his wool cap, and invited Brook inside for a warm meal.",
              "A big black iron pot was cooking a rich stew on the stone hearth, filling the room with the smell of sweet spices and fresh baked bread.",
              "The woodsman pulled a sturdy wooden stool near the fire, took a ladle, and poured Brook a full bowl of hot soup.",
              "Brook thanked the good cook, ate with joy, and read aloud a chapter from his book about a clever bull that pulled a heavy cart across a muddy brook.",
              "The woodsman listened with a cheerful nod, pleased to have such a pleasant visitor in his quiet woodland home before the cold winter set in.",
              "Brooks walked into the cozy wooden room and shook the snow from his wool coat.",
              "He took a look at the cook who stood by the wood stove.",
              "The cook shook a pot of good soup and smiled.",
              "Brooks took a seat on the footstool and read his favorite book by the fire.",
              "He took a wooden spoon and tasted the good broth.",
              "It felt so good to rest his feet on the wool rug in the warm room.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Put, Book, Pull, Full, Push, Bull.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 362,
            "mouthShape": "rounded_lips",
            "mouthBadge": "⭕ होंठ हल्के आगे गोल (शिथिल उ)",
            "mouthGuide": "होंठों को हल्का सा आगे की ओर गोल करें, लेकिन बहुत कसकर नहीं। जीभ का पिछला हिस्सा थोड़ा ऊपर उठेगा। आवाज़ छोटी और हल्की होगी — 'उ' (जैसे Book, Good, Foot)। इसे खींचना नहीं है!",
            "anchor": {
              "word": "Book",
              "hindi": "बुक",
              "meaning": "किताब",
              "icon": "📖"
            }
          },
          {
            "symbol": "/ə/",
            "label": "Schwa (सबसे आम ध्वनि)",
            "hindiApprox": "अ (बिल्कुल हल्का, कमज़ोर)",
            "tip": "अंग्रेज़ी की सबसे आम ध्वनि — बिना ज़ोर वाले syllable में — About, Butter का दूसरा भाग",
            "words": [
              {
                "w": "About",
                "h": "अबाउट",
                "m": "के बारे में"
              },
              {
                "w": "Doctor",
                "h": "डॉक्टर (डॉक्टـr)",
                "m": "चिकित्सक"
              },
              {
                "w": "Butter",
                "h": "बटـr",
                "m": "मक्खन"
              },
              {
                "w": "Ago",
                "h": "अगो",
                "m": "पहले"
              },
              {
                "w": "Sofa",
                "h": "सोफ़ـa",
                "m": "सोफ़ा"
              }
            ],
            "paragraph": "A famous doctor and a gentle teacher were walking together along a winding river on a pleasant summer afternoon. They talked about the wonder of nature, the history of their mother land, and the great banner of peace that hung above the city harbor. A silver fish leaped out of the clear river water, creating a lovely pattern of ripples under the bright sun. The teacher took out a clean sheet of paper from his leather folder and wrote down a short poem about an old zebra resting beneath a leafy acacia umbrella. Further along the garden path, a kind woman was sitting comfortably on a soft sofa, reading a thick letter that her brother had sent from another country three months ago. A gentle breeze whispered through the branches of the tall cedar trees, scattering tiny petals across the stone fountain. The doctor smiled, adjusted his round silver spectacles, and remembered a wise advice his grandmother had given him long ago: that true contentment is found not in golden treasures, but in the quiet company of good friends, a humble heart, and the beauty of a peaceful afternoon surrounded by the wonders of the natural world. The doctor and the teacher walked along the river path to visit the local library. A polite police officer greeted them about the daily traffic plan. They sat on a comfortable sofa and read a long paper about animal behavior. A young boy offered them fresh water from a glass bottle. The teacher explained that a good student practices reading every single day. The doctor agreed that steady practice makes a person wise and strong. Always remember to practice reading this target sound by repeating these key words out loud: About, Doctor, Butter, Ago, Sofa. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "A famous doctor and a gentle teacher were walking together along a winding river on a pleasant summer afternoon.",
              "They talked about the wonder of nature, the history of their mother land, and the great banner of peace that hung above the city harbor.",
              "A silver fish leaped out of the clear river water, creating a lovely pattern of ripples under the bright sun.",
              "The teacher took out a clean sheet of paper from his leather folder and wrote down a short poem about an old zebra resting beneath a leafy acacia umbrella.",
              "Further along the garden path, a kind woman was sitting comfortably on a soft sofa, reading a thick letter that her brother had sent from another country three months ago.",
              "A gentle breeze whispered through the branches of the tall cedar trees, scattering tiny petals across the stone fountain.",
              "The doctor smiled, adjusted his round silver spectacles, and remembered a wise advice his grandmother had given him long ago: that true contentment is found not in golden treasures, but in the quiet company of good friends, a humble heart, and the beauty of a peaceful afternoon surrounded by the wonders of the natural world.",
              "The doctor and the teacher walked along the river path to visit the local library.",
              "A polite police officer greeted them about the daily traffic plan.",
              "They sat on a comfortable sofa and read a long paper about animal behavior.",
              "A young boy offered them fresh water from a glass bottle.",
              "The teacher explained that a good student practices reading every single day.",
              "The doctor agreed that steady practice makes a person wise and strong.",
              "Always remember to practice reading this target sound by repeating these key words out loud: About, Doctor, Butter, Ago, Sofa.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 339,
            "mouthShape": "relax_schwa",
            "mouthBadge": "😴 सबसे आलसी ध्वनि (Lazy Sound - शून्य खिंचाव)",
            "mouthGuide": "अंग्रेज़ी भाषा की सबसे महत्वपूर्ण ध्वनि! इसमें मुंह, होंठ, जबड़ा और जीभ 100% रिलैक्स रहते हैं, जैसे आप बिल्कुल थके हुए हों। बस बहुत हल्की सी सांस जैसी आवाज़ निकलती है — 'अ' (उदा. a-bout, ba-na-na, doc-tor)।",
            "anchor": {
              "word": "Banana",
              "hindi": "बनाना",
              "meaning": "केला",
              "icon": "🍌"
            }
          }
        ]
      },
      {
        "id": "ph_longvowels",
        "name": "लंबी Vowel ध्वनियां — 5 Long Vowels",
        "icon": "🟡",
        "desc": "5 लंबी स्वर ध्वनियां जो अपना नाम खुद बोलती हैं",
        "phonemes": [
          {
            "symbol": "/iː/",
            "label": "Long EE",
            "hindiApprox": "ई (बड़ी, खिंची हुई)",
            "tip": "हिंदी की बड़ी 'ई' — See, Tree, Meet, Sea में",
            "words": [
              {
                "w": "See",
                "h": "सी",
                "m": "देखना"
              },
              {
                "w": "Tree",
                "h": "ट्री",
                "m": "पेड़"
              },
              {
                "w": "Meet",
                "h": "मीट",
                "m": "मिलना"
              },
              {
                "w": "Sea",
                "h": "सी",
                "m": "समुद्र"
              },
              {
                "w": "Free",
                "h": "फ्री",
                "m": "मुफ़्त"
              },
              {
                "w": "Queen",
                "h": "क्वीन",
                "m": "रानी"
              }
            ],
            "paragraph": "The queen stood on the green hill beside a weeping willow tree, watching her flock of three hundred sweet white sheep graze in the deep valley. A gentle sea breeze swept across the green fields, carrying the sweet scent of clover and wild roses. The queen held a silver chalice filled with sweet green tea and looked toward the eastern sea where a fleet of tall ships sailed free under the morning sun. Her three loyal guards stood with keen eyes near the palace street, keeping the realm safe and serene. A little child ran across the meadow to greet the queen with a bouquet of sweet pea blossoms and fresh green leaves. The queen smiled with deep joy, knelt on one knee, and offered the child a delicious honey sweetmeat from a golden dish. Nearby, a crystal clear stream leaped over smooth pebbles, making sweet music that seemed to sing of peace and freedom for every soul in the green land. As the golden sunlight beamed down through the leafy canopy, three green parakeets preened their sleek feathers on a high beech bough, free from fear, sleeping peacefully under the benevolent care of their beloved queen. Queen Eve walked through the sweet green meadow to greet the three sheep. The sheep began to bleed softly as they ate the green grass beneath the trees. Eve felt a cool breeze sweep across the valley. She promised to feed the sheep and keep them safe from harm. Eve sat by a clear creek to soak her feet and read a sweet poem. The peaceful scene made everyone feel deep peace and pure relief. Always remember to practice reading this target sound by repeating these key words out loud: See, Tree, Meet, Sea, Free, Queen. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "The queen stood on the green hill beside a weeping willow tree, watching her flock of three hundred sweet white sheep graze in the deep valley.",
              "A gentle sea breeze swept across the green fields, carrying the sweet scent of clover and wild roses.",
              "The queen held a silver chalice filled with sweet green tea and looked toward the eastern sea where a fleet of tall ships sailed free under the morning sun.",
              "Her three loyal guards stood with keen eyes near the palace street, keeping the realm safe and serene.",
              "A little child ran across the meadow to greet the queen with a bouquet of sweet pea blossoms and fresh green leaves.",
              "The queen smiled with deep joy, knelt on one knee, and offered the child a delicious honey sweetmeat from a golden dish.",
              "Nearby, a crystal clear stream leaped over smooth pebbles, making sweet music that seemed to sing of peace and freedom for every soul in the green land.",
              "As the golden sunlight beamed down through the leafy canopy, three green parakeets preened their sleek feathers on a high beech bough, free from fear, sleeping peacefully under the benevolent care of their beloved queen.",
              "Queen Eve walked through the sweet green meadow to greet the three sheep.",
              "The sheep began to bleed softly as they ate the green grass beneath the trees.",
              "Eve felt a cool breeze sweep across the valley.",
              "She promised to feed the sheep and keep them safe from harm.",
              "Eve sat by a clear creek to soak her feet and read a sweet poem.",
              "The peaceful scene made everyone feel deep peace and pure relief.",
              "Always remember to practice reading this target sound by repeating these key words out loud: See, Tree, Meet, Sea, Free, Queen.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 340,
            "mouthShape": "wide_smile",
            "mouthBadge": "😁 चौड़ी मुस्कान + होंठ तने हुए (खिंची ई)",
            "mouthGuide": "अपने होंठों को दोनों तरफ जितना हो सके खींचकर पूरी मुस्कान बनाएं। जीभ का अगला हिस्सा ऊपर तालु के बहुत करीब होगा। आवाज़ को कम से कम 1 सेकंड खींचकर बोलें — 'ईई' (जैसे See, Feel, Tree)।",
            "anchor": {
              "word": "Eagle",
              "hindi": "ईगल",
              "meaning": "चील",
              "icon": "🦅"
            }
          },
          {
            "symbol": "/ɑː/",
            "label": "Long AR",
            "hindiApprox": "आ (गहरा, खुला मुंह)",
            "tip": "हिंदी की लंबी 'आ' — Car, Father, Star में",
            "words": [
              {
                "w": "Car",
                "h": "कार",
                "m": "कार"
              },
              {
                "w": "Star",
                "h": "स्टार",
                "m": "तारा"
              },
              {
                "w": "Park",
                "h": "पार्क",
                "m": "बगीचा"
              },
              {
                "w": "Far",
                "h": "फ़ार",
                "m": "दूर"
              },
              {
                "w": "Hard",
                "h": "हार्ड",
                "m": "कठिन / कठोर"
              },
              {
                "w": "Dark",
                "h": "डार्क",
                "m": "अंधेरा"
              }
            ],
            "paragraph": "Mark drove his dark green car to the large farm park just as the bright stars were beginning to fade in the early morning sky. The air was crisp and sharp, and the vast garden was alive with the calls of lark birds nesting in the tall cedar branches. Mark parked his car by the wooden barn, tied a scarlet scarf around his neck, and picked up a heavy cart loaded with garden tools. His father, a smart and hard-working farmer, was already in the yard, marking out long beds for the spring garlic and scarlet beans. A large sheepdog with dark curly fur barked a friendly greeting from the barn door and bounded across the yard to lick Mark's hand. Together, father and son worked with tireless energy, turning the dark rich soil of the farm garden and planting seeds with skilled artisan care. At noon, they rested on a stone bench under the grand oak tree, eating crusty bread with sharp farmhouse cheese and sweet apples picked from the orchard trees. Mark looked across the broad farmland stretching toward the distant hills and felt a deep pride in the honest hard work that brought food and joy to thousands of homes across the country. Mark parked his car near the red barn at the edge of the farm. He looked up at the dark sky and saw a bright star shining above the yard. Mark worked hard all day in the garden to guard the sweet plants from harm. His dog began to bark happily when Mark walked into the barn with a sharp spade. Mark leaned against the wooden bar, glad to rest his arms after a long day of farm work. Always remember to practice reading this target sound by repeating these key words out loud: Car, Star, Park, Far, Hard, Dark. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Mark drove his dark green car to the large farm park just as the bright stars were beginning to fade in the early morning sky.",
              "The air was crisp and sharp, and the vast garden was alive with the calls of lark birds nesting in the tall cedar branches.",
              "Mark parked his car by the wooden barn, tied a scarlet scarf around his neck, and picked up a heavy cart loaded with garden tools.",
              "His father, a smart and hard-working farmer, was already in the yard, marking out long beds for the spring garlic and scarlet beans.",
              "A large sheepdog with dark curly fur barked a friendly greeting from the barn door and bounded across the yard to lick Mark's hand.",
              "Together, father and son worked with tireless energy, turning the dark rich soil of the farm garden and planting seeds with skilled artisan care.",
              "At noon, they rested on a stone bench under the grand oak tree, eating crusty bread with sharp farmhouse cheese and sweet apples picked from the orchard trees.",
              "Mark looked across the broad farmland stretching toward the distant hills and felt a deep pride in the honest hard work that brought food and joy to thousands of homes across the country.",
              "Mark parked his car near the red barn at the edge of the farm.",
              "He looked up at the dark sky and saw a bright star shining above the yard.",
              "Mark worked hard all day in the garden to guard the sweet plants from harm.",
              "His dog began to bark happily when Mark walked into the barn with a sharp spade.",
              "Mark leaned against the wooden bar, glad to rest his arms after a long day of farm work.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Car, Star, Park, Far, Hard, Dark.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 353,
            "mouthShape": "jaw_drop",
            "mouthBadge": "😮 डॉक्टर को मुंह दिखाने जैसा खुला मुंह (गहरा आ)",
            "mouthGuide": "मुंह को नीचे की ओर जितना हो सके बड़ा खोलें, जैसे डॉक्टर के कहने पर 'आ' करते हैं। जीभ मुंह के फर्श पर बिल्कुल नीचे दबी रहेगी। गले की गहराई से आवाज़ खींचें — 'आआ' (जैसे Car, Park, Father)।",
            "anchor": {
              "word": "Car",
              "hindi": "कार",
              "meaning": "गाड़ी",
              "icon": "🚗"
            }
          },
          {
            "symbol": "/ɔː/",
            "label": "Long AW / OR",
            "hindiApprox": "ऑ (लंबा, गोल मुंह)",
            "tip": "हिंदी की लंबी 'ऑ' — Door, Ball, Law में",
            "words": [
              {
                "w": "Door",
                "h": "डोर",
                "m": "दरवाज़ा"
              },
              {
                "w": "Ball",
                "h": "बॉल",
                "m": "गेंद"
              },
              {
                "w": "Law",
                "h": "लॉ",
                "m": "कानून"
              },
              {
                "w": "All",
                "h": "ऑल",
                "m": "सब"
              },
              {
                "w": "Walk",
                "h": "वॉक",
                "m": "चलना"
              },
              {
                "w": "Talk",
                "h": "टॉक",
                "m": "बात करना"
              }
            ],
            "paragraph": "All the townspeople walked through the grand hall doors as the autumn storm began to roar across the northern shore. The tall clock tower struck four, and the mayor called the meeting to order with a firm knock of his wooden gavel on the council board. Outside, the cold rain fell in sheets against the tall stained glass walls, and fierce winds tore colorful dry leaves from the high oak boughs. Inside the warm hall, children played with a red rubber ball on the polished wooden floor, while their mothers talked in quiet tones near the stone hearth. An old sailor with a straw hat and a weathered face told thrilling stories of giant hawks that soared above stormy seas and brave ships that hauled heavy cargo across foreign waters. He drew intricate maps with a piece of chalk on a slate board, showing where tall lighthouses stood on jagged coastal shores to warn sailors of sunken rocks. The warmth of the hall, the aroma of spiced cider, and the comforting sound of friendly voices made everyone forget the raw chill of the outdoor storm, binding the small community together in mutual care and enduring peace. Paul stood by the tall hall door and watched the dawn break across the lawn. He heard a hawk call from the tall corn field. A farmer walked past with a strong horse carrying bags of golden corn. Paul walked along the lawn and saw a small bird draw water from a stone basin with its claw. Paul picked up a fork and walked back inside to enjoy a warm breakfast with his family. Always remember to practice reading this target sound by repeating these key words out loud: Door, Ball, Law, All, Walk, Talk. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "All the townspeople walked through the grand hall doors as the autumn storm began to roar across the northern shore.",
              "The tall clock tower struck four, and the mayor called the meeting to order with a firm knock of his wooden gavel on the council board.",
              "Outside, the cold rain fell in sheets against the tall stained glass walls, and fierce winds tore colorful dry leaves from the high oak boughs.",
              "Inside the warm hall, children played with a red rubber ball on the polished wooden floor, while their mothers talked in quiet tones near the stone hearth.",
              "An old sailor with a straw hat and a weathered face told thrilling stories of giant hawks that soared above stormy seas and brave ships that hauled heavy cargo across foreign waters.",
              "He drew intricate maps with a piece of chalk on a slate board, showing where tall lighthouses stood on jagged coastal shores to warn sailors of sunken rocks.",
              "The warmth of the hall, the aroma of spiced cider, and the comforting sound of friendly voices made everyone forget the raw chill of the outdoor storm, binding the small community together in mutual care and enduring peace.",
              "Paul stood by the tall hall door and watched the dawn break across the lawn.",
              "He heard a hawk call from the tall corn field.",
              "A farmer walked past with a strong horse carrying bags of golden corn.",
              "Paul walked along the lawn and saw a small bird draw water from a stone basin with its claw.",
              "Paul picked up a fork and walked back inside to enjoy a warm breakfast with his family.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Door, Ball, Law, All, Walk, Talk.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 338,
            "mouthShape": "rounded_lips",
            "mouthBadge": "⭕ होंठ छोटे वृत्त में गोल + आगे निकले हुए",
            "mouthGuide": "होंठों को एक छोटे सिक्के या पाइप की तरह आगे निकालकर गोल करें। जीभ को पीछे खींचें। आवाज़ को गहरी और लंबी खींचें — 'ऑऑ' (जैसे Call, Door, More)।",
            "anchor": {
              "word": "Door",
              "hindi": "डोर",
              "meaning": "दरवाज़ा",
              "icon": "🚪"
            }
          },
          {
            "symbol": "/uː/",
            "label": "Long OO",
            "hindiApprox": "ऊ (बड़ा, खिंचा हुआ)",
            "tip": "हिंदी की बड़ी 'ऊ' — Food, Blue, Moon में",
            "words": [
              {
                "w": "Food",
                "h": "फ़ूड",
                "m": "खाना"
              },
              {
                "w": "Blue",
                "h": "ब्लू",
                "m": "नीला"
              },
              {
                "w": "Moon",
                "h": "मून",
                "m": "चांद"
              },
              {
                "w": "Boot",
                "h": "बूट",
                "m": "जूता"
              },
              {
                "w": "School",
                "h": "स्कूल",
                "m": "विद्यालय"
              },
              {
                "w": "Fruit",
                "h": "फ्रूट",
                "m": "फल"
              }
            ],
            "paragraph": "The silver moon shone bright and cool over the calm blue lagoon as the midnight breeze stirred the blooming bamboo shoots. A group of happy youth from the village school gathered around a crackling campfire by the pool, singing sweet tunes under the starry sky. They had spent the long afternoon exploring the deep forest trails, wearing sturdy boots and carrying packs full of sweet fresh fruit and cool mountain water. An old musician played a smooth melodious tune on a silver flute, filling the quiet night with magical notes that seemed to soothe every weary soul. High above in the palm canopy, a pair of owls called softly to each other in the gentle moonlit gloom. A troop of harmless fruit bats swooped across the blue surface of the pool, catching tiny insects in the cool evening air. The youngsters shared roasted sweet corn and juicy melon slices, laughing together as they planned their next exciting trip into the wild mountain pass. When the fire began to burn down to a gentle bed of ruby embers, they rolled out their warm sleeping bags under the shelter of a giant teak tree, drifting into peaceful slumber beneath the benevolent smile of the silvery moon. Sue stepped into the cool room and put on her smooth blue boots. She packed delicious food in her lunch box before walking to school. Outside, the full moon shone like a silver jewel over the blue pool. A gentle goose flew over the roof toward the city zoo. Sue smiled as she stepped onto the smooth path, glad to spend a cool morning learning new skills at school with her friendly group. Always remember to practice reading this target sound by repeating these key words out loud: Food, Blue, Moon, Boot, School, Fruit. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "The silver moon shone bright and cool over the calm blue lagoon as the midnight breeze stirred the blooming bamboo shoots.",
              "A group of happy youth from the village school gathered around a crackling campfire by the pool, singing sweet tunes under the starry sky.",
              "They had spent the long afternoon exploring the deep forest trails, wearing sturdy boots and carrying packs full of sweet fresh fruit and cool mountain water.",
              "An old musician played a smooth melodious tune on a silver flute, filling the quiet night with magical notes that seemed to soothe every weary soul.",
              "High above in the palm canopy, a pair of owls called softly to each other in the gentle moonlit gloom.",
              "A troop of harmless fruit bats swooped across the blue surface of the pool, catching tiny insects in the cool evening air.",
              "The youngsters shared roasted sweet corn and juicy melon slices, laughing together as they planned their next exciting trip into the wild mountain pass.",
              "When the fire began to burn down to a gentle bed of ruby embers, they rolled out their warm sleeping bags under the shelter of a giant teak tree, drifting into peaceful slumber beneath the benevolent smile of the silvery moon.",
              "Sue stepped into the cool room and put on her smooth blue boots.",
              "She packed delicious food in her lunch box before walking to school.",
              "Outside, the full moon shone like a silver jewel over the blue pool.",
              "A gentle goose flew over the roof toward the city zoo.",
              "Sue smiled as she stepped onto the smooth path, glad to spend a cool morning learning new skills at school with her friendly group.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Food, Blue, Moon, Boot, School, Fruit.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 345,
            "mouthShape": "rounded_lips",
            "mouthBadge": "🎯 होंठ बहुत छोटे वृत्त में कसकर गोल (सीटी जैसी स्थिति)",
            "mouthGuide": "होंठों को कसकर आगे की ओर गोल करें जैसे मोमबत्ती बुझा रहे हों। जीभ का पिछला हिस्सा तालु के पास ऊपर उठेगा। आवाज़ को लंबा खींचें — 'ऊऊ' (जैसे Moon, Food, Cool)।",
            "anchor": {
              "word": "Moon",
              "hindi": "मून",
              "meaning": "चाँद",
              "icon": "🌙"
            }
          },
          {
            "symbol": "/ɜː/",
            "label": "Long ER / IR / UR",
            "hindiApprox": "अर (गले से, R के बिना)",
            "tip": "हिंदी में कोई सीधा समकक्ष नहीं — Bird, Turn, Her में",
            "words": [
              {
                "w": "Bird",
                "h": "बर्ड",
                "m": "पक्षी"
              },
              {
                "w": "Turn",
                "h": "टर्न",
                "m": "मुड़ना"
              },
              {
                "w": "Her",
                "h": "हर",
                "m": "उसका"
              },
              {
                "w": "First",
                "h": "फ़र्स्ट",
                "m": "पहला"
              },
              {
                "w": "Fern",
                "h": "फ़र्न",
                "m": "एक पौधा"
              },
              {
                "w": "Burn",
                "h": "बर्न",
                "m": "जलना"
              }
            ],
            "paragraph": "A gentle young girl named Shirley stood in the green fern garden, watching a tiny brown bird chirp merrily on the third branch of an old birch tree. Shirley wore a neat purple skirt and a clean white shirt, and her dark curly hair was tied back with a soft golden ribbon. She was the first student in her class to earn a silver badge for her splendid research on forest herbs and woodland birds. Her teacher, Mr. Turner, walked across the lawn to inspect the medicinal plants that Shirley had nurtured from tiny seeds. \"You have done wonderful work, Shirley,\" Mr. Turner said with an encouraging smile. \"These green ferns and flowering herbs will help many sick people regain their strength and health.\" Shirley's heart surged with pride and joy. She gently stirred the soil around a rare purple orchid with a small wooden trowel, making sure the thirsty roots received plenty of fresh water. As the evening bell chimed from the church tower across the hill, a flock of twenty wild starlings whirled in perfect harmony across the sky, returning to their roosts in the tall fir trees, while Shirley carefully closed the garden gate with a thankful and contented heart. The young girl wearing a purple skirt sat under a birch tree to watch the first bird chirp. Her mother was a dedicated nurse who worked at the central clinic. The girl learned to stir the warm broth in the pot without burning her fingers. She gave her little sister a warm fur blanket when the evening turned chill. It was the girl's third birthday, and she felt proud to learn how to read every word with care. Always remember to practice reading this target sound by repeating these key words out loud: Bird, Turn, Her, First, Fern, Burn. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "A gentle young girl named Shirley stood in the green fern garden, watching a tiny brown bird chirp merrily on the third branch of an old birch tree.",
              "Shirley wore a neat purple skirt and a clean white shirt, and her dark curly hair was tied back with a soft golden ribbon.",
              "She was the first student in her class to earn a silver badge for her splendid research on forest herbs and woodland birds.",
              "Her teacher, Mr.",
              "Turner, walked across the lawn to inspect the medicinal plants that Shirley had nurtured from tiny seeds.",
              "\"You have done wonderful work, Shirley,\" Mr.",
              "Turner said with an encouraging smile.",
              "\"These green ferns and flowering herbs will help many sick people regain their strength and health.\" Shirley's heart surged with pride and joy.",
              "She gently stirred the soil around a rare purple orchid with a small wooden trowel, making sure the thirsty roots received plenty of fresh water.",
              "As the evening bell chimed from the church tower across the hill, a flock of twenty wild starlings whirled in perfect harmony across the sky, returning to their roosts in the tall fir trees, while Shirley carefully closed the garden gate with a thankful and contented heart.",
              "The young girl wearing a purple skirt sat under a birch tree to watch the first bird chirp.",
              "Her mother was a dedicated nurse who worked at the central clinic.",
              "The girl learned to stir the warm broth in the pot without burning her fingers.",
              "She gave her little sister a warm fur blanket when the evening turned chill.",
              "It was the girl's third birthday, and she felt proud to learn how to read every word with care.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Bird, Turn, Her, First, Fern, Burn.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 349,
            "mouthShape": "wide_smile",
            "mouthBadge": "😐 होंठ न्यूट्रल + जीभ बीच में हवा में (अर)",
            "mouthGuide": "होंठों को आधा खुला रखें। जीभ को पीछे मोड़कर मुंह के बीच में बिना किसी चीज़ को छुए रखें। आवाज़ गले से गहरी और खिंची हुई निकलेगी — 'अर्र' (जैसे Bird, Girl, First)।",
            "anchor": {
              "word": "Bird",
              "hindi": "बर्ड",
              "meaning": "चिड़िया",
              "icon": "🐦"
            }
          }
        ]
      },
      {
        "id": "ph_diphthongs",
        "name": "दो-ध्वनि Vowels — 8 Diphthongs (Gliding Vowels)",
        "icon": "🟠",
        "desc": "2 ध्वनियों का मेल — एक से दूसरी में सरकती हुई आवाज़",
        "phonemes": [
          {
            "symbol": "/eɪ/",
            "label": "AY / AI — (ए→इ)",
            "hindiApprox": "ए-इ (ए से इ में सरकना)",
            "tip": "Day, Rain, Face — 'ए' बोलो और फिर 'इ' में सरको",
            "words": [
              {
                "w": "Day",
                "h": "डे",
                "m": "दिन"
              },
              {
                "w": "Rain",
                "h": "रेन",
                "m": "बारिश"
              },
              {
                "w": "Face",
                "h": "फ़ेस",
                "m": "चेहरा"
              },
              {
                "w": "Game",
                "h": "गेम",
                "m": "खेल"
              },
              {
                "w": "Train",
                "h": "ट्रेन",
                "m": "रेलगाड़ी"
              },
              {
                "w": "Paint",
                "h": "पेंट",
                "m": "रंग"
              }
            ],
            "paragraph": "One rainy day in May, young Ray sat by the bay window of his gray stone cottage, watching the heavy rain fall on the green lawn. A long passenger train steamed past the railway station on the iron tracks, blowing its loud whistle as it crossed the river bridge. Ray had a grand wooden easel and a palette of bright oil paint set up in his study. He dipped his fine brush into shades of slate, pale blue, and amber to create a beautiful painting of a sailing boat navigating stormy ocean waves. His mother came into the room carrying a silver tray with warm baked cakes, a slice of date bread, and a cup of fragrant tea. \"Take a break, Ray,\" she said with a gentle smile. \"Your painting is shaping up to be a true masterpiece, but you must rest your tired eyes.\" Ray placed his brush on the tray, took a warm cake, and looked out at the garden gate. The dark rain clouds were already beginning to break away, letting beams of golden late-afternoon sunlight bathe the wet rose petals in a warm glow. A bright rainbow arched gracefully across the eastern sky, promising fair weather and joyful games for the coming day. Ray and May waited patiently at the train station as the gray train pulled into the bay. They were on their way to a holiday game in the neighboring city. May held a delicious tray of baked cakes and sweet grape jam. Ray paid for the train tickets and found a great seat by the glass window. The train began to sway along the rails as the rain stopped and bright daylight warmed the bay. Always remember to practice reading this target sound by repeating these key words out loud: Day, Rain, Face, Game, Train, Paint. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "One rainy day in May, young Ray sat by the bay window of his gray stone cottage, watching the heavy rain fall on the green lawn.",
              "A long passenger train steamed past the railway station on the iron tracks, blowing its loud whistle as it crossed the river bridge.",
              "Ray had a grand wooden easel and a palette of bright oil paint set up in his study.",
              "He dipped his fine brush into shades of slate, pale blue, and amber to create a beautiful painting of a sailing boat navigating stormy ocean waves.",
              "His mother came into the room carrying a silver tray with warm baked cakes, a slice of date bread, and a cup of fragrant tea.",
              "\"Take a break, Ray,\" she said with a gentle smile.",
              "\"Your painting is shaping up to be a true masterpiece, but you must rest your tired eyes.\" Ray placed his brush on the tray, took a warm cake, and looked out at the garden gate.",
              "The dark rain clouds were already beginning to break away, letting beams of golden late-afternoon sunlight bathe the wet rose petals in a warm glow.",
              "A bright rainbow arched gracefully across the eastern sky, promising fair weather and joyful games for the coming day.",
              "Ray and May waited patiently at the train station as the gray train pulled into the bay.",
              "They were on their way to a holiday game in the neighboring city.",
              "May held a delicious tray of baked cakes and sweet grape jam.",
              "Ray paid for the train tickets and found a great seat by the glass window.",
              "The train began to sway along the rails as the rain stopped and bright daylight warmed the bay.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Day, Rain, Face, Game, Train, Paint.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 350,
            "mouthShape": "wide_smile",
            "mouthBadge": "😃 'ए' से शुरू होकर 'इ' पर मुस्कान (ग्लाइड)",
            "mouthGuide": "मुंह को पहले आधे खुले 'ए' पर रखें, फिर बोलते-बोलते होंठों को चौड़ा करके मुस्कान ('इ') पर ले जाएं — 'ए-इ' (जैसे Day, Say, Game)।",
            "anchor": {
              "word": "Cake",
              "hindi": "केक",
              "meaning": "केक",
              "icon": "🎂"
            }
          },
          {
            "symbol": "/aɪ/",
            "label": "AI / IGH — (आ→इ)",
            "hindiApprox": "आ-इ (आ से इ में सरकना)",
            "tip": "My, High, Time — 'आ' बोलो और फिर 'इ' में सरको",
            "words": [
              {
                "w": "My",
                "h": "माइ",
                "m": "मेरा"
              },
              {
                "w": "High",
                "h": "हाइ",
                "m": "ऊंचा"
              },
              {
                "w": "Time",
                "h": "टाइम",
                "m": "समय"
              },
              {
                "w": "Kite",
                "h": "काइट",
                "m": "पतंग"
              },
              {
                "w": "Night",
                "h": "नाइट",
                "m": "रात"
              },
              {
                "w": "Prize",
                "h": "प्राइज़",
                "m": "इनाम"
              }
            ],
            "paragraph": "On a bright and clear night in July, young Mike climbed to the high hilltop behind his grandfather's farm to fly a diamond-shaped kite decorated with silver lights. The night sky was filled with countless shining stars that seemed to smile down upon the quiet countryside. Mike's grandfather, a wise old man with kind eyes and a gentle smile, walked by his side, carrying a warm wool blanket and a brass lantern. They sat together on the dry pine needles, gazing up at the bright moon as it climbed higher into the velvet night. \"Look, Mike,\" his grandfather whispered, pointing a weathered finger toward the northern horizon. \"Do you see that bright white light? That is the North Star, which has guided brave travelers and sailors across uncharted seas for thousands of years.\" Mike held the strong kite line tight in his right hand, feeling the gentle tug of the evening wind as the kite danced gracefully among the shadows. It was a sublime night of peaceful wonder and deep family affection, a cherished memory that Mike knew he would treasure throughout his entire life. Mike rode his bike up the high hillside as the bright night sky filled with stars. A white kite flew high above the pines in the gentle breeze. Mike smiled with delight as he saw the golden city lights shine below. It was the right time to fly a kite and enjoy the quiet night. Mike stopped his bike by the white fence and admired the wide view with a happy sigh. Always remember to practice reading this target sound by repeating these key words out loud: My, High, Time, Kite, Night, Prize. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "On a bright and clear night in July, young Mike climbed to the high hilltop behind his grandfather's farm to fly a diamond-shaped kite decorated with silver lights.",
              "The night sky was filled with countless shining stars that seemed to smile down upon the quiet countryside.",
              "Mike's grandfather, a wise old man with kind eyes and a gentle smile, walked by his side, carrying a warm wool blanket and a brass lantern.",
              "They sat together on the dry pine needles, gazing up at the bright moon as it climbed higher into the velvet night.",
              "\"Look, Mike,\" his grandfather whispered, pointing a weathered finger toward the northern horizon.",
              "\"Do you see that bright white light?",
              "That is the North Star, which has guided brave travelers and sailors across uncharted seas for thousands of years.\" Mike held the strong kite line tight in his right hand, feeling the gentle tug of the evening wind as the kite danced gracefully among the shadows.",
              "It was a sublime night of peaceful wonder and deep family affection, a cherished memory that Mike knew he would treasure throughout his entire life.",
              "Mike rode his bike up the high hillside as the bright night sky filled with stars.",
              "A white kite flew high above the pines in the gentle breeze.",
              "Mike smiled with delight as he saw the golden city lights shine below.",
              "It was the right time to fly a kite and enjoy the quiet night.",
              "Mike stopped his bike by the white fence and admired the wide view with a happy sigh.",
              "Always remember to practice reading this target sound by repeating these key words out loud: My, High, Time, Kite, Night, Prize.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 325,
            "mouthShape": "jaw_drop",
            "mouthBadge": "😲 'आ' से शुरू होकर 'इ' पर बंद होना (आ-इ)",
            "mouthGuide": "पहले मुंह को बड़ा खोलकर 'आ' बोलें, फिर तुरंत जबड़े को ऊपर उठाते हुए होंठों को मुस्कुराते हुए 'इ' पर लाएं — 'आ-इ' (जैसे Time, High, Like)।",
            "anchor": {
              "word": "Kite",
              "hindi": "काइट",
              "meaning": "पतंग",
              "icon": "🪁"
            }
          },
          {
            "symbol": "/ɔɪ/",
            "label": "OY / OI — (ऑ→इ)",
            "hindiApprox": "ऑ-इ (ऑ से इ में सरकना)",
            "tip": "Boy, Coin, Toy — 'ऑ' बोलो और इ की तरफ़ सरको",
            "words": [
              {
                "w": "Boy",
                "h": "बॉय",
                "m": "लड़का"
              },
              {
                "w": "Coin",
                "h": "कॉइन",
                "m": "सिक्का"
              },
              {
                "w": "Toy",
                "h": "टॉय",
                "m": "खिलौना"
              },
              {
                "w": "Joy",
                "h": "जॉय",
                "m": "खुशी"
              },
              {
                "w": "Oil",
                "h": "ऑयल",
                "m": "तेल"
              },
              {
                "w": "Voice",
                "h": "वॉयस",
                "m": "आवाज़"
              }
            ],
            "paragraph": "A cheerful young boy named Roy found a shiny bronze coin half-buried in the moist soil beneath an ancient oak tree in his backyard. Roy picked up the old coin with wide eyes full of joy and wiped the dark soil away with the corner of his woolen jacket. The coin had an intricate carving of a royal lion and the mysterious initials of an ancient king. Roy ran to the wooden workshop where his uncle, a skilled mechanic, was oiling the gears of a vintage tractor engine. \"Look what I found in the garden soil, Uncle Troy!\" Roy shouted with an excited voice. Uncle Troy wiped his oily hands on a rag, took the bronze coin between his fingers, and examined it under the bright workshop lamp. \"Upon my word, Roy, you have made a remarkable choice of digging spots!\" Uncle Troy declared with a hearty chuckle. \"This is an authentic seventeenth-century merchant token, worth a handsome sum to any serious collector of antique relics.\" Roy jumped with delight, his heart brimming with boyish pride as he carefully placed his newly discovered treasure in a velvet pouch to show his classmates at school the following morning. The joyful boy Roy held a shiny silver coin in his hand as he played with his new wooden toy. Roy loved the sound of his mother's gentle voice calling him inside. His mother was boiling fresh water in a copper pot on the stove. Roy placed the coin safely inside his toy box. He felt so much joy when his brother joined him to point out the colorful birds in the garden. Always remember to practice reading this target sound by repeating these key words out loud: Boy, Coin, Toy, Joy, Oil, Voice. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "A cheerful young boy named Roy found a shiny bronze coin half-buried in the moist soil beneath an ancient oak tree in his backyard.",
              "Roy picked up the old coin with wide eyes full of joy and wiped the dark soil away with the corner of his woolen jacket.",
              "The coin had an intricate carving of a royal lion and the mysterious initials of an ancient king.",
              "Roy ran to the wooden workshop where his uncle, a skilled mechanic, was oiling the gears of a vintage tractor engine.",
              "\"Look what I found in the garden soil, Uncle Troy!\" Roy shouted with an excited voice.",
              "Uncle Troy wiped his oily hands on a rag, took the bronze coin between his fingers, and examined it under the bright workshop lamp.",
              "\"Upon my word, Roy, you have made a remarkable choice of digging spots!\" Uncle Troy declared with a hearty chuckle.",
              "\"This is an authentic seventeenth-century merchant token, worth a handsome sum to any serious collector of antique relics.\" Roy jumped with delight, his heart brimming with boyish pride as he carefully placed his newly discovered treasure in a velvet pouch to show his classmates at school the following morning.",
              "The joyful boy Roy held a shiny silver coin in his hand as he played with his new wooden toy.",
              "Roy loved the sound of his mother's gentle voice calling him inside.",
              "His mother was boiling fresh water in a copper pot on the stove.",
              "Roy placed the coin safely inside his toy box.",
              "He felt so much joy when his brother joined him to point out the colorful birds in the garden.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Boy, Coin, Toy, Joy, Oil, Voice.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 338,
            "mouthShape": "rounded_lips",
            "mouthBadge": "⭕ 'ऑ' (गोल होंठ) से 'इ' (मुस्कान) की ओर",
            "mouthGuide": "शुरुआत होंठों को गोल करके 'ऑ' से करें, फिर तुरंत होंठ फैलाकर मुस्कुराते हुए 'इ' पर आएं — 'ऑ-इ' (जैसे Boy, Coin, Voice)।",
            "anchor": {
              "word": "Boy",
              "hindi": "बॉय",
              "meaning": "लड़का",
              "icon": "👦"
            }
          },
          {
            "symbol": "/aʊ/",
            "label": "OW / OU — (आ→उ)",
            "hindiApprox": "आ-उ (आ से उ में सरकना)",
            "tip": "Cow, House, Out — 'आ' बोलो और उ की तरफ़ सरको",
            "words": [
              {
                "w": "Cow",
                "h": "काउ",
                "m": "गाय"
              },
              {
                "w": "House",
                "h": "हाउस",
                "m": "घर"
              },
              {
                "w": "Out",
                "h": "आउट",
                "m": "बाहर"
              },
              {
                "w": "Down",
                "h": "डाउन",
                "m": "नीचे"
              },
              {
                "w": "Town",
                "h": "टाउन",
                "m": "कस्बा"
              },
              {
                "w": "Loud",
                "h": "लाउड",
                "m": "तेज़ / शोर"
              }
            ],
            "paragraph": "A heavy brown cow stood peacefully beside a small stone house at the foot of a tall green mountain, chewing sweet alfalfa grass as the morning mist rolled down the valley. High above on the mountain slope, a flock of white clouds floated lazily across the bright blue sky. Inside the farmhouse, farmer Brown and his proud daughter were busy packing fifty pounds of fresh country cheese and golden butter into wooden crates to take to town. Suddenly, a loud barking sound echoed from the outer yard as their faithful sheepdog spotted an old brown owl perched quietly on the barn roof. Farmer Brown stepped out onto the porch, shaded his eyes with his hand, and shouted a reassuring call to calm the barking hound. The morning was alive with the delightful sounds of countryside life: roosters crowing, calves lowing in the lower pasture, and the gentle gurgle of a clear mountain brook rushing down over polished stones. By mid-morning, the wagon was fully loaded with fresh farm bounty, and farmer Brown set out along the winding gravel road toward the bustling market town, confident of another profitable and blessed day of honest labor. A round brown mouse ran out of the old stone house near the center of the town. Outside, a gentle cow rested on the ground under a fluffy white cloud. The brown mouse ran down the road and found a small pile of golden grain. The crowd in the town square shouted with joy as music sounded all around. The little mouse ran safely back into its house before the rain poured down. Always remember to practice reading this target sound by repeating these key words out loud: Cow, House, Out, Down, Town, Loud. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "A heavy brown cow stood peacefully beside a small stone house at the foot of a tall green mountain, chewing sweet alfalfa grass as the morning mist rolled down the valley.",
              "High above on the mountain slope, a flock of white clouds floated lazily across the bright blue sky.",
              "Inside the farmhouse, farmer Brown and his proud daughter were busy packing fifty pounds of fresh country cheese and golden butter into wooden crates to take to town.",
              "Suddenly, a loud barking sound echoed from the outer yard as their faithful sheepdog spotted an old brown owl perched quietly on the barn roof.",
              "Farmer Brown stepped out onto the porch, shaded his eyes with his hand, and shouted a reassuring call to calm the barking hound.",
              "The morning was alive with the delightful sounds of countryside life: roosters crowing, calves lowing in the lower pasture, and the gentle gurgle of a clear mountain brook rushing down over polished stones.",
              "By mid-morning, the wagon was fully loaded with fresh farm bounty, and farmer Brown set out along the winding gravel road toward the bustling market town, confident of another profitable and blessed day of honest labor.",
              "A round brown mouse ran out of the old stone house near the center of the town.",
              "Outside, a gentle cow rested on the ground under a fluffy white cloud.",
              "The brown mouse ran down the road and found a small pile of golden grain.",
              "The crowd in the town square shouted with joy as music sounded all around.",
              "The little mouse ran safely back into its house before the rain poured down.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Cow, House, Out, Down, Town, Loud.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 335,
            "mouthShape": "jaw_drop",
            "mouthBadge": "😲 'आ' (बड़ा मुंह) से 'उ' (गोल होंठ) की ओर",
            "mouthGuide": "पहले मुंह को बड़ा खोलकर 'आ' बोलें, फिर तुरंत होंठों को आगे लाकर गोल 'उ' बना लें — 'आ-उ' (जैसे Cow, Out, Loud)। चोट लगने पर जैसे 'आउ' बोलते हैं!",
            "anchor": {
              "word": "Cow",
              "hindi": "काउ",
              "meaning": "गाय",
              "icon": "🐄"
            }
          },
          {
            "symbol": "/oʊ/",
            "label": "GO / OW — (ओ→उ)",
            "hindiApprox": "ओ-उ",
            "tip": "Go, Home, Boat — 'ओ' बोलो और उ में सरको",
            "words": [
              {
                "w": "Go",
                "h": "गो",
                "m": "जाना"
              },
              {
                "w": "Home",
                "h": "होम",
                "m": "घर"
              },
              {
                "w": "Boat",
                "h": "बोट",
                "m": "नाव"
              },
              {
                "w": "Snow",
                "h": "स्नो",
                "m": "बर्फ़"
              },
              {
                "w": "Road",
                "h": "रोड",
                "m": "सड़क"
              },
              {
                "w": "Soap",
                "h": "सोप",
                "m": "साबुन"
              }
            ],
            "paragraph": "The old wooden boat drifted slowly down the calm winding river as the golden rays of the setting sun illuminated the snow-capped peaks in the distance. Old Joe sat comfortably in the stern of the boat, holding a long cedar oar in his weathered hands and smoking his pipe in peaceful repose. Along the river banks, tall willow branches bent low over the clear water, their green leaves glowing like polished jade in the late afternoon glow. A gentle evening breeze blew across the open meadows, carrying the sweet scent of wild honeysuckle and blooming clover. Joe guided the boat toward a small wooden dock near his cozy log home, where a plume of blue smoke rose gracefully from the stone chimney. His wife Rose was standing on the porch, holding a basket of fresh golden peaches and waving a cheerful welcome as the boat glided smoothly against the wooden pilings. Joe tied the mooring rope securely to a sturdy oak post, gathered his fishing creel and coat, and walked up the stone path to his warm fireside, thankful for another peaceful day spent upon the majestic waterways of his homeland. Joe put on his warm yellow coat and walked down the cold stone road toward his home. A gentle white snow began to blow over the frozen hills. Joe saw a yellow boat float quietly near the shore. There was no wind to rock the boat. Joe walked fast so that he could go home before dark. He opened the front door, feeling cozy as the warm stove glowed inside. Always remember to practice reading this target sound by repeating these key words out loud: Go, Home, Boat, Snow, Road, Soap. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "The old wooden boat drifted slowly down the calm winding river as the golden rays of the setting sun illuminated the snow-capped peaks in the distance.",
              "Old Joe sat comfortably in the stern of the boat, holding a long cedar oar in his weathered hands and smoking his pipe in peaceful repose.",
              "Along the river banks, tall willow branches bent low over the clear water, their green leaves glowing like polished jade in the late afternoon glow.",
              "A gentle evening breeze blew across the open meadows, carrying the sweet scent of wild honeysuckle and blooming clover.",
              "Joe guided the boat toward a small wooden dock near his cozy log home, where a plume of blue smoke rose gracefully from the stone chimney.",
              "His wife Rose was standing on the porch, holding a basket of fresh golden peaches and waving a cheerful welcome as the boat glided smoothly against the wooden pilings.",
              "Joe tied the mooring rope securely to a sturdy oak post, gathered his fishing creel and coat, and walked up the stone path to his warm fireside, thankful for another peaceful day spent upon the majestic waterways of his homeland.",
              "Joe put on his warm yellow coat and walked down the cold stone road toward his home.",
              "A gentle white snow began to blow over the frozen hills.",
              "Joe saw a yellow boat float quietly near the shore.",
              "There was no wind to rock the boat.",
              "Joe walked fast so that he could go home before dark.",
              "He opened the front door, feeling cozy as the warm stove glowed inside.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Go, Home, Boat, Snow, Road, Soap.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 329,
            "mouthShape": "rounded_lips",
            "mouthBadge": "⭕ 'ओ' से शुरू होकर 'उ' पर और छोटे गोल होंठ",
            "mouthGuide": "होंठों को मध्यम गोल करके 'ओ' से शुरू करें, और आवाज़ खत्म होते-होते होंठों को और छोटा गोल 'उ' बना दें — 'ओ-उ' (जैसे Go, No, Home)।",
            "anchor": {
              "word": "Boat",
              "hindi": "बोट",
              "meaning": "नाव",
              "icon": "⛵"
            }
          },
          {
            "symbol": "/ɪə/",
            "label": "EAR / HERE — (इ→अ)",
            "hindiApprox": "इ-अ (इ से अ में)",
            "tip": "Here, Ear, Near — 'ई' बोलो और 'अ' में हल्का सरको",
            "words": [
              {
                "w": "Here",
                "h": "हिअ",
                "m": "यहां"
              },
              {
                "w": "Ear",
                "h": "इअ",
                "m": "कान"
              },
              {
                "w": "Near",
                "h": "निअ",
                "m": "पास / नज़दीक"
              },
              {
                "w": "Deer",
                "h": "डिअ",
                "m": "हिरण"
              },
              {
                "w": "Fear",
                "h": "फ़िअ",
                "m": "डर"
              }
            ],
            "paragraph": "A young mountaineer stood near the sheer cliff edge of a high alpine ridge, breathing in the cold clear air with deep satisfaction. Far below in the green valley, the sound of church bells from a small mountain village reached his ear like sweet music carried upon the wind. A herd of wild deer grazed peacefully in a nearby meadow, completely free from fear as they nibbled the tender mountain grasses. The young climber adjusted his heavy backpack and checked his compass gear, making sure his route was clear before the shadow of evening settled across the rugged mountain pass. He had spent three rigorous years training for this difficult expedition, and every step brought him nearer to his cherished dream of reaching the highest summit in the entire continent. As he paused to drink pure spring water from his canteen, a cheerful mountain guide joined him on the rocky trail, greeting him with a warm handshake and words of genuine cheer. Together, the two brave mountaineers marched forward with resolute hearts, their spirits soaring higher with every passing kilometer beneath the wide azure canopy of the alpine sky. Near the old village chapel, clear water flowed through a small stone fountain. An elderly man with a gray beard stood here to hear the cheerful bells chime. He had lived here for many a year without any fear of the changing seasons. The man held his dear grandson's hand and pointed to a clear view of the mountain peak. Everyone cheered when the morning bells rang loud and clear. Always remember to practice reading this target sound by repeating these key words out loud: Here, Ear, Near, Deer, Fear. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "A young mountaineer stood near the sheer cliff edge of a high alpine ridge, breathing in the cold clear air with deep satisfaction.",
              "Far below in the green valley, the sound of church bells from a small mountain village reached his ear like sweet music carried upon the wind.",
              "A herd of wild deer grazed peacefully in a nearby meadow, completely free from fear as they nibbled the tender mountain grasses.",
              "The young climber adjusted his heavy backpack and checked his compass gear, making sure his route was clear before the shadow of evening settled across the rugged mountain pass.",
              "He had spent three rigorous years training for this difficult expedition, and every step brought him nearer to his cherished dream of reaching the highest summit in the entire continent.",
              "As he paused to drink pure spring water from his canteen, a cheerful mountain guide joined him on the rocky trail, greeting him with a warm handshake and words of genuine cheer.",
              "Together, the two brave mountaineers marched forward with resolute hearts, their spirits soaring higher with every passing kilometer beneath the wide azure canopy of the alpine sky.",
              "Near the old village chapel, clear water flowed through a small stone fountain.",
              "An elderly man with a gray beard stood here to hear the cheerful bells chime.",
              "He had lived here for many a year without any fear of the changing seasons.",
              "The man held his dear grandson's hand and pointed to a clear view of the mountain peak.",
              "Everyone cheered when the morning bells rang loud and clear.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Here, Ear, Near, Deer, Fear.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 326,
            "mouthShape": "wide_smile",
            "mouthBadge": "😊 'इ' (हल्की मुस्कान) से 'अ' (रिलैक्स मुंह) की ओर",
            "mouthGuide": "पहले 'इ' की स्थिति में होंठ हल्के फैलाएं, फिर जबड़े को ढीला छोड़कर 'अ' पर ले आएं — 'इ-अ' (जैसे Ear, Near, Hear)।",
            "anchor": {
              "word": "Ear",
              "hindi": "इअर",
              "meaning": "कान",
              "icon": "👂"
            }
          },
          {
            "symbol": "/eə/",
            "label": "AIR / CARE — (ए→अ)",
            "hindiApprox": "ए-अ",
            "tip": "Hair, Care, Bear — 'ए' बोलो और 'अ' में सरको",
            "words": [
              {
                "w": "Hair",
                "h": "हेअ",
                "m": "बाल"
              },
              {
                "w": "Care",
                "h": "केअ",
                "m": "देखभाल"
              },
              {
                "w": "Bear",
                "h": "बेअ",
                "m": "भालू"
              },
              {
                "w": "Share",
                "h": "शेअ",
                "m": "बांटना"
              },
              {
                "w": "Fair",
                "h": "फ़ेअ",
                "m": "उचित / मेला"
              }
            ],
            "paragraph": "Fair-haired Claire sat on a polished wooden chair on the wide veranda of her country home, carefully combing her long brown hair as she watched her children play in the garden square below. The afternoon air was delightfully mild, filled with the sweet fragrance of blooming lavender and ripe Bartlett pears. In the grassy courtyard, two young boys were taking turns riding a gentle brown mare, learning to share the saddle with mutual fairness and affectionate care. Their father, a respected physician who cared deeply for every family in the district, was preparing a basket of fresh vegetables and garden herbs to take to an elderly neighbor who lived down the lane. \"Please take good care on the steep stairs, children,\" Claire called out with a warm maternal smile. \"We must depart for the village fair in half an hour, so wash your hands and put on your clean shoes.\" The children cheered with delight, for the annual autumn fair was the most exciting event of the season, filled with thrilling games, delicious gingerbread, and colorful musical parades that brought joy to every young heart in the countryside. Claire sat on an armchair in the sunroom and brushed her long brown hair with gentle care. Outside the window, people were walking to the county fair with colorful balloons. A mother bear rested peacefully with her small cub in the wildlife park. Claire decided to share a sweet ripe pear with her friend. They took good care of each other and enjoyed the fresh morning air together. Always remember to practice reading this target sound by repeating these key words out loud: Hair, Care, Bear, Share, Fair. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Fair-haired Claire sat on a polished wooden chair on the wide veranda of her country home, carefully combing her long brown hair as she watched her children play in the garden square below.",
              "The afternoon air was delightfully mild, filled with the sweet fragrance of blooming lavender and ripe Bartlett pears.",
              "In the grassy courtyard, two young boys were taking turns riding a gentle brown mare, learning to share the saddle with mutual fairness and affectionate care.",
              "Their father, a respected physician who cared deeply for every family in the district, was preparing a basket of fresh vegetables and garden herbs to take to an elderly neighbor who lived down the lane.",
              "\"Please take good care on the steep stairs, children,\" Claire called out with a warm maternal smile.",
              "\"We must depart for the village fair in half an hour, so wash your hands and put on your clean shoes.\" The children cheered with delight, for the annual autumn fair was the most exciting event of the season, filled with thrilling games, delicious gingerbread, and colorful musical parades that brought joy to every young heart in the countryside.",
              "Claire sat on an armchair in the sunroom and brushed her long brown hair with gentle care.",
              "Outside the window, people were walking to the county fair with colorful balloons.",
              "A mother bear rested peacefully with her small cub in the wildlife park.",
              "Claire decided to share a sweet ripe pear with her friend.",
              "They took good care of each other and enjoyed the fresh morning air together.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Hair, Care, Bear, Share, Fair.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 323,
            "mouthShape": "wide_smile",
            "mouthBadge": "😃 'ए' (आधा खुला मुंह) से 'अ' (रिलैक्स) की ओर",
            "mouthGuide": "मुंह को 'ए' के लिए खोलें, फिर बिना झटका दिए जबड़े को ढीला करके 'अ' पर छोड़ दें — 'ए-अ' (जैसे Air, Chair, Care)।",
            "anchor": {
              "word": "Chair",
              "hindi": "चेअर",
              "meaning": "कुर्सी",
              "icon": "🪑"
            }
          },
          {
            "symbol": "/ʊə/",
            "label": "TOUR / SURE — (उ→अ)",
            "hindiApprox": "उ-अ",
            "tip": "Tour, Pure, Sure — 'उ' बोलो और 'अ' में सरको",
            "words": [
              {
                "w": "Tour",
                "h": "टुअ",
                "m": "यात्रा"
              },
              {
                "w": "Pure",
                "h": "प्युअ",
                "m": "शुद्ध"
              },
              {
                "w": "Sure",
                "h": "शुअ",
                "m": "निश्चित"
              },
              {
                "w": "Cure",
                "h": "क्युअ",
                "m": "इलाज"
              }
            ],
            "paragraph": "A group of adventurous travelers embarked on an extensive cultural tour through the remote and picturesque valleys of northern Scotland. The air was remarkably pure, untouched by the smoky pollution of modern industrial cities, and the rugged landscape possessed an alluring grandeur that captivated every tourist in the party. Their experienced guide, a mature Scotsman with a deep knowledge of highland folklore, led them along ancient stone trails that had endured for over a thousand years. He pointed out the historic ruins of a medieval fortress perched high upon a rocky crag, explaining how brave highland clans had fought with fierce determination to secure their freedom and protect their cherished way of life. The visitors listened with rapt attention, their curiosity stimulated by the romantic tales of chivalry, honor, and enduring loyalty that resonated through every glen and moor. As the afternoon sun bathed the purple heather in a warm golden luster, the travelers took countless photographs of the breathtaking panoramic vistas, fully assured that the memories of this extraordinary Highland journey would remain securely etched within their hearts for decades to come. The tour guide led the small group through the pure mountain valley. He made sure that every traveler had a secure walking stick and warm boots. The pure water of the mountain stream was crystal clear. A poor village farmer offered them fresh herbal tea to help cure their tired feet. The guide felt sure that this peaceful tour would bring long lasting health and pure happiness to everyone. Always remember to practice reading this target sound by repeating these key words out loud: Tour, Pure, Sure, Cure. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "A group of adventurous travelers embarked on an extensive cultural tour through the remote and picturesque valleys of northern Scotland.",
              "The air was remarkably pure, untouched by the smoky pollution of modern industrial cities, and the rugged landscape possessed an alluring grandeur that captivated every tourist in the party.",
              "Their experienced guide, a mature Scotsman with a deep knowledge of highland folklore, led them along ancient stone trails that had endured for over a thousand years.",
              "He pointed out the historic ruins of a medieval fortress perched high upon a rocky crag, explaining how brave highland clans had fought with fierce determination to secure their freedom and protect their cherished way of life.",
              "The visitors listened with rapt attention, their curiosity stimulated by the romantic tales of chivalry, honor, and enduring loyalty that resonated through every glen and moor.",
              "As the afternoon sun bathed the purple heather in a warm golden luster, the travelers took countless photographs of the breathtaking panoramic vistas, fully assured that the memories of this extraordinary Highland journey would remain securely etched within their hearts for decades to come.",
              "The tour guide led the small group through the pure mountain valley.",
              "He made sure that every traveler had a secure walking stick and warm boots.",
              "The pure water of the mountain stream was crystal clear.",
              "A poor village farmer offered them fresh herbal tea to help cure their tired feet.",
              "The guide felt sure that this peaceful tour would bring long lasting health and pure happiness to everyone.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Tour, Pure, Sure, Cure.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 318,
            "mouthShape": "rounded_lips",
            "mouthBadge": "⭕ 'उ' (गोल होंठ) से 'अ' (खुला मुंह) की ओर",
            "mouthGuide": "होंठों को हल्का गोल करके 'उ' से शुरू करें, फिर होंठों को ढीला छोड़कर 'अ' पर आएं — 'उ-अ' (जैसे Tour, Sure, Pure)।",
            "anchor": {
              "word": "Tour",
              "hindi": "टुअर",
              "meaning": "यात्रा",
              "icon": "🧳"
            }
          }
        ]
      },
      {
        "id": "ph_consonants",
        "name": "व्यंजन ध्वनियां — 24 Consonant Sounds",
        "icon": "🔴",
        "desc": "24 व्यंजन ध्वनियां — रोकावट से बनने वाली आवाज़ें",
        "phonemes": [
          {
            "symbol": "/p/",
            "label": "P — प",
            "hindiApprox": "प",
            "tip": "होंठ बंद, हल्की हवा के साथ खोलें",
            "words": [
              {
                "w": "Pen",
                "h": "पेन",
                "m": "कलम"
              },
              {
                "w": "Park",
                "h": "पार्क",
                "m": "बगीचा"
              },
              {
                "w": "Plant",
                "h": "प्लांट",
                "m": "पौधा"
              },
              {
                "w": "Happy",
                "h": "हैप्पी",
                "m": "खुश"
              },
              {
                "w": "Cup",
                "h": "कप",
                "m": "प्याला"
              }
            ],
            "paragraph": "Peter picked up his heavy canvas pack and set out along the peaceful path that led through the public park to the harbor pier. The morning air was pleasantly crisp, and playful puppies were romping across the green lawns, chasing colorful rubber balls with joyful barks. Peter had a pocketful of crisp copper pennies and a package of fresh butter pastries that his mother had packed for his journey. He stopped by the lily pond to watch purple and gold dragonflies swoop over the sparkling water pads. A pair of domestic ducks paddled happily toward the bank, hoping Peter might drop a piece of bread crust into the pond. Peter smiled, broke off a small portion of his pastry, and tossed it to the eager waterfowl before proceeding up the gentle slope toward the town square. In the marketplace, merchants were busily putting up their striped canvas stalls, arranging polished apples, purple plums, and fresh garden peppers in neat wooden bins. Peter met his companion Paul near the post office steps, and together they made rapid progress toward the harbor, ready to help unload crates of imported pottery and fine print paper from the merchant vessel that had docked at the pier at the break of dawn. Peter the painter picked up a purple pencil to draw a picture of a playful puppy. The puppy jumped over a plastic pot and landed on a soft paper pad. Peter gave the puppy a crisp piece of apple and a warm bowl of soup. Peter was proud to paint such a pretty picture. He packed his pencils and stepped out to the park to practice reading under the pine trees. Always remember to practice reading this target sound by repeating these key words out loud: Pen, Park, Plant, Happy, Cup. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Peter picked up his heavy canvas pack and set out along the peaceful path that led through the public park to the harbor pier.",
              "The morning air was pleasantly crisp, and playful puppies were romping across the green lawns, chasing colorful rubber balls with joyful barks.",
              "Peter had a pocketful of crisp copper pennies and a package of fresh butter pastries that his mother had packed for his journey.",
              "He stopped by the lily pond to watch purple and gold dragonflies swoop over the sparkling water pads.",
              "A pair of domestic ducks paddled happily toward the bank, hoping Peter might drop a piece of bread crust into the pond.",
              "Peter smiled, broke off a small portion of his pastry, and tossed it to the eager waterfowl before proceeding up the gentle slope toward the town square.",
              "In the marketplace, merchants were busily putting up their striped canvas stalls, arranging polished apples, purple plums, and fresh garden peppers in neat wooden bins.",
              "Peter met his companion Paul near the post office steps, and together they made rapid progress toward the harbor, ready to help unload crates of imported pottery and fine print paper from the merchant vessel that had docked at the pier at the break of dawn.",
              "Peter the painter picked up a purple pencil to draw a picture of a playful puppy.",
              "The puppy jumped over a plastic pot and landed on a soft paper pad.",
              "Peter gave the puppy a crisp piece of apple and a warm bowl of soup.",
              "Peter was proud to paint such a pretty picture.",
              "He packed his pencils and stepped out to the park to practice reading under the pine trees.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Pen, Park, Plant, Happy, Cup.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 345,
            "mouthShape": "lips_closed",
            "mouthBadge": "👄 दोनों होंठ बंद + हवा का तेज़ झटका (No Voice)",
            "mouthGuide": "दोनों होंठों को कसकर बंद करें। अंदर हवा का दबाव बनाएं और बिना गले की आवाज़ के झटके से होंठ खोलें — 'प'। हाथ मुंह के आगे रखें तो तेज़ ठंडी हवा लगेगी!",
            "anchor": {
              "word": "Pen",
              "hindi": "पेन",
              "meaning": "कलम",
              "icon": "🖊️"
            }
          },
          {
            "symbol": "/b/",
            "label": "B — ब",
            "hindiApprox": "ब",
            "tip": "होंठ बंद, कंपन के साथ खोलें",
            "words": [
              {
                "w": "Bag",
                "h": "बैग",
                "m": "थैला"
              },
              {
                "w": "Boat",
                "h": "बोट",
                "m": "नाव"
              },
              {
                "w": "Bird",
                "h": "बर्ड",
                "m": "पक्षी"
              },
              {
                "w": "Bike",
                "h": "बाइक",
                "m": "साइकिल"
              },
              {
                "w": "Job",
                "h": "जॉब",
                "m": "नौकरी"
              }
            ],
            "paragraph": "Ben's brave big brother Bob built a splendid blue wooden boat in the wide backyard behind their brick barn. Bob had spent three whole months bending sturdy oak ribs, hammering copper bolts, and applying coats of waterproof blue lacquer to make the vessel sea-worthy and beautiful. A friendly brown bear cub that lived in the nearby woodland preserve often peeked over the wooden boundary fence, curious about the rhythmic sounds of hammering and sawing. Little Ben loved to bring a bucket of cold spring water and a basket of butter biscuits to the workshop, eager to help his big brother with any task he could manage. When the fine boat was finally completed, Bob and Ben loaded it onto a sturdy horse-drawn wagon and transported it down to the sandy bay. A crowd of village boys gathered on the beach, cheering enthusiastically as Bob pushed the blue craft into the gentle ocean breakers. The boat floated beautifully upon the blue water, riding each crest like a majestic swan. Ben sat proudly in the bow seat, holding a bright yellow banner high in his hands, while Bob took the oars and rowed out into the sunlit harbor with a heart overflowing with triumphant fraternal pride. A brave little boy named Ben bounced a big blue ball across the green lawn. A brown bird hopped onto a wooden bench near the flower bed. Ben carried a heavy basket full of sweet black berries to his grandmother's house. His grandmother baked a warm batch of banana bread in the kitchen. Ben enjoyed the tasty bread and felt proud to help his family with their daily chores. Always remember to practice reading this target sound by repeating these key words out loud: Bag, Boat, Bird, Bike, Job. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Ben's brave big brother Bob built a splendid blue wooden boat in the wide backyard behind their brick barn.",
              "Bob had spent three whole months bending sturdy oak ribs, hammering copper bolts, and applying coats of waterproof blue lacquer to make the vessel sea-worthy and beautiful.",
              "A friendly brown bear cub that lived in the nearby woodland preserve often peeked over the wooden boundary fence, curious about the rhythmic sounds of hammering and sawing.",
              "Little Ben loved to bring a bucket of cold spring water and a basket of butter biscuits to the workshop, eager to help his big brother with any task he could manage.",
              "When the fine boat was finally completed, Bob and Ben loaded it onto a sturdy horse-drawn wagon and transported it down to the sandy bay.",
              "A crowd of village boys gathered on the beach, cheering enthusiastically as Bob pushed the blue craft into the gentle ocean breakers.",
              "The boat floated beautifully upon the blue water, riding each crest like a majestic swan.",
              "Ben sat proudly in the bow seat, holding a bright yellow banner high in his hands, while Bob took the oars and rowed out into the sunlit harbor with a heart overflowing with triumphant fraternal pride.",
              "A brave little boy named Ben bounced a big blue ball across the green lawn.",
              "A brown bird hopped onto a wooden bench near the flower bed.",
              "Ben carried a heavy basket full of sweet black berries to his grandmother's house.",
              "His grandmother baked a warm batch of banana bread in the kitchen.",
              "Ben enjoyed the tasty bread and felt proud to help his family with their daily chores.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Bag, Boat, Bird, Bike, Job.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 340,
            "mouthShape": "lips_closed",
            "mouthBadge": "👄 दोनों होंठ बंद + गले में कंपन (Voiced)",
            "mouthGuide": "दोनों होंठों को बंद करें। होंठ खोलते समय गले से आवाज़ निकालें — 'ब'। गले पर उंगली रखेंगे तो कंपन (vibration) महसूस होगी।",
            "anchor": {
              "word": "Ball",
              "hindi": "बॉल",
              "meaning": "गेंद",
              "icon": "⚽"
            }
          },
          {
            "symbol": "/t/",
            "label": "T — ट",
            "hindiApprox": "ट (हल्का)",
            "tip": "जीभ की नोक ऊपर दांतों के पीछे — हिंदी ट से हल्का",
            "words": [
              {
                "w": "Tea",
                "h": "टी",
                "m": "चाय"
              },
              {
                "w": "Tap",
                "h": "टैप",
                "m": "नल"
              },
              {
                "w": "Train",
                "h": "ट्रेन",
                "m": "रेलगाड़ी"
              },
              {
                "w": "Best",
                "h": "बेस्ट",
                "m": "सबसे अच्छा"
              },
              {
                "w": "Cat",
                "h": "कैट",
                "m": "बिल्ली"
              }
            ],
            "paragraph": "Tom took ten tall wooden tent poles and a roll of sturdy canvas to set up a spacious camp site beside the mountain torrent. The morning sun cast long triangular shadows across the forest floor as Tom worked with methodical precision, tightening each rope and driving steel pegs deep into the firm earth. His little sister Tina helped by carrying light wooden tent pegs and setting a copper kettle on a flat stone hearth near the stream. A team of twenty wild turkeys trotted silently through the distant tall timber, their dark feathers glistening with bronze tints in the early light. Tom lit a small campfire with dry birch twigs, boiled fresh water for herbal tea, and toasted thick slices of sweet country bread on a wire grill. As they sat together on a fallen log, Tina pointed toward the eastern ridge where a passenger train whistled as it crossed a high trestle bridge. Tom took out his pocket notebook and sketched the picturesque scene with careful pencil strokes, capturing the beauty of the tall pines, the rushing torrent, and the distant mountain peaks. It was a splendid autumn morning of honest toil and peaceful contentment that neither brother nor sister would ever forget. Tim set two tall tin cups on top of the wooden kitchen table. A tiny turtle walked slowly past the garden gate under the tall oak tree. Tim ate two hot toast slices with sweet strawberry jam. He checked the time on his pocket watch to make sure he was not late for his afternoon math test. Tim practiced reading ten new words until he could say every letter with total confidence. Always remember to practice reading this target sound by repeating these key words out loud: Tea, Tap, Train, Best, Cat. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Tom took ten tall wooden tent poles and a roll of sturdy canvas to set up a spacious camp site beside the mountain torrent.",
              "The morning sun cast long triangular shadows across the forest floor as Tom worked with methodical precision, tightening each rope and driving steel pegs deep into the firm earth.",
              "His little sister Tina helped by carrying light wooden tent pegs and setting a copper kettle on a flat stone hearth near the stream.",
              "A team of twenty wild turkeys trotted silently through the distant tall timber, their dark feathers glistening with bronze tints in the early light.",
              "Tom lit a small campfire with dry birch twigs, boiled fresh water for herbal tea, and toasted thick slices of sweet country bread on a wire grill.",
              "As they sat together on a fallen log, Tina pointed toward the eastern ridge where a passenger train whistled as it crossed a high trestle bridge.",
              "Tom took out his pocket notebook and sketched the picturesque scene with careful pencil strokes, capturing the beauty of the tall pines, the rushing torrent, and the distant mountain peaks.",
              "It was a splendid autumn morning of honest toil and peaceful contentment that neither brother nor sister would ever forget.",
              "Tim set two tall tin cups on top of the wooden kitchen table.",
              "A tiny turtle walked slowly past the garden gate under the tall oak tree.",
              "Tim ate two hot toast slices with sweet strawberry jam.",
              "He checked the time on his pocket watch to make sure he was not late for his afternoon math test.",
              "Tim practiced reading ten new words until he could say every letter with total confidence.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Tea, Tap, Train, Best, Cat.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 343,
            "mouthShape": "tongue_up",
            "mouthBadge": "👅 जीभ की नोक ऊपर के मसूड़े पर + हवा का कुरकुरा पफ",
            "mouthGuide": "जीभ की नोक को ऊपर के दांतों के ठीक पीछे मसूड़े (Ridge) पर मजबूती से चिपकाएं। फिर बिना गले की आवाज़ के सिर्फ कुरकुरी हवा छोड़ें — 'ट'। हिंदी के 'ट' जैसा जीभ पीछे नहीं मुड़ती!",
            "anchor": {
              "word": "Tiger",
              "hindi": "टाइगर",
              "meaning": "बाघ",
              "icon": "🐅"
            }
          },
          {
            "symbol": "/d/",
            "label": "D — ड",
            "hindiApprox": "ड (हल्का)",
            "tip": "T जैसी जगह, कंपन के साथ — हिंदी ड से हल्का",
            "words": [
              {
                "w": "Dog",
                "h": "डॉग",
                "m": "कुत्ता"
              },
              {
                "w": "Door",
                "h": "डोर",
                "m": "दरवाज़ा"
              },
              {
                "w": "Drum",
                "h": "ड्रम",
                "m": "ढोल"
              },
              {
                "w": "Bed",
                "h": "बेड",
                "m": "बिस्तर"
              },
              {
                "w": "Red",
                "h": "रेड",
                "m": "लाल"
              }
            ],
            "paragraph": "David and his devoted dog Duke strolled through the deep woods as the golden dawn painted the eastern sky in radiant shades of amber and rose. Duke was a handsome hound with dark curly fur and keen senses that could detect the presence of woodland creatures from a great distance. As they walked down the damp winding trail, David spotted a gentle mother deer and her spotted fawn drinking quietly from a cold woodland pond. David stood completely still, whispering a gentle command to keep Duke at his side, allowing the lovely creatures to drink their fill undisturbed before bounding gracefully into the protective cover of the dense undergrowth. Further down the trail, David stopped by an old cedar cabin where a friendly country doctor named Donald lived in peaceful retirement. Dr. Donald was tending his medicinal herb garden, digging up dandelion roots and pruning wild berry bushes along the perimeter fence. David gladly offered his assistance, spending the next two hours helping the kind doctor stack seasoned birch logs into a neat woodpile beside the kitchen door. The old physician rewarded David with a jar of wild dark honey and a warm loaf of sourdough bread, praising the young lad for his dependable character and generous heart. David walked through the front door with his friendly brown dog named Duke. Duke loved to dig in the garden dirt and run through the wide open field. David gave Duke a tasty red dish of food and fresh water. Outside, a flock of wild ducks landed near the deep pond. David sat at his wooden desk and opened his daily diary to write down everything he learned today. Always remember to practice reading this target sound by repeating these key words out loud: Dog, Door, Drum, Bed, Red. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "David and his devoted dog Duke strolled through the deep woods as the golden dawn painted the eastern sky in radiant shades of amber and rose.",
              "Duke was a handsome hound with dark curly fur and keen senses that could detect the presence of woodland creatures from a great distance.",
              "As they walked down the damp winding trail, David spotted a gentle mother deer and her spotted fawn drinking quietly from a cold woodland pond.",
              "David stood completely still, whispering a gentle command to keep Duke at his side, allowing the lovely creatures to drink their fill undisturbed before bounding gracefully into the protective cover of the dense undergrowth.",
              "Further down the trail, David stopped by an old cedar cabin where a friendly country doctor named Donald lived in peaceful retirement.",
              "Dr.",
              "Donald was tending his medicinal herb garden, digging up dandelion roots and pruning wild berry bushes along the perimeter fence.",
              "David gladly offered his assistance, spending the next two hours helping the kind doctor stack seasoned birch logs into a neat woodpile beside the kitchen door.",
              "The old physician rewarded David with a jar of wild dark honey and a warm loaf of sourdough bread, praising the young lad for his dependable character and generous heart.",
              "David walked through the front door with his friendly brown dog named Duke.",
              "Duke loved to dig in the garden dirt and run through the wide open field.",
              "David gave Duke a tasty red dish of food and fresh water.",
              "Outside, a flock of wild ducks landed near the deep pond.",
              "David sat at his wooden desk and opened his daily diary to write down everything he learned today.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Dog, Door, Drum, Bed, Red.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 344,
            "mouthShape": "tongue_up",
            "mouthBadge": "👅 जीभ मसूड़े पर + गले में गूंज (Voiced)",
            "mouthGuide": "जीभ की नोक ऊपर के मसूड़े पर लगाएं। जीभ हटाते समय गले से आवाज़ निकालें — 'ड'। गले में कंपन होगा।",
            "anchor": {
              "word": "Dog",
              "hindi": "डॉग",
              "meaning": "कुत्ता",
              "icon": "🐕"
            }
          },
          {
            "symbol": "/k/",
            "label": "K / C — क",
            "hindiApprox": "क",
            "tip": "गले के पीछे से साफ़ आवाज़",
            "words": [
              {
                "w": "Kite",
                "h": "काइट",
                "m": "पतंग"
              },
              {
                "w": "Cat",
                "h": "कैट",
                "m": "बिल्ली"
              },
              {
                "w": "Coat",
                "h": "कोट",
                "m": "कोट"
              },
              {
                "w": "Clock",
                "h": "क्लॉक",
                "m": "घड़ी"
              },
              {
                "w": "Book",
                "h": "बुक",
                "m": "किताब"
              }
            ],
            "paragraph": "The kind king walked through the grand castle courtyard on a crisp October morning, inspecting the preparations for the annual harvest festival. A flock of white carrier pigeons circled gracefully above the high stone battlements, their wings clapping softly in the clean morning air. The king wore a rich crimson coat with a heavy golden collar, and his keen eyes missed nothing as he greeted the market merchants and local craftsmen who had come to display their finest wares. In one corner of the courtyard, a skilled cooper was tightening iron hoops around sturdy oak casks filled with sweet cider and pickled cabbage. Nearby, a baker was removing trays of crusty rye bread and sweet honey cakes from a roaring brick kiln, filling the courtyard with an intoxicating aroma of baked grains. A group of excited village children sat on a wooden bench, watching a traveling puppeteer perform an amusing comedy about a brave knight who rescued a captured princess from a fierce mountain dragon. The king paused to watch the performance, laughing heartily along with the youngsters and tossing a handful of bright silver coins into the puppeteer's collection cap, ensuring that the festival began with joy and bounty for every resident in the realm. A clever black cat named Kitty climbed onto the high brick wall to look at the king's castle. The baker took a fresh chocolate cake out of the hot oven and placed it on the counter. A little kid came into the bakery with a copper coin in his hand. Kitty drank cool milk from a blue cup while the baker cut a thick slice of cake for the customer. Always remember to practice reading this target sound by repeating these key words out loud: Kite, Cat, Coat, Clock, Book. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "The kind king walked through the grand castle courtyard on a crisp October morning, inspecting the preparations for the annual harvest festival.",
              "A flock of white carrier pigeons circled gracefully above the high stone battlements, their wings clapping softly in the clean morning air.",
              "The king wore a rich crimson coat with a heavy golden collar, and his keen eyes missed nothing as he greeted the market merchants and local craftsmen who had come to display their finest wares.",
              "In one corner of the courtyard, a skilled cooper was tightening iron hoops around sturdy oak casks filled with sweet cider and pickled cabbage.",
              "Nearby, a baker was removing trays of crusty rye bread and sweet honey cakes from a roaring brick kiln, filling the courtyard with an intoxicating aroma of baked grains.",
              "A group of excited village children sat on a wooden bench, watching a traveling puppeteer perform an amusing comedy about a brave knight who rescued a captured princess from a fierce mountain dragon.",
              "The king paused to watch the performance, laughing heartily along with the youngsters and tossing a handful of bright silver coins into the puppeteer's collection cap, ensuring that the festival began with joy and bounty for every resident in the realm.",
              "A clever black cat named Kitty climbed onto the high brick wall to look at the king's castle.",
              "The baker took a fresh chocolate cake out of the hot oven and placed it on the counter.",
              "A little kid came into the bakery with a copper coin in his hand.",
              "Kitty drank cool milk from a blue cup while the baker cut a thick slice of cake for the customer.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Kite, Cat, Coat, Clock, Book.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 343,
            "mouthShape": "throat_breath",
            "mouthBadge": "🌬️ जीभ का पिछला हिस्सा तालु पर + हवा का झटका (No Voice)",
            "mouthGuide": "जीभ के पिछले हिस्से को ऊपर नरम तालु से चिपकाकर हवा रोकें, फिर एक सूखी कुरकुरी हवा का झटका छोड़ें — 'क'। गले से आवाज़ नहीं, सिर्फ हवा आएगी।",
            "anchor": {
              "word": "King",
              "hindi": "किंग",
              "meaning": "राजा",
              "icon": "👑"
            }
          },
          {
            "symbol": "/g/",
            "label": "G — ग",
            "hindiApprox": "ग",
            "tip": "K जैसी जगह, कंपन के साथ",
            "words": [
              {
                "w": "Go",
                "h": "गो",
                "m": "जाना"
              },
              {
                "w": "Game",
                "h": "गेम",
                "m": "खेल"
              },
              {
                "w": "Girl",
                "h": "गर्ल",
                "m": "लड़की"
              },
              {
                "w": "Bag",
                "h": "बैग",
                "m": "थैला"
              },
              {
                "w": "Dog",
                "h": "डॉग",
                "m": "कुत्ता"
              }
            ],
            "paragraph": "A cheerful young girl named Grace walked through the green valley garden carrying a large wooden basket filled with ripe green grapes and golden figs. Grace loved the morning hours when the grass was still wet with sparkling dew and the songbirds were singing glorious melodies in the orchard boughs. Her grandfather, a wise and good-natured farmer named Gregory, was working in the vegetable patch, digging up big garden potatoes and gathering heads of crisp cabbage for the village market. A friendly green frog hopped across the gravel garden path, leaping into the cool water of a stone fountain with a delightful splash. Grace chuckled with genuine glee, placed her heavy fruit basket on a wooden bench, and helped her grandfather gather bundles of fragrant green herbs, including rosemary, sage, and sweet basil. Farmer Gregory hugged his granddaughter warmly, thanking God for the abundance of the fertile soil and the gift of a loving family to share in the honest labor of the land. Together, they loaded the crates of fresh produce onto a green wooden wagon and set off toward the market town as the morning sun climbed gracefully into the clear blue sky. A gentle girl named Grace walked into the green garden with a big red watering can. Grace saw a tiny green grasshopper jump over a stone gate. She watered the sweet green grape vines that grew along the wooden fence. A friendly dog began to wag its tail when Grace gave it a piece of baked egg. Grace felt great joy seeing her garden grow green and healthy. Always remember to practice reading this target sound by repeating these key words out loud: Go, Game, Girl, Bag, Dog. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "A cheerful young girl named Grace walked through the green valley garden carrying a large wooden basket filled with ripe green grapes and golden figs.",
              "Grace loved the morning hours when the grass was still wet with sparkling dew and the songbirds were singing glorious melodies in the orchard boughs.",
              "Her grandfather, a wise and good-natured farmer named Gregory, was working in the vegetable patch, digging up big garden potatoes and gathering heads of crisp cabbage for the village market.",
              "A friendly green frog hopped across the gravel garden path, leaping into the cool water of a stone fountain with a delightful splash.",
              "Grace chuckled with genuine glee, placed her heavy fruit basket on a wooden bench, and helped her grandfather gather bundles of fragrant green herbs, including rosemary, sage, and sweet basil.",
              "Farmer Gregory hugged his granddaughter warmly, thanking God for the abundance of the fertile soil and the gift of a loving family to share in the honest labor of the land.",
              "Together, they loaded the crates of fresh produce onto a green wooden wagon and set off toward the market town as the morning sun climbed gracefully into the clear blue sky.",
              "A gentle girl named Grace walked into the green garden with a big red watering can.",
              "Grace saw a tiny green grasshopper jump over a stone gate.",
              "She watered the sweet green grape vines that grew along the wooden fence.",
              "A friendly dog began to wag its tail when Grace gave it a piece of baked egg.",
              "Grace felt great joy seeing her garden grow green and healthy.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Go, Game, Girl, Bag, Dog.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 330,
            "mouthShape": "throat_breath",
            "mouthBadge": "🔊 जीभ का पिछला हिस्सा तालु पर + गले से भारी आवाज़",
            "mouthGuide": "जीभ का पिछला हिस्सा ऊपर तालु से लगाएं और गले की गहराई से गूंजती हुई आवाज़ निकालें — 'ग'। गले में भारी कंपन होगा।",
            "anchor": {
              "word": "Goat",
              "hindi": "गोट",
              "meaning": "बकरी",
              "icon": "🐐"
            }
          },
          {
            "symbol": "/f/",
            "label": "F / PH — फ़",
            "hindiApprox": "फ़ (नुक्ते वाला)",
            "tip": "ऊपर के दांत निचले होंठ पर — Phone = फ़ोन भी!",
            "words": [
              {
                "w": "Fan",
                "h": "फ़ैन",
                "m": "पंखा"
              },
              {
                "w": "Fish",
                "h": "फ़िश",
                "m": "मछली"
              },
              {
                "w": "Phone",
                "h": "फ़ोन",
                "m": "फ़ोन"
              },
              {
                "w": "Photo",
                "h": "फ़ोटो",
                "m": "तस्वीर"
              },
              {
                "w": "Leaf",
                "h": "लीफ़",
                "m": "पत्ता"
              }
            ],
            "paragraph": "Frank was a faithful forest ranger who lived in a cozy wooden cabin near the foot of a magnificent pine forest. Every morning at dawn, Frank fastened his leather belt, put on his sturdy boots, and set out to inspect the trails and ensure that the wildlife remained free from harm. He had a fine pet falcon named Flash that perched on his leather-gloved forearm, its fierce golden eyes scanning the meadows for any sign of trouble. Frank carried a backpack containing field glasses, a first-aid kit, and a flask of cool mountain spring water. As he walked along the forest path, he saw four white-tailed deer feeding peacefully on fresh green ferns beneath a canopy of towering fir trees. A family of playful red foxes scampered across a fallen oak trunk, disappearing into the dense brush before Frank could draw closer. Frank stopped by a sparkling forest waterfall to record his observations in an official report, noting that the water levels were high and the woodland flora was flourishing with remarkable vigor. He felt profoundly fortunate to spend his life protecting these majestic forests, preserving their natural beauty and tranquil peace for future generations to cherish and enjoy. Frank the farmer walked across the green farm fields with his four loyal friends. The morning fog made the distant forest look soft and mysterious. Frank took a photo of a white calf standing near the wooden fence. Later, Frank picked up five fresh figs from the garden tree. He placed the sweet figs in a basket and walked home, feeling proud of his fruitful farm. Always remember to practice reading this target sound by repeating these key words out loud: Fan, Fish, Phone, Photo, Leaf. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Frank was a faithful forest ranger who lived in a cozy wooden cabin near the foot of a magnificent pine forest.",
              "Every morning at dawn, Frank fastened his leather belt, put on his sturdy boots, and set out to inspect the trails and ensure that the wildlife remained free from harm.",
              "He had a fine pet falcon named Flash that perched on his leather-gloved forearm, its fierce golden eyes scanning the meadows for any sign of trouble.",
              "Frank carried a backpack containing field glasses, a first-aid kit, and a flask of cool mountain spring water.",
              "As he walked along the forest path, he saw four white-tailed deer feeding peacefully on fresh green ferns beneath a canopy of towering fir trees.",
              "A family of playful red foxes scampered across a fallen oak trunk, disappearing into the dense brush before Frank could draw closer.",
              "Frank stopped by a sparkling forest waterfall to record his observations in an official report, noting that the water levels were high and the woodland flora was flourishing with remarkable vigor.",
              "He felt profoundly fortunate to spend his life protecting these majestic forests, preserving their natural beauty and tranquil peace for future generations to cherish and enjoy.",
              "Frank the farmer walked across the green farm fields with his four loyal friends.",
              "The morning fog made the distant forest look soft and mysterious.",
              "Frank took a photo of a white calf standing near the wooden fence.",
              "Later, Frank picked up five fresh figs from the garden tree.",
              "He placed the sweet figs in a basket and walked home, feeling proud of his fruitful farm.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Fan, Fish, Phone, Photo, Leaf.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 332,
            "mouthShape": "teeth_on_lip",
            "mouthBadge": "🦷 ऊपर के सामने वाले दांत नीचे के होंठ पर + सूखी हवा",
            "mouthGuide": "ऊपर के दो सामने वाले दांतों को नीचे के होंठ के अंदरूनी हिस्से पर हल्के से टिकाएं। दोनों के बीच से सिर्फ हवा बाहर फूंकें — 'फ़फ़फ़' (जैसे मोमबत्ती बुझा रहे हों)। गले में कोई कंपन नहीं होगा!",
            "anchor": {
              "word": "Fish",
              "hindi": "फ़िश",
              "meaning": "मछली",
              "icon": "🐟"
            }
          },
          {
            "symbol": "/v/",
            "label": "V — व (दांत लगाकर)",
            "hindiApprox": "व (नुक्ते वाला)",
            "tip": "⚠️ W से अलग! V में ऊपर के दांत निचले होंठ पर — Vine vs Wine",
            "words": [
              {
                "w": "Van",
                "h": "वैन",
                "m": "वैन"
              },
              {
                "w": "Voice",
                "h": "वॉयस",
                "m": "आवाज़"
              },
              {
                "w": "Five",
                "h": "फ़ाइव",
                "m": "पांच"
              },
              {
                "w": "Love",
                "h": "लव",
                "m": "प्यार"
              },
              {
                "w": "River",
                "h": "रिवर",
                "m": "नदी"
              }
            ],
            "paragraph": "Victor and his sister Valerie took an exciting vacation voyage to a scenic mountain village located in a lush green river valley. The village was famous for its vast vineyards, its vibrant cultural festivals, and the warm hospitality of its humble inhabitants. Victor drove their vehicle carefully along the steep and curvy mountain roads, marveling at the breathtaking panoramic views that unfolded at every turn. Down in the valley, the silver river wound its way gracefully through fertile pastures where herds of cattle grazed in peaceful contentment. When they arrived at the village square, they were greeted by the village mayor, who invited them to visit an ancient olive grove that had provided valuable oil for over five centuries. Valerie was captivated by the exquisite stone carvings on the local church, admiring the delicate artistic craftsmanship that had survived through centuries of varied fortunes. In the evening, the villagers gathered at a rustic tavern to enjoy festive violin music, delicious roasted chestnuts, and refreshing grape juice, sharing heartwarming stories of courage and enduring love that made Victor and Valerie feel instantly at home among these noble and virtuous people. Victor drove a large blue van along the winding river valley. Victor was a very kind driver who loved to visit five small villages every week. He delivered fresh vegetables and seven bags of rice to the village clinic. The villagers gave Victor a warm welcome and thanked him for his valuable service. Victor smiled with love in his heart as he viewed the sunset over the valley. Always remember to practice reading this target sound by repeating these key words out loud: Van, Voice, Five, Love, River. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Victor and his sister Valerie took an exciting vacation voyage to a scenic mountain village located in a lush green river valley.",
              "The village was famous for its vast vineyards, its vibrant cultural festivals, and the warm hospitality of its humble inhabitants.",
              "Victor drove their vehicle carefully along the steep and curvy mountain roads, marveling at the breathtaking panoramic views that unfolded at every turn.",
              "Down in the valley, the silver river wound its way gracefully through fertile pastures where herds of cattle grazed in peaceful contentment.",
              "When they arrived at the village square, they were greeted by the village mayor, who invited them to visit an ancient olive grove that had provided valuable oil for over five centuries.",
              "Valerie was captivated by the exquisite stone carvings on the local church, admiring the delicate artistic craftsmanship that had survived through centuries of varied fortunes.",
              "In the evening, the villagers gathered at a rustic tavern to enjoy festive violin music, delicious roasted chestnuts, and refreshing grape juice, sharing heartwarming stories of courage and enduring love that made Victor and Valerie feel instantly at home among these noble and virtuous people.",
              "Victor drove a large blue van along the winding river valley.",
              "Victor was a very kind driver who loved to visit five small villages every week.",
              "He delivered fresh vegetables and seven bags of rice to the village clinic.",
              "The villagers gave Victor a warm welcome and thanked him for his valuable service.",
              "Victor smiled with love in his heart as he viewed the sunset over the valley.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Van, Voice, Five, Love, River.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 324,
            "mouthShape": "teeth_on_lip",
            "mouthBadge": "🦷 ऊपर के दांत नीचे के होंठ पर + बिजली जैसा कंपन (Buzz)",
            "mouthGuide": "दांत नीचे के होंठ पर ही रहेंगे (जैसे F में था), लेकिन इस बार गले से आवाज़ निकालेंगे ताकि होंठ पर मोबाइल जैसी थरथराहट (vibration) महसूस हो — 'व'। V और W का अंतर यही है!",
            "anchor": {
              "word": "Van",
              "hindi": "वैन",
              "meaning": "गाड़ी",
              "icon": "🚐"
            }
          },
          {
            "symbol": "/θ/",
            "label": "TH (Thin) — थ",
            "hindiApprox": "थ (जीभ दांतों के बीच)",
            "tip": "⚠️ जीभ को ऊपर-नीचे दांतों के बीच हल्के से रखकर हवा बाहर फूंकें — Think, Three",
            "words": [
              {
                "w": "Think",
                "h": "थिंक",
                "m": "सोचना"
              },
              {
                "w": "Three",
                "h": "थ्री",
                "m": "तीन (3)"
              },
              {
                "w": "Thin",
                "h": "थिन",
                "m": "पतला"
              },
              {
                "w": "Thumb",
                "h": "थम",
                "m": "अंगूठा"
              },
              {
                "w": "Bath",
                "h": "बाथ",
                "m": "स्नान"
              }
            ],
            "paragraph": "Timothy thought deeply as he walked along the narrow north path through the thick pine woods on his thirty-third birthday. The cold morning air was thin and crisp, and thousands of dry autumn leaves covered the forest floor like a rich brown carpet. Timothy was a thoughtful mathematician who had dedicated fifteen years to studying the fundamental theories of geometry and celestial motion. He had packed a warm woolen blanket, a thermos of hot mint tea, and a leather notebook filled with intricate theorems and mathematical proofs. As he reached the summit of the northern hill, he sat on a smooth stone boulder to catch his breath and contemplate the majesty of creation. Beneath him lay a thriving valley dotted with red-roofed farmhouses and crystal clear streams that flowed gracefully toward the southern sea. Timothy felt a profound sense of gratitude in his heart for the gift of health, the blessing of faithful friends, and the boundless wealth of knowledge that the universe unfolded to those who sought truth with humility and perseverance. He recorded several new mathematical formulas in his journal with a steady hand, confident that these insights would provide valuable assistance to his university students in their academic pursuits. Theo was a thin and thoughtful student who always worked hard in his daily math class. Theo would think deeply before writing each answer on the blackboard. After completing his math test, Theo walked down the stone path to take a warm bath. He used a soft cloth to clean his teeth with care. Theo remembered to thank his teacher for teaching him with patience throughout the entire month. Always remember to practice reading this target sound by repeating these key words out loud: Think, Three, Thin, Thumb, Bath. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Timothy thought deeply as he walked along the narrow north path through the thick pine woods on his thirty-third birthday.",
              "The cold morning air was thin and crisp, and thousands of dry autumn leaves covered the forest floor like a rich brown carpet.",
              "Timothy was a thoughtful mathematician who had dedicated fifteen years to studying the fundamental theories of geometry and celestial motion.",
              "He had packed a warm woolen blanket, a thermos of hot mint tea, and a leather notebook filled with intricate theorems and mathematical proofs.",
              "As he reached the summit of the northern hill, he sat on a smooth stone boulder to catch his breath and contemplate the majesty of creation.",
              "Beneath him lay a thriving valley dotted with red-roofed farmhouses and crystal clear streams that flowed gracefully toward the southern sea.",
              "Timothy felt a profound sense of gratitude in his heart for the gift of health, the blessing of faithful friends, and the boundless wealth of knowledge that the universe unfolded to those who sought truth with humility and perseverance.",
              "He recorded several new mathematical formulas in his journal with a steady hand, confident that these insights would provide valuable assistance to his university students in their academic pursuits.",
              "Theo was a thin and thoughtful student who always worked hard in his daily math class.",
              "Theo would think deeply before writing each answer on the blackboard.",
              "After completing his math test, Theo walked down the stone path to take a warm bath.",
              "He used a soft cloth to clean his teeth with care.",
              "Theo remembered to thank his teacher for teaching him with patience throughout the entire month.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Think, Three, Thin, Thumb, Bath.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 338,
            "mouthShape": "tongue_between_teeth",
            "mouthBadge": "👅 जीभ की नोक दांतों के बीच में + सिर्फ हवा (थ)",
            "mouthGuide": "अपनी जीभ की नोक को ऊपर और नीचे के दांतों के बीच में थोड़ा सा बाहर निकालें! फिर जीभ और ऊपर के दांतों के बीच से सिर्फ हवा फूंकें — 'थ' (जैसे Think, Three, Thank)। गले में कोई कंपन नहीं!",
            "anchor": {
              "word": "Think",
              "hindi": "थिंक",
              "meaning": "सोचना",
              "icon": "💭"
            }
          },
          {
            "symbol": "/ð/",
            "label": "TH (This) — द (जीभ दांतों के बीच)",
            "hindiApprox": "द (कंपन के साथ)",
            "tip": "⚠️ ऊपर जैसा लेकिन कंपन के साथ — This, That, The",
            "words": [
              {
                "w": "This",
                "h": "दिस",
                "m": "यह"
              },
              {
                "w": "That",
                "h": "दैट",
                "m": "वह"
              },
              {
                "w": "The",
                "h": "द",
                "m": "वह (Article)"
              },
              {
                "w": "Mother",
                "h": "मदर",
                "m": "मां"
              },
              {
                "w": "Weather",
                "h": "वेदर",
                "m": "मौसम"
              }
            ],
            "paragraph": "My father and mother gathered the whole family together on the wide front porch of our southern farmhouse to watch the gentle summer weather change as evening approached. The air was remarkably soothing, filled with the comforting murmur of the river that wound its way through the fertile cotton fields. My older brother Arthur walked up the wooden steps, carrying an armful of seasoned birch wood to kindle a small fire in the stone hearth, for the evening breeze was growing cooler with each passing hour. My mother smoothed the soft woolen quilt over my grandmother's knees and poured cups of steaming chamomile tea for all of us to share. We sat together in affectionate fellowship, listening as my grandfather recounted thrilling tales of our ancestors who had braved stormy seas and untamed wilderness to build this prosperous homestead. Their courage and mutual devotion had sustained them through hardship and sorrow, leaving a proud heritage of faith, honesty, and family unity that bound us together with bonds stronger than steel. As the twilight deepened into starry night, we felt deeply blessed to abide in such harmonious fellowship beneath the protective canopy of our father's roof. This is a story about a brother and sister who loved to read together in their home. They sat on that comfortable sofa with their mother and opened a large picture book. Their father joined them and pointed to that colorful illustration on the page. Then they read each line out loud with clear voices. There was deep love and understanding among them as they shared that peaceful evening together. Always remember to practice reading this target sound by repeating these key words out loud: This, That, The, Mother, Weather. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "My father and mother gathered the whole family together on the wide front porch of our southern farmhouse to watch the gentle summer weather change as evening approached.",
              "The air was remarkably soothing, filled with the comforting murmur of the river that wound its way through the fertile cotton fields.",
              "My older brother Arthur walked up the wooden steps, carrying an armful of seasoned birch wood to kindle a small fire in the stone hearth, for the evening breeze was growing cooler with each passing hour.",
              "My mother smoothed the soft woolen quilt over my grandmother's knees and poured cups of steaming chamomile tea for all of us to share.",
              "We sat together in affectionate fellowship, listening as my grandfather recounted thrilling tales of our ancestors who had braved stormy seas and untamed wilderness to build this prosperous homestead.",
              "Their courage and mutual devotion had sustained them through hardship and sorrow, leaving a proud heritage of faith, honesty, and family unity that bound us together with bonds stronger than steel.",
              "As the twilight deepened into starry night, we felt deeply blessed to abide in such harmonious fellowship beneath the protective canopy of our father's roof.",
              "This is a story about a brother and sister who loved to read together in their home.",
              "They sat on that comfortable sofa with their mother and opened a large picture book.",
              "Their father joined them and pointed to that colorful illustration on the page.",
              "Then they read each line out loud with clear voices.",
              "There was deep love and understanding among them as they shared that peaceful evening together.",
              "Always remember to practice reading this target sound by repeating these key words out loud: This, That, The, Mother, Weather.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 332,
            "mouthShape": "tongue_between_teeth",
            "mouthBadge": "👅 जीभ दांतों के बीच में + गले से कंपन (द)",
            "mouthGuide": "जीभ की नोक को ऊपर और नीचे के दांतों के बीच रखें, और गले से गूंजती हुई आवाज़ निकालें — 'द' (जैसे This, That, The, Mother)। जीभ की नोक पर थरथराहट महसूस होगी!",
            "anchor": {
              "word": "This",
              "hindi": "दिस",
              "meaning": "यह",
              "icon": "👉"
            }
          },
          {
            "symbol": "/s/",
            "label": "S — स",
            "hindiApprox": "स",
            "tip": "दांत बंद, हवा की सीटी",
            "words": [
              {
                "w": "Sun",
                "h": "सन",
                "m": "सूरज"
              },
              {
                "w": "Sea",
                "h": "सी",
                "m": "समुद्र"
              },
              {
                "w": "Stop",
                "h": "स्टॉप",
                "m": "रुकना"
              },
              {
                "w": "Bus",
                "h": "बस",
                "m": "बस"
              },
              {
                "w": "Yes",
                "h": "येस",
                "m": "हां"
              }
            ],
            "paragraph": "Sarah stood on the sandy shore of the peaceful sea as the soft morning sun cast a silver sheen across the gentle ocean swells. A sweet summer breeze swept past, carrying the salty scent of sea spray and the distant calls of white seagulls circling high in the azure sky. Sarah wore a simple cotton dress and held a small wicker basket filled with smooth sea shells and colored sea glass that she had gathered along the water line. A handsome brown seal surfaced gracefully near the rocky reef, blinking its large soft eyes before diving back into the deep sapphire waters. Sarah smiled with supreme serenity, feeling completely at peace in the presence of such sublime natural splendor. She walked slowly past the old lighthouse tower, leaving a trail of barefoot footprints in the wet sand that the incoming tide would soon erase. In the distance, a graceful sailing sloop with snow-white sails glided smoothly toward the harbor mouth, guided by a steady breeze that filled its sails with effortless power. Sarah sat down on a warm sand dune to sketch the majestic scene in her notebook, grateful for the simple pleasures of life and the boundless beauty that surrounds us every single day. Sam saw six sweet apples sitting on the stone steps outside his house. The morning sun was shining bright in the blue sky. Sam's sister Sue ran across the soft grass to catch a yellow bus to school. Sam sat down at his desk and opened a silver pencil box. He began to spell simple words with a smile, glad to start a successful school day. Always remember to practice reading this target sound by repeating these key words out loud: Sun, Sea, Stop, Bus, Yes. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Sarah stood on the sandy shore of the peaceful sea as the soft morning sun cast a silver sheen across the gentle ocean swells.",
              "A sweet summer breeze swept past, carrying the salty scent of sea spray and the distant calls of white seagulls circling high in the azure sky.",
              "Sarah wore a simple cotton dress and held a small wicker basket filled with smooth sea shells and colored sea glass that she had gathered along the water line.",
              "A handsome brown seal surfaced gracefully near the rocky reef, blinking its large soft eyes before diving back into the deep sapphire waters.",
              "Sarah smiled with supreme serenity, feeling completely at peace in the presence of such sublime natural splendor.",
              "She walked slowly past the old lighthouse tower, leaving a trail of barefoot footprints in the wet sand that the incoming tide would soon erase.",
              "In the distance, a graceful sailing sloop with snow-white sails glided smoothly toward the harbor mouth, guided by a steady breeze that filled its sails with effortless power.",
              "Sarah sat down on a warm sand dune to sketch the majestic scene in her notebook, grateful for the simple pleasures of life and the boundless beauty that surrounds us every single day.",
              "Sam saw six sweet apples sitting on the stone steps outside his house.",
              "The morning sun was shining bright in the blue sky.",
              "Sam's sister Sue ran across the soft grass to catch a yellow bus to school.",
              "Sam sat down at his desk and opened a silver pencil box.",
              "He began to spell simple words with a smile, glad to start a successful school day.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Sun, Sea, Stop, Bus, Yes.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 338,
            "mouthShape": "teeth_closed_hiss",
            "mouthBadge": "🐍 दांत मिलाकर सीटी जैसी तेज़ हवा (Unvoiced Hiss)",
            "mouthGuide": "ऊपर और नीचे के दांतों को हल्का सा मिलाएं। जीभ दांतों के पीछे रहेगी। बीच से लगातार पतली सीटी जैसी हवा बाहर फेंकें — 'स्स्स'।",
            "anchor": {
              "word": "Sun",
              "hindi": "सन",
              "meaning": "सूरज",
              "icon": "☀️"
            }
          },
          {
            "symbol": "/z/",
            "label": "Z / S (between vowels) — ज़",
            "hindiApprox": "ज़ (भिनभिनाहट)",
            "tip": "S की तरह लेकिन कंपन के साथ — Zoo, Is, Rose",
            "words": [
              {
                "w": "Zoo",
                "h": "ज़ू",
                "m": "चिड़ियाघर"
              },
              {
                "w": "Zebra",
                "h": "ज़ीब्रा",
                "m": "ज़ेबरा"
              },
              {
                "w": "Is",
                "h": "इज़",
                "m": "है"
              },
              {
                "w": "Rose",
                "h": "रोज़",
                "m": "गुलाब"
              },
              {
                "w": "Music",
                "h": "म्यूज़िक",
                "m": "संगीत"
              }
            ],
            "paragraph": "The gentle breeze blew across the sprawling zoo on a sunny Wednesday afternoon, carrying the pleasant buzz of busy bumble bees among the blooming rose bushes. A herd of playful zebras with dazzling black and white stripes galloped joyfully across their spacious grass paddock, kicking up tiny clouds of dust as visitors watched in amazed amusement. In the neighboring enclosure, a pair of lazy bronze lizards basked on sun-warmed rocks, while a dozen vibrant hummingbirds zoomed with amazing speed among hanging baskets of sweet nectar flowers. Little Zachary walked happily beside his father, holding a large yellow balloon and enjoying a cold frozen lemonade that melted refreshingly in the afternoon heat. They paused near the aviary to watch colorful macaws preen their dazzling feathers and chatter with humorous squawks that made the crowd chuckle with amusement. Zachary took out his digital camera to capture a close-up picture of an inquisitive gazelle that had approached the boundary fence to nibble a handful of crisp alfalfa leaves. It was a day brimming with wonder, laughter, and educational discoveries that Zachary knew he would treasure in his memory for many weeks to come. Zack went to the city zoo on a bright Tuesday morning with his family. Zack saw zebras grazing on the green grass and listened to the loud buzz of honeybees around the roses. His sister smelled a sweet pink rose and smiled with pleasure. Zack bought a delicious frozen dessert from a vendor near the zebra enclosure. The zoo was buzzing with energy and cheerful voices all day. Always remember to practice reading this target sound by repeating these key words out loud: Zoo, Zebra, Is, Rose, Music. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "The gentle breeze blew across the sprawling zoo on a sunny Wednesday afternoon, carrying the pleasant buzz of busy bumble bees among the blooming rose bushes.",
              "A herd of playful zebras with dazzling black and white stripes galloped joyfully across their spacious grass paddock, kicking up tiny clouds of dust as visitors watched in amazed amusement.",
              "In the neighboring enclosure, a pair of lazy bronze lizards basked on sun-warmed rocks, while a dozen vibrant hummingbirds zoomed with amazing speed among hanging baskets of sweet nectar flowers.",
              "Little Zachary walked happily beside his father, holding a large yellow balloon and enjoying a cold frozen lemonade that melted refreshingly in the afternoon heat.",
              "They paused near the aviary to watch colorful macaws preen their dazzling feathers and chatter with humorous squawks that made the crowd chuckle with amusement.",
              "Zachary took out his digital camera to capture a close-up picture of an inquisitive gazelle that had approached the boundary fence to nibble a handful of crisp alfalfa leaves.",
              "It was a day brimming with wonder, laughter, and educational discoveries that Zachary knew he would treasure in his memory for many weeks to come.",
              "Zack went to the city zoo on a bright Tuesday morning with his family.",
              "Zack saw zebras grazing on the green grass and listened to the loud buzz of honeybees around the roses.",
              "His sister smelled a sweet pink rose and smiled with pleasure.",
              "Zack bought a delicious frozen dessert from a vendor near the zebra enclosure.",
              "The zoo was buzzing with energy and cheerful voices all day.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Zoo, Zebra, Is, Rose, Music.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 325,
            "mouthShape": "teeth_closed_hiss",
            "mouthBadge": "🐝 दांत मिलाकर मधुमक्खी जैसी भिनभिनाहट (Voiced Buzz)",
            "mouthGuide": "दांत मिलाकर रखें (जैसे S में था), लेकिन गले से आवाज़ निकालते हुए मधुमक्खी की तरह भिनभिनाहट पैदा करें — 'ज़्ज़ज़'। नुक़्ते वाला 'ज़' है!",
            "anchor": {
              "word": "Zebra",
              "hindi": "ज़ेब्रा",
              "meaning": "ज़ेब्रा",
              "icon": "🦓"
            }
          },
          {
            "symbol": "/ʃ/",
            "label": "SH — श",
            "hindiApprox": "श",
            "tip": "S और H मिलकर हिंदी का 'श' बनाते हैं — Ship, Show, Fish",
            "words": [
              {
                "w": "Ship",
                "h": "शिप",
                "m": "जहाज़"
              },
              {
                "w": "Shop",
                "h": "शॉप",
                "m": "दुकान"
              },
              {
                "w": "Fish",
                "h": "फ़िश",
                "m": "मछली"
              },
              {
                "w": "Show",
                "h": "शो",
                "m": "कार्यक्रम"
              },
              {
                "w": "Shoe",
                "h": "शू",
                "m": "जूता"
              }
            ],
            "paragraph": "A magnificent merchant ship named the Silver Star pushed gracefully through the foaming ocean swells as the first rays of morning sunshine illuminated the distant shores of a sheltered island. Captain Fisher stood on the high bridge deck, his sharp eyes scanning the coastal waters through a polished brass telescope. Below on the main deck, hardy sailors were washing the wooden planks with stiff brushes and coiling heavy mooring ropes in neat circular shapes. A flock of white sea gulls soared close to the ship's mast, their shrill cries echoing above the rhythmic swish of the breaking waves. The ship was carrying a precious cargo of fine Scottish wool, hand-crafted porcelain dishes, and sacks of fragrant brown sugar to the island's bustling market port. As the ship drew closer to the harbor channel, Captain Fisher issued calm, precise instructions to the helmsman, guiding the giant vessel smoothly past the treacherous coastal shoals into the calm waters of the harbor basin. Crowds of islanders had gathered on the wooden wharf to cheer the ship's arrival, waving colorful silk shawls and hats in joyful celebration of a safe and prosperous ocean passage. Shane walked into a small seafood shop near the ocean shore to buy fresh fish. A massive white ship sailed past the harbor, its polished sides shining under the bright sunlight. Shane found a smooth pink shell resting on the wet sand. When he returned home, his mother asked him to wash his hands before serving delicious baked fish on a clean ceramic dish. Always remember to practice reading this target sound by repeating these key words out loud: Ship, Shop, Fish, Show, Shoe. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "A magnificent merchant ship named the Silver Star pushed gracefully through the foaming ocean swells as the first rays of morning sunshine illuminated the distant shores of a sheltered island.",
              "Captain Fisher stood on the high bridge deck, his sharp eyes scanning the coastal waters through a polished brass telescope.",
              "Below on the main deck, hardy sailors were washing the wooden planks with stiff brushes and coiling heavy mooring ropes in neat circular shapes.",
              "A flock of white sea gulls soared close to the ship's mast, their shrill cries echoing above the rhythmic swish of the breaking waves.",
              "The ship was carrying a precious cargo of fine Scottish wool, hand-crafted porcelain dishes, and sacks of fragrant brown sugar to the island's bustling market port.",
              "As the ship drew closer to the harbor channel, Captain Fisher issued calm, precise instructions to the helmsman, guiding the giant vessel smoothly past the treacherous coastal shoals into the calm waters of the harbor basin.",
              "Crowds of islanders had gathered on the wooden wharf to cheer the ship's arrival, waving colorful silk shawls and hats in joyful celebration of a safe and prosperous ocean passage.",
              "Shane walked into a small seafood shop near the ocean shore to buy fresh fish.",
              "A massive white ship sailed past the harbor, its polished sides shining under the bright sunlight.",
              "Shane found a smooth pink shell resting on the wet sand.",
              "When he returned home, his mother asked him to wash his hands before serving delicious baked fish on a clean ceramic dish.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Ship, Shop, Fish, Show, Shoe.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 321,
            "mouthShape": "rounded_lips",
            "mouthBadge": "🤫 होंठ थोड़े आगे निकले हुए + 'चुप कराने' वाली आवाज़",
            "mouthGuide": "होंठों को हल्का सा आगे निकालें और जीभ को तालु के करीब रखें। लगातार हवा छोड़ें जैसे किसी को चुप करा रहे हों — 'शशश' (जैसे Ship, Shoe, Fish)।",
            "anchor": {
              "word": "Ship",
              "hindi": "शिप",
              "meaning": "जहाज़",
              "icon": "🚢"
            }
          },
          {
            "symbol": "/ʒ/",
            "label": "ZH / SI — झ़",
            "hindiApprox": "ज़ (मुलायम, श जैसी ज़)",
            "tip": "Television, Measure में बीच की आवाज़ — श और ज़ के बीच",
            "words": [
              {
                "w": "Television",
                "h": "टेलीविज़न",
                "m": "टीवी"
              },
              {
                "w": "Measure",
                "h": "मेज़र",
                "m": "मापना"
              },
              {
                "w": "Pleasure",
                "h": "प्लेज़र",
                "m": "आनंद"
              },
              {
                "w": "Vision",
                "h": "विज़न",
                "m": "दृष्टि"
              }
            ],
            "paragraph": "Professor Harrison sat in his private study at the university, watching a fascinating television documentary on the unusual geologic formations of the Asian continent. The program provided a visual treasure trove of rare aerial footage showing majestic mountain ranges, vast desert expanses, and colossal glacial valleys that had evolved through millions of years of tectonic division and volcanic activity. The professor made frequent annotations in his leather research journal, noting how the gradual collision of continental plates had produced extraordinary variations in local climate and biodiversity. To him, the pursuit of scientific knowledge was not merely a professional duty, but an enduring source of profound intellectual pleasure and personal joy. His academic decisions and analytical conclusions had earned him international prestige, yet he maintained a humble and generous demeanor toward his undergraduate students. As the documentary concluded with an awe-inspiring vision of the sunset over the Himalayas, Professor Harrison adjusted his spectacles with a satisfied nod, deeply convinced that a comprehensive appreciation of natural phenomena is essential to the cultural and scientific elevation of human society. It is always a genuine pleasure to make a wise decision and watch an educational television program. The explorer viewed the ancient treasures of Asia with wonder and delight. Taking an accurate measurement of the stone monument was a casual task for the experienced architect. His clear vision and thoughtful decisions made every expedition a memorable and pleasant success. Always remember to practice reading this target sound by repeating these key words out loud: Television, Measure, Pleasure, Vision. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Professor Harrison sat in his private study at the university, watching a fascinating television documentary on the unusual geologic formations of the Asian continent.",
              "The program provided a visual treasure trove of rare aerial footage showing majestic mountain ranges, vast desert expanses, and colossal glacial valleys that had evolved through millions of years of tectonic division and volcanic activity.",
              "The professor made frequent annotations in his leather research journal, noting how the gradual collision of continental plates had produced extraordinary variations in local climate and biodiversity.",
              "To him, the pursuit of scientific knowledge was not merely a professional duty, but an enduring source of profound intellectual pleasure and personal joy.",
              "His academic decisions and analytical conclusions had earned him international prestige, yet he maintained a humble and generous demeanor toward his undergraduate students.",
              "As the documentary concluded with an awe-inspiring vision of the sunset over the Himalayas, Professor Harrison adjusted his spectacles with a satisfied nod, deeply convinced that a comprehensive appreciation of natural phenomena is essential to the cultural and scientific elevation of human society.",
              "It is always a genuine pleasure to make a wise decision and watch an educational television program.",
              "The explorer viewed the ancient treasures of Asia with wonder and delight.",
              "Taking an accurate measurement of the stone monument was a casual task for the experienced architect.",
              "His clear vision and thoughtful decisions made every expedition a memorable and pleasant success.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Television, Measure, Pleasure, Vision.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 301,
            "mouthShape": "rounded_lips",
            "mouthBadge": "⚡ होंठ आगे + 'श' जैसी स्थिति में गले से गूंज (झ़)",
            "mouthGuide": "होंठ आगे निकालकर 'SH' की तरह रखें, लेकिन इस बार गले से गूंज पैदा करें — 'झ़' (जैसे Vi-sion, Mea-sure, Plea-sure)।",
            "anchor": {
              "word": "Vision",
              "hindi": "विज़न",
              "meaning": "दृष्टि",
              "icon": "👁️"
            }
          },
          {
            "symbol": "/h/",
            "label": "H — ह",
            "hindiApprox": "ह",
            "tip": "मुंह खोलकर गले से गर्म हवा — Hat, Home, Help",
            "words": [
              {
                "w": "Hat",
                "h": "हैट",
                "m": "टोपी"
              },
              {
                "w": "Hand",
                "h": "हैंड",
                "m": "हाथ"
              },
              {
                "w": "Home",
                "h": "होम",
                "m": "घर"
              },
              {
                "w": "Help",
                "h": "हेल्प",
                "m": "मदद"
              },
              {
                "w": "Heart",
                "h": "हार्ट",
                "m": "दिल"
              }
            ],
            "paragraph": "Harry walked briskly up the high hill toward his ancestral stone home as the warm autumn sun illuminated the surrounding harvest fields. Harry had a happy, generous heart and was always ready to lend a helping hand to anyone in need throughout the neighboring countryside. He carried a heavy wicker hamper packed with fresh honeycombs, ripe red apples, and a warm loaf of home-baked bread to share with his grandmother, who lived in a cozy stone cottage near the summit of the ridge. As Harry reached the crest of the hill, he paused to catch his breath and admire the panoramic view of the fertile valley below. A handsome brown horse trotted gracefully along the wooden fence line of the horse paddock, whinnying a cheerful greeting as Harry passed. Harry stopped to stroke the horse's silky mane and fed him a crisp sweet apple from his pocket before continuing along the cobblestone pathway to his grandmother's door. The sweet fragrance of blooming honeysuckle and burning birch logs filled the air with comforting warmth, welcoming Harry back to the peaceful sanctuary of his cherished mountain home. Harry wore a warm brown hat as he walked his friendly horse through the green hills. The horse had a healthy appetite and ate golden hay with delight. Harry felt very happy when he reached his cozy home at the top of the hill. He held his mother's hand and offered to help her prepare hot soup in the kitchen. Harry smiled, feeling at peace inside his home. Always remember to practice reading this target sound by repeating these key words out loud: Hat, Hand, Home, Help, Heart. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Harry walked briskly up the high hill toward his ancestral stone home as the warm autumn sun illuminated the surrounding harvest fields.",
              "Harry had a happy, generous heart and was always ready to lend a helping hand to anyone in need throughout the neighboring countryside.",
              "He carried a heavy wicker hamper packed with fresh honeycombs, ripe red apples, and a warm loaf of home-baked bread to share with his grandmother, who lived in a cozy stone cottage near the summit of the ridge.",
              "As Harry reached the crest of the hill, he paused to catch his breath and admire the panoramic view of the fertile valley below.",
              "A handsome brown horse trotted gracefully along the wooden fence line of the horse paddock, whinnying a cheerful greeting as Harry passed.",
              "Harry stopped to stroke the horse's silky mane and fed him a crisp sweet apple from his pocket before continuing along the cobblestone pathway to his grandmother's door.",
              "The sweet fragrance of blooming honeysuckle and burning birch logs filled the air with comforting warmth, welcoming Harry back to the peaceful sanctuary of his cherished mountain home.",
              "Harry wore a warm brown hat as he walked his friendly horse through the green hills.",
              "The horse had a healthy appetite and ate golden hay with delight.",
              "Harry felt very happy when he reached his cozy home at the top of the hill.",
              "He held his mother's hand and offered to help her prepare hot soup in the kitchen.",
              "Harry smiled, feeling at peace inside his home.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Hat, Hand, Home, Help, Heart.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 320,
            "mouthShape": "throat_breath",
            "mouthBadge": "🌬️ खुला मुंह + फेफड़ों से सीधी गर्म हवा",
            "mouthGuide": "मुंह को स्वाभाविक रूप से खुला रखें। जीभ को नीचे रखें और अंदर फेफड़ों से सीधी गर्म हवा बाहर छोड़ें — 'ह' (जैसे शीशे पर भाप छोड़ते हैं)।",
            "anchor": {
              "word": "Horse",
              "hindi": "हॉर्स",
              "meaning": "घोड़ा",
              "icon": "🐎"
            }
          },
          {
            "symbol": "/tʃ/",
            "label": "CH — च",
            "hindiApprox": "च",
            "tip": "T और SH मिलकर हिंदी का 'च' बनाते हैं — Chair, Watch, Child",
            "words": [
              {
                "w": "Chair",
                "h": "चेयर",
                "m": "कुर्सी"
              },
              {
                "w": "Child",
                "h": "चाइल्ड",
                "m": "बच्चा"
              },
              {
                "w": "Watch",
                "h": "वॉच",
                "m": "घड़ी"
              },
              {
                "w": "Catch",
                "h": "कैच",
                "m": "पकड़ना"
              },
              {
                "w": "Rich",
                "h": "रिच",
                "m": "अमीर"
              }
            ],
            "paragraph": "Charles sat on a sturdy wooden chair in the sunny kitchen of the old country church rectory, watching his mother chop ripe cherries for a homemade fruit pie. The kitchen was alive with the pleasant chatter of friendly voices and the rhythmic ticking of a tall grandfather clock that stood in the corner near the pantry. Charles was a cheerful child with bright brown eyes and an inquisitive mind, always eager to learn how things worked. On the table before him lay a wooden puzzle box with a secret latch that his uncle, a skilled carpenter, had carved from a block of seasoned cherry wood. Charles examined the delicate joints with sharp attention, trying to figure out which wooden piece to shift in order to release the hidden latch. After several patient attempts, he felt a soft click under his thumb, and the carved lid sprang open to reveal a shiny brass pocket watch resting on a bed of red velvet. Charles smiled with triumphant joy, proud of his perseverance and eager to show his grandfather how easily he could solve the intriguing wooden puzzle. Charlie sat on a wooden green bench in the church courtyard to eat his lunch. Charlie had brought a cheese sandwich and a bag of crunchy potato chips. A kind teacher walked past the bench and stopped to chat with Charlie about his school project. Charlie stroked his chin thoughtfully and checked the clock tower to make sure he was on time for his afternoon choir practice. Always remember to practice reading this target sound by repeating these key words out loud: Chair, Child, Watch, Catch, Rich. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Charles sat on a sturdy wooden chair in the sunny kitchen of the old country church rectory, watching his mother chop ripe cherries for a homemade fruit pie.",
              "The kitchen was alive with the pleasant chatter of friendly voices and the rhythmic ticking of a tall grandfather clock that stood in the corner near the pantry.",
              "Charles was a cheerful child with bright brown eyes and an inquisitive mind, always eager to learn how things worked.",
              "On the table before him lay a wooden puzzle box with a secret latch that his uncle, a skilled carpenter, had carved from a block of seasoned cherry wood.",
              "Charles examined the delicate joints with sharp attention, trying to figure out which wooden piece to shift in order to release the hidden latch.",
              "After several patient attempts, he felt a soft click under his thumb, and the carved lid sprang open to reveal a shiny brass pocket watch resting on a bed of red velvet.",
              "Charles smiled with triumphant joy, proud of his perseverance and eager to show his grandfather how easily he could solve the intriguing wooden puzzle.",
              "Charlie sat on a wooden green bench in the church courtyard to eat his lunch.",
              "Charlie had brought a cheese sandwich and a bag of crunchy potato chips.",
              "A kind teacher walked past the bench and stopped to chat with Charlie about his school project.",
              "Charlie stroked his chin thoughtfully and checked the clock tower to make sure he was on time for his afternoon choir practice.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Chair, Child, Watch, Catch, Rich.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 319,
            "mouthShape": "rounded_lips",
            "mouthBadge": "💥 'ट' और 'श' का त्वरित विस्फोट (च)",
            "mouthGuide": "जीभ की नोक को मसूड़े पर लगाकर पहले हवा रोकें, फिर तुरंत होंठ आगे निकालकर 'च' का झटका छोड़ें — 'च' (जैसे Chair, Chip, Match)।",
            "anchor": {
              "word": "Chair",
              "hindi": "चेयर",
              "meaning": "कुर्सी",
              "icon": "🪑"
            }
          },
          {
            "symbol": "/dʒ/",
            "label": "J / G (soft) — ज",
            "hindiApprox": "ज",
            "tip": "D और ZH मिलकर हिंदी का 'ज' बनाते हैं — Jump, Gym, Age",
            "words": [
              {
                "w": "Jump",
                "h": "जम्प",
                "m": "कूदना"
              },
              {
                "w": "Gym",
                "h": "जिम",
                "m": "व्यायामशाला"
              },
              {
                "w": "Age",
                "h": "एज",
                "m": "उम्र"
              },
              {
                "w": "Judge",
                "h": "जज",
                "m": "न्यायाधीश"
              },
              {
                "w": "Job",
                "h": "जॉब",
                "m": "नौकरी"
              }
            ],
            "paragraph": "George was a courageous young ranger who worked in a vast wildlife reserve situated on the edge of an untamed tropical jungle. Every morning, George checked his vehicle's engine, strapped his field equipment into the rear compartment, and set off to patrol the reserve's outer perimeter. His job was to protect the endangered giant elephants, majestic Bengal tigers, and playful golden monkeys from illegal poachers and habitat destruction. As George drove along the bumpy dirt trail near a raging jungle river, he saw a mother jaguar and her two spotted cubs drinking peacefully from a shallow pool beneath a colossal teak bridge. George stopped the engine and watched the magnificent felines through his binoculars, marveling at the graceful fluidity of their movements and the natural majesty of their wild existence. Further along the trail, George visited an educational research station where a team of dedicated biologists were nursing an injured young giraffe back to health. George felt an immense sense of joy and personal fulfillment in his noble career, knowing that his daily vigilance played a vital role in safeguarding the rich biodiversity of this magnificent wilderness. Jack poured fresh orange juice into a glass jar and spread sweet grape jam on his toast. Jack looked at a picture of a giant giraffe standing near a stone bridge in Africa. He turned the page of his storybook to learn more about animals of all ages. Jack jumped up with joy when his friend invited him to join an exciting gym game in the village hall. Always remember to practice reading this target sound by repeating these key words out loud: Jump, Gym, Age, Judge, Job. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "George was a courageous young ranger who worked in a vast wildlife reserve situated on the edge of an untamed tropical jungle.",
              "Every morning, George checked his vehicle's engine, strapped his field equipment into the rear compartment, and set off to patrol the reserve's outer perimeter.",
              "His job was to protect the endangered giant elephants, majestic Bengal tigers, and playful golden monkeys from illegal poachers and habitat destruction.",
              "As George drove along the bumpy dirt trail near a raging jungle river, he saw a mother jaguar and her two spotted cubs drinking peacefully from a shallow pool beneath a colossal teak bridge.",
              "George stopped the engine and watched the magnificent felines through his binoculars, marveling at the graceful fluidity of their movements and the natural majesty of their wild existence.",
              "Further along the trail, George visited an educational research station where a team of dedicated biologists were nursing an injured young giraffe back to health.",
              "George felt an immense sense of joy and personal fulfillment in his noble career, knowing that his daily vigilance played a vital role in safeguarding the rich biodiversity of this magnificent wilderness.",
              "Jack poured fresh orange juice into a glass jar and spread sweet grape jam on his toast.",
              "Jack looked at a picture of a giant giraffe standing near a stone bridge in Africa.",
              "He turned the page of his storybook to learn more about animals of all ages.",
              "Jack jumped up with joy when his friend invited him to join an exciting gym game in the village hall.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Jump, Gym, Age, Judge, Job.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 322,
            "mouthShape": "rounded_lips",
            "mouthBadge": "🔊 'ड' और 'झ़' का भारी जोड़ + गले में कंपन (ज)",
            "mouthGuide": "जीभ ऊपर मसूड़े पर चिपकेगी, फिर गले की पूरी गूंज के साथ आवाज़ बाहर निकलेगी — 'ज' (जैसे Jam, Judge, Bridge)।",
            "anchor": {
              "word": "Jug",
              "hindi": "जग",
              "meaning": "जग",
              "icon": "🏺"
            }
          },
          {
            "symbol": "/m/",
            "label": "M — म",
            "hindiApprox": "म",
            "tip": "होंठ बंद, नाक से गूंज",
            "words": [
              {
                "w": "Man",
                "h": "मैन",
                "m": "आदमी"
              },
              {
                "w": "Moon",
                "h": "मून",
                "m": "चांद"
              },
              {
                "w": "Milk",
                "h": "मिल्क",
                "m": "दूध"
              },
              {
                "w": "Team",
                "h": "टीम",
                "m": "टीम"
              },
              {
                "w": "Drum",
                "h": "ड्रम",
                "m": "ढोल"
              }
            ],
            "paragraph": "Mark woke up early on a warm summer morning to walk through the busy town market with his mother and his sister Mary. The market square was buzzing with energetic movement as farmers and merchants from surrounding villages arranged their colorful produce in neat wooden stalls. Mark carried a sturdy canvas market bag, ready to carry the heavier items of produce that his mother planned to purchase for their family meals. They stopped first at a dairy stall to buy three bottles of rich farm milk, a tub of sweet cream butter, and a round block of sharp mountain cheese. Nearby, a fruit merchant had arranged magnificent pyramids of ripe mangoes, purple plums, sweet melons, and fresh red strawberries that filled the air with an appetizing perfume. Mark loved the friendly clamor of the market, where familiar neighbors greeted each other with warm handshakes, exchanging news of their crops and families with genuine affection. By the time they finished their shopping and prepared to walk home, Mark's bag was brimming with fresh, nutritious bounty, and his heart was full of gratitude for the simple, wholesome blessings of rural community life. A kind man named Mark lived in a peaceful home with his mother and sister Mary. During the warm summer months, Mark would drink a glass of fresh cold milk every morning. He sat at his wooden desk and wrote down his name on a clean paper sheet. Mark had a dream to become a music master and compose cheerful melodies for everyone to enjoy. Always remember to practice reading this target sound by repeating these key words out loud: Man, Moon, Milk, Team, Drum. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Mark woke up early on a warm summer morning to walk through the busy town market with his mother and his sister Mary.",
              "The market square was buzzing with energetic movement as farmers and merchants from surrounding villages arranged their colorful produce in neat wooden stalls.",
              "Mark carried a sturdy canvas market bag, ready to carry the heavier items of produce that his mother planned to purchase for their family meals.",
              "They stopped first at a dairy stall to buy three bottles of rich farm milk, a tub of sweet cream butter, and a round block of sharp mountain cheese.",
              "Nearby, a fruit merchant had arranged magnificent pyramids of ripe mangoes, purple plums, sweet melons, and fresh red strawberries that filled the air with an appetizing perfume.",
              "Mark loved the friendly clamor of the market, where familiar neighbors greeted each other with warm handshakes, exchanging news of their crops and families with genuine affection.",
              "By the time they finished their shopping and prepared to walk home, Mark's bag was brimming with fresh, nutritious bounty, and his heart was full of gratitude for the simple, wholesome blessings of rural community life.",
              "A kind man named Mark lived in a peaceful home with his mother and sister Mary.",
              "During the warm summer months, Mark would drink a glass of fresh cold milk every morning.",
              "He sat at his wooden desk and wrote down his name on a clean paper sheet.",
              "Mark had a dream to become a music master and compose cheerful melodies for everyone to enjoy.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Man, Moon, Milk, Team, Drum.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 322,
            "mouthShape": "lips_closed",
            "mouthBadge": "👄 दोनों होंठ कोमलता से बंद + नाक से आवाज़ (हम्म)",
            "mouthGuide": "दोनों होंठों को आपस में मिलाकर बंद रखें। मुंह से कोई हवा नहीं निकलेगी, आवाज़ पूरी तरह नाक से गूंजकर निकलेगी — 'म्मम' (जैसे Man, Milk, Jam)।",
            "anchor": {
              "word": "Monkey",
              "hindi": "मंकी",
              "meaning": "बंदर",
              "icon": "🐒"
            }
          },
          {
            "symbol": "/n/",
            "label": "N — न",
            "hindiApprox": "न",
            "tip": "जीभ ऊपर, नाक से गूंज",
            "words": [
              {
                "w": "Net",
                "h": "नेट",
                "m": "जाल"
              },
              {
                "w": "Night",
                "h": "नाइट",
                "m": "रात"
              },
              {
                "w": "Nose",
                "h": "नोज़",
                "m": "नाक"
              },
              {
                "w": "Sun",
                "h": "सन",
                "m": "सूरज"
              },
              {
                "w": "Rain",
                "h": "रेन",
                "m": "बारिश"
              }
            ],
            "paragraph": "Nathan sat beside the wide bay window of his second-floor study, writing an encouraging letter to his nephew on a crisp autumn morning. The northern wind blew gently through the golden branches of the tall chestnut trees that lined the stone path outside his garden gate. Nathan was a retired schoolmaster of noble character, respected by hundreds of former students who had benefited from his wise instruction and patient guidance over thirty-five years of devoted service. On his wooden desk stood a brass reading lamp, a bottle of permanent black ink, and a small framed photograph of his late wife, whose memory remained a fountain of sweetness and inspiration in his daily life. Outside in the garden, a flock of brown sparrows hopped among the dry leaves, searching for fallen seeds and nesting materials before the onset of the cold winter months. Nathan finished his letter with heartfelt blessings and advice, folded the sheet into a neat envelope, and sealed it with a drop of crimson wax. He felt deeply grateful for the tranquil peace of his quiet life and the enduring connections of love and friendship that enriched his twilight years with profound meaning. A young boy named Ned opened his new notebook to practice reading on a sunny morning. Ned had nine green pens and a neat wooden ruler on his study table. He looked out the window and saw a robin sit inside its cozy nest. When night fell, nine bright stars appeared in the northern sky. Ned rested his head on a soft pillow and slept peacefully until nine in the morning. Always remember to practice reading this target sound by repeating these key words out loud: Net, Night, Nose, Sun, Rain. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Nathan sat beside the wide bay window of his second-floor study, writing an encouraging letter to his nephew on a crisp autumn morning.",
              "The northern wind blew gently through the golden branches of the tall chestnut trees that lined the stone path outside his garden gate.",
              "Nathan was a retired schoolmaster of noble character, respected by hundreds of former students who had benefited from his wise instruction and patient guidance over thirty-five years of devoted service.",
              "On his wooden desk stood a brass reading lamp, a bottle of permanent black ink, and a small framed photograph of his late wife, whose memory remained a fountain of sweetness and inspiration in his daily life.",
              "Outside in the garden, a flock of brown sparrows hopped among the dry leaves, searching for fallen seeds and nesting materials before the onset of the cold winter months.",
              "Nathan finished his letter with heartfelt blessings and advice, folded the sheet into a neat envelope, and sealed it with a drop of crimson wax.",
              "He felt deeply grateful for the tranquil peace of his quiet life and the enduring connections of love and friendship that enriched his twilight years with profound meaning.",
              "A young boy named Ned opened his new notebook to practice reading on a sunny morning.",
              "Ned had nine green pens and a neat wooden ruler on his study table.",
              "He looked out the window and saw a robin sit inside its cozy nest.",
              "When night fell, nine bright stars appeared in the northern sky.",
              "Ned rested his head on a soft pillow and slept peacefully until nine in the morning.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Net, Night, Nose, Sun, Rain.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 333,
            "mouthShape": "tongue_up",
            "mouthBadge": "👅 जीभ मसूड़े पर चिपकी रहेगी + नाक से गूंज (न्न)",
            "mouthGuide": "मुंह खुला रहेगा, लेकिन जीभ की नोक को ऊपर के मसूड़े पर चिपकाकर हवा रोक लें। आवाज़ नाक से बाहर निकलेगी — 'न्नन' (जैसे Net, No, Sun)।",
            "anchor": {
              "word": "Nest",
              "hindi": "नेस्ट",
              "meaning": "घोंसला",
              "icon": "🪺"
            }
          },
          {
            "symbol": "/ŋ/",
            "label": "NG — ङ / अनुनासिक",
            "hindiApprox": "ं (अनुनासिक गूंज)",
            "tip": "गले के पीछे से नाक की गूंज — Sing, Long, Ring",
            "words": [
              {
                "w": "Sing",
                "h": "सिंग",
                "m": "गाना"
              },
              {
                "w": "Ring",
                "h": "रिंग",
                "m": "अंगूठी"
              },
              {
                "w": "Long",
                "h": "लॉन्ग",
                "m": "लंबा"
              },
              {
                "w": "Song",
                "h": "सॉन्ग",
                "m": "गीत"
              },
              {
                "w": "Bring",
                "h": "ब्रिंग",
                "m": "लाना"
              }
            ],
            "paragraph": "The royal king and his noble queen sat in the grand banquet hall, listening to a young choir of fifty boys and girls sing melodious spring songs beneath the high vaulted stone ceiling. The harmonious voices rang out with crystal clarity, filling every corner of the ancient palace with an uplifting aura of joy and celebration. A handsome silver ring with an exquisite emerald stone sparkled on the king's right hand as he tapped his fingers to the lively rhythm of the music. In the adjacent courtyard, a long line of villagers and townspeople had gathered to present their annual gifts of spring honey, spun wool, and woven linen to the royal court. The young singers concluded their final anthem with a powerful crescendo that left the entire assembly standing in enthusiastic applause. The king rose from his throne with a bright smile, thanking the choir director for her inspiring leadership and awarding each young singer a polished bronze medal to commemorate this memorable occasion. The festive gathering continued late into the evening, with delicious feasts, merry dancing, and cheerful songs that united young and old in lasting bonds of community harmony. The young king wore a shiny golden ring as he walked through the royal garden. A choir began to sing a sweet song celebrating the arrival of spring. The king had a strong heart and loved listening to the birds sing high up in the trees. Every young boy and girl gathered in the courtyard, singing together with long and joyous melodies that echoed across the kingdom. Always remember to practice reading this target sound by repeating these key words out loud: Sing, Ring, Long, Song, Bring. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "The royal king and his noble queen sat in the grand banquet hall, listening to a young choir of fifty boys and girls sing melodious spring songs beneath the high vaulted stone ceiling.",
              "The harmonious voices rang out with crystal clarity, filling every corner of the ancient palace with an uplifting aura of joy and celebration.",
              "A handsome silver ring with an exquisite emerald stone sparkled on the king's right hand as he tapped his fingers to the lively rhythm of the music.",
              "In the adjacent courtyard, a long line of villagers and townspeople had gathered to present their annual gifts of spring honey, spun wool, and woven linen to the royal court.",
              "The young singers concluded their final anthem with a powerful crescendo that left the entire assembly standing in enthusiastic applause.",
              "The king rose from his throne with a bright smile, thanking the choir director for her inspiring leadership and awarding each young singer a polished bronze medal to commemorate this memorable occasion.",
              "The festive gathering continued late into the evening, with delicious feasts, merry dancing, and cheerful songs that united young and old in lasting bonds of community harmony.",
              "The young king wore a shiny golden ring as he walked through the royal garden.",
              "A choir began to sing a sweet song celebrating the arrival of spring.",
              "The king had a strong heart and loved listening to the birds sing high up in the trees.",
              "Every young boy and girl gathered in the courtyard, singing together with long and joyous melodies that echoed across the kingdom.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Sing, Ring, Long, Song, Bring.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 326,
            "mouthShape": "throat_breath",
            "mouthBadge": "🎵 जीभ का पिछला हिस्सा तालु पर चिपका रहेगा + नाक से गूंज (ं)",
            "mouthGuide": "जीभ के पिछले हिस्से को तालु से कसकर चिपकाएं। मुंह बंद रहेगा और आवाज़ नाक से गूंजेगी — 'ंग' (उदा. Sing, King, Long)। 'ग' का उच्चारण पूरा नहीं करना है!",
            "anchor": {
              "word": "Ring",
              "hindi": "रिंग",
              "meaning": "अंगूठी",
              "icon": "💍"
            }
          },
          {
            "symbol": "/j/",
            "label": "Y — य",
            "hindiApprox": "य",
            "tip": "जीभ तालू के करीब — Yes, Yellow, You",
            "words": [
              {
                "w": "Yes",
                "h": "येस",
                "m": "हां"
              },
              {
                "w": "Yellow",
                "h": "येलो",
                "m": "पीला"
              },
              {
                "w": "You",
                "h": "यू",
                "m": "आप"
              },
              {
                "w": "Year",
                "h": "यियर",
                "m": "साल"
              },
              {
                "w": "Young",
                "h": "यंग",
                "m": "जवान"
              }
            ],
            "paragraph": "Yesterday, young Timothy took a delightful trip to a scenic farm yard where hundreds of bright yellow sunflowers stood tall under the brilliant morning sunshine. Timothy had spent the entire year studying agricultural botany, and he was eager to observe how modern organic farmers cultivated healthy crops without the use of chemical fertilizers. His friendly host, a youthful farmer named York, greeted him at the farm gate with an energetic handshake and a warm smile. Farmer York led Timothy past the dairy barns to an open paddock where a pair of sturdy young oxen were resting in the shade of an old maple tree. \"These oxen are remarkably strong and gentle,\" York explained as he stroked the animals' thick shoulders. \"We use them to plow our vegetable terraces, preserving the natural structure of the soil.\" In the farmhouse kitchen, York's wife offered them a delicious breakfast of fresh yogurt topped with wild honey and toasted oat flakes. Timothy listened intently as the young couple shared their vision for sustainable community farming, his youthful heart inspired by their passionate commitment to nurturing the earth with wisdom, respect, and tireless dedication. Yesterday, a young boy named Yale played in the green front yard with a bright yellow yo-yo. Yale ate a cup of sweet vanilla yogurt for his morning snack. His mother asked him if he was ready for school, and Yale answered yes with a broad smile. Yale was eager to learn new words this year and build strong reading skills every single day. Always remember to practice reading this target sound by repeating these key words out loud: Yes, Yellow, You, Year, Young. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Yesterday, young Timothy took a delightful trip to a scenic farm yard where hundreds of bright yellow sunflowers stood tall under the brilliant morning sunshine.",
              "Timothy had spent the entire year studying agricultural botany, and he was eager to observe how modern organic farmers cultivated healthy crops without the use of chemical fertilizers.",
              "His friendly host, a youthful farmer named York, greeted him at the farm gate with an energetic handshake and a warm smile.",
              "Farmer York led Timothy past the dairy barns to an open paddock where a pair of sturdy young oxen were resting in the shade of an old maple tree.",
              "\"These oxen are remarkably strong and gentle,\" York explained as he stroked the animals' thick shoulders.",
              "\"We use them to plow our vegetable terraces, preserving the natural structure of the soil.\" In the farmhouse kitchen, York's wife offered them a delicious breakfast of fresh yogurt topped with wild honey and toasted oat flakes.",
              "Timothy listened intently as the young couple shared their vision for sustainable community farming, his youthful heart inspired by their passionate commitment to nurturing the earth with wisdom, respect, and tireless dedication.",
              "Yesterday, a young boy named Yale played in the green front yard with a bright yellow yo-yo.",
              "Yale ate a cup of sweet vanilla yogurt for his morning snack.",
              "His mother asked him if he was ready for school, and Yale answered yes with a broad smile.",
              "Yale was eager to learn new words this year and build strong reading skills every single day.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Yes, Yellow, You, Year, Young.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 320,
            "mouthShape": "wide_smile",
            "mouthBadge": "😊 'ई' की स्थिति से जीभ का त्वरित झटका (य)",
            "mouthGuide": "मुंह को 'ई' की मुस्कान में रखें, जीभ का मध्य हिस्सा तालु के बहुत पास होगा। तुरंत आवाज़ के साथ जीभ को नीचे गिराएं — 'य' (जैसे Yes, Yellow, You)।",
            "anchor": {
              "word": "Yak",
              "hindi": "याक",
              "meaning": "याक",
              "icon": "🐂"
            }
          },
          {
            "symbol": "/w/",
            "label": "W — व (गोल होंठ)",
            "hindiApprox": "व (ऊ की तरह होंठ गोल)",
            "tip": "⚠️ V से अलग! W में दांत नहीं लगते — होंठ ऊ-आकार में — Water vs Van",
            "words": [
              {
                "w": "Water",
                "h": "वॉटर",
                "m": "पानी"
              },
              {
                "w": "Walk",
                "h": "वॉक",
                "m": "चलना"
              },
              {
                "w": "Wind",
                "h": "विंड",
                "m": "हवा"
              },
              {
                "w": "Week",
                "h": "वीक",
                "m": "सप्ताह"
              },
              {
                "w": "We",
                "h": "वी",
                "m": "हम"
              }
            ],
            "paragraph": "William took a long, refreshing walk through the western woods on a cool, windy Wednesday morning. A gentle autumn wind blew through the swaying treetops, scattering millions of golden leaves across the winding woodland path like a rich carpet of gold. William carried a sturdy walking stick carved from white ash and a waterproof canvas bag containing a flask of warm sweet tea and a pocket notebook. He followed the winding trail toward a wide waterfall where pure mountain water tumbled over polished gray rocks into a deep, clear pool below. William sat down on a smooth fallen log near the water's edge to watch the swirling white foam and listen to the mighty roar of the cascade. A pair of wild gray wolves appeared briefly on the rocky ridge above, paused to look down with calm, intelligent eyes, and then vanished silently into the thick cedar forest. William felt deeply moved by the untamed majesty of the wilderness, appreciating the wisdom of preserving these vast natural sanctuaries where wild creatures can live free from human intrusion, protected beneath the majestic canopy of the wild western sky. William looked out the bedroom window as the cold winter wind began to blow. He poured a cup of warm water and waited patiently for his brother to arrive. They planned to walk together along the western wall of the city. William wore a warm wool scarf to shield his neck from the freezing wind. Walking through the winter woods brought them wonder and delight. Always remember to practice reading this target sound by repeating these key words out loud: Water, Walk, Wind, Week, We. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "William took a long, refreshing walk through the western woods on a cool, windy Wednesday morning.",
              "A gentle autumn wind blew through the swaying treetops, scattering millions of golden leaves across the winding woodland path like a rich carpet of gold.",
              "William carried a sturdy walking stick carved from white ash and a waterproof canvas bag containing a flask of warm sweet tea and a pocket notebook.",
              "He followed the winding trail toward a wide waterfall where pure mountain water tumbled over polished gray rocks into a deep, clear pool below.",
              "William sat down on a smooth fallen log near the water's edge to watch the swirling white foam and listen to the mighty roar of the cascade.",
              "A pair of wild gray wolves appeared briefly on the rocky ridge above, paused to look down with calm, intelligent eyes, and then vanished silently into the thick cedar forest.",
              "William felt deeply moved by the untamed majesty of the wilderness, appreciating the wisdom of preserving these vast natural sanctuaries where wild creatures can live free from human intrusion, protected beneath the majestic canopy of the wild western sky.",
              "William looked out the bedroom window as the cold winter wind began to blow.",
              "He poured a cup of warm water and waited patiently for his brother to arrive.",
              "They planned to walk together along the western wall of the city.",
              "William wore a warm wool scarf to shield his neck from the freezing wind.",
              "Walking through the winter woods brought them wonder and delight.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Water, Walk, Wind, Week, We.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 319,
            "mouthShape": "rounded_lips",
            "mouthBadge": "⭕ होंठ सीटी जैसे गोल (दांत होंठ को बिल्कुल नहीं छुएंगे!)",
            "mouthGuide": "अंग्रेज़ी बोलने का सुनहरा नियम: W में दांत होंठ को कभी नहीं छूते! होंठों को सीटी बजाने जैसा आगे गोल करें, फिर झटके से खोलें — 'व' (जैसे Win, Water, Wet)।",
            "anchor": {
              "word": "Water",
              "hindi": "वॉटर",
              "meaning": "पानी",
              "icon": "💧"
            }
          },
          {
            "symbol": "/r/",
            "label": "R — र (अंग्रेज़ी वाला)",
            "hindiApprox": "र (जीभ पीछे मुड़ी, नहीं छूती)",
            "tip": "हिंदी 'र' से अलग — जीभ को पीछे मोड़ें लेकिन तालू से मत छुएं — Red, Rain",
            "words": [
              {
                "w": "Red",
                "h": "रेड",
                "m": "लाल"
              },
              {
                "w": "Rain",
                "h": "रेन",
                "m": "बारिश"
              },
              {
                "w": "River",
                "h": "रिवर",
                "m": "नदी"
              },
              {
                "w": "Run",
                "h": "रन",
                "m": "दौड़ना"
              },
              {
                "w": "Road",
                "h": "रोड",
                "m": "सड़क"
              }
            ],
            "paragraph": "Richard rode his magnificent reddish-brown horse across the rolling green meadows toward the rushing mountain river as the early morning sun rose above the eastern horizon. The cool morning air was remarkably refreshing, carrying the rich scent of wild pine needles, damp earth, and blooming red clover. Richard was an experienced river guide who knew every rapid, rocky ledge, and deep eddy along thirty miles of the winding waterway. He pulled his horse to a gentle halt near a high gravel bank, looking down at the rushing white water where a group of six adventurous river rafters were preparing their sturdy rubber boat for an exhilarating morning journey. Richard dismounted, tied his horse to a strong birch tree, and walked down the rocky trail to inspect the rafters' equipment and review the safety rules with them. He checked every life jacket, secured the extra oars, and gave clear, reassuring instructions on how to steer through the roaring rapids ahead. The rafters cheered with eager excitement as they pushed their boat into the powerful current, confident that with Richard's expert guidance, their river journey would be an unforgettable adventure of thrills, teamwork, and triumphant success. Robert ran across the red gravel road toward the river bank as gentle rain began to fall. The river water flowed rapidly past the tall green trees. Robert wore a bright red raincoat that kept him warm and dry. He picked up a round river stone and skipped it across the surface with skill. Robert loved the fresh smell of rain in the countryside. Always remember to practice reading this target sound by repeating these key words out loud: Red, Rain, River, Run, Road. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Richard rode his magnificent reddish-brown horse across the rolling green meadows toward the rushing mountain river as the early morning sun rose above the eastern horizon.",
              "The cool morning air was remarkably refreshing, carrying the rich scent of wild pine needles, damp earth, and blooming red clover.",
              "Richard was an experienced river guide who knew every rapid, rocky ledge, and deep eddy along thirty miles of the winding waterway.",
              "He pulled his horse to a gentle halt near a high gravel bank, looking down at the rushing white water where a group of six adventurous river rafters were preparing their sturdy rubber boat for an exhilarating morning journey.",
              "Richard dismounted, tied his horse to a strong birch tree, and walked down the rocky trail to inspect the rafters' equipment and review the safety rules with them.",
              "He checked every life jacket, secured the extra oars, and gave clear, reassuring instructions on how to steer through the roaring rapids ahead.",
              "The rafters cheered with eager excitement as they pushed their boat into the powerful current, confident that with Richard's expert guidance, their river journey would be an unforgettable adventure of thrills, teamwork, and triumphant success.",
              "Robert ran across the red gravel road toward the river bank as gentle rain began to fall.",
              "The river water flowed rapidly past the tall green trees.",
              "Robert wore a bright red raincoat that kept him warm and dry.",
              "He picked up a round river stone and skipped it across the surface with skill.",
              "Robert loved the fresh smell of rain in the countryside.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Red, Rain, River, Run, Road.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 325,
            "mouthShape": "tongue_up",
            "mouthBadge": "👅 जीभ पीछे मुड़ेगी, तालु को बिल्कुल नहीं छुएगी!",
            "mouthGuide": "अंग्रेज़ी का 'R' हिंदी के 'र' जैसा तालु पर नहीं फड़कता! जीभ की नोक को पीछे की तरफ थोड़ा मोड़ें (curl back), लेकिन तालु से छूने न दें। होंठ थोड़े गोल रखें — 'र' (जैसे Red, Run, Car)।",
            "anchor": {
              "word": "Rabbit",
              "hindi": "रैबिट",
              "meaning": "खरगोश",
              "icon": "🐇"
            }
          },
          {
            "symbol": "/l/",
            "label": "L — ल",
            "hindiApprox": "ल",
            "tip": "जीभ की नोक ऊपर दांतों के पीछे — Lion, Ball, Milk",
            "words": [
              {
                "w": "Lion",
                "h": "लायन",
                "m": "शेर"
              },
              {
                "w": "Lamp",
                "h": "लैम्प",
                "m": "दीपक"
              },
              {
                "w": "Ball",
                "h": "बॉल",
                "m": "गेंद"
              },
              {
                "w": "Blue",
                "h": "ब्लू",
                "m": "नीला"
              },
              {
                "w": "Milk",
                "h": "मिल्क",
                "m": "दूध"
              }
            ],
            "paragraph": "Little Lily loved to walk along the lovely lakeshore near her family's mountain lodge on long, sunny summer afternoons. The crystal clear lake reflected the towering pine trees and the bright blue sky like a gigantic polished mirror of lapis lazuli. Lily carried a small wicker basket filled with colorful pebbles, smooth shells, and sweet yellow wildflowers that she had plucked from the grassy slopes along the trail. She paused beside an ancient willow tree whose long, graceful branches dipped gently into the cool lake water, creating tiny rippling circles on the calm surface. A mother duck led seven fluffy yellow ducklings across a shallow sandy cove, quacking softly as they learned to paddle and dive for tasty water plants. Lily sat on a flat limestone slab, leaned back against the warm tree trunk, and opened a favorite storybook about a brave little lamb that traveled through magical mountain valleys to help a lost child find her way home. The gentle lap of the water against the shore, the sweet song of the skylark, and the soothing warmth of the summer sun filled Lily's heart with pure peace and everlasting joy. Little Leo sat on the living room floor playing with a yellow toy lorry and a blue ball. Leo had a delicious lunch of lentil soup and a sweet red apple. The midday light filtered softly through the glass window. Leo listened to the sweet chime of the clock bell and felt full of joy. He loved to read stories about loyal lions and lovely green valleys. Always remember to practice reading this target sound by repeating these key words out loud: Lion, Lamp, Ball, Blue, Milk. When you read each sentence with steady focus, your mind begins to recognize the sound instantly. Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!",
            "sentences": [
              "Little Lily loved to walk along the lovely lakeshore near her family's mountain lodge on long, sunny summer afternoons.",
              "The crystal clear lake reflected the towering pine trees and the bright blue sky like a gigantic polished mirror of lapis lazuli.",
              "Lily carried a small wicker basket filled with colorful pebbles, smooth shells, and sweet yellow wildflowers that she had plucked from the grassy slopes along the trail.",
              "She paused beside an ancient willow tree whose long, graceful branches dipped gently into the cool lake water, creating tiny rippling circles on the calm surface.",
              "A mother duck led seven fluffy yellow ducklings across a shallow sandy cove, quacking softly as they learned to paddle and dive for tasty water plants.",
              "Lily sat on a flat limestone slab, leaned back against the warm tree trunk, and opened a favorite storybook about a brave little lamb that traveled through magical mountain valleys to help a lost child find her way home.",
              "The gentle lap of the water against the shore, the sweet song of the skylark, and the soothing warmth of the summer sun filled Lily's heart with pure peace and everlasting joy.",
              "Little Leo sat on the living room floor playing with a yellow toy lorry and a blue ball.",
              "Leo had a delicious lunch of lentil soup and a sweet red apple.",
              "The midday light filtered softly through the glass window.",
              "Leo listened to the sweet chime of the clock bell and felt full of joy.",
              "He loved to read stories about loyal lions and lovely green valleys.",
              "Always remember to practice reading this target sound by repeating these key words out loud: Lion, Lamp, Ball, Blue, Milk.",
              "When you read each sentence with steady focus, your mind begins to recognize the sound instantly.",
              "Keep reading every single day with joy, listen to both normal speed and slow speed audio, and celebrate your wonderful progress as you master this sound with complete ease and fluency!"
            ],
            "wordCount": 325,
            "mouthShape": "tongue_up",
            "mouthBadge": "👅 जीभ की नोक मसूड़े पर टिकी रहेगी + दोनों किनारों से हवा",
            "mouthGuide": "जीभ की नोक को ऊपर के सामने वाले दांतों के ठीक पीछे मसूड़े पर चिपकाकर रखें। हवा जीभ के दोनों किनारों से बाहर बहेगी — 'ल' (जैसे Leg, Lamp, Ball)।",
            "anchor": {
              "word": "Lion",
              "hindi": "लायन",
              "meaning": "शेर",
              "icon": "🦁"
            }
          }
        ]
      }
    ]
  },
  "level3": {
    "title": "दो अक्षरों का जोड़ — 2-Letter Word Builder",
    "subtitle": "जैसे हिंदी में अ+ब=अब, वैसे ही A+T=At, I+N=In, G+O=Go। पहले पहला अक्षर, फिर दूसरा, फिर दोनों एक साथ!",
    "families": [
      {
        "id": "f3_a",
        "name": "A Family (ए, ऐ)",
        "color": "#EA580C",
        "words": [
          {
            "word": "At",
            "p1": "A",
            "p2": "t",
            "h1": "ए",
            "h2": "ट",
            "hindi": "एट",
            "meaning": "पर / में",
            "rule": "A(ए)+T(ट)=एट"
          },
          {
            "word": "An",
            "p1": "A",
            "p2": "n",
            "h1": "ए",
            "h2": "न",
            "hindi": "एन",
            "meaning": "एक (vowel से पहले)",
            "rule": "A(ए)+N(न)=एन"
          },
          {
            "word": "Am",
            "p1": "A",
            "p2": "m",
            "h1": "ए",
            "h2": "म",
            "hindi": "एम",
            "meaning": "हूं (I am)",
            "rule": "A(ए)+M(म)=एम"
          },
          {
            "word": "As",
            "p1": "A",
            "p2": "s",
            "h1": "ऐ",
            "h2": "ज़",
            "hindi": "ऐज़",
            "meaning": "जैसे",
            "rule": "A(ऐ)+S(ज़)=ऐज़"
          },
          {
            "word": "Ax",
            "p1": "A",
            "p2": "x",
            "h1": "ऐ",
            "h2": "क्स",
            "hindi": "ऐक्स",
            "meaning": "कुल्हाड़ी",
            "rule": "A(ऐ)+X(क्स)=ऐक्स"
          }
        ],
        "paragraph": "Welcome to the reading practice story for the two-letter words in the A family. Today we will focus on these essential words: At, An, Am, As, and Ax. Read each sentence with care and listen to how smoothly these two letters join together. I am at home today. I am glad to see an apple on the table. Look at an apple on the plate. I am as happy as can be. Look at an ant on the floor. An ant is at work every single hour. I am watching an ant as it moves along the wall. Look at an ax resting near the big wood log. An ax is sharp and strong. A farmer is at the farm with an ax in his hand. Look at an old tree at the corner of the garden. An eagle sits at the highest branch. I am standing at the window as the morning sun comes up. I am looking at an airplane high up in the blue sky. Look at an owl at night as it sits in silence. I am feeling as fresh as the morning dew. Look at an orange inside the basket at the kitchen counter. I am seated at my desk as I practice my reading lesson. Look at an ink pot resting at the corner of the shelf. An artist is at work as he paints a beautiful picture. I am reading at a slow and steady pace. Look at an egg inside the nest at the branch. I am smiling as my teacher looks at my notebook. An ox is standing at the field as the gentle breeze blows. I am working at my tasks as fast as I can. Look at an umbrella at the front door. I am ready at any moment to learn new words. Look at an elephant at the zoo as children cheer. I am confident as I read each sentence with pride. Remember to practice reading At, An, Am, As, and Ax every day so that your reading becomes fast, accurate, and completely natural!",
        "sentences": [
          "Welcome to the reading practice story for the two-letter words in the A family.",
          "Today we will focus on these essential words: At, An, Am, As, and Ax.",
          "Read each sentence with care and listen to how smoothly these two letters join together.",
          "I am at home today.",
          "I am glad to see an apple on the table.",
          "Look at an apple on the plate.",
          "I am as happy as can be.",
          "Look at an ant on the floor.",
          "An ant is at work every single hour.",
          "I am watching an ant as it moves along the wall.",
          "Look at an ax resting near the big wood log.",
          "An ax is sharp and strong.",
          "A farmer is at the farm with an ax in his hand.",
          "Look at an old tree at the corner of the garden.",
          "An eagle sits at the highest branch.",
          "I am standing at the window as the morning sun comes up.",
          "I am looking at an airplane high up in the blue sky.",
          "Look at an owl at night as it sits in silence.",
          "I am feeling as fresh as the morning dew.",
          "Look at an orange inside the basket at the kitchen counter.",
          "I am seated at my desk as I practice my reading lesson.",
          "Look at an ink pot resting at the corner of the shelf.",
          "An artist is at work as he paints a beautiful picture.",
          "I am reading at a slow and steady pace.",
          "Look at an egg inside the nest at the branch.",
          "I am smiling as my teacher looks at my notebook.",
          "An ox is standing at the field as the gentle breeze blows.",
          "I am working at my tasks as fast as I can.",
          "Look at an umbrella at the front door.",
          "I am ready at any moment to learn new words.",
          "Look at an elephant at the zoo as children cheer.",
          "I am confident as I read each sentence with pride.",
          "Remember to practice reading At, An, Am, As, and Ax every day so that your reading becomes fast, accurate, and completely natural!"
        ],
        "wordCount": 346
      },
      {
        "id": "f3_i",
        "name": "I Family (इ)",
        "color": "#7C3AED",
        "words": [
          {
            "word": "In",
            "p1": "I",
            "p2": "n",
            "h1": "इ",
            "h2": "न",
            "hindi": "इन",
            "meaning": "अंदर",
            "rule": "I(इ)+N(न)=इन"
          },
          {
            "word": "Is",
            "p1": "I",
            "p2": "s",
            "h1": "इ",
            "h2": "ज़",
            "hindi": "इज़",
            "meaning": "है",
            "rule": "I(इ)+S(ज़)=इज़"
          },
          {
            "word": "It",
            "p1": "I",
            "p2": "t",
            "h1": "इ",
            "h2": "ट",
            "hindi": "इट",
            "meaning": "यह",
            "rule": "I(इ)+T(ट)=इट"
          },
          {
            "word": "If",
            "p1": "I",
            "p2": "f",
            "h1": "इ",
            "h2": "फ़",
            "hindi": "इफ़",
            "meaning": "अगर",
            "rule": "I(इ)+F(फ़)=इफ़"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for the two-letter words in the I family. Today we practice reading four very common words: In, Is, It, and If. Read along out loud and notice how easily these short words appear in daily sentences. Look around the room and see what is in here. It is a bright day. The sun is shining in the sky. If you look closely, you can see a bird in the green tree. It is sitting in its warm nest. Is it singing a sweet song? Yes, it is singing in the morning breeze. A small brown puppy is playing in the garden. It is very happy. If you call the puppy, it runs toward you with joy. It is a friendly little pet. Look at the book on the table. It is open. The pencil is in the pencil box. If you need a pencil, it is right there. Water is in the glass. It is cool and fresh. If you are thirsty, you can drink it now. Milk is in the white cup. It is warm and tasty. A golden key is in the secret drawer. If the door is locked, you can open it with the key. The ball is in the big basket. It is red and round. If you throw the ball, it bounces high in the air. The teacher is in the classroom. She says that it is time to read. If you listen with care, it is easy to understand every word. The cat is sleeping in the soft box. It is resting in peace. If you make a noise, it opens its green eyes. Everything is in order today. It is good to practice reading every day. If you practice with patience, it is certain that your English reading will become wonderful and fluent!",
        "sentences": [
          "Welcome to the reading practice passage for the two-letter words in the I family.",
          "Today we practice reading four very common words: In, Is, It, and If.",
          "Read along out loud and notice how easily these short words appear in daily sentences.",
          "Look around the room and see what is in here.",
          "It is a bright day.",
          "The sun is shining in the sky.",
          "If you look closely, you can see a bird in the green tree.",
          "It is sitting in its warm nest.",
          "Is it singing a sweet song?",
          "Yes, it is singing in the morning breeze.",
          "A small brown puppy is playing in the garden.",
          "It is very happy.",
          "If you call the puppy, it runs toward you with joy.",
          "It is a friendly little pet.",
          "Look at the book on the table.",
          "It is open.",
          "The pencil is in the pencil box.",
          "If you need a pencil, it is right there.",
          "Water is in the glass.",
          "It is cool and fresh.",
          "If you are thirsty, you can drink it now.",
          "Milk is in the white cup.",
          "It is warm and tasty.",
          "A golden key is in the secret drawer.",
          "If the door is locked, you can open it with the key.",
          "The ball is in the big basket.",
          "It is red and round.",
          "If you throw the ball, it bounces high in the air.",
          "The teacher is in the classroom.",
          "She says that it is time to read.",
          "If you listen with care, it is easy to understand every word.",
          "The cat is sleeping in the soft box.",
          "It is resting in peace.",
          "If you make a noise, it opens its green eyes.",
          "Everything is in order today.",
          "It is good to practice reading every day.",
          "If you practice with patience, it is certain that your English reading will become wonderful and fluent!"
        ],
        "wordCount": 306
      },
      {
        "id": "f3_o",
        "name": "O Family (ऑ, ओ)",
        "color": "#059669",
        "words": [
          {
            "word": "On",
            "p1": "O",
            "p2": "n",
            "h1": "ऑ",
            "h2": "न",
            "hindi": "ऑन",
            "meaning": "पर / चालू",
            "rule": "O(ऑ)+N(न)=ऑन"
          },
          {
            "word": "Of",
            "p1": "O",
            "p2": "f",
            "h1": "ऑ",
            "h2": "व",
            "hindi": "ऑव",
            "meaning": "का / की",
            "rule": "O(ऑ)+F(व)=ऑव"
          },
          {
            "word": "Or",
            "p1": "O",
            "p2": "r",
            "h1": "ऑ",
            "h2": "र",
            "hindi": "ऑर",
            "meaning": "या",
            "rule": "O(ऑ)+R(र)=ऑर"
          },
          {
            "word": "Go",
            "p1": "G",
            "p2": "o",
            "h1": "ग",
            "h2": "ओ",
            "hindi": "गो",
            "meaning": "जाना",
            "rule": "G(ग)+O(ओ)=गो"
          },
          {
            "word": "No",
            "p1": "N",
            "p2": "o",
            "h1": "न",
            "h2": "ओ",
            "hindi": "नो",
            "meaning": "नहीं",
            "rule": "N(न)+O(ओ)=नो"
          },
          {
            "word": "So",
            "p1": "S",
            "p2": "o",
            "h1": "स",
            "h2": "ओ",
            "hindi": "सो",
            "meaning": "इसलिए",
            "rule": "S(स)+O(ओ)=सो"
          },
          {
            "word": "To",
            "p1": "T",
            "p2": "o",
            "h1": "ट",
            "h2": "ू",
            "hindi": "टू",
            "meaning": "को",
            "rule": "T(ट)+O(ू)=टू"
          },
          {
            "word": "Do",
            "p1": "D",
            "p2": "o",
            "h1": "ड",
            "h2": "ू",
            "hindi": "डू",
            "meaning": "करना",
            "rule": "D(ड)+O(ू)=डू"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for the two-letter words in the O family. In this reading lesson, we will practice these powerful words: On, Ox, Of, Or, To, Do, Go, No, and So. Let us read every sentence out loud with clear voice and confidence. The yellow book is on the table. Turn on the light so that we can read clearly. A strong ox is standing on the grass. The horn of the ox is long and strong. We see a herd of cows and an ox on the green farm. Do you want tea or do you want milk? I want a cup of hot tea to drink. It is time to go to school now. We must do our best work today. There is no time to waste so let us begin. Go to the door and open it. No one is outside so do not worry. A piece of bread is on the plate. Take a bite of it and go to the hall. Do you like apples or do you like sweet mangoes? I like both of them so much. The cat is sleeping on the warm mat. Do not disturb the cat so it can rest. We love to go to the park on Sunday. There are so many tall trees of green leaves. No child wants to stay inside when the weather is so pleasant. Go to your friend and say hello. Do your daily reading lesson so you can learn quickly. Listen to the voice of your teacher. It is so helpful to do this reading exercise. We have no doubt that you will succeed. Walk on the path to the garden or go to the playground. So much joy is waiting for you as you read these words every day with dedication!",
        "sentences": [
          "Welcome to the reading practice passage for the two-letter words in the O family.",
          "In this reading lesson, we will practice these powerful words: On, Ox, Of, Or, To, Do, Go, No, and So.",
          "Let us read every sentence out loud with clear voice and confidence.",
          "The yellow book is on the table.",
          "Turn on the light so that we can read clearly.",
          "A strong ox is standing on the grass.",
          "The horn of the ox is long and strong.",
          "We see a herd of cows and an ox on the green farm.",
          "Do you want tea or do you want milk?",
          "I want a cup of hot tea to drink.",
          "It is time to go to school now.",
          "We must do our best work today.",
          "There is no time to waste so let us begin.",
          "Go to the door and open it.",
          "No one is outside so do not worry.",
          "A piece of bread is on the plate.",
          "Take a bite of it and go to the hall.",
          "Do you like apples or do you like sweet mangoes?",
          "I like both of them so much.",
          "The cat is sleeping on the warm mat.",
          "Do not disturb the cat so it can rest.",
          "We love to go to the park on Sunday.",
          "There are so many tall trees of green leaves.",
          "No child wants to stay inside when the weather is so pleasant.",
          "Go to your friend and say hello.",
          "Do your daily reading lesson so you can learn quickly.",
          "Listen to the voice of your teacher.",
          "It is so helpful to do this reading exercise.",
          "We have no doubt that you will succeed.",
          "Walk on the path to the garden or go to the playground.",
          "So much joy is waiting for you as you read these words every day with dedication!"
        ],
        "wordCount": 302
      },
      {
        "id": "f3_u",
        "name": "U Family (अ, उ)",
        "color": "#B45309",
        "words": [
          {
            "word": "Up",
            "p1": "U",
            "p2": "p",
            "h1": "अ",
            "h2": "प",
            "hindi": "अप",
            "meaning": "ऊपर",
            "rule": "U(अ)+P(प)=अप"
          },
          {
            "word": "Us",
            "p1": "U",
            "p2": "s",
            "h1": "अ",
            "h2": "स",
            "hindi": "अस",
            "meaning": "हमें",
            "rule": "U(अ)+S(स)=अस"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for the two-letter words in the U family. Today our focus is on two very important words: Up and Us. Read every line with energy and follow the sound of the short vowel U. The morning sun comes up in the east. Wake up early and look up at the bright sky. A red bird flies high up into the clouds. Stand up and stretch your arms up toward the ceiling. The teacher smiles and looks at us with warmth. She asks us to open our reading books. She tells us that reading will help us grow smart and wise. We look up at the blackboard to see the new words. Look up at the clock on the wall. It is time for us to begin our morning lesson. The puppy runs up the stairs to meet us at the door. It jumps up with excitement and wags its tail. Join us for a fun game in the playground. The teacher gives us a bright red ball. Throw the ball up in the air and watch it come down. It is good for us to play outside in the fresh air. The sun warms us as we run across the field. Come with us to the library to find great storybooks. Reading teaches us so many wonderful things about the world around us. Pick up your pencil and hold it with care. Look up at the green trees and look up at the soaring birds. Nature gives us pure joy every day. Rain falls from up above and cools us after a warm sunny afternoon. The path goes up the hill to a peaceful garden. Walk up the stone steps with us. Let us sit under the shade of the big tree. Reading brings us together and helps us build confidence. Keep your head held high up, believe in yourself, and join us in celebrating your reading journey every single day!",
        "sentences": [
          "Welcome to the reading practice passage for the two-letter words in the U family.",
          "Today our focus is on two very important words: Up and Us.",
          "Read every line with energy and follow the sound of the short vowel U.",
          "The morning sun comes up in the east.",
          "Wake up early and look up at the bright sky.",
          "A red bird flies high up into the clouds.",
          "Stand up and stretch your arms up toward the ceiling.",
          "The teacher smiles and looks at us with warmth.",
          "She asks us to open our reading books.",
          "She tells us that reading will help us grow smart and wise.",
          "We look up at the blackboard to see the new words.",
          "Look up at the clock on the wall.",
          "It is time for us to begin our morning lesson.",
          "The puppy runs up the stairs to meet us at the door.",
          "It jumps up with excitement and wags its tail.",
          "Join us for a fun game in the playground.",
          "The teacher gives us a bright red ball.",
          "Throw the ball up in the air and watch it come down.",
          "It is good for us to play outside in the fresh air.",
          "The sun warms us as we run across the field.",
          "Come with us to the library to find great storybooks.",
          "Reading teaches us so many wonderful things about the world around us.",
          "Pick up your pencil and hold it with care.",
          "Look up at the green trees and look up at the soaring birds.",
          "Nature gives us pure joy every day.",
          "Rain falls from up above and cools us after a warm sunny afternoon.",
          "The path goes up the hill to a peaceful garden.",
          "Walk up the stone steps with us.",
          "Let us sit under the shade of the big tree.",
          "Reading brings us together and helps us build confidence.",
          "Keep your head held high up, believe in yourself, and join us in celebrating your reading journey every single day!"
        ],
        "wordCount": 327
      },
      {
        "id": "f3_e",
        "name": "E Family (ई, ए)",
        "color": "#1D4ED8",
        "words": [
          {
            "word": "He",
            "p1": "H",
            "p2": "e",
            "h1": "ह",
            "h2": "ी",
            "hindi": "ही",
            "meaning": "वह (पुरुष)",
            "rule": "H(ह)+E(ी)=ही"
          },
          {
            "word": "Me",
            "p1": "M",
            "p2": "e",
            "h1": "म",
            "h2": "ी",
            "hindi": "मी",
            "meaning": "मुझे",
            "rule": "M(म)+E(ी)=मी"
          },
          {
            "word": "We",
            "p1": "W",
            "p2": "e",
            "h1": "व",
            "h2": "ी",
            "hindi": "वी",
            "meaning": "हम",
            "rule": "W(व)+E(ी)=वी"
          },
          {
            "word": "Be",
            "p1": "B",
            "p2": "e",
            "h1": "ब",
            "h2": "ी",
            "hindi": "बी",
            "meaning": "होना",
            "rule": "B(ब)+E(ी)=बी"
          },
          {
            "word": "My",
            "p1": "M",
            "p2": "y",
            "h1": "म",
            "h2": "आइ",
            "hindi": "माइ",
            "meaning": "मेरा",
            "rule": "M(म)+Y(आइ)=माइ"
          },
          {
            "word": "By",
            "p1": "B",
            "p2": "y",
            "h1": "ब",
            "h2": "आइ",
            "hindi": "बाइ",
            "meaning": "द्वारा",
            "rule": "B(ब)+Y(आइ)=बाइ"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for the two-letter words in the E family. In this lesson, we will master four essential words: He, Me, We, and Be. Read along out loud with clear pronunciation and notice the long E sound. He is my good friend Ravi. He likes to read books every single day. He comes to my house to study with me. He brings his notebook to show me his work. Look at him as he smiles. He is very kind and helpful to everyone. He helps me when I have a difficult question. We walk together to school every morning. We enjoy our walk as the cool wind blows. We can be good students if we study with care. The teacher tells us to be polite and to be honest at all times. She gives me a new book to read. She asks me to read out loud so everyone can hear me. He listens carefully as I read each line. We are happy because we learn something new every day. Let it be known that reading is easy when we practice regularly. He wants to be a doctor when he grows up. I want to be a teacher and teach reading. We can be anything we dream if we work hard. He plays football with me in the afternoon. He passes the ball to me and I kick it toward the goal. We celebrate when we score a goal together. Be calm, be patient, and be proud of your progress. He says that reading gives him confidence. Give me your hand and let us walk together. We will always be good companions. He reads one page and then he gives the book to me. We take turns reading sentence by sentence. It is wonderful for us to be here learning together every single day!",
        "sentences": [
          "Welcome to the reading practice passage for the two-letter words in the E family.",
          "In this lesson, we will master four essential words: He, Me, We, and Be.",
          "Read along out loud with clear pronunciation and notice the long E sound.",
          "He is my good friend Ravi.",
          "He likes to read books every single day.",
          "He comes to my house to study with me.",
          "He brings his notebook to show me his work.",
          "Look at him as he smiles.",
          "He is very kind and helpful to everyone.",
          "He helps me when I have a difficult question.",
          "We walk together to school every morning.",
          "We enjoy our walk as the cool wind blows.",
          "We can be good students if we study with care.",
          "The teacher tells us to be polite and to be honest at all times.",
          "She gives me a new book to read.",
          "She asks me to read out loud so everyone can hear me.",
          "He listens carefully as I read each line.",
          "We are happy because we learn something new every day.",
          "Let it be known that reading is easy when we practice regularly.",
          "He wants to be a doctor when he grows up.",
          "I want to be a teacher and teach reading.",
          "We can be anything we dream if we work hard.",
          "He plays football with me in the afternoon.",
          "He passes the ball to me and I kick it toward the goal.",
          "We celebrate when we score a goal together.",
          "Be calm, be patient, and be proud of your progress.",
          "He says that reading gives him confidence.",
          "Give me your hand and let us walk together.",
          "We will always be good companions.",
          "He reads one page and then he gives the book to me.",
          "We take turns reading sentence by sentence.",
          "It is wonderful for us to be here learning together every single day!"
        ],
        "wordCount": 308
      }
    ]
  },
  "level4": {
    "title": "तीन अक्षरों के CVC शब्द — Word Families",
    "subtitle": "व्यंजन + स्वर + व्यंजन (Consonant + Vowel + Consonant)। नीला = व्यंजन, नारंगी = स्वर। एक Family सीखो, 6-8 शब्द अपने आप आ जाते हैं!",
    "families": [
      {
        "id": "wf_at",
        "name": "-AT Family (ैट)",
        "vowel": "a",
        "rime": "at",
        "words": [
          {
            "word": "Cat",
            "c1": "C",
            "v": "a",
            "c2": "t",
            "h1": "क",
            "hv": "ै",
            "h2": "ट",
            "hindi": "कैट",
            "meaning": "बिल्ली",
            "blend": "क+ै+ट=कैट"
          },
          {
            "word": "Bat",
            "c1": "B",
            "v": "a",
            "c2": "t",
            "h1": "ब",
            "hv": "ै",
            "h2": "ट",
            "hindi": "बैट",
            "meaning": "बल्ला",
            "blend": "ब+ै+ट=बैट"
          },
          {
            "word": "Rat",
            "c1": "R",
            "v": "a",
            "c2": "t",
            "h1": "र",
            "hv": "ै",
            "h2": "ट",
            "hindi": "रैट",
            "meaning": "चूहा",
            "blend": "र+ै+ट=रैट"
          },
          {
            "word": "Hat",
            "c1": "H",
            "v": "a",
            "c2": "t",
            "h1": "ह",
            "hv": "ै",
            "h2": "ट",
            "hindi": "हैट",
            "meaning": "टोपी",
            "blend": "ह+ै+ट=हैट"
          },
          {
            "word": "Mat",
            "c1": "M",
            "v": "a",
            "c2": "t",
            "h1": "म",
            "hv": "ै",
            "h2": "ट",
            "hindi": "मैट",
            "meaning": "चटाई",
            "blend": "म+ै+ट=मैट"
          },
          {
            "word": "Fat",
            "c1": "F",
            "v": "a",
            "c2": "t",
            "h1": "फ़",
            "hv": "ै",
            "h2": "ट",
            "hindi": "फ़ैट",
            "meaning": "मोटा",
            "blend": "फ़+ै+ट=फ़ैट"
          },
          {
            "word": "Sat",
            "c1": "S",
            "v": "a",
            "c2": "t",
            "h1": "स",
            "hv": "ै",
            "h2": "ट",
            "hindi": "सैट",
            "meaning": "बैठा (past)",
            "blend": "स+ै+ट=सैट"
          },
          {
            "word": "Flat",
            "c1": "Fl",
            "v": "a",
            "c2": "t",
            "h1": "फ़्ल",
            "hv": "ै",
            "h2": "ट",
            "hindi": "फ़्लैट",
            "meaning": "सपाट / मकान",
            "blend": "फ़्ल+ै+ट=फ़्लैट"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for the -AT word family. In this lively story, you will read many words that end in the sound -at: Cat, Bat, Rat, Hat, Mat, Fat, Sat, and Pat. Read each sentence with clarity and joy. Once upon a time, there was a big fat cat named Sam. The fat cat wore a funny little hat on its head. The cat had a soft brown mat near the kitchen door. The fat cat sat on the warm mat all morning long. Suddenly, a little brown rat ran across the room. The rat looked at the fat cat on the mat. The cat saw the rat and jumped up from the mat. The rat had a tiny red hat. The rat ran fast past a wooden cricket bat resting against the wall. The cat ran after the rat with a soft pat of its paws. But the fat cat was too slow because it was very fat. The rat ran under the table and hid behind the bat. The cat sat back down on the mat with a sad look. A little boy named Dan saw the cat on the mat. Dan had a blue hat and a wooden bat in his hand. Dan gave the fat cat a gentle pat on its back. The cat looked at Dan and sat quietly. Dan picked up his bat and put on his hat. Then Dan saw the tiny rat peeking out from behind the door. Dan smiled and said to the cat, do not chase the rat today. The fat cat sat on the mat and closed its eyes. The rat sat in the corner and ate a tiny piece of cheese. Dan sat on a chair with his bat across his knees. The cat, the rat, and the boy with the bat all rested peacefully together in the sunny room. Practice reading Cat, Bat, Rat, Hat, Mat, Fat, Sat, and Pat out loud every day until your reading becomes smooth, effortless, and full of confidence!",
        "sentences": [
          "Welcome to the reading practice passage for the -AT word family.",
          "In this lively story, you will read many words that end in the sound -at: Cat, Bat, Rat, Hat, Mat, Fat, Sat, and Pat.",
          "Read each sentence with clarity and joy.",
          "Once upon a time, there was a big fat cat named Sam.",
          "The fat cat wore a funny little hat on its head.",
          "The cat had a soft brown mat near the kitchen door.",
          "The fat cat sat on the warm mat all morning long.",
          "Suddenly, a little brown rat ran across the room.",
          "The rat looked at the fat cat on the mat.",
          "The cat saw the rat and jumped up from the mat.",
          "The rat had a tiny red hat.",
          "The rat ran fast past a wooden cricket bat resting against the wall.",
          "The cat ran after the rat with a soft pat of its paws.",
          "But the fat cat was too slow because it was very fat.",
          "The rat ran under the table and hid behind the bat.",
          "The cat sat back down on the mat with a sad look.",
          "A little boy named Dan saw the cat on the mat.",
          "Dan had a blue hat and a wooden bat in his hand.",
          "Dan gave the fat cat a gentle pat on its back.",
          "The cat looked at Dan and sat quietly.",
          "Dan picked up his bat and put on his hat.",
          "Then Dan saw the tiny rat peeking out from behind the door.",
          "Dan smiled and said to the cat, do not chase the rat today.",
          "The fat cat sat on the mat and closed its eyes.",
          "The rat sat in the corner and ate a tiny piece of cheese.",
          "Dan sat on a chair with his bat across his knees.",
          "The cat, the rat, and the boy with the bat all rested peacefully together in the sunny room.",
          "Practice reading Cat, Bat, Rat, Hat, Mat, Fat, Sat, and Pat out loud every day until your reading becomes smooth, effortless, and full of confidence!"
        ],
        "wordCount": 340
      },
      {
        "id": "wf_an",
        "name": "-AN Family (ैन)",
        "vowel": "a",
        "rime": "an",
        "words": [
          {
            "word": "Fan",
            "c1": "F",
            "v": "a",
            "c2": "n",
            "h1": "फ़",
            "hv": "ै",
            "h2": "न",
            "hindi": "फ़ैन",
            "meaning": "पंखा",
            "blend": "फ़+ै+न=फ़ैन"
          },
          {
            "word": "Pan",
            "c1": "P",
            "v": "a",
            "c2": "n",
            "h1": "प",
            "hv": "ै",
            "h2": "न",
            "hindi": "पैन",
            "meaning": "तवा",
            "blend": "प+ै+न=पैन"
          },
          {
            "word": "Van",
            "c1": "V",
            "v": "a",
            "c2": "n",
            "h1": "व",
            "hv": "ै",
            "h2": "न",
            "hindi": "वैन",
            "meaning": "वैन गाड़ी",
            "blend": "व+ै+न=वैन"
          },
          {
            "word": "Man",
            "c1": "M",
            "v": "a",
            "c2": "n",
            "h1": "म",
            "hv": "ै",
            "h2": "न",
            "hindi": "मैन",
            "meaning": "आदमी",
            "blend": "म+ै+न=मैन"
          },
          {
            "word": "Can",
            "c1": "C",
            "v": "a",
            "c2": "n",
            "h1": "क",
            "hv": "ै",
            "h2": "न",
            "hindi": "कैन",
            "meaning": "डिब्बा / सकना",
            "blend": "क+ै+न=कैन"
          },
          {
            "word": "Ran",
            "c1": "R",
            "v": "a",
            "c2": "n",
            "h1": "र",
            "hv": "ै",
            "h2": "न",
            "hindi": "रैन",
            "meaning": "दौड़ा (past)",
            "blend": "र+ै+न=रैन"
          },
          {
            "word": "Plan",
            "c1": "Pl",
            "v": "a",
            "c2": "n",
            "h1": "प्ल",
            "hv": "ै",
            "h2": "न",
            "hindi": "प्लैन",
            "meaning": "योजना",
            "blend": "प्ल+ै+न=प्लैन"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for the -AN word family. In this exciting reading story, we practice words ending in -an: Man, Pan, Fan, Van, Can, Ran, and Tan. Let us read together with clear pronunciation and strong voice. A tall man named Stan walked into the kitchen on a bright sunny morning. The man had a deep tan from working under the summer sun. The kitchen was very warm, so the man turned on the electric fan. The fan began to spin with a cool breeze. The man picked up a black cooking pan from the stove. He placed the pan on the counter next to a shiny metal can. Inside the can, there were fresh beans ready for breakfast. The man heated the pan and cooked a delicious meal. Outside the window, a large blue van pulled up to the driveway. A friendly delivery man got out of the van with a heavy box in his hands. The man in the kitchen ran to the front door to greet him. Can you help me carry this box, asked the delivery man. Yes, I can help you, replied the man with a warm smile. A small puppy ran out of the house toward the blue van. The puppy was tan and white. The man ran after the puppy before it could reach the road. He caught the tan puppy and gave it a gentle hug. The man carried the box into the house and set it down near the fan. The cool fan felt wonderful after running outside. The man poured fresh water from a can into a bowl for the tan puppy. The puppy ran to the bowl and drank happily. The man picked up his cooking pan and enjoyed his hot breakfast while the fan hummed softly. Practice reading Man, Pan, Fan, Van, Can, Ran, and Tan every day to make your reading fluent and completely natural!",
        "sentences": [
          "Welcome to the reading practice passage for the -AN word family.",
          "In this exciting reading story, we practice words ending in -an: Man, Pan, Fan, Van, Can, Ran, and Tan.",
          "Let us read together with clear pronunciation and strong voice.",
          "A tall man named Stan walked into the kitchen on a bright sunny morning.",
          "The man had a deep tan from working under the summer sun.",
          "The kitchen was very warm, so the man turned on the electric fan.",
          "The fan began to spin with a cool breeze.",
          "The man picked up a black cooking pan from the stove.",
          "He placed the pan on the counter next to a shiny metal can.",
          "Inside the can, there were fresh beans ready for breakfast.",
          "The man heated the pan and cooked a delicious meal.",
          "Outside the window, a large blue van pulled up to the driveway.",
          "A friendly delivery man got out of the van with a heavy box in his hands.",
          "The man in the kitchen ran to the front door to greet him.",
          "Can you help me carry this box, asked the delivery man.",
          "Yes, I can help you, replied the man with a warm smile.",
          "A small puppy ran out of the house toward the blue van.",
          "The puppy was tan and white.",
          "The man ran after the puppy before it could reach the road.",
          "He caught the tan puppy and gave it a gentle hug.",
          "The man carried the box into the house and set it down near the fan.",
          "The cool fan felt wonderful after running outside.",
          "The man poured fresh water from a can into a bowl for the tan puppy.",
          "The puppy ran to the bowl and drank happily.",
          "The man picked up his cooking pan and enjoyed his hot breakfast while the fan hummed softly.",
          "Practice reading Man, Pan, Fan, Van, Can, Ran, and Tan every day to make your reading fluent and completely natural!"
        ],
        "wordCount": 321
      },
      {
        "id": "wf_en",
        "name": "-EN / -ED Family (ेन, ेड)",
        "vowel": "e",
        "rime": "en",
        "words": [
          {
            "word": "Pen",
            "c1": "P",
            "v": "e",
            "c2": "n",
            "h1": "प",
            "hv": "े",
            "h2": "न",
            "hindi": "पेन",
            "meaning": "कलम",
            "blend": "प+े+न=पेन"
          },
          {
            "word": "Ten",
            "c1": "T",
            "v": "e",
            "c2": "n",
            "h1": "ट",
            "hv": "े",
            "h2": "न",
            "hindi": "टेन",
            "meaning": "दस",
            "blend": "ट+े+न=टेन"
          },
          {
            "word": "Hen",
            "c1": "H",
            "v": "e",
            "c2": "n",
            "h1": "ह",
            "hv": "े",
            "h2": "न",
            "hindi": "हेन",
            "meaning": "मुर्गी",
            "blend": "ह+े+न=हेन"
          },
          {
            "word": "Bed",
            "c1": "B",
            "v": "e",
            "c2": "d",
            "h1": "ब",
            "hv": "े",
            "h2": "ड",
            "hindi": "बेड",
            "meaning": "बिस्तर",
            "blend": "ब+े+ड=बेड"
          },
          {
            "word": "Red",
            "c1": "R",
            "v": "e",
            "c2": "d",
            "h1": "र",
            "hv": "े",
            "h2": "ड",
            "hindi": "रेड",
            "meaning": "लाल",
            "blend": "र+े+ड=रेड"
          },
          {
            "word": "Net",
            "c1": "N",
            "v": "e",
            "c2": "t",
            "h1": "न",
            "hv": "े",
            "h2": "ट",
            "hindi": "नेट",
            "meaning": "जाल",
            "blend": "न+े+ट=नेट"
          },
          {
            "word": "Wet",
            "c1": "W",
            "v": "e",
            "c2": "t",
            "h1": "व",
            "hv": "े",
            "h2": "ट",
            "hindi": "वेट",
            "meaning": "गीला",
            "blend": "व+े+ट=वेट"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for the -EN and -ED word family. Today we will read many words with the short E sound: Pen, Hen, Ten, Men, Den, Bed, Red, Fed, and Led. Read each line with attention and care. In a quiet village near a green forest, there lived ten hardworking men. One morning, the ten men walked past a cozy red farmhouse. Near the farmhouse, there was a red wooden coop where a brown hen lived. The red hen laid ten white eggs every single morning. A kind farmer came out of the house holding a shiny black pen in his pocket. The farmer fed the red hen with golden grains of wheat. The hen clucked happily as the farmer fed it with gentle care. Behind the farm, a gentle path led up the hill toward a rocky den where friendly animals rested. The farmer led his horse along the path as the ten men walked by. The horse had a bright red saddle on its back. In the farmer's cozy bedroom, there was a neat wooden bed with a warm red blanket. The farmer sat on the edge of the bed and took out his pen from his pocket. He used the pen to write down the number ten in his daily diary: ten eggs, ten men, and one healthy red hen. The farmer had fed all the animals on the farm before noon. He led his children outside to see the ten men working in the fields. The red hen pecked at the grains near the garden fence. When evening fell, the ten men returned to their homes. The farmer went back to his red bed and rested his head on the soft pillow. He had fed his family and led a peaceful day. Practice reading Pen, Hen, Ten, Men, Bed, Red, Fed, and Led out loud every single day for pure reading mastery!",
        "sentences": [
          "Welcome to the reading practice passage for the -EN and -ED word family.",
          "Today we will read many words with the short E sound: Pen, Hen, Ten, Men, Den, Bed, Red, Fed, and Led.",
          "Read each line with attention and care.",
          "In a quiet village near a green forest, there lived ten hardworking men.",
          "One morning, the ten men walked past a cozy red farmhouse.",
          "Near the farmhouse, there was a red wooden coop where a brown hen lived.",
          "The red hen laid ten white eggs every single morning.",
          "A kind farmer came out of the house holding a shiny black pen in his pocket.",
          "The farmer fed the red hen with golden grains of wheat.",
          "The hen clucked happily as the farmer fed it with gentle care.",
          "Behind the farm, a gentle path led up the hill toward a rocky den where friendly animals rested.",
          "The farmer led his horse along the path as the ten men walked by.",
          "The horse had a bright red saddle on its back.",
          "In the farmer's cozy bedroom, there was a neat wooden bed with a warm red blanket.",
          "The farmer sat on the edge of the bed and took out his pen from his pocket.",
          "He used the pen to write down the number ten in his daily diary: ten eggs, ten men, and one healthy red hen.",
          "The farmer had fed all the animals on the farm before noon.",
          "He led his children outside to see the ten men working in the fields.",
          "The red hen pecked at the grains near the garden fence.",
          "When evening fell, the ten men returned to their homes.",
          "The farmer went back to his red bed and rested his head on the soft pillow.",
          "He had fed his family and led a peaceful day.",
          "Practice reading Pen, Hen, Ten, Men, Bed, Red, Fed, and Led out loud every single day for pure reading mastery!"
        ],
        "wordCount": 319
      },
      {
        "id": "wf_in",
        "name": "-IN / -IT / -IP Family (िन, िट, िप)",
        "vowel": "i",
        "rime": "in",
        "words": [
          {
            "word": "Pin",
            "c1": "P",
            "v": "i",
            "c2": "n",
            "h1": "प",
            "hv": "ि",
            "h2": "न",
            "hindi": "पिन",
            "meaning": "पिन / सुई",
            "blend": "प+ि+न=पिन"
          },
          {
            "word": "Bin",
            "c1": "B",
            "v": "i",
            "c2": "n",
            "h1": "ब",
            "hv": "ि",
            "h2": "न",
            "hindi": "बिन",
            "meaning": "कूड़ेदान",
            "blend": "ब+ि+न=बिन"
          },
          {
            "word": "Win",
            "c1": "W",
            "v": "i",
            "c2": "n",
            "h1": "व",
            "hv": "ि",
            "h2": "न",
            "hindi": "विन",
            "meaning": "जीतना",
            "blend": "व+ि+न=विन"
          },
          {
            "word": "Sit",
            "c1": "S",
            "v": "i",
            "c2": "t",
            "h1": "स",
            "hv": "ि",
            "h2": "ट",
            "hindi": "सिट",
            "meaning": "बैठना",
            "blend": "स+ि+ट=सिट"
          },
          {
            "word": "Hit",
            "c1": "H",
            "v": "i",
            "c2": "t",
            "h1": "ह",
            "hv": "ि",
            "h2": "ट",
            "hindi": "हिट",
            "meaning": "मारना",
            "blend": "ह+ि+ट=हिट"
          },
          {
            "word": "Lip",
            "c1": "L",
            "v": "i",
            "c2": "p",
            "h1": "ल",
            "hv": "ि",
            "h2": "प",
            "hindi": "लिप",
            "meaning": "होंठ",
            "blend": "ल+ि+प=लिप"
          },
          {
            "word": "Tip",
            "c1": "T",
            "v": "i",
            "c2": "p",
            "h1": "ट",
            "hv": "ि",
            "h2": "प",
            "hindi": "टिप",
            "meaning": "टिप / नोक",
            "blend": "ट+ि+प=टिप"
          },
          {
            "word": "Spin",
            "c1": "Sp",
            "v": "i",
            "c2": "n",
            "h1": "स्प",
            "hv": "ि",
            "h2": "न",
            "hindi": "स्पिन",
            "meaning": "घूमना",
            "blend": "स्प+ि+न=स्पिन"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for the -IN, -IT, and -IP word family. In this reading adventure, we will read words with the short I sound: Pin, Tin, Win, Bin, Sit, Hit, Fit, Lit, Lip, Tip, Dip, and Zip. Read each sentence with energy and observe the quick, crisp sound of letter I. Little Tim sat on a wooden bench in the sunny park. Tim had a shiny tin box in his hands. Tim opened the tin box to see what was inside. Inside the tin box, there was a golden safety pin and a small metal whistle. Tim put the pin safely in the corner of the tin box. The lid of the box was tight, but it was an exact fit. Tim had to pull the zip on his small blue backpack. The zip moved smoothly from the bottom to the tip of the bag. A soft candle was lit on a nearby table as the evening approached. Tim sat quietly and watched a baseball player hit a white ball high into the air. The ball flew across the field and landed right inside a green recycling bin. Everyone cheered because the team was about to win the championship game. To win the game, the player had to hit the ball one more time. Tim smiled, and a happy grin appeared on his lower lip. Tim stood up from where he sat and walked over to the water fountain. He took a small sip of cool water to moisten his lip. Tim decided to dip his paintbrush into a pot of blue paint to make a sign for the team. He wrote: We will win today! Tim put the tip of the brush on the paper and drew a golden star. He put the tin box inside his backpack and pulled the zip closed. It was a perfect fit. Tim was ready to cheer for his team to win. Practice reading Pin, Tin, Win, Sit, Hit, Fit, Lip, Tip, Dip, and Zip every day to build solid reading power!",
        "sentences": [
          "Welcome to the reading practice passage for the -IN, -IT, and -IP word family.",
          "In this reading adventure, we will read words with the short I sound: Pin, Tin, Win, Bin, Sit, Hit, Fit, Lit, Lip, Tip, Dip, and Zip.",
          "Read each sentence with energy and observe the quick, crisp sound of letter I.",
          "Little Tim sat on a wooden bench in the sunny park.",
          "Tim had a shiny tin box in his hands.",
          "Tim opened the tin box to see what was inside.",
          "Inside the tin box, there was a golden safety pin and a small metal whistle.",
          "Tim put the pin safely in the corner of the tin box.",
          "The lid of the box was tight, but it was an exact fit.",
          "Tim had to pull the zip on his small blue backpack.",
          "The zip moved smoothly from the bottom to the tip of the bag.",
          "A soft candle was lit on a nearby table as the evening approached.",
          "Tim sat quietly and watched a baseball player hit a white ball high into the air.",
          "The ball flew across the field and landed right inside a green recycling bin.",
          "Everyone cheered because the team was about to win the championship game.",
          "To win the game, the player had to hit the ball one more time.",
          "Tim smiled, and a happy grin appeared on his lower lip.",
          "Tim stood up from where he sat and walked over to the water fountain.",
          "He took a small sip of cool water to moisten his lip.",
          "Tim decided to dip his paintbrush into a pot of blue paint to make a sign for the team.",
          "He wrote: We will win today!",
          "Tim put the tip of the brush on the paper and drew a golden star.",
          "He put the tin box inside his backpack and pulled the zip closed.",
          "It was a perfect fit.",
          "Tim was ready to cheer for his team to win.",
          "Practice reading Pin, Tin, Win, Sit, Hit, Fit, Lip, Tip, Dip, and Zip every day to build solid reading power!"
        ],
        "wordCount": 342
      },
      {
        "id": "wf_ot",
        "name": "-OT / -OG / -OX Family (ॉट, ॉग)",
        "vowel": "o",
        "rime": "ot",
        "words": [
          {
            "word": "Pot",
            "c1": "P",
            "v": "o",
            "c2": "t",
            "h1": "प",
            "hv": "ॉ",
            "h2": "ट",
            "hindi": "पॉट",
            "meaning": "मटका",
            "blend": "प+ॉ+ट=पॉट"
          },
          {
            "word": "Hot",
            "c1": "H",
            "v": "o",
            "c2": "t",
            "h1": "ह",
            "hv": "ॉ",
            "h2": "ट",
            "hindi": "हॉट",
            "meaning": "गर्म",
            "blend": "ह+ॉ+ट=हॉट"
          },
          {
            "word": "Dog",
            "c1": "D",
            "v": "o",
            "c2": "g",
            "h1": "ड",
            "hv": "ॉ",
            "h2": "ग",
            "hindi": "डॉग",
            "meaning": "कुत्ता",
            "blend": "ड+ॉ+ग=डॉग"
          },
          {
            "word": "Box",
            "c1": "B",
            "v": "o",
            "c2": "x",
            "h1": "ब",
            "hv": "ॉ",
            "h2": "क्स",
            "hindi": "बॉक्स",
            "meaning": "डिब्बा",
            "blend": "ब+ॉ+क्स=बॉक्स"
          },
          {
            "word": "Top",
            "c1": "T",
            "v": "o",
            "c2": "p",
            "h1": "ट",
            "hv": "ॉ",
            "h2": "प",
            "hindi": "टॉप",
            "meaning": "ऊपर / लट्टू",
            "blend": "ट+ॉ+प=टॉप"
          },
          {
            "word": "Mop",
            "c1": "M",
            "v": "o",
            "c2": "p",
            "h1": "म",
            "hv": "ॉ",
            "h2": "प",
            "hindi": "मॉप",
            "meaning": "पोछा",
            "blend": "म+ॉ+प=मॉप"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for the -OT, -OG, and -OX word family. Today we explore the round, open short O sound with these common words: Hot, Pot, Dot, Lot, Dog, Fog, Log, Jog, Box, and Fox. Read aloud and enjoy the lively story. Early one morning, a thick white fog covered the green countryside. Through the cool fog, a friendly brown dog named Spot ran across the grass. Spot was an energetic dog who loved to jog alongside his owner every single day. They went for a jog along the winding forest trail. Along the path, Spot jumped over a fallen wooden log covered with green moss. Sitting near the log was a clever little red fox with a bushy tail. The red fox had a tiny white dot on the tip of its nose. The fox watched the dog jog past the big log without barking. Soon, the morning sun broke through the heavy fog and the weather became quite hot. After a long jog, the owner walked into the kitchen to prepare breakfast. On the stove was a large black pot of hot soup. The hot pot bubbled softly, sending delicious aromas across the room. On the wooden table, there was a square cardboard box with a red dot painted on the side. Inside the box, there were a lot of fresh biscuits. The owner took a lot of biscuits out of the box and placed them in a bowl for the dog. Spot the dog was very hungry after the jog in the hot morning. Spot ate a lot of food and drank cool water from a ceramic pot. Outside the window, the clever red fox hopped onto the log and basked in the warm sun. The fog had completely cleared away. Spot the dog lay down on the floor next to the box and rested happily. Practice reading Hot, Pot, Dot, Dog, Fog, Log, Jog, Box, and Fox every day to master the short O sound with ease and confidence!",
        "sentences": [
          "Welcome to the reading practice passage for the -OT, -OG, and -OX word family.",
          "Today we explore the round, open short O sound with these common words: Hot, Pot, Dot, Lot, Dog, Fog, Log, Jog, Box, and Fox.",
          "Read aloud and enjoy the lively story.",
          "Early one morning, a thick white fog covered the green countryside.",
          "Through the cool fog, a friendly brown dog named Spot ran across the grass.",
          "Spot was an energetic dog who loved to jog alongside his owner every single day.",
          "They went for a jog along the winding forest trail.",
          "Along the path, Spot jumped over a fallen wooden log covered with green moss.",
          "Sitting near the log was a clever little red fox with a bushy tail.",
          "The red fox had a tiny white dot on the tip of its nose.",
          "The fox watched the dog jog past the big log without barking.",
          "Soon, the morning sun broke through the heavy fog and the weather became quite hot.",
          "After a long jog, the owner walked into the kitchen to prepare breakfast.",
          "On the stove was a large black pot of hot soup.",
          "The hot pot bubbled softly, sending delicious aromas across the room.",
          "On the wooden table, there was a square cardboard box with a red dot painted on the side.",
          "Inside the box, there were a lot of fresh biscuits.",
          "The owner took a lot of biscuits out of the box and placed them in a bowl for the dog.",
          "Spot the dog was very hungry after the jog in the hot morning.",
          "Spot ate a lot of food and drank cool water from a ceramic pot.",
          "Outside the window, the clever red fox hopped onto the log and basked in the warm sun.",
          "The fog had completely cleared away.",
          "Spot the dog lay down on the floor next to the box and rested happily.",
          "Practice reading Hot, Pot, Dot, Dog, Fog, Log, Jog, Box, and Fox every day to master the short O sound with ease and confidence!"
        ],
        "wordCount": 336
      },
      {
        "id": "wf_un",
        "name": "-UN / -UG / -UT Family (अन, अग)",
        "vowel": "u",
        "rime": "un",
        "words": [
          {
            "word": "Sun",
            "c1": "S",
            "v": "u",
            "c2": "n",
            "h1": "स",
            "hv": "",
            "h2": "न",
            "hindi": "सन",
            "meaning": "सूरज",
            "blend": "स+अ+न=सन"
          },
          {
            "word": "Run",
            "c1": "R",
            "v": "u",
            "c2": "n",
            "h1": "र",
            "hv": "",
            "h2": "न",
            "hindi": "रन",
            "meaning": "दौड़ना",
            "blend": "र+अ+न=रन"
          },
          {
            "word": "Gun",
            "c1": "G",
            "v": "u",
            "c2": "n",
            "h1": "ग",
            "hv": "",
            "h2": "न",
            "hindi": "गन",
            "meaning": "बंदूक",
            "blend": "ग+अ+न=गन"
          },
          {
            "word": "Jug",
            "c1": "J",
            "v": "u",
            "c2": "g",
            "h1": "ज",
            "hv": "",
            "h2": "ग",
            "hindi": "जग",
            "meaning": "जग (बर्तन)",
            "blend": "ज+अ+ग=जग"
          },
          {
            "word": "Cup",
            "c1": "C",
            "v": "u",
            "c2": "p",
            "h1": "क",
            "hv": "",
            "h2": "प",
            "hindi": "कप",
            "meaning": "प्याला",
            "blend": "क+अ+प=कप"
          },
          {
            "word": "Bus",
            "c1": "B",
            "v": "u",
            "c2": "s",
            "h1": "ब",
            "hv": "",
            "h2": "स",
            "hindi": "बस",
            "meaning": "बस",
            "blend": "ब+अ+स=बस"
          },
          {
            "word": "Hut",
            "c1": "H",
            "v": "u",
            "c2": "t",
            "h1": "ह",
            "hv": "",
            "h2": "ट",
            "hindi": "हट",
            "meaning": "झोपड़ी",
            "blend": "ह+अ+ट=हट"
          },
          {
            "word": "Drum",
            "c1": "Dr",
            "v": "u",
            "c2": "m",
            "h1": "ड्र",
            "hv": "",
            "h2": "म",
            "hindi": "ड्रम",
            "meaning": "ढोल",
            "blend": "ड्र+अ+म=ड्रम"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for the -UN, -UG, and -UT word family. In this joyful story, we practice the short U sound with words ending in -un, -ug, and -ut: Sun, Run, Fun, Bun, Bug, Mug, Rug, Hug, Jug, Nut, Hut, and Cut. Read each sentence with clarity and enthusiasm. The bright golden sun rose high in the morning sky. It was a perfect day to go outside and run in the open fields. A little girl named Ann ran across the green lawn with her playful puppy. They were having so much fun running under the warm sun. In her small wooden hut at the edge of the garden, Ann's grandmother was preparing breakfast. Grandmother had baked a sweet cinnamon bun on the stove. She poured hot milk from a ceramic jug into a large ceramic mug. She placed the mug and the warm bun on the table next to a bowl of fresh walnuts. Grandmother used a small knife to cut a ripe nut into small pieces. She gave Ann a piece of the sweet bun and a nut to eat. Ann sat down on a cozy woven rug spread out on the wooden floor. On the corner of the rug, a tiny green bug crawled slowly. Ann watched the little bug walk across the rug without disturbing it. Grandmother gave Ann a warm, loving hug and handed her the warm mug of milk. Having breakfast in the cozy hut was so much fun for Ann. Outside, the bright sun warmed the grass and flowers. Ann's puppy began to run around the yard chasing after a fallen nut. Ann took a sip from her mug and stepped outside the hut into the morning sun. She gave her puppy a gentle hug and watched it run with pure delight. Practicing these short U words—Sun, Run, Fun, Bug, Mug, Rug, Hug, Jug, Nut, Hut, and Cut—will make your English reading sharp, fluid, and completely effortless every single day!",
        "sentences": [
          "Welcome to the reading practice passage for the -UN, -UG, and -UT word family.",
          "In this joyful story, we practice the short U sound with words ending in -un, -ug, and -ut: Sun, Run, Fun, Bun, Bug, Mug, Rug, Hug, Jug, Nut, Hut, and Cut.",
          "Read each sentence with clarity and enthusiasm.",
          "The bright golden sun rose high in the morning sky.",
          "It was a perfect day to go outside and run in the open fields.",
          "A little girl named Ann ran across the green lawn with her playful puppy.",
          "They were having so much fun running under the warm sun.",
          "In her small wooden hut at the edge of the garden, Ann's grandmother was preparing breakfast.",
          "Grandmother had baked a sweet cinnamon bun on the stove.",
          "She poured hot milk from a ceramic jug into a large ceramic mug.",
          "She placed the mug and the warm bun on the table next to a bowl of fresh walnuts.",
          "Grandmother used a small knife to cut a ripe nut into small pieces.",
          "She gave Ann a piece of the sweet bun and a nut to eat.",
          "Ann sat down on a cozy woven rug spread out on the wooden floor.",
          "On the corner of the rug, a tiny green bug crawled slowly.",
          "Ann watched the little bug walk across the rug without disturbing it.",
          "Grandmother gave Ann a warm, loving hug and handed her the warm mug of milk.",
          "Having breakfast in the cozy hut was so much fun for Ann.",
          "Outside, the bright sun warmed the grass and flowers.",
          "Ann's puppy began to run around the yard chasing after a fallen nut.",
          "Ann took a sip from her mug and stepped outside the hut into the morning sun.",
          "She gave her puppy a gentle hug and watched it run with pure delight.",
          "Practicing these short U words—Sun, Run, Fun, Bug, Mug, Rug, Hug, Jug, Nut, Hut, and Cut—will make your English reading sharp, fluid, and completely effortless every single day!"
        ],
        "wordCount": 330
      }
    ]
  },
  "level5": {
    "title": "4-अक्षर शब्द — संयुक्त ध्वनियां और जादुई E",
    "subtitle": "SH=श, CH=च, TH=थ/द, PH=फ़, WH=व। और सबसे बड़ा जादू: शब्द के अंत में E आने से पिछला Vowel बदल जाता है!",
    "groups": [
      {
        "id": "g5_sh",
        "name": "SH = श",
        "icon": "🌊",
        "rule": "S+H मिलकर हिंदी का 'श' बनाते हैं — Ship, Show, Fish, Wash",
        "words": [
          {
            "word": "Ship",
            "breakdown": [
              {
                "t": "Sh",
                "type": "blend",
                "h": "श"
              },
              {
                "t": "i",
                "type": "vowel",
                "h": "ि"
              },
              {
                "t": "p",
                "type": "consonant",
                "h": "प"
              }
            ],
            "hindi": "शिप",
            "meaning": "बड़ा जहाज़"
          },
          {
            "word": "Shop",
            "breakdown": [
              {
                "t": "Sh",
                "type": "blend",
                "h": "श"
              },
              {
                "t": "o",
                "type": "vowel",
                "h": "ॉ"
              },
              {
                "t": "p",
                "type": "consonant",
                "h": "प"
              }
            ],
            "hindi": "शॉप",
            "meaning": "दुकान"
          },
          {
            "word": "Fish",
            "breakdown": [
              {
                "t": "F",
                "type": "consonant",
                "h": "फ़"
              },
              {
                "t": "i",
                "type": "vowel",
                "h": "ि"
              },
              {
                "t": "sh",
                "type": "blend",
                "h": "श"
              }
            ],
            "hindi": "फ़िश",
            "meaning": "मछली"
          },
          {
            "word": "Wash",
            "breakdown": [
              {
                "t": "W",
                "type": "consonant",
                "h": "व"
              },
              {
                "t": "a",
                "type": "vowel",
                "h": "ॉ"
              },
              {
                "t": "sh",
                "type": "blend",
                "h": "श"
              }
            ],
            "hindi": "वॉश",
            "meaning": "धोना"
          },
          {
            "word": "Show",
            "breakdown": [
              {
                "t": "Sh",
                "type": "blend",
                "h": "श"
              },
              {
                "t": "ow",
                "type": "vowel",
                "h": "ो"
              }
            ],
            "hindi": "शो",
            "meaning": "कार्यक्रम / दिखाना"
          },
          {
            "word": "Shoe",
            "breakdown": [
              {
                "t": "Sh",
                "type": "blend",
                "h": "श"
              },
              {
                "t": "oe",
                "type": "vowel",
                "h": "ू"
              }
            ],
            "hindi": "शू",
            "meaning": "जूता"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for the SH sound, which creates the smooth Hindi 'श' sound. Today we practice these essential words: Ship, Shop, Fish, Wash, Dish, Wish, Cash, Rush, Shell, and Shine. Read each sentence with clear articulation and steady breath. Early in the morning, a large white ship sailed across the deep blue ocean. The sunlight made the ocean water shine like silver diamonds. Near the harbor, a fisherman walked into a small seafood shop by the shore. The fisherman had caught many fresh fish during his night voyage on the ship. Customers began to rush into the shop with cash in their hands to buy the fresh fish. A young boy named Shane had a special wish to see the big ship up close. Shane walked along the sandy beach with his sister. On the wet sand, Shane found a beautiful pink shell that seemed to shine in the bright morning sun. He picked up the shiny shell and put it safely in his pocket. Shane and his sister walked past the busy fish shop and stopped to watch the big ship dock at the pier. When they returned home, their mother asked them to wash their hands before lunch. Shane went to the sink to wash his hands with warm water and soap. His mother served delicious baked fish on a clean ceramic dish. Shane helped his mother wash each dish after the meal was over. He was careful not to rush so that no dish would break. Shane held the shiny shell in his hand and made a silent wish to sail on a big ship one day. His mother gave him some cash to buy an ice cream from the corner shop. Shane smiled as the warm sun continued to shine down on the peaceful harbor town. Practice reading Ship, Shop, Fish, Wash, Dish, Wish, Cash, Rush, Shell, and Shine every day so the SH sound becomes second nature to your reading tongue!",
        "sentences": [
          "Welcome to the reading practice passage for the SH sound, which creates the smooth Hindi 'श' sound.",
          "Today we practice these essential words: Ship, Shop, Fish, Wash, Dish, Wish, Cash, Rush, Shell, and Shine.",
          "Read each sentence with clear articulation and steady breath.",
          "Early in the morning, a large white ship sailed across the deep blue ocean.",
          "The sunlight made the ocean water shine like silver diamonds.",
          "Near the harbor, a fisherman walked into a small seafood shop by the shore.",
          "The fisherman had caught many fresh fish during his night voyage on the ship.",
          "Customers began to rush into the shop with cash in their hands to buy the fresh fish.",
          "A young boy named Shane had a special wish to see the big ship up close.",
          "Shane walked along the sandy beach with his sister.",
          "On the wet sand, Shane found a beautiful pink shell that seemed to shine in the bright morning sun.",
          "He picked up the shiny shell and put it safely in his pocket.",
          "Shane and his sister walked past the busy fish shop and stopped to watch the big ship dock at the pier.",
          "When they returned home, their mother asked them to wash their hands before lunch.",
          "Shane went to the sink to wash his hands with warm water and soap.",
          "His mother served delicious baked fish on a clean ceramic dish.",
          "Shane helped his mother wash each dish after the meal was over.",
          "He was careful not to rush so that no dish would break.",
          "Shane held the shiny shell in his hand and made a silent wish to sail on a big ship one day.",
          "His mother gave him some cash to buy an ice cream from the corner shop.",
          "Shane smiled as the warm sun continued to shine down on the peaceful harbor town.",
          "Practice reading Ship, Shop, Fish, Wash, Dish, Wish, Cash, Rush, Shell, and Shine every day so the SH sound becomes second nature to your reading tongue!"
        ],
        "wordCount": 330
      },
      {
        "id": "g5_ch",
        "name": "CH = च",
        "icon": "🎪",
        "rule": "C+H मिलकर हिंदी का 'च' बनाते हैं — Chair, Child, Watch, Peach",
        "words": [
          {
            "word": "Chat",
            "breakdown": [
              {
                "t": "Ch",
                "type": "blend",
                "h": "च"
              },
              {
                "t": "a",
                "type": "vowel",
                "h": "ै"
              },
              {
                "t": "t",
                "type": "consonant",
                "h": "ट"
              }
            ],
            "hindi": "चैट",
            "meaning": "बातचीत"
          },
          {
            "word": "Child",
            "breakdown": [
              {
                "t": "Ch",
                "type": "blend",
                "h": "च"
              },
              {
                "t": "ild",
                "type": "vowel",
                "h": "ाइल्ड"
              }
            ],
            "hindi": "चाइल्ड",
            "meaning": "बच्चा"
          },
          {
            "word": "Rich",
            "breakdown": [
              {
                "t": "R",
                "type": "consonant",
                "h": "र"
              },
              {
                "t": "i",
                "type": "vowel",
                "h": "ि"
              },
              {
                "t": "ch",
                "type": "blend",
                "h": "च"
              }
            ],
            "hindi": "रिच",
            "meaning": "अमीर"
          },
          {
            "word": "Catch",
            "breakdown": [
              {
                "t": "C",
                "type": "consonant",
                "h": "क"
              },
              {
                "t": "a",
                "type": "vowel",
                "h": "ै"
              },
              {
                "t": "tch",
                "type": "blend",
                "h": "च"
              }
            ],
            "hindi": "कैच",
            "meaning": "पकड़ना"
          },
          {
            "word": "Cheese",
            "breakdown": [
              {
                "t": "Ch",
                "type": "blend",
                "h": "च"
              },
              {
                "t": "ee",
                "type": "vowel",
                "h": "ी"
              },
              {
                "t": "se",
                "type": "consonant",
                "h": "ज़"
              }
            ],
            "hindi": "चीज़",
            "meaning": "पनीर"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for the CH sound, which produces the familiar Hindi 'च' sound. In this lesson, we practice reading: Chin, Chat, Chip, Rich, Much, Such, Chop, Check, Lunch, and Bench. Read along out loud with clear focus and steady rhythm. On a sunny Saturday afternoon, two good friends named Charlie and Chet met in the central park. They sat down together on a wooden green bench under the cool shade of a tall tree. The friends loved to chat about their school projects and favorite games. While they began to chat, Charlie touched his chin thoughtfully and smiled. He had brought a small picnic basket packed with a tasty lunch. Inside the basket, there was a bag of crispy potato chips and fresh sandwiches. Charlie took a potato chip and offered one to Chet. It does not cost much to enjoy such a wonderful lunch outdoors with a dear friend, Chet remarked happily. A rich aroma of toasted bread and cheese filled the air around their bench. In a nearby open kitchen stall, a skilled chef began to chop fresh vegetables with a sharp knife. Charlie decided to check the time on his watch to make sure they were not late for their afternoon class. The chef continued to chop carrots, onions, and celery with fast, rhythmic strokes. Charlie and Chet finished their lunch and brushed the chip crumbs from the wooden bench. They felt so much joy sharing such a pleasant afternoon together. A rich man walked past their bench walking two friendly dogs, and he stopped to chat with the boys for a moment. Charlie stroked his chin and thanked the man with a polite smile. Remember to check your work and practice reading Chin, Chat, Chip, Rich, Much, Such, Chop, Check, Lunch, and Bench every day to master the CH sound with total confidence!",
        "sentences": [
          "Welcome to the reading practice passage for the CH sound, which produces the familiar Hindi 'च' sound.",
          "In this lesson, we practice reading: Chin, Chat, Chip, Rich, Much, Such, Chop, Check, Lunch, and Bench.",
          "Read along out loud with clear focus and steady rhythm.",
          "On a sunny Saturday afternoon, two good friends named Charlie and Chet met in the central park.",
          "They sat down together on a wooden green bench under the cool shade of a tall tree.",
          "The friends loved to chat about their school projects and favorite games.",
          "While they began to chat, Charlie touched his chin thoughtfully and smiled.",
          "He had brought a small picnic basket packed with a tasty lunch.",
          "Inside the basket, there was a bag of crispy potato chips and fresh sandwiches.",
          "Charlie took a potato chip and offered one to Chet.",
          "It does not cost much to enjoy such a wonderful lunch outdoors with a dear friend, Chet remarked happily.",
          "A rich aroma of toasted bread and cheese filled the air around their bench.",
          "In a nearby open kitchen stall, a skilled chef began to chop fresh vegetables with a sharp knife.",
          "Charlie decided to check the time on his watch to make sure they were not late for their afternoon class.",
          "The chef continued to chop carrots, onions, and celery with fast, rhythmic strokes.",
          "Charlie and Chet finished their lunch and brushed the chip crumbs from the wooden bench.",
          "They felt so much joy sharing such a pleasant afternoon together.",
          "A rich man walked past their bench walking two friendly dogs, and he stopped to chat with the boys for a moment.",
          "Charlie stroked his chin and thanked the man with a polite smile.",
          "Remember to check your work and practice reading Chin, Chat, Chip, Rich, Much, Such, Chop, Check, Lunch, and Bench every day to master the CH sound with total confidence!"
        ],
        "wordCount": 311
      },
      {
        "id": "g5_th_unvoiced",
        "name": "TH (थ) — Unvoiced",
        "icon": "👅",
        "rule": "⚠️ जीभ को दांतों के बीच हल्के से रखकर हवा फूंकें — Think, Three, Bath",
        "words": [
          {
            "word": "Think",
            "breakdown": [
              {
                "t": "Th",
                "type": "blend",
                "h": "थ"
              },
              {
                "t": "i",
                "type": "vowel",
                "h": "ि"
              },
              {
                "t": "nk",
                "type": "consonant",
                "h": "ंक"
              }
            ],
            "hindi": "थिंक",
            "meaning": "सोचना"
          },
          {
            "word": "Three",
            "breakdown": [
              {
                "t": "Thr",
                "type": "blend",
                "h": "थ्र"
              },
              {
                "t": "ee",
                "type": "vowel",
                "h": "ी"
              }
            ],
            "hindi": "थ्री",
            "meaning": "तीन (3)"
          },
          {
            "word": "Thin",
            "breakdown": [
              {
                "t": "Th",
                "type": "blend",
                "h": "थ"
              },
              {
                "t": "i",
                "type": "vowel",
                "h": "ि"
              },
              {
                "t": "n",
                "type": "consonant",
                "h": "न"
              }
            ],
            "hindi": "थिन",
            "meaning": "पतला"
          },
          {
            "word": "Thumb",
            "breakdown": [
              {
                "t": "Th",
                "type": "blend",
                "h": "थ"
              },
              {
                "t": "u",
                "type": "vowel",
                "h": "अ"
              },
              {
                "t": "mb",
                "type": "consonant",
                "h": "म (b साइलेंट)"
              }
            ],
            "hindi": "थम",
            "meaning": "अंगूठा"
          },
          {
            "word": "Bath",
            "breakdown": [
              {
                "t": "B",
                "type": "consonant",
                "h": "ब"
              },
              {
                "t": "a",
                "type": "vowel",
                "h": "ा"
              },
              {
                "t": "th",
                "type": "blend",
                "h": "थ"
              }
            ],
            "hindi": "बाथ",
            "meaning": "स्नान"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for the unvoiced TH sound, which matches the Hindi 'थ' sound. In this lesson, we practice: Thin, Think, Thank, Bath, Math, Path, Cloth, Month, and Teeth. Read each sentence with careful placement of your tongue between your teeth, blowing a gentle breath of air. Young Theo walked along a narrow stone path that wound through the quiet village. Theo was a thin boy who loved to read books and think deeply about interesting questions. Every morning, Theo would wake up early, brush his white teeth thoroughly, and take a warm refreshing bath. Keeping his teeth clean and taking a daily bath made him feel energetic and fresh. Theo loved his morning math class at school. He would think carefully before solving each difficult math problem on the blackboard. His math teacher was very pleased and would often thank Theo for his neat and accurate work. It is always polite to say thank you whenever someone helps you with a difficult task. On his way back home along the garden path, Theo saw a thin piece of colorful cloth caught on a rose bush. Theo gently removed the cloth from the thorns and folded it with care. This month was special because Theo had practiced his math exercises every single day. Theo would often think about how much his reading and math skills had improved over the past month. His grandmother wrapped a warm cloth around his shoulders when the evening air turned chilly. Theo smiled, showing his clean white teeth, and said thank you with a grateful heart. Walking on the garden path under the evening stars gave Theo peaceful time to think and plan for the new month ahead. Practice reading Thin, Think, Thank, Bath, Math, Path, Cloth, Month, and Teeth out loud every single day for pure phonics mastery!",
        "sentences": [
          "Welcome to the reading practice passage for the unvoiced TH sound, which matches the Hindi 'थ' sound.",
          "In this lesson, we practice: Thin, Think, Thank, Bath, Math, Path, Cloth, Month, and Teeth.",
          "Read each sentence with careful placement of your tongue between your teeth, blowing a gentle breath of air.",
          "Young Theo walked along a narrow stone path that wound through the quiet village.",
          "Theo was a thin boy who loved to read books and think deeply about interesting questions.",
          "Every morning, Theo would wake up early, brush his white teeth thoroughly, and take a warm refreshing bath.",
          "Keeping his teeth clean and taking a daily bath made him feel energetic and fresh.",
          "Theo loved his morning math class at school.",
          "He would think carefully before solving each difficult math problem on the blackboard.",
          "His math teacher was very pleased and would often thank Theo for his neat and accurate work.",
          "It is always polite to say thank you whenever someone helps you with a difficult task.",
          "On his way back home along the garden path, Theo saw a thin piece of colorful cloth caught on a rose bush.",
          "Theo gently removed the cloth from the thorns and folded it with care.",
          "This month was special because Theo had practiced his math exercises every single day.",
          "Theo would often think about how much his reading and math skills had improved over the past month.",
          "His grandmother wrapped a warm cloth around his shoulders when the evening air turned chilly.",
          "Theo smiled, showing his clean white teeth, and said thank you with a grateful heart.",
          "Walking on the garden path under the evening stars gave Theo peaceful time to think and plan for the new month ahead.",
          "Practice reading Thin, Think, Thank, Bath, Math, Path, Cloth, Month, and Teeth out loud every single day for pure phonics mastery!"
        ],
        "wordCount": 307
      },
      {
        "id": "g5_th_voiced",
        "name": "TH (द) — Voiced",
        "icon": "🔊",
        "rule": "⚠️ ऊपर जैसा लेकिन कंपन के साथ — This, That, The, Mother",
        "words": [
          {
            "word": "This",
            "breakdown": [
              {
                "t": "Th",
                "type": "blend",
                "h": "द"
              },
              {
                "t": "i",
                "type": "vowel",
                "h": "ि"
              },
              {
                "t": "s",
                "type": "consonant",
                "h": "स"
              }
            ],
            "hindi": "दिस",
            "meaning": "यह"
          },
          {
            "word": "That",
            "breakdown": [
              {
                "t": "Th",
                "type": "blend",
                "h": "द"
              },
              {
                "t": "a",
                "type": "vowel",
                "h": "ै"
              },
              {
                "t": "t",
                "type": "consonant",
                "h": "ट"
              }
            ],
            "hindi": "दैट",
            "meaning": "वह"
          },
          {
            "word": "The",
            "breakdown": [
              {
                "t": "Th",
                "type": "blend",
                "h": "द"
              },
              {
                "t": "e",
                "type": "vowel",
                "h": "(अ / ई)"
              }
            ],
            "hindi": "द/दी",
            "meaning": "वह (Article)"
          },
          {
            "word": "Mother",
            "breakdown": [
              {
                "t": "M",
                "type": "consonant",
                "h": "म"
              },
              {
                "t": "o",
                "type": "vowel",
                "h": "अ"
              },
              {
                "t": "th",
                "type": "blend",
                "h": "द"
              },
              {
                "t": "er",
                "type": "consonant",
                "h": "र"
              }
            ],
            "hindi": "मदर",
            "meaning": "मां"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for the voiced TH sound, which corresponds to the Hindi 'द' sound. Today we practice these vital daily words: This, That, Then, With, They, Them, There, Mother, and Brother. Read each sentence with a soft vocal vibration as your tongue touches your upper teeth. This is a story about a loving family that lived in a peaceful town. In this house, a caring mother lived with her two sons and a daughter. The older brother was kind, and he loved to play games with his younger brother. Look at that tall wooden bookshelf over there in the living room. On that shelf, there were many exciting books for them to read. The mother called them to the dinner table with a gentle smile. They ran to the kitchen to sit with their mother and brother. This meal was warm and tasty, made with fresh vegetables and warm bread. Then, after finishing their dinner, they helped their mother clear the plates from the table. The mother thanked them for their help. Then the older brother took a storybook from that shelf over there. He sat with his younger brother on the sofa and opened the book. They read each page together with great excitement. This book tells the story of brave sailors who crossed the wide ocean with their ships. The younger brother pointed to that colorful illustration on the page and asked questions about them. Then their mother joined them on the couch and listened to them read out loud. They felt safe, warm, and happy with each other. There is nothing more precious than spending quality time with your mother and brother. Practice reading This, That, Then, With, They, Them, There, Mother, and Brother every day so that your reading of voiced TH words becomes smooth, accurate, and completely effortless!",
        "sentences": [
          "Welcome to the reading practice passage for the voiced TH sound, which corresponds to the Hindi 'द' sound.",
          "Today we practice these vital daily words: This, That, Then, With, They, Them, There, Mother, and Brother.",
          "Read each sentence with a soft vocal vibration as your tongue touches your upper teeth.",
          "This is a story about a loving family that lived in a peaceful town.",
          "In this house, a caring mother lived with her two sons and a daughter.",
          "The older brother was kind, and he loved to play games with his younger brother.",
          "Look at that tall wooden bookshelf over there in the living room.",
          "On that shelf, there were many exciting books for them to read.",
          "The mother called them to the dinner table with a gentle smile.",
          "They ran to the kitchen to sit with their mother and brother.",
          "This meal was warm and tasty, made with fresh vegetables and warm bread.",
          "Then, after finishing their dinner, they helped their mother clear the plates from the table.",
          "The mother thanked them for their help.",
          "Then the older brother took a storybook from that shelf over there.",
          "He sat with his younger brother on the sofa and opened the book.",
          "They read each page together with great excitement.",
          "This book tells the story of brave sailors who crossed the wide ocean with their ships.",
          "The younger brother pointed to that colorful illustration on the page and asked questions about them.",
          "Then their mother joined them on the couch and listened to them read out loud.",
          "They felt safe, warm, and happy with each other.",
          "There is nothing more precious than spending quality time with your mother and brother.",
          "Practice reading This, That, Then, With, They, Them, There, Mother, and Brother every day so that your reading of voiced TH words becomes smooth, accurate, and completely effortless!"
        ],
        "wordCount": 307
      },
      {
        "id": "g5_ph",
        "name": "PH = फ़",
        "icon": "📱",
        "rule": "P+H मिलकर हिंदी का 'फ़' बनाते हैं — Phone, Photo, Graph",
        "words": [
          {
            "word": "Phone",
            "breakdown": [
              {
                "t": "Ph",
                "type": "blend",
                "h": "फ़"
              },
              {
                "t": "one",
                "type": "vowel",
                "h": "ोन"
              }
            ],
            "hindi": "फ़ोन",
            "meaning": "फ़ोन"
          },
          {
            "word": "Photo",
            "breakdown": [
              {
                "t": "Ph",
                "type": "blend",
                "h": "फ़"
              },
              {
                "t": "o",
                "type": "vowel",
                "h": "ो"
              },
              {
                "t": "to",
                "type": "consonant",
                "h": "टो"
              }
            ],
            "hindi": "फ़ोटो",
            "meaning": "तस्वीर"
          },
          {
            "word": "Graph",
            "breakdown": [
              {
                "t": "Gr",
                "type": "blend",
                "h": "ग्र"
              },
              {
                "t": "a",
                "type": "vowel",
                "h": "ा"
              },
              {
                "t": "ph",
                "type": "blend",
                "h": "फ़"
              }
            ],
            "hindi": "ग्राफ़",
            "meaning": "ग्राफ़ / चार्ट"
          },
          {
            "word": "Elephant",
            "breakdown": [
              {
                "t": "El",
                "type": "consonant",
                "h": "एल"
              },
              {
                "t": "e",
                "type": "vowel",
                "h": "े"
              },
              {
                "t": "ph",
                "type": "blend",
                "h": "फ़"
              },
              {
                "t": "ant",
                "type": "consonant",
                "h": "ंट"
              }
            ],
            "hindi": "एलीफ़ेंट",
            "meaning": "हाथी"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for the PH sound, which makes the Hindi 'फ़' sound just like the letter F. In this fascinating lesson, we practice reading: Phone, Photo, Graph, Dolphin, Phase, Elephant, and Alphabet. Read each sentence out loud with clear sound and natural flow. Philip took out his smart phone from his jacket pocket to capture a memorable picture. Philip wanted to take a clear photo of the animals at the coastal wildlife park. While walking near the ocean bay, Philip saw a playful gray dolphin leap gracefully out of the deep blue water. The dolphin swam close to the pier and leaped high into the air. Philip quickly tapped the button on his phone and took a stunning photo of the dolphin in mid-air. In the next section of the park, a massive gray elephant walked slowly along the dusty trail. The elephant used its long trunk to drink cool water from a stone basin. Philip captured another beautiful photo of the majestic elephant. Later that afternoon, Philip sat down at the research center to study a detailed graph on the computer screen. The science graph showed the population growth of dolphins and elephants over the past decade. Every phase of the wildlife project was tracked carefully on the digital graph. Philip opened his notebook and reviewed the English alphabet to practice spelling animal names correctly. Learning every letter of the alphabet from A to Z helped Philip write down clear notes about each phase of the project. Philip sent the high quality photo of the jumping dolphin and the elephant to his family using his mobile phone. His friends called him on the phone to congratulate him on the wonderful photo. Practice reading Phone, Photo, Graph, Dolphin, Phase, Elephant, and Alphabet every day to master the PH sound with complete ease and perfection!",
        "sentences": [
          "Welcome to the reading practice passage for the PH sound, which makes the Hindi 'फ़' sound just like the letter F.",
          "In this fascinating lesson, we practice reading: Phone, Photo, Graph, Dolphin, Phase, Elephant, and Alphabet.",
          "Read each sentence out loud with clear sound and natural flow.",
          "Philip took out his smart phone from his jacket pocket to capture a memorable picture.",
          "Philip wanted to take a clear photo of the animals at the coastal wildlife park.",
          "While walking near the ocean bay, Philip saw a playful gray dolphin leap gracefully out of the deep blue water.",
          "The dolphin swam close to the pier and leaped high into the air.",
          "Philip quickly tapped the button on his phone and took a stunning photo of the dolphin in mid-air.",
          "In the next section of the park, a massive gray elephant walked slowly along the dusty trail.",
          "The elephant used its long trunk to drink cool water from a stone basin.",
          "Philip captured another beautiful photo of the majestic elephant.",
          "Later that afternoon, Philip sat down at the research center to study a detailed graph on the computer screen.",
          "The science graph showed the population growth of dolphins and elephants over the past decade.",
          "Every phase of the wildlife project was tracked carefully on the digital graph.",
          "Philip opened his notebook and reviewed the English alphabet to practice spelling animal names correctly.",
          "Learning every letter of the alphabet from A to Z helped Philip write down clear notes about each phase of the project.",
          "Philip sent the high quality photo of the jumping dolphin and the elephant to his family using his mobile phone.",
          "His friends called him on the phone to congratulate him on the wonderful photo.",
          "Practice reading Phone, Photo, Graph, Dolphin, Phase, Elephant, and Alphabet every day to master the PH sound with complete ease and perfection!"
        ],
        "wordCount": 308
      },
      {
        "id": "g5_magic_e",
        "name": "जादुई E — Magic Silent E",
        "icon": "✨",
        "rule": "शब्द के अंत का E साइलेंट रहता है लेकिन पहले के Vowel को लंबा बना देता है! Kit→Kite, Pet→Pete",
        "words": [
          {
            "word": "Make",
            "breakdown": [
              {
                "t": "M",
                "type": "consonant",
                "h": "म"
              },
              {
                "t": "a",
                "type": "vowel",
                "h": "े"
              },
              {
                "t": "k",
                "type": "consonant",
                "h": "क"
              },
              {
                "t": "e",
                "type": "silent",
                "h": "(मौन)"
              }
            ],
            "hindi": "मेक",
            "meaning": "बनाना",
            "magicNote": "a→ए (छोटी Mat→Make)"
          },
          {
            "word": "Name",
            "breakdown": [
              {
                "t": "N",
                "type": "consonant",
                "h": "न"
              },
              {
                "t": "a",
                "type": "vowel",
                "h": "े"
              },
              {
                "t": "m",
                "type": "consonant",
                "h": "म"
              },
              {
                "t": "e",
                "type": "silent",
                "h": "(मौन)"
              }
            ],
            "hindi": "नेम",
            "meaning": "नाम",
            "magicNote": "a→ए (नाम)"
          },
          {
            "word": "Time",
            "breakdown": [
              {
                "t": "T",
                "type": "consonant",
                "h": "ट"
              },
              {
                "t": "i",
                "type": "vowel",
                "h": "ाइ"
              },
              {
                "t": "m",
                "type": "consonant",
                "h": "म"
              },
              {
                "t": "e",
                "type": "silent",
                "h": "(मौन)"
              }
            ],
            "hindi": "टाइम",
            "meaning": "समय",
            "magicNote": "i→आइ (Sit→Site)"
          },
          {
            "word": "Bike",
            "breakdown": [
              {
                "t": "B",
                "type": "consonant",
                "h": "ब"
              },
              {
                "t": "i",
                "type": "vowel",
                "h": "ाइ"
              },
              {
                "t": "k",
                "type": "consonant",
                "h": "क"
              },
              {
                "t": "e",
                "type": "silent",
                "h": "(मौन)"
              }
            ],
            "hindi": "बाइक",
            "meaning": "साइकिल",
            "magicNote": "i→आइ (Bit→Bite)"
          },
          {
            "word": "Home",
            "breakdown": [
              {
                "t": "H",
                "type": "consonant",
                "h": "ह"
              },
              {
                "t": "o",
                "type": "vowel",
                "h": "ो"
              },
              {
                "t": "m",
                "type": "consonant",
                "h": "म"
              },
              {
                "t": "e",
                "type": "silent",
                "h": "(मौन)"
              }
            ],
            "hindi": "होम",
            "meaning": "घर",
            "magicNote": "o→ओ (Hop→Hope)"
          },
          {
            "word": "Cute",
            "breakdown": [
              {
                "t": "C",
                "type": "consonant",
                "h": "क"
              },
              {
                "t": "u",
                "type": "vowel",
                "h": "्यू"
              },
              {
                "t": "t",
                "type": "consonant",
                "h": "ट"
              },
              {
                "t": "e",
                "type": "silent",
                "h": "(मौन)"
              }
            ],
            "hindi": "क्यूट",
            "meaning": "प्यारा",
            "magicNote": "u→यू (Cub→Cube)"
          },
          {
            "word": "Snake",
            "breakdown": [
              {
                "t": "Sn",
                "type": "blend",
                "h": "स्न"
              },
              {
                "t": "a",
                "type": "vowel",
                "h": "े"
              },
              {
                "t": "k",
                "type": "consonant",
                "h": "क"
              },
              {
                "t": "e",
                "type": "silent",
                "h": "(मौन)"
              }
            ],
            "hindi": "स्नेक",
            "meaning": "सांप",
            "magicNote": "a→ए (Magic E!)"
          },
          {
            "word": "Bone",
            "breakdown": [
              {
                "t": "B",
                "type": "consonant",
                "h": "ब"
              },
              {
                "t": "o",
                "type": "vowel",
                "h": "ो"
              },
              {
                "t": "n",
                "type": "consonant",
                "h": "न"
              },
              {
                "t": "e",
                "type": "silent",
                "h": "(मौन)"
              }
            ],
            "hindi": "बोन",
            "meaning": "हड्डी",
            "magicNote": "o→ओ (Bon→Bone)"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for the Magic Silent E rule. Remember the golden secret: when letter E sits silently at the end of a word, it gives all its magic power to the vowel before it, making that vowel speak its full long name! Today we practice: Name, Game, Cake, Late, Time, Bike, Fine, Kite, Home, Rose, Bone, Hope, Cute, Mule, Tube, and Rule. Let us read this delightful story with joy. A cheerful young boy whose name was Luke loved to ride his red bike every afternoon. It was time for Luke to ride his bike to the community park. Luke had a fine plan to meet his friends for an exciting board game. He did not want to be late for the game, so he rode his bike at a steady speed. The weather was fine, with a gentle breeze perfect for flying a high kite. Near the entrance of the park, a sweet smelling red rose bloomed beside a wooden fence. A cute little puppy was playing on the grass with a white bone. The cute puppy carried the bone proudly and ran circles around a friendly brown mule resting near the barn. Luke smiled at the cute scene and parked his bike near the picnic table. His friend came from home carrying a delicious chocolate cake baked for the winners of the game. The first rule of their game was to play with honesty, kindness, and teamwork. Following this golden rule made the game fun for everyone. They played the game for a long time until the sun began to set. Then they sat together and ate a big slice of the sweet cake. It was time for Luke to head back home before it became too late. Luke rode his bike along the paved path with high hope for another wonderful weekend. Practice reading Name, Game, Cake, Late, Time, Bike, Fine, Kite, Home, Rose, Bone, Hope, Cute, Mule, Tube, and Rule every single day to unlock the magic of silent E with total reading fluency!",
        "sentences": [
          "Welcome to the reading practice passage for the Magic Silent E rule.",
          "Remember the golden secret: when letter E sits silently at the end of a word, it gives all its magic power to the vowel before it, making that vowel speak its full long name!",
          "Today we practice: Name, Game, Cake, Late, Time, Bike, Fine, Kite, Home, Rose, Bone, Hope, Cute, Mule, Tube, and Rule.",
          "Let us read this delightful story with joy.",
          "A cheerful young boy whose name was Luke loved to ride his red bike every afternoon.",
          "It was time for Luke to ride his bike to the community park.",
          "Luke had a fine plan to meet his friends for an exciting board game.",
          "He did not want to be late for the game, so he rode his bike at a steady speed.",
          "The weather was fine, with a gentle breeze perfect for flying a high kite.",
          "Near the entrance of the park, a sweet smelling red rose bloomed beside a wooden fence.",
          "A cute little puppy was playing on the grass with a white bone.",
          "The cute puppy carried the bone proudly and ran circles around a friendly brown mule resting near the barn.",
          "Luke smiled at the cute scene and parked his bike near the picnic table.",
          "His friend came from home carrying a delicious chocolate cake baked for the winners of the game.",
          "The first rule of their game was to play with honesty, kindness, and teamwork.",
          "Following this golden rule made the game fun for everyone.",
          "They played the game for a long time until the sun began to set.",
          "Then they sat together and ate a big slice of the sweet cake.",
          "It was time for Luke to head back home before it became too late.",
          "Luke rode his bike along the paved path with high hope for another wonderful weekend.",
          "Practice reading Name, Game, Cake, Late, Time, Bike, Fine, Kite, Home, Rose, Bone, Hope, Cute, Mule, Tube, and Rule every single day to unlock the magic of silent E with total reading fluency!"
        ],
        "wordCount": 342
      },
      {
        "id": "g5_blends",
        "name": "व्यंजन जोड़े — Consonant Blends (ST, BL, CR, TR, FL)",
        "icon": "🔗",
        "rule": "दो व्यंजन मिलकर नई ध्वनि बनाते हैं — दोनों की आवाज़ें तेज़ी से एक साथ बोली जाती हैं",
        "words": [
          {
            "word": "Stop",
            "breakdown": [
              {
                "t": "St",
                "type": "blend",
                "h": "स्ट"
              },
              {
                "t": "o",
                "type": "vowel",
                "h": "ॉ"
              },
              {
                "t": "p",
                "type": "consonant",
                "h": "प"
              }
            ],
            "hindi": "स्टॉप",
            "meaning": "रुकना"
          },
          {
            "word": "Blue",
            "breakdown": [
              {
                "t": "Bl",
                "type": "blend",
                "h": "ब्ल"
              },
              {
                "t": "ue",
                "type": "vowel",
                "h": "ू"
              }
            ],
            "hindi": "ब्लू",
            "meaning": "नीला"
          },
          {
            "word": "Tree",
            "breakdown": [
              {
                "t": "Tr",
                "type": "blend",
                "h": "ट्र"
              },
              {
                "t": "ee",
                "type": "vowel",
                "h": "ी"
              }
            ],
            "hindi": "ट्री",
            "meaning": "पेड़"
          },
          {
            "word": "Flag",
            "breakdown": [
              {
                "t": "Fl",
                "type": "blend",
                "h": "फ्ल"
              },
              {
                "t": "a",
                "type": "vowel",
                "h": "ै"
              },
              {
                "t": "g",
                "type": "consonant",
                "h": "ग"
              }
            ],
            "hindi": "फ़्लैग",
            "meaning": "झंडा"
          },
          {
            "word": "Cream",
            "breakdown": [
              {
                "t": "Cr",
                "type": "blend",
                "h": "क्र"
              },
              {
                "t": "ea",
                "type": "vowel",
                "h": "ी"
              },
              {
                "t": "m",
                "type": "consonant",
                "h": "म"
              }
            ],
            "hindi": "क्रीम",
            "meaning": "क्रीम"
          },
          {
            "word": "Star",
            "breakdown": [
              {
                "t": "St",
                "type": "blend",
                "h": "स्ट"
              },
              {
                "t": "ar",
                "type": "vowel",
                "h": "ार"
              }
            ],
            "hindi": "स्टार",
            "meaning": "तारा"
          },
          {
            "word": "Frog",
            "breakdown": [
              {
                "t": "Fr",
                "type": "blend",
                "h": "फ्र"
              },
              {
                "t": "o",
                "type": "vowel",
                "h": "ॉ"
              },
              {
                "t": "g",
                "type": "consonant",
                "h": "ग"
              }
            ],
            "hindi": "फ्रॉग",
            "meaning": "मेंढक"
          },
          {
            "word": "Grass",
            "breakdown": [
              {
                "t": "Gr",
                "type": "blend",
                "h": "ग्र"
              },
              {
                "t": "a",
                "type": "vowel",
                "h": "ास"
              },
              {
                "t": "ss",
                "type": "consonant",
                "h": "स"
              }
            ],
            "hindi": "ग्रास",
            "meaning": "घास"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for Consonant Blends, where two consonants blend their sounds together smoothly: ST, BL, CR, TR, and FL. Today we practice reading: Stop, Star, Step, Blue, Black, Blow, Crab, Cry, Cross, Tree, Trip, Train, Flag, Flat, and Fly. Read along out loud with clear pronunciation and confident voice. A fast silver train traveled smoothly across the flat green valley. A traveler named Frank was excited for this weekend train trip to the coastal village. Frank looked out the train window and watched birds fly high up into the deep blue sky. A gentle wind began to blow across the open fields. Soon, the train came to a complete stop at a small station near the ocean shore. Frank took a careful step down from the train onto the flat wooden platform. Above the station roof, a colorful national flag waved proudly as the sea breeze continued to blow. Frank began his trip toward the sandy beach. Along the rocky trail, he stopped under the cooling shade of a tall palm tree. Near the roots of the tree, Frank spotted a tiny brown crab crawling sideways across the flat sand. The crab held up its small claws, ready to cross the narrow tide pool. Frank watched the little crab cross the wet sand without making it cry or feel afraid. High above in the evening sky, the first bright star began to shine like a diamond. Frank carried a black backpack on his shoulders as he took each step along the coastline. He watched white seagulls fly over the blue ocean waves. Every step of this trip brought him closer to nature's beauty. When the red stop signal appeared at the railway crossing, Frank waited patiently for another train to cross the tracks. Practice reading Stop, Star, Step, Blue, Black, Blow, Crab, Cry, Cross, Tree, Trip, Train, Flag, Flat, and Fly every day to master consonant blends with complete confidence and speed!",
        "sentences": [
          "Welcome to the reading practice passage for Consonant Blends, where two consonants blend their sounds together smoothly: ST, BL, CR, TR, and FL.",
          "Today we practice reading: Stop, Star, Step, Blue, Black, Blow, Crab, Cry, Cross, Tree, Trip, Train, Flag, Flat, and Fly.",
          "Read along out loud with clear pronunciation and confident voice.",
          "A fast silver train traveled smoothly across the flat green valley.",
          "A traveler named Frank was excited for this weekend train trip to the coastal village.",
          "Frank looked out the train window and watched birds fly high up into the deep blue sky.",
          "A gentle wind began to blow across the open fields.",
          "Soon, the train came to a complete stop at a small station near the ocean shore.",
          "Frank took a careful step down from the train onto the flat wooden platform.",
          "Above the station roof, a colorful national flag waved proudly as the sea breeze continued to blow.",
          "Frank began his trip toward the sandy beach.",
          "Along the rocky trail, he stopped under the cooling shade of a tall palm tree.",
          "Near the roots of the tree, Frank spotted a tiny brown crab crawling sideways across the flat sand.",
          "The crab held up its small claws, ready to cross the narrow tide pool.",
          "Frank watched the little crab cross the wet sand without making it cry or feel afraid.",
          "High above in the evening sky, the first bright star began to shine like a diamond.",
          "Frank carried a black backpack on his shoulders as he took each step along the coastline.",
          "He watched white seagulls fly over the blue ocean waves.",
          "Every step of this trip brought him closer to nature's beauty.",
          "When the red stop signal appeared at the railway crossing, Frank waited patiently for another train to cross the tracks.",
          "Practice reading Stop, Star, Step, Blue, Black, Blow, Crab, Cry, Cross, Tree, Trip, Train, Flag, Flat, and Fly every day to master consonant blends with complete confidence and speed!"
        ],
        "wordCount": 326
      }
    ]
  },
  "level6": {
    "title": "बड़े शब्दों को तोड़कर पढ़ना — Syllable Chunking",
    "subtitle": "बड़े शब्द से डरना छोड़ो! उसे 2-3 छोटे टुकड़ों में तोड़ो, हर टुकड़ा अलग से पढ़ो, फिर जोड़ो। किसी भी टुकड़े पर क्लिक करके सिर्फ वही सुनो।",
    "words": [
      {
        "id": "l6_doctor",
        "word": "Doctor",
        "chunks": [
          "Doc",
          "tor"
        ],
        "chunkH": [
          "डॉक",
          "टर"
        ],
        "hindi": "डॉक्टर",
        "meaning": "चिकित्सक",
        "syllables": 2,
        "tip": "[Doc=डॉक]+[tor=टर]=डॉक्टर"
      },
      {
        "id": "l6_market",
        "word": "Market",
        "chunks": [
          "Mar",
          "ket"
        ],
        "chunkH": [
          "मार",
          "केट"
        ],
        "hindi": "मार्केट",
        "meaning": "बाज़ार",
        "syllables": 2,
        "tip": "[Mar=मार]+[ket=केट]=मार्केट"
      },
      {
        "id": "l6_simple",
        "word": "Simple",
        "chunks": [
          "Sim",
          "ple"
        ],
        "chunkH": [
          "सिम",
          "पल"
        ],
        "hindi": "सिंपल",
        "meaning": "सरल / आसान",
        "syllables": 2,
        "tip": "[Sim=सिम]+[ple=पल]=सिंपल"
      },
      {
        "id": "l6_pencil",
        "word": "Pencil",
        "chunks": [
          "Pen",
          "cil"
        ],
        "chunkH": [
          "पेन",
          "सिल"
        ],
        "hindi": "पेंसिल",
        "meaning": "पेंसिल",
        "syllables": 2,
        "tip": "[Pen=पेन]+[cil=सिल]=पेंसिल"
      },
      {
        "id": "l6_window",
        "word": "Window",
        "chunks": [
          "Win",
          "dow"
        ],
        "chunkH": [
          "विन",
          "डो"
        ],
        "hindi": "विंडो",
        "meaning": "खिड़की",
        "syllables": 2,
        "tip": "[Win=विन]+[dow=डो]=विंडो"
      },
      {
        "id": "l6_number",
        "word": "Number",
        "chunks": [
          "Num",
          "ber"
        ],
        "chunkH": [
          "नम",
          "बर"
        ],
        "hindi": "नंबर",
        "meaning": "संख्या",
        "syllables": 2,
        "tip": "[Num=नम]+[ber=बर]=नंबर"
      },
      {
        "id": "l6_welcome",
        "word": "Welcome",
        "chunks": [
          "Wel",
          "come"
        ],
        "chunkH": [
          "वेल",
          "कम"
        ],
        "hindi": "वेलकम",
        "meaning": "स्वागत है",
        "syllables": 2,
        "tip": "[Wel=वेल]+[come=कम]=वेलकम"
      },
      {
        "id": "l6_napkin",
        "word": "Napkin",
        "chunks": [
          "Nap",
          "kin"
        ],
        "chunkH": [
          "नैप",
          "किन"
        ],
        "hindi": "नैपकिन",
        "meaning": "रुमाल / टिशू",
        "syllables": 2,
        "tip": "[Nap=नैप]+[kin=किन]=नैपकिन"
      },
      {
        "id": "l6_football",
        "word": "Football",
        "chunks": [
          "Foot",
          "ball"
        ],
        "chunkH": [
          "फ़ुट",
          "बॉल"
        ],
        "hindi": "फ़ुटबॉल",
        "meaning": "फुटबॉल",
        "syllables": 2,
        "tip": "[Foot=फ़ुट]+[ball=बॉल]=फ़ुटबॉल"
      },
      {
        "id": "l6_sunlight",
        "word": "Sunlight",
        "chunks": [
          "Sun",
          "light"
        ],
        "chunkH": [
          "सन",
          "लाइट"
        ],
        "hindi": "सनलाइट",
        "meaning": "धूप",
        "syllables": 2,
        "tip": "[Sun=सन]+[light=लाइट]=सनलाइट"
      },
      {
        "id": "l6_computer",
        "word": "Computer",
        "chunks": [
          "Com",
          "pu",
          "ter"
        ],
        "chunkH": [
          "कॉम",
          "प्यू",
          "टर"
        ],
        "hindi": "कंप्यूटर",
        "meaning": "संगणक",
        "syllables": 3,
        "tip": "[Com]+[pu]+[ter]=कंप्यूटर"
      },
      {
        "id": "l6_hospital",
        "word": "Hospital",
        "chunks": [
          "Hos",
          "pi",
          "tal"
        ],
        "chunkH": [
          "हॉस",
          "पि",
          "टल"
        ],
        "hindi": "हॉस्पिटल",
        "meaning": "अस्पताल",
        "syllables": 3,
        "tip": "[Hos]+[pi]+[tal]=हॉस्पिटल"
      },
      {
        "id": "l6_india",
        "word": "India",
        "chunks": [
          "In",
          "di",
          "a"
        ],
        "chunkH": [
          "इन",
          "डि",
          "या"
        ],
        "hindi": "इंडिया",
        "meaning": "भारत देश",
        "syllables": 3,
        "tip": "[In]+[di]+[a]=इंडिया"
      },
      {
        "id": "l6_tomorrow",
        "word": "Tomorrow",
        "chunks": [
          "To",
          "mor",
          "row"
        ],
        "chunkH": [
          "टु",
          "मॉ",
          "रो"
        ],
        "hindi": "टुमॉरो",
        "meaning": "कल (आने वाला)",
        "syllables": 3,
        "tip": "[To]+[mor]+[row]=टुमॉरो"
      },
      {
        "id": "l6_family",
        "word": "Family",
        "chunks": [
          "Fa",
          "mi",
          "ly"
        ],
        "chunkH": [
          "फ़ै",
          "मि",
          "ली"
        ],
        "hindi": "फ़ैमिली",
        "meaning": "परिवार",
        "syllables": 3,
        "tip": "[Fa]+[mi]+[ly]=फ़ैमिली"
      },
      {
        "id": "l6_butterfly",
        "word": "Butterfly",
        "chunks": [
          "But",
          "ter",
          "fly"
        ],
        "chunkH": [
          "बट",
          "टर",
          "फ़्लाई"
        ],
        "hindi": "बटरफ़्लाई",
        "meaning": "तितली",
        "syllables": 3,
        "tip": "[But]+[ter]+[fly]=बटरफ़्लाई"
      },
      {
        "id": "l6_important",
        "word": "Important",
        "chunks": [
          "Im",
          "por",
          "tant"
        ],
        "chunkH": [
          "इम",
          "पोर",
          "टेंट"
        ],
        "hindi": "इम्पॉर्टेंट",
        "meaning": "महत्वपूर्ण",
        "syllables": 3,
        "tip": "[Im]+[por]+[tant]=इम्पॉर्टेंट"
      },
      {
        "id": "l6_telephone",
        "word": "Telephone",
        "chunks": [
          "Tel",
          "e",
          "phone"
        ],
        "chunkH": [
          "टेल",
          "ि",
          "फ़ोन"
        ],
        "hindi": "टेलीफ़ोन",
        "meaning": "दूरभाष यंत्र",
        "syllables": 3,
        "tip": "[Tel]+[e]+[phone]=टेलीफ़ोन"
      },
      {
        "id": "l6_understand",
        "word": "Understand",
        "chunks": [
          "Un",
          "der",
          "stand"
        ],
        "chunkH": [
          "अन",
          "डर",
          "स्टैंड"
        ],
        "hindi": "अंडरस्टैंड",
        "meaning": "समझना",
        "syllables": 3,
        "tip": "[Un]+[der]+[stand]=अंडरस्टैंड"
      },
      {
        "id": "l6_beautiful",
        "word": "Beautiful",
        "chunks": [
          "Beau",
          "ti",
          "ful"
        ],
        "chunkH": [
          "ब्यू",
          "टि",
          "फ़ुल"
        ],
        "hindi": "ब्यूटीफ़ुल",
        "meaning": "सुंदर",
        "syllables": 3,
        "tip": "[Beau]+[ti]+[ful]=ब्यूटीफ़ुल"
      }
    ],
    "categories": [
      {
        "id": "cat_2syl",
        "name": "2-अक्षर वाले रोज़मर्रा के शब्द (2-Syllable Everyday Words)",
        "icon": "🧩",
        "desc": "शब्द को 2 आसान टुकड़ों में तोड़कर पढ़ें: Doc-tor, Mar-ket, Sim-ple, Pen-cil, Win-dow",
        "words": [
          {
            "id": "l6_doctor",
            "word": "Doctor",
            "chunks": [
              "Doc",
              "tor"
            ],
            "chunkH": [
              "डॉक",
              "टर"
            ],
            "hindi": "डॉक्टर",
            "meaning": "चिकित्सक",
            "syllables": 2,
            "tip": "[Doc=डॉक]+[tor=टर]=डॉक्टर"
          },
          {
            "id": "l6_market",
            "word": "Market",
            "chunks": [
              "Mar",
              "ket"
            ],
            "chunkH": [
              "मार",
              "केट"
            ],
            "hindi": "मार्केट",
            "meaning": "बाज़ार",
            "syllables": 2,
            "tip": "[Mar=मार]+[ket=केट]=मार्केट"
          },
          {
            "id": "l6_simple",
            "word": "Simple",
            "chunks": [
              "Sim",
              "ple"
            ],
            "chunkH": [
              "सिम",
              "पल"
            ],
            "hindi": "सिंपल",
            "meaning": "सरल / आसान",
            "syllables": 2,
            "tip": "[Sim=सिम]+[ple=पल]=सिंपल"
          },
          {
            "id": "l6_pencil",
            "word": "Pencil",
            "chunks": [
              "Pen",
              "cil"
            ],
            "chunkH": [
              "पेन",
              "सिल"
            ],
            "hindi": "पेंसिल",
            "meaning": "पेंसिल",
            "syllables": 2,
            "tip": "[Pen=पेन]+[cil=सिल]=पेंसिल"
          },
          {
            "id": "l6_window",
            "word": "Window",
            "chunks": [
              "Win",
              "dow"
            ],
            "chunkH": [
              "विन",
              "डो"
            ],
            "hindi": "विंडो",
            "meaning": "खिड़की",
            "syllables": 2,
            "tip": "[Win=विन]+[dow=डो]=विंडो"
          },
          {
            "id": "l6_number",
            "word": "Number",
            "chunks": [
              "Num",
              "ber"
            ],
            "chunkH": [
              "नम",
              "बर"
            ],
            "hindi": "नंबर",
            "meaning": "संख्या",
            "syllables": 2,
            "tip": "[Num=नम]+[ber=बर]=नंबर"
          },
          {
            "id": "l6_welcome",
            "word": "Welcome",
            "chunks": [
              "Wel",
              "come"
            ],
            "chunkH": [
              "वेल",
              "कम"
            ],
            "hindi": "वेलकम",
            "meaning": "स्वागत",
            "syllables": 2,
            "tip": "[Wel=वेल]+[come=कम]=वेलकम"
          },
          {
            "id": "l6_napkin",
            "word": "Napkin",
            "chunks": [
              "Nap",
              "kin"
            ],
            "chunkH": [
              "नैप",
              "किन"
            ],
            "hindi": "नैपकिन",
            "meaning": "रूमाल",
            "syllables": 2,
            "tip": "[Nap=नैप]+[kin=किन]=नैपकिन"
          },
          {
            "id": "l6_football",
            "word": "Football",
            "chunks": [
              "Foot",
              "ball"
            ],
            "chunkH": [
              "फ़ुट",
              "बॉल"
            ],
            "hindi": "फ़ुटबॉल",
            "meaning": "फुटबॉल खेल",
            "syllables": 2,
            "tip": "[Foot=फ़ुट]+[ball=बॉल]=फ़ुटबॉल"
          },
          {
            "id": "l6_sunlight",
            "word": "Sunlight",
            "chunks": [
              "Sun",
              "light"
            ],
            "chunkH": [
              "सन",
              "लाइट"
            ],
            "hindi": "सनलाइट",
            "meaning": "धूप",
            "syllables": 2,
            "tip": "[Sun=सन]+[light=लाइट]=सनलाइट"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for two-syllable everyday words. The secret of reading big words is very simple: never look at the whole word all at once; always break it into two small chunks! In this passage, we practice reading: Doctor, Market, Simple, Pencil, Window, Number, Welcome, Napkin, Football, and Sunlight. Let us read together. Early in the morning, golden sunlight poured through the open glass window of the bedroom. The warm sunlight brightened every corner of the room. A kind doctor named Dr. Sharma woke up and looked out the window. Dr. Sharma was an experienced doctor who worked at the community health clinic. He sat at his wooden desk and picked up a sharp yellow pencil. Using the pencil, he wrote down an important phone number on a small paper notepad. It is a simple habit that helps him organize his daily schedule. After a healthy breakfast, Dr. Sharma used a clean cloth napkin to wipe his hands neatly. He placed the folded napkin on the table and got ready to visit the local market. The morning vegetable market was full of fresh fruits and vegetables. Vendors shouted a warm welcome to every customer who entered the market square. A group of school boys were playing football in an open field near the busy market. The boys kicked the football with skill, cheering whenever the ball crossed the goal line. Dr. Sharma smiled as he watched the exciting football match under the bright sunlight. He purchased fresh apples and sweet oranges from the market vendor. The shopkeeper calculated the total bill number and handed the receipt with a polite welcome. Dr. Sharma returned to his clinic and opened the window to let the fresh breeze in. Reading multi-syllable words becomes simple and natural when you chunk them syllable by syllable every single day!",
        "wordCount": 306,
        "sentences": [
          "Welcome to the reading practice passage for two-syllable everyday words.",
          "The secret of reading big words is very simple: never look at the whole word all at once; always break it into two small chunks!",
          "In this passage, we practice reading: Doctor, Market, Simple, Pencil, Window, Number, Welcome, Napkin, Football, and Sunlight.",
          "Let us read together.",
          "Early in the morning, golden sunlight poured through the open glass window of the bedroom.",
          "The warm sunlight brightened every corner of the room.",
          "A kind doctor named Dr.",
          "Sharma woke up and looked out the window.",
          "Dr.",
          "Sharma was an experienced doctor who worked at the community health clinic.",
          "He sat at his wooden desk and picked up a sharp yellow pencil.",
          "Using the pencil, he wrote down an important phone number on a small paper notepad.",
          "It is a simple habit that helps him organize his daily schedule.",
          "After a healthy breakfast, Dr.",
          "Sharma used a clean cloth napkin to wipe his hands neatly.",
          "He placed the folded napkin on the table and got ready to visit the local market.",
          "The morning vegetable market was full of fresh fruits and vegetables.",
          "Vendors shouted a warm welcome to every customer who entered the market square.",
          "A group of school boys were playing football in an open field near the busy market.",
          "The boys kicked the football with skill, cheering whenever the ball crossed the goal line.",
          "Dr.",
          "Sharma smiled as he watched the exciting football match under the bright sunlight.",
          "He purchased fresh apples and sweet oranges from the market vendor.",
          "The shopkeeper calculated the total bill number and handed the receipt with a polite welcome.",
          "Dr.",
          "Sharma returned to his clinic and opened the window to let the fresh breeze in.",
          "Reading multi-syllable words becomes simple and natural when you chunk them syllable by syllable every single day!"
        ]
      },
      {
        "id": "cat_3syl",
        "name": "3-अक्षर वाले बड़े शब्द (3-Syllable Complex Words)",
        "icon": "🏛️",
        "desc": "बड़े शब्दों को 3 टुकड़ों में विभाजित करके पढ़ें: Com-pu-ter, Hos-pi-tal, To-mor-row, Im-por-tant",
        "words": [
          {
            "id": "l6_computer",
            "word": "Computer",
            "chunks": [
              "Com",
              "pu",
              "ter"
            ],
            "chunkH": [
              "कॉम",
              "प्यू",
              "टर"
            ],
            "hindi": "कंप्यूटर",
            "meaning": "संगणक",
            "syllables": 3,
            "tip": "[Com=कॉम]+[pu=प्यू]+[ter=टर]=कंप्यूटर"
          },
          {
            "id": "l6_hospital",
            "word": "Hospital",
            "chunks": [
              "Hos",
              "pi",
              "tal"
            ],
            "chunkH": [
              "हॉस",
              "पि",
              "टल"
            ],
            "hindi": "हॉस्पिटल",
            "meaning": "अस्पताल",
            "syllables": 3,
            "tip": "[Hos=हॉस]+[pi=पि]+[tal=टल]=हॉस्पिटल"
          },
          {
            "id": "l6_india",
            "word": "India",
            "chunks": [
              "In",
              "di",
              "a"
            ],
            "chunkH": [
              "इन",
              "डि",
              "या"
            ],
            "hindi": "इंडिया",
            "meaning": "भारत देश",
            "syllables": 3,
            "tip": "[In=इन]+[di=डि]+[a=या]=इंडिया"
          },
          {
            "id": "l6_tomorrow",
            "word": "Tomorrow",
            "chunks": [
              "To",
              "mor",
              "row"
            ],
            "chunkH": [
              "टु",
              "मॉ",
              "रो"
            ],
            "hindi": "टुमॉरो",
            "meaning": "कल (आने वाला)",
            "syllables": 3,
            "tip": "[To=टु]+[mor=मॉ]+[row=रो]=टुमॉरो"
          },
          {
            "id": "l6_family",
            "word": "Family",
            "chunks": [
              "Fam",
              "i",
              "ly"
            ],
            "chunkH": [
              "फ़ैम",
              "इ",
              "ली"
            ],
            "hindi": "फ़ैमिली",
            "meaning": "परिवार",
            "syllables": 3,
            "tip": "[Fam=फ़ैम]+[i=इ]+[ly=ली]=फ़ैमिली"
          },
          {
            "id": "l6_butterfly",
            "word": "Butterfly",
            "chunks": [
              "But",
              "ter",
              "fly"
            ],
            "chunkH": [
              "बट",
              "टर",
              "फ़्लाई"
            ],
            "hindi": "बटरफ़्लाई",
            "meaning": "तितली",
            "syllables": 3,
            "tip": "[But=बट]+[ter=टर]+[fly=फ़्लाई]=बटरफ़्लाई"
          },
          {
            "id": "l6_important",
            "word": "Important",
            "chunks": [
              "Im",
              "por",
              "tant"
            ],
            "chunkH": [
              "इम",
              "पॉर",
              "टेंट"
            ],
            "hindi": "इम्पॉर्टेंट",
            "meaning": "महत्वपूर्ण",
            "syllables": 3,
            "tip": "[Im=इम]+[por=पॉर]+[tant=टेंट]=इम्पॉर्टेंट"
          },
          {
            "id": "l6_telephone",
            "word": "Telephone",
            "chunks": [
              "Tel",
              "e",
              "phone"
            ],
            "chunkH": [
              "टेल",
              "इ",
              "फ़ोन"
            ],
            "hindi": "टेलीफ़ोन",
            "meaning": "दूरभाष",
            "syllables": 3,
            "tip": "[Tel=टेल]+[e=इ]+[phone=फ़ोन]=टेलीफ़ोन"
          },
          {
            "id": "l6_understand",
            "word": "Understand",
            "chunks": [
              "Un",
              "der",
              "stand"
            ],
            "chunkH": [
              "अन",
              "डर",
              "स्टैंड"
            ],
            "hindi": "अंडरस्टैंड",
            "meaning": "समझना",
            "syllables": 3,
            "tip": "[Un=अन]+[der=डर]+[stand=स्टैंड]=अंडरस्टैंड"
          },
          {
            "id": "l6_beautiful",
            "word": "Beautiful",
            "chunks": [
              "Beau",
              "ti",
              "ful"
            ],
            "chunkH": [
              "ब्यू",
              "टि",
              "फ़ुल"
            ],
            "hindi": "ब्यूटीफ़ुल",
            "meaning": "सुंदर",
            "syllables": 3,
            "tip": "[Beau=ब्यू]+[ti=टि]+[ful=फ़ुल]=ब्यूटीफ़ुल"
          }
        ],
        "paragraph": "Welcome to the reading practice passage for three-syllable words. Breaking long words into three distinct chunks makes them as easy to read as any short word! In this inspiring lesson, we practice reading: Computer, Hospital, India, Tomorrow, Family, Butterfly, Important, Telephone, Understand, and Beautiful. Let us read together with rhythm and clarity. In our beloved country India, modern technology and caring traditions walk hand in hand. A dedicated young nurse worked at a large central hospital located in the capital city. Every morning, she turned on her desktop computer to update patient records. Using the computer made it fast and simple to keep track of important medical information. Suddenly, the landline telephone on her desk began to ring. She answered the telephone with a calm and reassuring voice to assist a worried family member. The nurse explained the medical situation with patience, helping the caller understand the treatment plan clearly. It is deeply important to communicate with compassion so that every family feels supported and respected. The doctor scheduled an important surgery for tomorrow morning. Outside the hospital garden, a colorful butterfly flitted gently from one fragrant blossom to another. The butterfly had beautiful orange and black wings that shimmered under the morning sun. Watching the beautiful butterfly brought a feeling of hope and peace to the patients resting near the garden walkway. The nurse smiled as she looked out at the beautiful garden scene. She knew that her loving family was waiting for her back home with pride and affection. Everyone in India knows that family is the foundation of happiness and strength. When you practice reading large three-syllable words by breaking them into three small parts—like Com-pu-ter, Hos-pi-tal, and Beau-ti-ful—you will understand that English reading is never difficult. Take your time, break every word with patience, practice reading these rich sentences every day, and feel your reading confidence grow stronger with every single word!",
        "wordCount": 316,
        "sentences": [
          "Welcome to the reading practice passage for three-syllable words.",
          "Breaking long words into three distinct chunks makes them as easy to read as any short word!",
          "In this inspiring lesson, we practice reading: Computer, Hospital, India, Tomorrow, Family, Butterfly, Important, Telephone, Understand, and Beautiful.",
          "Let us read together with rhythm and clarity.",
          "In our beloved country India, modern technology and caring traditions walk hand in hand.",
          "A dedicated young nurse worked at a large central hospital located in the capital city.",
          "Every morning, she turned on her desktop computer to update patient records.",
          "Using the computer made it fast and simple to keep track of important medical information.",
          "Suddenly, the landline telephone on her desk began to ring.",
          "She answered the telephone with a calm and reassuring voice to assist a worried family member.",
          "The nurse explained the medical situation with patience, helping the caller understand the treatment plan clearly.",
          "It is deeply important to communicate with compassion so that every family feels supported and respected.",
          "The doctor scheduled an important surgery for tomorrow morning.",
          "Outside the hospital garden, a colorful butterfly flitted gently from one fragrant blossom to another.",
          "The butterfly had beautiful orange and black wings that shimmered under the morning sun.",
          "Watching the beautiful butterfly brought a feeling of hope and peace to the patients resting near the garden walkway.",
          "The nurse smiled as she looked out at the beautiful garden scene.",
          "She knew that her loving family was waiting for her back home with pride and affection.",
          "Everyone in India knows that family is the foundation of happiness and strength.",
          "When you practice reading large three-syllable words by breaking them into three small parts—like Com-pu-ter, Hos-pi-tal, and Beau-ti-ful—you will understand that English reading is never difficult.",
          "Take your time, break every word with patience, practice reading these rich sentences every day, and feel your reading confidence grow stronger with every single word!"
        ]
      },
      {
        "id": "cat_master",
        "name": "मल्टी-सिलेबस मास्टर चैलेंज (Multi-Syllable Master Story)",
        "icon": "🎓",
        "desc": "2 और 3 सिलेबल वाले सभी शब्दों को मिलाकर एक संपूर्ण धाराप्रवाह रीडिंग प्रैक्टिस",
        "words": [],
        "paragraph": "Welcome to the Multi-Syllable Master Reading Challenge! In this advanced reading story, you will combine everything you have learned about syllable chunking. We bring together everyday two-syllable and three-syllable words into a complete, fluent reading experience. Long words are never scary when you remember the secret rule: divide the syllables, sound each chunk, and blend them together smoothly! Dr. Sharma worked at a bustling modern hospital in India. Every day, Dr. Sharma used a powerful computer to review medical files and research important health guidelines. Outside the hospital window, bright morning sunlight illuminated the busy city market below. A father and his young son were walking toward the market square carrying a leather football and a yellow pencil. The young boy looked out the window of a local bus and saw a beautiful butterfly flying over the green bushes. A welcome sign hung over the entrance of the public library across the street. The boy wanted to visit the library tomorrow with his family to borrow a science book about computers and space exploration. Suddenly, an old fashioned telephone rang at the doctor's desk. Dr. Sharma picked up the telephone receiver and spoke in a clear, friendly voice to help a patient understand his medical numbers. He used a paper napkin to wipe his spectacles before writing the prescription number on a clean pad. Every simple action in the hospital was performed with precision and care. A good doctor always helps each family understand how to stay healthy under the bright sunlight. Whether you are reading a two-syllable word like Doctor, Window, or Market, or a three-syllable word like Computer, Hospital, or Beautiful, the reading process remains exactly the same. Break each word into syllables, breathe naturally, and pronounce each chunk with pride. Celebrate your mastery of syllable chunking today!",
        "wordCount": 300,
        "sentences": [
          "Welcome to the Multi-Syllable Master Reading Challenge!",
          "In this advanced reading story, you will combine everything you have learned about syllable chunking.",
          "We bring together everyday two-syllable and three-syllable words into a complete, fluent reading experience.",
          "Long words are never scary when you remember the secret rule: divide the syllables, sound each chunk, and blend them together smoothly!",
          "Dr.",
          "Sharma worked at a bustling modern hospital in India.",
          "Every day, Dr.",
          "Sharma used a powerful computer to review medical files and research important health guidelines.",
          "Outside the hospital window, bright morning sunlight illuminated the busy city market below.",
          "A father and his young son were walking toward the market square carrying a leather football and a yellow pencil.",
          "The young boy looked out the window of a local bus and saw a beautiful butterfly flying over the green bushes.",
          "A welcome sign hung over the entrance of the public library across the street.",
          "The boy wanted to visit the library tomorrow with his family to borrow a science book about computers and space exploration.",
          "Suddenly, an old fashioned telephone rang at the doctor's desk.",
          "Dr.",
          "Sharma picked up the telephone receiver and spoke in a clear, friendly voice to help a patient understand his medical numbers.",
          "He used a paper napkin to wipe his spectacles before writing the prescription number on a clean pad.",
          "Every simple action in the hospital was performed with precision and care.",
          "A good doctor always helps each family understand how to stay healthy under the bright sunlight.",
          "Whether you are reading a two-syllable word like Doctor, Window, or Market, or a three-syllable word like Computer, Hospital, or Beautiful, the reading process remains exactly the same.",
          "Break each word into syllables, breathe naturally, and pronounce each chunk with pride.",
          "Celebrate your mastery of syllable chunking today!"
        ]
      }
    ]
  },
  "level7": {
    "title": "असली दुनिया की रीडिंग — Real-World Reading Arena",
    "subtitle": "अब आप असली जगहों पर लिखे अंग्रेज़ी पढ़ सकते हैं! किसी भी शब्द पर टैप करें — तुरंत हिंदी उच्चारण और आवाज़ मिलेगी।",
    "signboards": [
      {
        "id": "sb1",
        "category": "🚉 रेलवे स्टेशन",
        "text": "WAY OUT",
        "words": [
          {
            "e": "WAY",
            "h": "वे"
          },
          {
            "e": "OUT",
            "h": "आउट"
          }
        ],
        "meaning": "वे आउट (बाहर जाने का रास्ता)",
        "context": "मेट्रो और रेलवे स्टेशन पर बाहर निकलने के गेट पर लिखा होता है।"
      },
      {
        "id": "sb2",
        "category": "🏥 अस्पताल / मॉल",
        "text": "EMERGENCY EXIT",
        "words": [
          {
            "e": "EMERGENCY",
            "h": "इमर्जन्सी"
          },
          {
            "e": "EXIT",
            "h": "एग्ज़िट"
          }
        ],
        "meaning": "आपातकालीन निकास द्वार",
        "context": "किसी भी आपातकाल में सुरक्षित बाहर निकलने का द्वार।"
      },
      {
        "id": "sb3",
        "category": "🚫 सार्वजनिक स्थल",
        "text": "NO SMOKING",
        "words": [
          {
            "e": "NO",
            "h": "नो"
          },
          {
            "e": "SMOKING",
            "h": "स्मोकिंग"
          }
        ],
        "meaning": "धूम्रपान निषेध",
        "context": "जहां सिगरेट पीना मना होता है।"
      },
      {
        "id": "sb4",
        "category": "🚉 रेलवे स्टेशन",
        "text": "PLATFORM NUMBER ONE",
        "words": [
          {
            "e": "PLATFORM",
            "h": "प्लेटफ़ॉर्म"
          },
          {
            "e": "NUMBER",
            "h": "नंबर"
          },
          {
            "e": "ONE",
            "h": "वन"
          }
        ],
        "meaning": "प्लेटफ़ॉर्म नंबर 1",
        "context": "रेलवे स्टेशन पर ट्रेन पकड़ने वाली जगह।"
      },
      {
        "id": "sb5",
        "category": "🎟️ टिकट",
        "text": "TICKET COUNTER",
        "words": [
          {
            "e": "TICKET",
            "h": "टिकट"
          },
          {
            "e": "COUNTER",
            "h": "काउंटर"
          }
        ],
        "meaning": "टिकट खिड़की",
        "context": "जहां से यात्रा या सिनेमा का टिकट मिलता है।"
      },
      {
        "id": "sb6",
        "category": "🚪 दुकान / बैंक",
        "text": "PUSH / PULL",
        "words": [
          {
            "e": "PUSH",
            "h": "पुश"
          },
          {
            "e": "PULL",
            "h": "पुल"
          }
        ],
        "meaning": "धकेलो / खींचो",
        "context": "कांच के दरवाज़े पर लिखा होता है।"
      },
      {
        "id": "sb7",
        "category": "🏨 होटल",
        "text": "RECEPTION",
        "words": [
          {
            "e": "RECEPTION",
            "h": "रिसेप्शन"
          }
        ],
        "meaning": "स्वागत काउंटर",
        "context": "होटल में चेक-इन और जानकारी के लिए।"
      },
      {
        "id": "sb8",
        "category": "🏪 दुकान",
        "text": "OPEN 24 HOURS",
        "words": [
          {
            "e": "OPEN",
            "h": "ओपन"
          },
          {
            "e": "24",
            "h": "ट्वेंटी-फ़ोर"
          },
          {
            "e": "HOURS",
            "h": "आवर्स"
          }
        ],
        "meaning": "24 घंटे खुला",
        "context": "जो दुकान या सेवा रात-दिन उपलब्ध है।"
      }
    ],
    "mobileUI": [
      {
        "id": "mu1",
        "text": "DOWNLOAD FILE",
        "words": [
          {
            "e": "DOWNLOAD",
            "h": "डाउनलोड"
          },
          {
            "e": "FILE",
            "h": "फ़ाइल"
          }
        ],
        "meaning": "फ़ाइल डाउनलोड करें",
        "context": "फोटो, गाना या डॉक्यूमेंट सेव करते समय।"
      },
      {
        "id": "mu2",
        "text": "UPDATE AVAILABLE",
        "words": [
          {
            "e": "UPDATE",
            "h": "अपडेट"
          },
          {
            "e": "AVAILABLE",
            "h": "अवेलेबल"
          }
        ],
        "meaning": "नया संस्करण उपलब्ध है",
        "context": "Play Store या WhatsApp पर नया अपडेट आने पर।"
      },
      {
        "id": "mu3",
        "text": "ENTER PASSWORD",
        "words": [
          {
            "e": "ENTER",
            "h": "एंटर"
          },
          {
            "e": "PASSWORD",
            "h": "पासवर्ड"
          }
        ],
        "meaning": "गुप्त कोड डालें",
        "context": "बैंक ऐप, ATM या फोन लॉक खोलते समय।"
      },
      {
        "id": "mu4",
        "text": "BATTERY LOW",
        "words": [
          {
            "e": "BATTERY",
            "h": "बैटरी"
          },
          {
            "e": "LOW",
            "h": "लो"
          }
        ],
        "meaning": "चार्ज खत्म हो रहा है",
        "context": "जब फोन को चार्जर में लगाने की ज़रूरत हो।"
      },
      {
        "id": "mu5",
        "text": "SEARCH HERE",
        "words": [
          {
            "e": "SEARCH",
            "h": "सर्च"
          },
          {
            "e": "HERE",
            "h": "हियर"
          }
        ],
        "meaning": "यहां खोजें",
        "context": "Google या YouTube के सर्च बॉक्स में।"
      },
      {
        "id": "mu6",
        "text": "CALL REJECTED",
        "words": [
          {
            "e": "CALL",
            "h": "कॉल"
          },
          {
            "e": "REJECTED",
            "h": "रिजेक्टेड"
          }
        ],
        "meaning": "कॉल अस्वीकृत",
        "context": "जब कोई आपका फोन नहीं उठाता।"
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "english": "This is my bus.",
        "words": [
          {
            "e": "This",
            "h": "दिस"
          },
          {
            "e": "is",
            "h": "इज़"
          },
          {
            "e": "my",
            "h": "माइ"
          },
          {
            "e": "bus.",
            "h": "बस"
          }
        ],
        "translation": "यह मेरी बस है।"
      },
      {
        "id": "s2",
        "english": "Stop the red car.",
        "words": [
          {
            "e": "Stop",
            "h": "स्टॉप"
          },
          {
            "e": "the",
            "h": "द"
          },
          {
            "e": "red",
            "h": "रेड"
          },
          {
            "e": "car.",
            "h": "कार"
          }
        ],
        "translation": "लाल कार को रोको।"
      },
      {
        "id": "s3",
        "english": "Open the big box.",
        "words": [
          {
            "e": "Open",
            "h": "ओपन"
          },
          {
            "e": "the",
            "h": "द"
          },
          {
            "e": "big",
            "h": "बिग"
          },
          {
            "e": "box.",
            "h": "बॉक्स"
          }
        ],
        "translation": "बड़े डिब्बे को खोलो।"
      },
      {
        "id": "s4",
        "english": "Go to the market now.",
        "words": [
          {
            "e": "Go",
            "h": "गो"
          },
          {
            "e": "to",
            "h": "टू"
          },
          {
            "e": "the",
            "h": "द"
          },
          {
            "e": "market",
            "h": "मार्केट"
          },
          {
            "e": "now.",
            "h": "नाउ"
          }
        ],
        "translation": "अब बाज़ार जाओ।"
      },
      {
        "id": "s5",
        "english": "Water is very cold.",
        "words": [
          {
            "e": "Water",
            "h": "वॉटर"
          },
          {
            "e": "is",
            "h": "इज़"
          },
          {
            "e": "very",
            "h": "वेरी"
          },
          {
            "e": "cold.",
            "h": "कोल्ड"
          }
        ],
        "translation": "पानी बहुत ठंडा है।"
      },
      {
        "id": "s6",
        "english": "I love my India.",
        "words": [
          {
            "e": "I",
            "h": "आइ"
          },
          {
            "e": "love",
            "h": "लव"
          },
          {
            "e": "my",
            "h": "माइ"
          },
          {
            "e": "India.",
            "h": "इंडिया"
          }
        ],
        "translation": "मुझे अपने भारत से प्यार है।"
      },
      {
        "id": "s7",
        "english": "She has a big red bag.",
        "words": [
          {
            "e": "She",
            "h": "शी"
          },
          {
            "e": "has",
            "h": "हैज़"
          },
          {
            "e": "a",
            "h": "अ"
          },
          {
            "e": "big",
            "h": "बिग"
          },
          {
            "e": "red",
            "h": "रेड"
          },
          {
            "e": "bag.",
            "h": "बैग"
          }
        ],
        "translation": "उसके पास एक बड़ा लाल बैग है।"
      },
      {
        "id": "s8",
        "english": "The train is on time.",
        "words": [
          {
            "e": "The",
            "h": "द"
          },
          {
            "e": "train",
            "h": "ट्रेन"
          },
          {
            "e": "is",
            "h": "इज़"
          },
          {
            "e": "on",
            "h": "ऑन"
          },
          {
            "e": "time.",
            "h": "टाइम"
          }
        ],
        "translation": "ट्रेन समय पर है।"
      }
    ],
    "stories": [
      {
        "id": "story1",
        "title": "The Fat Cat and The Red Hen",
        "titleHindi": "द फ़ैट कैट एंड द रेड हेन",
        "paras": [
          [
            {
              "e": "A",
              "h": "अ"
            },
            {
              "e": "fat",
              "h": "फ़ैट"
            },
            {
              "e": "cat",
              "h": "कैट"
            },
            {
              "e": "sat",
              "h": "सैट"
            },
            {
              "e": "on",
              "h": "ऑन"
            },
            {
              "e": "a",
              "h": "अ"
            },
            {
              "e": "mat.",
              "h": "मैट"
            }
          ],
          [
            {
              "e": "The",
              "h": "द"
            },
            {
              "e": "cat",
              "h": "कैट"
            },
            {
              "e": "saw",
              "h": "सॉ"
            },
            {
              "e": "a",
              "h": "अ"
            },
            {
              "e": "red",
              "h": "रेड"
            },
            {
              "e": "hen.",
              "h": "हेन"
            }
          ],
          [
            {
              "e": "The",
              "h": "द"
            },
            {
              "e": "hen",
              "h": "हेन"
            },
            {
              "e": "had",
              "h": "हैड"
            },
            {
              "e": "a",
              "h": "अ"
            },
            {
              "e": "big",
              "h": "बिग"
            },
            {
              "e": "pen.",
              "h": "पेन"
            }
          ],
          [
            {
              "e": "The",
              "h": "द"
            },
            {
              "e": "hen",
              "h": "हेन"
            },
            {
              "e": "ran",
              "h": "रैन"
            },
            {
              "e": "to",
              "h": "टू"
            },
            {
              "e": "the",
              "h": "द"
            },
            {
              "e": "van.",
              "h": "वैन"
            }
          ]
        ],
        "summary": "एक मोटी बिल्ली चटाई पर बैठी थी। बिल्ली ने एक लाल मुर्गी को देखा। मुर्गी के पास एक बड़ा बाड़ा था। मुर्गी वैन की तरफ दौड़ गई!"
      },
      {
        "id": "story2",
        "title": "Raju Goes To Market",
        "titleHindi": "राजू गोज़ टू मार्केट",
        "paras": [
          [
            {
              "e": "Raju",
              "h": "राजू"
            },
            {
              "e": "went",
              "h": "वेंट"
            },
            {
              "e": "to",
              "h": "टू"
            },
            {
              "e": "the",
              "h": "द"
            },
            {
              "e": "market",
              "h": "मार्केट"
            },
            {
              "e": "by",
              "h": "बाइ"
            },
            {
              "e": "bus.",
              "h": "बस"
            }
          ],
          [
            {
              "e": "He",
              "h": "ही"
            },
            {
              "e": "got",
              "h": "गॉट"
            },
            {
              "e": "a",
              "h": "अ"
            },
            {
              "e": "hot",
              "h": "हॉट"
            },
            {
              "e": "cup",
              "h": "कप"
            },
            {
              "e": "of",
              "h": "ऑव"
            },
            {
              "e": "tea.",
              "h": "टी"
            }
          ],
          [
            {
              "e": "He",
              "h": "ही"
            },
            {
              "e": "saw",
              "h": "सॉ"
            },
            {
              "e": "his",
              "h": "हिज़"
            },
            {
              "e": "sister",
              "h": "सिस्टर"
            },
            {
              "e": "at",
              "h": "एट"
            },
            {
              "e": "the",
              "h": "द"
            },
            {
              "e": "shop.",
              "h": "शॉप"
            }
          ],
          [
            {
              "e": "They",
              "h": "दे"
            },
            {
              "e": "came",
              "h": "केम"
            },
            {
              "e": "back",
              "h": "बैक"
            },
            {
              "e": "home",
              "h": "होम"
            },
            {
              "e": "on",
              "h": "ऑन"
            },
            {
              "e": "time.",
              "h": "टाइम"
            }
          ]
        ],
        "summary": "राजू बस से बाज़ार गया। उसने गर्म चाय का एक कप पिया। उसने अपनी बहन को दुकान पर देखा। वे समय पर घर वापस आ गए।"
      },
      {
        "id": "story3",
        "title": "My Day At School",
        "titleHindi": "माय डे एट स्कूल",
        "paras": [
          [
            {
              "e": "I",
              "h": "आइ"
            },
            {
              "e": "wake",
              "h": "वेक"
            },
            {
              "e": "up",
              "h": "अप"
            },
            {
              "e": "at",
              "h": "एट"
            },
            {
              "e": "six.",
              "h": "सिक्स"
            }
          ],
          [
            {
              "e": "I",
              "h": "आइ"
            },
            {
              "e": "get",
              "h": "गेट"
            },
            {
              "e": "my",
              "h": "माइ"
            },
            {
              "e": "bag",
              "h": "बैग"
            },
            {
              "e": "and",
              "h": "एंड"
            },
            {
              "e": "pen.",
              "h": "पेन"
            }
          ],
          [
            {
              "e": "My",
              "h": "माइ"
            },
            {
              "e": "school",
              "h": "स्कूल"
            },
            {
              "e": "is",
              "h": "इज़"
            },
            {
              "e": "big",
              "h": "बिग"
            },
            {
              "e": "and",
              "h": "एंड"
            },
            {
              "e": "nice.",
              "h": "नाइस"
            }
          ],
          [
            {
              "e": "I",
              "h": "आइ"
            },
            {
              "e": "love",
              "h": "लव"
            },
            {
              "e": "to",
              "h": "टू"
            },
            {
              "e": "read",
              "h": "रीड"
            },
            {
              "e": "and",
              "h": "एंड"
            },
            {
              "e": "learn.",
              "h": "लर्न"
            }
          ]
        ],
        "summary": "मैं छह बजे उठता हूं। मैं अपना बैग और कलम लेता हूं। मेरा स्कूल बड़ा और अच्छा है। मुझे पढ़ना और सीखना पसंद है।"
      }
    ]
  },
  "badges": [
    {
      "id": "b1",
      "level": 1,
      "name": "वर्णमाला ज्ञाता",
      "title": "Alphabet Master",
      "icon": "🔤",
      "desc": "A से Z तक सभी अक्षरों की सभी आवाज़ें जानी!"
    },
    {
      "id": "b2",
      "level": 2,
      "name": "44 ध्वनि योद्धा",
      "title": "Phoneme Warrior",
      "icon": "🎵",
      "desc": "अंग्रेज़ी की सभी 44 ध्वनियां सीखीं!"
    },
    {
      "id": "b3",
      "level": 3,
      "name": "दो अक्षर धावक",
      "title": "2-Letter Sprinter",
      "icon": "⚡",
      "desc": "2-अक्षर के 25+ शब्द जोड़कर पढ़े!"
    },
    {
      "id": "b4",
      "level": 4,
      "name": "CVC शब्द शिल्पी",
      "title": "CVC Champion",
      "icon": "🧱",
      "desc": "CVC Word Families में महारत!"
    },
    {
      "id": "b5",
      "level": 5,
      "name": "जादुई ध्वनि खोजी",
      "title": "Magic Sound Explorer",
      "icon": "✨",
      "desc": "Blends, Digraphs और Magic-E का राज जाना!"
    },
    {
      "id": "b6",
      "level": 6,
      "name": "चंकिंग गुरु",
      "title": "Chunking Specialist",
      "icon": "🧩",
      "desc": "बड़े शब्दों को टुकड़ों में पढ़ना सीखा!"
    },
    {
      "id": "b7",
      "level": 7,
      "name": "धाराप्रवाह पाठक",
      "title": "Fluent Real Reader",
      "icon": "🏆",
      "desc": "Signs, Mobile Screens और कहानियां पढ़ लीं!"
    }
  ]
};

if (typeof window !== "undefined") {
  window.PHONICS_DATA = PHONICS_DATA;
}

if (typeof module !== "undefined") {
  module.exports = PHONICS_DATA;
}
