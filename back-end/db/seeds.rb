# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command or created alongside the database with db:setup.
#
# Examples:
#
#   movies = Movie.create[{ name: 'Star Wars' }, { name: 'Lord of the Rings' }]
#   Character.createname: 'Luke', movie: movies.first
User.destroy_all
Language.destroy_all
Alphabet.destroy_all
Vowel.destroy_all
Vocab.destroy_all
Phrase.destroy_all
# Forum.destroy_all
# Interview.destroy_all
# Comment.destroy_all


# SEEDING anguage
Language.create(language:"Spanish");

# USERS
senada = User.create(name:"Senada Kadric", email: "senada23@yahoo.com",language_id: Language.first.id, password: "hello", user_quizzes_id:1)
hannah = User.create(name:"Hannah Kofkin", email: "hkofkin@gmail.com",language_id: Language.first.id,password: "hello", user_quizzes_id:2)
cristian = User.create(name:"Cristian Cedacero", email: "cristian.cedacero@gmail.com",language_id: Language.first.id,password: "hello", user_quizzes_id:3)
bashir = User.create(name:"Bashir", email: "bashiralhanshali@gmail.com",language_id: Language.first.id,password: "hello", user_quizzes_id:4)

# SEEDING Alphabet
alphabetList = "abcdefghijklmnopqrstuvwxyz".split'';
alphabetList.map {|letter| Alphabet.create(letter: letter)} 


# SEEDING VOWELS 
vowelList = "aeiou".split'';
vowelList.map {|vowel| Vowel.create(letter: vowel)}

# SEEDING VOCAB
most_common_english_words = ["a", "about", "all", "also", "and", "as", 
"at", "be", "because", "but", "by", "can", "come", "could", "day", 
"do", "even", "find", "first", "for", "from", "get", "give", "go", 
"have", "he", "her", "here", "him", "his", "how", "I", "if", "in", 
"into", "it", "its", "just", "know", "like", "look", "make", "man", 
"many", "me", "more", "my", "new", "no", "not", "now", "of", "on", "one",
 "only", "or", "other", "our", "out", "people", "say", "see", "she", 
 "so", "some", "take", "tell", "than", "that", "the", "their", "them", 
 "then", "there", "these", "they", "thing", "think", "this", "those",
  "time", "to", "two", "up", "use", "very", "want", "way", "we", "well", 
  "what", "when", "which", "who", "will", "with", "would", "year", "you",
  "your" ]
  most_common_english_translated = ["a", "sobre", "todos", "también", "y", "como",
    "en", "ser", "porque", "pero", "por", "puede", "venir", "podría", "día",
    "hacer", "incluso", "buscar", "primero", "para", "de", "obtener", "dar", "ir",
    "tengo", "él", "ella", "aquí", "él", "su", "cómo", "yo", "si", "en",
    "en", "eso", "su", "solo", "saber", "me gusta", "mirar", "hacer", "hombre",
    "muchos", "yo", "más", "mi", "nuevo", "no", "no", "ahora", "de", "en", "uno",
      "solo", "o", "otro", "nuestro", "fuera", "gente", "decir", "ver", "ella",
      "entonces", "algunos", "tomar", "decir", "que", "eso", "el", "su", "ellos",
      "entonces", "allí", "estos", "ellos", "cosa", "piensan", "esto", "esos",
       "tiempo", "hasta", "dos", "arriba", "uso", "mucho", "deseo", "camino", "nosotros", "bien",
       "qué", "cuándo", "cuál", "quién", "será", "con", "sería", "año", "usted",
       "tu"]


  most_common_english_words.each_with_index do |word, index|
      Vocab.create(word: word, wordSpanish: most_common_english_translated[index])
end
  # most_common_english_traslated.map{|word| }



