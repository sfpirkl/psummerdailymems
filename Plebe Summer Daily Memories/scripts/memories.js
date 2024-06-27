const memList = [{
    date: new Date(2024, 5, 26), //months are zero based so 5 is june
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
    date: new Date(2024, 6, 18), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem22.jpg',
    memTitle: 'Apple Picking',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['a1', 'a2', 'a3', 'a4'],
        ['a1', 'a2', 'a3', 'a4'],
        ['a1', 'a2', 'a3', 'a4']
    ],
    memCorrectAnswers: [
        'a1',
        'a2',
        'a3'
    ]
}, {
    date: new Date(2024, 6, 19),
    memPhoto: 'dailyMems/dmem23.jpg',
    memTitle: 'Summary of ISD',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['1a1', '1a2', '1a3', '1a4'],
        ['2a1', '2a2', '2a3', '2a4'],
        ['3a1', '3a2', '3a3', '3a4']
    ],
    memCorrectAnswers: [
        '1a1',
        '2a2',
        '3a3'
    ]
}, {
    date: new Date(2024, 6, 20),
    memPhoto: 'dailyMems/dmem24.jpg',
    memTitle: 'First Day on Nevis',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['1a1', '1a2', '1a3', '1a4'],
        ['2a1', '2a2', '2a3', '2a4'],
        ['3a1', '3a2', '3a3', '3a4']
    ],
    memCorrectAnswers: [
        '1a1',
        '2a2',
        '3a3'
    ]
}, {
    date: new Date(2024, 6, 21), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem25.jpg',
    memTitle: 'Sunset and My Boo',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['a1', 'a2', 'a3', 'a4'],
        ['a1', 'a2', 'a3', 'a4'],
        ['a1', 'a2', 'a3', 'a4']
    ],
    memCorrectAnswers: [
        'a1',
        'a2',
        'a3'
    ]
}, {
    date: new Date(2024, 6, 22),
    memPhoto: 'dailyMems/dmem26.jpg',
    memTitle: 'Valentines Day Morning',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['1a1', '1a2', '1a3', '1a4'],
        ['2a1', '2a2', '2a3', '2a4'],
        ['3a1', '3a2', '3a3', '3a4']
    ],
    memCorrectAnswers: [
        '1a1',
        '2a2',
        '3a3'
    ]
}, {
    date: new Date(2024, 6, 23),
    memPhoto: 'dailyMems/dmem27.jpg',
    memTitle: 'Say Cheese!',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['1a1', '1a2', '1a3', '1a4'],
        ['2a1', '2a2', '2a3', '2a4'],
        ['3a1', '3a2', '3a3', '3a4']
    ],
    memCorrectAnswers: [
        '1a1',
        '2a2',
        '3a3'
    ]
}, {
    date: new Date(2024, 6, 24), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem28.jpg',
    memTitle: 'True Love in a Photo',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['a1', 'a2', 'a3', 'a4'],
        ['a1', 'a2', 'a3', 'a4'],
        ['a1', 'a2', 'a3', 'a4']
    ],
    memCorrectAnswers: [
        'a1',
        'a2',
        'a3'
    ]
}, {
    date: new Date(2024, 6, 25),
    memPhoto: 'dailyMems/dmem29.jpg',
    memTitle: 'Boat Dinner Date',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['1a1', '1a2', '1a3', '1a4'],
        ['2a1', '2a2', '2a3', '2a4'],
        ['3a1', '3a2', '3a3', '3a4']
    ],
    memCorrectAnswers: [
        '1a1',
        '2a2',
        '3a3'
    ]
}, {
    date: new Date(2024, 6, 26),
    memPhoto: 'dailyMems/dmem30.jpg',
    memTitle: 'Snuck in a Little Hangout',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['1a1', '1a2', '1a3', '1a4'],
        ['2a1', '2a2', '2a3', '2a4'],
        ['3a1', '3a2', '3a3', '3a4']
    ],
    memCorrectAnswers: [
        '1a1',
        '2a2',
        '3a3'
    ]
}, {
    date: new Date(2024, 6, 27), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem31.jpg',
    memTitle: 'We got that shit on',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['a1', 'a2', 'a3', 'a4'],
        ['a1', 'a2', 'a3', 'a4'],
        ['a1', 'a2', 'a3', 'a4']
    ],
    memCorrectAnswers: [
        'a1',
        'a2',
        'a3'
    ]
}, {
    date: new Date(2024, 6, 28),
    memPhoto: 'dailyMems/dmem32.jpg',
    memTitle: 'Harvest Date Night',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['1a1', '1a2', '1a3', '1a4'],
        ['2a1', '2a2', '2a3', '2a4'],
        ['3a1', '3a2', '3a3', '3a4']
    ],
    memCorrectAnswers: [
        '1a1',
        '2a2',
        '3a3'
    ]
}, {
    date: new Date(2024, 6, 29),
    memPhoto: 'dailyMems/dmem33.jpg',
    memTitle: 'Cheeky Wash Up',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['1a1', '1a2', '1a3', '1a4'],
        ['2a1', '2a2', '2a3', '2a4'],
        ['3a1', '3a2', '3a3', '3a4']
    ],
    memCorrectAnswers: [
        '1a1',
        '2a2',
        '3a3'
    ]
}, {
    date: new Date(2024, 6, 30), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem34.jpg',
    memTitle: 'Homework Sesh!',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['a1', 'a2', 'a3', 'a4'],
        ['a1', 'a2', 'a3', 'a4'],
        ['a1', 'a2', 'a3', 'a4']
    ],
    memCorrectAnswers: [
        'a1',
        'a2',
        'a3'
    ]
}, {
    date: new Date(2024, 6, 31),
    memPhoto: 'dailyMems/dmem35.jpg',
    memTitle: 'Day at the Salon',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['1a1', '1a2', '1a3', '1a4'],
        ['2a1', '2a2', '2a3', '2a4'],
        ['3a1', '3a2', '3a3', '3a4']
    ],
    memCorrectAnswers: [
        '1a1',
        '2a2',
        '3a3'
    ]
}, {
    date: new Date(2024, 7, 1),
    memPhoto: 'dailyMems/dmem36.jpg',
    memTitle: 'Summary of our Relationship',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['1a1', '1a2', '1a3', '1a4'],
        ['2a1', '2a2', '2a3', '2a4'],
        ['3a1', '3a2', '3a3', '3a4']
    ],
    memCorrectAnswers: [
        '1a1',
        '2a2',
        '3a3'
    ]
}, {
    date: new Date(2024, 7, 2), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem37.jpg',
    memTitle: 'Birthday Boos',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['a1', 'a2', 'a3', 'a4'],
        ['a1', 'a2', 'a3', 'a4'],
        ['a1', 'a2', 'a3', 'a4']
    ],
    memCorrectAnswers: [
        'a1',
        'a2',
        'a3'
    ]
}, {
    date: new Date(2024, 7, 3),
    memPhoto: 'dailyMems/dmem38.jpg',
    memTitle: 'Lip Gloss Haul',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['1a1', '1a2', '1a3', '1a4'],
        ['2a1', '2a2', '2a3', '2a4'],
        ['3a1', '3a2', '3a3', '3a4']
    ],
    memCorrectAnswers: [
        '1a1',
        '2a2',
        '3a3'
    ]
}, {
    date: new Date(2024, 7, 4),
    memPhoto: 'dailyMems/dmem39.jpg',
    memTitle: 'You Make me Smile',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['1a1', '1a2', '1a3', '1a4'],
        ['2a1', '2a2', '2a3', '2a4'],
        ['3a1', '3a2', '3a3', '3a4']
    ],
    memCorrectAnswers: [
        '1a1',
        '2a2',
        '3a3'
    ]
}, {
    date: new Date(2024, 7, 5), //months are zero based so 5 is june
    memPhoto: 'dailyMems/dmem40.jpg',
    memTitle: 'We got Scammed!',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['a1', 'a2', 'a3', 'a4'],
        ['a1', 'a2', 'a3', 'a4'],
        ['a1', 'a2', 'a3', 'a4']
    ],
    memCorrectAnswers: [
        'a1',
        'a2',
        'a3'
    ]
}, {
    date: new Date(2024, 7, 6),
    memPhoto: 'dailyMems/dmem41.jpg',
    memTitle: 'Best Birthday Treat',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['1a1', '1a2', '1a3', '1a4'],
        ['2a1', '2a2', '2a3', '2a4'],
        ['3a1', '3a2', '3a3', '3a4']
    ],
    memCorrectAnswers: [
        '1a1',
        '2a2',
        '3a3'
    ]
}, {
    date: new Date(2024, 7, 7),
    memPhoto: 'dailyMems/dmem42.jpg',
    memTitle: 'A Day of Driving to Remember',
    memQuestions: [
        'q1',
        'q2',
        'q3'
    ],
    memAnswerOptions: [
        ['1a1', '1a2', '1a3', '1a4'],
        ['2a1', '2a2', '2a3', '2a4'],
        ['3a1', '3a2', '3a3', '3a4']
    ],
    memCorrectAnswers: [
        '1a1',
        '2a2',
        '3a3'
    ]
}]