
// --- Knowledge Base & Translations ---
const translations = {
    en: {
        appTitle: "SHE Assist",
        subtitle: "Women’s Legal Support",
        caption: "Confidential & Private. Providing legal awareness, not advice.",
        rightsBtn: "Know Your Rights",
        historyBtn: "History",
        historyTitle: "Chat History",
        newChatBtn: "New Chat",
        quickExitBtn: "Quick Exit",
        helplineText: "<span>Admin Helpline: 181</span> <span>Emergency: 112</span>",
        placeholder: "Type your concern here...",
        landingCaption: "Select Your Language / ഭാഷ തിരഞ്ഞെടുക്കുക",
        greeting: "Namaste. I am here to help you understand your legal rights.",
        options: "You can ask me about:",
        topics: [
            "Dowry Harassment",
            "Domestic Violence",
            "Workplace Harassment",
            "Cybercrime / Online Abuse",
            "Marriage & Divorce Rights"
        ],
        disclaimer: "I am an AI. This is for information only, not legal advice.",
        default_support: "I am here to listen. Could you please tell me a bit more about what you are facing?",
        default_right: "I can provide information on Dowry, Domestic Violence, Workplace Harassment, Cybercrime, and Marriage/Divorce rights.",
        default_actions: [],
        right_label: "Legal Right:",
        steps_label: "Steps to Take:",
        helpline_label: "Helpline:",
        resources_label: "Useful Official Resources:"
    },
    ml: {
        appTitle: "ഷി അസിസ്റ്റ്",
        subtitle: "വനിതാ നിയമ സഹായം",
        caption: "ഇത് സ്വകാര്യത ഉറപ്പുനൽകുന്ന സേവനമാണ്. ഇവിടെ നൽകുന്നത് നിയമ വിവരങ്ങളാണ്, നിയമോപദേശം അല്ല.",
        rightsBtn: "നിങ്ങളുടെ അവകാശങ്ങൾ അറിയുക",
        historyBtn: "ചരിത്രം",
        historyTitle: "ചാറ്റ് ചരിത്രം",
        newChatBtn: "പുതിയ ചാറ്റ്",
        quickExitBtn: "വേഗത്തിൽ പുറത്തുകടക്കുക",
        helplineText: "<span>ഹെൽപ്പ്ലൈൻ: 181</span> <span>എമർജൻസി: 112</span>",
        placeholder: "നിങ്ങളുടെ പ്രശ്നം ഇവിടെ ടൈപ്പ് ചെയ്യുക...",
        landingCaption: "ഭാഷ തിരഞ്ഞെടുക്കുക",
        greeting: "നമസ്കാരം. നിങ്ങളുടെ നിയമപരമായ അവകാശങ്ങൾ മനസ്സിലാക്കാൻ ഞാൻ ഇവിടെയുണ്ട്.",
        options: "നിങ്ങൾക്ക് എന്നോട് ചോദിക്കാം:",
        topics: [
            "സ്ത്രീധന പീഡനം",
            "ഗാർഹിക പീഡനം",
            "ജോലിസ്ഥലത്തെ പീഡനം",
            "സൈബർ കുറ്റകൃത്യങ്ങൾ",
            "വിവാഹ, വിവാഹമോചന അവകാശങ്ങൾ"
        ],
        disclaimer: "ഞാനൊരു AI ആണ്. ഇത് വിവരങ്ങൾക്ക് വേണ്ടി മാത്രമാണ്, നിയമോപദേശമല്ല.",
        default_support: "ഞാൻ കേൾക്കുന്നുണ്ട്. നിങ്ങൾ നേരിടുന്ന പ്രശ്നത്തെക്കുറിച്ച് കൂടുതൽ പറയാമോ?",
        default_right: "സ്ത്രീധനം, ഗാർഹിക പീഡനം, ജോലിസ്ഥലത്തെ പീഡനം, സൈബർ കുറ്റകൃത്യങ്ങൾ, വിവാഹ/വിവാഹമോചന അവകാശങ്ങൾ എന്നിവയെക്കുറിച്ച് എനിക്ക് വിവരങ്ങൾ നൽകാൻ കഴിയും.",
        default_actions: [],
        right_label: "നിയമപരമായ അവകാശം:",
        steps_label: "സ്വീകരിക്കേണ്ട നടപടികൾ:",
        helpline_label: "ഹെൽപ്പ്ലൈൻ:",
        resources_label: "ഉപയോഗപ്രദമായ ഔദ്യോഗിക സഹായ ലിങ്കുകൾ:"
    },
    evidence_prompt: {
        en: "Would you like to know what evidence you should keep? Reply Yes or No.",
        ml: "സൂക്ഷിക്കേണ്ട തെളിവുകൾ അറിയണമോ? Yes അല്ലെങ്കിൽ No എന്ന് മറുപടി നൽകൂ."
    }
};

const evidenceResponse = {
    en: {
        intro: "You may consider keeping:",
        evidence: [
            "1. Screenshots of messages or chats",
            "2. Call recordings or logs (if available)",
            "3. Photos or videos of incidents",
            "4. Medical reports (if injury occurred)",
            "5. Bank/payment records (for dowry/financial abuse)",
            "6. Witness names or statements",
            "7. Copies of complaints already filed"
        ],
        closing: "Keep these safely — they help support your case."
    },
    ml: {
        intro: "താഴെ പറയുന്ന തെളിവുകൾ സൂക്ഷിക്കുന്നത് സഹായകരമാണ്:",
        evidence: [
            "1. സന്ദേശങ്ങളുടെ സ്ക്രീൻഷോട്ടുകൾ",
            "2. കോൾ റെക്കോർഡുകൾ / ലോഗുകൾ",
            "3. സംഭവത്തിന്റെ ഫോട്ടോ അല്ലെങ്കിൽ വീഡിയോ",
            "4. പരിക്ക് ഉണ്ടായാൽ മെഡിക്കൽ റിപ്പോർട്ടുകൾ",
            "5. ബാങ്ക് / പണമിടപാട് രേഖകൾ",
            "6. സാക്ഷികളുടെ വിവരങ്ങൾ",
            "7. നൽകിയ പരാതികളുടെ പകർപ്പുകൾ"
        ],
        closing: "ഇവ സുരക്ഷിതമായി സൂക്ഷിക്കുക — ഇത് കേസിന് സഹായകരമാണ്."
    }
};

