# NETFLIX GPT

 - create vite app
 - configured tailwind css in vite
 - Header
 - Routing of app
 - Login form
 - Sign Up form
 - form Validation
 - useRef
 - Firebase setup
 - Deploying our app to production
 - create signUp user account
 - Implement SignIn user API
 - created our redux store with userSlice
 - Implement Sign out 
 - update profile api
 - BugFix: sign up user display name and profile picture
 - BugFix: if user is not login redirect /browse to login page and vice versa
 - unsubscribe to the onAuthState change callback
 - Add hard coded values to constant file.
 - Register TMDB API & create an app & get access token
 - Get data from TMDB now playing movies list api
 - create custom hook for nowPlayingMovies
 - updated the store with movies data
 - planning for mainContainer and Secondary container
 - fetch data for trailer video
 - update the store with trailer video
 - Embedded the Youtube video make it mute for autoplay
 - mute/unmute functionality via a toggle button.
 - direct control over a YouTube iframe is limited,
 - used the YouTube Player API via postMessage to send commands like mute and unMute
 - Built the Secondary Component
 - Built movieList
 - Built movieCard
 - TMDB image CDN URL
 - GPT search page
 - GPT search bar
 - add multi-language feature
 - openai gpt-5 nano api for search suggestion
 - search suggestion ui
 - loading spinner
 - watch page for videos
 - making them responsive

 # Features
 - Login/Sign up form
   - Sign In/Sign up Form
   - redirect tp browse Page
 - Browse (after authentication)
   - Header
   - Main Movie
     - Tailer in Background
     - Title & Description
     - MovieSuggestions
        - MovieLists * N
 - NetflixGPT 
      - Search Bar
      - Movie Suggestions      









      ## 🔧 Setup

1. Copy `.env.example` to `.env`
2. Add your Firebase config values in the `.env` file
3. Run the app

```bash
npm install
npm run dev