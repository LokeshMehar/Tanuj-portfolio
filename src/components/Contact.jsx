import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = e => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Lokesh Mehar',
          from_email: form.email,
          to_email: 'imt_2022066@iiitm.ac.in',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        error => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  const inputStyles = (fieldName) => ({
    background: focusedField === fieldName 
      ? 'linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.9))'
      : 'linear-gradient(135deg, rgba(17, 24, 39, 0.6), rgba(31, 41, 55, 0.7))',
    backdropFilter: 'blur(10px)',
    border: focusedField === fieldName 
      ? '2px solid rgba(147, 51, 234, 0.6)'
      : '1px solid rgba(147, 51, 234, 0.3)',
    boxShadow: focusedField === fieldName
      ? '0 0 20px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      : '0 4px 6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
    color: '#ffffff',
    transition: 'all 0.3s ease',
  });

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl relative"
        style={{
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.4), rgba(31, 41, 55, 0.3))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(147, 51, 234, 0.2)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Animated background gradient */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(168, 85, 247, 0.05), rgba(139, 92, 246, 0.1))',
            animation: 'pulse 4s ease-in-out infinite',
          }}
        />

        <div className="relative z-10">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 flex items-center gap-2">
                {/* <span className="w-2 h-2 bg-purple-500 rounded-full"></span> */}
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                placeholder="What's your good name?"
                className="py-4 px-6 rounded-lg outline-none font-medium placeholder:text-gray-400 text-white"
                style={inputStyles('name')}
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 flex items-center gap-2">
                {/* <span className="w-2 h-2 bg-purple-500 rounded-full"></span> */}
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                placeholder="What's your web address?"
                className="py-4 px-6 rounded-lg outline-none font-medium placeholder:text-gray-400 text-white"
                style={inputStyles('email')}
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 flex items-center gap-2">
                {/* <span className="w-2 h-2 bg-purple-500 rounded-full"></span> */}
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                placeholder="What you want to say?"
                className="py-4 px-6 rounded-lg outline-none font-medium placeholder:text-gray-400 text-white resize-none"
                style={{
                  ...inputStyles('message'),
                  minHeight: '140px',
                  maxHeight: '200px',
                }}
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="relative py-4 px-8 rounded-xl outline-none w-fit text-white font-bold overflow-hidden group transition-all duration-300"
              style={{
                background: loading 
                  ? 'linear-gradient(135deg, rgba(107, 114, 128, 0.8), rgba(75, 85, 99, 0.8))'
                  : 'linear-gradient(135deg, rgba(147, 51, 234, 0.8), rgba(168, 85, 247, 0.8))',
                border: '1px solid rgba(147, 51, 234, 0.4)',
                boxShadow: loading 
                  ? '0 4px 15px rgba(0, 0, 0, 0.2)'
                  : '0 8px 25px rgba(147, 51, 234, 0.3)',
                transform: loading ? 'scale(0.98)' : 'scale(1)',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 12px 35px rgba(147, 51, 234, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 8px 25px rgba(147, 51, 234, 0.3)';
                }
              }}
            >
              {/* Button background animation */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ display: loading ? 'none' : 'block' }}
              />
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2">
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </>
                )}
              </span>
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');