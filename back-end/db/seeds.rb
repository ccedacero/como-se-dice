# User.destroy_all
# Alphabet.destroy_all
# Vowel.destroy_all
# Vocab.destroy_all
# Phrase.destroy_all
# Answer.destroy_all
# Question.destroy_all
# Test.destroy_all
# Result.destroy_all
# UserAnswer.destroy_all
# Forum.destroy_all
# Interview.destroy_all
# Comment.destroy_all


# SEEDING language
# Language.create(language:"Spanish");

# USERS

# cristian = User.create(username:"ccedacero", email: "ccedacero@gmail.com",password: "hello")

# SEEDING Alphabet + url 
# alphabetList = "abcdefghijklmnopqrstuvwxyz".split'';
# alphabetList.map {|letter| Alphabet.create(word: letter, wordUrl:"https://comosedice.s3.amazonaws.com/Alphabet/#{letter+letter}.mp3")} 


# SEEDING VOWELS + url
# vowelList = "aeiou".split'';
# vowelList.map {|vowel| Vowel.create(word: vowel, wordUrl:"https://comosedice.s3.amazonaws.com/Vowels/#{vowel}.mp3")}

# Seeding PAYVOCAB + url
# pay = ["Day shift","Afternoon shift", "Evening shift", "Night shift", "Overtime pay", "Overtime hours", "Break time", "Take a break", "We pay by the hour", "Pay", "Salary", "Hours", "The clock", "A second", "A minute", "An hour", "A day", "A week", "A month", "A year", "On time", "Just in time", "Punctual", "Noon", "Midnight", "Calendar", "We pay", "We pay once a week", "We pay every two weeks", "We pay every fifteen days", "We pay once a month", "How many hours did you work", "We do not any work available", "Can you come in at seven?", "Here is your check", "Stop working at five"]
# pago = ["Turno de día","Turno de tarde", "Turno del atardecer", "Turno de noche", "Pago de horas extras", "Horas extras", "Tiempo de descanso", "Descanso", "Pagamos por hora", "Pago", "Salario", "Horas", "Reloj", "Un segundo", "Un minuto", "Una hora", "Un día", "Una semana", "Un mes", "Un año", "A tiempo", "Justo a tiempo", "Puntual", "Mediodía", "Medianoche", "Calendario", "Pagamos", "Pagamos una vez a la semana", "Pagamos cada dos semanas", "Pagamos cada quince días", "Pagamos una vez al mes", "¿Cuántas horas trabajó?", "No tenemos trabajo disponible", "¿Puede venir a las siete?", "Aquí está su cheque", "Deje de trabajar a las cinco"]
#   pay.each_with_index do |word, index|
#       Vocab.create(word: word, wordSpanish: pago[index],wordUrl: "https://comosedice.s3.amazonaws.com/Pay/#{word}.mp3", category: "payments")
#   end

# Formatting info below
# proper.split(",")
# proper = proper.map(wrd => wrd[0].toUpperCase()+wrd.slice(1))
# proper = proper.map(wrd => wrd[0]=== " "? wrd.slice(1) : wrd)

# Get amazon titles with below 
# titles = document.querySelectorAll("table")[0].children[1].querySelectorAll("a").forEach(entry => titleArr.push(entry.innerText))
# arr.map(wrd => wrd.slice(0,-4))

# Use this to format from Google Translate!!!
# str.split(",").map(wrd => wrd[0]=== " " ? wrd.slice(1) : wrd).map(wrd=> wrd[0].toUpperCase() + wrd.slice(1))

# Seeding GREETINGS + url - had small issue at goodbye- should be good after migration again
# greetings = ["Hello", "Nice to meet you!", "The pleasure is mine", "Good morning", "Good afternoon", "Good night", "See you tomorrow", "We’ll see you", "See you soon", "It has been a pleasure", "Likewise", "Goodbye!", "How are you?", "How have you been?", "How is your family?", "You’re welcome!", "Very well, Thank you"]
# saludos = ["Hola", "Gusto en conocerte!", "El placer es mío", "Buenos días", "Buenas tardes", "Buenas noches", "Hasta mañana", "Nos vemos", "Hasta pronto", "Ha sido un placer", "Igualmente", "¡Adiós!", "¿Cómo has estado?", "¿Cómo está tu familia?", "¡De nada!", "Muy bien, Gracias"]