const legalKnowledgeBase = {
    dowry: {
        keywords: ['dowry', 'dahej', 'money', 'demand', 'husband asks for money', 'in-laws', 'force', 'സ്ത്രീധനം', 'പണം', 'സ്വർണം'],
        en: {
            supportive: "I am so sorry you are going through this. No one has the right to demand money or goods from you or your family.",
            right: "Under the **Dowry Prohibition Act, 1961**, giving or taking dowry is a crime. Section 498A of the IPC also covers cruelty by husband or relatives.",
            actions: [
                "File a complaint with the local police station.",
                "Contact the Dowry Prohibition Officer in your district.",
                "You can also approach the National Commission for Women (NCW)."
            ],
            helpline: "181 (Women Helpline) or 112 (Emergency)",
            resources: [
                { name: "National Commission for Women", url: "https://ncw.nic.in" },
                { name: "Women Helpline Information", url: "https://wcd.nic.in" },
                { name: "Legal Services Authority", url: "https://nalsa.gov.in" }
            ]
        },
        ml: {
            supportive: "നിങ്ങൾ ഇതിലൂടെ കടന്നുപോകുന്നതിൽ എനിക്ക് വിഷമമുണ്ട്. നിങ്ങളിൽ നിന്നോ കുടുംബത്തിൽ നിന്നോ പണമോ സ്വത്തോ ആവശ്യപ്പെടാൻ ആർക്കും അവകാശമില്ല.",
            right: "**സ്ത്രീധന നിരോധന നിയമം, 1961** പ്രകാരം സ്ത്രീധനം നൽകുന്നതും വാങ്ങുന്നതും കുറ്റകരമാണ്. ഭർത്താവിന്റെയോ ബന്ധുക്കളുടെയോ പീഡനം IPC 498A പ്രകാരം കുറ്റകരമാണ്.",
            actions: [
                "അടുത്തുള്ള പോലീസ് സ്റ്റേഷനിൽ പരാതി നൽകുക.",
                "നിങ്ങളുടെ ജില്ലയിലെ സ്ത്രീധന നിരോധന ഓഫീസറെ സമീപിക്കുക.",
                "ദേശീയ വനിതാ കമ്മീഷനെയും (NCW) സമീപിക്കാം."
            ],
            helpline: "181 (വനിതാ ഹെൽപ്പ്ലൈൻ) അല്ലെങ്കിൽ 112",
            resources: [
                { name: "National Commission for Women", url: "https://ncw.nic.in" },
                { name: "Women Helpline Information", url: "https://wcd.nic.in" },
                { name: "Legal Services Authority", url: "https://nalsa.gov.in" }
            ]
        }
    },
    domestic_violence: {
        keywords: ['hit', 'beat', 'slap', 'abuse', 'hurt', 'violence', 'torture', 'physical', 'mental', 'safe', 'afraid', 'husband hits', 'fight', 'അടി', 'മർദ്ദനം', 'ഉപദ്രവം', 'ഭർത്താവ്'],
        en: {
            supportive: "You do not deserve to be hurt. Your safety is the most important thing right now.",
            right: "The **Protection of Women from Domestic Violence Act (PWDVA), 2005** gives you the right to protection, residence, and monetary relief.",
            actions: [
                "Call 100 or 112 immediately if you are in danger.",
                "Approach a Protection Officer or Service Provider in your area.",
                "You can file a Domestic Incident Report (DIR) at the nearest police station."
            ],
            helpline: "1091 (Women Distress Helpline) or 181",
            resources: [
                { name: "National Commission for Women", url: "https://ncw.nic.in" },
                { name: "Women Helpline Information", url: "https://wcd.nic.in" },
                { name: "Legal Services Authority", url: "https://nalsa.gov.in" }
            ]
        },
        ml: {
            supportive: "നിങ്ങൾ ഉപദ്രവിക്കപ്പെടാൻ അർഹയല്ല. നിങ്ങളുടെ സുരക്ഷയ്ക്കാണ് ഇപ്പോൾ പ്രാധാന്യം.",
            right: "**ഗാർഹിക പീഡനത്തിൽ നിന്നുള്ള സ്ത്രീകളുടെ സംരക്ഷണ നിയമം (PWDVA), 2005** നിങ്ങൾക്ക് സംരക്ഷണത്തിനും താമസത്തിനും പണത്തിനും അവകാശം നൽകുന്നു.",
            actions: [
                "അപകടത്തിലാണെങ്കിൽ ഉടനടി 100 അല്ലെങ്കിൽ 112 ലേക്ക് വിളിക്കുക.",
                "നിങ്ങളുടെ പ്രദേശത്തെ പ്രൊട്ടക്ഷൻ ഓഫീസറെ സമീപിക്കുക.",
                "അടുത്തുള്ള പോലീസ് സ്റ്റേഷനിൽ പരാതി നൽകാം."
            ],
            helpline: "1091 (വനിതാ ഹെൽപ്പ്ലൈൻ) അല്ലെങ്കിൽ 181",
            resources: [
                { name: "National Commission for Women", url: "https://ncw.nic.in" },
                { name: "Women Helpline Information", url: "https://wcd.nic.in" },
                { name: "Legal Services Authority", url: "https://nalsa.gov.in" }
            ]
        }
    },
    workplace_harassment: {
        keywords: ['work', 'office', 'boss', 'colleague', 'touch', 'comment', 'posh', 'sexual', 'harass', 'job', 'uncomfortable', 'ജോലി', 'ഓഫീസ്', 'ബോസ്', 'ലൈംഗിക'],
        en: {
            supportive: "Workplace harassment is unacceptable. You have the right to a safe working environment.",
            right: "The **Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act)** mandates an Internal Committee (IC) in every organization with 10+ employees.",
            actions: [
                "Submit a written complaint to the Internal Committee (IC) within 3 months.",
                "If there is no IC, file a complaint with the Local Committee (LC) at the district level.",
                "You can also use the SHE-Box (Sexual Harassment Electronic Box) online portal."
            ],
            helpline: "181",
            resources: [
                { name: "Ministry of Women & Child Development", url: "https://wcd.nic.in" },
                { name: "POSH Act Information", url: "https://shebox.nic.in" }
            ]
        },
        ml: {
            supportive: "ജോലിസ്ഥലത്തെ പീഡനം അംഗീകരിക്കാനാവില്ല. സുരക്ഷിതമായ തൊഴിൽ അന്തരീക്ഷം നിങ്ങളുടെ അവകാശമാണ്.",
            right: "**POSH Act, 2013** പ്രകാരം 10-ൽ കൂടുതൽ ജീവനക്കാരുള്ള സ്ഥാപനങ്ങളിൽ പരാതി പരിഹാര കമ്മിറ്റി (Internal Committee) നിർബന്ധമാണ്.",
            actions: [
                "3 മാസത്തിനുള്ളിൽ ഇന്റേണൽ കമ്മിറ്റിക്ക് (IC) രേഖാമൂലം പരാതി നൽകുക.",
                "കമ്മിറ്റി ഇല്ലെങ്കിൽ, ജില്ലാതല ലോക്കൽ കമ്മിറ്റിയിൽ (LC) പരാതി നൽകാം.",
                "SHE-Box ഓൺലൈൻ പോർട്ടൽ വഴിയും പരാതി നൽകാം."
            ],
            helpline: "181",
            resources: [
                { name: "Ministry of Women & Child Development", url: "https://wcd.nic.in" },
                { name: "POSH Act Information", url: "https://shebox.nic.in" }
            ]
        }
    },
    cybercrime: {
        keywords: ['online', 'internet', 'photo', 'video', 'blackmail', 'troll', 'abuse', 'threat', 'email', 'social media', 'facebook', 'instagram', 'whatsapp', 'leak', 'ഓൺലൈൻ', 'ഫോട്ടോ', 'വീഡിയോ', 'ഭീഷണി'],
        en: {
            supportive: "Online abuse is real and can be very distressing. You have legal recourse against it.",
            right: "**Information Technology Act, 2000** (Sections 66E, 67, 67A) and IPC Section 354D (Stalking) protect women from online harassment.",
            actions: [
                "Do not delete the evidence. Take screenshots of messages/posts.",
                "Report the content on the social media platform immediately.",
                "File a regular FIR or specialized complaint at [cybercrime.gov.in](https://cybercrime.gov.in)."
            ],
            helpline: "1930 (National Cyber Crime Reporting Portal)",
            resources: [
                { name: "National Cyber Crime Portal", url: "https://cybercrime.gov.in" }
            ]
        },
        ml: {
            supportive: "ഓൺലൈൻ പീഡനം നിയമവിരുദ്ധമാണ്. നിങ്ങൾക്ക് ഇതിനെതിരെ നിയമനടപടി സ്വീകരിക്കാം.",
            right: "**ഐടി ആക്ട്, 2000** (വകുപ്പുകൾ 66E, 67, 67A), IPC 354D എന്നിവ സ്ത്രീകളെ ഓൺലൈൻ പീഡനത്തിൽ നിന്ന് സംരക്ഷിക്കുന്നു.",
            actions: [
                "തെളിവുകൾ (സ്ക്രീൻഷോട്ടുകൾ) സൂക്ഷിക്കുക.",
                " സോഷ്യൽ മീഡിയ പ്ലാറ്റ്‌ഫോമിൽ റിപ്പോർട്ട് ചെയ്യുക.",
                "[cybercrime.gov.in](https://cybercrime.gov.in) ൽ പരാതി നൽകുക."
            ],
            helpline: "1930 (സൈബർ ക്രൈം ഹെൽപ്പ്ലൈൻ)",
            resources: [
                { name: "National Cyber Crime Portal", url: "https://cybercrime.gov.in" }
            ]
        }
    },
    marriage: {
        keywords: ['marriage', 'married', 'wife', 'rights', 'forced', 'register', 'wedding', 'home', 'വിവാഹം', 'ഭാര്യ', 'അവകാശം'],
        en: {
            supportive: "Knowing your rights in a marriage helps you build a secure future.",
            right: "You have equal rights in marriage, including the right to live with dignity, right to the matrimonial home, and right against bigamy.",
            actions: [
                "Ensure your marriage is registered.",
                "Keep copies of all important documents (marriage certificate, ID proofs) in a safe place.",
                "If facing forced marriage, contact the Child Marriage Prohibition Officer if underage, or local police."
            ],
            helpline: "181",
            resources: [
                { name: "eCourts Services", url: "https://ecourts.gov.in" },
                { name: "Legal Aid Services", url: "https://nalsa.gov.in" }
            ]
        },
        ml: {
            supportive: "വിവാഹത്തിലെ അവകാശങ്ങളെക്കുറിച്ച് അറിയുന്നത് സുരക്ഷിതമായ ഭാവി ഉറപ്പാക്കാൻ സഹായിക്കും.",
            right: "വിവാഹത്തിൽ നിങ്ങൾക്ക് തുല്യ അവകാശങ്ങളുണ്ട്. അന്തസ്സോടെ ജീവിക്കാനും ഭർത്താവിന്റെ വീട്ടിൽ താമസിക്കാനും അവകാശമുണ്ട്.",
            actions: [
                "വിവാഹം രജിസ്റ്റർ ചെയ്തിട്ടുണ്ടെന്ന് ഉറപ്പാക്കുക.",
                "പ്രധാന രേഖകളുടെ (വിവാഹ സർട്ടിഫിക്കറ്റ്, തിരിച്ചറിയൽ രേഖകൾ) പകർപ്പുകൾ സൂക്ഷിക്കുക.",
                "നിർബന്ധിത വിവാഹമാണെങ്കിൽ പോലീസിനെ അറിയിക്കുക."
            ],
            helpline: "181",
            resources: [
                { name: "eCourts Services", url: "https://ecourts.gov.in" },
                { name: "Legal Aid Services", url: "https://nalsa.gov.in" }
            ]
        }
    },
    divorce: {
        keywords: ['divorce', 'separate', 'leave', 'maintenance', 'alimony', 'custody', 'child', 'money', 'support', 'വിവാഹമോചനം', 'ജീവനാംശം', 'വേർപിരിയൽ'],
        en: {
            supportive: "Leaving a marriage is a difficult decision. You have rights that ensure your financial security.",
            right: "You can seek divorce under personal laws (Hindu Marriage Act, etc.). You have a **Right to Maintenance** (Section 125 CrPC) for yourself and your children.",
            actions: [
                "Consult a fast-track court or family court lawyer.",
                "File a petition for maintenance under Section 125 CrPC.",
                "You can also approach the Legal Services Authority for free legal aid if eligible."
            ],
            helpline: "181 or NALSA (National Legal Services Authority)",
            resources: [
                { name: "eCourts Services", url: "https://ecourts.gov.in" },
                { name: "Legal Aid Services", url: "https://nalsa.gov.in" }
            ]
        },
        ml: {
            supportive: "വിവാഹമോചനം വലിയൊരു തീരുമാനമാണ്. നിങ്ങളുടെ സാമ്പത്തിക സുരക്ഷ ഉറപ്പാക്കാൻ നിയമങ്ങളുണ്ട്.",
            right: "നിങ്ങൾക്ക് വിവാഹമോചനം തേടാം. നിങ്ങൾക്കും കുട്ടികൾക്കും **ജീവനാംശം (Section 125 CrPC)** ലഭിക്കാൻ അവകാശമുണ്ട്.",
            actions: [
                "ഒരു അഭിഭാഷകനുമായി സംസാരിക്കുക.",
                "ജീവനാംശത്തിനായി കോടതിയിൽ ഹർജി നൽകുക.",
                "സൗജന്യ നിയമസഹായത്തിനായി ലീഗൽ സർവീസസ് അതോറിറ്റിയെ സമീപിക്കാം."
            ],
            helpline: "181 അല്ലെങ്കിൽ NALSA ഹെൽപ്പ്ലൈൻ",
            resources: [
                { name: "eCourts Services", url: "https://ecourts.gov.in" },
                { name: "Legal Aid Services", url: "https://nalsa.gov.in" }
            ]
        }
    },
    complaint_procedure: {
        keywords: ['file complaint', 'how to complain', 'report this', 'what should i do', 'procedure', 'next step', 'എങ്ങനെ പരാതി നൽകാം', 'പരാതി നൽകണം', 'എന്ത് ചെയ്യണം', 'നടപടിക്രമം', 'റിപ്പോർട്ട് ചെയ്യണം'],
        en: {
            supportive: "Here is how you can file a complaint:",
            right: null,
            actions: [
                "1. Stay safe and make sure you are not in immediate danger.",
                "2. Collect evidence such as messages, screenshots, photos, or documents.",
                "3. Write down details of the incident (date, time, location, what happened).",
                "4. Visit the nearest Police Station or Women Cell and file a complaint.",
                "5. Ask for a copy of the complaint (FIR or CSR number).",
                "6. If the issue is online, you can report it on [cybercrime.gov.in](https://cybercrime.gov.in).",
                "7. You may also contact the Women Helpline for support: 181",
                "8. Keep all records safely for future legal steps."
            ],
            helpline: null
        },
        ml: {
            supportive: "പരാതി നൽകുന്നതിനുള്ള നടപടികൾ:",
            right: null,
            actions: [
                "1. ആദ്യം നിങ്ങളുടെ സുരക്ഷ ഉറപ്പാക്കുക.",
                "2. സന്ദേശങ്ങൾ, സ്ക്രീൻഷോട്ടുകൾ, ഫോട്ടോകൾ തുടങ്ങിയ തെളിവുകൾ ശേഖരിക്കുക.",
                "3. സംഭവത്തിന്റെ തീയതി, സമയം, സ്ഥലം, വിശദാംശങ്ങൾ എന്നിവ കുറിച്ച് വെക്കുക.",
                "4. സമീപത്തെ പൊലീസ് സ്റ്റേഷനിലോ വനിത സെല്ലിലോ പരാതി നൽകുക.",
                "5. നൽകിയ പരാതിയുടെ പകർപ്പ് (FIR/CSR നമ്പർ) ആവശ്യപ്പെടുക.",
                "6. ഓൺലൈൻ പ്രശ്നമാണെങ്കിൽ [cybercrime.gov.in](https://cybercrime.gov.in) ൽ റിപ്പോർട്ട് ചെയ്യാം.",
                "7. സഹായത്തിനായി വനിത ഹെൽപ്ലൈൻ ബന്ധപ്പെടാം: 181",
                "8. ഭാവിയിൽ വേണ്ടിവരാൻ എല്ലാ രേഖകളും സുരക്ഷിതമായി സൂക്ഷിക്കുക."
            ],
            helpline: null
        }
    },
    file_case: {
        keywords: [
            'how to file a case', 'start a case', 'go to court', 'legal action',
            'file case', 'എങ്ങനെ കേസ്', 'കോടതി', 'നിയമ നടപടി', 'case procedure'
        ],
        en: {
            supportive: "Here is how you can file a legal case:",
            right: null,
            actions: [
                "1. Write down the full details of the incident (date, time, place, and what happened).",
                "2. Collect all supporting evidence such as messages, photos, documents, or medical reports.",
                "3. File a complaint at the nearest Police Station or relevant authority.",
                "4. Obtain a copy of the FIR/complaint for your records.",
                "5. Consult a lawyer or approach the District Legal Services Authority for free legal aid.",
                "6. Your case can then be filed before the appropriate court.",
                "7. You can track case status through: https://ecourts.gov.in"
            ],
            helpline: "181 (Women Helpline) or 112 (Emergency)",
            resources: [
                { name: "Legal Services Authority", url: "https://nalsa.gov.in" },
                { name: "eCourts Services", url: "https://ecourts.gov.in" }
            ]
        },
        ml: {
            supportive: "കേസ് നൽകുന്നതിനുള്ള നടപടികൾ:",
            right: null,
            actions: [
                "1. സംഭവത്തിന്റെ മുഴുവൻ വിവരങ്ങളും (തീയതി, സമയം, സ്ഥലം) രേഖപ്പെടുത്തുക.",
                "2. സന്ദേശങ്ങൾ, രേഖകൾ, ഫോട്ടോകൾ, മെഡിക്കൽ റിപ്പോർട്ടുകൾ തുടങ്ങിയ തെളിവുകൾ ശേഖരിക്കുക.",
                "3. സമീപത്തെ പൊലീസ് സ്റ്റേഷനിലോ ബന്ധപ്പെട്ട അധികാരികളിലോ പരാതി നൽകുക.",
                "4. FIR/പരാതിയുടെ പകർപ്പ് സ്വന്തമായി സൂക്ഷിക്കുക.",
                "5. സൗജന്യ നിയമ സഹായത്തിനായി ജില്ലാ ലീഗൽ സർവീസസ് അതോറിറ്റിയെ സമീപിക്കാം.",
                "6. തുടർന്ന് കേസ് ബന്ധപ്പെട്ട കോടതിയിൽ സമർപ്പിക്കാം.",
                "7. കേസ് നില പരിശോധിക്കാൻ: https://ecourts.gov.in"
            ],
            helpline: "181 (വനിത ഹെൽപ്ലൈൻ) അല്ലെങ്കിൽ 112",
            resources: [
                { name: "Legal Services Authority", url: "https://nalsa.gov.in" },
                { name: "eCourts Services", url: "https://ecourts.gov.in" }
            ]
        }
    },
    default: {
        // Default is handled via translations object based on existing structure
    }
};