# SEEDING PHRASES
# Starting the conversation
phrases = ["Excuse me.Is anyone sitting here?", 
"Is this seat free?",
"Sorry do you speak English?",
"Sorry, is this the right place?",
"Good morning",
"Good afternoon", 
"Good evening",
 "I\’m here to see ...",
 "I\’m here to meet ...",
"Sorry, I forgot to introduce myself",
"I should probably introduce myself",
"My name is,but please call me ....",
"I\’m from ...",
"Are you ...?",
"Im sorry, I didn’t catch your name.",
"Nice to meet you",
]
phrasesSpanish = ["Disculpe, ¿hay alguien sentado aquí?",
  "¿Está libre este asiento?",
  "¿Perdón Habla inglés?",
  "Lo siento, ¿es este el lugar correcto?",
  "Buenos días",
  "Buenas tardes",
  "Buena noches",
    "Estoy aquí para ver a ...",
    "Estoy aquí para encontrarme ...",
  "Lo siento, olvidé presentarme",
  "Probablemente debería presentarme",
  "Mi nombre es, pero por favor llámame ....",
  "Soy de ...",
  "Es usted ...?",
  "Lo siento, no entendí tu nombre",
  "Encantada de conocerte",]


phrases.each_with_index do |phrase, index|
  Phrase.create(sentence: phrase, sentenceSpanish: phrasesSpanish[index])
