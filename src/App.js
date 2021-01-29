
import './App.css';
import Skills from '../src/components/Skills'



function App() {

  return (
    <div>
        <div className = 'container text-center' >
          <img  alt = 'hello' src = './profile.jpg' style = {{marginTop:'5%',width:'20%', borderRadius: '200px'}}/>
          <h4 className = 'mt-5'> Hello! I am Aung Khaing Khant </h4>

          I am  a fourth year student from <a rel = 'noreferrer' href = "https://www.miit.edu.mm" target = '_blank'>MIIT,Mandalay,</a> working as a freelance developer.
        </div>
        <div className = 'text-justify' style = {{padding: '5%', paddingTop:0}}> 
        <hr/>
        <h3>
          Contact Me:
        </h3>
         <div className = 'text-center'>
         <i className = 'fa fa-phone-square fa-lg' style = {{color:'green'}}></i>{' '}{' '}<a href = 'tel:+959453329320'>:+959453329320</a>
          {' '}{' '}
          <i style = {{color:'#3b5998'}} className = 'fa fa-facebook-square fa-lg'></i>:{' '}{' '}
          <a href = 'https://www.facebook.com/jiro.dev'>jiro.dev</a>
          {' '}{' '}
          <i style = {{color:'#0072C6'}} className = 'fa fa-envelope fa-lg'></i>:{' '}{' '}
          <a href = 'mailto:aungkhaingkhant.dev@gmail.com'>aungkhaingkhant.dev@gmail.com</a>
          {' '}{' '}
          <i style = {{color:'black'}} className = 'fa fa-github fa-lg'></i>:{' '}{' '}
          <a href = 'https://www.github.com/jironemo'>jironemo</a>
         </div>
        <hr/>
        <h3>
          Skills
        </h3>
          <Skills/>
        </div>
    </div>
    
  );
}

export default App;