// DOM Elements
const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const landingPage = document.getElementById('landing-page');
const appContainer = document.getElementById('app-container');
const langEnBtn = document.getElementById('lang-en-btn');
const langMlBtn = document.getElementById('lang-ml-btn');
const headerTitle = document.getElementById('header-title');
const headerSubtitle = document.getElementById('header-subtitle');
const rightsBtn = document.getElementById('rights-btn');
const historyBtn = document.getElementById('history-btn');
const historyTitleElements = document.getElementById('history-title');
const newChatBtn = document.getElementById('new-chat-btn');
const quickExitBtn = document.getElementById('quick-exit-btn');
const historyModal = document.getElementById('history-modal');
const closeHistoryBtn = document.getElementsByClassName("close-history-btn")[0];
const historyList = document.getElementById('history-list');

// State
let selectedLanguage = 'en'; // Default
let isProcessing = false;
let currentChatId = Date.now().toString(); // Unique ID for current session
let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
let awaitingEvidenceConfirmation = false;

// Helper: Add Message to Chat
function addMessage(text, type, details = null) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type === 'user' ? 'user-message' : 'bot-message');

    // Generate HTML using helper
    const contentHtml = getMessageHTML(text, type, details);

    messageDiv.innerHTML = contentHtml;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Save to LocalStorage
    saveChat(text, type, details);
}

