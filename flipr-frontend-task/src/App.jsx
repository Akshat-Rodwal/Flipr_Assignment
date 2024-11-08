
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeHeroSection from './HomeHeroSection'
import Home2 from './Home2'
import Home3 from './Home3'
import Home4 from './Home4'
import Home5 from './Home5'
import Home6 from './Home6'
import Home7 from './Home7'
import Home8 from './Home8'
import Home9 from './Home9'
import HeroBlogSection from './HeroBlogSection'
import Blog2 from './Blog2'
import Blog3 from './Blog3'
import PostDetail from './PostDetail'
import PostDetail2 from './PostDetail2'
import PostDetail3 from './PostDetail3'
import PrivacyPolicy from './PrivacyPolicy'
import ContactUs from './ContactUs'
import BusinessPage from './BusinessPage'
import BusinessPage2 from './BusinessPage2'
import AuthorPage from './AuthorPage'
import AboutUs from './AboutUs'
import AboutUs2 from './AboutUs2'
import AboutUs3 from './AboutUs3'
import AboutUs4 from './AboutUs4'

function App() {
  

  return (
    <>
    <Router>
      <Routes>

      {/* Home */}
      <Route path="/" 
      element={<>
      <HomeHeroSection/> 
      <Home2/> 
      <Home3/>
      <Home4/>
      <Home5/>
      <Home6/>
      <Home7/>
      <Home8/>
      <Home9/>
      </> }/>

      {/* Blog */}
      <Route path='/Blog'
      element={<>
      <HeroBlogSection/>
      <Blog2/>
      <Blog3/>
      <Home9/>
      </>}
      />
<Route path="/post-detail" 
element={<>
<PostDetail />
<PostDetail2/>
<PostDetail3/>
<Home9/>
</>} />
<Route path="/privacy" element={<PrivacyPolicy />} />
<Route path='/contactUs' element={<ContactUs/>}/>
<Route path="/author" element={<AuthorPage />} />
<Route path="/aboutUs" element={<><AboutUs /> <AboutUs2/> <AboutUs3/> <AboutUs4/> <Home9/></>} />
<Route path="/business" 
element={<>
<BusinessPage />
<BusinessPage2/>
</>} />
      </Routes>
      </Router>
    </>
  )
}

export default App