#  greetings.each_with_index do |word, index|
#   Vocab.create(word: word, wordSpanish: saludos[index], wordUrl: "https://comosedice.s3.amazonaws.com/Greetings/#{word}.mp3", category: "greetings")
#   end


  # SEEDING COMPLIMENTS + url 
  # compliments = ["Good", "Very Good", "Wonderful!", "Great!", "Fantastic!", "Well done!", "Perfect!", "Pretty", "Beautiful!", "Congratulations!", "Best Wishes", "You do good work!", "I like your work", "You are a good worker!", "Well done!"]
  # alabanzas = ["Bien", "Muy Bien", "Maravilloso!", "Estupendo!", "¡Fantástico!", "¡Bien hecho!", "¡Perfecto!", "¡Bonito!/Bello!", "¡Hermoso!", "¡Felicitaciones!", "¡Mis mejores deseos!", "¡Haces buen trabajo!", "Me gusta tu trabajo", "Tu eres ¡un buen trabajador!", "¡Bien hecho!"]
  # compliments.each_with_index do |word, index|
  #   Vocab.create(word: word, wordSpanish: alabanzas[index],wordUrl: "https://comosedice.s3.amazonaws.com/Praises/#{word}.mp3" , category: "compliments")
  # end

  # SEEDING CLIMATE + URL 
  # climate = ["It is sunny", "It is cloudy", "It is rainy", "It is raining", "It is hot", "It is wet", "It is humid", "It is cold", "It’s windy", "It’s dusty", "It’s dusty", "I am hot", "I am cold", "Are you hot\?", "Are you cold?", "Are you tired?", "It froze", "It hailed", "It snowed", "It rained", "It will rain", "It will snow", "It will freeze", "It will be overcast", "Will it rain?", "Will it freeze?", "Will it snow?", "We will not work if it rains", "It is too wet to work", "There is too much mud"]
  # clima = ["Hace sol", "Está nublado", "Está lluvioso", "Está lloviendo", "Hace calor", "Está mojado", "Está húmedo", "Hace frío", "Hace viento", "Hay una polvadera", "Está polvoriento", "Tengo calor", "Tengo frío", "Tiene calor?", "¿Tiene frío?", "¿Está cansado?", "Helo", "Granizó", "Nevó", "Llovió", "Lloverá", "Nevará", "Va a helar", "Estará nublado", "¿lloverá?", "¿Ira a helar?", "¿Ira a nevar?", "No trabajaremos si llueve", "Está demasiado mejado para trabajar", "Hay mucho lodo"]
  # climate.each_with_index do |word, index|
  #   Vocab.create(word: word, wordSpanish: clima[index],wordUrl: "https://comosedice.s3.amazonaws.com/Climate/#{word}.mp3" , category: "climate")
  # end


#  cut beginning & end ÷below 
  # tiempo = tiempo.map(wr => wr[0] === " " ? wr.slice(1) : wr)
  # tiempo = tiempo.map(wr => wr[wr.length-1] === " " ? wr.slice(0,wr.length-1) : wr)
  # SEEDING TIME + URL
#   time = ["What time is it?", "It’s one a clock", "It's two a clock", "It's three a clock", "At one", "At two", "At three", "At four", "At five", "At six", "At seven", "At eight", "At nine", "At ten","At eleven", "At twelve noon", "At twelve midnight", "In the morning",  "At eight in the morning", "At dawn", "In the afternoon", "At four in the afternoon", "At night", "At eleven at night","It's half past one", "It's one fifteen", "It's one forty-five", "It's half past two", "It's two fifteen", "It's three fifteen", "It's three forty two", "Are you an early riser%3F"]
#   tiempo = ["¿Qué hora es?", "Es la una", "Son las dos", "Son las tres", "A la una", "A las dos", "A las tres", "A las cuatro", "A las cinco", "A las seis", "A las siete", "A las ocho", "A las nueve", "A las diez", "A las once", "A las doce del mediodía", "A las doce de la noche", "En el mañana", "A las ocho de la mañana", "Al amanecer", "A la tarde", "A las cuatro de la tarde", "A la noche", "A las once de la noche", "Es la una y media", "Es la una y cuarto", "Es la una cuarenta y cinco", "Son las dos y media", "Son las dos y cuarto", "Son las tres y cuarto", "Son las tres cuarenta y dos", "¿Es usted madrugador?"]
  