// Helper: Save Chat
function saveChat(text, type, details) {
    if (!text && !details) return; // Don't save empty updates if any

    const messageData = {
        sender: type,
        text: text,
        details: details,
        timestamp: new Date().toISOString()
    };

    // Find if chat exists
    let existingChat = chatHistory.find(c => c.id === currentChatId);

    if (existingChat) {
        existingChat.messages.push(messageData);
        existingChat.lastUpdated = new Date().toISOString();
    } else {
        chatHistory.push({
            id: currentChatId,
            date: new Date().toISOString(),
            language: selectedLanguage,
            lastUpdated: new Date().toISOString(),
            messages: [messageData]
        });
    }

    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

// Helper: Show Welcome Message
function showWelcomeMessage() {
    chatWindow.innerHTML = ''; // Clear previous messages
    const greeting = selectedLanguage === 'en'
        ? "Hi. I can help you with legal information. Please tell me your concern."
        : "ഹായ്. നിങ്ങളുടെ പ്രശ്നവുമായി ബന്ധപ്പെട്ട നിയമ വിവരങ്ങൾ നൽകാൻ ഞാൻ ഇവിടെ ഉണ്ട്. ദയവായി വിശദീകരിക്കൂ.";

    addMessage(greeting, 'bot');
}

// Helper: Reset Chat
function resetChat() {
    chatWindow.innerHTML = '';
    currentChatId = Date.now().toString(); // New Session ID
    showWelcomeMessage();
}

// Helper: Load History List
function renderHistory() {
    historyList.innerHTML = '';
    const sortedHistory = chatHistory.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));

    if (sortedHistory.length === 0) {
        historyList.innerHTML = '<p style="text-align:center; padding: 20px;">No chat history found.</p>';
        return;
    }

    sortedHistory.forEach(chat => {
        const date = new Date(chat.lastUpdated).toLocaleString();
        const div = document.createElement('div');
        div.classList.add('history-item');
        div.innerHTML = `
            <div class="history-info" onclick="loadChat('${chat.id}')">
                <strong>${date}</strong><br>
                <small>${chat.language === 'en' ? 'English' : 'Malayalam'} - ${chat.messages.length} messages</small>
            </div>
            <button class="delete-chat-btn" onclick="deleteChat('${chat.id}')">Delete</button>
        `;
        historyList.appendChild(div);
    });
}

