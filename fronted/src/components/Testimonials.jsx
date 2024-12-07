// import React from 'react';

// const Testimonials = () => {
//   const testimonials = [
//     { name: 'Jane Doe', feedback: 'Amazing platform for skill exchange!', img: 'https://via.placeholder.com/100' },
//     { name: 'John Smith', feedback: 'I learned so much through the workshops.', img: 'https://via.placeholder.com/100' },
//   ];

//   return (
//     <section id="testimonials" className="py-16 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold text-blue-600">What Our Users Say</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//               <img
//                 src={testimonial.img}
//                 alt={testimonial.name}
//                 className="w-20 h-20 rounded-full mx-auto"
//               />
//               <p className="italic text-gray-600 mt-4">"{testimonial.feedback}"</p>
//               <h3 className="text-lg font-semibold text-blue-600 mt-4">{testimonial.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      feedback: "This platform has helped me improve my skills and connect with amazing people.",
      img: "https://via.placeholder.com/100",
    },
    {
      name: "John Smith",
      feedback: "The mentorship opportunities here are fantastic. Highly recommend it!",
      img: "https://via.placeholder.com/100",
    },
    {
      name: "Emily Clark",
      feedback: "SkillHarbour is a game-changer. I’ve learned so much from the community.",
      img: "https://via.placeholder.com/100",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2 className="section-title">What Our Users Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