#  time.each_with_index do |word, index|
#     Vocab.create(word: word, wordSpanish: tiempo[index],wordUrl: "https://comosedice.s3.amazonaws.com/Time/#{word}.mp3",category: "time")
#   end
 
  # SEEDING FARM JOBS + url 
  # farmjobs = ["Farm owner", "Farmer", "Dairy farmer", "Dairy farming", "Worker", "Workers", "Foreman", "Supervisor", "Crew", "Crew boss", "Manager", "Feeder", "Milker", "Irrigator", "Pruner", "Harvester", "Tractor driver", "Mechanic"]
  # trabajos = ["Propietario de la granja", "El agricultor", "Productor de leche", "Lecheria", "El trabajador", "Los trabajadores", "El Capataz", "El Supervisor", "La Cuadrilla", "El jefe de cuadrilla", "El administrador", "El Alimentador", "El Ordeñador", "El reggador", "El Podador", "El Cosechador", "El tractorista", "El Mecánico"] 
  # farmjobs.each_with_index do |word, index|
  #   Vocab.create(word: word, wordSpanish: trabajos[index],wordUrl: "https://comosedice.s3.amazonaws.com/FarmJobs/#{word}.mp3",category: "farmjobs")
  # end


  # SEEDING DIRECTIONS
  # directions = ["Right", "Left", "Turn right", "Turn left", "Turn here", "Turn around here", "Stop", "Slow down", "Speed up", "Move forward", "Put it in neutral", "Back-up", "Stop light", "Stop Sign", "To the right", "To the left", "Straight ahead", "Go straight ahead", "Look straight ahead"]
  # direc = ["Derecha", "Izquierda", "Gire a la derecha", "Gire a la izquierda", "Gire aquí", "De la vuelta aquí", "Deténgase", "Disminuya la velocidad", "Acelere", "Marche hacia adelante", "Pongalo en neutral", "Retroceda", "Semáforo", "Rotulo de alto", "A la derecha", "A la izquierda", "Derecho", "Siga hacia adelante", "Mire hacia adelante"]
  # directions.each_with_index do |word, index|
  #   Vocab.create(word: word, wordSpanish: direc[index],wordUrl: "https://comosedice.s3.amazonaws.com/Directions/#{word}.mp3",category: "directions")
  # end

# SEED HOLIDAYS + url 
# holidays = ["Tomorrow is a holiday and we do not work", "Happy birthday", "Merry Christmas", "Happy Thanksgiving day", "Happy New Year", "Happy Easter", "My condolences", "I’m so sorry", "Best wishes", "Have a nice trip", "May you arrive well"]
# festivos = ["Mañana es feriado y no trabajamos", "Feliz cumpleaños", "Feliz Navidad", "Feliz día de Acción de Gracias", "Feliz año nuevo", "Felices Pascuas", "Mi más sentido pésame", "Lo siento mucho", "Mis mejores deseos", "Buen viaje", "Que llegues bien"]
# holidays.each_with_index do |word, index|
#   Vocab.create(word: word, wordSpanish: festivos[index],wordUrl: "https://comosedice.s3.amazonaws.com/Holidays/#{word}.mp3",category: "holidays")
# end

#SEED ANIMALS + URL 
# animals = ["Livestock", "Cow", "Calf", "Heifer", "Steer", "Bull", "Pig", "Sow", "Goat", "Sheep", "Lamb", "Buck", "Ram", "Horse", "Stallion", "Colt", "Dairy"]
# animales = ["Ganadería", "Vaca", "Ternero", "Novilla", "Novillo", "Toro", "Cerdo", "Cerda", "Cabra", "Oveja", "Cordero", "Macho", "Carnero", "Caballo", "Semental", "Potro", "Lechería"]
# animals.each_with_index do |word, index|
#   Vocab.create(word: word, wordSpanish: animales[index],wordUrl: "https://comosedice.s3.amazonaws.com/Animals/#{word}.mp3",category: "animals")
# end
  