// Helper: Load a Specific Chat
window.loadChat = function (id) {
    const chat = chatHistory.find(c => c.id === id);
    if (!chat) return;

    currentChatId = chat.id;
    setLanguage(chat.language); // Restore language
    chatWindow.innerHTML = ''; // Clear current

    // Re-render messages
    // Note: We need to reconstruct the HTML from saved data
    // For simplicity in this requirement, we won't store full HTML strings but regenerate minimal needed or store/render simply.
    // Given the requirement "Store messages with timestamp", let's re-render using addMessage logic but without saving again.

    // We need a slight modification to addMessage to avoid double saving during load
    // Or we can just manually append innerHTML if we stored it? 
    // The requirement says "Store messages with timestamp...".
    // Let's iterate and call a display-only helper. 

    chat.messages.forEach(msg => {
        displayMessage(msg.text, msg.sender, msg.details);
    });

    historyModal.style.display = 'none';
}

// Helper: Display Message (Without Saving)
function displayMessage(text, type, details) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type === 'user' ? 'user-message' : 'bot-message');

    // ... Copying logic from addMessage for rendering ...
    // To avoid code duplication, we should refactor addMessage. 
    // For now, let's call addMessage with a 'skipSave' flag? No, addMessage signature is fixed by previous usage.
    // Let's refactor addMessage to call displayMessage and then save.

    // REFACTORING ON THE FLY:
    // Let's create a renderMessageHTML helper.
    let contentHtml = getMessageHTML(text, type, details);
    messageDiv.innerHTML = contentHtml;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Extracted HTML generation logic


