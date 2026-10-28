// Unified Emotion Wheel Data Schema (108 Junto-style emotions)
// Each emotion has: { en, bn, simple: { en, bn }, meaning: { en, bn }, example: { en, bn }, whatNow? }

export const CORES = [
  {
    "name": "Fear",
    "hue": 28,
    "secs": [
      [
        "Scared",
        [
          "Frightened",
          "Helpless"
        ]
      ],
      [
        "Terrified",
        [
          "Panicked",
          "Hysterical"
        ]
      ],
      [
        "Insecure",
        [
          "Inferior",
          "Inadequate"
        ]
      ],
      [
        "Nervous",
        [
          "Worried",
          "Anxious"
        ]
      ],
      [
        "Horrified",
        [
          "Mortified",
          "Dreadful"
        ]
      ]
    ]
  },
  {
    "name": "Anger",
    "hue": 4,
    "secs": [
      [
        "Enraged",
        [
          "Hateful",
          "Hostile"
        ]
      ],
      [
        "Exasperated",
        [
          "Agitated",
          "Frustrated"
        ]
      ],
      [
        "Irritable",
        [
          "Annoyed",
          "Aggravated"
        ]
      ],
      [
        "Jealous",
        [
          "Resentful",
          "Envious"
        ]
      ],
      [
        "Disgusted",
        [
          "Contemptuous",
          "Revolted"
        ]
      ]
    ]
  },
  {
    "name": "Sadness",
    "hue": 218,
    "secs": [
      [
        "Hurt",
        [
          "Agonized",
          "Disturbed"
        ]
      ],
      [
        "Unhappy",
        [
          "Miserable",
          "Disheartened"
        ]
      ],
      [
        "Disappointed",
        [
          "Dismayed",
          "Displeased"
        ]
      ],
      [
        "Shameful",
        [
          "Regretful",
          "Guilty"
        ]
      ],
      [
        "Lonely",
        [
          "Isolated",
          "Neglected"
        ]
      ],
      [
        "Gloomy",
        [
          "Hopeless",
          "Depressed"
        ]
      ]
    ]
  },
  {
    "name": "Surprise",
    "hue": 186,
    "secs": [
      [
        "Stunned",
        [
          "Shocked",
          "Bewildered"
        ]
      ],
      [
        "Confused",
        [
          "Disillusioned",
          "Perplexed"
        ]
      ],
      [
        "Amazed",
        [
          "Astonished",
          "Awe-struck"
        ]
      ],
      [
        "Overcome",
        [
          "Speechless",
          "Astounded"
        ]
      ],
      [
        "Moved",
        [
          "Stimulated",
          "Touched"
        ]
      ]
    ]
  },
  {
    "name": "Joy",
    "hue": 128,
    "bright": false,
    "secs": [
      [
        "Peaceful",
        [
          "Tranquil",
          "Serene"
        ]
      ],
      [
        "Content",
        [
          "Satisfied",
          "Pleased"
        ]
      ],
      [
        "Happy",
        [
          "Jovial",
          "Delighted"
        ]
      ],
      [
        "Cheerful",
        [
          "Amused",
          "Playful"
        ]
      ],
      [
        "Proud",
        [
          "Triumphant",
          "Illustrious"
        ]
      ],
      [
        "Optimistic",
        [
          "Eager",
          "Hopeful"
        ]
      ],
      [
        "Excited",
        [
          "Enthusiastic",
          "Zealous"
        ]
      ],
      [
        "Euphoric",
        [
          "Elated",
          "Jubilant"
        ]
      ]
    ]
  },
  {
    "name": "Love",
    "hue": 50,
    "bright": true,
    "secs": [
      [
        "Enchanted",
        [
          "Enthralled",
          "Rapturous"
        ]
      ],
      [
        "Romantic",
        [
          "Passionate",
          "Enamored"
        ]
      ],
      [
        "Affectionate",
        [
          "Warmhearted",
          "Compassionate"
        ]
      ],
      [
        "Sentimental",
        [
          "Tender",
          "Nostalgic"
        ]
      ],
      [
        "Grateful",
        [
          "Appreciative",
          "Thankful"
        ]
      ]
    ]
  }
];