# #SEED TOOLS + URL 
# tools = ["Ladder", "Tray", "Pruning shear", "Tractor", "Tractor driver", "Equipment", "Tool", "Hose", "Hoe", "Shovel", "Rake", "Post", "Pole", "Stake", "Wire", "Hammer", "Nail", "Screwdriver", "Screw", "Players", "Tape", "Broom", "Reach", "Tank", "Reservoir", "Barn", "Water", "This water", "Map", "This map", "Hoeing", "Cultivating"]
# herramientas = ["Escalera", "Bandeja", "Tijera de podar", "Tractor", "Conductor de tractor", "Equipo", "Herramienta", "Manguera", "Azadón", "Pala", "Rastrillo", "Poste", "Poste", "Estaca", "Alambre", "Martillo", "Clavo", "Destornillador", "Tornillo", "Jugadores", "Cinta", "Escoba", "Alcance", "Tanque ", "Depósito", "Granero", "Agua", "Esta agua", "Mapa", "Este mapa", "Cavar", "Cultivar"]
# tools.each_with_index do |word, index|
#   Vocab.create(word: word, wordSpanish: herramientas[index],wordUrl: "https://comosedice.s3.amazonaws.com/Tools/#{word}.mp3",category: "tools")
# end
  
# #SEED irrigation + URL 
# irrigation = ["Irrigation", "Drip irrigation", "Flood irrigation", "Sprinkler irrigation", "Water", "Sprinkler", "It needs to be irrigated for seven consecutive hours"]
# irrigacion = ["Riego", "Riego por goteo", "Riego por inundación", "Riego por aspersión", "Agua", "Aspersor", "Necesita ser regado por siete horas consecutivas"]
# irrigation.each_with_index do |word, index|
#   Vocab.create(word: word, wordSpanish: irrigacion[index],wordUrl: "https://comosedice.s3.amazonaws.com/Irrigation/#{word}.mp3",category: "irrigation")
# end

# #SEED office + URL 
# office = ["Have you worked here before", "Do you have a driver’s license", "Where are you going", "When will you back", "What is your address", "Where do you live", "How much do I owe you", "Do you need an advance", "I need an advance", "You have to fill out this application", "Would you want to take your vacation", "What is your social security number", "How many people can you bring", "Where shall I pick you up in the morning", "May I look at your documents", "Do you have a legal right to work"]
# officina = ["¿Has trabajado aquí antes?", "¿Tienes una licencia de conducir?", "¿A dónde vas?", "¿Cuándo volverás?", "¿Cuál es tu dirección?", "¿Dónde vives?", "¿Cuánto te debo?", "¿Necesitas un adelanto?", "Necesito un adelanto", "Tienes que llenar esta solicitud", "¿Te gustaría tomarte tus vacaciones?", "¿Cuál es tu número de seguro social?", "¿cuántas personas puedes traer?", "¿En dónde te recojo en el mañana?", "¿Puedo ver sus documentos?", "¿Tiene derecho legal a trabajar?"]
# office.each_with_index do |word, index|
#   Vocab.create(word: word, wordSpanish: officina[index],wordUrl: "https://comosedice.s3.amazonaws.com/Office/#{word}.mp3",category: "office")
# end