function getMessageHTML(text, type, details) {
    let contentHtml = `<div class="message-content">`;
    if (type === 'user') {
        contentHtml += `<p>${text}</p>`;
    } else {
        if (details) {
            const content = details[selectedLanguage];
            const labels = translations[selectedLanguage];

            if (content.intro) contentHtml += `<p><strong>${content.intro}</strong></p>`; // Evidence Intro

            if (content.supportive) contentHtml += `<p><strong>${content.supportive}</strong></p>`;
            if (content.right) {
                contentHtml += `<span class="section-title" style="margin-top:10px;">${labels.right_label}</span>`;
                contentHtml += `<p>${content.right}</p>`;
            }
            if (content.actions && content.actions.length > 0) {
                contentHtml += `<span class="section-title" style="margin-top:10px;">${labels.steps_label}</span>`;
                contentHtml += `<ul>` + content.actions.map(a => `<li>${a}</li>`).join('') + `</ul>`;
            }

            // Evidence Checklist matching
            if (content.evidence && content.evidence.length > 0) {
                contentHtml += `<ul>` + content.evidence.map(e => `<li>${e}</li>`).join('') + `</ul>`;
            }
            if (content.closing) contentHtml += `<p><em>${content.closing}</em></p>`;

            if (content.helpline) {
                contentHtml += `<p style="margin-top:10px;"><strong>${labels.helpline_label}</strong> <span class="helpline-highlight">${content.helpline}</span></p>`;
            }

        } else {
            if (text) contentHtml += `<p>${text}</p>`;
        }
        contentHtml += `<p class="disclaimer-text">${translations[selectedLanguage].disclaimer}</p>`;
    }
    contentHtml += `</div>`;
    return contentHtml;
}

// Global scope delete
window.deleteChat = function (id) {
    if (!confirm("Are you sure you want to delete this chat?")) return;
    chatHistory = chatHistory.filter(c => c.id !== id);
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    renderHistory();
    if (currentChatId === id) resetChat(); // Reset if deleted current
};

// Logic: Language Selection
function setLanguage(lang) {
    selectedLanguage = lang;

    // Update UI Elements
    const t = translations[lang];
    if (headerTitle) headerTitle.innerText = t.appTitle;
    if (headerSubtitle) headerSubtitle.innerText = t.caption;
    if (rightsBtn) rightsBtn.innerText = t.rightsBtn;
    if (historyBtn) historyBtn.innerText = t.historyBtn;
    if (historyTitleElements) historyTitleElements.innerText = t.historyTitle;
    if (newChatBtn) newChatBtn.innerText = t.newChatBtn;
    if (quickExitBtn) quickExitBtn.innerText = t.quickExitBtn;
    userInput.placeholder = t.placeholder;

    landingPage.style.opacity = '0';
    landingPage.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        landingPage.style.display = 'none';
        appContainer.style.display = 'flex';
        showWelcomeMessage();
        userInput.focus();
    }, 500);
}

if (langEnBtn) langEnBtn.onclick = () => setLanguage('en');
if (langMlBtn) langMlBtn.onclick = () => setLanguage('ml');

// Helper: Find Best Match
function findMatch(input) {
    const lowerInput = input.toLowerCase();

    // Check specific topics
    for (const [topic, data] of Object.entries(legalKnowledgeBase)) {
        if (topic === 'default') continue;
        if (data.keywords.some(keyword => lowerInput.includes(keyword))) {
            return data;
        }
    }

    // Default Fallback Object structure matching 'details' param
    const t = translations;
    return {
        en: {
            supportive: t.en.default_support,
            right: t.en.default_right,
            actions: [],
            helpline: null
        },
        ml: {
            supportive: t.ml.default_support,
            right: t.ml.default_right,
            actions: [],
            helpline: null
        }
    };
}