export const EMOTIONS = {
  "Fear": {
    "en": "Fear",
    "bn": "ভয়",
    "simple": {
      "en": "Scared",
      "bn": "ভয়"
    },
    "meaning": {
      "en": "The feeling that something bad might happen and you want to stay safe.",
      "bn": "খারাপ কিছু ঘটতে পারে, এমন ভয় যা মানুষকে নিরাপদ থাকতে সতর্ক করে।"
    },
    "example": {
      "en": "The idea of losing her partner filled her with fear.",
      "bn": "জীবনসঙ্গীকে হারানোর কথা ভাবতেই তার মনে ভয় ভর করল।"
    },
    "whatNow": [
      "Notice where you feel it in your body. Naming it — 'I feel scared' — is already a step forward.",
      "Try 4-7-8 breathing: breathe in for 4, hold for 7, breathe out for 8. Repeat three times."
    ]
  },
  "Scared": {
    "en": "Scared",
    "bn": "ভয় পাওয়া",
    "simple": {
      "en": "Scared",
      "bn": "ভয় পেয়েছি"
    },
    "meaning": {
      "en": "Frightened by something right now.",
      "bn": "কোনো কিছু নিয়ে ভয় পাওয়া; মনে হওয়া যে পরিস্থিতি খারাপ হতে পারে।"
    },
    "example": {
      "en": "I felt scared that I was making the wrong decision about my future.",
      "bn": "নিজের ভবিষ্যৎ নিয়ে ভুল সিদ্ধান্ত নিচ্ছে কি না, এই ভেবে আমার ভয় লাগছিল।"
    },
    "whatNow": [
      "Name it: 'I notice I'm feeling scared.' That simple step calms the alarm.",
      "Find something solid — a wall, a chair, the floor. Press into it and breathe slowly."
    ]
  },
  "Frightened": {
    "en": "Frightened",
    "bn": "ভীত",
    "simple": {
      "en": "Afraid",
      "bn": "ভয় লাগছে"
    },
    "meaning": {
      "en": "Suddenly afraid of something.",
      "bn": "কোনো কিছু হঠাৎ ভয় ধরিয়ে দিলে যে অনুভূতি হয়।"
    },
    "example": {
      "en": "She felt frightened by how quickly her feelings had changed.",
      "bn": "নিজের অনুভূতি এত দ্রুত বদলে যাচ্ছে দেখে সে ভয় পেয়ে গেল।"
    }
  },
  "Helpless": {
    "en": "Helpless",
    "bn": "অসহায়",
    "simple": {
      "en": "Stuck",
      "bn": "আটকে গেছি"
    },
    "meaning": {
      "en": "Feeling you can't do anything to change a bad situation.",
      "bn": "পরিস্থিতি খারাপ হচ্ছে বুঝেও কিছু করতে না পারার অসহায়ত্ব।"
    },
    "example": {
      "en": "He felt helpless watching his parents grow apart.",
      "bn": "নিজের বাবা মায়ের সম্পর্ক ভেঙে যেতে দেখে সে অসহায় বোধ করছিল।"
    }
  },
  "Terrified": {
    "en": "Terrified",
    "bn": "আতঙ্কিত",
    "simple": {
      "en": "Spooked",
      "bn": "ভয়ে চমকে ওঠা"
    },
    "meaning": {
      "en": "Extremely scared.",
      "bn": "কোনো কিছু নিয়ে প্রচণ্ড ভয় পাওয়া।"
    },
    "example": {
      "en": "She was terrified of being truly vulnerable with someone.",
      "bn": "কারও কাছে নিজের দুর্বল দিকগুলো প্রকাশ করতে হবে, এই ভাবনাতেই সে ভীষণ ভয় পাচ্ছিল।"
    }
  },
  "Panicked": {
    "en": "Panicked",
    "bn": "আতঙ্কে দিশেহারা",
    "simple": {
      "en": "Panicky",
      "bn": "ঘাবড়ে যাওয়া"
    },
    "meaning": {
      "en": "So scared you can't think clearly.",
      "bn": "এতটাই ভয় পাওয়া যে ঠিকভাবে চিন্তা করা বা সিদ্ধান্ত নেওয়া কঠিন হয়ে পড়ে।"
    },
    "example": {
      "en": "He panicked at the thought of everyone finding out.",
      "bn": "সবাই সবকিছু জেনে যাবে, এই চিন্তা মাথায় আসতেই সে আতঙ্কিত হয়ে পড়ল।"
    }
  },
  "Hysterical": {
    "en": "Hysterical",
    "bn": "নিয়ন্ত্রণহীন আতঙ্কিত",
    "simple": {
      "en": "Frantic",
      "bn": "দিশেহারা"
    },
    "meaning": {
      "en": "Out of control with fear or emotion.",
      "bn": "ভয় বা আবেগ এতটাই বেড়ে যাওয়া যে নিজেকে সামলানো কঠিন হয়ে পড়ে।"
    },
    "example": {
      "en": "She felt hysterical, unable to stop the spiral of worry in her mind.",
      "bn": "দুশ্চিন্তার চিন্তাগুলো মাথায় ঘুরপাক খেতে থাকায় সে নিজেকে সামলাতে পারছিল না।"
    }
  },
  "Insecure": {
    "en": "Insecure",
    "bn": "নিরাপত্তাহীন",
    "simple": {
      "en": "Unsure",
      "bn": "অনিশ্চিত"
    },
    "meaning": {
      "en": "Unsure of yourself and worried you're not good enough.",
      "bn": "নিজেকে যথেষ্ট ভালো বা যোগ্য মনে না হওয়া; নিজের অবস্থান নিয়ে অনিশ্চয়তা।"
    },
    "example": {
      "en": "Starting the new role, she felt insecure about whether she truly belonged.",
      "bn": "নতুন দায়িত্ব নেওয়ার পর তার মনে হচ্ছিল, সে সত্যিই এই জায়গার যোগ্য কি না।"
    }
  },
  "Inferior": {
    "en": "Inferior",
    "bn": "হীনম্মন্য",
    "simple": {
      "en": "Small",
      "bn": "নিজেকে ছোট মনে হওয়া"
    },
    "meaning": {
      "en": "Feeling less important or worse than other people.",
      "bn": "অন্যদের তুলনায় নিজেকে কম গুরুত্বপূর্ণ বা কম যোগ্য মনে করা।"
    },
    "example": {
      "en": "He often felt inferior when comparing himself to his siblings.",
      "bn": "ভাইবোনদের সঙ্গে নিজেকে তুলনা করলে তার প্রায়ই নিজেকে ছোট মনে হতো।"
    }
  },
  "Inadequate": {
    "en": "Inadequate",
    "bn": "অযোগ্য বোধ করা",
    "simple": {
      "en": "Not Enough",
      "bn": "যথেষ্ট নই মনে হওয়া"
    },
    "meaning": {
      "en": "Feeling you're not enough or can't measure up.",
      "bn": "যত চেষ্টা করেও নিজেকে যথেষ্ট ভালো বা সক্ষম মনে না হওয়া।"
    },
    "example": {
      "en": "No matter how hard she tried, she felt inadequate as a parent.",
      "bn": "অনেক চেষ্টা করেও তার মনে হতো, একজন অভিভাবক হিসেবে সে যথেষ্ট ভালো করতে পারছে না।"
    }
  },
  "Nervous": {
    "en": "Nervous",
    "bn": "স্নায়ুচাপে থাকা",
    "simple": {
      "en": "Nervous",
      "bn": "নার্ভাস"
    },
    "meaning": {
      "en": "Slightly afraid or anxious about something ahead.",
      "bn": "সামনে কিছু ঘটবে ভেবে হালকা ভয়, অস্বস্তি বা দুশ্চিন্তা হওয়া।"
    },
    "example": {
      "en": "He felt nervous about opening up to someone new.",
      "bn": "নতুন কারও কাছে নিজের মনের কথা খুলে বলতে গিয়ে তার নার্ভাস লাগছিল।"
    },
    "whatNow": [
      "Write down what you're worried about. Getting it out of your head makes it smaller.",
      "Try box breathing: in for 4, hold 4, out for 4, hold 4. Repeat until the wave passes."
    ]
  },
  "Worried": {
    "en": "Worried",
    "bn": "দুশ্চিন্তাগ্রস্ত",
    "simple": {
      "en": "Worried",
      "bn": "চিন্তিত"
    },
    "meaning": {
      "en": "Thinking about a problem and feeling uneasy.",
      "bn": "কোনো সমস্যা নিয়ে বারবার চিন্তা করা এবং মনে অস্বস্তি অনুভব করা।"
    },
    "example": {
      "en": "She was worried she had hurt her friend without realising.",
      "bn": "বুঝতে না পেরে বন্ধুকে কষ্ট দিয়ে ফেলেছে কি না, তা ভেবে সে চিন্তিত ছিল।"
    }
  },
  "Anxious": {
    "en": "Anxious",
    "bn": "উদ্বিগ্ন",
    "simple": {
      "en": "Jumpy",
      "bn": "অস্থির ও চমকে ওঠা"
    },
    "meaning": {
      "en": "Tense and uneasy about what might happen.",
      "bn": "ভবিষ্যতে কী ঘটবে তা নিয়ে ভেতরে ভেতরে টেনশন ও অস্থিরতা অনুভব করা।"
    },
    "example": {
      "en": "He felt anxious all week about whether people actually liked him.",
      "bn": "মানুষ সত্যিই তাকে পছন্দ করে কি না, তা নিয়ে সে পুরো সপ্তাহ উদ্বিগ্ন ছিল।"
    },
    "whatNow": [
      "Write down what's worrying you. Getting thoughts out of your head makes them more manageable.",
      "Ground yourself: name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste."
    ]
  },
  "Horrified": {
    "en": "Horrified",
    "bn": "আতঙ্কে স্তম্ভিত",
    "simple": {
      "en": "Shocked",
      "bn": "হতবাক"
    },
    "meaning": {
      "en": "Shocked and filled with fear or disgust.",
      "bn": "কোনো ভয়ংকর বা ঘৃণ্য বিষয় দেখে আতঙ্কিত ও স্তম্ভিত হয়ে যাওয়া।"
    },
    "example": {
      "en": "She was horrified at the unkindness she saw in herself.",
      "bn": "নিজের ভেতরে থাকা নিষ্ঠুরতা বুঝতে পেরে সে আতঙ্কিত ও বিচলিত হয়ে পড়ল।"
    },
    "whatNow": [
      "Remind yourself: you are safe right now. Take a slow breath.",
      "Step away if you can. You don't have to process this immediately."
    ]
  },
  "Mortified": {
    "en": "Mortified",
    "bn": "লজ্জায় মাটিতে মিশে যাওয়া",
    "simple": {
      "en": "Embarrassed",
      "bn": "বিব্রত"
    },
    "meaning": {
      "en": "So embarrassed you wish you could disappear.",
      "bn": "এমনভাবে লজ্জিত হওয়া যে মনে হয়, লজ্জায় মাটির সঙ্গে মিশে যাই।"
    },
    "example": {
      "en": "He was mortified after realising everyone had heard his private thoughts.",
      "bn": "সবাই তার ব্যক্তিগত চিন্তার কথা শুনে ফেলেছে বুঝতে পেরে সে চরম লজ্জায় পড়ে গেল।"
    }
  },
  "Dreadful": {
    "en": "Dreadful",
    "bn": "ভয়ংকর",
    "simple": {
      "en": "Awful",
      "bn": "বিশ্রী রকম খারাপ"
    },
    "meaning": {
      "en": "Filled with dread; expecting something awful.",
      "bn": "সামনে ভয়ংকর বা খারাপ কিছু ঘটবে, এমন গভীর অশুভ আশঙ্কা।"
    },
    "example": {
      "en": "A dreadful feeling settled in her chest about the conversation ahead.",
      "bn": "সামনের কথোপকথনটি নিয়ে তার বুকের ভেতর একটা অজানা অশুভ আশঙ্কা জমে উঠল।"
    }
  },
  "Anger": {
    "en": "Anger",
    "bn": "রাগ",
    "simple": {
      "en": "Angry",
      "bn": "রাগ"
    },
    "meaning": {
      "en": "The feeling you get when something seems unfair or wrong.",
      "bn": "কোনো অন্যায় বা কষ্টদায়ক ঘটনায় রাগ হওয়া।"
    },
    "example": {
      "en": "He felt a flash of anger when his trust was broken.",
      "bn": "বিশ্বাস ভেঙে যাওয়ায় তার মনে হঠাৎ তীব্র রাগ জেগে উঠল।"
    },
    "whatNow": [
      "Pause and ask: what need isn't being met right now? Naming it often softens the anger.",
      "Press your feet into the floor. Take five slow breaths before deciding what to do."
    ]
  },
  "Enraged": {
    "en": "Enraged",
    "bn": "প্রচণ্ড ক্রুদ্ধ",
    "simple": {
      "en": "Furious",
      "bn": "ভীষণ রেগে যাওয়া"
    },
    "meaning": {
      "en": "Extremely angry.",
      "bn": "প্রচণ্ড রেগে যাওয়া; রাগ নিয়ন্ত্রণ করা কঠিন হয়ে পড়া।"
    },
    "example": {
      "en": "She was enraged that her boundaries had been ignored again.",
      "bn": "বারবার তার ব্যক্তিগত সীমারেখা অমান্য করায় সে প্রচণ্ড রেগে গেল।"
    },
    "whatNow": [
      "Remove yourself from the situation if possible. Breathe first, act second.",
      "Cool down physically: splash cold water on your face or hold something cold."
    ]
  },
  "Hateful": {
    "en": "Hateful",
    "bn": "ঘৃণাপূর্ণ",
    "simple": {
      "en": "Hateful",
      "bn": "ঘৃণায় ভরা"
    },
    "meaning": {
      "en": "Full of strong dislike toward someone or something.",
      "bn": "কারও প্রতি বা নিজের কোনো দিকের প্রতি তীব্র ঘৃণা অনুভব করা।"
    },
    "example": {
      "en": "He felt hateful toward the part of himself he couldn't accept.",
      "bn": "নিজের যে দিকটি সে মেনে নিতে পারত না, সেই দিকটির প্রতিই তার ঘৃণা জন্মেছিল।"
    }
  },
  "Hostile": {
    "en": "Hostile",
    "bn": "শত্রুভাবাপন্ন",
    "simple": {
      "en": "Mean",
      "bn": "রূঢ় / নির্দয়"
    },
    "meaning": {
      "en": "Unfriendly and ready to fight.",
      "bn": "কারও প্রতি এমন বিরূপ মনোভাব তৈরি হওয়া, যাতে তার সঙ্গে শত্রুর মতো আচরণ করতে ইচ্ছা করে।"
    },
    "example": {
      "en": "She noticed herself becoming hostile whenever anyone got too close.",
      "bn": "কেউ তার খুব কাছে আসতে চাইলেই সে নিজের মধ্যে বিরূপ ও শত্রুভাবাপন্ন মনোভাব তৈরি হতে দেখত।"
    }
  },
  "Exasperated": {
    "en": "Exasperated",
    "bn": "ধৈর্যের শেষ সীমায়",
    "simple": {
      "en": "Fed Up",
      "bn": "অতিষ্ঠ"
    },
    "meaning": {
      "en": "Annoyed and out of patience.",
      "bn": "একই বিরক্তিকর ঘটনা বারবার ঘটতে থাকায় ধৈর্য একেবারে শেষ হয়ে যাওয়া।"
    },
    "example": {
      "en": "She felt exasperated by the same argument happening over and over.",
      "bn": "একই তর্ক বারবার চলতে থাকায় সে আর ধৈর্য ধরে রাখতে পারছিল না।"
    }
  },
  "Agitated": {
    "en": "Agitated",
    "bn": "উত্তেজিত ও অস্থির",
    "simple": {
      "en": "Restless",
      "bn": "ছটফটে"
    },
    "meaning": {
      "en": "Restless and worked up.",
      "bn": "রাগ, উদ্বেগ বা অস্বস্তিতে ভেতরে ভেতরে অস্থির হয়ে ওঠা।"
    },
    "example": {
      "en": "He felt agitated, unable to settle the churning feeling inside.",
      "bn": "মনের ভেতরের অস্থির অনুভূতিটা তাকে কিছুতেই শান্ত থাকতে দিচ্ছিল না।"
    }
  },
  "Frustrated": {
    "en": "Frustrated",
    "bn": "বাধা পেয়ে হতাশ ও বিরক্ত",
    "simple": {
      "en": "Frustrated",
      "bn": "হতাশ ও বিরক্ত"
    },
    "meaning": {
      "en": "Upset because you're stuck or blocked.",
      "bn": "চেষ্টা করেও এগোতে না পারা বা একই সমস্যায় আটকে থাকায় হতাশ ও বিরক্ত হওয়া।"
    },
    "example": {
      "en": "She felt frustrated that she kept repeating the same patterns.",
      "bn": "বারবার একই ভুল বা আচরণের পুনরাবৃত্তি হওয়ায় সে হতাশ ও বিরক্ত হয়ে পড়েছিল।"
    },
    "whatNow": [
      "Step back from the task for a few minutes. Fresh eyes often find a way through.",
      "Name what's blocking you, then pick the smallest possible next step."
    ]
  },
  "Irritable": {
    "en": "Irritable",
    "bn": "খিটখিটে",
    "simple": {
      "en": "Grumpy",
      "bn": "মেজাজ খারাপ"
    },
    "meaning": {
      "en": "Easily annoyed or grumpy.",
      "bn": "অল্পতেই বিরক্ত বা রেগে যাওয়া; মেজাজ খিটখিটে থাকা।"
    },
    "example": {
      "en": "He felt irritable and short-tempered with everyone he cared about.",
      "bn": "যাদের সে সবচেয়ে বেশি ভালোবাসত, তাদের সঙ্গেও সে খিটখিটে আচরণ করছিল।"
    }
  },
  "Annoyed": {
    "en": "Annoyed",
    "bn": "অসন্তুষ্ট",
    "simple": {
      "en": "Annoyed",
      "bn": "বিরক্ত"
    },
    "meaning": {
      "en": "Mildly angry or bothered.",
      "bn": "কোনো কিছুতে বিরক্ত হওয়া, তবে রাগের তীব্রতা তুলনামূলক কম।"
    },
    "example": {
      "en": "She was annoyed that nobody seemed to notice how she felt.",
      "bn": "কেউ তার অনুভূতিকে গুরুত্ব দিচ্ছে না, এমন মনে হওয়ায় সে বিরক্ত হয়েছিল।"
    }
  },
  "Aggravated": {
    "en": "Aggravated",
    "bn": "আরও ক্ষুব্ধ",
    "simple": {
      "en": "Bugged",
      "bn": "জ্বালাতন হওয়া"
    },
    "meaning": {
      "en": "Made more annoyed or irritated.",
      "bn": "আগে থেকেই থাকা বিরক্তি বা রাগ আরও বেড়ে যাওয়া।"
    },
    "example": {
      "en": "He felt aggravated by the feeling of being taken for granted.",
      "bn": "সবাই তাকে স্বাভাবিক ধরে নিচ্ছে, তার অবদানকে গুরুত্ব দিচ্ছে না, এমন মনে হওয়ায় তার বিরক্তি আরও বেড়ে গেল।"
    }
  },
  "Jealous": {
    "en": "Jealous",
    "bn": "ঈর্ষান্বিত",
    "simple": {
      "en": "Jealous",
      "bn": "হিংসুটে"
    },
    "meaning": {
      "en": "Upset that someone has something you want.",
      "bn": "প্রিয় মানুষ বা সম্পর্ক অন্য কারও কারণে হারিয়ে যেতে পারে, কিংবা অন্য কেউ নিজের কাঙ্ক্ষিত ঘনিষ্ঠতা পেয়ে যাচ্ছে, এমন অনুভূতিতে অস্বস্তি হওয়া।"
    },
    "example": {
      "en": "She felt jealous of the closeness her friends shared without her.",
      "bn": "বন্ধুরা নিজেদের মধ্যে যে ঘনিষ্ঠতা ভাগ করে নিত, সেখানে নিজেকে বাইরে পড়ে থাকতে দেখে তার ঈর্ষা হচ্ছিল।"
    },
    "whatNow": [
      "Ask yourself: what do I actually want? The answer is often about your own needs, not the other person.",
      "Write it out. Jealousy often carries a useful message about what matters to you."
    ]
  },
  "Resentful": {
    "en": "Resentful",
    "bn": "ক্ষোভ পুষে রাখা",
    "simple": {
      "en": "Bitter",
      "bn": "তিক্ত মনোভাব"
    },
    "meaning": {
      "en": "Holding on to anger about being treated unfairly.",
      "bn": "বারবার অন্যায় আচরণের শিকার হওয়ার কারণে মনে ক্ষোভ জমিয়ে রাখা।"
    },
    "example": {
      "en": "She felt resentful about always being the one who had to give in.",
      "bn": "সব সময় তাকেই ছাড় দিতে হয়, এই বিষয়টি নিয়ে তার মনে দীর্ঘদিনের ক্ষোভ জমেছিল।"
    }
  },
  "Envious": {
    "en": "Envious",
    "bn": "পরশ্রীকাতর",
    "simple": {
      "en": "Envious",
      "bn": "হিংসা হচ্ছে"
    },
    "meaning": {
      "en": "Wishing you had what someone else has.",
      "bn": "অন্য কারও এমন গুণ, সাফল্য বা সুবিধা দেখে ঈর্ষা হওয়া, যা নিজেরও পেতে ইচ্ছা করে।"
    },
    "example": {
      "en": "He was envious of how effortlessly confident his colleague seemed.",
      "bn": "সহকর্মীকে এত সহজে আত্মবিশ্বাসের সঙ্গে চলতে দেখে তার ঈর্ষা হচ্ছিল।"
    }
  },
  "Disgusted": {
    "en": "Disgusted",
    "bn": "বিতৃষ্ণ",
    "simple": {
      "en": "Grossed Out",
      "bn": "গা ঘিনঘিন করা"
    },
    "meaning": {
      "en": "A strong dislike for something gross or wrong.",
      "bn": "কোনো আচরণ বা বিষয়কে এতটাই খারাপ, ঘৃণ্য বা অগ্রহণযোগ্য মনে হওয়া যে তীব্র বিতৃষ্ণা তৈরি হয়।"
    },
    "example": {
      "en": "She was disgusted by her own inability to stand up for herself.",
      "bn": "নিজের হয়ে কথা বলতে না পারার বিষয়টি তাকে নিজের ওপরই বিরক্ত ও বিতৃষ্ণ করে তুলেছিল।"
    }
  },
  "Contemptuous": {
    "en": "Contemptuous",
    "bn": "তাচ্ছিল্যকারী",
    "simple": {
      "en": "Snooty",
      "bn": "নাক উঁচু"
    },
    "meaning": {
      "en": "Feeling someone is beneath you; scornful.",
      "bn": "কাউকে এতটাই তুচ্ছ মনে করা যে তার প্রতি শ্রদ্ধা হারিয়ে যায় এবং অবজ্ঞা জন্মায়।"
    },
    "example": {
      "en": "He felt contemptuous toward people who refused to reflect on themselves.",
      "bn": "যারা কখনো নিজেদের আচরণ নিয়ে ভাবতে চায় না, তাদের সে অবজ্ঞার চোখে দেখত।"
    }
  },
  "Revolted": {
    "en": "Revolted",
    "bn": "ঘৃণায় গা গুলিয়ে ওঠা",
    "simple": {
      "en": "Yuck",
      "bn": "ইয়াক / ওয়াক থু"
    },
    "meaning": {
      "en": "Sickened or repulsed by something.",
      "bn": "কোনো কিছু দেখে বা জেনে এতটাই ঘৃণা হওয়া যে তা সহ্য করাও কঠিন লাগে।"
    },
    "example": {
      "en": "She felt revolted by the dishonesty she had been shown.",
      "bn": "তার সঙ্গে যে অসততা করা হয়েছিল, তা জানার পর তার মনে তীব্র ঘৃণা জন্মাল।"
    }
  },
  "Sadness": {
    "en": "Sadness",
    "bn": "দুঃখ",
    "simple": {
      "en": "Sad",
      "bn": "দুঃখ"
    },
    "meaning": {
      "en": "The heavy feeling when you've lost something or things go wrong.",
      "bn": "মন খারাপ হওয়া বা কোনো হারানো ও কষ্টদায়ক ঘটনার কারণে মনে দুঃখ জমা হওয়া।"
    },
    "example": {
      "en": "A wave of sadness washed over him as he realised the friendship was over.",
      "bn": "বন্ধুত্বটা যে শেষ হয়ে গেছে, তা বুঝতে পেরে তার মনে দুঃখের ঢেউ বয়ে গেল।"
    },
    "whatNow": [
      "Be gentle with yourself. What would you say to a friend feeling this way?",
      "Move your body — even a short walk helps. Then reach out to one person you trust."
    ]
  },
  "Hurt": {
    "en": "Hurt",
    "bn": "মানসিকভাবে আহত",
    "simple": {
      "en": "Hurt",
      "bn": "কষ্ট পাওয়া"
    },
    "meaning": {
      "en": "Emotional pain, often caused by someone's actions.",
      "bn": "কারও কথা বা আচরণে মনের ভেতর আঘাত পাওয়া।"
    },
    "example": {
      "en": "She was hurt that they forgot her birthday.",
      "bn": "সবাই তার জন্মদিন ভুলে যাওয়ায় সে মনে খুব কষ্ট পেয়েছিল।"
    },
    "whatNow": [
      "Acknowledge the pain without judging yourself for feeling it.",
      "When you’re ready, consider: can you share how you feel with the person involved?"
    ]
  },
  "Agonized": {
    "en": "Agonized",
    "bn": "তীব্র যন্ত্রণাগ্রস্ত",
    "simple": {
      "en": "In Pain",
      "bn": "কষ্টে ভোগা"
    },
    "meaning": {
      "en": "In deep, intense pain or distress.",
      "bn": "কোনো সিদ্ধান্ত বা পরিস্থিতির কারণে গভীর মানসিক যন্ত্রণায় ভোগা।"
    },
    "example": {
      "en": "He felt agonized choosing between what he wanted and what was right.",
      "bn": "নিজের ইচ্ছা আর সঠিক কাজের মধ্যে একটিকে বেছে নিতে গিয়ে সে গভীর মানসিক যন্ত্রণায় ভুগছিল।"
    }
  },
  "Disturbed": {
    "en": "Disturbed",
    "bn": "বিচলিত",
    "simple": {
      "en": "Upset",
      "bn": "মন খারাপ"
    },
    "meaning": {
      "en": "Troubled and unsettled in your mind.",
      "bn": "কোনো চিন্তা বা স্মৃতি মনে অশান্তি তৈরি করা; কিছুতেই স্বস্তি না পাওয়া।"
    },
    "example": {
      "en": "She felt disturbed by a memory she couldn't shake.",
      "bn": "যে স্মৃতিটা সে মন থেকে সরাতে পারছিল না, সেটি তাকে ভেতরে ভেতরে অশান্ত করে তুলছিল।"
    }
  },
  "Unhappy": {
    "en": "Unhappy",
    "bn": "অসুখী",
    "simple": {
      "en": "Unhappy",
      "bn": "মন ভালো নেই"
    },
    "meaning": {
      "en": "Not happy; feeling low.",
      "bn": "সুখী না থাকা; কোনো কারণ জানা থাকুক বা না থাকুক, মন ভালো না থাকা।"
    },
    "example": {
      "en": "He had been unhappy for weeks without being able to say why.",
      "bn": "কেন এমন লাগছে তা বোঝাতে না পারলেও কয়েক সপ্তাহ ধরে তার মন ভালো ছিল না।"
    }
  },
  "Miserable": {
    "en": "Miserable",
    "bn": "দুর্দশাগ্রস্ত",
    "simple": {
      "en": "Very Sad",
      "bn": "খুব দুঃখী"
    },
    "meaning": {
      "en": "Very unhappy and uncomfortable.",
      "bn": "খুব কষ্টে থাকা; নিজের পরিস্থিতিতে একেবারেই ভালো না লাগা।"
    },
    "example": {
      "en": "She felt miserable, trapped in a life that didn't feel like hers.",
      "bn": "যে জীবনটা তার নিজের বলে মনে হতো না, সেই জীবনে আটকে থেকে সে ভীষণ কষ্ট পাচ্ছিল।"
    }
  },
  "Disheartened": {
    "en": "Disheartened",
    "bn": "মনোবল ভাঙা",
    "simple": {
      "en": "Down",
      "bn": "মনমরা"
    },
    "meaning": {
      "en": "Losing hope or confidence.",
      "bn": "বারবার ব্যর্থতা বা হতাশার কারণে আশা ও আত্মবিশ্বাস হারিয়ে ফেলা।"
    },
    "example": {
      "en": "He felt disheartened after putting in so much effort for nothing.",
      "bn": "এত চেষ্টা করার পরও কোনো ফল না পাওয়ায় তার মনোবল ভেঙে গিয়েছিল।"
    }
  },
  "Disappointed": {
    "en": "Disappointed",
    "bn": "আশাভঙ্গ হওয়া",
    "simple": {
      "en": "Let Down",
      "bn": "হতাশ করা হয়েছে মনে হওয়া"
    },
    "meaning": {
      "en": "Let down because something wasn't as good as hoped.",
      "bn": "যা আশা করেছিল, তা না পাওয়ায় বা প্রত্যাশামতো কিছু না ঘটায় মন খারাপ হওয়া।"
    },
    "example": {
      "en": "She felt disappointed in herself for not speaking up.",
      "bn": "নিজের পক্ষে কথা বলতে না পারায় সে নিজের ওপরই হতাশ হয়েছিল।"
    }
  },
  "Dismayed": {
    "en": "Dismayed",
    "bn": "হতোদ্যম",
    "simple": {
      "en": "Upset",
      "bn": "মন খারাপ"
    },
    "meaning": {
      "en": "Upset and discouraged by something unexpected.",
      "bn": "অপ্রত্যাশিত কোনো বিষয় দেখে বা বুঝে হতাশ, বিচলিত ও নিরুৎসাহ হয়ে পড়া।"
    },
    "example": {
      "en": "He felt dismayed to realise how much he had been avoiding.",
      "bn": "এত দিন ধরে যে বিষয়গুলো সে এড়িয়ে যাচ্ছিল, সেগুলো বুঝতে পেরে সে হতাশ ও বিচলিত হয়ে পড়ল।"
    }
  },
  "Displeased": {
    "en": "Displeased",
    "bn": "অসন্তুষ্ট",
    "simple": {
      "en": "Unhappy",
      "bn": "অখুশি"
    },
    "meaning": {
      "en": "Not pleased; mildly unhappy about something.",
      "bn": "কোনো কাজ বা পরিস্থিতি পছন্দ না হওয়ায় অসন্তুষ্ট হওয়া।"
    },
    "example": {
      "en": "She felt displeased with how she had handled the conversation.",
      "bn": "কথোপকথনটি সে যেভাবে সামলেছিল, তাতে সে নিজেই সন্তুষ্ট ছিল না।"
    }
  },
  "Shameful": {
    "en": "Shameful",
    "bn": "লজ্জাবোধে ভোগা",
    "simple": {
      "en": "Ashamed",
      "bn": "লজ্জিত"
    },
    "meaning": {
      "en": "Feeling ashamed about something you did.",
      "bn": "নিজের কোনো কাজ বা আচরণ নিয়ে লজ্জা অনুভব করা।"
    },
    "example": {
      "en": "He felt shameful about the way he had treated someone he loved.",
      "bn": "প্রিয় একজন মানুষের সঙ্গে সে যেভাবে আচরণ করেছিল, তা ভেবে তার লজ্জা লাগছিল।"
    }
  },
  "Regretful": {
    "en": "Regretful",
    "bn": "অনুশোচনাগ্রস্ত",
    "simple": {
      "en": "Sorry",
      "bn": "দুঃখিত"
    },
    "meaning": {
      "en": "Wishing you had done something differently.",
      "bn": "অতীতে অন্যভাবে কিছু করলে ভালো হতো, এমন মনে করে অনুশোচনা করা।"
    },
    "example": {
      "en": "She felt regretful about the words she could never take back.",
      "bn": "যে কথাগুলো সে বলেছিল এবং আর ফিরিয়ে নেওয়া সম্ভব ছিল না, সেগুলোর জন্য তার অনুশোচনা হচ্ছিল।"
    }
  },
  "Guilty": {
    "en": "Guilty",
    "bn": "অপরাধবোধে থাকা",
    "simple": {
      "en": "Guilty",
      "bn": "দোষী মনে হওয়া"
    },
    "meaning": {
      "en": "Feeling responsible for doing something wrong.",
      "bn": "নিজের কোনো ভুল বা অবহেলার জন্য নিজেকে দায়ী মনে হওয়া।"
    },
    "example": {
      "en": "He felt guilty for not being there when his friend needed him.",
      "bn": "বন্ধুর যখন তাকে প্রয়োজন ছিল, তখন পাশে না থাকায় তার অপরাধবোধ হচ্ছিল।"
    }
  },
  "Lonely": {
    "en": "Lonely",
    "bn": "একাকী",
    "simple": {
      "en": "Lonely",
      "bn": "একা লাগা"
    },
    "meaning": {
      "en": "Sad because you feel alone or left out.",
      "bn": "আশপাশে মানুষ থাকলেও নিজের সঙ্গে মানসিকভাবে সংযুক্ত কাউকে না পাওয়ায় একা লাগা।"
    },
    "example": {
      "en": "She felt lonely even in a room full of people.",
      "bn": "অনেক মানুষের ভিড়েও তার নিজেকে ভীষণ একা লাগছিল।"
    },
    "whatNow": [
      "Reach out to one trusted person — even a short message counts.",
      "Remember: feeling lonely doesn't mean you are alone. Call or text someone you care about."
    ]
  },
  "Isolated": {
    "en": "Isolated",
    "bn": "বিচ্ছিন্ন",
    "simple": {
      "en": "Left Out",
      "bn": "বাদ পড়ে যাওয়া"
    },
    "meaning": {
      "en": "Cut off and far from others.",
      "bn": "অন্যদের কাছ থেকে বিচ্ছিন্ন হয়ে পড়া; মনে হওয়া কেউ সত্যিই বুঝতে পারছে না।"
    },
    "example": {
      "en": "He felt isolated, as though nobody truly understood him.",
      "bn": "তার মনে হচ্ছিল, সে সবার থেকে আলাদা হয়ে গেছে এবং কেউ তাকে সত্যিকার অর্থে বোঝে না।"
    }
  },
  "Neglected": {
    "en": "Neglected",
    "bn": "অবহেলিত",
    "simple": {
      "en": "Forgotten",
      "bn": "ভুলে গেছে মনে হওয়া"
    },
    "meaning": {
      "en": "Feeling ignored or not cared for.",
      "bn": "অন্যরা নিজের প্রয়োজন বা অনুভূতির প্রতি খেয়াল করছে না, এমন মনে হওয়া।"
    },
    "example": {
      "en": "She felt neglected, as if her needs didn't matter to anyone.",
      "bn": "তার মনে হচ্ছিল, কেউ তার প্রয়োজনকে গুরুত্ব দেয় না বা তার যত্ন নেয় না।"
    }
  },
  "Gloomy": {
    "en": "Gloomy",
    "bn": "বিষণ্ণ",
    "simple": {
      "en": "Glum",
      "bn": "মুখ ভার"
    },
    "meaning": {
      "en": "Low, dark and without cheer.",
      "bn": "মন ভারী ও বিষণ্ন থাকা; কোনো কিছুতেই আনন্দ না পাওয়া।"
    },
    "example": {
      "en": "A gloomy heaviness sat with him all day and he couldn't shift it.",
      "bn": "সারাটা দিন তার মন ভার হয়ে ছিল, কিন্তু কিছুতেই সেই মনখারাপ কাটাতে পারছিল না।"
    },
    "whatNow": [
      "Get outside if you can — daylight and fresh air shift your body chemistry.",
      "Do one small kind thing for yourself: a warm drink, a favourite song, a hot shower."
    ]
  },
  "Hopeless": {
    "en": "Hopeless",
    "bn": "আশাহীন",
    "simple": {
      "en": "Hopeless",
      "bn": "কোনো আশা নেই"
    },
    "meaning": {
      "en": "Feeling that nothing will get better.",
      "bn": "মনে হওয়া যে আর কিছুই ভালো হবে না, যত চেষ্টাই করা হোক না কেন।"
    },
    "example": {
      "en": "She felt hopeless, as though nothing she did would ever be enough.",
      "bn": "তার মনে হচ্ছিল, সে যতই চেষ্টা করুক, কখনোই যথেষ্ট ভালো হতে পারবে না।"
    },
    "whatNow": [
      "Think of one small thing that went okay today, however tiny.",
      "Talk to someone — a friend, a family member, or a helpline. You don't have to carry this alone."
    ]
  },
  "Depressed": {
    "en": "Depressed",
    "bn": "গভীরভাবে বিষণ্ণ",
    "simple": {
      "en": "Very Sad",
      "bn": "খুব দুঃখী"
    },
    "meaning": {
      "en": "A deep, lasting heaviness that dulls everything.",
      "bn": "দীর্ঘ সময় ধরে মন ভারী ও বিষণ্ন থাকা, যার ফলে আগে ভালো লাগত এমন কাজেও আনন্দ কমে যায়।"
    },
    "example": {
      "en": "He felt depressed and couldn't find pleasure in things he used to love.",
      "bn": "সে দীর্ঘদিন ধরে গভীর বিষণ্নতায় ভুগছিল; আগে যেসব কাজে আনন্দ পেত, সেগুলোতেও আর আনন্দ খুঁজে পাচ্ছিল না।"
    }
  },
  "Surprise": {
    "en": "Surprise",
    "bn": "বিস্ময়",
    "simple": {
      "en": "Surprised",
      "bn": "বিস্ময়"
    },
    "meaning": {
      "en": "The quick feeling when something unexpected happens.",
      "bn": "অপ্রত্যাশিত কিছু ঘটলে হঠাৎ বিস্মিত হওয়া।"
    },
    "example": {
      "en": "Surprise filled her when she realised how much she had changed.",
      "bn": "নিজের মধ্যে কতটা পরিবর্তন এসেছে, তা বুঝতে পেরে সে বিস্মিত হয়ে গেল।"
    },
    "whatNow": [
      "Take a moment. Let the feeling settle before reacting or making decisions.",
      "Ground yourself: press your feet into the floor, take three slow breaths, then decide your next step."
    ]
  },
  "Stunned": {
    "en": "Stunned",
    "bn": "হতবাক",
    "simple": {
      "en": "Shocked",
      "bn": "ধাক্কা খাওয়া"
    },
    "meaning": {
      "en": "Shocked so much you can't react.",
      "bn": "এতটাই অবাক বা হতবাক হওয়া যে সঙ্গে সঙ্গে কীভাবে প্রতিক্রিয়া জানাতে হবে, তা বুঝতে না পারা।"
    },
    "example": {
      "en": "She was stunned to discover how deeply she cared.",
      "bn": "সে যে কাউকে এত গভীরভাবে ভালোবাসে, তা বুঝতে পেরে সে হতবাক হয়ে গেল।"
    }
  },
  "Shocked": {
    "en": "Shocked",
    "bn": "আকস্মিক ধাক্কা পাওয়া",
    "simple": {
      "en": "Shocked",
      "bn": "ধাক্কা খাওয়া"
    },
    "meaning": {
      "en": "Very surprised, usually by something bad.",
      "bn": "অপ্রত্যাশিত কোনো ঘটনা বা তথ্যের কারণে মানসিকভাবে তীব্র ধাক্কা খাওয়া।"
    },
    "example": {
      "en": "He was shocked by the depth of his own grief.",
      "bn": "নিজের শোক যে এত গভীর, তা বুঝতে পেরে সে মানসিকভাবে ধাক্কা খেল।"
    }
  },
  "Bewildered": {
    "en": "Bewildered",
    "bn": "হকচকিত",
    "simple": {
      "en": "Confused",
      "bn": "বিভ্রান্ত"
    },
    "meaning": {
      "en": "Confused and unsure what's happening.",
      "bn": "কী ঘটছে বা কেন এমন হচ্ছে, তা বুঝতে না পেরে হতবুদ্ধি হয়ে যাওয়া।"
    },
    "example": {
      "en": "She felt bewildered by the mix of emotions pulling her in different directions.",
      "bn": "বিভিন্ন অনুভূতি তাকে বিপরীত দিকে টানছিল; নিজের মনের অবস্থা বুঝতে না পেরে সে হতবুদ্ধি হয়ে পড়ল।"
    }
  },
  "Confused": {
    "en": "Confused",
    "bn": "বিভ্রান্ত",
    "simple": {
      "en": "Confused",
      "bn": "গুলিয়ে ফেলা"
    },
    "meaning": {
      "en": "Not understanding; mixed up.",
      "bn": "নিজের চিন্তা, ইচ্ছা বা পরিস্থিতি নিয়ে পরিষ্কার ধারণা না থাকা।"
    },
    "example": {
      "en": "He felt confused about what he truly wanted from life.",
      "bn": "জীবন থেকে সে আসলে কী চায়, তা নিয়ে সে বিভ্রান্ত ছিল।"
    },
    "whatNow": [
      "Write down what you know vs. what you don't. Clarity often follows.",
      "Ask one question to the right person. You don't have to figure it all out alone."
    ]
  },
  "Disillusioned": {
    "en": "Disillusioned",
    "bn": "মোহভঙ্গ হওয়া",
    "simple": {
      "en": "Let Down",
      "bn": "আশা ভেঙে যাওয়া"
    },
    "meaning": {
      "en": "Disappointed after learning the truth.",
      "bn": "কাউকে বা কোনো কিছুকে ভালো বা আদর্শ মনে করার পর তার আসল রূপ জেনে সেই বিশ্বাস বা মোহ ভেঙে যাওয়া।"
    },
    "example": {
      "en": "She felt disillusioned when someone she admired turned out to be unkind.",
      "bn": "যে মানুষটিকে সে এত শ্রদ্ধা করত, তার নিষ্ঠুর আচরণ দেখে তার মোহ ভেঙে গেল।"
    }
  },
  "Perplexed": {
    "en": "Perplexed",
    "bn": "কিংকর্তব্যবিমূঢ়",
    "simple": {
      "en": "Puzzled",
      "bn": "ধাঁধায় পড়া"
    },
    "meaning": {
      "en": "Puzzled and unable to work something out.",
      "bn": "কোনো বিষয় বা নিজের প্রতিক্রিয়ার কারণ বুঝতে না পেরে ধন্দে পড়ে যাওয়া।"
    },
    "example": {
      "en": "He felt perplexed by his own reaction to the good news.",
      "bn": "ভালো খবরটি শুনেও নিজের এমন প্রতিক্রিয়া হলো কেন, তা বুঝতে না পেরে সে ধন্দে পড়ে গেল।"
    }
  },
  "Amazed": {
    "en": "Amazed",
    "bn": "বিস্মিত",
    "simple": {
      "en": "Amazed",
      "bn": "অবাক"
    },
    "meaning": {
      "en": "Filled with wonder and surprise.",
      "bn": "কোনো কিছু দেখে বা জেনে এতটাই বিস্মিত হওয়া যে তা মুগ্ধও করে।"
    },
    "example": {
      "en": "She was amazed at the strength she found in herself.",
      "bn": "নিজের ভেতরেই যে এতটা শক্তি আছে, তা আবিষ্কার করে সে বিস্মিত হয়ে গেল।"
    }
  },
  "Astonished": {
    "en": "Astonished",
    "bn": "অত্যন্ত বিস্মিত",
    "simple": {
      "en": "Wowed",
      "bn": "মুগ্ধ হয়ে ওয়াও বলা"
    },
    "meaning": {
      "en": "Greatly surprised.",
      "bn": "এমন কিছু দেখে বা জেনে অত্যন্ত অবাক হওয়া, যা কল্পনাও করা হয়নি।"
    },
    "example": {
      "en": "He was astonished by how much love he felt for his child.",
      "bn": "নিজের সন্তানের প্রতি তার ভালোবাসা যে এত গভীর, তা বুঝতে পেরে সে অবাক হয়ে গেল।"
    }
  },
  "Awe-struck": {
    "en": "Awe-struck",
    "bn": "বিস্ময়ে শ্রদ্ধাভিভূত",
    "simple": {
      "en": "In Awe",
      "bn": "বিস্ময়ে অভিভূত"
    },
    "meaning": {
      "en": "Overwhelmed with wonder and respect.",
      "bn": "কোনো কিছুর মহত্ত্ব বা সৌন্দর্যে এতটাই মুগ্ধ হওয়া যে বিস্ময়ের সঙ্গে গভীর শ্রদ্ধাও জাগে।"
    },
    "example": {
      "en": "She felt awe-struck by the depth of kindness a stranger showed her.",
      "bn": "একজন অপরিচিত মানুষ এতটা দয়ালু হতে পারেন দেখে সে বিস্ময় ও শ্রদ্ধায় অভিভূত হয়ে গেল।"
    }
  },
  "Overcome": {
    "en": "Overcome",
    "bn": "আবেগে আচ্ছন্ন",
    "simple": {
      "en": "Overwhelmed",
      "bn": "অভিভূত"
    },
    "meaning": {
      "en": "So full of feeling you can hardly cope.",
      "bn": "আবেগ এতটাই তীব্র হয়ে ওঠা যে নিজেকে সামলানো কঠিন হয়ে পড়ে।"
    },
    "example": {
      "en": "He was overcome with emotion when he heard the words he had always needed.",
      "bn": "যে কথাগুলো শোনার প্রয়োজন সে সারা জীবন অনুভব করেছে, সেগুলো শুনে সে আবেগে আপ্লুত হয়ে পড়ল।"
    }
  },
  "Speechless": {
    "en": "Speechless",
    "bn": "বাকরুদ্ধ",
    "simple": {
      "en": "No Words",
      "bn": "মুখে কথা নেই"
    },
    "meaning": {
      "en": "So surprised you can't find words.",
      "bn": "এতটাই বিস্মিত বা আবেগাপ্লুত হওয়া যে মুখে কোনো কথা না আসা।"
    },
    "example": {
      "en": "She was speechless when she realised someone truly saw her.",
      "bn": "কেউ তাকে সত্যিই বুঝতে পেরেছে, এটা উপলব্ধি করে সে বাকরুদ্ধ হয়ে গেল।"
    }
  },
  "Astounded": {
    "en": "Astounded",
    "bn": "বিস্ময়ে স্তম্ভিত",
    "simple": {
      "en": "Blown Away",
      "bn": "একেবারে অভিভূত"
    },
    "meaning": {
      "en": "Shocked and amazed at the same time.",
      "bn": "একই সঙ্গে বিস্মিত ও অভিভূত হয়ে যাওয়া।"
    },
    "example": {
      "en": "He was astounded by how quickly forgiveness changed how he felt.",
      "bn": "ক্ষমা করে দেওয়ার ফলে তার অনুভূতি এত দ্রুত বদলে গেল দেখে সে বিস্মিত হয়ে গেল।"
    }
  },
  "Moved": {
    "en": "Moved",
    "bn": "আবেগাপ্লুত",
    "simple": {
      "en": "Touched",
      "bn": "মন ছুঁয়ে যাওয়া"
    },
    "meaning": {
      "en": "Touched deeply in your feelings.",
      "bn": "কারও কথা বা কাজ মনে গভীরভাবে ছুঁয়ে যাওয়া; আবেগাপ্লুত হওয়া।"
    },
    "example": {
      "en": "She was moved by how much her words had meant to someone.",
      "bn": "তার কথাগুলো যে অন্য একজনের কাছে এত গুরুত্বপূর্ণ ছিল, তা বুঝে সে আবেগাপ্লুত হয়ে গেল।"
    }
  },
  "Stimulated": {
    "en": "Stimulated",
    "bn": "উদ্দীপ্ত",
    "simple": {
      "en": "Excited",
      "bn": "উত্তেজিত"
    },
    "meaning": {
      "en": "Excited and full of interest.",
      "bn": "কোনো আলোচনা বা অভিজ্ঞতায় চিন্তা ও আগ্রহ নতুন করে জেগে ওঠা।"
    },
    "example": {
      "en": "He felt stimulated by a conversation that challenged everything he believed.",
      "bn": "এমন একটি আলোচনা, যা তার দীর্ঘদিনের বিশ্বাসকে প্রশ্নের মুখে ফেলেছিল, তার চিন্তা ও আগ্রহকে নতুন করে জাগিয়ে তুলল।"
    }
  },
  "Touched": {
    "en": "Touched",
    "bn": "মর্মস্পর্শিত",
    "simple": {
      "en": "Touched",
      "bn": "মন ছুঁয়ে যাওয়া"
    },
    "meaning": {
      "en": "Warmed by someone's kindness.",
      "bn": "কারও আন্তরিকতা বা ছোট্ট কোনো ভালো কাজ মনে গভীরভাবে ছুঁয়ে যাওয়া।"
    },
    "example": {
      "en": "She was touched that they remembered what mattered to her.",
      "bn": "তার কাছে কী গুরুত্বপূর্ণ, তা অন্যরা মনে রেখেছে দেখে সে মুগ্ধ ও আবেগাপ্লুত হয়েছিল।"
    }
  },
  "Joy": {
    "en": "Joy",
    "bn": "আনন্দ",
    "simple": {
      "en": "Happy",
      "bn": "আনন্দ"
    },
    "meaning": {
      "en": "The bright, happy feeling when things are good.",
      "bn": "মন ভরে যাওয়া আনন্দ; কোনো কিছুতে গভীর সুখ অনুভব করা।"
    },
    "example": {
      "en": "Joy filled her chest when she realised she finally felt at home.",
      "bn": "অবশেষে সে অনুভব করল, এই জায়গাটিই তার আপন ঠিকানা, আর তাতেই তার মন আনন্দে ভরে উঠল।"
    },
    "whatNow": [
      "Savour it. Take a mental snapshot of this moment — what you see, hear and feel.",
      "Share it with someone. Joy grows when you let others in on it."
    ]
  },
  "Peaceful": {
    "en": "Peaceful",
    "bn": "প্রশান্ত",
    "simple": {
      "en": "Calm",
      "bn": "শান্ত"
    },
    "meaning": {
      "en": "Calm and free from worry.",
      "bn": "মনের ভেতর অশান্তি বা দুশ্চিন্তা কমে গিয়ে শান্তি অনুভব করা।"
    },
    "example": {
      "en": "She felt peaceful after letting go of something she had held onto for years.",
      "bn": "বছরের পর বছর ধরে মনের মধ্যে জমিয়ে রাখা একটি বিষয় ছেড়ে দিতে পারার পর সে শান্তি অনুভব করল।"
    },
    "whatNow": [
      "Notice what brought you here. Can you build more of it into your week?",
      "Breathe. Let this be enough for right now."
    ]
  },
  "Tranquil": {
    "en": "Tranquil",
    "bn": "নিস্তরঙ্গ শান্ত",
    "simple": {
      "en": "Relaxed",
      "bn": "স্বস্তিতে থাকা"
    },
    "meaning": {
      "en": "Very calm and still.",
      "bn": "মন এতটাই শান্ত থাকা যে ভেতরে অস্থিরতা বা চিন্তার কোলাহল নেই।"
    },
    "example": {
      "en": "He felt tranquil, his mind quiet for the first time in months.",
      "bn": "কয়েক মাস পর প্রথমবারের মতো তার মন শান্ত হলো, যেন সব চিন্তা থেমে গেছে।"
    }
  },
  "Serene": {
    "en": "Serene",
    "bn": "স্নিগ্ধ ও প্রশান্ত",
    "simple": {
      "en": "Peaceful",
      "bn": "শান্তিময়"
    },
    "meaning": {
      "en": "Calm, clear and untroubled.",
      "bn": "গভীর ও স্থির মানসিক প্রশান্তি; মনে কোনো অস্থিরতা না থাকা।"
    },
    "example": {
      "en": "A serene certainty settled over her that she was exactly where she should be.",
      "bn": "তার মনে এক ধরনের শান্ত ও স্থির বিশ্বাস জন্মাল যে সে ঠিক সেই জায়গাতেই আছে, যেখানে তার থাকা উচিত।"
    }
  },
  "Content": {
    "en": "Content",
    "bn": "তৃপ্ত",
    "simple": {
      "en": "Happy",
      "bn": "খুশি"
    },
    "meaning": {
      "en": "Quietly happy with what you have.",
      "bn": "যা আছে, তা নিয়েই সন্তুষ্ট থাকা; আরও কিছু না পেলেও মনে শান্তি থাকা।"
    },
    "example": {
      "en": "He felt content, realising he already had everything that mattered.",
      "bn": "জীবনে যা সত্যিই গুরুত্বপূর্ণ, তার সবই যে তার কাছে আছে, তা বুঝতে পেরে সে তৃপ্তি অনুভব করল।"
    }
  },
  "Satisfied": {
    "en": "Satisfied",
    "bn": "সন্তুষ্ট",
    "simple": {
      "en": "Pleased",
      "bn": "সন্তুষ্ট / খুশি"
    },
    "meaning": {
      "en": "Pleased that something is good enough.",
      "bn": "কোনো কাজ বা প্রচেষ্টা যথাসাধ্য ভালোভাবে সম্পন্ন হয়েছে বলে মনে তৃপ্তি পাওয়া।"
    },
    "example": {
      "en": "She felt satisfied knowing she had given it everything she had.",
      "bn": "নিজের সর্বোচ্চ চেষ্টা করেছে জেনে সে মনে তৃপ্তি পেল।"
    }
  },
  "Pleased": {
    "en": "Pleased",
    "bn": "পরিতৃপ্ত",
    "simple": {
      "en": "Glad",
      "bn": "আনন্দিত"
    },
    "meaning": {
      "en": "Happy about something.",
      "bn": "কোনো কিছু ভালো হওয়ায় বা প্রত্যাশামতো ঘটায় খুশি হওয়া।"
    },
    "example": {
      "en": "He felt pleased that he had finally found the courage to be honest.",
      "bn": "অবশেষে সত্য কথা বলার সাহস পেয়েছে বলে সে খুশি হয়েছিল।"
    }
  },
  "Happy": {
    "en": "Happy",
    "bn": "সুখী",
    "simple": {
      "en": "Happy",
      "bn": "খুশি"
    },
    "meaning": {
      "en": "Feeling good and cheerful.",
      "bn": "ভালো লাগা, আনন্দিত থাকা এবং মন প্রফুল্ল অনুভব করা।"
    },
    "example": {
      "en": "She felt happy just being around the people she loved.",
      "bn": "যাদের সে ভালোবাসে, তাদের পাশে থাকলেই তার ভালো লাগত।"
    }
  },
  "Jovial": {
    "en": "Jovial",
    "bn": "হাসিখুশি ও রসিক",
    "simple": {
      "en": "Cheerful",
      "bn": "প্রফুল্ল"
    },
    "meaning": {
      "en": "Cheerful and full of good humour.",
      "bn": "হাসিখুশি ও প্রাণবন্ত থাকা; আশপাশের মানুষের সঙ্গে আনন্দ করে সময় কাটানো।"
    },
    "example": {
      "en": "He felt jovial and warm, enjoying the closeness of old friends.",
      "bn": "পুরোনো বন্ধুদের সঙ্গে ঘনিষ্ঠ সময় কাটাতে কাটাতে সে হাসিখুশি ও প্রাণবন্ত হয়ে উঠেছিল।"
    }
  },
  "Delighted": {
    "en": "Delighted",
    "bn": "অত্যন্ত আনন্দিত",
    "simple": {
      "en": "Very Happy",
      "bn": "খুব খুশি"
    },
    "meaning": {
      "en": "Very pleased and happy.",
      "bn": "কোনো কিছুতে অত্যন্ত খুশি হওয়া, বিশেষ করে আনন্দদায়ক কিছু দেখে বা জেনে।"
    },
    "example": {
      "en": "She felt delighted to see how much her child had grown in confidence.",
      "bn": "নিজের সন্তানের আত্মবিশ্বাস কতটা বেড়েছে, তা দেখে সে ভীষণ খুশি হয়েছিল।"
    }
  },
  "Cheerful": {
    "en": "Cheerful",
    "bn": "প্রফুল্ল",
    "simple": {
      "en": "Cheerful",
      "bn": "হাসিখুশি"
    },
    "meaning": {
      "en": "Bright and full of good spirits.",
      "bn": "স্বাভাবিকভাবে হাসিখুশি ও প্রফুল্ল থাকা।"
    },
    "example": {
      "en": "He woke feeling cheerful, grateful for a fresh start.",
      "bn": "নতুনভাবে শুরু করার সুযোগ পেয়ে কৃতজ্ঞতা নিয়ে সে হাসিখুশি মনে ঘুম থেকে উঠেছিল।"
    }
  },
  "Amused": {
    "en": "Amused",
    "bn": "মজা পাওয়া",
    "simple": {
      "en": "Giggly",
      "bn": "খিলখিল করে হাসা"
    },
    "meaning": {
      "en": "Finding something funny or entertaining.",
      "bn": "কোনো কিছু মজার মনে হওয়ায় হাসি পাওয়া বা মনে আনন্দ লাগা।"
    },
    "example": {
      "en": "She felt amused by how seriously she used to take everything.",
      "bn": "আগে সে সবকিছুকে কতটা গুরুতরভাবে নিত, তা মনে করে তার মজা লাগল।"
    }
  },
  "Playful": {
    "en": "Playful",
    "bn": "খেলাচ্ছলে আনন্দিত",
    "simple": {
      "en": "Playful",
      "bn": "দুষ্টুমিভরা"
    },
    "meaning": {
      "en": "Light, fun and full of play.",
      "bn": "অতিরিক্ত গাম্ভীর্য ছেড়ে হালকা মেজাজে আনন্দ করা বা দুষ্টুমি করতে ইচ্ছা হওয়া।"
    },
    "example": {
      "en": "He felt playful and free, letting go of the need to be perfect.",
      "bn": "সবকিছু নিখুঁত করার চাপ ছেড়ে দিয়ে সে মুক্ত মনে আনন্দ করতে লাগল।"
    }
  },
  "Proud": {
    "en": "Proud",
    "bn": "গর্বিত",
    "simple": {
      "en": "Proud",
      "bn": "গর্বিত"
    },
    "meaning": {
      "en": "Pleased about something you or others achieved.",
      "bn": "নিজের বা অন্য কারও অর্জন, গুণ বা উন্নতি দেখে গর্ব অনুভব করা।"
    },
    "example": {
      "en": "She felt proud of the person she was becoming.",
      "bn": "সে ধীরে ধীরে যে মানুষ হয়ে উঠছিল, তাকে নিয়ে তার গর্ব হচ্ছিল।"
    },
    "whatNow": [
      "Acknowledge what you did to earn this. You put in the work.",
      "Share your achievement with someone who'll celebrate with you."
    ]
  },
  "Triumphant": {
    "en": "Triumphant",
    "bn": "জয়ের আনন্দে বিজয়ী",
    "simple": {
      "en": "Winning",
      "bn": "জিতে যাওয়া"
    },
    "meaning": {
      "en": "Feeling victorious after a win.",
      "bn": "কোনো বাধা অতিক্রম করে জয়ী হওয়ার পর গভীর বিজয়ের আনন্দ অনুভব করা।"
    },
    "example": {
      "en": "He felt triumphant for standing up for what he believed in.",
      "bn": "নিজের বিশ্বাসের পক্ষে দাঁড়াতে পেরে সে বিজয়ের আনন্দ অনুভব করল।"
    }
  },
  "Illustrious": {
    "en": "Illustrious",
    "bn": "গৌরবময়",
    "simple": {
      "en": "Great",
      "bn": "দারুণ"
    },
    "meaning": {
      "en": "Feeling celebrated and admired for something great.",
      "bn": "উল্লেখযোগ্য সাফল্য বা কৃতিত্বের জন্য প্রশংসিত ও সম্মানিত হওয়ার অনুভূতি।"
    },
    "example": {
      "en": "She felt illustrious, recognised at last for her quiet dedication.",
      "bn": "এত দিন নীরবে নিষ্ঠার সঙ্গে কাজ করার পর অবশেষে স্বীকৃতি পেয়ে সে নিজেকে সম্মানিত বোধ করল।"
    }
  },
  "Optimistic": {
    "en": "Optimistic",
    "bn": "আশাবাদী",
    "simple": {
      "en": "Hopeful",
      "bn": "আশায় ভরা"
    },
    "meaning": {
      "en": "Expecting good things to happen.",
      "bn": "ভবিষ্যতে ভালো কিছু ঘটবে বলে ইতিবাচক আশা রাখা।"
    },
    "example": {
      "en": "He felt optimistic that this time things could be different.",
      "bn": "তার মনে আশা ছিল, এবার হয়তো পরিস্থিতি সত্যিই বদলাতে পারে।"
    }
  },
  "Eager": {
    "en": "Eager",
    "bn": "উদ্‌গ্রীব",
    "simple": {
      "en": "Keen",
      "bn": "আগ্রহী"
    },
    "meaning": {
      "en": "Keen and excited to do something.",
      "bn": "কোনো কিছু করার জন্য খুব আগ্রহী ও উদ্‌গ্রীব থাকা।"
    },
    "example": {
      "en": "She felt eager to begin the next chapter of her life.",
      "bn": "জীবনের নতুন অধ্যায় শুরু করার জন্য সে অধীর আগ্রহে অপেক্ষা করছিল।"
    }
  },
  "Hopeful": {
    "en": "Hopeful",
    "bn": "আশাপূর্ণ",
    "simple": {
      "en": "Hopeful",
      "bn": "আশা করা"
    },
    "meaning": {
      "en": "Believing good things can happen.",
      "bn": "পরিস্থিতি ভালো হওয়ার বা কাঙ্ক্ষিত কিছু ঘটার সম্ভাবনা আছে বলে আশা করা।"
    },
    "example": {
      "en": "He felt hopeful that the relationship could still be repaired.",
      "bn": "সম্পর্কটি এখনো ঠিক করা সম্ভব, এই আশা তার মনে ছিল।"
    }
  },
  "Excited": {
    "en": "Excited",
    "bn": "উচ্ছ্বসিত",
    "simple": {
      "en": "Excited",
      "bn": "উত্তেজিত"
    },
    "meaning": {
      "en": "Full of energy and looking forward to something.",
      "bn": "সামনে আনন্দদায়ক কিছু ঘটবে ভেবে ভেতরে উদ্দীপনা ও রোমাঞ্চ অনুভব করা।"
    },
    "example": {
      "en": "She felt excited about the possibility of truly starting over.",
      "bn": "জীবনকে সত্যিকার অর্থে নতুন করে শুরু করার সম্ভাবনা তাকে রোমাঞ্চিত করছিল।"
    },
    "whatNow": [
      "Channel it: write down what you're looking forward to and one step to make it happen.",
      "Enjoy the energy — and make sure you're also getting rest."
    ]
  },
  "Enthusiastic": {
    "en": "Enthusiastic",
    "bn": "উৎসাহী",
    "simple": {
      "en": "Pumped",
      "bn": "চাঙ্গা"
    },
    "meaning": {
      "en": "Full of eager interest and energy.",
      "bn": "কোনো কাজ বা উদ্দেশ্য নিয়ে প্রবল আগ্রহ, উদ্যম ও উৎসাহ অনুভব করা।"
    },
    "example": {
      "en": "He felt enthusiastic about a purpose that finally felt meaningful.",
      "bn": "অবশেষে অর্থপূর্ণ মনে হওয়া একটি লক্ষ্যকে ঘিরে সে প্রবল উৎসাহ অনুভব করছিল।"
    }
  },
  "Zealous": {
    "en": "Zealous",
    "bn": "প্রবল উদ্যমী",
    "simple": {
      "en": "Super Keen",
      "bn": "খুব আগ্রহী"
    },
    "meaning": {
      "en": "Full of passionate energy and devotion for a cause.",
      "bn": "কোনো আদর্শ বা উদ্দেশ্যের প্রতি অত্যন্ত নিবেদিত ও উদ্দীপ্ত থাকা।"
    },
    "example": {
      "en": "She felt zealous about creating something that could help others.",
      "bn": "মানুষের উপকারে আসবে এমন কিছু তৈরি করার ব্যাপারে সে প্রবলভাবে নিবেদিত হয়ে পড়েছিল।"
    }
  },
  "Euphoric": {
    "en": "Euphoric",
    "bn": "আনন্দে আত্মহারা",
    "simple": {
      "en": "Overjoyed",
      "bn": "খুশিতে আত্মহারা"
    },
    "meaning": {
      "en": "A burst of intense happiness.",
      "bn": "অত্যন্ত তীব্র আনন্দে অভিভূত হয়ে যাওয়া; যেন সুখের অনুভূতি উপচে পড়ছে।"
    },
    "example": {
      "en": "He felt euphoric, overwhelmed by a moment of pure belonging.",
      "bn": "আপনজনদের মাঝে সত্যিকারের আপনত্ব অনুভব করার মুহূর্তে সে প্রবল আনন্দে অভিভূত হয়ে গেল।"
    }
  },
  "Elated": {
    "en": "Elated",
    "bn": "উল্লসিত",
    "simple": {
      "en": "Thrilled",
      "bn": "রোমাঞ্চিত"
    },
    "meaning": {
      "en": "Thrilled and full of joy.",
      "bn": "আনন্দে মন ভরে যাওয়া; নিজের কোনো উপলব্ধি বা ঘটনার কারণে খুব উচ্ছ্বসিত হওয়া।"
    },
    "example": {
      "en": "She felt elated when she realised she had truly forgiven herself.",
      "bn": "অবশেষে সে সত্যিকার অর্থে নিজেকে ক্ষমা করতে পেরেছে বুঝতে পেরে তার মন আনন্দে ভরে গেল।"
    }
  },
  "Jubilant": {
    "en": "Jubilant",
    "bn": "বিজয়োল্লাসে উচ্ছ্বসিত",
    "simple": {
      "en": "Joyful",
      "bn": "আনন্দময়"
    },
    "meaning": {
      "en": "Joyfully celebrating.",
      "bn": "বড় কোনো সাফল্য বা আনন্দের ঘটনা উদ্‌যাপন করতে গিয়ে উল্লাসে মেতে ওঠা।"
    },
    "example": {
      "en": "He felt jubilant, celebrating a milestone he once thought impossible.",
      "bn": "একসময় যেটাকে সে অসম্ভব মনে করত, সেই মাইলফলক অর্জন করে সে আনন্দে উল্লাস করছিল।"
    }
  },
  "Love": {
    "en": "Love",
    "bn": "ভালোবাসা",
    "simple": {
      "en": "Loving",
      "bn": "ভালোবাসা"
    },
    "meaning": {
      "en": "The warm feeling of caring deeply for someone or something.",
      "bn": "কারও প্রতি গভীর টান, মমতা ও যত্ন অনুভব করা।"
    },
    "example": {
      "en": "Love filled her chest as she watched her family together.",
      "bn": "পরিবারের সবাইকে একসঙ্গে দেখে তার বুকটা ভালোবাসায় ভরে উঠল।"
    },
    "whatNow": [
      "Let yourself feel it fully. Noticing love — even quietly — makes it stronger.",
      "Express it. Tell someone what they mean to you, today."
    ]
  },
  "Enchanted": {
    "en": "Enchanted",
    "bn": "মন্ত্রমুগ্ধ",
    "simple": {
      "en": "Charmed",
      "bn": "মুগ্ধ"
    },
    "meaning": {
      "en": "Delighted as if under a happy spell.",
      "bn": "কাউকে বা কোনো কিছুকে এতটাই মনোমুগ্ধকর মনে হওয়া যে তার প্রতি বিশেষ আকর্ষণ তৈরি হয়।"
    },
    "example": {
      "en": "She felt enchanted by the feeling of falling in love again.",
      "bn": "আবার নতুন করে প্রেমে পড়ার অনুভূতিটা তাকে মুগ্ধ করে রেখেছিল।"
    }
  },
  "Enthralled": {
    "en": "Enthralled",
    "bn": "মোহাবিষ্ট",
    "simple": {
      "en": "Hooked",
      "bn": "আটকে যাওয়া / আসক্ত"
    },
    "meaning": {
      "en": "So interested you can't look away.",
      "bn": "কোনো ব্যক্তি বা বিষয় এতটাই আকর্ষণীয় মনে হওয়া যে তার থেকে মন সরানো কঠিন হয়ে পড়ে।"
    },
    "example": {
      "en": "He felt enthralled by how deeply he connected with someone new.",
      "bn": "নতুন একজন মানুষের সঙ্গে এত গভীর মানসিক সংযোগ তৈরি হওয়ায় সে তার প্রতি গভীরভাবে আকৃষ্ট হয়ে পড়েছিল।"
    }
  },
  "Rapturous": {
    "en": "Rapturous",
    "bn": "আনন্দে বিভোর",
    "simple": {
      "en": "Delighted",
      "bn": "আনন্দিত"
    },
    "meaning": {
      "en": "Filled with intense delight.",
      "bn": "অত্যন্ত তীব্র আনন্দ ও ভালোবাসায় অভিভূত হওয়া।"
    },
    "example": {
      "en": "She felt rapturous joy at the closeness she shared with her partner.",
      "bn": "জীবনসঙ্গীর সঙ্গে ভাগ করে নেওয়া ঘনিষ্ঠ মুহূর্তগুলো তাকে অপরিসীম আনন্দে ভরিয়ে দিয়েছিল।"
    }
  },
  "Romantic": {
    "en": "Romantic",
    "bn": "প্রেমময়",
    "simple": {
      "en": "Romantic",
      "bn": "রোমান্টিক"
    },
    "meaning": {
      "en": "Full of loving, tender feelings.",
      "bn": "প্রেম, ঘনিষ্ঠতা ও কোমল ভালোবাসার অনুভূতিতে ভরপুর থাকা।"
    },
    "example": {
      "en": "He felt romantic, savouring the quiet intimacy between them.",
      "bn": "দুজনের মধ্যকার নীরব, অন্তরঙ্গ মুহূর্তগুলো উপভোগ করতে করতে তার মনে প্রেমময় অনুভূতি জেগে উঠেছিল।"
    }
  },
  "Passionate": {
    "en": "Passionate",
    "bn": "আবেগপ্রবণ অনুরাগী",
    "simple": {
      "en": "Warm",
      "bn": "উষ্ণ"
    },
    "meaning": {
      "en": "Having strong, intense feelings about something.",
      "bn": "কোনো ব্যক্তি, সম্পর্ক বা কাজের প্রতি প্রবল আবেগ ও গভীর অনুরাগ থাকা।"
    },
    "example": {
      "en": "She felt passionate about the life they were building together.",
      "bn": "দুজনে মিলে যে জীবন গড়ে তুলছিল, তার প্রতি তার গভীর আবেগ ও অনুরাগ ছিল।"
    }
  },
  "Enamored": {
    "en": "Enamored",
    "bn": "প্রেমে মুগ্ধ",
    "simple": {
      "en": "In Love",
      "bn": "প্রেমে পড়া"
    },
    "meaning": {
      "en": "Deeply in love or charmed by something.",
      "bn": "কারও প্রতি গভীরভাবে আকৃষ্ট হয়ে পড়া; তার নানা দিকই মুগ্ধকর মনে হওয়া।"
    },
    "example": {
      "en": "He felt enamored, captivated by everything about her.",
      "bn": "তার সবকিছুই এত আকর্ষণীয় মনে হচ্ছিল যে সে গভীরভাবে তার প্রেমে পড়ে গিয়েছিল।"
    }
  },
  "Affectionate": {
    "en": "Affectionate",
    "bn": "স্নেহশীল",
    "simple": {
      "en": "Caring",
      "bn": "যত্নশীল"
    },
    "meaning": {
      "en": "Showing warmth and fondness.",
      "bn": "কাউকে ভালোবাসা ও স্নেহের প্রকাশ দেখাতে ইচ্ছা হওয়া।"
    },
    "example": {
      "en": "She felt affectionate, wanting to hold the people she loved a little closer.",
      "bn": "যাদের সে ভালোবাসে, তাদের আরও কাছে টেনে নিতে তার মন চাইছিল।"
    },
    "whatNow": [
      "Show it with a small gesture — a note, a hug, a kind word.",
      "Let the warmth guide you. Connection is what we're built for."
    ]
  },
  "Warmhearted": {
    "en": "Warmhearted",
    "bn": "উষ্ণহৃদয়",
    "simple": {
      "en": "Kind",
      "bn": "দয়ালু"
    },
    "meaning": {
      "en": "Kind and caring toward others.",
      "bn": "অন্যের প্রতি আন্তরিক মমতা, দয়া ও যত্নের মনোভাব থাকা।"
    },
    "example": {
      "en": "He felt warmhearted, moved by a desire to look after the people around him.",
      "bn": "আশপাশের মানুষগুলোর যত্ন নেওয়ার ইচ্ছা থেকে তার মনে গভীর মমতা জেগে উঠেছিল।"
    }
  },
  "Compassionate": {
    "en": "Compassionate",
    "bn": "মমতাময়",
    "simple": {
      "en": "Understanding",
      "bn": "সহমর্মী"
    },
    "meaning": {
      "en": "Caring about others' suffering and wanting to help.",
      "bn": "অন্যের কষ্ট অনুভব করে তার কষ্ট কমানোর জন্য কিছু করতে চাওয়া।"
    },
    "example": {
      "en": "She felt compassionate toward her friend, wanting to ease their pain.",
      "bn": "বন্ধুর কষ্ট দেখে তার মনে সহমর্মিতা জাগল; সে চাইছিল বন্ধুটির যন্ত্রণা কিছুটা হলেও কমাতে।"
    }
  },
  "Sentimental": {
    "en": "Sentimental",
    "bn": "ভাবালু",
    "simple": {
      "en": "Soft",
      "bn": "নরম মনের"
    },
    "meaning": {
      "en": "Tender feelings tied to memories.",
      "bn": "পুরোনো স্মৃতি, সম্পর্ক বা আবেগপূর্ণ মুহূর্ত মনে করে মন নরম হয়ে আসা।"
    },
    "example": {
      "en": "He felt sentimental thinking about how far they had come together.",
      "bn": "তারা কতটা পথ একসঙ্গে পাড়ি দিয়েছে, তা ভাবতে গিয়ে তার মন স্মৃতিকাতর হয়ে উঠল।"
    }
  },
  "Tender": {
    "en": "Tender",
    "bn": "কোমল",
    "simple": {
      "en": "Gentle",
      "bn": "মৃদু / নরম"
    },
    "meaning": {
      "en": "Gentle and loving.",
      "bn": "কারও প্রতি কোমল, মমতাপূর্ণ ও স্নেহভরা অনুভূতি থাকা।"
    },
    "example": {
      "en": "She felt tender toward him, seeing his vulnerability for the first time.",
      "bn": "প্রথমবারের মতো তার দুর্বল দিকগুলো বুঝতে পেরে সে মানুষটির প্রতি আরও কোমল ও স্নেহশীল হয়ে উঠল।"
    }
  },
  "Nostalgic": {
    "en": "Nostalgic",
    "bn": "স্মৃতিকাতর",
    "simple": {
      "en": "Remembering",
      "bn": "স্মৃতিতে ফিরে যাওয়া"
    },
    "meaning": {
      "en": "Fondly remembering the past.",
      "bn": "অতীতের প্রিয় সময় বা সম্পর্কের কথা মনে করে মায়া ও মনখারাপ মেশানো অনুভূতি হওয়া।"
    },
    "example": {
      "en": "He felt nostalgic for the closeness they once shared.",
      "bn": "একসময় তাদের মধ্যে যে ঘনিষ্ঠতা ছিল, তা মনে করে তার মন অতীতের স্মৃতিতে ভরে উঠল।"
    }
  },
  "Grateful": {
    "en": "Grateful",
    "bn": "কৃতজ্ঞ",
    "simple": {
      "en": "Thankful",
      "bn": "কৃতজ্ঞ"
    },
    "meaning": {
      "en": "Thankful for something good.",
      "bn": "কেউ ভালো কিছু করেছে বা পাশে দাঁড়িয়েছে বলে মনে আন্তরিক কৃতজ্ঞতা অনুভব করা।"
    },
    "example": {
      "en": "She felt grateful for the people who had believed in her.",
      "bn": "যারা তার ওপর বিশ্বাস রেখেছিল, তাদের কথা ভেবে সে কৃতজ্ঞতা অনুভব করল।"
    },
    "whatNow": [
      "Write it down or tell the person. Expressed gratitude lifts both of you.",
      "Let this feeling soak in. Hold it for 15 seconds — that helps your brain remember it."
    ]
  },
  "Appreciative": {
    "en": "Appreciative",
    "bn": "কদরদান",
    "simple": {
      "en": "Grateful",
      "bn": "ধন্যবাদী"
    },
    "meaning": {
      "en": "Showing that you value something.",
      "bn": "কারও অবদান, যত্ন বা ছোট ছোট ভালো কাজের মূল্য বুঝতে পারা এবং তার কদর করা।"
    },
    "example": {
      "en": "He felt appreciative of the small kindnesses that held his life together.",
      "bn": "তার জীবনের কঠিন সময়গুলো পার করতে সাহায্য করা ছোট ছোট সদয় আচরণগুলোর মূল্য সে গভীরভাবে উপলব্ধি করেছিল।"
    }
  },
  "Thankful": {
    "en": "Thankful",
    "bn": "কৃতজ্ঞতাবোধে ভরা",
    "simple": {
      "en": "Glad",
      "bn": "আনন্দিত"
    },
    "meaning": {
      "en": "Glad and grateful.",
      "bn": "কোনো ভালো কিছু পাওয়া বা অপ্রত্যাশিত সুযোগ আসায় কৃতজ্ঞ বোধ করা।"
    },
    "example": {
      "en": "She felt thankful for a second chance she didn't expect.",
      "bn": "যে দ্বিতীয় সুযোগটি সে আশা করেনি, সেটি পেয়ে সে কৃতজ্ঞতা অনুভব করল।"
    }
  }
};