# #SEED QUESTIONS
# questions = ["Can you bring me", "Wil you need me", "May I show you how it is done", "Where is, How much", "How many", "Who", "When", "Why", "Where", "Where is", "Do you want", "Do you understand", "Do you understand me", "Do you understand what I explained ", "Can you hear me", "Are you listening to me", "Is there a problem", "Can you", "Could you", "Do you like", "Would you like", "Do you have", "Would you have", "Do you need", "Will you need", "Can you do it", "Could you do it", "Do you know how to do this", "Is it needed right away", "What do you need to finish the day", "What is the problem", "When will you finish", "At what time will you finish", "How much did you harvest today"]
# preguntas = ["¿Me puedes traer?", "¿Me necesitarás?", "¿Puedo mostrarte cómo se hace?", "¿Dónde est? ¿Cuánto", "Cuántos", "Quién?", "¿Cuándo?", "¿Por qué?", "¿Dónde?", "¿Dónde está?", "¿Quieres?", "¿Entiendes?", "¿Me entiendes?", "¿Entiendes lo que te expliqu? ", "¿Me escuchas?", "¿Me escuchas?", "¿Hay algún problema?", "¿Puedes?", "¿Podrías?", "¿Te gusta?", "¿Te gustaría?", "¿Tienes?", "¿Tendrías?", "¿Tu ¿Necesitas?", "¿Lo necesitarás?", "¿Puedes hacerlo?", "¿Podrías hacerlo?", "¿Sabes cómo hacerlo?", "¿Se necesita de inmediato?", "¿Qué necesitas para terminar el día?", "¿Cuál es el problema?", "¿Cuándo terminarás?", "¿A qué hora terminarás?", "¿Cuánto cosechaste hoy?"]
# questions.each_with_index do |word, index|
#   Vocab.create(word: word, wordSpanish: preguntas[index],wordUrl: "https://comosedice.s3.amazonaws.com/Questions/#{word}",category: "questions")
# end

# #SEED SEASONS
# weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Spring", "Summer", "Winter", "Fall"]
# dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Primavera", "Verano", "Invierno", "Otoño"]
# weekdays.each_with_index do |word, index|
#   Vocab.create(word: word, wordSpanish: dias[index],wordUrl: "https://comosedice.s3.amazonaws.com/Weekdays/#{word}.mp3",category: "weekdays")
# end

# #SEED MEASUREMENTS
# measurements = ["Measurement", "Inch", "Foot", "Yard", "Mile", "Ounce", "Paint", "Quart", "Gallon", "Pound", "To", "Millimeter", "Centimeter", "Meter", "Kilometer", "Acre", "Hectare", "Liter", "Kilo"]
# medidas = ["Medida", "Pulgada", "Pie", "Yarda", "Milla", "Onza", "Pintura", "Cuarto", "Galón", "Libra", "Hasta", "Milímetro", "Centímetro", "Metro", "Kilómetro", "Acre", "Hectárea", "Litro", "Kilo"]
# measurements.each_with_index do |word, index|
#   Vocab.create(word: word, wordSpanish: medidas[index],wordUrl: "https://comosedice.s3.amazonaws.com/Measurements/#{word}.mp3",category: "measurements")
# end


# SEEDING QUIZES!!!  

#PAY QUIZ HERE 
# Test.create(name: "Payments");
  
#   Question.create(question:"Como se dice Turno del atardecer?", test_id: Test.last.id)
#   options =["Day shift","Afternoon shift","Evening shift","Night shift"]
#   options.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}
#   ans = "Evening shift"
#   def updateAnswer(ans)
#   updateQ = Question.last.answers.select do |a|
#     a.answer === ans
#   end
#   updateQ[0].update(is_correct: true)
#  end
#  updateAnswer(ans)


#   Question.create(question:"Que significa 'Overtime pay'?", test_id: Test.last.id)
#   options1 = ["Pago","Horas extras", "Pago de horas extras", "Tiempo de descanso",]
#   options1.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}
  
#   ans = "Pago de horas extras"
#   updateAnswer(ans)

#   Question.create(question:"Como se dice 'Tiempo de descanso?", test_id: Test.last.id)
#   options2 =["Break time", "Take a break", "I need a break", "Lunch"]
#   options2.map{|q|  Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

#   ans = "Break time"
#   updateAnswer(ans)

#   Question.create(question:"Como se dice reloj?", test_id: Test.last.id)
#   options3 =["Watch","Clock","Time","Hour"]
#   options3.map{|q|  Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

#   ans = "Clock"
#   updateAnswer(ans)

#   Question.create(question: "Cual de las siguientes palabras no tiene que ver con salario o pago?", test_id: Test.last.id)
#   options4 =["We pay once a month","We pay every fifteen days","Here is your check","Punctual"]
#   options4.map{|q|  Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