// Handler: User Input
function handleUserInput() {
    const text = userInput.value.trim();
    if (!text || isProcessing) return;

    // 1. Add User Message
    addMessage(text, 'user');
    userInput.value = '';
    isProcessing = true;

    // 2. Handle Evidence Confirmation
    if (awaitingEvidenceConfirmation) {
        const lowerText = text.toLowerCase();
        awaitingEvidenceConfirmation = false; // Reset state
        isProcessing = false; // Reset processing early to allow next input

        if (lowerText === 'yes' || lowerText === 'y') {
            addMessage(null, 'bot', evidenceResponse);
            return;
        } else if (lowerText === 'no' || lowerText === 'n') {
            const politeMsg = selectedLanguage === 'en' ? "Okay. Let me know if you have other questions." : "ശരി. നിങ്ങൾക്ക് മറ്റെന്തെങ്കിലും ചോദിക്കാനുണ്ടെങ്കിൽ പറയാം.";
            addMessage(politeMsg, 'bot');
            return;
        }
        // If neither, fall through to normal matching (implicit no/new query)
    }

    // 3. Simulate Thinking
    setTimeout(() => {
        const responseData = findMatch(text);
        addMessage(null, 'bot', responseData);

        // Trigger Evidence Prompt if it was a legal topic (has actions)
        if (responseData[selectedLanguage].actions && responseData[selectedLanguage].actions.length > 0) {
            setTimeout(() => {
                const prompt = translations.evidence_prompt[selectedLanguage];
                addMessage(prompt, 'bot'); // Send prompt
                awaitingEvidenceConfirmation = true;
            }, 1500);
        }

        isProcessing = false;
    }, 600);
}

// Event Listeners
if (newChatBtn) newChatBtn.onclick = resetChat;

if (quickExitBtn) {
    quickExitBtn.onclick = function () {
        window.location.href = "https://www.google.com";
    };
}

sendBtn.addEventListener('click', handleUserInput);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

// --- Legal Resources Guide Logic ---

// --- Legal Resources Guide Logic ---

const legalGuideData = [
    {
        en: {
            title: "Dowry Harassment",
            desc: "Demanding money, property, or goods from you or your family is a crime.",
            right: "Dowry Prohibition Act, 1961 bans giving or taking dowry. IPC Section 498A covers cruelty.",
            steps: [
                "Do not agree to the demands.",
                "File a complaint at the nearest police station.",
                "Contact the Dowry Prohibition Officer in your district.",
                "Gather evidence (recordings, messages) if possible, but prioritize safety."
            ],
            helpline: "181 (Women Helpline)"
        },
        ml: {
            title: "സ്ത്രീധന പീഡനം",
            desc: "നിങ്ങളിൽ നിന്നോ കുടുംബത്തിൽ നിന്നോ പണമോ സ്വത്തോ ആവശ്യപ്പെടുന്നത് കുറ്റകരമാണ്.",
            right: "സ്ത്രീധന നിരോധന നിയമം, 1961 പ്രകാരം സ്ത്രീധനം നൽകുന്നതും വാങ്ങുന്നതും കുറ്റകരമാണ്.",
            steps: [
                "ആവശ്യങ്ങൾ അംഗീകരിക്കരുത്.",
                "അടുത്തുള്ള പോലീസ് സ്റ്റേഷനിൽ പരാതി നൽകുക.",
                "ജില്ലാ ഡൗറി പ്രൊഹിബിഷൻ ഓഫീസറുമായി ബന്ധപ്പെടുക.",
                "തെളിവുകൾ ശേഖരിക്കുക."
            ],
            helpline: "181 (വനിതാ ഹെൽപ്പ്ലൈൻ)"
        }
    },
    {
        en: {
            title: "Domestic Violence",
            desc: "Any physical, verbal, emotional, sexual, or economic abuse by a partner or family member.",
            right: "Protection of Women from Domestic Violence Act (PWDVA), 2005 ensures protection and residence.",
            steps: [
                "Call 112 immediately if you are hurt or unsafe.",
                "Go to a safe place (neighbors, parents, shelter).",
                "File a Domestic Incident Report (DIR) with a Protection Officer.",
                "Visit a government hospital for medical checkup and report."
            ],
            helpline: "1091 or 181"
        },
        ml: {
            title: "ഗാർഹിക പീഡനം",
            desc: "പങ്കാളിയിൽ നിന്നോ കുടുംബത്തിൽ നിന്നോ ഉള്ള ശാരീരിക, മാനസിക, ലൈംഗിക അല്ലെങ്കിൽ സാമ്പത്തിക പീഡനം.",
            right: "ഗാർഹിക പീഡനത്തിൽ നിന്നുള്ള സ്ത്രീകളുടെ സംരക്ഷണ നിയമം (PWDVA), 2005 സുരക്ഷ ഉറപ്പാക്കുന്നു.",
            steps: [
                "അപകടത്തിലാണെങ്കിൽ 112 ലേക്ക് വിളിക്കുക.",
                "സുരക്ഷിതമായ സ്ഥലത്തേക്ക് മാറുക.",
                "പ്രൊട്ടക്ഷൻ ഓഫീസറിൽ പരാതി നൽകുക.",
                "വൈദ്യസഹായം തേടുക."
            ],
            helpline: "1091 അല്ലെങ്കിൽ 181"
        }
    },
    {
        en: {
            title: "Workplace Harassment",
            desc: "Unwelcome acts like physical contact, demand for sexual favors, or sexually colored remarks.",
            right: "Section 354A IPC and The POSH Act, 2013 protect women at work.",
            steps: [
                "Write a formal complaint to the Internal Committee (IC) of your company.",
                "If no IC exists, complain to the Local Committee (LC).",
                "Use the SHe-Box online portal."
            ],
            helpline: "181"
        },
        ml: {
            title: "ജോലിസ്ഥലത്തെ പീഡനം",
            desc: "ശാരീരിക സ്പർശനം, ലൈംഗിക ചുവയുള്ള സംസാരം തുടങ്ങിയവ.",
            right: "POSH Act, 2013 ജോലിസ്ഥലത്ത് സ്ത്രീകൾക്ക് സംരക്ഷണം നൽകുന്നു.",
            steps: [
                "ഇന്റേണൽ കമ്മിറ്റിക്ക് (IC) പരാതി നൽകുക.",
                "കമ്മിറ്റി ഇല്ലെങ്കിൽ ലോക്കൽ കമ്മിറ്റിയിൽ (LC) പരാതി നൽകുക.",
                "SHe-Box പോർട്ടൽ ഉപയോഗിക്കുക."
            ],
            helpline: "181"
        }
    },
    {
        en: {
            title: "Cybercrime / Online Abuse",
            desc: "Stalking, bullying, sharing private photos, or blackmailing online.",
            right: "Information Technology Act, 2000 and IPC Section 354D.",
            steps: [
                "Do not delete messages; take screenshots.",
                "Report and block the user.",
                "Register a complaint at cybercrime.gov.in."
            ],
            helpline: "1930 (Cyber Crime Helpline)"
        },
        ml: {
            title: "സൈബർ കുറ്റകൃത്യങ്ങൾ",
            desc: "ഓൺലൈൻ ഭീഷണി, സ്വകാര്യ ചിത്രങ്ങൾ പ്രചരിപ്പിക്കൽ, ബ്ലാക്ക്മെയിലിംഗ്.",
            right: "ഐടി ആക്ട്, 2000, IPC 354D എന്നിവ സംരക്ഷണം നൽകുന്നു.",
            steps: [
                "തെളിവുകൾ (സ്ക്രീൻഷോട്ടുകൾ) സൂക്ഷിക്കുക.",
                "റിപ്പോർട്ട് ചെയ്യുക, ബ്ലോക്ക് ചെയ്യുക.",
                "cybercrime.gov.in ൽ പരാതി നൽകുക."
            ],
            helpline: "1930"
        }
    },
    {
        en: {
            title: "Marriage Rights",
            desc: "You have equal rights to dignity, respect, and property in a marriage.",
            right: "Right to Matrimonial Home, Right against Bigamy, Right to Stridhan.",
            steps: [
                "Ensure your marriage is registered.",
                "Keep your Stridhan (gold, gifts) in your control.",
                "Keep copies of ID proofs."
            ],
            helpline: "181"
        },
        ml: {
            title: "വിവാഹ അവകാശങ്ങൾ",
            desc: "വിവാഹത്തിൽ നിങ്ങൾക്ക് അന്തസ്സിനും സ്വത്തിനും തുല്യ അവകാശമുണ്ട്.",
            right: "ഭർത്താവിന്റെ വീട്ടിൽ താമസിക്കാനുള്ള അവകാശം, സ്ത്രീധനത്തിലുള്ള അവകാശം.",
            steps: [
                "വിവാഹം രജിസ്റ്റർ ചെയ്യുക.",
                "സ്വർണ്ണവും സമ്മാനങ്ങളും സ്വന്തം കൈവശം വെക്കുക.",
                "രേഖകൾ സൂക്ഷിക്കുക."
            ],
            helpline: "181"
        }
    },
    {
        en: {
            title: "Divorce & Maintenance",
            desc: "You have the right to leave an abusive marriage and claim financial support.",
            right: "Right to Maintenance (Section 125 CrPC) for wife and children.",
            steps: [
                "Consult a lawyer.",
                "File a petition for maintenance.",
                "Approach DLSA for free legal aid."
            ],
            helpline: "NALSA Helpline: 15100"
        },
        ml: {
            title: "വിവാഹമോചനം & ജീവനാംശം",
            desc: "മോശമായ വിവാഹബന്ധം വേർപെടുത്താനും സാമ്പത്തിക സഹായത്തിനും നിങ്ങൾക്ക് അവകാശമുണ്ട്.",
            right: "ജീവനാംശത്തിനുള്ള അവകാശം (Section 125 CrPC).",
            steps: [
                "അഭിഭാഷകനുമായി സംസാരിക്കുക.",
                "ജീവനാംശത്തിനായി ഹർജി നൽകുക.",
                "സൗജന്യ നിയമസഹായം തേടാം (DLSA)."
            ],
            helpline: "NALSA: 15100"
        }
    }
];

