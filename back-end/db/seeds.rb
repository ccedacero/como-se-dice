User.destroy_all
Language.destroy_all
Alphabet.destroy_all
Vowel.destroy_all
Vocab.destroy_all
Phrase.destroy_all
Answer.destroy_all
Question.destroy_all
# Forum.destroy_all
# Interview.destroy_all
# Comment.destroy_all


# SEEDING language
Language.create(language:"Spanish");

# USERS

cristian = User.create(username:"ccedacero", email: "ccedacero@gmail.com",password: "hello")

# SEEDING Alphabet + url 
alphabetList = "abcdefghijklmnopqrstuvwxyz".split'';
alphabetList.map {|letter| Alphabet.create(letter: letter, letterUrl:"https://comosedice.s3.amazonaws.com/Alphabet/#{letter+letter}.mp3")} 


# SEEDING VOWELS + url
vowelList = "aeiou".split'';
vowelList.map {|vowel| Vowel.create(letter: vowel, letterUrl:"https://comosedice.s3.amazonaws.com/Vowels/#{vowel}.mp3")}

# Seeding PAYVOCAB + url
pay = ["Day shift","Afternoon shift", "Evening shift", "Night shift", "Overtime pay", "Overtime hours", "Break time", "Take a break", "We pay by the hour", "Pay", "Salary", "Hours", "The clock", "A second", "A minute", "An hour", "A day", "A week", "A month", "A year", "On time", "Just in time", "Punctual", "Noon", "Midnight", "Calendar", "We pay", "We pay once a week", "We pay every two weeks", "We pay every fifteen days", "We pay once a month", "How many hours did you work", "We do not any work available", "Can you come in at seven?", "Here is your check", "Stop working at five"]
pago = ["Turno de día","Turno de tarde", "Turno del atardecer", "Turno de noche", "Pago de horas extras", "Horas extras", "Tiempo de descanso", "Descanso", "Pagamos por hora", "Pago", "Salario", "Horas", "Reloj", "Un segundo", "Un minuto", "Una hora", "Un día", "Una semana", "Un mes", "Un año", "A tiempo", "Justo a tiempo", "Puntual", "Mediodía", "Medianoche", "Calendario", "Pagamos", "Pagamos una vez a la semana", "Pagamos cada dos semanas", "Pagamos cada quince días", "Pagamos una vez al mes", "¿Cuántas horas trabajó?", "No tenemos trabajo disponible", "¿Puede venir a las siete?", "Aquí está su cheque", "Deje de trabajar a las cinco"]
  pay.each_with_index do |word, index|
      Vocab.create(word: word, wordSpanish: pago[index],wordUrl: "https://comosedice.s3.amazonaws.com/Pay/#{word}.mp3", category: "payments")
  end

# Formatting info below
# proper.split(",")
# proper = proper.map(wrd => wrd[0].toUpperCase()+wrd.slice(1))
# proper = proper.map(wrd => wrd[0]=== " "? wrd.slice(1) : wrd)
# Get amazon titles with below 
# titles = document.querySelectorAll("table")[0].children[1].querySelectorAll("a").forEach(entry => titleArr.push(entry.innerText))
# arr.map(wrd => wrd.slice(0,-4))

# Seeding GREETINGS + url
greetings = ["Hello", "Nice to meet you!", "The pleasure is mine", "Good morning", "Good afternoon", "Good night", "See you tomorrow", "We’ll see you", "See you soon", "It has been a pleasure", "Likewise", "Goodbye!", "How are you?", "How have you been?", "How is your family?", "You’re welcome!", "Very well, Thank you"]
saludos = ["Hola", "Gusto en conocerte!", "El placer es mío", "Buenos días", "Buenas tardes", "Buenas noches", "Hasta mañana", "Nos vemos", "Hasta pronto", "Ha sido un placer", "Igualmente", "¡Adiós!", "¿Cómo has estado?", "¿Cómo está tu familia?", "¡De nada!", "Muy bien, Gracias"]

 greetings.each_with_index do |word, index|
  Vocab.create(word: word, wordSpanish: saludos[index], wordUrl: "https://comosedice.s3.amazonaws.com/Greetings/#{word}.mp3", category: "greetings")
  end


  # SEEDING COMPLIMENTS + url 
  compliments = ["Good", "Very Good", "Wonderful!", "Great!", "Fantastic!", "Well done!", "Perfect!", "Pretty", "Beautiful!", "Congratulations!", "Best Wishes", "You do good work!", "I like your work", "You are a good worker!", "Well done!"]
  alabanzas = ["Bien", "Muy Bien", "Maravilloso!", "Estupendo!", "¡Fantástico!", "¡Bien hecho!", "¡Perfecto!", "¡Bonito!/Bello!", "¡Hermoso!", "¡Felicitaciones!", "¡Mis mejores deseos!", "¡Haces buen trabajo!", "Me gusta tu trabajo", "Tu eres ¡un buen trabajador!", "¡Bien hecho!"]
  compliments.each_with_index do |word, index|
    Vocab.create(word: word, wordSpanish: alabanzas[index],wordUrl: "https://comosedice.s3.amazonaws.com/Praises/#{word}.mp3" , category: "compliments")
  end