#   ans = "Punctual"
#   updateAnswer(ans)

#   Question.create(question:"Que significa 'How many hours did you work' ", test_id: Test.last.id)
#   options5 =["No tenemos trabajo disponible","Puede venir a las siete?","¿Cuántas horas trabajó?","Stop working at five"]
#   options5.map{|q|  Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

#   ans = "¿Cuántas horas trabajó?"
#   updateAnswer(ans)
  
#   Question.create(question: "Como se dice 'Pagamos cada dos semanas'", test_id: Test.last.id)
#   options =["We pay every week","We pay every two weeks","We pay evey month","We pay by the hour"]
#   options.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

#   ans = "We pay every two weeks"
#   updateAnswer(ans)

#   #SEEDING GREETINGS QUIZ 

#   Test.create(name: "Saludos");
  
#   Question.create(question:"Como se dice 'Gusto en conocerte!?'", test_id: Test.last.id)
#   options =["I liked meeting you","Nice to meet you!","Nice seeing you","See you next week"]
#   options.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}
#   ans = "Nice to meet you!"

#   def updateAnswer(ans)
#   updateQ = Question.last.answers.select do |a|
#     a.answer === ans
#   end
#   updateQ.first.update(is_correct: true)
#   # 
#  end
#  updateAnswer(ans)

#   Question.create(question:"Como se dice 'Nos vemos mañana?' ", test_id: Test.last.id)
#   options1 = ["See you tomorrow","See you next week", "See you later", "See you tonight",]
#   options1.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}
#   ans = "See you tomorrow"
#   updateAnswer(ans)

#   Question.create(question:"Que significa 'Good night'?", test_id: Test.last.id)
#   options2 =["Hasta mañana", "Buenos dias", "Buenos tardes", "Buenos Noches"]
#   options2.map{|q|  Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

#   ans ="Buenos Noches"
#   updateAnswer(ans)

#   Question.create(question:"Que significa 'See you soon!'?", test_id: Test.last.id)
#   options3 =["Nos vemos pronto","Nos vemos hoy","Nos vemos esta tarde","Nos vemos mañana "]
#   options3.map{|q|  Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

#   ans = "Nos vemos pronto"
#   updateAnswer(ans)

#   Question.create(question: "Que significa 'You're welcome'?", test_id: Test.last.id)
#   options4 =["Gracias","Bienvenido","De nada","Bienvenido a mi casa"]
#   options4.map{|q|  Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

#   ans = "De nada"
#   updateAnswer(ans)

#   Question.create(question:"Como dirias 'Muy bien, gracias!'?", test_id: Test.last.id)
#   options5 =["cool, Thank you!","Very well, Thank you!","Thank you!","Great"]
#   options5.map{|q|  Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

#   ans = "Very well, Thank you!"
#   updateAnswer(ans)
  
#   Question.create(question: "Que sigfnica 'How have you been?'", test_id: Test.last.id)
#   options6 =["Como has estado?","Que has estado haciendo?","Que hiciste hoy","Como te sientes"]
#   options6.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

