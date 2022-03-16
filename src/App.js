import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

        <h3 className='py-4'>CPR ON WHEELS</h3>
        <header className="flex justify-center  p-4">
          
          <h6 className='font-bold'>Licensed Red Cross training provider</h6>
          <img src="https://charitywatch-images.sfo2.digitaloceanspaces.com/thumbnails/redcr_98f3d.jpg" />
          
        </header>

        <div className='bg-red-700 text-fuchsia-50 py-5'>

        <h1 className="text-3xl font-bold underline py-4">SAVE LIVES. <br/> LEARN CPR.</h1>

        <div>
        <div className=''>
          <form className='py-4 '>
            <h2>Get more info</h2>
            <input placeholder='enter your name' />
            <input placeholder='enter your email' />
            
          </form>

        </div>
        <button>Sign Up</button>
        </div>

        <form className='py-4'>
          <h2>Get started TODAY</h2>
          <h2><button>Click here</button> to Sign up for a class.</h2>
        </form>

        <div className='flex justify-center px-4 '> 
          <img className='w-1/2 md:w-full' src="https://thumbs.dreamstime.com/b/portrait-multi-generation-chinese-family-26098071.jpg" />
        </div>
        </div>

    </div>
  );
}

export default App;
