import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Instagram, Mail, Phone, Send, Menu, X } from 'lucide-react';
// import PFP from './assets/PFP.png';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }
    
  );
  

    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
      return;
    }

    console.log('Feedback saved:', formData);
    setFormData({ name: '', email: '', message: '' });
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-[#1e40af] shadow-lg z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="md:hidden flex justify-end">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'projects', 'feedback', 'contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className="text-white capitalize font-medium text-left">
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden md:flex justify-center space-x-8">
            {['home', 'about', 'projects', 'feedback', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="text-white capitalize font-medium">
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-[#1e40af] to-[#2563eb]">
        <div className="text-center animate-on-scroll px-4 sm:px-6">
          <img src="src/assets/PFP.jpg" alt="Image Not Found" className="rounded-full w-40 h-40 sm:w-60 sm:h-60 mx-auto border-4 border-white shadow-xl object-cover mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Taha Ali B.</h1>
          <h2 className="text-xl sm:text-2xl text-[#93c5fd] mb-6 animate-fade-in-loop">
  Front End Web Developer
          </h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/zack-alpha" target="_blank" className="text-white hover:text-[#93c5fd]"><Linkedin /></a>
            <a href="https://www.instagram.com/tahaaww__?igsh=a3hsbG9zcmtwd2Jj" target="_blank" className="text-white hover:text-[#93c5fd]"><Instagram /></a>
            <a href="https://github.com/taha-ali11" target="_blank" className="text-white hover:text-[#93c5fd]"><Github /></a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen bg-white flex items-center">
        <div className="container mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600"
              alt="Coding"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="animate-on-scroll text-center md:text-left">
            <h2 className="text-4xl font-bold text-[#1e40af] mb-6">About Me</h2>
            <p className="text-[#64748b] leading-relaxed text-lg">
              I’m a passionate front-end web developer with a focus on building engaging, responsive, and accessible web interfaces. I specialize in React and love crafting beautiful, functional websites.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
<section id="projects" className="min-h-screen bg-[#f8fafc] flex items-center">
  <div className="container mx-auto px-4 sm:px-6 py-16">
    <h2 className="text-4xl font-bold text-[#1e40af] text-center mb-12">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <a href="#" target="_blank" className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300 animate-on-scroll block">
        <img src="src/assets/potfolio.jpeg" alt="Portfolio Website" className="rounded-md mb-4 w-full h-40 object-cover" />
        <h3 className="text-xl font-semibold text-[#1e40af] mb-2">Portfolio Website</h3>
        <p className="text-[#64748b]">Personal portfolio built using React and Tailwind CSS.</p>
      </a>
      
      <a href="#" target="_blank" className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300 animate-on-scroll block">
        <img src="src/assets/drone.jpeg" alt="Drone Controller" className="rounded-md mb-4 w-full h-40 object-cover" />
        <h3 className="text-xl font-semibold text-[#1e40af] mb-2">Drone Controller</h3>
        <p className="text-[#64748b]">ESP8266 WiFi-controlled drone with password-protected commands.</p>
      </a>
      
      <a href="#" target="_blank" className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300 animate-on-scroll block">
        <img src="src/assets/TTT.jpeg" alt="DLD Roll Display" className="rounded-md mb-4 w-full h-40 object-cover" />
        <h3 className="text-xl font-semibold text-[#1e40af] mb-2">Roll Number Display (DLD)</h3>
        <p className="text-[#64748b]">Seven-segment display using logic gates in LTspice.</p>
      </a>

    </div>
  </div>
</section>


      {/* Feedback */}
      <section id="feedback" className="min-h-screen bg-white flex items-center">
        <div className="container mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-4xl font-bold text-[#1e40af] text-center mb-12">Share Your Feedback</h2>
          <div className="max-w-2xl mx-auto bg-[#f8fafc] p-6 sm:p-8 rounded-lg shadow-lg animate-on-scroll">
            <p className="text-center text-[#64748b] mb-8">
              I value your thoughts and suggestions! Please take a moment to share your feedback with me. 
              Your feedback helps me improve and deliver better web solutions.
            </p>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-[#f8fafc] p-8 rounded-lg shadow-lg space-y-6 animate-on-scroll">
            <input name="name" value={formData.name} onChange={handleInputChange}  placeholder="Name" className="w-full p-3 border rounded-md" />
            <input name="email" value={formData.email} onChange={handleInputChange}  placeholder="Email" className="w-full p-3 border rounded-md" />
            <textarea name="message" value={formData.message} onChange={handleInputChange}  placeholder="Message" rows={5} className="w-full p-3 border rounded-md" />
            <button type="submit" className="flex items-center justify-center w-full bg-[#1e40af] text-white py-3 rounded-md hover:bg-[#1e3a8a]">
              <Send className="mr-2" /> Send Feedback
            </button>
            {formStatus === 'success' && <p className="text-green-600 text-center">Thank you for your feedback! Your message has been received.</p>}
            {formStatus === 'error' && <p className="text-red-600 text-center">There was an error sending your feedback.Please fill in all fields.</p>}
          </form>
        </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen bg-[#f8fafc] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 py-16 grid sm:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h3 className="text-4xl font-bold text-[#1e40af] mb-6">Contact Me</h3>
            <p className="text-lg text-[#64748b] mb-6">Have a project or want to chat? Let’s connect!</p>
          </div>
          <div className="animate-on-scroll space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="text-[#2563eb]" />
              <a href="mailto:alphazack37@gmail.com" className="text-lg text-[#2563eb]">alphazack37@gmail.com</a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-[#2563eb]" />
              <a href="tel:+92304-1948319" className="text-lg text-[#2563eb]">+92304-1948319</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e40af] py-6 text-center text-white">
        <p className="text-sm sm:text-base">
          &copy; 2025 Taha Ali B. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