#   ans = "Como has estado?"
#   updateAnswer(ans)

  #SEEDING GREETINGS QUIZ 

  # Irrigation = [Irrigation, Drip irrigation, Flood irrigation, Sprinkler irrigation, Water, Sprinkler, It needs to be irrigated for seven consecutive hours

  #   Animales = [Livestock, Cow, Calf, Heifer,Steer, Bull, Pig, Sow(cerda), Goat, Sheep, Lamb, Buck, Ram, Horse, Stallion, Colt, Dairy]
    
  Test.create(name: "animals");
  
  Question.create(question:"Como se dice 'Vaca' en ingles?'", test_id: Test.last.id)
  options =["Cow","Chicken","Pig","Sheep"]
  options.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}
  ans = "Cow"

  def updateAnswer(ans)
  updateQ = Question.last.answers.select do |a|
    a.answer === ans
  end
  updateQ.first.update(is_correct: true)
  # 
 end
 updateAnswer(ans)

  Question.create(question:"Como se dice 'Lechera' en Ingles ", test_id: Test.last.id)
  options1 = ["Dairy Cow", "Milk", "Dairy","Livestock"]
  options1.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}
  ans = "Dairy"
  updateAnswer(ans)

  Question.create(question:"Que significa 'Livestock'?", test_id: Test.last.id)
  options2 =["Toro", "Ganado", "Vacas", "Caballos"]
  options2.map{|q|  Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

  ans ="Ganado"
  updateAnswer(ans)

  Question.create(question:"Que significa 'Irrigation'?", test_id: Test.last.id)
  options3 =["Irrigacion","Inundacion","Regar el jardin","Agua"]
  options3.map{|q|  Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

  ans = "Irrigacion"
  updateAnswer(ans)

  Question.create(question: "Como se dice 'Riego por inundación'?", test_id: Test.last.id)
  options4 =["Irrigation","Sprinkler irrigation","Flood irrigation","Drip irrigation"]
  options4.map{|q|  Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

  ans = "Flood irrigation"
  updateAnswer(ans)

  Question.create(question:"Como se dice 'Riego por goteo'?", test_id: Test.last.id)
  options5 =["Sprinkler","Sprinkler irrigation","Flood irrigation","Drip irrigation"]
  options5.map{|q|  Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

  ans = "Drip irrigation"
  updateAnswer(ans)
  
  Question.create(question: "Cual de las siguientes palabras no es un animal?'", test_id: Test.last.id)
  options6 =["Horse","Cow","Dairy","Heifer"]
  options6.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

  ans = "Dairy"
  updateAnswer(ans)
  #SEEDING GREETINGS QUIZ 

#   Test.create(name: "Saludos");
  
#   Question.create(question:"Como se dice 'Gusto en conocerte!?'", test_id: Test.last.id)
#   options =["I liked meeting you","Nice to meet you!","Nice seeing you","See you next week"]
#   options.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}
#   ans = "Nice to meet you!"

#   def updateAnswer(ans)
#   updateQ = Question.last.answers.select do |a|
#     a.answer === ans
#   end
#   updateQ.first.update(is_correct: true)
#   # 
#  end
#  updateAnswer(ans)

#   Question.create(question:"Como se dice 'Nos vemos mañana?' ", test_id: Test.last.id)
#   options1 = ["See you tomorrow","See you next week", "See you later", "See you tonight",]
#   options1.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}
#   ans = "See you tomorrow"
#   updateAnswer(ans)

#   Question.create(question:"Que significa 'Good night'?", test_id: Test.last.id)
#   options2 =["Hasta mañana", "Buenos dias", "Buenos tardes", "Buenos Noches"]
#   options2.map{|q|  Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

#   ans ="Buenos Noches"
#   updateAnswer(ans)

#   Question.create(question:"Que significa 'See you soon!'?", test_id: Test.last.id)
#   options3 =["Nos vemos pronto","Nos vemos hoy","Nos vemos esta tarde","Nos vemos mañana "]
#   options3.map{|q|  Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

#   ans = "Nos vemos pronto"
#   updateAnswer(ans)

#   Question.create(question: "Que significa 'You're welcome'?", test_id: Test.last.id)
#   options4 =["Gracias","Bienvenido","De nada","Bienvenido a mi casa"]
#   options4.map{|q|  Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

#   ans = "De nada"
#   updateAnswer(ans)

#   Question.create(question:"Como dirias 'Muy bien, gracias!'?", test_id: Test.last.id)
#   options5 =["cool, Thank you!","Very well, Thank you!","Thank you!","Great"]
#   options5.map{|q|  Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

#   ans = "Very well, Thank you!"
#   updateAnswer(ans)
  
#   Question.create(question: "Que sigfnica 'How have you been?'", test_id: Test.last.id)
#   options6 =["Como has estado?","Que has estado haciendo?","Que hiciste hoy","Como te sientes"]
#   options6.map{|q| Answer.create(question_id:Question.last.id, answer:q, is_correct: false)}

#   ans = "Como has estado?"
#   updateAnswer(ans)

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
  #  "I\"m here to see ...",
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