// Modal Elements
const modal = document.getElementById("legal-modal");
// rightsBtn already defined at top
const closeBtn = document.getElementsByClassName("close-btn")[0];
const guideBody = document.getElementById("legal-guide-body");

// Render Guide Content
function renderGuide() {
    guideBody.innerHTML = ""; // Clear existing

    legalGuideData.forEach((item, index) => {
        const content = item[selectedLanguage]; // Select language

        const div = document.createElement('div');
        div.classList.add('accordion-item');
        div.innerHTML = `
            <div class="accordion-header" onclick="toggleAccordion(${index})">
                ${content.title}
                <span id="icon-${index}">+</span>
            </div>
            <div class="accordion-content" id="acc-content-${index}">
                <p style="margin-bottom:8px;"><em>${content.desc}</em></p>
                <h4>${translations[selectedLanguage].right_label}</h4>
                <p>${content.right}</p>
                <h4>${translations[selectedLanguage].steps_label}</h4>
                <ul>
                    ${content.steps.map(step => `<li>${step}</li>`).join('')}
                </ul>
                <p class="helpline-highlight">${translations[selectedLanguage].helpline_label} ${content.helpline}</p>
            </div>
        `;
        guideBody.appendChild(div);
    });
}

// Global scope function for HTML onclick
window.toggleAccordion = function (index) {
    const content = document.getElementById(`acc-content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    const isVisible = content.style.display === "block";

    document.querySelectorAll('.accordion-content').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.accordion-header span').forEach(el => el.innerText = '+');

    if (!isVisible) {
        content.style.display = "block";
        icon.innerText = '-';
    }
};

// Modal Events
if (rightsBtn) {
    rightsBtn.onclick = function () {
        renderGuide();
        modal.style.display = "flex";
    }
}

if (closeBtn) {
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == historyModal) {
        historyModal.style.display = "none";
    }
}

if (historyBtn) {
    historyBtn.onclick = function () {
        renderHistory();
        historyModal.style.display = 'flex';
    }
}

if (closeHistoryBtn) {
    closeHistoryBtn.onclick = function () {
        historyModal.style.display = 'none';
    }
}

// Focus input on load
window.onload = () => {
    userInput.focus();
};