end
# I’ve been looking forward to meeting you too./ I’ve heard so much about you too."
# "
# Welcome back to…"
# "
# Thanks for coming all this way/ coming such a long way on such a cold day/ hot day/ humid day/ snowy day/… day."
# "
# Thanks for inviting me/ us to…."
# "
#  "
# "
# # Ending small talk/ Ending conversations"
# "
# # Transitions language then saying something nice about the conversation"
# "
# Well, it’s been great to talk but…"
# "
# So, it’s been lovely to catch up but…"
# "
# Okay then, I’d love to chat more/ hear more about that later but…"
# "
#  "
# "
# # Giving a reason for ending the small talk/ ending the conversation"
# "
# I’m afraid/ Unfortunately/ I’m sorry but I have another meeting at… o’clock so…"
# "
# I know you are very busy so…"
# "
# We have a lot to get through today so…"
# "
# We only have this room until twelve so…"
# "
#  "
# "
# # Getting down to business"
# "
# Do you have a minute to talk?/ Are you free to talk?"
# "
# As you know/ As I said in my email I just need to talk to you about…"
# "
#  "
# "
# # Reacting when the other person needs to end the conversation"
# "
# Of course I’ll let you get on then./ Sorry I won’t keep you any longer then."
# "
#  "
# "
# # Moving to another place/ Directing people/ Giving directions/ Leading people somewhere"
# "
# This way please./ After you./ Please follow me."
# "
#  "
# "
# # Introducing other people"
# "
# Have you met…?/ I don’t think you’ve met..."
# "
# I’d like to introduce you to/ Can I introduce you to my colleague/ my boss…?"
# "
# This is my/ the… John Smith."
# "
#  "
# "
# # Phrases like “Nice to meet you” at the end of the conversation"
# "
# It was really/ very/ so nice to meet you."
# "
# It was nice/ great meeting you."
# "
#  "
# "
# # Like “Nice to see you again”, but at the end of the conversation"
# "
# It was lovely/ great/ so nice to see you again."
# "
#  "
# "
# # Small talk at the end of a conversation"
# "
# Are you finished/ Have you finished for the day/ for the day/ for the week?"
# "
# Do you have many more meetings today?"
# "
# Do you have to go straight back to your office now/ after this?"
# "
# Do you have any plans for this evening/ for the weekend/ for…?"
# "
#  "
# "
# # Good wishes for something that the other person will do in the future"
# "
# I hope you/ Hope you have a good time/ good weekend/ good evening/ good time/ good trip."
# "
# Take care./ Bon voyage./ Have a safe journey back/ home."
# "
#  "
# "
# # Good wishes for other people"
# "
# Please pass on my best regards to…/ say “Hi” to… from me."
# "
#  "
# "
# # Mentioning future contact"
# "
# I hope we have the chance to meet again soon."
# "
# I look forward to seeing you/ hearing from you/ your call."
# "
# See you there"
# "
#  "
# "
# # Other friendly and polite language at the end of a conversation"
# "
# Thanks again for taking the time to come here today."
# "
# I hope you had a good time/ I hope it was worth the trip/ I hope…"
# "
# Thanks, that was really useful/ lovely/ really productive/ very stimulating/ a real eye opener/…"
# "
#  "
# "
# # Small talk"
# "
# Small talk when meeting for the first time"
# "
# Is this your first time here/ in…/ here in…?"
# "
# What do you do for a living?"
# "
# What does your company/ division/ department/ section/ team/… do?"
# "
# Where is your company based?/ Where are you based?/ Where do you work?/ Do you work near here?/ Is your office near here?/ Are you based near here?"
# "
# Who do you work for? What do you do there?"
# "
#  "
# "
# # Small talk with people you’ve met before"
# "
# What a coincidence!/ This is a nice surprise. I didn’t know that you were interested in…/ that you were in the area/ that you…"
# "
# Did you have a good/ nice/ fun weekend/ evening/ holiday?"
# "
# Have you been busy lately/ recently/ today/ this week?"
# "
# How has your day been/ week been so far?"
# "
# How was your long/ three-day weekend?"
# "
# How was your summer/ Xmas/ New Year/ Easter/ bank holiday/ vacation?"
# "
# How’s it going?/ How are things?/ How are you doing?/ How’s life treating you?"
# "
# How’s John doing/ getting on/ getting on with…?"
# "
# How’s work?"
# "
# How’s your project going?/ How’s… going?"
# "
# What are you working on at the moment?/ Are you still working on…?"
# "
#  "
# "
# # Small talk when meeting for the first time or again"
# "
# Did you have any problems getting here?/ Did you have any trouble finding us?"
# "
# How long are you here?/ How long will you be here?/ How long are you staying in… this time?/ Are you staying long?"
# "
# How was your flight from…/ to…?/ How was your journey here/ from…?"
# "
# How’s the weather outside/ outside now/ in…/ back in… now?/ Is it still…?"
# "
# It’s a bit/ rather/ quite/ really/ so humid/ cold/ hot/ grey/ crowded/ busy/…, isn’t it? Is it usually like this at this time of year?"
# "
# # Was the map that I sent okay?"
# "
# What brings you here today?/ What brings you to…?/ Are you here for/ to…?"
# "
# You must be really jet lagged. What time is it now in…?/ What’s the time difference between… and…?"
# "
#  "
# "
# # Answers to “How…?” questions"
# "
# Really great/ Pretty good/ Very well/ Not so/ too bad/ Fine"
# "
# Not so good/ Not so great."
# "
#  "
# "
# # Talking about your studies or company and job"
# "
# I’m studying for… at…"
# "
# I work for ABC Limited./ I work in the… department/ division/ section of ABC Limited."
# "
# I’m in charge of/ I’m responsible for…"
# "
#  "
# "
# # Not answering questions politely"
# "
# I’d rather not say if you don’t mind."
# "
# "
# # Asking the same question back to someone"
# "
# How about you?/ And you?/ What about you?"
# "
#  "
# "
# # Reacting to what people say"
# "
# Positive reactions reacting to good news, etc"
# "
# I’m happy/ relieved/ delighted to hear that."
# "
# That sounds great/ lovely/ delicious/ nice/ fantastic/ wonderful/ fabulous/ perfect/ ideal."
# "
#  "
# "
# # Negative reactions reacting to bad news, etc"
# "
# I’m sorry to hear that."
# "
# That’s a pity./ That’s a shame./ That’s too bad."
# "
# That sounds awful/ terrible/ unbearable/ stressful/ like a nightmare."
# "
#  "
# "
# # Active listening"
# "
# Encouraging someone to continue"
# "
# Go on."
# "
#  "
# "
# # Showing you’re listening/ Not listening in silence"
# "
# Mmmm hmmm."
# "
# Really?"
# "
#  "
# "
# # Changing topic"
# "
# Talking of…, that reminds me,…"
# "
#  "
# "
# # Offers"
# "
# Offering/ Helping making a guest comfortable, etc"
# "
# Would you like something to drink/ tea or coffee?"
# "
# Can I take your bags/ your coats/ your…?"
# "
# Please take a seat anywhere you like and she’ll come out and see you shortly."
# "
# Please make yourself at home. You can leave your coat/ bag/ stuff/… here/ over there/… if you like."
# "
# Please help yourself to sugar/ to…"
# "
#  "
# "
# # Responding to offers"
# "
# That would be great/ lovely/ a great help/… but…"
# "
# Thank you, that’s very kind but if you don’t mind, I’d prefer…"
# "
#  "
# "
# # Discussing business cards"
# "
# Do you have a business card on you?"
# "
# It’s all written on my business card. Let me give you one. Here you are./ Here you go."
# "
# Thanks. And here’s mine.  "
# "
# Oh, I see from your card that you…"

puts "=========================="
puts "~~~~~~~~~~SEEDED~~~~~~~~~~"
puts "=========================="