# SEEDING QUIZES!!!  
Test.create(name: "Prueba Sobre Vocabulario de Pago", no_of_questions:7);

  TestQuestion.create(test_id:Test.first.id, question_id:nil)
  # Need to add Question Category  
  
  Question.create(question:"Como se dice Turno del atardecer?")
  options =["Day shift","Afternoon shift","Evening shift","Night shift"]
  options.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}
  ans = "Evening shift"
  updateQ = Question.last.answers.select do |a|
    a.answer === ans
  end
  updateQ[0].update(is_correct: true)


  Question.create(question:"Que significa 'Overtime pay'?")
  options1 = ["Pago","Horas extras", "Pago de horas extras", "Tiempo de descanso",]
  options1.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}
  
  ans = "Pago de horas extras"
  updateQ = Question.last.answers.select do |a|
    a.answer === ans
  end
  updateQ[0].update(is_correct: true)

  Question.create(question:"Como se dice 'Tiempo de descanso?'")
  options2 =["Break time", "Take a break", "I need a break", "Lunch"]
  options2.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

  ans = "Break time"
  updateQ = Question.last.answers.select do |a|
    a.answer === ans
  end
  updateQ[0].update(is_correct: true)

  Question.create(question:"Como se dice reloj?")
  options3 =["Watch","Clock","Time","Hour"]
  options3.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

  ans = "Clock"
  updateQ = Question.last.answers.select do |a|
    a.answer === ans
  end
  updateQ[0].update(is_correct: true)

  Question.create(question: "Cual de las siguientes palabras no tiene que ver con salario o pago?")
  options4 =["We pay once a month","We pay every fifteen days","Here is your check","Punctual"]
  options4.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

  ans = "Punctual"
  updateQ = Question.last.answers.select do |a|
    a.answer === ans
  end
  updateQ[0].update(is_correct: true)

  Question.create(question:"Que significa 'How many hours did you work' ")
  options5 =["No tenemos trabajo disponible","Puede venir a las siete?","¿Cuántas horas trabajó?","Stop working at five"]
  options5.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

  ans = "¿Cuántas horas trabajó?"
  updateQ = Question.last.answers.select do |a|
    a.answer === ans
  end
  updateQ[0].update(is_correct: true)
  
  Question.create(question: "Como se dice 'Pagamos cada dos semanas'")
  options =["We pay every week","We pay every two weeks","We pay evey month","We pay by the hour"]
  options.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

  ans = "We pay every two weeks"
  updateQ = Question.last.answers.select do |a|
    a.answer === ans
  end
  updateQ[0].update(is_correct: true)

# phrases.each_with_index do |phrase, index|
#   Phrase.create(sentence: phrase, sentenceSpanish: phrasesSpanish[index])
# end

puts "=========================="
puts "~~~~~~~~~~SEEDED~~~~~~~~~~"
puts "=========================="

# SEEDING VOCAB 
# most_common_english_words = ["a", "about", "all", "also", "and", "as", 
# "at", "be", "because", "but", "by", "can", "come", "could", "day", 
# "do", "even", "find", "first", "for", "from", "get", "give", "go", 
# "have", "he", "her", "here", "him", "his", "how", "I", "if", "in", 
# "into", "it", "its", "just", "know", "like", "look", "make", "man", 
# "many", "me", "more", "my", "new", "no", "not", "now", "of", "on", "one",
#  "only", "or", "other", "our", "out", "people", "say", "see", "she", 
#  "so", "some", "take", "tell", "than", "that", "the", "their", "them", 
#  "then", "there", "these", "they", "thing", "think", "this", "those",
#   "time", "to", "two", "up", "use", "very", "want", "way", "we", "well", 
#   "what", "when", "which", "who", "will", "with", "would", "year", "you",
#   "your" ]
#   most_common_english_translated = ["a", "sobre", "todos", "también", "y", "como",
#     "en", "ser", "porque", "pero", "por", "puede", "venir", "podría", "día",
#     "hacer", "incluso", "buscar", "primero", "para", "de", "obtener", "dar", "ir",
#     "tengo", "él", "ella", "aquí", "él", "su", "cómo", "yo", "si", "en",
#     "en", "eso", "su", "solo", "saber", "me gusta", "mirar", "hacer", "hombre",
#     "muchos", "yo", "más", "mi", "nuevo", "no", "no", "ahora", "de", "en", "uno",
#       "solo", "o", "otro", "nuestro", "fuera", "gente", "decir", "ver", "ella",
#       "entonces", "algunos", "tomar", "decir", "que", "eso", "el", "su", "ellos",
#       "entonces", "allí", "estos", "ellos", "cosa", "piensan", "esto", "esos",
#        "tiempo", "hasta", "dos", "arriba", "uso", "mucho", "deseo", "camino", "nosotros", "bien",
#        "qué", "cuándo", "cuál", "quién", "será", "con", "sería", "año", "usted",
      #  "tu"]


# phrases = ["Excuse me.Is anyone sitting here?", 
  # "Is this seat free?",
  # "Sorry do you speak English?",
  # "Sorry, is this the right place?",
  # "Good morning",
  # "Good afternoon", 
  # "Good evening",
  #  "I\’m here to see ...",
  #  "I\’m here to meet ...",
  # "Sorry, I forgot to introduce myself",
  # "I should probably introduce myself",
  # "My name is,but please call me ....",
  # "I\’m from ...",
  # "Are you ...?",
  # "Im sorry, I didn’t catch your name.",
  # "Nice to meet you",
  # ]
  # phrasesSpanish = ["Disculpe, ¿hay alguien sentado aquí?",
  #   "¿Está libre este asiento?",
  #   "¿Perdón Habla inglés?",
  #   "Lo siento, ¿es este el lugar correcto?",
  #   "Buenos días",
  #   "Buenas tardes",
  #   "Buena noches",
  #     "Estoy aquí para ver a ...",
  #     "Estoy aquí para encontrarme ...",
  #   "Lo siento, olvidé presentarme",
  #   "Probablemente debería presentarme",
  #   "Mi nombre es, pero por favor llámame ....",
  #   "Soy de ...",
  #   "Es usted ...?",
  #   "Lo siento, no entendí tu nombre",
  #   "Encantada de conocerte"]