function talk(){
    var know = {
    "Hi" : "Hello there, hope you having a good day !",
    "hi" : "Hello there, hope you having a good day !",
    "What can you do" : "I can chat with you and give answers to your questions",
    "what can you do" : "I can chat with you and give answers to your questions",
    "I am feeling stressed" : "Everyone passes through a phase in life, which makes you feel low and dull... Stay Calm and Distract your mind, you'll feel better",
    "i am feeling stressed" : "Everyone passes through a phase in life, which makes you feel low and dull... Stay Calm and Distract your mind, you'll feel better",
    "How to Remove stress" : "Try Meditation, Laugh more, Be Active, Do what you Enjoy !",
    "how to remove stress" : "Try Meditation, Laugh more, Be Active, Do what you Enjoy !",
    "What is Depression" : "feelings of emptiness, hopelessness, helplessness, and worthlessness. a deep sense of sadness. an inability to experience pleasure. irregular eating and sleeping. difficulties with concentration, memory, and decision- making.",
    "what is depression" : "feelings of emptiness, hopelessness, helplessness, and worthlessness. a deep sense of sadness. an inability to experience pleasure. irregular eating and sleeping. difficulties with concentration, memory, and decision- making.",
    "How are you" : "Bots don't have feelings, so... I am always happy ð",
    "how are you" : "Bots don't have feelings, so... I am always happy ð",
    "I am feeling sad" : "Plug in earphones and Listen to some Music, You'll feel better ð",
    "i am feeling sad" : "Plug in earphones and Listen to some Music, You'll feel better ð",
    "Tell me a joke" : "Sure, hope you like it...ã¤ã¤ã¤ã¤ã¤Joke - If you throw a stone randomly in Bangalore, chances are, it will hit either a Dog or a Software Engineer !! ððð",
    "tell me a joke" : "Sure, hope you like it...ã¤ã¤ã¤ã¤ã¤Joke - If you throw a stone randomly in Bangalore, chances are, it will hit either a Dog or a Software Engineer !! ððð",
    "more jokes" : "What do you call a fake Pasta ?ã¤ã¤ An impasta.ðð",
    "More jokes" : "What do you call a fake Pasta ?ã¤ã¤ An impasta.ðð",
    "Who are you" : "I am CheerBot your A.I Friend, here to Cheer you up ðð¤ ",
    "who are you" : "I am CheerBot your A.I Friend, here to cheer you up ðð¤ ",
    "I am feeling depressed" : "Don't Worry my friend, all things will be okay ð. Try to do things you love and get distracted. You can also get help with mental health issues by calling on :- 1-800-662-4357 . ",
    "i am feeling depressed" : "Don't Worry my friend, all things will be okay ð. Try to do things you love and get distracted. You can also get help with mental health issues by calling on :- 1-800-662-4357 . ",
    "" : "",
    "" : "",
    "Thanks for cheering me" : "No problem my friend ð",
    "thanks for cheering me" : "No problem my friend ð",
    "You are good" : "Thank You So Much ",
    "you are good" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon..",
    "bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }