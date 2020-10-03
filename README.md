# ¿ Como Se Dice ?

A platform to help spanish speaking farm workers learn English. It parses Berkley’s Agricultural Personnel Management english learning resources to create a centralized and interactive location for learning English.
<pre>
           <img src="https://ccedacero.com/images/compressed/resized-comosedice.png" alt="como se dice preview" width="650"/>  
</pre>
- Live demo video can be seen [here](https://www.youtube.com/watch?v=zymhOk7uurQ&ab_channel=CristianC)  
    

### Features

- User are able to learn and practice over 300 vocabulary words and phrases by using flashcard with audio playback
- Users are able to test their skills by taking quizzes for each vocabulary card category
- Users are able to track their progress by reviewing their dashboard which contains stats for
  questions they've gotten incorrectly, alongside their weekly activity.
- Users are able to translate text from English to Spanish and Spanish to English by typing their text or by speaking it.
- Users are able to create and delete custom vocabulary cards along with their audio.

## Getting Started

If you'd like to test this version of the app on your local system you can do so by following the steps below:

1. Navigate to your desired directory and `git clone` the repo url
2. Open the backend folder and run `bundle install`
3. Start the service with `rails s`
4. Navigate to the frontend folder and type `open index.html`
5. The app will open in a new Chrome window and you should now be able to test out it's features.

## Built With
- [React JS](https://reactjs.org/) - I used React to build the user interface and to manage the flow of the app. 
- [Ruby on Rails](https://rubyonrails.org/) - I used Ruby on Rails to handle the back-end logic. 
- [Material-ui](https://material-ui.com/) - Material-ui and custom css were used for styling the app. 
- [Charts JS](https://www.chartjs.org/) - Charts JS was used to display user stats on the dashboard.
- [PostgreSQL](https://www.postgresql.org/) - PostgresSQL was used for storing all app data.
- [ActiveModelSerializers](https://github.com/rails-api/active_model_serializers) - ActiveModelSerializers were used for organizing backend API responses.
- [Google Translation API](https://cloud.google.com/translate/docs) - The Google Translate API was used to handle API English and Spanish translation.
- [React-speech-recognition](https://www.npmjs.com/package/react-speech-recognition) - React speech recognition was used to allow users to dictate translation text and translation commands. 
- [Amazon S3](https://www.npmjs.com/package/react-speech-recognition) - An Amazon S3 object was used to store audio files. 
- [Cloudinary](https://cloudinary.com/) - Cloudinary was used to store file uploads. 



## Authors

- **Cristian** - [Cristian](https://github.com/ccedacero)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
