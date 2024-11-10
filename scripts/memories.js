const originalMemList = [{
    id: 0,
    date: new Date(2024, 5, 27), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem1.jpg',
    memTitle: 'Photographer and Rugger',
    memQuestions: [
        'Who was the best player on the field?',
        'How did I embarass myself?',
        'What did Segun say to me? Was he correct?'
    ],
    memAnswerOptions: [
        ['Segun', 'Sam', 'Benja', 'Giver'],
        ['Getting caught flirting by my coach', 'Lurking with my shirt off', 'Spilling water in front of your mom', 'All of the above'],
        ['Watch out for Avery, Right', 'Watch out for Avery, Wrong', `I'm gonna try to steal your girl, Right`, `I'm gonna try to steal your girl, Wrong`]
    ],
    memCorrectAnswers: [
        'Sam',
        'All of the above',
        'Watch out for Avery, Wrong'
    ]
}, {
    id: 1,
    date: new Date(2024, 5, 28),
    memPhoto: 'dailyMems/dmem2.jpg',
    memTitle: 'Double Date',
    memQuestions: [
        'Most awkward part of the night?',
        'Best laugh?'
    ],
    memAnswerOptions: [
        [`Ben's questions`, 'The constant physcial gap between Lauren and Ben', 'Us paying together and them separate', 'The cheating scandal'],
        ['Dead kid at Van Leewans (will he ever reach out to us...)', 'Ben having to approach the table as a waiter', 'My awkward smile that you made sure to tell me you hate', `How we didn't realize we were pookies just yet`]
    ],
    memCorrectAnswers: [
        'Us paying together and them separate',
        'Ben having to approach the table as a waiter'
    ]
}, {
    id: 2,
    date: new Date(2024, 5, 29),
    memPhoto: 'dailyMems/dmem3.jpg',
    memTitle: 'Cards vs. Staples',
    memQuestions: [
        'What are we cracking up about?',
        'What did the best girlfriend in the world arrange for me that day?',
        `Who's the most attractive candid couple?`
    ],
    memAnswerOptions: [
        ['Greenwich clobbering Staples', 'How Zaddy had a box set up for us that weekend', 'Probably something about Vbej'],
        ['A chauffeur ride from Karen Hirsh', 'A seat in the Greenwich press box', 'A private escort in the golf cart', 'All of the above, of course'],
        ['Sam + Avery', 'Sam + Avery but me in green and you in red', 'Avery + Sam']
    ],
    memCorrectAnswers: [
        'Probably something about Vbej',
        'All of the above, of course',
        'Sam + Avery but me in green and you in red'
    ]
}, {
    id: 3,
    date: new Date(2024, 5, 30), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem4.jpg',
    memTitle: 'Goodbye GHS!',
    memQuestions: [
        'Who won most out of pocket?',
        'Best moment of the dinner?'
    ],
    memAnswerOptions: [
        ['Peter', 'Jen', 'Grandpa Hirsh', 'Allison'],
        ['You having a bathroom link with Brooke and others', 'Us popping champagne bottles', 'Opening my card with all of the cash under the table', 'Holding hands under the table']
    ],
    memCorrectAnswers: [
        'Jen',
        'Holding hands under the table'
    ]
}, {
    id: 4,
    date: new Date(2024, 6, 1),
    memPhoto: 'dailyMems/dmem5.JPG',
    memTitle: 'Valentines Fun in the Sun!',
    memQuestions: [
        'Was the trip to Lovers Beach the most fantastic and romantic surprise ever?',
        'What game did we play in the water?',
        'Was it everything you had dreamed of for your first Valentines Day physcially present with your boyfriend?'
    ],
    memAnswerOptions: [
        ['Yes', 'Of course yes!', '100% yes Sam you are the best most creative planner', 'Absolutely yes'],
        ['Mermaids', `First to touch the others' butt wins`, 'Categories'],
        ['Yes']
    ],
    memCorrectAnswers: [
        '100% yes Sam you are the best most creative planner',
        `First to touch the others' butt wins`,
        'Yes'
    ]
}, {
    id: 5,
    date: new Date(2024, 6, 2),
    memPhoto: 'dailyMems/dmem6.jpg',
    memTitle: 'Two Pookies',
    memQuestions: [
        'Why were we hanging out right before Nevis?'
    ],
    memAnswerOptions: [
        [`You're addicted to seeing me`, 'Be real, last time seeing Abby', `Cause we're pookies`]
    ],
    memCorrectAnswers: [
        'Be real, last time seeing Abby'
    ]
}, {
    id: 6,
    date: new Date(2024, 6, 3), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem7.JPG',
    memTitle: 'Go Heat!',
    memQuestions: [
        'Why were you frustrated most of the game?',
        'How many times did your mom comment she was a Knicks fan after the loss?',
        'Why do I let you make me a Miami sports fan?'
    ],
    memAnswerOptions: [
        ['Brunson was cooking the Heat', 'I could not manage to look good in a photo', 'Your iPhone 15 betrayed you', 'I was stinky'],
        ['0', '7', '10+', '1'],
        ['Zaddy treated me so I must', `I'm a bandwagon`, 'I love you']
    ],
    memCorrectAnswers: [
        'Your iPhone 15 betrayed you',
        '10+',
        'Zaddy treated me so I must'
    ]
}, {
    id: 7,
    date: new Date(2024, 6, 4),
    memPhoto: 'dailyMems/dmem8.jpg',
    memTitle: 'Nevis Porch Convos',
    memQuestions: [
        'Who creeped on you?',
        'What was the most exciting conversation we had about?',
        'Why you looking at me like that?'
    ],
    memAnswerOptions: [
        ['Irene', 'Me', 'Steve', 'Tim'],
        ['Storage space in Jersey', 'Kayaking', 'Cigars', 'Absolutely nothing was interesting'],
        ['Love and affection', 'Laughing at me', 'Laughing with me']
    ],
    memCorrectAnswers: [
        'Steve',
        'Absolutely nothing was interesting',
        'Love and affection'
    ]
}, {
    id: 8,
    date: new Date(2024, 6, 5),
    memPhoto: 'dailyMems/dmem9.jpg',
    memTitle: 'Puppies!',
    memQuestions: [
        'Who had the stinkiest tush?',
        'What did they rename Abby to?'
    ],
    memAnswerOptions: [
        ['Kitt', 'Sam', 'Abby', 'Avery'],
        ['Toffee', 'Tootsie', 'Caramel', 'Sweetie']
    ],
    memCorrectAnswers: [
        'Avery',
        'Tootsie'
    ]
}, {
    id: 9,
    date: new Date(2024, 6, 6),
    memPhoto: 'dailyMems/dmem10.JPG',
    memTitle: 'Final City Trip',
    memQuestions: [
        'Why did you origanlly put my hands on you for the photo?',
        'What did we do that night?',
        'Most flattering event of the evening?'
    ],
    memAnswerOptions: [
        ['You wanted me to match your freak', 'You were embarassed of your dresses wrinkles', 'You go mad for a hug'],
        ['Dance like no one was watching', 'Read and answer thoughtful cards', 'Get drunk and nasty', 'All of the above cause we are lit'],
        ['Me telling you you were gorgeous', 'Getting into Niagara with no questions (light work)', 'Photographer choosing us at Elsies (please tell me they posted us by now)']
    ],
    memCorrectAnswers: [
        'You were embarassed of your dresses wrinkles',
        'All of the above cause we are lit',
        'Photographer choosing us at Elsies (please tell me they posted us by now)'
    ]
}, {
    id: 10,
    date: new Date(2024, 6, 7), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem11.jpg',
    memTitle: 'Pit Stop!',
    memQuestions: [
        'What game did we play?',
        'Who is the best at every game we play?'
    ],
    memAnswerOptions: [
        ['Avoid getting your leg hairs pulled', 'Cornhole', 'Defend your plate from splitzies'],
        ['Sam', 'Neither we are equally good', 'Avery :(']
    ],
    memCorrectAnswers: [
        'Cornhole',
        'Avery :('
    ]
}, , {
    id: 11,
    date: new Date(2024, 6, 8),
    memPhoto: 'dailyMems/dmem12.jpg',
    memTitle: 'Sam Bday!',
    memQuestions: [
        'What did we splitzies?',
        'Was it Sams best birthday ever?',
        'Game played?'
    ],
    memAnswerOptions: [
        ['Hot honey chicken, schnitzel, biscuits', 'Pulled pork sandwich, hot honey chicken, biscuits', 'Burger, biscuits, mac and cheese'],
        ['Yes, he was sat next to pookie and was treated like a king by her', 'Mid', 'No lame af'],
        ['Incohearent', 'Poetry for Neanderthals', 'Cards']
    ],
    memCorrectAnswers: [
        'Pulled pork sandwich, hot honey chicken, biscuits',
        'Yes, he was sat next to pookie and was treated like a king by her',
        'Poetry for Neanderthals'
    ]
}, {
    id: 12,
    date: new Date(2024, 6, 9), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem13.jpg',
    memTitle: 'Mermaids!',
    memQuestions: [
        'Will Elizabeth and George ever see Sam and Avery again?',
        'Who touched your chest uncomfortably?',
        'What meal did we destroy after this monstrosity picture?'
    ],
    memAnswerOptions: [
        ['Hell no', 'Possibly', 'Yes, at Charlottes wedding when you are my plus one'],
        ['Me', 'Elizabeth', 'George', 'Ava'],
        ['Godzilla and manhattan rolls', 'Jerk chicken and margarita pizza', 'Dynamtie chicken and tuna poke']
    ],
    memCorrectAnswers: [
        'Yes, at Charlottes wedding when you are my plus one',
        'Elizabeth',
        'Dynamtie chicken and tuna poke'
    ]
}, {
    id: 13,
    date: new Date(2024, 6, 10),
    memPhoto: 'dailyMems/dmem14.jpg',
    memTitle: 'Four Sail',
    memQuestions: [
        'What was it that you said that lowkey weirded me out?'
    ],
    memAnswerOptions: [
        ['"I love you Sam"', `"You're ugly"`, '"My bikini bottoms are off, it feels nice" - then waves them in the air while swimming']
    ],
    memCorrectAnswers: [
        '"My bikini bottoms are off, it feels nice" - then waves them in the air while swimming'
    ]
}, {
    id: 14,
    date: new Date(2024, 6, 11),
    memPhoto: 'dailyMems/dmem15.jpg',
    memTitle: 'Mets vs. Yankees',
    memQuestions: [
        'Who won?',
        'What did you make me go across the stadium for?',
        'Most awkward point in the night?'
    ],
    memAnswerOptions: [
        ['Yankees', 'Mets', 'Me cause I got to spend the night with you'],
        ['Drinks', 'The bathroom', 'It was too cold in our seats', 'Chopped cheese'],
        ['The guy leaning two seats in front of us to stare at you', 'That same guy calling me your boyfriend', 'That same guy calling me ugly and below your league (he is correct about the league)']
    ],
    memCorrectAnswers: [
        'Yankees',
        'Chopped cheese',
        'That same guy calling me your boyfriend'
    ]
}, {
    id: 15,
    date: new Date(2024, 6, 12), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem16.jpg',
    memTitle: 'What Duties??',
    memQuestions: [
        'Where was Sam going?',
        'Why was Avery mentioned on the reasons a record breaking three times?'
    ],
    memAnswerOptions: [
        ['Canada', 'Nevis', 'Pennsylvania', 'Fart city'],
        ['She wanted me to stay badly', 'She is wifey', 'Did not matter, Millie needed to be fed!']
    ],
    memCorrectAnswers: [
        'Canada',
        'She is wifey'
    ]
}, {
    id: 16,
    date: new Date(2024, 6, 13),
    memPhoto: 'dailyMems/dmem17.jpg',
    memTitle: 'Double Date pt. 2!',
    memQuestions: [
        'What was Bens worst question?',
        'Why was this the best day ever?'
    ],
    memAnswerOptions: [
        ['What would you do if you were a tree', 'How would I best get rid of you', `What is everyone's favorite board game`],
        ['Lauren and Ben are great company', 'A day on the boat is always class', 'I finally summoned the courage to ask you out (you said yes)']
    ],
    memCorrectAnswers: [
        'How would I best get rid of you',
        'I finally summoned the courage to ask you out (you said yes)'
    ]
}, {
    id: 17,
    date: new Date(2024, 6, 14),
    memPhoto: 'dailyMems/dmem18.jpg',
    memTitle: 'Milkcraft!',
    memQuestions: [
        'What were you most mad with me for?'
    ],
    memAnswerOptions: [
        ['Never having milkcraft before', 'Looking silly in the picture and messing up the pose', 'Not getting a splitzies-able flavor']
    ],
    memCorrectAnswers: [
        'Looking silly in the picture and messing up the pose'
    ]
}, {
    id: 18,
    date: new Date(2024, 6, 15), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem19.jpg',
    memTitle: 'Day at Old Mill',
    memQuestions: [
        'Highlight of the day?',
        'Where did we go for dinner?',
        'Thoughts on the hair?'
    ],
    memAnswerOptions: [
        ['Laying on the beach without being spotted', 'Playing in the current', 'Sitting on that cute private bench', 'All of the above, perfect day'],
        ['Via Sforza', 'Walrus Alley', 'Tacombi'],
        ['Perfect, lovely!', 'Smashing!', 'Fatty fat boy has way too short hair', 'Splendid!']
    ],
    memCorrectAnswers: [
        'All of the above, perfect day',
        'Tacombi',
        'Fatty fat boy has way too short hair'
    ]
}, {
    id: 19,
    date: new Date(2024, 6, 16),
    memPhoto: 'dailyMems/dmem20.jpg',
    memTitle: 'Old Mill + Family',
    memQuestions: [
        'Worst moment?',
        'How many wooden pins did you hit in the game?',
        `Sam's favorite moment?`
    ],
    memAnswerOptions: [
        ['Me not letting you cover me in sand (I am the worst)', 'Nothing it was fantastic', 'My dad calling you the wrong name, several times'],
        ['0', '-1', '1 (nice try it did not count)', '5'],
        ['PLaying in current', 'Sitting on the paddle board and cooling your face with water', 'Skipping stones with my apprentice Avery', 'Laying with pookie']
    ],
    memCorrectAnswers: [
        'My dad calling you the wrong name, several times',
        '0',
        'Sitting on the paddle board and cooling your face with water'
    ]
}, {
    id: 20,
    date: new Date(2024, 6, 17),
    memPhoto: 'dailyMems/dmem21.jpg',
    memTitle: 'Avery Bday!',
    memQuestions: [
        'What did we have to eat for our meal?',
        'Why do I look so unhappy?'
    ],
    memAnswerOptions: [
        ['Nothing we are skinny queens', 'Chicken and waffle on a stick', 'Pasta from the parm wheel'],
        ['Lame time', `I don't know how to pose and I didn't want to get you mad cause I love you`, 'I hate you']
    ],
    memCorrectAnswers: [
        'Chicken and waffle on a stick',
        `I don't know how to pose and I didn't want to get you mad cause I love you`
    ]
}, {
    id: 21,
    date: new Date(2024, 6, 18), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem22.jpg',
    memTitle: 'Apple Picking',
    memQuestions: [
        'Why am I an idiot?',
        'Who broke the pallet in the pumpkin patch?',
        'My favorite part of the trip?'
    ],
    memAnswerOptions: [
        [`Didn't fill the bag of apples`, `Will always be an idiot compared to you and your genius using the corn to make a path through the mud`, 'Called the little girl, who was clearly a girl, buddy 17,000 times', `I'm not an idiot at all`],
        ['You (you could never)', 'Sam! Sam broke it!', 'That little rat who snitched on me'],
        ['Getting the pleasure of walking with you, holding your hand, and conversating', 'You forgetting the handmade bouquet we made for you and me getting an excuse to make a trip for you', 'The apple cider donut reward for all of our hard work', 'The lovely fall scenes']
    ],
    memCorrectAnswers: [
        'Called the little girl, who was clearly a girl, buddy 17,000 times',
        'Sam! Sam broke it!',
        'You forgetting the handmade bouquet we made for you and me getting an excuse to make a trip for you'
    ]
}, {
    id: 22,
    date: new Date(2024, 6, 19),
    memPhoto: 'dailyMems/dmem23.jpg',
    memTitle: 'Summary of ISD',
    memQuestions: [
        'Hardest part about the job?',
        'Best part about the job?',
        'Worst thing about this image?'
    ],
    memAnswerOptions: [
        ['Resisting from strangling the kids', 'You being tired and frustrated after coming off of a long day of school (save me)', 'Resisting a kiss from each other'],
        ['Insane paycheck', 'A cheeky excuse to see my beautiful girlfriend for what was sometimes only an hour', 'Learning how to work with precious kids'],
        ['Insane reach to connect the continent of Africa to MLKs I have a dream speech', 'Horrible artistic skills', 'Poor little starving boys and girls']
    ],
    memCorrectAnswers: [
        'Resisting a kiss from each other',
        'A cheeky excuse to see my beautiful girlfriend for what was sometimes only an hour',
        'Absurd connection from the continent of Africa to MLKs I have a dream speech'
    ]
}, {
    id: 23,
    date: new Date(2024, 6, 20),
    memPhoto: 'dailyMems/dmem24.jpg',
    memTitle: 'First Day on Nevis',
    memQuestions: [
        'Who got drunk first, and what was it on?',
        'Most fun activity at the beach?',
        'Best part of the day?'
    ],
    memAnswerOptions: [
        ['Charlotte, that brew', 'Sam, love', 'Avery, rum and ting', 'Pop, 7 millions martinis'],
        ['Playing in the waves', 'Building sandcastles', 'Kissing under the water (freaky)'],
        ['Celebrating our well over a year anniversary!', 'The excitement of the sleepover that was to come', 'How you swore you would leave the middle seat open but folded quickly', 'The dawn of a new adventure together']
    ],
    memCorrectAnswers: [
        'Avery, rum and ting',
        'Playing in the waves',
        'The excitement of the sleepover that was to come'
    ]
}, {
    id: 24,
    date: new Date(2024, 6, 21), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem25.jpg',
    memTitle: 'Sunset and My Boo',
    memQuestions: [
        'Best splitzies ever?',
        'Most memorable part of the day?'
    ],
    memAnswerOptions: [
        ['Chicken milanese and spicy penne', 'Eggs benedict and chocolate chip pancakes', 'Dynamite chicken and tuna poke bowl'],
        ['Getting to meet the lovely people from Jersey', 'Enjoying a lovely handheld, sunset beach walk together', 'Sandball fight with the littles']
    ],
    memCorrectAnswers: [
        'Dynamite chicken and tuna poke bowl',
        'Enjoying a lovely handheld, sunset beach walk together'
    ]
}, {
    id: 25,
    date: new Date(2024, 6, 22),
    memPhoto: 'dailyMems/dmem26.jpg',
    memTitle: 'Valentines Day Morning',
    memQuestions: [
        'Was this not the best suprise ever (you had no idea what was planned)?',
        'What was the parrots name that we spent thirty minutes trying to get a video of?',
        'What was the lovely drink we shared on the porch of the Botanical gardens?'
    ],
    memAnswerOptions: [
        ['Ew no, gross', 'Yes', 'Yes, YES, A MILLION TIME YES!'],
        ['Chester', 'Polly', 'Arturo', 'Freakbird'],
        ['Rum punch', 'Sorrel spritzer', 'None, there was no lovely drink Sam had to finish both drinks once again']
    ],
    memCorrectAnswers: [
        'Yes, YES, A MILLION TIME YES!',
        'Arturo',
        'None, there was no lovely drink Sam had to finish both drinks once again'
    ]
}, {
    id: 26,
    date: new Date(2024, 6, 23),
    memPhoto: 'dailyMems/dmem27.jpg',
    memTitle: 'Say Cheese!',
    memQuestions: [
        'Will we ever top this night?',
        'Only thing the night was missing?',
        'Who is the most gorgeeous, most beautiful girl in the world?'
    ],
    memAnswerOptions: [
        ['Never', 'Yes, when we go back soon!', 'Nope', `Of course, during Charlotte's wedding (locked in plus one)`],
        ['A calm, peaceful ending', 'A quick cheeky night swim', 'Possibly better tasting cheese'],
        ['My one and only boo']
    ],
    memCorrectAnswers: [
        'Yes, when we go back soon!',
        'A quick cheeky night swim',
        'My one and only boo'
    ]
}, {
    id: 27,
    date: new Date(2024, 6, 24), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem28.jpg',
    memTitle: 'True Love in a Photo',
    memQuestions: [
        'Most awkward part of the day?',
        'How I know you love me so dearly?',
        'When will we go back to IKEA?'
    ],
    memAnswerOptions: [
        ['Getting caught posted up like this', 'Our weird freaky IKEA conversations being overheard', 'The exchange of mimosas at breakfast beforehand', 'Your dad seeing us sneak a kiss in'],
        ['Your kind words', 'Your choosing to bring me to the most random of events, never stop', 'How you show me you miss me <3'],
        ['Hopefully in a few years time to get stuff for a place of our own', 'To level up zaddys apartment', 'Date night idea']
    ],
    memCorrectAnswers: [
        'The exchange of mimosas at breakfast beforehand',
        'Your choosing to bring me to the most random of events, never stop',
        'Hopefully in a few years time to get stuff for a place of our own'
    ]
}, {
    id: 28,
    date: new Date(2024, 6, 25),
    memPhoto: 'dailyMems/dmem29.jpg',
    memTitle: 'Boat Dinner Date',
    memQuestions: [
        'Scariest part of the evening?',
        'The decided worst purchased item from Citarellas?',
        'Best part about our time on the boat?'
    ],
    memAnswerOptions: [
        ['That one horrid photo of me that I cannot stand', 'You nearly running the boat aground', 'The dent to my wallet for just a few splitzies'],
        ['Assortment of pizzas', 'Chocolate cake', 'Little bite sized thingies, cannot remember what they were'],
        ['Conversation seems to flow on the boat', 'Holding each other in front of a beautiful view', 'Your display of preparation and seamanship skills as CAPITAN', 'All of the above, of course!']
    ],
    memCorrectAnswers: [
        'That one horrid photo of me that I cannot stand',
        'Little bite sized thingies, cannot remember what they were',
        'All of the above, of course!'
    ]
}, {
    id: 29,
    date: new Date(2024, 6, 26),
    memPhoto: 'dailyMems/dmem30.jpg',
    memTitle: 'Snuck in a Little Hangout',
    memQuestions: [
        'Whose crutch is that?',
        'Why do I not deserve you?',
        'Best part of the day?'
    ],
    memAnswerOptions: [
        ['What??? What crutch?', `Avery's, couldn't be she's not dramatic`, 'Sam, stupid crippled idiot ruining everything', 'Not sure, it was there when we got there'],
        ['You coming all that way to maximize', `You're glowing you're so gorgeous`, 'Too many reasons to count'],
        ['The extra few minutes we snuck in hanging out in the bottom of the hotel', 'Walking and talking together, what can ever beat it', 'Me getting asked if I was British in the corner store, biggest laugh ever for yuo']
    ],
    memCorrectAnswers: [
        'Sam, stupid crippled idiot ruining everything',
        'You coming all that way to maximize',
        'Walking and talking together, what can ever beat it'
    ]
}, {
    id: 30,
    date: new Date(2024, 6, 27), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem31.jpg',
    memTitle: 'We got that shit on',
    memQuestions: [
        'What was the cure to the illness I felt on this first night?',
        'What was so nice about this trip?',
        'Best part about our fires on the beach together?'
    ],
    memAnswerOptions: [
        ['You telling me I was fine', 'A few drinks', 'Some lovely time together and a few kisses'],
        ['We got more compatible at sleeping together, snuggly wubbly lives', 'Another preview at the best life living together', 'Ending and starting every day together', `I can't decide - all of it!`],
        ['My manly survival skills', 'The conversation that emerged from those silly cards', 'Whipped cream shots (I am so sorry I ruined them for you)', 'A firelit kiss']
    ],
    memCorrectAnswers: [
        'Some lovely time together and a few kisses',
        `I can't decide - all of it!`,
        'The conversation that emerged from those silly cards'
    ]
}, {
    id: 31,
    date: new Date(2024, 6, 28),
    memPhoto: 'dailyMems/dmem32.jpg',
    memTitle: 'Harvest Date Night',
    memQuestions: [
        'Best part about our date night?',
        'Our worst store purchase?',
        'Dark horse top part about the trip?'
    ],
    memAnswerOptions: [
        ['Our laughs and conversation', 'Cheeky candid photos of each other', 'The beautiful Harvest restaurant scene (even the monstrous fish)', 'All of the above, best dinner!'],
        ['Matching books for book club', 'The $30 portable smore roaster that probably remains in your car', 'Bananagrams (competition is a bad idea for us)'],
        ['Fires, drinks, and snacks on the beach', 'That lovely ocean water', 'Making meals together', 'Freak city (;']
    ],
    memCorrectAnswers: [
        'All of the above, best dinner!',
        'The $30 portable smore roaster that probably remains in your car',
        'Freak city (;'
    ]
}, {
    id: 32,
    date: new Date(2024, 6, 29),
    memPhoto: 'dailyMems/dmem33.jpg',
    memTitle: 'Cheeky Wash Up',
    memQuestions: [
        'Where did we come from?',
        'Why was it a significant night?'
    ],
    memAnswerOptions: [
        ['Ice cream at Van Leewens', 'Dinner at Gingerman', 'Field hockey banquet'],
        ['Another splendid night together', 'You know why ... ;)', 'We both did our homework first with no breaks!']
    ],
    memCorrectAnswers: [
        'Field hockey banquet',
        'You know why ... ;)'
    ]
}, {
    id: 33,
    date: new Date(2024, 6, 30), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem34.jpg',
    memTitle: 'Homework Sesh!',
    memQuestions: [
        `Why can't we ever get work done together?`,
        'Then why do we still try?'
    ],
    memAnswerOptions: [
        ['ADHD', 'A kiss is too much to resist', `You're too beautiful for me to focus`, 'Probably a combination of all'],
        ['Pure foolishness', `Sam's a pushover`, 'True love']
    ],
    memCorrectAnswers: [
        'Probably a combination of all',
        `Sam's a pushover`
    ]
}, {
    id: 34,
    date: new Date(2024, 6, 31),
    memPhoto: 'dailyMems/dmem35.jpg',
    memTitle: 'Day at the Salon',
    memQuestions: [
        'Hardest part of the day?',
        'What did I look like?',
        'Why am I eternally grateful for you?'
    ],
    memAnswerOptions: [
        ['Cutting that first bit of hair', 'The daunting plebe summer', 'Closing that damn door', 'Being unsatisfied with the possible last hug and kiss'],
        ['Brad Spitt', 'A shaved ballsack', 'Pookie squared'],
        [`You're out of my league`, 'You being willing to go into all of this with me', 'The way we can smile at each other like this']
    ],
    memCorrectAnswers: [
        'Closing that damn door',
        'Brad Spitt',
        'You being willing to go into all of this with me'
    ]
}, {
    id: 35,
    date: new Date(2024, 7, 1),
    memPhoto: 'dailyMems/dmem36.jpg',
    memTitle: 'Summary of our Relationship',
    memQuestions: [
        'Why are we laying on the floor?',
        'Will I forever take your saliva and boogies on my face?'
    ],
    memAnswerOptions: [
        ['Your weird passion for the floor', 'Seduction tactic', 'Wine and cheese night probably got the best of us'],
        ['Forever and always', `Ew no that's disgusting`, 'I will do what I must']
    ],
    memCorrectAnswers: [
        'Wine and cheese night probably got the best of us',
        'Forever and always'
    ]
}, {
    id: 36,
    date: new Date(2024, 7, 2), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem37.jpg',
    memTitle: 'Birthday Boos',
    memQuestions: [
        'What was my favorite gift to you?',
        'Hardest part about your special day?'
    ],
    memAnswerOptions: [
        ['The shoes (the correctly sized ones)', 'The ring that reminded me of the day I asked you to be my girlfriend (you said maybe)', 'My love'],
        ['Not buying you the world, I really wanted to', 'Holding back the urge to tell you I love you for the first time', 'Fighting for my life once your dad left from brunch']
    ],
    memCorrectAnswers: [
        'The ring that reminded me of the day I asked you to be my girlfriend (you said maybe)',
        'Fighting for my life once your dad left from brunch'
    ]
}, {
    id: 37,
    date: new Date(2024, 7, 3),
    memPhoto: 'dailyMems/dmem38.jpg',
    memTitle: 'Lip Gloss Haul',
    memQuestions: [
        'How much did you spend?',
        'What would we do for a kiss right now?',
        'Best part of the haul?'
    ],
    memAnswerOptions: [
        [`Only $30, it's only lip gloss`, `Money ain't a thing`, 'Approximately a whopping $120'],
        [`It's chill, I can wait`, `Anything, it's only gotten more special`, '400 million trips to Westport and back'],
        [`Complaining I didn't get enough of a taste to get a few more kisses`, 'Both of our lips would never be chapped again (what is yours is mine)', 'The lovely flavors']
    ],
    memCorrectAnswers: [
        'Approximately a whopping $120',
        `Anything, it's only gotten more special`,
        `Complaining I didn't get enough of a taste to get a few more kisses`
    ]
}, {
    id: 38,
    date: new Date(2024, 7, 4),
    memPhoto: 'dailyMems/dmem39.jpg',
    memTitle: 'You Make me Smile',
    memQuestions: [
        'What on earth could possibly be making me smile so wide?',
        'What did we do this night?',
        'Best part about the night?'
    ],
    memAnswerOptions: [
        ['A sweet treat', 'The movie we always pay such close attention to', 'Avery, my love'],
        [`Just another night of you staying later than you should've`, 'Holiday(s) party', 'Kiss and hug'],
        ['You helping to decorate the tree', 'Dancing to Christmas songs together', 'You being so excited to share your Hannukah with us', 'All of the above']
    ],
    memCorrectAnswers: [
        'Avery, my love',
        'Holiday(s) party',
        'All of the above'
    ]
}, {
    id: 39,
    date: new Date(2024, 7, 5), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem40.jpg',
    memTitle: 'We got Scammed!',
    memQuestions: [
        'Worst obstacle preventing us getting back to the train on time?',
        'What song was playing as he bought time driving in circles?',
        'Best destination of the evening?'
    ],
    memAnswerOptions: [
        ['Not wanting to leave the pretty lights', 'The sweet Jewish kids wanting to wish you a Happy Hannukah', 'That fucker driving in circles thinking he was slick'],
        ['All I Want for Christmas is You', 'Last Christmas', 'Santa Baby', `Baby it's cold outside`],
        ['The tree', 'Fortnite llama, duh', 'Yummy hot chocolate stand']
    ],
    memCorrectAnswers: [
        'That fucker driving in circles thinking he was slick',
        'All I Want for Christmas is You',
        'Yummy hot chocolate stand'
    ]
}, {
    id: 40,
    date: new Date(2024, 7, 6),
    memPhoto: 'dailyMems/dmem41.jpg',
    memTitle: 'Best Birthday Treat',
    memQuestions: [
        'What did we order that neither of us really even wanted?',
        'Who spoils me better than I could ever deserve?'
    ],
    memAnswerOptions: [
        ['Sushi', 'Spicy penne', 'The largest plate of chicken scarp you have ever seen'],
        ['No room for jokes - you']
    ],
    memCorrectAnswers: [
        'The largest plate of chicken scarp you have ever seen',
        'No room for jokes - you'
    ]
}, {
    id: 41,
    date: new Date(2024, 7, 7),
    memPhoto: 'dailyMems/dmem42.jpg',
    memTitle: 'A Day of Driving to Remember',
    memQuestions: [
        'Worst part of the day?',
        'What makes us so great?',
        'How did we end the night?'
    ],
    memAnswerOptions: [
        [`That we couldn't stay longer`, `The beautiful views and paths to see but Sam's bummy ankle interfering`, 'The daunting arrival of plebe summer (we did it though!)'],
        ['My patience to sit with you at Reformation for an hour', 'Our shared appreciation of just sitting together enjoying each other', 'Our ability to make the end of the trip the best day through spontaneous adventures'],
        ['A simple hug and kiss goodbye', `A cheeky, sneaky little treat at Longshore (the day wouldn't have been complete without it)`, 'You managed to persuade me to let you come with me to see my friends']
    ],
    memCorrectAnswers: [
        `The beautiful views and paths to see but Sam's bummy ankle interfering`,
        'Our ability to make the end of the trip the best day through spontaneous adventures',
        `A cheeky, sneaky little treat at Longshore (the day wouldn't have been complete without it)`
    ]
}]